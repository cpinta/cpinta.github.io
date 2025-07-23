import React from 'react';
import GridItem from './GridItem';
import iconDocument from './images/document.png';
import iconGithub from './images/github-mark.png';

function MainBody(){
    return(
        <section className='Background'>
            <section className="MainBody">
                <h1>Christian Pinta</h1>
                <section className="MainGrid">
                    <GridItem title="Github" image={iconGithub} link='https://github.com/cpinta' newTab={true} />
                    <GridItem title="Resume" image={iconDocument} imageStyle={{filter: 'invert(1)'}} imageAlt='Document icons created by Freepik - Flaticon' link='' />
                </section>
                <section>
                    <p>
                    </p>
                </section>
            </section>
        </section>
    )
}

export default MainBody;