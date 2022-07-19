'use strict';

import dom from './dom.js';
import calc from './calc.js';

const compontents = {
    glider({
        parent = false,
        min = 0,
        max = 100,
        value = 50,
        callback = () => { },
        legend = false
    } = {}) {

        const container = dom.create({
            classes: ['container', 'containerGlider'],
            parent
        })
        
        // Beschriftung
        if (legend) {
            dom.create({
                parent: container,
                type: 'span',
                classes: ['legend'],
                content: legend
            })
        }

        // Text-Eingabe
        const text = dom.create({
            parent: container,
            type: 'input',
            attr: {
                type: 'number',
                value
            },
            listeners: {
                change() {
                    text.value = calc.clamp({
                        value: text.value, min, max
                    });
                    // Bei Änderung soll das andere Element mit angepasst werden
                    range.value = text.value;
                    callback();
                }
            }
        })

        // Schieberegler
        const range = dom.create({
            parent: container,
            type: 'input',
            attr: {
                type: 'range',
                min, max, value
            },
            listeners: {
                input() {
                    // Bei Änderung soll das andere Element mit angepasst werden
                    text.value = range.value;
                    callback();
                }
            }
        })

        return range;


    }
}

export default compontents;