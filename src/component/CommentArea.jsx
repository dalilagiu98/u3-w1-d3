import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";


class CommentArea extends Component {

    state = {
        reviews: [],
    }

    fetchReviews() {
    
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
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
        console.log("array di commenti:", data)
        this.setState({
            reviews: data
        })
    })       
    }

    componentDidMount(){
        this.fetchReviews()
    }

    render() {
        return (
            <>
            <CommentList comments={this.state.reviews}/>
            <AddComment asin={this.props.asin}/>
            </>
        )
    }
}

export default CommentArea