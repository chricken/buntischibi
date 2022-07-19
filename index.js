'use strict';

// IMPORTS
import dom from './dom.js';
import components from './components.js';

// VARIABLEN / KONSTANTEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = dom.$('main');
}

const renderStuff = () =>{
    const rngDummy = components.glider({
        parent: elements.main,
        legend: 'Dummy',
        callback(){
            console.log( rngDummy.value );
        }
    })
}

const init = () => {
    domMapping();
    renderStuff();
}

// INIT
init();