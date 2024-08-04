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
        <div class="flex items-center gap-4">
          <button
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
            Previous
          </button>
          <div class="flex items-center gap-2">
            <button
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                1
              </span>
            </button>
            <button
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                2
              </span>
            </button>
            <button
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                3
              </span>
            </button>
            <button
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                4
              </span>
            </button>
            <button
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                5
              </span>
            </button>
          </div>
          <button
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      <FaQ />
    </>
  )
}

export default News
