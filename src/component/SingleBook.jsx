import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import { Component } from "react"
import CommentArea from "./CommentArea"

class SingleBook extends Component {

    state = {
        selected : false 
    }

    render() {
        return (
            <Col xs={6} md={4} lg={3} className={this.state.selected ? "border border-danger" : ""}>
                <Card className="h-100">
                <Card.Img variant="top" src={this.props.singleBook.img} />
                <Card.Body>
                <Card.Title>{this.props.singleBook.title}</Card.Title>
                <Card.Text>{this.props.singleBook.price}</Card.Text>
                <Button variant="dark" onClick={()=> {
                    this.setState({selected: !this.state.selected}) //l'inverso dello stato attuale
                }}>Select</Button>
                {/* aggiungo un short-circuit operator per fare in modo di far apparire la sezione commenti quando lo stato selected: true */}
                {this.state.selected && (<CommentArea asin={this.props.singleBook.asin}/>)} 
                </Card.Body>
            </Card>
        </Col>   
        )       
    }
}
// VERSIONE FUNZIONE
// const SingleBook = (props) => {
//     // devo dichiarare l'oggetto che passerà nelle props: "singleBook"
//     return (
//         <Col xs={6} md={4} lg={3}>
//             <Card>
//             <Card.Img variant="top" src={props.singleBook.img} />
//             <Card.Body>
//             <Card.Title>{props.singleBook.title}</Card.Title>
//             <Card.Text>{props.singleBook.price}</Card.Text>
//             <Button variant="dark">Select</Button>
//             </Card.Body>
//         </Card>
//       </Col>   
//     )
// }

export default SingleBook