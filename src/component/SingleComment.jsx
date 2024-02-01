import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import { Component } from "react"

class SingleComment extends Component {

    deleteComment = (commentId) => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBmYTViMjYxNTAwMTk4YTY5NTAiLCJpYXQiOjE3MDY3OTUyNTgsImV4cCI6MTcwODAwNDg1OH0.OS7BwSmuBObJTi9NSJxWK9rNr_h9PJfVgKz_DxNbgM0",
                "Content-Type": "application/json",
            }
        })
        .then((response)=> {
            if(response.ok) {
                alert('Commento eliminato con successo')
            } else {
                alert("Problema nell'eliminazione")
            }
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <ListGroup.Item >{this.props.comment.comment}{this.props.comment.rate}  
                    <Button onClick={()=> {
                        // console.log(props.comment._id)
                        this.deleteComment(this.props.comment._id)
                    }}><i className="bi bi-trash-fill"></i>
                    </Button>
                </ListGroup.Item>
              
            </div>
        )
    }
}

export default SingleComment