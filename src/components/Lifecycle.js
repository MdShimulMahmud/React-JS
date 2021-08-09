import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        const { initialCount } = this.props;
        this.state = {
            count: initialCount,
        };
    }

    upCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    render() {
        const { name } = this.props;
        const { count } = this.state;
        return (
            <div>
                Hello, {name}!<br />
                You clicked the button {count} times.
                <br />
                <button type="button" onClick={this.upCount}>
                    Click here!
                </button>
            </div>
        );
    }
}
LifeCycle.defaultProps = {
    name: 'Bob',
    initialCount: 0,
};
export default LifeCycle;
