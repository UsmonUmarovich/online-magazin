import React from 'react'
import { Link } from 'react-router-dom'

export const Home = (props) => {
  return (
    <div>
        Telefonlarni korish uchun <Link className='link1' to={'/savdo'}>Savdo</Link> bo`limiga o`ting
    </div>
  )
}
