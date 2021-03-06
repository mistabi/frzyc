import card from './Character_Fischl_Card.jpg'
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
import { normalDocSection, normalSrc, plungeDocSection, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
import ColorText from '../../../Components/ColoredText'
const tr = (strKey: string) => <Translate ns="char_Fischl_gen" key18={strKey} />

const char: ICharacterSheet = {
  name: tr("name"),
  cardImg: card,
  thumbImg: thumb,
  thumbImgSide: thumbSide,
  bannerImg: banner,
  rarity: data_gen.star,
  elementKey: "electro",
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
          {
            text: tr("auto.fields.charged"),
            fields: [{
              text: `Aimed Shot DMG`,
              formulaText: stats => <span>{data.charged.aimedShot[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
              formula: formula.charged.aimShot,
              variant: stats => getTalentStatKeyVariant("charged", stats),
            }, {
              text: `Fully-Charged Aimed Shot DMG`,
              formulaText: stats => <span>{data.charged.fullAimedShot[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats, "electro"), stats)}</span>,
              formula: formula.charged.fullAimedShot,
              variant: stats => getTalentStatKeyVariant("charged", stats, "electro"),
            }, {
              canShow: stats => stats.ascension >= 1,
              text: <span>Full Aimed Shot on Oz <ColorText color="electro">AoE</ColorText></span>,
              formulaText: stats => <span>152.7% * {data.charged.fullAimedShot[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats, "electro"), stats)}</span>,
              formula: formula.charged.fullAimedShotOz,
              variant: stats => getTalentStatKeyVariant("charged", stats, "electro"),
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
            text: "Oz's ATK DMG",
            formulaText: stats => <span>{data.skill.oz[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.oz,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "Summoning DMG",
            formulaText: stats => <span>{data.skill.dmg[stats.tlvl.skill]}%{stats.constellation >= 2 ? " + 200%" : ""} {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.dmg,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            canShow: stats => stats.constellation >= 6,
            text: "Attack with Active Character",
            formulaText: stats => <span>30% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.activeChar,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "Duration",
            value: stats => stats.constellation < 6 ? "10s" : "10s + 2s",
          }, {
            text: "CD",
            value: "25s",
          }, {
            canShow: stats => stats.constellation >= 2,
            text: "AoE Increase",
            value: "50%",
          }]
        }],
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: "Falling Thunder DMG",
            formulaText: stats => <span>{data.burst.dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.dmg,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            canShow: stats => stats.constellation >= 4,
            text: "Additional AoE Damage",
            formulaText: stats => <span>222% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.addDmg,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            canShow: stats => stats.constellation >= 4,
            text: "HP Recovered",
            formulaText: stats => <span>( 20% {Stat.printStat("finalHP", stats)} ) * {Stat.printStat("heal_multi", stats)}</span>,
            formula: formula.burst.regen,
            variant: "success"
          }, {
            text: "CD",
            value: "15s",
          }, {
            text: "Energy Cost",
            value: 60,
          },]
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
            text: "Thundering Retribution",
            formulaText: stats => <span>80% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
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
            text: "Joint Attack DMG",
            formulaText: stats => <span>22% {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
            formula: formula.constellation1.dmg,
            variant: stats => getTalentStatKeyVariant("normal", stats),
          }]
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
