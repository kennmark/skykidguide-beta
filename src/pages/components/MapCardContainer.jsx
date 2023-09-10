import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
  Badge,
} from '@material-tailwind/react'

const MapCardContainer = ({
  id,
  title,
  subtitle,
  img,
  alt,
  group,
  caption,
  pageRoute,
  num_of_wls,
  num_of_reg_spirits,
  num_of_season_spirits,
  num_of_map_shrines,
}) => {
  return (
    <div className="sm:px-4 my-3">
      <Card className={`${group} max-w-[20rem] p-8 w-96 justify-end`}>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-5 rounded-none border-b border-white/10 pb-8 text-center "
        >
          <Typography className="mt-1 flex justify-center gap-1 text-7xl font-normal">
            <span>
              <img src={img} alt={alt} width={75} />
            </span>
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-bold uppercase"
          >
            {title}
          </Typography>
          <Typography
            color="white"
            className="bg-gradient-to-r from-purple-500/0 via-blue-900 to-purple-500/0 py-1 shadow-lg"
          >
            {subtitle}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  color="amber"
                  content={num_of_wls}
                  className="shadow-lg shadow-black/20 text-indigo-900 font-extrabold"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value="Wing Lights"
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  color="amber"
                  content={num_of_reg_spirits}
                  className="shadow-lg shadow-black/20 text-indigo-900 font-extrabold"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value="Regular Spirits"
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  color="amber"
                  content={num_of_season_spirits}
                  className="shadow-lg shadow-black/20 text-indigo-900 font-extrabold"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value="Season Spirits"
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  color="amber"
                  content={num_of_map_shrines}
                  className="shadow-lg shadow-black/20 text-indigo-900 font-extrabold"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value="Map Shrines"
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
            </li>
          </ul>
          <Typography color="white" className="py-4">
            {caption}
          </Typography>
        </CardBody>
        <CardFooter className="p-0">
          <Button
            size="lg"
            color="gray"
            className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg shadow-indigo-500/50 hover:scale-[1.02] hover:shadow-indigo-500 hover:shadow-xl"
            ripple={true}
            fullWidth={true}
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              Pasok
            </div>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MapCardContainer
