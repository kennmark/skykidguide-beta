import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Card,
} from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MAP_SHRINE } from '../exports/defaultImages'
import { isleOfDawn } from '../data/isleOfDawnData'
import { prairie } from '../data/prairieData'
import { hiddenForest } from '../data/forestData'
import { valley } from '../data/valleyData'
import { wasteland } from '../data/wastelandData'
import { vault } from '../data/vaultData'
import { eden } from '../data/edenData'
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
} from '../exports/constants'
import CardContainer from './components/CardContainer'

const PageMapShrines = () => {
  const [open, setOpen] = useState(0)

  const isle_ms = isleOfDawn[3].map_shrines
  const prarie_ms = prairie[3].map_shrines
  const hiddenForest_ms = hiddenForest[3].map_shrines
  const valley_ms = valley[3].map_shrines
  const wasteland_ms = wasteland[3].map_shrines
  const vault_ms = vault[3].map_shrines
  const eden_ms = eden[3].map_shrines

  // console.log(isle_wl)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className="flex justify-center">
      <div>
        <SideBarContainer />
      </div>
      <div className="justify-start w-full">
        <div>
          <Typography variant="h1" className="py-5">
            Map Shrines
          </Typography>
          <Typography className="leading-8 py-5 px-10">
            Ang Map Shrines (MS) ay nagsisilbing gabay upang makita sa mapa ng
            buong Sky ang mga lokasyon ng mga Winged Lights na hindi pa
            nakukuha. May{' '}
            <span className="font-extrabold text-amber-500">
              {TOTAL_MS_COUNT} Map Shrines
            </span>{' '}
            na makukuha sa buong Pitong (7) Realms kasama ang mga Season Maps as
            of{' '}
            <span className="font-extrabold text-amber-500">
              {MS_COUNT_DATE_UPDATED}
            </span>{' '}
            sa iOS at Android OS .
          </Typography>
        </div>
        <div className="flex flex-wrap justify-center">
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
                  <td className="border border-slate-700 font-bold text-amber-600 p-3">
                    {TOTAL_MS_COUNT}
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          <LazyLoadImage src={MAP_SHRINE} className="pl-5 h-80" />
        </div>
        <div className="p-5">
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              Isle of Dawn - {ISLE_NUM_MAP_SHRINES} Map Shrines
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {isle_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              Daylight Prairie - {PRAIRIE_NUM_MAP_SHRINES} Map Shrines
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {prarie_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              Hidden Forest - {FOREST_NUM_MAP_SHRINES} Map Shrines
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {hiddenForest_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              Valley of Triumph - {VALLEY_NUM_MAP_SHRINES} Map Shrines
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {valley_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors ${
                open === 5
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              Golden Wasteland - {WASTELAND_NUM_MAP_SHRINES} Map Shrines
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {wasteland_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              Vault of Knowledge - {VAULT_NUM_MAP_SHRINES} Map Shrines
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {vault_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 7}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors ${
                open === 7
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              Eye of Eden - {EDEN_NUM_MAP_SHRINES} Map Shrines
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {eden_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default PageMapShrines
