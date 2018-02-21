import React from 'react';
import './Characters.css';
import Character from './Character';

class Characters extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        toggled: false,
    };
}

handleClick = () => {
    const toggled = !this.state.toggled;
    this.setState({ toggled });
}

render() {
    return (
        <div>
            <div onClick={this.handleClick} className="character">{this.props.char.name}</div>
            {this.state.toggled ? <Character char={this.props.char} /> : null}
        </div>
    );
}
}

export default Characters;