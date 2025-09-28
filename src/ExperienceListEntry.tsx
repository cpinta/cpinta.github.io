import React, { useEffect, useRef } from 'react';
import GridItem from './GridItem';

type ProjectListEntryProps = {
    title: string;
    image: string;
    hover?: string;
    subtitle?: string;
    descrption: string;
    link?: string;
};


function ProjectListEntry({title, image, hover, descrption, link, subtitle}: ProjectListEntryProps) {
    
    const imgRef = useRef<HTMLImageElement>(null);

    function handleMouseEnter() {
        if (imgRef.current) {
            if(hover){
                imgRef.current.src = hover;
            }
        }
    }

    function handleMouseLeave() {
        if (imgRef.current) {
            if(image){
                imgRef.current.src = image;
            }
        }
    }

    return(
        <table className='ListEntry' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <tbody>
                <tr>
                    <td className='table-title' colSpan={2}>
                        <h2>{title}</h2> 
                    </td>
                </tr>
                <tr>
                    <td>     
                        <img ref={imgRef} src={image} alt={title} style={{width: 'auto', height: '6rem'}} />
                    </td>
                    <td className='table-desc'>
                        <p>{descrption}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


export default ProjectListEntry;