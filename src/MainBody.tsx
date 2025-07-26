import React, { useRef } from 'react';
import GridItem from './GridItem';

import iconDocument from './images/document.png';
import iconGithub from './images/github-mark.png';
import iconLinkedIn from './images/InBug-White.png';

import imgStar from './images/star.png';

import BGElement from './BGElement';
import BGStars from './BGStars';

function MainBody(){
    return(
        <section className='Background'>
            <BGStars x_min={0} x_max={window.innerWidth} y_min={0} y_max={Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)} />
            <h1 className='MainBodyTitle'>Christian Pinta</h1>
            <div>
                <div className='TinyPromoBubblesParent'>
                    <div className="TinyPromoBubbles" style={{float: 'left'}}>
                        <div className="MainGrid" >
                            <GridItem title="Github" image={iconGithub} link='https://github.com/cpinta' newTab={true} />
                            <GridItem title="LinkedIn" image={iconLinkedIn} link='https://www.linkedin.com/in/christian-pinta/' newTab={true} />
                            <GridItem title="Resume" image={iconDocument} imageStyle={{filter: 'invert(1)'}} imageAlt='Document icons created by Freepik - Flaticon' link='' />
                        </div>
                    </div>
                </div>
                <div className="MainBody">
                    <div>
                        {/* <BGElement image={imgStar} x={100} y={1000} scrollSpeed={3}  /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default MainBody;