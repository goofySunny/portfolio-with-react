import GayAssHacker from '../../assets/images/gay-ass-hacker.png';
import ArrowDown from '../../assets/images/arrow-white.svg';

function About() {
    return (
        <div className='container mx-auto flex flex-row justify-between mt-10'>
            <div className='w-1/2 font-semibold text-lg text-secondary'>
                <p>
                    Hello, i’m Elias!
                </p>
                <p className='mt-14'>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                <p className='mt-14'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                <button className='border border-primary p-3 flex mt-5'>
                    <span>
                        Read More
                    </span>
                    <img src={ArrowDown} alt="" className='transform -rotate-90'/>
                </button>
            </div>
            <div>
                <img src={GayAssHacker} alt="Something went wrong" className='border-b border-primary' />
            </div>
        </div>
    )
}

export default About;