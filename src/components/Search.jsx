import React from 'react'

const Search = () => {
    return (
        <div className= 'search'>
        <div className="searchForm">
            <input type="text" placeholder='Buscar Usuario'/>
        </div>
        <div className="userChat">
            <img src="https://media.istockphoto.com/photos/smiling-student-with-binder-posing-picture-id845874448?k=20&m=845874448&s=612x612&w=0&h=AX8bZD4ldJsy4XuVcdhNcXXax6QU00TCNCTAYqP0t1E="></img>
            <div className='userChatInfo'>
                <span>Julia</span>
            </div>
        </div>
        </div>
    )
}

export default Search