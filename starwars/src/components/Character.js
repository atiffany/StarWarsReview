import React from 'react';

const Character = (props) => {
    return (
    <div>
        <div>Name: {props.char.name}</div>
        <div>Born: {props.char.birth_year}</div>
        <div>Height: {props.char.height}</div>
    </div>
    );
}

export default Character;