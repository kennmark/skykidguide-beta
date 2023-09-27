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
  Spinner,
} from '@material-tailwind/react'
import VideoModalContainer from './VideoModalContainer'
import TextPopOver from './TextPopOver'
import SpiritDifficultyLevelProgressBar from './SpiritDifficultyLevelProgressBar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { TextGuideModal } from './TextGuideModal'

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
  difficulty_types,
}) => {
  const [openVideoModal, setOpenVideoModal] = useState(false)
  const [openTextModal, setOpenTextModal] = useState(false)
  const handleVideoGuideOpen = () => setOpenVideoModal(!openVideoModal)
  const handleTextGuideOpen = () => setOpenTextModal(!openTextModal)

  const iconUrl = icon_route ?? ''
  const seasonLabel = season ?? ''
  const videoUrl = spirit_guide_video_url ?? ''
  const constellationIconUrl = constellation_icon_route ?? ''
  const spiritDirection = spirit_direction ?? ''

  return (
    <Card
      color="gray"
      variant="gradient"
      className="lg:w-72 w-80 rounded-3xl justify-between mb-5"
    >
      <CardHeader shadow={false} color="transparent" className="card-header">
        <span className="icon-badge">
          <LazyLoadImage
            src={iconUrl || constellationIconUrl}
            alt={seasonLabel}
            title={seasonLabel}
            width={35}
            placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
            effect="blur"
          />
        </span>
        <LazyLoadImage
          src={spirit_img_url}
          alt={spirit_name}
          title={spirit_name}
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="w-auto h-14 m-auto"
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
        <Typography className="mb-2 italic text-sm">{seasonLabel}</Typography>
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
              className="rounded-full text-gray-200 bg-blue-900/80"
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
              className="rounded-full text-gray-200  bg-blue-900/80"
            />
          </Tooltip>
        </span>
        <span className="flex justify-center gap-2 pb-4 px-2">
          <SpiritDifficultyLevelProgressBar
            difficultyTypes={difficulty_types}
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
            onClick={handleVideoGuideOpen}
          >
            Video Guide
          </Button>
          <Button
            onClick={handleTextGuideOpen}
            className="bg-gradient-to-r rounded-tl-none rounded-bl-none from-purple-900 to-blue-900 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 hover:shadow-lg"
          >
            Text Guide
          </Button>
        </ButtonGroup>

        <VideoModalContainer
          handleOpen={handleVideoGuideOpen}
          open={openVideoModal}
          spirit_guide_video_url={videoUrl}
          spirit_name={spirit_name}
        />
        <TextGuideModal
          spiritDirection={spiritDirection}
          handleOpen={handleTextGuideOpen}
          open={openTextModal}
          spirit_name={spirit_name}
        />
      </CardBody>
    </Card>
  )
}

export default SpiritCardContainer
