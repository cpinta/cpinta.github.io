import React, { useEffect, useRef } from 'react';
import GridItem from './GridItem';

type ProjectListEntryProps = {
    title: string;
    image: string;
    descrption: string;
    link?: string;
};


function ProjectListEntry({title, image, descrption, link}: ProjectListEntryProps) {

    return(
        <table>
            <tr>
                <td className='table-title' colSpan={2}>
                    <h2>{title}</h2>
                </td>
            </tr>
            <tr>
                <td>     
                    <img src={image} alt={title} style={{width: 'auto', height: '5rem'}} />
                </td>
                <td className='table-desc'>
                    <p>{descrption}</p>
                </td>
            </tr>
        </table>
    )
}


export default ProjectListEntry;