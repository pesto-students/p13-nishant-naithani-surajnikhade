import BookDetails from '../bookDetails/bookDetails';
import './bookList.css'

const BookList = ({ books }: any) => {

    return (
        <div className='book__wrapper'>
            {books.map((book: any) => {
                return (
                    <BookDetails bookDetails={book} />
                )
            })}
        </div>
    )
}

export default BookList;