import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './App.css';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([])

    useEffect(()=> {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setListOfUser(response.data)
            })
    }, [])

return (
    <>
        <h1 className='heading'>User List</h1>
        <div className='container'>
            {
                listOfUser.map((user) => {
                    return (
                        <>
                            <div className='content'>
                                <div className='id'>
                                    <h3>{user.id}</h3>
                                </div>
                                <div className='info'>
                                    <h1>{user.name}</h1>
                                    <h2>Username: {user.username}</h2>
                                    <p> Phone: <span className='red'>{user.phone}</span></p>
                                    <p>Email: <span className='blue'>{user.email}</span></p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
)
}

export default UserList
