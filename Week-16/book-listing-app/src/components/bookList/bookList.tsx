import './bookList.css'

const BookList = ({books} : any) => {
    
    return (
        <div className='book__wrapper'>
            {books.map((book:any) => {
                return (
                    <><h3>{book.title}</h3><p>Author: {book.author}</p><p>Year: {book.year}</p></>
                )
            })}
        </div>
    )
}

export default BookList;