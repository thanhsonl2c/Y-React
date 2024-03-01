import React from "react";

class Sample extends React.Component {
    state = {
        name: 'Sontt',
        address: 'Hanam',
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClick = (click) => {
        // console.log('here');
        alert('here')
    }
    render() {
        return (
            <>
                <div className="sample">
                    <p>Name: {this.state.name}</p>
                    <span>
                        <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event)} />
                        Name: {this.state['name']}
                    </span>
                    <div className="">
                    <button onClick={ (click) => this.handleClick(click) }>Click</button>
                    </div>
                </div>
            </>
        )


    }
}

export default Sample;