import RandomShapes from '../../assets/images/random-shapes.png'
import SkillBox from './SkillBox';

function Skills() {
    const languages = {
        title: 'Languages',
        skills: [
            'JavaScript',
            'C#',
            'Java'
        ]
    }
    const others = {
        title: 'Others',
        skills: [
            'HTML',
            'CSS',
            'REST',
        ]
    }
    const frameworks = {
        title: 'FrameWorks',
        skills: [
            "Angular",
            "React",
            "Spring/Spring Boot"
        ]
    }
    const databases = {
        title: 'Databases',
        skills: [
            "Sql",
            "Mysql"
        ]
    }
    return(
        <div className="flex flex-row container mx-auto mt-10">
            <div>
                <img src={RandomShapes} alt="" />
            </div>
            <div className='flex flex-row justify-around mx-auto'>
                <div className='mx-10'>
                    <SkillBox title={languages.title} skills={languages.skills} />
                </div>
                <div className='mx-10'>
                    <SkillBox title={others.title} skills={others.skills} />
                </div>
                <div className='mx-10'>
                    <SkillBox title={frameworks.title} skills={frameworks.skills} />
                    <SkillBox title={databases.title} skills={databases.skills} />
                </div>
            </div>
        </div>
    )
}

export default Skills;