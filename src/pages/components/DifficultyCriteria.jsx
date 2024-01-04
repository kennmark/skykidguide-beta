import React from 'react'
import { Typography, Alert, Chip } from '@material-tailwind/react'
const DifficultyCriteria = () => {
  return (
    <Alert variant="gradient" className="mt-3">
      <Typography>Information on Spirit's Difficulty Factors:</Typography>
      <Typography>
        Ang criteria na ito ay base sa "moth" o "new player" experience.
      </Typography>
      <div className="flex flex-wrap justify-center gap-2 py-3">
        <Chip color="green" value="Follow +5" />
        <Chip color="teal" value="Walk +10" />
        <Chip color="cyan" value="Fly +10" />
        <Chip color="amber" value="2 or 4 Player Door +10" />
        <Chip color="green" value="Carry +10" />
        <Chip color="indigo" value="Distanced +15" />
        <Chip color="purple" value="Elevated +20" />
        <Chip color="green" value="Collect +20" />
        <Chip color="pink" value="Acquired by Task +5" />
        <Chip color="red" value="Krills +50" />
        <Chip color="amber" value="Need A Veteran +30" />
        <Chip color="cyan" value="Swim +10" />
        <Chip color="pink" value="Chase +15" />
        <Chip color="red" value="Crabs +15" />
        <Chip color="gray" value="None" />
      </div>
    </Alert>
  )
}

export default DifficultyCriteria
