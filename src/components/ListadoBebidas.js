import React from 'react'
import { Row } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import BebidaCard from './BebidaCard'

const ListadoBebidas = () => {
    const {bebidas} = useBebidas()
  return (
    <Row className='mt-5'>
        {
            bebidas.map(bebida => (
                <BebidaCard
                    key={bebida.idDrink}
                    bebida={bebida}
                />
            ))
        }
    </Row>
  )
}

export default ListadoBebidas