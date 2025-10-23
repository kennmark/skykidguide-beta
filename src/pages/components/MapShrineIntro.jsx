import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Card,
} from '@material-tailwind/react'
import {
  MS_COUNT_DATE_UPDATED,
  TOTAL_MS_COUNT,
  ISLE_NUM_MAP_SHRINES,
  PRAIRIE_NUM_MAP_SHRINES,
  FOREST_NUM_MAP_SHRINES,
  VALLEY_NUM_MAP_SHRINES,
  WASTELAND_NUM_MAP_SHRINES,
  VAULT_NUM_MAP_SHRINES,
  EDEN_NUM_MAP_SHRINES,
  MS_HOME,
  AVIARY_NUM_MAP_SHRINES,
} from '../../exports/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MAP_SHRINE } from '../../exports/defaultImages'

const MapShrineIntro = () => {
  return (
    <div className="justify-start w-full">
      <div>
        <Typography variant="h1" className="py-5 text-[#fe7f2d]">
          Map Shrines
        </Typography>
        <Typography className="leading-8 py-5 px-10">
          Ang Map Shrines (MS) ay nagsisilbing gabay upang makita sa mapa ng
          buong Sky ang mga{' '}
          <span className="font-extrabold text-[#fe7f2d]">
            lokasyon ng mga Winged Lights
          </span>{' '}
          na hindi pa nakukuha at ang{' '}
          <span className="font-extrabold text-[#fe7f2d]">Daily Quests</span> na
          bagong feature ngayon na nakatakda sa araw na ito ay maari mo na din
          dito makita. May{' '}
          <span className="font-extrabold text-[#fe7f2d]">
            {TOTAL_MS_COUNT} Map Shrines
          </span>{' '}
          na makukuha sa buong Pitong (7) Realms kasama ang mga Season Maps as
          of{' '}
          <span className="font-extrabold text-[#fe7f2d]">
            {MS_COUNT_DATE_UPDATED}
          </span>{' '}
          sa iOS at Android OS .
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <Card className="py-3 px-1">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Source
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Count
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 p-3">Old Home</td>
                <td className="border border-slate-700 p-3">{MS_HOME}</td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">Aviary Village</td>
                <td className="border border-slate-700 p-3">
                  {AVIARY_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  MS in Isle of Dawn
                </td>
                <td className="border border-slate-700 p-3">
                  {ISLE_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  MS in Daylight Prairie
                </td>
                <td className="border border-slate-700 p-3">
                  {PRAIRIE_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  MS in Hidden Forest
                </td>
                <td className="border border-slate-700 p-3">
                  {FOREST_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  MS in Valley of Triumph
                </td>
                <td className="border border-slate-700 p-3">
                  {VALLEY_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  MS in Golden Wasteland
                </td>
                <td className="border border-slate-700 p-3">
                  {WASTELAND_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  MS in Vault of Knowledge
                </td>
                <td className="border border-slate-700 p-3">
                  {VAULT_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  MS in Eye of Eden
                </td>
                <td className="border border-slate-700 p-3">
                  {EDEN_NUM_MAP_SHRINES}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 font-bold p-3">
                  MS TOTAL
                </td>
                <td className="border border-slate-700 font-bold text-[#fe7f2d] p-3">
                  {TOTAL_MS_COUNT}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
        <LazyLoadImage src={MAP_SHRINE} className="pl-5 h-80" />
      </div>
    </div>
  )
}

export default MapShrineIntro
