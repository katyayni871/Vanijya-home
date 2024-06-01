import { Carousel } from "./Carousel/carousel";
import {slides} from '../../utils/data.json'
import { Link, Outlet } from "react-router-dom";
import StoreCard from "./Stores/StoreCard";
import {stores} from '../../utils/store.json'
import { Resturant } from "./Resturants/Resturant";
import { Market } from "./Market";

const Body = () => {
    return <div className="">

        <div className="flex justify-center">
            <Carousel data={slides}/>
        </div>
        <div className="my-10 py-10 h-4/5">
            <img src="https://res.cloudinary.com/dppkwpi0p/image/upload/v1716399148/shopping%20mall/u1bhtafebj08mpxpd2sf.png"/>
        </div>
        <div className="grid grid-cols-3">
            {stores.map((data, id) => {
               return (
               <Link to={"/stores/" + data?.id}> <StoreCard img={data.img} logo={data.logo}/></Link>
               )})}
        </div>
        <Resturant/>
        <Market/>
        
        <Outlet/>
    </div>
}

export default Body;