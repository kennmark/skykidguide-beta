import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Spinner,
} from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

const TeamCardContainer = ({
  fullname,
  facebook,
  instagram,
  tiktok,
  title,
  avatar_img,
}) => {
  return (
    <Card
      variant="gradient"
      className="sm:w-56 bg-indigo-900 bg-opacity-0 hover:bg-opacity-70 transition ease-in-out duration-500"
    >
      <CardHeader
        floated={false}
        className="h-80 md:h-48 rounded-2xl md:rounded-full grayscale hover:grayscale-0"
      >
        <LazyLoadImage src={avatar_img} alt="avatar" effect="blur" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" color="white" className="mb-2">
          {fullname}
        </Typography>
        <Typography color="white" className="text-xs">
          {title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href={facebook}
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-7"
              color="white"
              cursor="pointer"
            />
          </Typography>
        </Tooltip>
        {instagram && (
          <Tooltip content="Follow">
            <Typography
              as="a"
              href={instagram}
              className="opacity-80 transition-opacity hover:opacity-100 text-sm"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                color="white"
                cursor="pointer"
              />
            </Typography>
          </Tooltip>
        )}

        {tiktok && (
          <Tooltip content="Follow">
            <Typography
              as="a"
              href={tiktok}
              className="opacity-80 transition-opacity hover:opacity-100 text-sm"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                color="white"
                cursor="pointer"
              />
            </Typography>
          </Tooltip>
        )}
      </CardFooter>
    </Card>
  )
}

export default TeamCardContainer
