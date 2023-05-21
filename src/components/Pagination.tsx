type PaginationProps = {
  totalPages: number
  actualPage: number
  totalCharacters: number
  onSelectPage: (page: number) => void
}

const Pagination = ({ totalPages, actualPage, totalCharacters, onSelectPage }: PaginationProps) => {
  const handleNextPage = () => {
    onSelectPage(++actualPage)
  }
  const handlePrevPage = () => {
    onSelectPage(--actualPage)
  }

  const renderPages = () => {
    const pageButtons = []
    const lastPageShow = actualPage + 3

    for (let i = actualPage; i < lastPageShow; i++) {
      pageButtons.push(
        <button
          className={`inline-flex items-center justify-center px-4 py-1 mx-2 transition-colors duration-300 transform rounded-lg text-white ${
            i === actualPage ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={() => onSelectPage(i)}
        >
          {i + 1}
        </button>
      )
    }

    if (lastPageShow < totalPages) {
      pageButtons.push(
        <button
          className=' px-4 py-1 mx-2 transition-colors duration-300 transform rounded-lg text-white hover:bg-gray-700'
          onClick={handleNextPage}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='currentColor'>
            <path
              fill-rule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      )
    }
    if (actualPage > 0) {
      pageButtons.unshift(
        <button
          className=' px-4 py-1 mx-2 transition-colors duration-300 transform rounded-lg text-white hover:bg-gray-700'
          onClick={handlePrevPage}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='currentColor'>
            <path
              fill-rule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      )
    }

    return pageButtons
  }

  return (
    <div className='w-full bg-white dark:bg-gray-800 mt-4'>
      <div className='container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 '>
        <div className='-mx-2'>{renderPages()}</div>

        <div className='text-gray-500 dark:text-gray-400'>
          <span className='font-medium text-gray-700 dark:text-gray-100'>1 - {totalPages.toFixed(0)}</span> de&nbsp;
          {totalCharacters}&nbsp;Personajes
        </div>
      </div>
    </div>
  )
}

export default Pagination
