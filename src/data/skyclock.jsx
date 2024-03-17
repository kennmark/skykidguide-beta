import {
  BeakerIcon,
  CircleStackIcon,
  LifebuoyIcon,
  SparklesIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/solid'
import Geyser from '../pages/components/GeyserContainer'
import Grandma from '../pages/components/GrandmaContainer'
import Turtle from '../pages/components/TurtleContainer'
import Fireworks from '../pages/components/FireworksContainer'
import AuroraConcert from '../pages/components/AuroraConcertContainer'

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
  {
    label: 'Aurora Concert',
    value: 'aurora-concert',
    icon: MusicalNoteIcon,
    desc: <AuroraConcert />,
  },
]
