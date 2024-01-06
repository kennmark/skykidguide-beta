import {
  BeakerIcon,
  CircleStackIcon,
  LifebuoyIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'
import Geyser from '../pages/components/GeyserContainer'
import Grandma from '../pages/components/GrandmaContainer'
import Turtle from '../pages/components/TurtleContainer'
import Fireworks from '../pages/components/FireworksContainer'

export const skyclock = [
  {
    label: 'Geyser',
    value: 'geyser',
    icon: BeakerIcon,
    desc: <Geyser />,
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
  {
    label: 'Fireworks',
    value: 'fireworks',
    icon: SparklesIcon,
    desc: <Fireworks />,
  },
]
