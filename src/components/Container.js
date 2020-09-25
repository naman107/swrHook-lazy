import React, { Suspense, useState } from 'react'

const Fetch = React.lazy(() => import('../FetchHook/fetch'))
const baseURL = "https://jsonplaceholder.typicode.com/"

const Container = () => {
    const [endPoint, setEndPoint] = useState('')

    const Buttons = () => {
        return (
            <span>
                <button style={styles} value="posts" onClick={(e) => setEndPoint(baseURL + e.target.value)}>Posts</button>
                <button style={styles} value="photos" onClick={(e) => setEndPoint(baseURL + e.target.value)}>Photos</button>
                <button style={styles} value="albums" onClick={(e) => setEndPoint(baseURL + e.target.value)} > Albums</button>
            </span>
        )
    }

    return (
        <div>
            <div>
                <h1>JSON Placeholder</h1>
                <br />
                <Buttons />
            </div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Fetch url={endPoint} />
            </Suspense>
        </div>
    )
}

export default Container

const styles = {
    marginRight: 10,
    padding: 8
}
