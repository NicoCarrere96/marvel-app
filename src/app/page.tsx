import { CharacterCard, Pagination } from ' @/components'
import { Character } from ' @/model'
import { getCharacters } from ' @/services'

type HomeSearchParams = {
  name?: string
  offset?: number
}

async function fetchCharacters({ offset, name }: HomeSearchParams) {
  const data = await getCharacters({ offset, name })

  return {
    characters: data.results,
    pages: {
      totalPages: Math.ceil(data.total / data.limit),
      actualPage: data.offset / data.limit + 1,
    },
  }
}

export const Home = async ({ searchParams }: { searchParams: HomeSearchParams }) => {
  const { characters, pages } = await fetchCharacters(searchParams)

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

          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 lg:grid-cols-4'>
            {characters.map((character: Character) => (
              <CharacterCard key={character.name + character.id} {...character} />
            ))}
          </div>

          <Pagination {...pages} />
        </div>
      </section>
    </main>
  )
}

export default Home
