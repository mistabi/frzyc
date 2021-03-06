import card from './Character_Chongyun_Card.jpg'
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
import { claymoreChargedDocSection, conditionalHeader, normalDocSection, normalSrc, plungeDocSection, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
const tr = (strKey: string) => <Translate ns="char_Chongyun_gen" key18={strKey} />
const char: ICharacterSheet = {
  name: tr("name"),
  cardImg: card,
  thumbImg: thumb,
  thumbImgSide: thumbSide,
  bannerImg: banner,
  rarity: data_gen.star,
  elementKey: "cryo",
  weaponTypeKey: data_gen.weaponTypeKey as WeaponTypeKey,
  gender: "M",
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
        sections: [
          normalDocSection(tr, formula, data),
          claymoreChargedDocSection(tr, formula, data),
          plungeDocSection(tr, formula, data)
        ],
      },
      skill: {
        name: tr("skill.name"),
        img: skill,
        sections: [{
          text: tr("skill.description"),
          fields: [{
            text: "Skill DMG",
            formulaText: stats => <span>{data.skill.dmg[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.dmg,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "Infusion Duration",
            value: stats => `${data.skill.infusionDuration[stats.tlvl.skill]}s`,
          }, {
            text: "Field Duration",
            value: "10s",
          }, {
            text: "CD",
            value: "15s",
          }],
          conditional: {
            key: "e",
            partyBuff: "partyAll",
            header: conditionalHeader("skill", tr, skill),
            description: tr("skill.description"),
            name: "All Sword, Claymore and Polearm-wielding characters within Frost Field",
            stats: stats => ({
              infusionAura: "cryo",
              ...(stats.ascension >= 1 ? { atkSPD_: 8 } : {})
            })
          }
        }, {
          conditional: { // Rimechaser Blade
            key: "a4",
            canShow: stats => stats.ascension >= 4,
            name: "Opponents hit by Rimechase Blade",
            stats: { cryo_enemyRes_: -10 },
            fields: [{
              text: "Duration",
              value: "8s",
            }]
          },
        }],
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: "Skill DMG",
            formulaText: stats => <span>{data.burst.dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.dmg,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: "CD",
            value: "12s",
          }, {
            text: "Energy Cost",
            value: 40,
          }, {
            text: "Spirit Blades Summoned",
            value: stats => stats.constellation < 6 ? 3 : 4
          }],
          conditional: { // Rally of Four Blades
            key: "c6",
            canShow: stats => stats.constellation >= 6,
            name: "Enemy with lower MaxHP% than Chongyun",
            stats: { burst_dmg_: 15 }
          }
        }],
      },
      passive1: talentTemplate("passive1", tr, passive1),
      passive2: {
        name: tr("passive2.name"),
        img: passive2,
        sections: [{
          text: tr("passive2.description"),
          fields: [{
            canShow: stats => stats.ascension >= 4,
            text: "Summoned Sword DMG",
            formulaText: stats => <span>{data.skill.dmg[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.passive2.dmg,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }]
        }],
      },
      passive3: talentTemplate("passive3", tr, passive3),
      constellation1: {
        name: tr("constellation1.name"),
        img: c1,
        sections: [{
          text: tr("constellation1.description"),
          fields: [{
            canShow: stats => stats.constellation >= 1,
            text: "Ice Blade DMG",
            formulaText: stats => <span>50% {Stat.printStat(getTalentStatKey("elemental", stats), stats)}</span>,
            formula: formula.constellation1.dmg,
            variant: stats => getTalentStatKeyVariant("elemental", stats),
          }]
        }]
      },
      constellation2: talentTemplate("constellation2", tr, c2),
      constellation3: talentTemplate("constellation3", tr, c3, "burstBoost"),
      constellation4: talentTemplate("constellation4", tr, c4),
      constellation5: talentTemplate("constellation5", tr, c5, "skillBoost"),
      constellation6: talentTemplate("constellation6", tr, c6),
    },
  },
};
export default char;
