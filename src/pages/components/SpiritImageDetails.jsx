import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Chip,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Badge,
} from '@material-tailwind/react'
import { RC, HEART, AC } from '../../exports/constants'

const SpiritImageDetails = ({
  label,
  handleOpen,
  open,
  spiritImg,
  spiritCollectibles,
  seasonLabel,
  spiritTreeCost,
  noOfVisits,
}) => {
  const [activeTab, setActiveTab] = React.useState('tree-cost')
  const data = [
    {
      label: 'Tree Cost',
      value: 'tree-cost',
      desc: (
        <div className="text-center">
          {spiritTreeCost?.map((cost, index) => (
            <span
              className="inline-flex justify-center text-white text-base md:text-base"
              key={index}
            >
              {cost.candles}&nbsp;
              <img
                src={RC}
                alt="white candles"
                title="white candles"
                className="h-5"
              />
              &nbsp;|&nbsp;
              {cost.hearts || 0}&nbsp;
              <img src={HEART} alt="hearts" title="hearts" className="h-5" />
              &nbsp;| &nbsp;{cost.ascended_candles}&nbsp;
              <img
                src={AC}
                alt="ascended candles"
                title="ascended candles for wing buff"
                className="h-5"
              />
            </span>
          ))}
        </div>
      ),
    },
    {
      label: seasonLabel ? 'Visit as TS' : 'Constellation',
      value: 'visits',
      desc: (
        <div className="flex flex-wrap justify-center gap-3">
          {noOfVisits < 1 && (
            <Chip color="amber" value="No Visit Yet" className="text-[10px]" />
          )}
          {noOfVisits?.map((visit, index) => (
            <Badge
              content={`${visit.visitNo}`}
              color={`${isNaN(visit.visitNo) ? 'red' : 'green'}`}
              className="text-[9px]"
              key={index}
            >
              <Chip
                color="amber"
                value={visit.visit_date}
                className="text-[10px]"
              />
            </Badge>
          ))}
        </div>
      ),
    },
  ]
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      key={label}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      size="xs"
      className="bg-black/80 -top-12 md:top-0 border-amber-600 border-4 h-fit rounded-3xl"
    >
      <DialogHeader className=" text-white flex justify-center flex-col">
        <Typography variant="h4">{label}</Typography>
        <Typography className="text-xs">{seasonLabel}</Typography>
      </DialogHeader>
      <DialogBody className="flex flex-col items-center justify-center md:flex-row md:flex">
        <div className="flex items-center">
          <img
            src={spiritImg}
            alt={label}
            className="w-auto h-56 md:h-96 md:w-auto"
          />
        </div>
        <div>
          <h2 className="text-white text-center">Main Collectibles</h2>

          <div className="flex flex-wrap justify-center md:w-48 gap-x-2">
            {spiritCollectibles?.map((collectible, index) => (
              <div
                className="text-white flex flex-wrap justify-center items-center align-middle"
                key={index}
              >
                <img
                  src={collectible.img}
                  alt={collectible.label}
                  title={collectible.label}
                  className="h-auto md:h-16 w-10 md:w-auto max-h-16 md:max-h-16"
                />
                <div className="flex flex-row">
                  <Typography className="text-sm md:text-base">
                    {collectible.label} -{' '}
                    <span className="text-amber-500">{collectible.price}</span>
                    &nbsp;
                    {collectible.currency === 'Candles' ? (
                      <span className="inline-flex flex-wrap justify-center">
                        <img
                          src={RC}
                          alt="white candles"
                          title="white candles"
                          className="h-4 md:h-5"
                        />
                      </span>
                    ) : (
                      <span className="inline-flex flex-wrap justify-center">
                        <img
                          src={HEART}
                          alt="hearts"
                          title="hearts"
                          className="h-4 md:h-5"
                        />
                      </span>
                    )}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          {seasonLabel && (
            <div className="text-gray-300">
              <p className="text-[11px] text-center pt-2">
                Prices may vary upon arrival as TS.
              </p>
              <p className="text-[11px] text-center">
                Emote/Action total price level 1 to max
              </p>
            </div>
          )}
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center">
        <Tabs id="custom-animation" value={activeTab} className="w-full">
          <TabsHeader className=" bg-amber-500 flex items-center">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-black">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </DialogFooter>
    </Dialog>
  )
}

export default SpiritImageDetails
