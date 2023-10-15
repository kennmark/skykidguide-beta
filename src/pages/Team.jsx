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
import TeamCardContainer from './components/teamCardContainer'

const Team = () => {
  return (
    <div>
      <div className="pt-5">
        <Typography variant="h2">The Team</Typography>
      </div>
      <div className="flex justify-center py-5">
        <Card
          variant="gradient"
          className="w-80 bg-gradient-to-t from-blue-900 to-purple-900 "
        >
          <CardHeader floated={false} className="h-72">
            <LazyLoadImage
              src={kennAvatar}
              alt="profile-picture"
              effect="blur"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="white" className="mb-2">
              Kenn Mark Sabalberino
            </Typography>
            <Typography color="white" className="font-medium">
              Developer/ Freelancer
            </Typography>
            {/* <Typography className="flex justify-center">
              <a href="https://www.buymeacoffee.com/KennDev" target="_blank">
                <LazyLoadImage
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=KennDev&button_colour=068dd0&font_colour=ffffff&font_family=Comic&outline_colour=ffffff&coffee_colour=FFDD00"
                  placeholderSrc={
                    <Spinner className="h-10 w-10 text-gray-900/50" />
                  }
                  effect="blur"
                />
              </a>
            </Typography> */}
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="https://www.facebook.com/KennMDev/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
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
        <Typography variant="h4">Contributors Team</Typography>
      </div>
      <div className="flex flex-wrap justify-center pb-5">
        {team.map((contributor, index) => {
          return <TeamCardContainer {...contributor} key={index} />
        })}
      </div>

      <FaQ />
    </div>
  )
}

export default Team
