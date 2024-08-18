
function ProjectCard({title, image, desc}) {
    return (
        <div className="border border-secondary p-4 rounded-md flex flex-col">
            <div>
                <img src={image} alt="Something went wrong" />
            </div>
            <div className="mt-5 text-white font-extrabold text-2xl border-b border-primary">
                <h6>{title}</h6>
            </div>
            <div className="mt-5 text-white font-semibold text-lg">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard;