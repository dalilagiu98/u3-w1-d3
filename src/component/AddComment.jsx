import { Component } from "react";

class AddComment extends Component {
 state = {
    comment: "",
    rate: 1,
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
                <textarea  value={this.state.comment} onChange={(e)=> this.setState({comment: e.target.value})}/>
                <label>
                    Rating:
                     <input type="number" value={this.state.rate} onChange={(e)=> {
                        this.setState({ rate: e.target.value})
                     }}/>
                </label>
                <button type="submit">Add Comment</button>
            </form>
      </div> 
        )
    }
}

export default AddComment