import React, { useEffect, useRef, useState } from 'react';

type BGElementProps = {
    id: string;
    x: number;
    y: number;
    scrollSpeed?: number;
    startRotation?: number;
    image?: string;
    starStyle?: React.CSSProperties;
};


function BGElement({id, image, x, y, scrollSpeed, startRotation = 0, starStyle}: BGElementProps) {
    
    const floaterRef = useRef<HTMLDivElement>(null);

    var prevIsValid = useRef<boolean>(false);
    var prevX = useRef<number>(0);
    var prevY = useRef<number>(0);
    var spinSpeed = useRef<number>(0);

    var FPS: number = 20
    var UPDATE_EVERY: number = 1000 / FPS;
    // const currentTime = useRef<number>(0);
    var rotat = useRef<number>(startRotation);
    const [rotation, setRotation] = useState(startRotation);
    const SPIN_SLOWDOWN: number = 0.001
    const SPIN_MULTIPLIER: number = 0.01
    const MIN_STAR_SPIN_SPEED: number = 1;

    useEffect(() => {
        function parallax() {
            const yPos = 0 - window.pageYOffset / (scrollSpeed ?? 1);
            if (floaterRef.current) {
                floaterRef.current.style.transform = `translateY(${yPos}px)`;
            }
        }
        window.addEventListener("scroll", parallax);

        return () => window.removeEventListener("scroll", parallax);
    }, []);

    const cbUpdateRotation = useRef(undefined as number | undefined);
    
    function updateRotation() {
        var deltaTime: number = UPDATE_EVERY
        
        spinSpeed.current -= SPIN_SLOWDOWN * deltaTime

        if(spinSpeed.current < MIN_STAR_SPIN_SPEED){
            spinSpeed.current = 0
            prevIsValid.current = false
            clearInterval(cbUpdateRotation.current)
            return
        }
        rotat.current += spinSpeed.current

        setRotation(rotat.current)
    }

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>){
        prevIsValid.current = true
        prevX.current = event.clientX;
        prevY.current = event.clientY;
        cbUpdateRotation.current = setInterval(updateRotation, UPDATE_EVERY);
    }

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        var x = event.clientX
        var y = event.clientY

        if (prevIsValid.current){
            var diffx = x - prevX.current
            var diffy = y - prevY.current

            var distance = Math.pow(diffx, 2) + Math.pow(diffy, 2)

            spinSpeed.current = distance * SPIN_MULTIPLIER
        }
        else{
            prevX.current = x
            prevY.current = y
            prevIsValid.current = true
        }
    }

    function handleMouseLeave(_event: React.MouseEvent<HTMLDivElement>){
        prevIsValid.current = false
    }
    
    var floaterStyle: React.CSSProperties = { ...starStyle, top: y, left: x+`%`, position: 'absolute' };

    return(
        <div id={id} ref={floaterRef} style={floaterStyle} onClick={() => setRotation(Math.random() * 180)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <img src={image} style={{rotate: `${rotation}deg`}} />
        </div>
    )
}


export default BGElement;