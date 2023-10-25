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
      className="w-80 bg-gradient-to-t from-blue-900 to-purple-900 m-2"
    >
      <CardHeader floated={false} className="h-72">
        <LazyLoadImage src={avatar_img} alt="avatar" effect="blur" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="white" className="mb-2">
          {fullname}
        </Typography>
        <Typography color="white" className="font-medium">
          {title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            href={facebook}
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color="white"
              cursor="pointer"
            />
          </Typography>
        </Tooltip>
        {instagram && (
          <Tooltip content="Follow">
            <Typography
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
