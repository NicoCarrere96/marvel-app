'use client'
import { getCharacters } from ' @/services'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters().then(res => {
      setCharacters(res.data.results)
    })
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='bg-white dark:bg-gray-900'>
        <div className='container px-6 py-10 mx-auto'>
          <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white'>
            Marvel Characters
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
            alias, adipisci rem similique, at omnis eligendi optio eos harum.
          </p>

          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3'>
            {characters.map(
              (character: { name: string; thumbnail: { path: string; extension: string }; id: string }) => (
                <div key={character.name + character.id} className='flex flex-col items-center'>
                  <Image
                    className='object-cover w-full rounded-xl aspect-square top-0'
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={`Imagen de ${character.name}`}
                    loading={'lazy'}
                    onLoad={() => (
                      <div
                        className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                        role='status'
                      >
                        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                          Loading...
                        </span>
                      </div>
                    )}
                    width={400}
                    height={400}
                  />

                  <h2 className='mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white'>{`${character.name}`}</h2>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
