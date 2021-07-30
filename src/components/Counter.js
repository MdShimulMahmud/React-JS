import React from 'react';
function increment(prevState){
    return {
        count: prevState.count+ 1,
    };
}

export default class Counter extends React.Component {
    state = { count: 0 };

    handleClick = () => {
        this.setState(increment);
    };

   
    render() {
        const { count } = this.state;
        return (
            <div className="counter">
                <h3>{count}</h3>
                <button type="button" onClick={this.handleClick}>
                    Click here
                </button>
            </div>
        );
    }
}
