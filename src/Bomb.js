import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super()

        this.state = { secondsLeft: props.initialCount}
    }
    render(){
        const message = this.state.secondsLeft == 0 ? 'Boom!' : `${this.props.initialCount} seconds left before I go boom!`
        return(

            <h2>{message}</h2>

        )

    }


}

export default Bomb