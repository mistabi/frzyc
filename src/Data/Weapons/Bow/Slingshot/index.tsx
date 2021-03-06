import { WeaponData } from 'pipeline'
import { IWeaponSheet } from '../../../../Types/weapon'
import data_gen from './data_gen.json'
import icon from './Icon.png'
import iconAwaken from './AwakenIcon.png'
const refinementVals = [36, 42, 48, 54, 60]
const weapon: IWeaponSheet = {
  ...data_gen as WeaponData,
  icon,
  iconAwaken,
  stats: () => ({
    normal_dmg_: -10,
    charged_dmg_: -10
  }),
  document: [{
    conditional: {
      key: "s",
      name: "Normal/Charged Attack Hits within 0.3s",
      maxStack: 1,
      stats: stats => ({
        // +10 to neutralize the -10
        normal_dmg_: refinementVals[stats.weapon.refineIndex] + 10,
        charged_dmg_: refinementVals[stats.weapon.refineIndex] + 10
      })
    }
  }],
}
export default weapon