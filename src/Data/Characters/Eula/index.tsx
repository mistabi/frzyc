import card from './Character_Eula_Card.png'
import thumb from './Icon.png'
import thumbSide from './IconSide.png'
import banner from './Banner.png'
import c1 from './constellation1.png'
import c2 from './constellation2.png'
import c3 from './constellation3.png'
import c4 from './constellation4.png'
import c5 from './constellation5.png'
import c6 from './constellation6.png'
import skill from './skill.png'
import burst from './burst.png'
import passive1 from './passive1.png'
import passive2 from './passive2.png'
import passive3 from './passive3.png'
import Stat from '../../../Stat'
import formula, { data } from './data'
import data_gen from './data_gen.json'
import { getTalentStatKey, getTalentStatKeyVariant } from '../../../Build/Build'
import { ICharacterSheet } from '../../../Types/character'
import { Translate } from '../../../Components/Translate'
import { claymoreChargedDocSection, normalSrc, plungeDocSection, sgt, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
const tr = (strKey: string) => <Translate ns="char_Eula_gen" key18={strKey} />
const Eula = (strKey: string) => <Translate ns="char_Eula" key18={strKey} />
const char: ICharacterSheet = {
  name: tr("name"),
  cardImg: card,
  thumbImg: thumb,
  thumbImgSide: thumbSide,
  bannerImg: banner,
  rarity: data_gen.star,
  elementKey: "cryo",
  weaponTypeKey: data_gen.weaponTypeKey as WeaponTypeKey,
  gender: "F",
  constellationName: tr("constellationName"),
  title: tr("title"),
  baseStat: data_gen.base,
  baseStatCurve: data_gen.curves,
  ascensions: data_gen.ascensions,
  talent: {
    formula,
    sheets: {
      auto: {
        name: tr("auto.name"),
        img: normalSrc(data_gen.weaponTypeKey as WeaponTypeKey),
        sections: [{
          text: tr("auto.fields.normal"),
          fields: data.normal.hitArr.map((percentArr, i) =>
          ({
            text: <span>{sgt(`normal.hit${i + 1}`)} {i === 2 || i === 4 ? <span>(<Translate ns="sheet" key18="hits" values={{ count: 2 }} />)</span> : ""}</span>,
            formulaText: stats => <span>{percentArr[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
            formula: formula.normal[i],
            variant: stats => getTalentStatKeyVariant("normal", stats),
          }))
        },
        claymoreChargedDocSection(tr, formula, data),
        plungeDocSection(tr, formula, data)],
      },
      skill: {
        name: tr("skill.name"),
        img: skill,
        sections: [{
          text: tr("skill.description"),
          fields: [{
            text: sgt("press.dmg"),
            formulaText: stats => <span>{data.skill.pressDMG[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.pressDMG,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: sgt("press.cd"),
            value: data.skill.cdPress,
            unit: "s"
          }, {
            text: sgt("hold.dmg"),
            formulaText: stats => <span>{data.skill.holdDMG[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.holdDMG,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: sgt("hold.cd"),
            value: stats => stats.constellation >= 2 ? data.skill.cdPress : data.skill.cdHold,
            unit: "s"
          },],
          conditional: {
            key: "e",
            name: Eula("skillC.name"),
            states: {
              g: {//grimheart
                name: Eula("skillC.grimheart.name"),
                stats: { def_: 30 },
                fields: [{
                  text: Eula("skillC.grimheart.int"),
                }, {
                  text: tr("skill.grimheartDuration"),
                  value: "18s"
                }, {
                  text: sgt("maxStacks"),
                  value: 2
                }]
              },
              c: {//consumed
                name: Eula("skillC.consumed"),
                stats: stats => ({
                  cryo_enemyRes_: -data.skill.cyroResDec[stats.tlvl.skill],
                  physical_enemyRes_: -data.skill.cyroResDec[stats.tlvl.skill],
                }),
                fields: [{
                  text: sgt("duration"),
                  value: "7s"
                }]
              }
            }
          },
        }, {
          fields: [{
            text: tr("skill.brandDMG"),
            formulaText: stats => <span>{data.skill.brandDMG[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.brandDMG,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }],
        }],
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: sgt("burstDMG"),
            formulaText: stats => <span>{data.burst.dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.dmg,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: sgt("cd"),
            value: data.burst.cd,
            unit: "s"
          }, {
            text: sgt("energyCost"),
            value: data.burst.cost,
          }, {
            text: sgt("duration"),
            value: 7,
            unit: "s"
          }],
          conditional: {
            key: "q",
            name: Eula("burstC.name"),
            states: Object.fromEntries([...Array(31).keys()].map(i =>
              [i, {
                name: i === 0 ? sgt("baseDMG") : <Translate ns="sheet" key18="stack" values={{ count: i }} />,
                fields: [{//above 50%
                  text: <span>{Eula("burstC.name")} {i === 0 ? sgt("baseDMG") : <Translate ns="sheet" key18="stack" values={{ count: i }} />}</span>,
                  canShow: stats => {
                    if (i < 5 && stats.constellation >= 6) return false
                    const [stacks, stateKey] = stats.conditionalValues?.character?.Eula?.q ?? []
                    return !!stacks && stateKey === i.toString()
                  },
                  formulaText: stats => {
                    const val = i === 0 ? <span>{data.burst.baseDMG[stats.tlvl.burst]}%</span> : <span>( {data.burst.baseDMG[stats.tlvl.burst]}% + {i} * {data.burst.stackDMG[stats.tlvl.burst]}% )</span>
                    const statKey = getTalentStatKey("burst", stats, "physical")
                    return <span>{val} {Stat.printStat(statKey, stats)}</span>
                  },
                  formula: formula.burst[i],
                  variant: stats => getTalentStatKeyVariant("burst", stats, "physical"),
                }, {//below 50%
                  text: <span>{Eula("burstC.name")} {i === 0 ? sgt("baseDMG") : <Translate ns="sheet" key18="stack" values={{ count: i }} />} <Translate ns="sheet" key18="lessPercentHP" values={{ percent: 50 }} /></span>,
                  canShow: stats => {
                    if (stats.constellation < 4) return false
                    if (i < 5 && stats.constellation >= 6) return false
                    const [stacks, stateKey] = stats.conditionalValues?.character?.Eula?.q ?? []
                    return !!stacks && stateKey === i.toString()
                  },
                  formulaText: stats => {
                    const val = i === 0 ? <span>{data.burst.baseDMG[stats.tlvl.burst]}%</span> : <span>( {data.burst.baseDMG[stats.tlvl.burst]}% + {i} * {data.burst.stackDMG[stats.tlvl.burst]}% )</span>
                    const hitModeMultiKey = stats.hitMode === "avgHit" ? "skill_avgHit_base_multi" : stats.hitMode === "critHit" ? "critHit_base_multi" : ""
                    return <span>{val} {Stat.printStat("finalATK", stats)} * {(hitModeMultiKey ? <span>{Stat.printStat(hitModeMultiKey, stats)} * </span> : "")}( {Stat.printStat("physical_burst_hit_base_multi", stats)} + 25%) * {Stat.printStat("enemyLevel_multi", stats)} * {Stat.printStat("physical_enemyRes_multi", stats)}</span>
                  },
                  formula: formula.burst[`${i}_50`],
                  variant: stats => getTalentStatKeyVariant("burst", stats, "physical"),
                }, {
                  canShow: stats => stats.constellation >= 6,
                  text: Eula("burstC.start5")
                }, {
                  canShow: stats => stats.constellation >= 6,
                  text: Eula("burstC.addStacks")
                }]
              }])),
          },
        }],
      },
      passive1: {
        name: tr("passive1.name"),
        img: passive1,
        sections: [{
          text: tr("passive1.description"),
          fields: [{
            canShow: stats => stats.ascension >= 1,
            text: Eula("passive1"),
            formulaText: stats => <span>50% * {data.burst.baseDMG[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats, "physical"), stats)}</span>,
            formula: formula.passive1.dmg,
            variant: stats => getTalentStatKeyVariant("burst", stats, "physical")
          }, {//below 50% hp
            canShow: stats => stats.constellation >= 4,
            text: <span>{Eula("passive1")} <Translate ns="sheet" key18="lessPercentHP" values={{ percent: 50 }} /></span>,
            formulaText: stats => {
              const hitModeMultiKey = stats.hitMode === "avgHit" ? "skill_avgHit_base_multi" : stats.hitMode === "critHit" ? "critHit_base_multi" : ""
              return <span>50% * {data.burst.baseDMG[stats.tlvl.burst]}% {Stat.printStat("finalATK", stats)} * {(hitModeMultiKey ? <span>{Stat.printStat(hitModeMultiKey, stats)} * </span> : "")}( {Stat.printStat("physical_burst_hit_base_multi", stats)} + 25%) * {Stat.printStat("enemyLevel_multi", stats)} * {Stat.printStat("physical_enemyRes_multi", stats)}</span>
            },
            formula: formula.passive1.dmg50,
            variant: stats => getTalentStatKeyVariant("burst", stats, "physical")
          }]
        }],
      },
      passive2: talentTemplate("passive2", tr, passive2),
      passive3: talentTemplate("passive3", tr, passive3),
      constellation1: {
        name: tr("constellation1.name"),
        img: c1,
        sections: [{
          text: tr("constellation1.description"),
          conditional: {
            key: "c1",
            name: Eula("c1C.name"),
            canShow: stats => stats.constellation >= 1,
            stats: {
              physical_dmg_: 30
            },
            fields: [{
              text: sgt("duration"),
              value: Eula("c1C.durationStack"),
            }]
          }
        }]
      },
      constellation2: talentTemplate("constellation2", tr, c2),
      constellation3: talentTemplate("constellation3", tr, c3, "burstBoost"),
      constellation4: talentTemplate("constellation4", tr, c4),
      constellation5: talentTemplate("constellation5", tr, c5, "skillBoost"),
      constellation6: talentTemplate("constellation6", tr, c6),
    }
  }
};
export default char;
