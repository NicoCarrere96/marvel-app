import { Character } from ' @/model'
import Image from 'next/image'
import Link from 'next/link'

const CharacterCard = ({ name, thumbnail }: Character) => {
  return (
    <Link href={''} className='flex flex-col items-center transition-transform hover:scale-110'>
      <Image
        className='object-cover w-full rounded-xl aspect-square'
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`Imagen de ${name}`}
        width={400}
        height={400}
      />

      <h2 className='mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white'>{`${name}`}</h2>
    </Link>
  )
}

export default CharacterCard
