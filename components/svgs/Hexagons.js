import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import classes from './svgs.module.css';


const Hexagons = () => {
    const [color, setColor] = useState("red");

    useEffect(() => {
        setTimeout(() => {
            setColor(randomColor())
        }, 3000)
    }, [color])
    return (
        <svg viewBox="0 0 1346.55 359" width="80%" className={classes.hex}>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon
                        stroke={color}
                        points="156.9 179.5 56.15 179.5 5.77 266.75 56.15 354 156.9 354 207.27 266.75 156.9 179.5" />
                    <polygon
                        stroke={color}
                        points="246.05 92.25 145.3 92.25 94.93 179.5 145.3 266.75 246.05 266.75 296.43 179.5 246.05 92.25" />
                    <polygon
                        stroke={color}
                        points="156.9 5 56.15 5 5.77 92.25 56.15 179.5 156.9 179.5 207.27 92.25 156.9 5" />
                    <polygon stroke={color}
                        points="417.98 179.5 317.24 179.5 266.86 266.75 317.24 354 417.98 354 468.36 266.75 417.98 179.5" />
                    <polygon stroke={color}
                        points="507.14 92.25 406.39 92.25 356.01 179.5 406.39 266.75 507.14 266.75 557.51 179.5 507.14 92.25" />
                    <polygon stroke={color}
                        points="417.98 5 317.24 5 266.86 92.25 317.24 179.5 417.98 179.5 468.36 92.25 417.98 5" />
                    <polygon stroke={color}
                        points="679.07 179.5 578.32 179.5 527.95 266.75 578.32 354 679.07 354 729.45 266.75 679.07 179.5" />
                    <polygon stroke={color}
                        points="768.23 92.25 667.48 92.25 617.1 179.5 667.48 266.75 768.23 266.75 818.6 179.5 768.23 92.25" />
                    <polygon stroke={color}
                        points="679.07 5 578.32 5 527.95 92.25 578.32 179.5 679.07 179.5 729.45 92.25 679.07 5" />
                    <polygon stroke={color}
                        points="940.16 179.5 839.41 179.5 789.03 266.75 839.41 354 940.16 354 990.53 266.75 940.16 179.5" />
                    <polygon stroke={color}
                        points="1029.31 92.25 928.56 92.25 878.19 179.5 928.56 266.75 1029.31 266.75 1079.69 179.5 1029.31 92.25" />
                    <polygon stroke={color}
                        points="940.16 5 839.41 5 789.03 92.25 839.41 179.5 940.16 179.5 990.53 92.25 940.16 5" />
                    <polygon stroke={color}
                        points="1201.24 179.5 1100.5 179.5 1050.12 266.75 1100.5 354 1201.24 354 1251.62 266.75 1201.24 179.5" />
                    <polygon stroke={color}
                        points="1290.4 92.25 1189.65 92.25 1139.28 179.5 1189.65 266.75 1290.4 266.75 1340.77 179.5 1290.4 92.25" />
                    <polygon stroke={color}
                        points="1201.24 5 1100.5 5 1050.12 92.25 1100.5 179.5 1201.24 179.5 1251.62 92.25 1201.24 5" />
                </g>
            </g>
        </svg>
    )
}

export default Hexagons
