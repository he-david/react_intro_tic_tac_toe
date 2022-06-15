import React, { useState } from 'react';

function Square(props) {
    const [state, setState] = useState(null);

    return (
        <button
            className="square"
            onClick={ () => setState('X') }
        >
            { state }
        </button>
    );
}

export default Square;