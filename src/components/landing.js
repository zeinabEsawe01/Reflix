import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

export default function Landing({users}) {

  return (
    <div className='usersContainer'>
        <div>Whos Watching?</div>
        <Link to={'/catalog'}>
        <div className='userCard'>
        {users.map((user) => <div className='user'>
            <img src={user.img}/>
           <h3 className='name'>{user.name}</h3> 
            </div>)}
        </div>
        </Link>
    </div>
  )
}
