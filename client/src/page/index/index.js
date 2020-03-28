import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { loadComponents } from 'loadable-components';

import App from './app'

if (typeof window !== undefined) {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
} else {
    loadComponents().then(() => {
        render(
            <App data={[]} />,
            document.getElementById('app')
        );
    });
}





