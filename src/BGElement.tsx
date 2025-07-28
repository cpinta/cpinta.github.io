import React, { useCallback, useEffect, useRef, useState } from 'react';

type BGElementProps = {
    id: string;
    x: number;
    y: number;
    scrollSpeed?: number;
    image?: string;
    style?: React.CSSProperties;
};


function BGElement({id, image, x, y, scrollSpeed, style}: BGElementProps) {
    
    const floaterRef = useRef<HTMLDivElement>(null);
    var prevTime: number;

    var prevIsValid = useRef<boolean>(false);
    var prevX = useRef<number>(0);
    var prevY = useRef<number>(0);
    var spinSpeed = useRef<number>(0);

    var updateEvery: number = 100
    const currentTime = useRef<number>(0);
    const [rotation, setRotation] = useState(0);
    const spinSlowdown: number = 0.1
    const spinMultiplier: number = 5

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
            console.log("spinspeed: ", spinSpeed.current, " rotation:", rotation)
            setRotation(rotation + spinSpeed.current)

            if(spinSpeed.current < 0){
                spinSpeed.current = 0
                prevIsValid.current = false
                return
            }
        }, 32);
        

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
        <div id={id} ref={floaterRef} style={{top: y, left: x, position: 'absolute', rotate: `${rotation}deg`}} onClick={() => setRotation(Math.random() * 180)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <img src={image} style={style} />
        </div>
    )
}


export default BGElement;