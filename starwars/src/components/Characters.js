import React from 'react';
import Character from './Character';

class Characters extends React.Component {
constructor(props) {
    super(props);
    this.state = {};
}
render() {
    return (
        <div>
            <div>Each Character</div>
            {this.props.chars.map((char, index) => {
                return <Character key={index} name={char.name} />
            })}
        </div>
    );
}
}

export default Characters;