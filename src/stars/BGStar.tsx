import React, { useEffect, useRef, useState } from 'react';

type BGElementProps = {
    id: string;
    x: number;
    y: number;
    scrollSpeed?: number;
    image?: string;
    style?: React.CSSProperties;
};

function BGStar({id, image, x, y, scrollSpeed, style}: BGElementProps) {
    
    const floaterRef = useRef<HTMLDivElement>(null);
    const [_isHovered, setIsHovered] = useState(false);
    
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
            <img src={image} style={style} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} />
        </div>
    )
}


export default BGStar;