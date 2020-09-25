import React from 'react'
import useSWR from 'swr';

const Fetch = ({ url }) => {
    const newURL = url ? url : '';
    const { data } = useSWR(newURL)

    if (url) {
        return (
            <div>
                <ul>
                    {data.map(d => <li key={d.id}>{d.title}</li>)}
                </ul>
            </div>
        )
    }
    else {
        return (<div></div>
        )
    }
}

export default Fetch
