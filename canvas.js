'use strict';

import calc from './calc.js';

const canvas = {
    renderBunti({
        c = false,
        numKreise = 10
    } = {}) {

        const ctx = c.getContext('2d');

        ctx.clearRect(0, 0, c.width, c.height);

        ctx.beginPath();
        for (let i = 0; i < numKreise; i++) {
            let posX = calc.createNumber(0, c.width);
            let posY = calc.createNumber(0, c.height);
            let radius = calc.createNumber(5, 10);

            ctx.moveTo(posX + radius, posY);

            ctx.arc(
                posX, 
                posY,
                radius,
                0,
                2 * Math.PI
            )
        }
        ctx.fill();

    }
}

export default canvas;