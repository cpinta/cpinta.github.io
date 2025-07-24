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
            <BGStars x_min={0} x_max={window.screenX} y_min={0} y_max={window.document.body.offsetHeight} />
            <h1 className='MainBodyTitle'>Christian Pinta</h1>
            <section className="MainBody">
                <section>
                    <section className="MainGrid" style = {{float: 'left'}}>
                        <GridItem title="Github" image={iconGithub} link='https://github.com/cpinta' newTab={true} />
                        <GridItem title="LinkedIn" image={iconLinkedIn} link='https://www.linkedin.com/in/christian-pinta/' newTab={true} />
                        <GridItem title="Resume" image={iconDocument} imageStyle={{filter: 'invert(1)'}} imageAlt='Document icons created by Freepik - Flaticon' link='' />
                    </section>
                </section>
                <section>
                    {/* <BGElement image={imgStar} x={100} y={1000} scrollSpeed={3}  /> */}
                </section>
            </section>
        </section>
    )
}


export default MainBody;