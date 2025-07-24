import React, { useEffect, useRef } from 'react';
import GridItem from './GridItem';

type BGElementProps = {
    id: string;
    x: number;
    y: number;
    scrollSpeed?: number;
    image?: string;
};

function BGElement({id, image, x, y, scrollSpeed}: BGElementProps) {
    
    const floaterRef = useRef<HTMLDivElement>(null);
    
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

    return(
        <div id={id} ref={floaterRef} style={{top: y, left: x, position: 'absolute'}}>
            <img src={image} />
        </div>
    )
}


export default BGElement;