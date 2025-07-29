import React, { useRef } from 'react';
import GridItem from './GridItem';

import iconDocument from './images/document.png';
import iconGithub from './images/github-mark.png';
import iconLinkedIn from './images/InBug-White.png';

import imgStar from './images/star.png';
import imgPintoBoy from './images/pintoboy.gif';
import gifPintoBoy from './images/pintoboy_anim.gif';

import BGElement from './BGElement';
import BGStars from './BGStars';
import ProjectListEntry from './ProjectListEntry';

function MainBody(){
    console.log(document.documentElement.getBoundingClientRect().height);
    return(
        <section className='Background'>
            <div style={{zIndex: 5, pointerEvents: 'none'}}>
                <h1 className='MainBodyTitle'>Christian Pinta</h1>
                <div className='TinyPromoBubblesParent'>
                    <div className="TinyPromoBubbles" style={{float: 'left', height: '3rem'}}>
                        <div className="MainGrid" style={{width: '15rem'}} >
                            <GridItem title="Github" image={iconGithub} link='https://github.com/cpinta' newTab={true} />
                            <GridItem title="LinkedIn" image={iconLinkedIn} link='https://www.linkedin.com/in/christian-pinta/' newTab={true} />
                            <GridItem title="Resume" image={iconDocument} imageStyle={{filter: 'invert(1)'}} imageAlt='Document icons created by Freepik - Flaticon' link='' />
                        </div>
                    </div>
                </div>
                <div className="ProjectBody">
                    <h2>Projects</h2>
                    <ProjectListEntry title='PintoBoy' subtitle='C#' image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured An item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads' />
                    <ProjectListEntry title='PintoBoy' subtitle='C#' image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured An item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads' />
                    <ProjectListEntry title='PintoBoy' subtitle='C#' image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured An item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads' />
                    <ProjectListEntry title='PintoBoy' subtitle='C#' image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured An item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads' />
                    <ProjectListEntry title='PintoBoy' subtitle='C#' image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured An item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads' />
                    <ProjectListEntry title='PintoBoy' subtitle='C#' image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured An item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads' />
                    <ProjectListEntry title='PintoBoy' subtitle='C#' image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured An item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads' />
                    
                </div>
            </div>
            <BGStars x_min={0} x_max={window.innerWidth} y_min={0} y_max={Math.max(3600)} />
        </section>
    )
}


export default MainBody;