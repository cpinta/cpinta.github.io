import React, { useCallback, useEffect, useRef, useState } from 'react';

type BGElementProps = {
    id: string;
    x: number;
    y: number;
    scrollSpeed?: number;
    startRotation?: number;
    image?: string;
    style?: React.CSSProperties;
};


function BGElement({id, image, x, y, scrollSpeed, startRotation = 0, style}: BGElementProps) {
    
    const floaterRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    var prevTime: number;

    var prevIsValid = useRef<boolean>(false);
    var prevX = useRef<number>(0);
    var prevY = useRef<number>(0);
    var spinSpeed = useRef<number>(0);

    var fps: number = 20
    var updateEvery: number = 1000 / fps;
    const currentTime = useRef<number>(0);
    var rotat = useRef<number>(startRotation);
    const [rotation, setRotation] = useState(startRotation);
    const spinSlowdown: number = 0.001
    const spinMultiplier: number = 0.01

    function animate(deltaTime: number) {
        

    }
        
    
    useEffect(() => {
        function parallax() {
            const yPos = 0 - window.pageYOffset / (scrollSpeed ?? 1);
            if (floaterRef.current) {
                floaterRef.current.style.transform = `translateY(${yPos}px)`;
            }
        }
        window.addEventListener("scroll", parallax);

        const updateRotation = setInterval(() => {
            var deltaTime: number = updateEvery
            
            spinSpeed.current -= spinSlowdown * deltaTime
            if(id == 'star77'){
                console.log("spinspeed: ", spinSpeed.current, " rotation:", rotation)
            }

            // whenever I read rotation in this function, it is always 0


            if(spinSpeed.current < 0){
                spinSpeed.current = 0
                prevIsValid.current = false
                return
            }
            rotat.current += spinSpeed.current

            setRotation(rotat.current)
        }, updateEvery);
        

        return () => window.removeEventListener("scroll", parallax);
    }, []);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        var x = event.clientX
        var y = event.clientY

        if (prevIsValid.current){
            var diffx = x - prevX.current
            var diffy = y - prevY.current

            var distance = Math.pow(diffx, 2) + Math.pow(diffy, 2)

            spinSpeed.current = distance * spinMultiplier
            console.log("distance: ", distance, " spinSpeed: ", spinSpeed.current)
        }
        else{
            prevX.current = x
            prevY.current = y
            prevIsValid.current = true
        }
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>){
        prevIsValid.current = false
    }

    return(
        <div id={id} ref={floaterRef} style={{top: y, left: x, position: 'absolute'}} onClick={() => setRotation(Math.random() * 180)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <img src={image} style={style || {rotate: `${rotation}deg`}} />
        </div>
    )
}


export default BGElement;