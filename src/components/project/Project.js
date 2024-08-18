import ProjectCard from "./ProjectCard";
import Image1 from '../../assets/images/project1.jpg';
import Image2 from '../../assets/images/project2.png';
import Image3 from '../../assets/images/project3.png';

function Project() {

    const projects = [
        {
            imageURL: Image1,
            title: "ChertNodes",
            description: "Minecraft server hosting",
        },
        {
            imageURL: Image2,
            title: "ProjectX",
            description: "Discord anti-crash bot",
        },
        {
            imageURL: Image3,
            title: "Kahoot Answer Viewer",
            description: "get answers for your kahoot quiz",
        },
    ]

    return( 
        <div className='container mx-auto rounded mt-10 flex flex-row justify-around'>
            {projects.map(project => <ProjectCard image={project.imageURL} title={project.title} desc={project.description} />)}
        </div>
    )
}


export default Project;