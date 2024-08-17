import './Quote.css'

function Quote({thingToSay}) {
    return(
        <div className='border border-secondary py-2 px-4 flex justify-center items-center mx-auto w-1/2 mt-10 relative'>
            <p className='text-white font-bold'>
                {thingToSay}
            </p>
            <span className='bg-background absolute -top-10 px-2 left-1 font-extrabold text-5xl text-white'>
                ,,
            </span>
            <span className='bg-background absolute px-2 -top-10 right-1 font-extrabold text-5xl text-white'>
                ,,
            </span>
        </div>
    )
}

export default Quote;