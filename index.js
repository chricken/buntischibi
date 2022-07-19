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

const renderStuff = () => {
    components.bunti({
        parent: elements.main,
    })
    components.bunti({
        parent: elements.main,
    })
    components.bunti({
        parent: elements.main,
    })
}

const init = () => {
    domMapping();
    renderStuff();
}

// INIT
init();