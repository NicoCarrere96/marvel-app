'use client'
import { useRouter, useSearchParams } from 'next/navigation'

type PaginationProps = {
  totalPages: number
  actualPage: number
}

const DEFAULT_API_LIMIT = 20
const PAGE_RANGE = 3

const Pagination = ({ totalPages, actualPage }: PaginationProps) => {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const [startPage, endPage] = [Math.max(actualPage - PAGE_RANGE, 1), Math.min(actualPage + PAGE_RANGE, totalPages)]

  const handleChangePage = (page: number) => {
    const nameParam = searchParams.get('name')

    push(`?${nameParam ? `name=${nameParam}&` : ''}offset=${page * DEFAULT_API_LIMIT}`)
  }

  return (
    <div className='w-full bg-white dark:bg-gray-800 mt-4'>
      <div className='container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 '>
        <div className='-mx-2'></div>
        <div className='flex'>
          {actualPage !== startPage && (
            <button
              onClick={() => handleChangePage(actualPage - 2)}
              className='flex items-center justify-center px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md rtl:-scale-x-100 bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-gray-200'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
            const page = startPage + index

            return (
              <button
                key={page}
                className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline bg-gray-800 text-gray-200 ${
                  page === actualPage ? 'bg-blue-500' : 'hover:bg-blue-500'
                }  hover:text-gray-200`}
                onClick={() => handleChangePage(page - 1)}
              >
                {page}
              </button>
            )
          })}
          {actualPage !== endPage && (
            <button
              disabled={actualPage === endPage}
              onClick={() => handleChangePage(actualPage)}
              className='flex items-center justify-center px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md rtl:-scale-x-100 bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-gray-200'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pagination
