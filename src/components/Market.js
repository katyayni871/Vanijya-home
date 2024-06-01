import right from '../../images/arrow-point-to-right.png'
export const Market = () => {
    return <>
    <div className='flex w-4/5 mx-auto my-10 py-8'>
        <div className='flex flex-col justify-evenly'>
            <h3 className=''>MARKET PLACE</h3>
            <h3 className='text-red-950 font-serif'>UPPER BASEMENT</h3>
            <h2 className='text-4xl font-serif'>A Family Convenience Store</h2>
            <p>Vanija's Nest, a part of the Vanijya Group, is a multi-format retailer providing a wide range of quality products across categories such as food, personal care, fashion, home essentials, electrical and electronics to its key consumers.</p>
            <img className='' src=''/>
            <div className='flex justify-center rounded gap-x-2 py-1 bg-amber-400 w-24 cursor-pointer' >
                <p>Explore</p>
                <img className="h-3 my-auto"src={right}/>
            </div>
        </div>
        <div>
            <img src='https://res.cloudinary.com/dppkwpi0p/image/upload/v1716402876/shopping%20mall/oh4olku8m9gsm6r5qgyp.jpg'/>
        </div>
    </div>
    <div className='my-10 py-8' >
        <img src='https://res.cloudinary.com/dppkwpi0p/image/upload/v1716399148/shopping%20mall/u1bhtafebj08mpxpd2sf.png'/>
    </div>
    </>
}