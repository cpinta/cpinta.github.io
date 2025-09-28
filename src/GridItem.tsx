import React from 'react';

type GridItemProps = {
    title: string;
    link: string;
    image: string;
    imageAlt?: string;
    imageStyle?: React.CSSProperties;
    tooltip?: string;
    attribution?: React.ReactNode;
    newTab?: boolean;
};

function GridItem({ title, link, image, imageAlt, imageStyle, tooltip, attribution, newTab }: GridItemProps){
    return(
        
        <a className="MainGridItem" style={{ pointerEvents: 'all' }} href={link} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} >
            <img src={image} style={imageStyle} />
            <p>{title}</p>
            {attribution && (
                <div className="attribution">{attribution}</div>
            )}
        </a>
    );
}

export default GridItem;