import './Hero.css';
import heroImg from '../../assets/images/hero.png';

function Hero() {

    return (
        <section className="container bg-background mt-32 mx-auto flex flex-row justify-around" id='hero'>
            <div className='flex flex-col justify-around'>
                <h2 className='text-white font-bold text-4xl'>
                Elias is a <span className='text-primary'>web designer</span> and <span className='text-primary'>front-end</span> developer
                </h2>
                <button className='border max-w-fit border-primary text-white px-10 py-2'>Contact Me !!</button>
            </div>
            <div>
                <img src={heroImg} alt="" />
                <h4 className='text-2xl text-secondary'>Currently Working on the website you are seeing</h4>
            </div>
        </section>
    )   

}


export default Hero;