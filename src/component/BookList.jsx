import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
    return (
        books.map((book, index)=>(
            <SingleBook key={index} book={book}/>
        ))
    )
}

export default BookList