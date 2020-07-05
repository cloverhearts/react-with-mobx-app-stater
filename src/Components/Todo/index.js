import React from 'react'
import Timer from '../Timer'

export default ({ name, createdAt }) => {
    return (
        <div>
            Todo {name} <Timer createAt={createdAt} />
        </div>
    )
}