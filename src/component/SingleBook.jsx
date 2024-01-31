import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleBook = ({ book }) => {
    const { title, img } = book
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="dark">Buy!</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;