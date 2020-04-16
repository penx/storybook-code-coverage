import React from 'react';
import useToggle from '../utils/useToggle';

export default () => {
    const {on, toggle} = useToggle()

    return <div>
    <h1>My Component</h1>
    <h2>{on ? 'Is On' : 'Is Off'}</h2>
    <button onClick={toggle}>Toggle</button>
</div>}