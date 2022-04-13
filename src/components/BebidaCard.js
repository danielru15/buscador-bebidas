import React from 'react'
import { Col , Card , Button } from 'react-bootstrap'

const BebidaCard = ({bebida}) => {
  return (
    <Col md={3} lg={3}>
        <Card className='mb-4'>
            <Card.Img 
                variant='top'
                src={bebida.strDrinkThumb}
                alt={`ìmagen de ${bebida.strDrink}`}
            />
            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button variant='warning' className='w-100 text-uppercase mt-2'>ver receta</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default BebidaCard