import {
  Card,
  Typography,
  CardFooter,
  CardBody,
  Button,
} from '@material-tailwind/react'
import FaQ from './FaQ'
import { newsData } from '../data/newsData'

const News = () => {
  return (
    <>
      <Typography variant="h1" className="my-10">
        News
      </Typography>
      <section className="container grid justify-items-center gap-5">
        {newsData
          .slice()
          .reverse()
          .map((news) => (
            <Card
              className="pt-2 pb-4 w-11/12 pr-5"
              variant="gradient"
              color="gray"
            >
              <CardBody>
                <Typography variant="h4" className="text-left  mb-5">
                  {news.newsTitle}
                </Typography>

                <Typography variant="h6" className="text-left pl-5">
                  {news.newsBody}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 flex justify-start pl-10">
                <a href={news.newsLink} target="_blank">
                  <Button className="bg-gradient-to-r rounded-lg from-purple-900 to-blue-900 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 hover:shadow-lg">
                    Read More
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
      </section>

      <FaQ />
    </>
  )
}

export default News
