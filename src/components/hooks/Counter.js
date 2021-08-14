import React from 'react';

export default class Counter extends React.Component {
    state = {
        count: 0,
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `You have Clicked ${count} times`;
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `You have Clicked ${count} times`;
    }

    handleChange = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>{count}</h2>
                <button type="button" onClick={this.handleChange}>
                    Click here
                </button>
            </div>
        );
    }
}
