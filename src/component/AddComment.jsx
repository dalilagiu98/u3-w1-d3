import { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
class AddComment extends Component {
 state = {
    comment: "",
    rate: 1,
    elementId: this.props.asin,
  };

  addComment() {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBmYTViMjYxNTAwMTk4YTY5NTAiLCJpYXQiOjE3MDY3OTUyNTgsImV4cCI6MTcwODAwNDg1OH0.OS7BwSmuBObJTi9NSJxWK9rNr_h9PJfVgKz_DxNbgM0",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.asin,
      }),
    })
    .then((response) => {
        if (response.ok) {
            alert('Prenotazione salvata correttamente, grazie! :)')
            this.setState({ comment: "", rate: 1 });
        } else {
            throw new Error("Error adding comment");
        }
       
      })
    .catch((error) => {
        console.error(error);
      });
  }

    render() {
        return (
        <div>
            <h2>Add a Comment</h2>
            <form onSubmit={(e) => {
            e.preventDefault();
            this.addComment();
            }}>
                <Form.Control
                  required
                  placeholder="Lascia qui la tua recensione..."
                  as="textarea"
                  rows={5} value={this.state.comment} onChange={(e)=> this.setState({...this.state, 
                    comment: e.target.value})}/>
                <h5>Rate da 1 a 5:</h5>
                <Form.Select
                  required
                  value={this.state.rate} 
                  onChange={(e)=> {
                    this.setState({ ...this.state, rate: e.target.value})
                 }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
                <Button type="submit" variant="dark">Add Comment</Button>
            </form>
      </div> 
        )
    }
}

export default AddComment