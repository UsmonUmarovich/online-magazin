import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Phone = (props) => {

    const param = useParams()
    const navigate = useNavigate()
    const id = param.id
    let phone = props.phones[Number(id)]
    if(phone === undefined) {
      return  <div>Bunday telefon hozircha yoq</div>
    }
    return (
        <div>
            <h1>{phone.brand}</h1>
            <ul>
                <li>{phone.model}</li>
                <li>{phone.memory}</li>
                <li>{phone.color}</li>
                <li>{phone.ram}</li>
            </ul>
            <button onClick={() => navigate(-1)}>←</button>
        </div>
    )
}
