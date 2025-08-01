import React, { useEffect, useRef, useState } from 'react';
import imgStar from './images/star.png';

import BGElement from './BGElement';

type BGStarsProps = {
}


function BGStars({}: BGStarsProps){

    const starParent = useRef<HTMLDivElement>(null);
    const X_MIN = 0;
    const Y_MIN = 0;

    const DESKTOP_STAR_TOTAL = 150;
    const MOBILE_STAR_TOTAL = 50;

    const MOBILE_WINDOW_WIDTH = 1200;

    var starCount = 0;
    // make algorithm that adds spacing in between stars
    var starSpace = 100;
    var scrollSpeedDiffBetweenStarLayers = 2;
    var scrollLayerCount = 3;
    
    const [stars, setStars] = useState<React.ReactElement[]>([]);



    useEffect(() => {
        if(window.innerWidth < MOBILE_WINDOW_WIDTH){
            spawnStars(MOBILE_STAR_TOTAL);
        }
        else{
            spawnStars(DESKTOP_STAR_TOTAL);
        }
        window.addEventListener('resize', () => {
            var num = starParent.current?.childElementCount? starParent.current.childElementCount : 99999;
            if(window.innerWidth < MOBILE_WINDOW_WIDTH){
                if(num != MOBILE_STAR_TOTAL){
                    if(num > MOBILE_STAR_TOTAL){
                        spawnStars(MOBILE_STAR_TOTAL);
                    }
                }
            }
            else{
                if(num != DESKTOP_STAR_TOTAL){
                    if(num < DESKTOP_STAR_TOTAL){
                        
                        spawnStars(DESKTOP_STAR_TOTAL);
                    }
                }
            }
        });
    }, []);

    function spawnStar(){
        const screenWidth = starParent.current?.clientWidth? starParent.current?.clientWidth : window.innerWidth;
        const starWidth = 50;
        const starPercent = starWidth / screenWidth * 100;
        const X_MAX = starParent.current?.clientWidth? starParent.current?.clientWidth : window.innerWidth;
        const Y_MAX = starParent.current?.clientHeight? starParent.current?.clientHeight : window.innerHeight;
        var randx = random() * (X_MAX - X_MIN) + X_MIN
        var randy = random() * (Y_MAX - Y_MIN) + Y_MIN
        var randRotation = (random() * 3) * 90;
        var layer = Math.trunc((random() * scrollLayerCount) + 1);
        var scrollSpeed = layer * scrollSpeedDiffBetweenStarLayers;

        var opacity = 100 * ((layer)/scrollLayerCount)

        if (layer == 3){
            if(random() < 0.1){
                layer = 10;
            }
        }

        randx = (randx/X_MAX) * 100;
        randx -= starPercent;
        
        randy -= starWidth;

        starCount++;

        return <BGElement key={'star'+starCount} id={'star'+starCount} image={imgStar} x={randx} y={randy} scrollSpeed={scrollSpeed} startRotation={randRotation} starStyle={{opacity: opacity + `%`, zIndex: layer}}  />
    }

    function spawnStars(count: number) {
        defaultSeed = 1000;
        var newStars: React.ReactElement[] = [];
        for (let i = 0; i < count; i++) {
            var star = spawnStar()
            if(star){
                newStars.push(star);
            }
        }
        setStars(newStars)
    }

    //4

    var defaultSeed = 1000;
    function random() {
        var x = Math.sin(defaultSeed++) * 10000;
        return x - Math.floor(x);
    }

    return(
        <section id='starParent' ref={starParent} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
            {stars}
        </section>
    )
}


export default BGStars;