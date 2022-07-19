'use strict';

// IMPORTS
import dom from './dom.js';

// VARIABLEN / KONSTANTEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = dom.$('main');
}

const renderStuff = () =>{
    dom.create({
        parent: elements.main,
        content: 'Hallo Welt',
        type: 'h3',
    })
}

const init = () => {
    domMapping();
    renderStuff();
}

// INIT
init();