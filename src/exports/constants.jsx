export const ORBIT_WL = 1
export const SHARDS_WL = 6

export const ISLE_NUM_REG_SPIRIT = 3
export const ISLE_NUM_SEASON_SPIRIT = 12
export const ISLE_NUM_WL = 9
export const ISLE_NUM_MAP_SHRINES = 9

export const PRAIRIE_NUM_REG_SPIRIT = 8
export const PRAIRIE_NUM_SEASON_SPIRIT = 14
export const PRAIRIE_NUM_WL = 24
export const PRAIRIE_NUM_MAP_SHRINES = 9

export const FOREST_NUM_REG_SPIRIT = 8
export const FOREST_NUM_SEASON_SPIRIT = 14
export const FOREST_NUM_WL = 19
export const FOREST_NUM_MAP_SHRINES = 10

export const VALLEY_NUM_REG_SPIRIT = 7
export const VALLEY_NUM_SEASON_SPIRIT = 16
export const VALLEY_NUM_WL = 17
export const VALLEY_NUM_MAP_SHRINES = 11

export const WASTELAND_NUM_REG_SPIRIT = 6
export const WASTELAND_NUM_SEASON_SPIRIT = 14
export const WASTELAND_NUM_WL = 18
export const WASTELAND_NUM_MAP_SHRINES = 8

export const VAULT_NUM_REG_SPIRIT = 5
export const VAULT_NUM_SEASON_SPIRIT = 18
export const VAULT_NUM_WL = 15
export const VAULT_NUM_MAP_SHRINES = 10

export const EDEN_NUM_REG_SPIRIT = 0
export const EDEN_NUM_SEASON_SPIRIT = 0
export const EDEN_NUM_WL = 10
export const EDEN_NUM_MAP_SHRINES = 4

export const S19_NUM_REG_SPIRIT = 0
export const S19_NUM_SEASON_SPIRIT = 0
export const S19_NUM_WL = 0
export const S19_NUM_MAP_SHRINES = 1

export const S20_NUM_REG_SPIRIT = 0
export const S20_NUM_SEASON_SPIRIT = 4
export const S20_NUM_WL = 3
export const S20_NUM_MAP_SHRINES = 1

// WL_COUNT updates added from season of the nine colored deer
export const WL_COUNT =
  ISLE_NUM_WL +
  PRAIRIE_NUM_WL +
  FOREST_NUM_WL +
  VALLEY_NUM_WL +
  WASTELAND_NUM_WL +
  VAULT_NUM_WL +
  EDEN_NUM_WL +
  ORBIT_WL +
  SHARDS_WL

export const WB_REGULAR_SPIRITS = 49
export const WB_TRAVELING_SPIRITS = 61

export const MS_HOME = 1

export const TOTAL_WL_COUNT =
  WL_COUNT + WB_REGULAR_SPIRITS + WB_TRAVELING_SPIRITS

export const TOTAL_MS_COUNT = // updated January 15, 2024
  ISLE_NUM_MAP_SHRINES +
  PRAIRIE_NUM_MAP_SHRINES +
  FOREST_NUM_MAP_SHRINES +
  VALLEY_NUM_MAP_SHRINES +
  WASTELAND_NUM_MAP_SHRINES +
  VAULT_NUM_MAP_SHRINES +
  EDEN_NUM_MAP_SHRINES +
  S19_NUM_MAP_SHRINES +
  MS_HOME

export const WL_COUNT_DATE_UPDATED = 'February 29, 2024'
export const MS_COUNT_DATE_UPDATED = 'January 15, 2024'
