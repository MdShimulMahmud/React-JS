import React from 'react';
import Button from './Button';
import ClockList from './ClockList';

const quantities = [1, 2, 3];
class FirstComponent extends React.PureComponent {
    state = {
        date: new Date(),
        locale: 'bn-BD',
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick = (locale) => {
        console.log('this is button!');
        this.setState({
            locale,
        });
    };

    render() {
        const { userName } = this.props;
        const { date, locale } = this.state;

        return (
            <>
                <div>
                    <p> Hello {userName} </p>
                    <span> {date.toLocaleTimeString(locale)}</span>
                    <ClockList quantities={quantities} />
                </div>

                <br />
                <br />
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" />
                )}
            </>
        );
    }
}

export default FirstComponent;
