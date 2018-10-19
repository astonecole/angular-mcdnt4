import React, { Component } from 'react';

import './Vote.css';

class Vote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: 0,
        };
    }

    onClick(note) {
        console.log(note);

        this.setState({
            note: note
        });

        this.props.onNote(note);
    }

    isActive(pos) {
        return pos <= this.state.note ? 'active' : '';
    }

    render() {
        return (
            <div className="stars">
                {Array.from({length: this.props.nbStars}, (v, k) => {
                    let counter = k + 1;
                    return (
                        <span className={[this.isActive(counter), 'star'].join(' ')} key={counter} onClick={this.onClick.bind(this, counter)}>☆</span>
                    )
                })}
            </div>
        )
    }
}

export default Vote;