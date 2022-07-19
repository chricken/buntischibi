'use strict';

import dom from './dom.js';
import calc from './calc.js';
import canvas from './canvas.js';

const components = {
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


    },

    bunti({
        parent = false
    } = {}) {
        const container = dom.create({
            parent,
            classes: ['container', 'containerBunti']
        })

        const spielfeld = dom.create({
            type:'canvas',
            parent: container,
            attr:{
                width: 600,
                height: 400
            }
        })

        const rngDummy = components.glider({
            parent: container,
            legend: 'Anzahl der Kreise',
            min: 10,
            max: 500,
            value: 100,
            callback() {
                canvas.renderBunti({
                    c: spielfeld,
                    numKreise:rngDummy.value
                })
            }
        })

        canvas.renderBunti({
            c: spielfeld,
            numKreise:rngDummy.value
        })

    }
}

export default components;