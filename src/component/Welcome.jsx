import Alert from 'react-bootstrap/Alert'

const Welcome = () => {
    return (
        <Alert variant="dark" size="lg">
        <Alert.Heading>Hey, nice to see you! Welcome in our EpiBooks Shop</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
      </Alert>  
    )
}

export default Welcome