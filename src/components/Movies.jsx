import React from 'react';
import { Card, Button } from 'react-bootstrap'

const Movies = (props) => {
  console.log(props)
  //Vieno filmo atvaizdavimo kortele
  //card elementas is bootstrap
  return (
    <div>
      {
        props.movies.Search.map((item, index) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.Poster} />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>{item.Year}</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        ))

      }

    </div>
  )
}

export default Movies