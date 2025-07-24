import React, { useEffect, useRef, useState } from 'react';
import imgStar from './images/star.png';

import BGElement from './BGElement';

type BGStarsProps = {
    x_min: number,
    x_max: number,
    y_min: number,
    y_max: number,
}


function BGStars({x_min, x_max, y_min, y_max}: BGStarsProps){

    const starParent = useRef<HTMLDivElement>(null);
    const X_MAX = x_max;
    const Y_MAX = y_max;
    const X_MIN = x_min;
    const Y_MIN = y_min;

    var starCount = 0;
    
    const [stars, setStars] = useState<React.ReactElement[]>([]);

    function spawnStar(){
        var randx = Math.random() * (X_MAX - X_MIN) + X_MIN;
        var randy = Math.random() * (Y_MAX - Y_MIN) + Y_MIN
        return <BGElement key={'star'+starCount} id={'star'+starCount} image={imgStar} x={randx} y={randy} scrollSpeed={3}  />
    }

    function spawnStars(count: number) {
        var newStars: React.ReactElement[] = [];
        for (let i = 0; i < count; i++) {
            newStars.push(spawnStar());
        }
        setStars(newStars)
    }

    useEffect(() => {
        spawnStars(100);
    }, []);

    return(
        <section id='starParent' ref={starParent} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {stars}
        </section>
    )
}


export default BGStars;