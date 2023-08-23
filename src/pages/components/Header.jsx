import { MegaMenu } from 'primereact/megamenu'
import { InputText } from 'primereact/inputtext'
import skykidhelpguidelogo from './../../assets/images/favicon/android-chrome-192x192.png'

const Header = () => {
  const items = [
    {
      label: 'News',
    },
    {
      label: 'Message',
    },
    {
      label: 'Developer',
    },
    {
      label: 'Events',
    },
    {
      label: 'Seasons',
      items: [
        [
          {
            label: 'Seasons Noong 2019',
            items: [
              { label: 'Season Of Gratitude' },
              { label: 'Season Of Lightseekers' },
              { label: 'Season Of Belonging' },
            ],
          },
          {
            label: 'Seasons Noong 2020',
            items: [
              { label: 'Season Of Rythm' },
              { label: 'Season Of Enchantment' },
              { label: 'Season Of Sanctuary' },
              { label: 'Season Of Prophecy' },
            ],
          },
        ],
        [
          {
            label: 'Seasons Noong 2021',
            items: [
              { label: 'Season Of Dreams' },
              { label: 'Season Of Assembly' },
              { label: 'Season Of The Little Prince' },
              { label: 'Season Of The Little Flight' },
            ],
          },
          {
            label: 'Seasons Noong 2022',
            items: [
              { label: 'Season Of Abyss' },
              { label: 'Season Of Performance' },
              { label: 'Season Of Shattering' },
              { label: 'Season Of Aurora' },
            ],
          },
        ],
        [
          {
            label: 'Seasons Ngayong 2023',
            items: [
              { label: 'Season Of Remembrance' },
              { label: 'Season Of Passage' },
              { label: 'Season Of Moments' },
            ],
          },
        ],
      ],
    },
  ]
  const start = (
    <a href="#home">
      <img alt="logo" src={skykidhelpguidelogo} height="40" className="mr-2" />
    </a>
  )
  const end = (
    <InputText placeholder="Saliksik..." type="text" className="w-full" />
  )
  return (
    <div className="card">
      <MegaMenu
        model={items}
        orientation="horizontal"
        start={start}
        end={end}
        breakpoint="960px"
      />
    </div>
  )
}

export default Header
