import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Createchatroom from './Createchatroom'
import Chats from './Chats'

const Sidebar = () => {
    return (
        <div className='sidebar'>
        <Navbar/>
        <Search/>
        <Createchatroom/>
        <Chats/>
        </div>
    )
}

export default Sidebar