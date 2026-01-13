import imgPintoBoy from './images/projects/pintoboy.gif';
import gifPintoBoy from './images/projects/pintoboy_anim.gif';

import imgGuy from './images/projects/guy.png';
import gifGuy from './images/projects/guy.gif';

import imgBear from './images/projects/bear.png';
import gifBear from './images/projects/bear_anim.gif';

import svgGit from './images/octicon--git-fork-24.svg'
import svgPlay from './images/play-24.svg'

import ProjectListEntry from './ProjectListEntry';

var skeltonDesc: string = 'Created a game in the span of a month using a specific theme. Effectively collaborated with an artist in order to create designs and animations for the project. Finished the project, obeying the deadline, and submitted it to a game jam event.';
var bearDesc: string = 'A 2D Platformer with 20 stages each with a 20 second time limit. This project was created for a 3 week game jam with the goal of polish. Utilized object-oriented programming and a clean code foundation to create a complete and fun little game.'

function ProjectsPage(){
    return(
        <>
            <h2 style={{marginBottom: '1rem'}}>Projects</h2>
            {/* <h2>Projects</h2>  */}
            {/* bold only parts of the description text */}
            <ProjectListEntry 
                title='Bearly 20 Seconds' 
                subtitle='GDScript, Godot' date='11/2025 - 1/2026' 
                linkIcons={[
                    {icon: svgGit, link:'https://github.com/cpinta/20-seconds', alt:'Github'},
                    {icon: svgPlay, link:'https://pinta.itch.io/bear-game', alt:'Play'},
                ]} 
                image={imgBear} 
                hover={gifBear} 
                descrption={bearDesc}
                cssClass='ListEntryBear'
                />
            <ProjectListEntry 
                title='PintoBoy' 
                subtitle='C#, Unity, Blender' 
                date='12/2023 - 02/2024' 
                linkIcons={[
                    {icon: svgGit, link:'https://github.com/cpinta/PintoBoy-LethalCompanyMod', alt:'Github'},
                    {icon: svgPlay, link:'https://thunderstore.io/c/lethal-company/p/Pinta/PintoBoy/', alt:'Thunderstore'},
                ]} 
                image={imgPintoBoy} 
                hover={gifPintoBoy} 
                descrption='Programmed, 3D modeled, and textured an item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads.' 
                />
            <ProjectListEntry 
                title='A Skeleton Stole My Wife' 
                subtitle='GDScript, Godot' date='10/2024' 
                linkIcons={[
                    {icon: svgGit, link:'https://github.com/cpinta/a-skeleton-stole-my-wife', alt:'Github'},
                    {icon: svgPlay, link:'https://pinta.itch.io/a-skeleton-stole-my-wife', alt:'Play'},
                ]} 
                image={imgGuy} 
                hover={gifGuy} 
                descrption={skeltonDesc} 
                />

        </>
    )
}

export default ProjectsPage;