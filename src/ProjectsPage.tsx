import imgPintoBoy from './images/pintoboy.png';
import gifPintoBoy from './images/pintoboy_anim.gif';

import imgGuy from './images/guy.png';
import gifGuy from './images/guy.gif';

import ProjectListEntry from './ProjectListEntry';

var assmyDesc: string = 'Created a game in the span of a month using a specific theme. Effectively collaborated with an artist in order to create designs and animations for the project. Finished the project, obeying the deadline, and submitted it to a game jam event.';

function ProjectsPage(){
    return(
        <>
            <h2 style={{marginBottom: '1rem'}}>Projects</h2>
            {/* <h2>Projects</h2>  */}
            {/* bold only parts of the description text */}
            <ProjectListEntry title='PintoBoy' subtitle='C#, Unity, Blender' date='12/2023 - 02/2024' linkText={['View on Github', 'View on Thunderstore']} links={['https://github.com/cpinta/PintoBoy-LethalCompanyMod', 'https://thunderstore.io/c/lethal-company/p/Pinta/PintoBoy/']} image={imgPintoBoy} hover={gifPintoBoy} descrption='Programmed, 3D modeled, and textured an item for the game Lethal Company. The item was published on a public modding website where I received and responded to feedback. The item has amassed over 800,000 downloads.' />
            <ProjectListEntry title='A Skeleton Stole My Wife' subtitle='GDScript, Godot' date='10/2024' linkText={['View on Github', 'Play on Itch']} links={['https://github.com/cpinta/a-skeleton-stole-my-wife', 'https://pinta.itch.io/a-skeleton-stole-my-wife']} image={imgGuy} hover={gifGuy} descrption={assmyDesc} />

        </>
    )
}

export default ProjectsPage;