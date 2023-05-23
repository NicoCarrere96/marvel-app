import { Character } from './Character'

export interface CharacterResponse {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[]
}
