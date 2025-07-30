import React, { useRef } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import GridItem from './GridItem';

import iconDocument from './images/document.png';
import iconGithub from './images/github-mark.png';
import iconLinkedIn from './images/InBug-White.png';

import BGStars from './BGStars';

import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';


function MainBody(){
    return(
        <BrowserRouter>
            <section className='Background'>
                <BGStars x_min={0} x_max={window.innerWidth} y_min={0} y_max={Math.max(3600)} />
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
                    <div className="ProjectBody" style={{pointerEvents: 'all'}}>
                        <Routes>
                            <Route path="/" element={<ProjectsPage />} />
                            <Route path="/experience" element={<ExperiencePage />} />
                        </Routes>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}


export default MainBody;