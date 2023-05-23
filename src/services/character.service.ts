import { CharacterResponse } from ' @/model'

const apiTs = process.env.NEXT_PUBLIC_MARVEL_API_TS
const apiKey = process.env.NEXT_PUBLIC_API_KEY_MARVEL
const apiHash = process.env.NEXT_PUBLIC_API_HASH_KEY_MARVEL

export const getCharacters = async ({
  offset,
  name,
}: {
  offset?: number
  name?: string
}): Promise<CharacterResponse> => {
  const nameQuery = name ? `&nameStartsWith=${name}` : ''
  const offsetQuery = offset ? `&offset=${offset}` : ''

  return await fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${apiTs}&apikey=${apiKey}&hash=${apiHash}${offsetQuery}${nameQuery}`
  )
    .then(response => response.json())
    .then(response => response.data)
}
