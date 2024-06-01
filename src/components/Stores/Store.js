import { Outlet } from "react-router-dom"

const Store = () => {
    const { id } = useParams();
    const [resturant, resturantMenu] = useResturant(id);
    
    return <>
    <div>
        <h1>Store</h1>
    </div>
    <Outlet/>
    </>

}

export default Store;