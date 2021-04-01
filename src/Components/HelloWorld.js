import React from 'react'

class HelloWorld extends React.Component {
    render()
    {
        return(
            <h1>Hello {this.props.name}!</h1>
        )
    }

}

function HelloWorlds(props) {
    return (
        <h1>Hello {props.name}</h1>
    )
}

export default HelloWorld
