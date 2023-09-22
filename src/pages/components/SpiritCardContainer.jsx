import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  ButtonGroup,
  Chip,
  Tooltip,
  Progress,
} from '@material-tailwind/react'
import VideoModalContainer from './VideoModalContainer'
import TextPopOver from './TextPopOver'
import SpiritDifficultyLevelProgressBar from './SpiritDifficultyLevelProgressBar'

const SpiritCardContainer = ({
  spirit_img_url,
  spirit_name,
  spirit_direction,
  spirit_guide_video_url,
  spirit_category,
  spirit_relive_type,
  season,
  icon_route,
  constellation_icon_route,
  difficulty_level,
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
  const constellationIconUrl = constellation_icon_route ?? ''

  return (
    <Card
      color="gray"
      variant="gradient"
      className="lg:w-72 w-80 rounded-3xl justify-between"
    >
      <CardHeader shadow={false} color="transparent" className="card-header">
        <span className="icon-badge">
          <img
            src={iconUrl || constellationIconUrl}
            alt={seasonLabel}
            title={seasonLabel}
            width={35}
          />
        </span>
        <img
          src={spirit_img_url}
          alt={spirit_name}
          title={spirit_name}
          className="w-auto h-14 m-auto shadow-filter"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="amber"
          className="mb-2 flex justify-center items-center"
        >
          <span>{spirit_name}</span>
        </Typography>
        <Typography variant="h6" color="white" className="mb-2">
          {seasonLabel}
        </Typography>
        <span className="flex justify-center gap-2 pb-4 px-2">
          <Tooltip
            content="Type of Expression"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Chip
              value={spirit_category}
              color="indigo"
              className="rounded-full text-gray-200"
              variant="gradient"
            />
          </Tooltip>
          <Tooltip
            content="Way of Reliving Spirit"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Chip
              color="indigo"
              value={spirit_relive_type}
              className="rounded-full text-gray-200"
              variant="gradient"
            />
          </Tooltip>
        </span>
        <span className="flex justify-center gap-2 pb-4 px-2">
          <SpiritDifficultyLevelProgressBar
            difficulty_level={difficulty_level}
            difficulty_label={
              difficulty_level <= 25
                ? 'Easy'
                : difficulty_level <= 50
                ? 'Average'
                : difficulty_level <= 90
                ? 'Hard'
                : 'Need Veteran'
            }
          />
        </span>
        <ButtonGroup size="md" ripple={true} fullWidth={true}>
          <Button
            className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 hover:shadow-lg"
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
