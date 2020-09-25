import React, { useState, Suspense } from 'react'

const List = () => {
    return (
        <div>
            <h1>Cache calls</h1>
            <br />
            <span>
                <button style={styles} value="posts" >Posts</button>
                <button style={styles} value="photos">Photos</button>
                <button style={styles} value="albums">Albums</button>
            </span>
        </div>
    )
}


export default List



const styles = {
    marginRight: 10,
    padding: 8
}