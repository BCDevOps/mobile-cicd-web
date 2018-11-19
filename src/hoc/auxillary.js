import React from 'react';

/**
 * allows to render out sibling components without the need of a wrapping container
 * (like a div) to be rendered
 * https://medium.com/@gajus/using-react-v16-to-create-self-destructing-components-de8e4eb61d0f
 * usage:
    <Aux>
        <Component1 />
        <Component2 />
        <Component3 />
    </Aux>
 */

const Aux = ({ children }) => children;

export default Aux;
