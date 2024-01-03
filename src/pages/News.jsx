import { Card, Typography } from '@material-tailwind/react'
import FaQ from './FaQ'

const News = () => {
  return (
    <>
      <Typography variant="h1" className="my-10">
        News
      </Typography>

      <section className="container">
        <div className="ml-10">
          <Card
            className="pt-2 pb-4 w-11/12 pr-2"
            variant="gradient"
            color="gray"
          >
            <Typography
              variant="h4"
              className="flex justify-start pl-10 mb-5 italic"
            >
              New Feature: Difficulty Bar on Spirit's Info.
            </Typography>
            <Typography variant="h6" className="flex justify-start pl-16">
              Added Difficulty Bar on Spirit's info. Hover/Tap yung Spirit
              Reliving Difficulty Bar para malaman kung paano marelive ang isang
              spirit.
            </Typography>
          </Card>
        </div>

        <hr className="my-3 ml-10 mr-10" />
        <div className="ml-10">
          <Card
            className="pt-2 pb-4 w-11/12 pr-5"
            variant="gradient"
            color="gray"
          >
            <Typography variant="h4" className="flex justify-start pl-10 mb-5">
              <a href="https://www.youtube.com/channel/UCMEW5-zYyUKzdrFd86hJtag">
                @SKYKIDTulongGabay - Youtube Channel
              </a>{' '}
            </Typography>
            <Typography variant="h6" className="flex justify-start pl-16">
              Please like and subscribe ang youtube channel. Ito ay malaking
              tulong na po sa amin. I-click
              <a href="https://www.youtube.com/channel/UCMEW5-zYyUKzdrFd86hJtag">
                &nbsp;@SKYKIDTulongGabay - Youtube Channel
              </a>
            </Typography>
          </Card>
        </div>
      </section>

      <FaQ />
    </>
  )
}

export default News
