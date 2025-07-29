import React, { useCallback, useEffect, useRef, useState } from 'react';

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
    
    var floaterStyle: React.CSSProperties = { ...starStyle, top: y, left: x, position: 'absolute' };

    return(
        <div id={id} ref={floaterRef} style={floaterStyle} onClick={() => setRotation(Math.random() * 180)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <img src={image} style={{rotate: `${rotation}deg`}} />
        </div>
    )
}


export default BGElement;