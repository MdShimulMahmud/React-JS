import React from 'react';

export default class ManageControlled extends React.Component {
    state = { message: '' };

    handleChange = (e) => {
        this.setState({
            message: e.target.value,
        });
    };

    render() {
        const { message } = this.state;
        return (
            <div>
                <legend>Type something here</legend>
                <input onChange={this.handleChange} value={message} />
                <h5>{message}</h5>
            </div>
        );
    }
}
