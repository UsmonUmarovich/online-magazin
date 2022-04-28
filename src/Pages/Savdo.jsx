import React from 'react'
import { Link } from 'react-router-dom'

export const Savdo = (props) => {
    return (
        <div>
            <ul>
                {
                    props.phones.map(phone => {
                        return (
                        <li key={phone.id}>
                            <Link to={`/phone/${phone.id}`} children={phone.brand + phone.model} />
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
