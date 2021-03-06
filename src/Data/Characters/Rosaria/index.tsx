import card from './Character_Rosaria_Card.png'
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
import { conditionalHeader, normalSrc, plungeDocSection, sgt, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
import { KeyPath } from '../../../Util/KeyPathUtil'
import { FormulaPathBase } from '../../formula'
const path = KeyPath<FormulaPathBase, any>().character.Rosaria
const tr = (strKey: string) => <Translate ns="char_Rosaria_gen" key18={strKey} />
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
            text: <span>{sgt(`normal.hit${i + (i < 5 ? 1 : 0)}`)} {i === 4 ? "(1)" : i === 5 ? "(2)" : i === 2 ? <span>(<Translate ns="sheet" key18="hits" values={{ count: 2 }} />)</span> : ""}</span>,
            formulaText: stats => <span>{percentArr[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
            formula: formula.normal[i],
            variant: stats => getTalentStatKeyVariant("normal", stats),
          }))
        }, {
          text: tr("auto.fields.charged"),
          fields: [{
            text: sgt("charged.dmg"),
            formulaText: stats => <span>{data.charged.dmg[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
            formula: formula.charged.dmg,
            variant: stats => getTalentStatKeyVariant("charged", stats),
          }, {
            text: sgt("charged.stamina"),
            value: 25,
          }]
        },
        plungeDocSection(tr, formula, data)],
      },
      skill: {
        name: tr("skill.name"),
        img: skill,
        sections: [{
          text: tr("skill.description"),
          fields: [{
            text: <span>{sgt("skillDMG")} 1</span>,
            formulaText: stats => <span>{data.skill.hit1[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.hit1,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: <span>{sgt("skillDMG")} 2</span>,
            formulaText: stats => <span>{data.skill.hit2[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.hit2,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: sgt("cd"),
            value: "6s",
          }],
        }],
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: <span>{sgt("burstDMG")} 1</span>,
            formulaText: stats => <span>{data.burst.hit1[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.hit1,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: <span>{sgt("burstDMG")} 2</span>,
            formulaText: stats => <span>{data.burst.hit2[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.hit2,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: sgt("dot"),
            formulaText: stats => <span>{data.burst.dot[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.dot,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: sgt("duration"),
            value: "8s",
          }, {
            text: sgt("cd"),
            value: "15s",
          }, {
            text: sgt("energyCost"),
            value: 60,
          }],
          conditional: { // DivineRetribution
            key: "c6",
            canShow: stats => stats.constellation >= 6,
            partyBuff: "partyAll",
            header: conditionalHeader("constellation6", tr, c6),
            description: tr("constellation6.description"),
            name: <Translate ns="char_Rosaria" key18="c6" />,
            stats: { physical_enemyRes_: -20 },
            fields: [{
              text: sgt("duration"),
              value: 10,
              unit: "s"
            }]
          }
        }],
      },
      passive1: {
        name: tr("passive1.name"),
        img: passive1,
        sections: [{
          text: tr("passive1.description"),
          conditional: { // ReginaProbationum
            key: "a1",
            canShow: stats => stats.ascension >= 1,
            name: <Translate ns="char_Rosaria" key18="a1" />,
            stats: { critRate_: 12 },
            fields: [{
              text: sgt("duration"),
              value: "5s"
            }]
          },
        }],
      },
      passive2: {
        name: tr("passive2.name"),
        img: passive2,
        sections: [{
          text: tr("passive2.description"),
          conditional: { // ShadowSamaritan
            key: "a4",
            canShow: stats => stats.ascension >= 4,
            partyBuff: "partyOnly",
            header: conditionalHeader("passive2", tr, passive2),
            description: tr("passive2.description"),
            name: <Translate ns="char_Rosaria" key18="a4.name" />,
            stats: {
              modifiers: { critRate_: [path.passive2.critConv()] },
            },
            fields: [{
              text: <Translate ns="char_Rosaria" key18="a4.text" />,
              formulaText: stats => <span>15% * {Stat.printStat("critRate_", stats)}</span>,
              formula: formula.passive2.critConv,
              fixed: 1,
              unit: "%"
            }, {
              text: sgt("duration"),
              value: "10s",
            }]
          },
        }],
      },
      passive3: talentTemplate("passive3", tr, passive3),
      constellation1: {
        name: tr("constellation1.name"),
        img: c1,
        sections: [{
          text: tr("constellation1.description"),
          conditional: { // UnholyRevelation
            key: "c1",
            canShow: stats => stats.constellation >= 1,
            name: <Translate ns="char_Rosaria" key18="c1" />,
            stats: { normal_dmg_: 10, atkSPD_: 10 },
            fields: [{
              text: sgt("duration"),
              value: "4s"
            }]
          },
        }],
      },
      constellation2: talentTemplate("constellation2", tr, c2),
      constellation3: talentTemplate("constellation3", tr, c3, "skillBoost"),
      constellation4: talentTemplate("constellation4", tr, c4),
      constellation5: talentTemplate("constellation5", tr, c5, "burstBoost"),
      constellation6: talentTemplate("constellation6", tr, c6),
    },
  },
};
export default char;