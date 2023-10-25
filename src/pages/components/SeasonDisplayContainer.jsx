import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  Tooltip,
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'

const SeasonDisplayContainer = ({
  id,
  name,
  time_duration,
  icon_route,
  page_route,
  season_spirits,
  spirit_num,
  wl_num,
  quick_info,
}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  console.log(season_spirits)
  return (
    <>
      <Tooltip
        content={
          <div className="block text-center">
            <Typography>{name}</Typography>
            <Typography>{time_duration}</Typography>
          </div>
        }
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <div className="rounded-full h-20 bg-[#000c18] transition ease-in-out duration-500 hover:bg-light-blue-900/20 shadow-md shadow-blue-500 hover:shadow-xl hover:shadow-deep-orange-600 cursor-pointer">
          <LazyLoadImage
            src={icon_route}
            alt={name}
            width={80}
            effect="blur"
            className="p-1"
            onClick={handleOpen}
          />
        </div>
      </Tooltip>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        key={name}
      >
        <Card
          className="mx-auto w-full max-w-[24rem]"
          color="gray"
          variant="gradient"
        >
          <CardHeader
            variant="gradient"
            color="amber"
            className="mb-4 grid h-44 place-items-center text-center p-2"
          >
            <div className="block">
              <LazyLoadImage
                src={icon_route}
                alt={name}
                title={name}
                width={40}
                effect="blur"
              />
              <Typography variant="h3" color="black">
                {name}
              </Typography>
              <Typography variant="small" color="blue" className="font-bold">
                {time_duration}
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="paragraph" color="amber">
              Quick Note:
            </Typography>
            <p>{quick_info}</p>

            <Typography variant="paragraph" color="amber">
              No. of Spirits ({spirit_num})
            </Typography>
            <Typography variant="paragraph" color="amber">
              {wl_num && `No. of Winged Lights sa New Map (${wl_num})`}
            </Typography>
            <div className="flex flex-nowrap justify-center items-center">
              {season_spirits?.map((spirit) => {
                return (
                  <Tooltip
                    content={spirit.spirit_name}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    key={spirit.spirit_id}
                    className="z-[10000]"
                  >
                    <div>
                      <LazyLoadImage
                        src={spirit.spirit_img}
                        alt={spirit.spirit_name}
                        // title={spirit.spirit_name}
                        effect="blur"
                        className="p-1"
                      />
                    </div>
                  </Tooltip>
                )
              })}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Link
              to={`/${page_route}`}
              className=" text-blue-gray-900"
              key={id}
            >
              <Button
                size="lg"
                variant="gradient"
                fullWidth
                className="bg-gradient-to-r rounded-tl-none rounded-bl-none from-purple-900 to-blue-900 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 hover:shadow-lg"
              >
                Pasok
              </Button>
            </Link>
            <Typography variant="small" className="mt-6 flex justify-center">
              Bisitahin ang page ng
              <span className="ml-2 font-bold text-light-blue-600">{name}</span>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}

export default SeasonDisplayContainer
