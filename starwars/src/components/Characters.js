import React from 'react';
import Character from './Character';

class Characters extends React.Component {
constructor() {
    super();
    this.state = {};
}
render() {
    return (
        <div>
            <div>Each Character</div>
            <Character char="put name here" />
        </div>
    );
}
}

export default Characters;