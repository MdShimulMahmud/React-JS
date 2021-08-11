import React from 'react';

export default class Wrapper extends React.Component {
    state = { count: 0 };

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        const { name } = this.props;
        return name(count, this.handleClick);
    }
}
