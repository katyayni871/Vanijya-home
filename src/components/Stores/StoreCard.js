const StoreCard = ({
    img, logo,
}) => {
    return <div className="flex">
        <div>
            <img src={img}/>
        </div >
        <div className="flex justify-center items-center place-items-center bg-black">
            <img className="w-1/2 " src={logo}/>
        </div>
    </div>

}

export default StoreCard;
