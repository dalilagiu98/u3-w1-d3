import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"

class CommentArea extends Component {

    state = {
        reviews: [],
        isLoading: true,
        isError: false,
    }

    fetchReviews() {
    
    fetch('https://striveschool-api.herokuapp.com/api/comments/' +this.props.asin, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBmYTViMjYxNTAwMTk4YTY5NTAiLCJpYXQiOjE3MDY3OTUyNTgsImV4cCI6MTcwODAwNDg1OH0.OS7BwSmuBObJTi9NSJxWK9rNr_h9PJfVgKz_DxNbgM0"
        }
    })
    .then((response)=> {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error ('errore nella ricezione del server')
        }
    })
    .then((data)=> {
        console.log("array di commenti dato dalla fetch al libro:", data)
        this.setState({
            reviews: data,
            // lo spinner finisce quando i dati sono caricati 
            isLoading: false,
            isError: true 
        })
    })
    .catch((err)=> {
        console.log(err)
        this.setState({
            isLoading: false,
            isError: true
        })
    })       
    }

    componentDidMount(){
        this.fetchReviews()
    }

    render() {
        return (
            <>
             <h2>Comments</h2>
            {/* aggiungo lo spinner: lo state isLoading è true? se sì, stampa: */}
            {this.state.isLoading && (
              <Spinner animation="border" variant="dark"></Spinner>
            )}
            {this.state.reviews.length === 0 && this.state.isLoading === false ? (<Alert variant="dark">Nessun commento inserito</Alert>) : (<CommentList comments={this.props.comments} asin={this.props.asin}/>)}
            {/* codice del libro dove devono essere renderizzati i commenti */}
            <AddComment asin={this.props.asin}/> 
            </>
        )
    }
}

export default CommentArea