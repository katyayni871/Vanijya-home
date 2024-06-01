import { Link } from "react-router-dom";
import email from '../../images/email.png'
import phone from '../../images/phone-call.png'
import pin from '../../images/pin.png'
const Footer = () => {
    return <div className="bg-[#f5f5f5] h-80 mt-8 flex justify-evenly items-center">
        <div className="h-1/2">
            <img src="https://res.cloudinary.com/dppkwpi0p/image/upload/v1716403837/shopping%20mall/kfjup172r3gk5as9wgtu.jpg"/>
        </div>
        <div className="flex w-1/4 h-1/2 pb-5 justify-evenly">
            <div>
                <ul className="flex flex-col gap-3">
                    <li><Link>About Us</Link></li>
                    <li><Link>Stores</Link></li>
                    <li><Link>Mall Map</Link></li>
                    <li><Link>Resturants</Link></li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col gap-3">
                    <li><Link>Terms & Conditions</Link></li>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>CSR Policy</Link></li>
                    <li><Link></Link></li>
                </ul>
            </div>
        </div>
        <div className="h-1/2 flex flex-col w-1/5 ">
            <p className="text-2xl pb-3 font-serif">
                Contact us
            </p>
            <div className="flex flex-col gap-3">
                <div className="flex gap-x-1">
                    <img className="h-4 mt-1" src={pin}/>
                    <p>33, Syed Amir Ali Ave, Park Circus, Beck Bagan Row, Kolkata, West Bengal 700017</p>
                </div>
                <div className="flex gap-x-1">
                    <img className="h-4 my-auto" src={phone}/>
                    <p>033 - 22877777</p>
                </div>
                <div className="flex gap-x-1">
                    <img className="h-4 my-auto" src={email}/>
                    <p>quest.helpdesk@rpsg.in</p>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;