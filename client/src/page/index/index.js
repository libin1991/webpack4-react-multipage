import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { loadComponents } from 'loadable-components';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import App from './app';
import stores from './store/index';


const Entry = (stores) => {
    return <Provider $store={stores}>
        <App />
    </Provider>
};


if (typeof window !== undefined) {
    ReactDOM.render(
        Entry(stores),
        document.getElementById('root')
    )
}


export default Entry





