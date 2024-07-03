import React, { Component } from 'react';
import ProfilePic from './assets/profileimg.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Developer"
        };
    }

    render() {f
        return (
            <div className="card">
                <img className="card-img" src={ProfilePic} alt="profile image" />
                <h2 className='card-title'>{this.props.name}</h2>
                <p>{this.props.details}</p>
                <span>{this.state.username}</span>
            </div>
        );
    }
}

export default Card;
