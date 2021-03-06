import card from './Character_Sucrose_Card.jpg'
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
import { absorbableEle } from '../dataUtil'
import { Translate } from '../../../Components/Translate'
import { chargedDocSection, conditionalHeader, normalDocSection, normalSrc, plungeDocSection, sgt, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
import ColorText from '../../../Components/ColoredText'
import { KeyPath } from '../../../Util/KeyPathUtil'
import { FormulaPathBase } from '../../formula'
const path = KeyPath<FormulaPathBase, any>().character.Sucrose
const tr = (strKey: string) => <Translate ns="char_Sucrose_gen" key18={strKey} />
const char: ICharacterSheet = {
  name: tr("name"),
  cardImg: card,
  thumbImg: thumb,
  thumbImgSide: thumbSide,
  bannerImg: banner,
  rarity: data_gen.star,
  elementKey: "anemo",
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
        sections: [
          normalDocSection(tr, formula, data),
          chargedDocSection(tr, formula, data, 50),
          plungeDocSection(tr, formula, data),
        ],
      },
      skill: {
        name: tr("skill.name"),
        img: skill,
        sections: [{
          text: tr("skill.description"),
          fields: [{
            text: "Skill DMG",
            formulaText: stats => <span>{data.skill.press[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.press,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "CD",
            value: "15s"
          }]
        }]
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: "DoT",
            formulaText: stats => <span>{data.burst.dot[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.dot,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: "Duration",
            value: "6s"
          }, {
            text: "CD",
            value: "20s"
          }, {
            text: "Energy Cost",
            value: "80"
          }],
          conditional: { // Absorption
            key: "q",
            name: "Elemental Absorption",
            states: Object.fromEntries(absorbableEle.map(eleKey => [eleKey, {
              name: <ColorText color={eleKey}>{sgt(`element.${eleKey}`)}</ColorText>,
              fields: [{
                canShow: stats => {
                  const [num, condEleKey] = stats.conditionalValues?.character?.Sucrose?.q ?? []
                  return !!num && condEleKey === eleKey
                },
                text: "Absorption DoT",
                formulaText: stats => <span>{data.burst.dmg_[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats, eleKey), stats)}</span>,
                formula: formula.burst[eleKey],
                variant: eleKey
              }]
            }]))
          },
        }, {
          conditional: { // Absorption
            key: "c6",
            partyBuff: "partyAll",
            header: conditionalHeader("constellation6", tr, c6),
            description: tr("constellation6.description"),
            name: "Elemental Absorption",
            canShow: stats => stats.constellation >= 6,
            states: Object.fromEntries(absorbableEle.map(eleKey => [eleKey, {
              name: <ColorText color={eleKey}>{sgt(`element.${eleKey}`)}</ColorText>,
              stats: { [`${eleKey}_dmg_`]: 20 }
            }]))
          },
        }]
      },
      passive1: {
        name: tr("passive1.name"),
        img: passive1,
        sections: [{
          text: tr("passive1.description"),
          conditional: {
            key: "a1",
            canShow: stats => stats.ascension >= 4,
            partyBuff: "partyOnly",
            header: conditionalHeader("passive1", tr, passive1),
            description: tr("passive1.description"),
            name: "When Sucrose triggers a Swirl reaction",
            fields: [{
              text: <ColorText color="warning">This Team buff currently does not work. please add the EM manually to the characer.</ColorText>
            }]
          }
        }]
      },
      passive2: {
        name: tr("passive2.name"),
        img: passive2,
        sections: [{
          text: tr("passive2.description"),
          conditional: {
            key: "a4",
            canShow: stats => stats.ascension >= 4,
            partyBuff: "partyOnly",
            header: conditionalHeader("passive2", tr, passive2),
            description: tr("passive2.description"),
            name: "When Skill hits opponent",
            stats: {
              modifiers: { eleMas: [path.passive2.em()] },
            },
            fields: [{
              text: "Elemental Mastery Bonus",
              formulaText: stats => <span>20% {Stat.printStat("eleMas", stats, true)}</span>,
              formula: formula.passive2.em
            }, {
              text: sgt("duration"),
              value: 8,
              unit: "s"
            }]
          }
        }]
      },
      passive3: talentTemplate("passive3", tr, passive3),
      constellation1: talentTemplate("constellation1", tr, c1),
      constellation2: talentTemplate("constellation2", tr, c2),
      constellation3: talentTemplate("constellation3", tr, c3, "skillBoost"),
      constellation4: talentTemplate("constellation4", tr, c4),
      constellation5: talentTemplate("constellation5", tr, c5, "burstBoost"),
      constellation6: talentTemplate("constellation6", tr, c6),
    },
  },
};
export default char;
