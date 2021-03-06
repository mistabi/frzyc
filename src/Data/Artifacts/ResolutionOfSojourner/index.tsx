import flower from './flower.png'
import plume from './plume.png'
import sands from './sands.png'
import goblet from './goblet.png'
import circlet from './circlet.png'
import { IArtifactSheet } from '../../../Types/artifact'
const artifact: IArtifactSheet = {
  name: "Resolution of Sojourner", rarity: [3, 4],
    icons: {
    flower,
    plume,
    sands,
    goblet,
    circlet
  },
  setEffects: {
    2: {
            stats: { atk_: 18 }
    },
    4: {
            stats: { charged_critRate_: 30 }
    }
  }
}
export default artifact