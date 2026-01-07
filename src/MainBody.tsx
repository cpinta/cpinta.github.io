import { BrowserRouter } from 'react-router-dom';

import GridItem from './GridItem';

import iconGithub from './images/github-mark.png';
import iconLinkedIn from './images/InBug-White.png';

import BGStars from './BGStars';

import ProjectsPage from './ProjectsPage';


function MainBody(){
    return(
        <BrowserRouter>
            <section className='Background'>
                <BGStars />
                <div style={{zIndex: 5, pointerEvents: 'none'}}>
                    <h1 className='MainBodyTitle'>Christian Pinta</h1>
                    <div className="ProjectBody" style={{pointerEvents: 'all'}}>
                        <div className='TinyPromoBubblesParent'>
                            <div className="TinyPromoBubbles" style={{float: 'left', height: '3rem'}}>
                                <div className="MainGrid" style={{width: '10rem'}} >
                                    <GridItem title="Github" image={iconGithub} link='https://github.com/cpinta' newTab={true} />
                                    <GridItem title="LinkedIn" image={iconLinkedIn} link='https://www.linkedin.com/in/christian-pinta/' newTab={true} />
                                    {/* <GridItem title="Resume" image={iconDocument} link='./Resume.pdf' newTab={true} imageStyle={{filter: 'invert(1)'}} imageAlt='Document icons created by Freepik - Flaticon' /> */}
                                </div>
                            </div>
                        </div>
                        <ProjectsPage />
                        {/* <Routes>
                            <Route path="/" element={<ProjectsPage />} />
                            <Route path="/experience" element={<ExperiencePage />} />
                        </Routes> */}
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}


export default MainBody;