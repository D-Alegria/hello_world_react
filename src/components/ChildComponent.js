import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>greet Parent</button>
        </div>
    )
}

export default ChildComponent
