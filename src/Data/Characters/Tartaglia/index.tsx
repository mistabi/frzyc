import card from './Character_Tartaglia_Card.png'
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
import { bowChargedDocSection, conditionalHeader, normalDocSection, normalSrc, plungeDocSection, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
const tr = (strKey: string) => <Translate ns="char_Tartaglia_gen" key18={strKey} />
const char: ICharacterSheet = {
  name: tr("name"),
  cardImg: card,
  thumbImg: thumb,
  thumbImgSide: thumbSide,
  bannerImg: banner,
  rarity: data_gen.star,
  elementKey: "hydro",
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
          bowChargedDocSection(tr, formula, data, "hydro"),
          {
            text: tr(`auto.fields.riptide`),
            fields: [{
              text: `Riptide Flash DMG (3 Hits)`,
              formulaText: stats => <span>{data.riptide.flash[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("normal", stats, "hydro"), stats)}</span>,
              formula: formula.normal.flash,
              variant: stats => getTalentStatKeyVariant("normal", stats, "hydro"),
            }, {
              text: `Riptide Burst DMG`,
              formulaText: stats => <span>{data.riptide.burst[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("normal", stats, "hydro"), stats)}</span>,
              formula: formula.normal.burst,
              variant: stats => getTalentStatKeyVariant("normal", stats, "hydro"),
            }]
          },
          plungeDocSection(tr, formula, data)
        ],
      },
      skill: {
        name: tr("skill.name"),
        img: skill,
        sections: [{
          text: tr("skill.description"),
          fields: [{
            text: "Stance Change DMG",
            formulaText: stats => <span>{data.skill.skillDmg[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.skillDmg,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          },
          ...data.skill.hitArr.map((percentArr, i) => ({
            text: `${i + (i < 6 ? 1 : 0)}${i > 4 ? `.${i - 4}` : ""}-Hit DMG`,
            formulaText: stats => <span>{percentArr[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("normal", stats, "hydro"), stats)}</span>,
            formula: formula.skill[i],
            variant: stats => getTalentStatKeyVariant("normal", stats, "hydro"),
          })), {
            text: `Charged 1-Hit DMG`,
            formulaText: stats => <span>{data.skill.charged1[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("charged", stats, "hydro"), stats)}</span>,
            formula: formula.skill.charged1,
            variant: stats => getTalentStatKeyVariant("charged", stats, "hydro"),
          }, {
            text: `Charged 2-Hit DMG`,
            formulaText: stats => <span>{data.skill.charged2[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("charged", stats, "hydro"), stats)}</span>,
            formula: formula.skill.charged2,
            variant: stats => getTalentStatKeyVariant("charged", stats, "hydro"),
          }, {
            text: `Charged Attack Stamina Cost`,
            value: 20,
          }, {
            text: `Riptide Slash DMG`,
            formulaText: stats => <span>{data.riptide.slash[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.slash,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: `Duration`,
            value: `30s`,
          }, {
            text: `Preemptive End CD`,
            value: stats => stats.constellation < 1 ? `6-36s` : `6-36s - 20%`,
          }, {
            text: `CD`,
            value: stats => stats.constellation < 1 ? `45s` : `45s - 20%`,
          }],
        }],
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: "Skill DMG: Melee",
            formulaText: stats => <span>{data.burst.melee[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.melee,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: "Skill DMG: Ranged",
            formulaText: stats => <span>{data.burst.ranged[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.ranged,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: `Riptide Blast DMG`,
            formulaText: stats => <span>{data.riptide.blast[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.blast,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: "CD",
            value: "15s"
          }, {
            text: "Energy Cost",
            value: 60,
          }, {
            text: "Energy Return (Ranged)",
            value: 20,
          }],
        }],
      },
      passive1: talentTemplate("passive1", tr, passive1),
      passive2: talentTemplate("passive2", tr, passive2),
      passive3: {
        name: tr("passive3.name"),
        img: passive3,
        sections: [{
          conditional: {
            key: "pas",
            partyBuff: "partyOnly",
            maxStack: 0,
            header: conditionalHeader("passive3", tr, passive3),
            description: tr("passive3.description"),
            name: tr("passive3.name"),
            stats: { autoBoost: 1 }
          }
        }],
      },
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
