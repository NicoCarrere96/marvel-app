'use client'
import { CharacterCard, Pagination } from ' @/components'
import { getCharacters } from ' @/services'
import { useEffect, useState } from 'react'

const DEFAULT_API_LIMIT = 20

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState({ totalPages: 0, actualPage: 0, totalCharacters: 0 })

  const fetchCharacters = (offset?: number) => {
    getCharacters(offset).then(data => {
      setCharacters(data.results)
      setPages({
        totalPages: data.total / data.limit,
        actualPage: data.offset / data.limit,
        totalCharacters: data.total,
      })
    })
  }

  const handleSelectPage = (page: number) => {
    fetchCharacters(page * DEFAULT_API_LIMIT)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='bg-white dark:bg-gray-900'>
        <div className='container px-6 py-10 mx-auto'>
          <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white'>
            Marvel Characters
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300'>
            Estos son los personajes de Marvel, selecciona tu favorito para ver sus detalles
          </p>

          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5'>
            {characters.map(
              (character: { name: string; thumbnail: { path: string; extension: string }; id: string }) => (
                <CharacterCard key={character.name + character.id} {...character} />
              )
            )}
          </div>

          <Pagination {...pages} onSelectPage={handleSelectPage} />
        </div>
      </section>
    </main>
  )
}
