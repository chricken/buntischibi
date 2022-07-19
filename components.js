'use strict';

import dom from './dom.js';

const compontents = {
    dummy({
        parent = false,
        content = false,
    }) {
        dom.create({
            parent, 
            content,
            classes:['container']
        })
    }
}

export default compontents;