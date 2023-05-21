const API_TS = process.env.NEXT_PUBLIC_MARVEL_API_TS
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_MARVEL
const API_HASH = process.env.NEXT_PUBLIC_API_HASH_KEY_MARVEL

export const getCharacters = async (offset?: number) => {
  return await fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${API_TS}&apikey=${API_KEY}&hash=${API_HASH}${
      offset ? `&offset=${offset}` : ''
    }`
  )
    .then(response => response.json())
    .then(response => response.data)
}
