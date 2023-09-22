import React from 'react'
import { Typography, Progress, Tooltip } from '@material-tailwind/react'

const SpiritDifficultyLevelProgressBar = ({
  difficulty_level,
  difficulty_label,
}) => {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
          Difficulty:
        </Typography>
        <Typography
          color={
            difficulty_level <= 25
              ? 'green'
              : difficulty_level <= 50
              ? 'amber'
              : difficulty_level <= 90
              ? 'pink'
              : 'red'
          }
          variant="h6"
        >
          {difficulty_label}
        </Typography>
      </div>
      <Tooltip
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        content="Gaano kahirap i-relive ang spirit na ito."
      >
        <Progress
          value={difficulty_level}
          color={
            difficulty_level <= 25
              ? 'green'
              : difficulty_level <= 50
              ? 'amber'
              : difficulty_level <= 90
              ? 'pink'
              : 'red'
          }
          size="lg"
          label={' '}
        />
      </Tooltip>
    </div>
  )
}

export default SpiritDifficultyLevelProgressBar
