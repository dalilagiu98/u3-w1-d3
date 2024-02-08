import Container from "react-bootstrap/Container"
import SingleBook from "./SingleBook"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import CommentArea from "./CommentArea"
import { Component } from "react"
// riceve come props l'array del json, ipotizziamo di dichiarare la props come arrayOfBooks:
// VERSIONE CLASSE
class BookList extends Component {


    state = {
        inputValue : " " ,//setto il valore di partenza dello stato vuoto
        selectedAsin : null, //set per memorizzare l'asin del libro selezionato
        comments: [],
    }
    // funzione per cambiare l'asin selezionato
    changeSelectedAsin = (newAsin) => {
        this.setState({
            selectedAsin: newAsin,
        })
    }

  // Metodo per gestire gli aggiornamenti nel componente
  componentDidUpdate(prevProps, prevState) {
    // Verifica se l'asin selezionato è cambiato rispetto allo stato precedente
    if (prevState.selectedAsin !== this.state.selectedAsin) {
      // Effettua un fetch per ottenere i nuovi commenti
      this.fetchComments();
    }
  }

  // Funzione per effettuare il fetch dei commenti in base all'asin
  fetchComments() {
    const { selectedAsin } = this.state;

    // Effettua il fetch dei commenti utilizzando l'asin
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${selectedAsin}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBmYTViMjYxNTAwMTk4YTY5NTAiLCJpYXQiOjE3MDY3OTUyNTgsImV4cCI6MTcwODAwNDg1OH0.OS7BwSmuBObJTi9NSJxWK9rNr_h9PJfVgKz_DxNbgM0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione del server");
        }
      })
      .then((data) => {
        console.log("Array di commenti dato dalla fetch al libro:", data);
        // Aggiorna lo stato con i nuovi commenti
        this.setState({
          comments: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
                        <Col >
                            <Row>
                                {this.props.arrayOfBooks.filter((book)=> //l'array che arriva viene filtrato -> si vede se il titolo del libro corrente IN MINUSCOLO include il valore dell'input/stato IN MINUSCOLO ---> MODO PER CONFRONTARE DUE STRINGHE 
                                book.title.toLowerCase().includes(this.state.inputValue.toLowerCase()),
                                console.log("numero di libri nel json:",this.props.arrayOfBooks)
                                )
                                .map((book)=> {
                                    return (
                                        <SingleBook singleBook={book} key={book.asin} selectedAsin={this.state.selectedAsin} changeSelectedAsin={this.changeSelectedAsin}/>
                                        )
                                    })}
                            </Row>
                        </Col>
                        <Col xs={6}>
                            {/* Se c'è un libro selezionato, mostra l'area dei commenti */}
                            {this.state.selectedAsin && <CommentArea asin={this.state.selectedAsin} comments={this.state.comments}/>}     
                        </Col>
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