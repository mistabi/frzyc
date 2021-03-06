import card from './Character_Xiao_Card.jpg'
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
import { getTalentStatKey, getTalentStatKeyVariant } from "../../../Build/Build"
import { ICharacterSheet } from '../../../Types/character'
import { Translate } from '../../../Components/Translate'
import { chargedDocSection, normalSrc, plungeDocSection, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
const tr = (strKey: string) => <Translate ns="char_Xiao_gen" key18={strKey} />
const char: ICharacterSheet = {
  name: tr("name"),
  cardImg: card,
  thumbImg: thumb,
  thumbImgSide: thumbSide,
  bannerImg: banner,
  rarity: data_gen.star,
  elementKey: "anemo",
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
          {
            text: tr("auto.fields.normal"),
            fields: data.normal.hitArr.map((percentArr, i) =>
            ({
              text: `${i + 1}-Hit DMG`,
              formulaText: stats => <span>{percentArr[stats.tlvl.auto]}%{(i === 0 || i === 3) ? " × 2" : ""} {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
              formula: formula.normal[i],
              variant: stats => getTalentStatKeyVariant("normal", stats),
            }))
          },
          chargedDocSection(tr, formula, data, 25),
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
            formulaText: stats => <span>{data.skill.hit[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.hit,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "CD",
            value: "10s",
          }, {
            text: "Charges",
            value: stats => stats.constellation >= 1 ? "2 + 1" : `2`,
          }]
        }],
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: "Normal/Charged/Plunging Attack DMG Bonus",
            value: stats => <span>{data.burst.atk_bonus[stats.tlvl.burst]}%</span>,
          }, {
            text: "Duration",
            value: "15s",
          }, {
            text: "CD",
            value: "18s",
          }, {
            text: "Energy Cost",
            value: 70,
          }],
          conditional: { // BaneOfAllEvil
            key: "q",
            name: "Bane of All Evil",
            stats: stats => ({
              infusionSelf: "anemo",
              normal_dmg_: data.burst.atk_bonus[stats.tlvl.burst],
              charged_dmg_: data.burst.atk_bonus[stats.tlvl.burst],
              plunging_dmg_: data.burst.atk_bonus[stats.tlvl.burst],
            })
          },
        }],
      },
      passive1: {
        name: tr("passive1.name"),
        img: passive1,
        sections: [{
          text: tr("passive1.description"),
          conditional: { // TamerofDemons
            key: "a1q",
            canShow: stats => stats.ascension >= 1,
            name: <span>While under the effects of <b>Bane of All Evil</b></span>,
            maxStack: 5,
            stats: { dmg_: 5 }
          },
        }],
      },
      passive2: {
        name: tr("passive2.name"),
        img: passive2,
        sections: [{
          text: tr("passive2.description"),
          conditional: { // HeavenFall
            key: "a4",
            canShow: stats => stats.ascension >= 4,
            name: <span>Using <b>Lemniscatic Wind Cycling</b></span>,
            maxStack: 3,
            stats: { skill_dmg_: 15 }
          },
        }],
      },
      passive3: talentTemplate("passive3", tr, passive3),
      constellation1: talentTemplate("constellation1", tr, c1),
      constellation2: {
        name: tr("constellation2.name"),
        img: c2,
        sections: [{
          text: tr("constellation2.description"),
          conditional: { // BlossomofKaleidos
            key: "c2",
            canShow: stats => stats.constellation >= 2,
            name: "When in party but not on the field",
            stats: { enerRech_: 25 }
          },
        }],
      },
      constellation3: talentTemplate("constellation3", tr, c3, "skillBoost"),
      constellation4: {
        name: tr("constellation4.name"),
        img: c4,
        sections: [{
          text: tr("constellation4.description"),
          conditional: { // ExtinctionofSuffering
            key: "c4",
            canShow: stats => stats.constellation >= 4,
            name: "HP falls below 50%",
            stats: { def_: 100 }
          }
        }],
      },
      constellation5: talentTemplate("constellation5", tr, c5, "burstBoost"),
      constellation6: talentTemplate("constellation6", tr, c6),
    },
  },
};
export default char;
