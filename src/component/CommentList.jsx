import { Component } from "react"
import ListGroup from 'react-bootstrap/ListGroup';
class CommentList extends Component {
    render() {
        return (
            <>
                <h2>Comments</h2>
                <ul>
                    {this.props.comments.map((comment)=> {
                        console.log(comment)
                        return (
                            <ListGroup.Item key={comment._id}>{comment.comment}{comment.rate}</ListGroup.Item>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default CommentList