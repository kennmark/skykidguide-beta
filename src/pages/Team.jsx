import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Spinner,
} from '@material-tailwind/react'
import FaQ from './FaQ'
import kennAvatar from '../assets/images/team/kenndev.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { team } from '../data/team'
import { skyPhFbTeam } from '../data/skyPhFbTeam'
import TeamCardContainer from '../pages/components/TeamCardContainer'

const Team = () => {
  return (
    <div>
      <div className="pt-5 mt-6">
        <Typography variant="h2">The Team</Typography>
        <Typography className="mt-4">
          Ang Skykid: Tuloy & Gabay ay binubuo ng isang grupo na mula sa SKY:
          Children of The Light (Philippines). Ako naman ay si Kenn ang gumawa
          ng website na ito.
        </Typography>
      </div>
      <div className="flex justify-center py-5 ">
        <Card className="sm:w-56 bg-transparent team-avatar-card">
          <CardHeader
            floated={false}
            className="h-48 rounded-2xl md:rounded-full"
          >
            <LazyLoadImage
              src={kennAvatar}
              alt="profile-picture"
              effect="blur"
              className="avatar-image"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h6" color="white" className="mb-2">
              Kenn Mark Sabalberino
            </Typography>
            <Typography color="white" className="font-medium text-xs">
              Developer / Admin SkyPH
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-3 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="https://www.facebook.com/KennMDev/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="white"
                  className="h-7"
                />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="https://www.instagram.com/skyhex27/"
                className="opacity-80 transition-opacity hover:opacity-100 text-sm"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
              </Typography>
            </Tooltip>
            <Tooltip content="Star">
              <Typography
                as="a"
                href="https://github.com/kennmark"
                className="opacity-80 transition-opacity hover:opacity-100 text-sm"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
      <div className="py-5">
        <Typography
          variant="h4"
          as="a"
          color="amber"
          href="https://www.facebook.com/groups/skycotlphofficial"
        >
          SkyPH Facebook Group Team
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center pb-5">
        {skyPhFbTeam.map((skyphTeam, index) => {
          return (
            <div className="px-5">
              <TeamCardContainer {...skyphTeam} key={index} />
            </div>
          )
        })}
      </div>
      <div className="py-5">
        <Typography variant="h4" color="amber">
          Contributors Team
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center pb-5">
        {team.map((contributor, index) => {
          return (
            <div className="px-5">
              <TeamCardContainer {...contributor} key={index} />
            </div>
          )
        })}
      </div>
      <div>
        Special Credits: for the GIFs{' '}
        <a href="https://www.behance.net/hongximing40a5">Joerdan Carney</a> and
        the spirit images and their collectibles from{' '}
        <a href="https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light_Wiki">
          Sky: Children of the Light Wiki
        </a>
      </div>
      <FaQ />
    </div>
  )
}

export default Team
