import {
  BeakerIcon,
  CircleStackIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/solid'
import GeyserContainer from '../pages/components/GeyserContainer'
import Grandma from '../pages/components/GrandmaContainer'
import Turtle from '../pages/components/TurtleContainer'

export const skyclock = [
  {
    label: 'Geyser',
    value: 'geyser',
    icon: BeakerIcon,
    desc: <GeyserContainer />,
  },
  {
    label: 'Grandma',
    value: 'grandma',
    icon: CircleStackIcon,
    desc: <Grandma />,
  },

  {
    label: 'Turtle',
    value: 'turtle',
    icon: LifebuoyIcon,
    desc: <Turtle />,
  },
]
