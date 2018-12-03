import React, { Component } from 'react';
import Button from '../../components/Button';

export default class App extends Component {
    state = {
        counter: 1,
    };

    incrementCounter = () => {
        this.setState(state => ({ ...state, counter: state.counter + 1 }));
    };

    render() {
        const { counter } = this.state;

        return (
            <div>
                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                <marquee>Testing React, counter is {counter}. Greetings from <a href="https://netkata.com">https://netkata.com</a></marquee>
                <Button text="Click to increase this running weird sample text" onClickHandler={this.incrementCounter} />
            </div>
        );
    }
}
