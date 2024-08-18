
function SkillBox({title, skills}) {
    return (
        <div className="border border-secondary p-2 flex flex-col mt-6 min-w-72">
            <div className="border-b border-secondary">
                <span className="text-xl font-bold text-white">{title}</span>
            </div>
            <div className="mt-2">
                {skills.map(skill => <p className="text-white font-semibold text-md">{skill}</p>)}
            </div>
        </div>
    )
}

export default SkillBox;