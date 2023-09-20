import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  ButtonGroup,
} from '@material-tailwind/react'
import VideoModalContainer from './VideoModalContainer'
import TextPopOver from './TextPopOver'

const SpiritCardContainer = ({
  spirit_img_url,
  spirit_name,
  spirit_direction,
  spirit_guide_video_url,
  season,
  icon_route,
}) => {
  const [open, setOpen] = useState(false)
  const [openPopover, setOpenPopover] = useState(false)
  const handleOpen = () => setOpen(!open)

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  }

  const iconUrl = icon_route ?? ''
  const seasonLabel = season ?? ''
  const videoUrl = spirit_guide_video_url ?? ''
  return (
    <Card
      color="gray"
      variant="gradient"
      className="lg:w-72 w-80 justify-around rounded-3xl"
    >
      <CardHeader shadow={false} color="transparent" floated={false}>
        <img
          src={spirit_img_url}
          alt={spirit_name}
          title={spirit_name}
          className="w-auto h-14 m-auto"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="amber"
          className="mb-2 flex justify-center items-center"
        >
          <span>
            <img
              src={iconUrl}
              alt={seasonLabel}
              title={seasonLabel}
              width={35}
            />
          </span>
          <span>{spirit_name}</span>
        </Typography>
        <Typography variant="h6" color="white" className="mb-2">
          {seasonLabel}
        </Typography>
        <ButtonGroup size="md" ripple={true} fullWidth={true}>
          <Button
            className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg shadow-indigo-500/50 hover:scale-[1.02] hover:shadow-indigo-500 hover:shadow-lg"
            onClick={handleOpen}
          >
            Video Direction
          </Button>
          <TextPopOver
            openPopover={openPopover}
            setOpenPopover={setOpenPopover}
            triggers={triggers}
            spirit_direction={spirit_direction}
          />
        </ButtonGroup>

        <VideoModalContainer
          handleOpen={handleOpen}
          open={open}
          spirit_guide_video_url={videoUrl}
          spirit_name={spirit_name}
        />
      </CardBody>
    </Card>
  )
}

export default SpiritCardContainer
