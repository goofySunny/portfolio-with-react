import Arrow from '../../assets/images/arrow-white.svg';

function Divider({title, hasMore = false}) {

    return (
        <div className="flex row justify-between container mx-auto mt-10">
            <div className="relative w-1/2 h-10 flex">
                <div className="absolute w-full border-b-2 border-primary top-1/2 z-10"></div>
                <p className="text-white bg-background font-bold text-2xl absolute z-20 px-3"><span className="text-primary">#</span>{title}</p>
            </div>
            <div>
                {hasMore === true && 
                    <button className="rounded-xl border border-primary text-white flex px-2 hover:cursor-pointer">
                        <span>See More</span>
                        <img src={Arrow} alt="" className='transform -rotate-90' />
                    </button>
                }
            </div>
        </div>
    )
}

export default Divider;