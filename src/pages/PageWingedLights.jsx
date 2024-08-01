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
import { WINGED_LIGHT } from '../exports/defaultImages'
import { isleOfDawn } from '../data/isleOfDawnData'
import { prairie } from '../data/prairieData'
import { hiddenForest } from '../data/forestData'
import { valley } from '../data/valleyData'
import { wasteland } from '../data/wastelandData'
import { vault } from '../data/vaultData'
import { eden } from '../data/edenData'
import { seasons2022 } from '../data/seasons'
import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  WB_TRAVELING_SPIRITS,
  WB_REGULAR_SPIRITS,
  WL_COUNT,
  ISLE_NUM_WL,
  PRAIRIE_NUM_WL,
  FOREST_NUM_WL,
  VALLEY_NUM_WL,
  WASTELAND_NUM_WL,
  VAULT_NUM_WL,
  EDEN_NUM_WL,
  SHARDS_WL,
  ORBIT_WL,
} from '../exports/constants'
import CardContainer from './components/CardContainer'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'

const PageWingedLights = () => {
  const [open, setOpen] = useState(0)

  const isle_wl = isleOfDawn[2].winged_lights
  const prarie_wl = prairie[2].winged_lights
  const hiddenForest_wl = hiddenForest[2].winged_lights
  const valley_wl = valley[2].winged_lights
  const wasteland_wl = wasteland[2].winged_lights
  const vault_wl = vault[2].winged_lights
  const eden_wl = eden[2].winged_lights
  const shards_wl = seasons2022[2].winged_lights

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
            Winged Lights
          </Typography>
          <Typography className="leading-8 py-5 px-10">
            Ang Winged Lights (WL) ay nagbibigay ng kakayahan upang tumaas ang
            Wing Power at Wing Level ng isang Skykid. May dalawang (2) paraan
            upang magkaroon ng mataas na wing power at wing level ng isang
            Skykid. Unang (1st) paraan, ay kolektahin ang lahat ng winged lights
            na makikita sa buong Sky Kingdom. May{' '}
            <span className="font-extrabold text-amber-500">{WL_COUNT} WL</span>{' '}
            na makukuha sa buong Pitong (7) Realms kasama ang mga Season Maps as
            of{' '}
            <span className="font-extrabold text-amber-500">
              {WL_COUNT_DATE_UPDATED}
            </span>{' '}
            sa iOS at Android OS . Pangalawang (2nd) paraan, ay bilhin ang mga
            Wing Buffs na nasa mga Regular Spirits at Traveling Spirits.
            Mayroong{' '}
            <span className="font-extrabold text-amber-500">
              {WB_REGULAR_SPIRITS} Wing Buffs sa Regular Spirits
            </span>{' '}
            at{' '}
            <span className="font-extrabold text-amber-500">
              {WB_TRAVELING_SPIRITS} ng Wing Buffs sa Traveling Spirits
            </span>{' '}
            naman. Ang Wing Buffs ay permanenteng Wing Level pagkatapos mong
            mareborn galing sa Eden.
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
                    WL in All Maps
                  </td>
                  <td className="border border-slate-700 p-3">{WL_COUNT}</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-3">
                    WB in Regular Spirits
                  </td>
                  <td className="border border-slate-700 p-3">
                    {WB_REGULAR_SPIRITS}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-3">
                    WB in Traveling Spirits
                  </td>
                  <td className="border border-slate-700 p-3">
                    {WB_TRAVELING_SPIRITS}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-3">
                    Orbit (After Sky Logo Credits)
                  </td>
                  <td className="border border-slate-700 p-3">{ORBIT_WL}</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-3">
                    WL in Shattering Void Space
                  </td>
                  <td className="border border-slate-700 p-3">{SHARDS_WL}</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 font-bold p-3">
                    WL TOTAL
                  </td>
                  <td className="border border-slate-700 font-bold text-amber-600 p-3">
                    {TOTAL_WL_COUNT}
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          <LazyLoadImage src={WINGED_LIGHT} width={260} className="pl-5" />
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
              <span className="flex">
                Isle of Dawn - {ISLE_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {isle_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
              <span className="flex">
                Daylight Prairie - {PRAIRIE_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {prarie_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              <span className="flex">
                Hidden Forest - {FOREST_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {hiddenForest_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              <span className="flex">
                Valley of Triumph - {VALLEY_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {valley_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors ${
                open === 5
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              <span className="flex">
                Golden Wasteland - {WASTELAND_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {wasteland_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              <span className="flex">
                Vault of Knowledge - {VAULT_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {vault_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 7}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors ${
                open === 7
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              <span className="flex">
                Eye of Eden - {EDEN_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {eden_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 8}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className={`border-b-0 transition-colors ${
                open === 8
                  ? 'text-amber-500 hover:!text-amber-700'
                  : 'text-amber-500 hover:text-amber-900'
              }`}
            >
              <span className="flex">
                Shattering Void Space - {SHARDS_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-amber-500" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {shards_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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

export default PageWingedLights
