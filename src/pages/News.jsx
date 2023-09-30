import { Typography } from '@material-tailwind/react'
import FaQ from './FaQ'

const News = () => {
  return (
    <>
      <Typography variant="h1" className="my-10">
        News
      </Typography>

      <div className="container">
        <div className=" ">
          <Typography variant="h3" className="flex justify-start pl-10 mb-5">
            New Feature: Difficulty Bar on Spirit's Info.
          </Typography>
          <Typography variant="h6" className="flex justify-start pl-16">
            Added Difficulty Bar on Spirit's info. Hover/Tap yung Spirit
            Reliving Difficulty Bar para malaman kung paano marelive ang isang
            spirit.
          </Typography>
        </div>
      </div>

      <FaQ />
    </>
  )
}

export default News
