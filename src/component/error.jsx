import React from 'react'
import { useRouteError } from 'react-router'

function Error() {
    const error = useRouteError()
    return (
        <div>Error Something went Wrong {error.status}</div>
    )
}

export default Error
