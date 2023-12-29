import React from 'react'

const BookDetails = ({ bookDetails }: any) => {
    return (
        <div> <><h3>{bookDetails.title}</h3><p>Author: {bookDetails.author}</p><p>Year: {bookDetails.year}</p></></div>
    )
}

export default BookDetails