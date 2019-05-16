import React from 'react'

const Error = ({message}) =>{
    return(
        <>
            <h1>
                Error:
            </h1>
            <h3>
                {message}
            </h3>
        </>
    )
}
export default Error