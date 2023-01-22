import React from 'react'

const Display = ({ value }) => {

    return (
        <div className="card d-flex align-items-end display" style={{ height: "50px" }}>
            <p className='mx-3 my-2'>{value ? value : 0} </p>
        </div>
    )
}

export default Display