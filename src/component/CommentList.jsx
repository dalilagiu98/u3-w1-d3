import { Component } from "react"
import SingleComment from "./SingleComment"

class CommentList extends Component {

    render() {
        return (
            <>
                <ul>
                    {this.props.comments.map((comment)=> {
                        console.log("il commento è questo:",comment)
                        return (
                            <SingleComment comment={comment} key={comment._id} asin={this.props.asin}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default CommentList