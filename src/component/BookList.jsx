import Container from "react-bootstrap/esm/Container"
import SingleBook from "./SingleBook"
import Row from "react-bootstrap/Row"
import { Component } from "react"
import Form from "react-bootstrap/Form"
// riceve come props l'array del json, ipotizziamo di dichiarare la props come arrayOfBooks:
// VERSIONE CLASSE
class BookList extends Component {


    state = {
        inputValue : " " //setto il valore di partenza dello stato vuoto
    }

    render() {
        return (
            <>
                <Form.Control  placeholder="Enter book title..."  value={this.state.inputValue} //assegno come valore del form control quello dello stato
                onChange={(e)=> {
                    this.setState({inputValue: e.target.value}) //a ogni cambio di valore, faccio in modo di settare lo stato come il valore dell'input
                }}/>
                <Container>
                    <Row>
                        {this.props.arrayOfBooks.filter((book)=> //l'array che arriva viene filtrato -> si vede se il titolo del libro corrente IN MINUSCOLO include il valore dell'input/stato IN MINUSCOLO ---> MODO PER CONFRONTARE DUE STRINGHE 
                        book.title.toLowerCase().includes(this.state.inputValue.toLowerCase()))
                        .map((book)=> {
                            return (
                                <SingleBook singleBook={book} key={book.asin}/>
                                )
                            })}
                        </Row>
                </Container>
                </>
        )
    }
}

// VERSIONE FUNZIONE:
// const BookList = (props) => {
//     return (
//         <Container>
//             <Row>
//                 {props.arrayOfBooks.map((book)=> {
//                     return (
//                         <SingleBook singleBook={book}/>
//                     )
//                 })}
//             </Row>
//         </Container>
//     )
// }

export default BookList