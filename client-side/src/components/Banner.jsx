import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="grid grid-rows-2">
            <div className="relative">
                <img src="https://us.louisvuitton.com/images/is/image/PUSH2_RUN55_WOMENS_DI3.jpg" alt="" />
                <h2 className="pl-10 pb-14 absolute w-full py-2.5 bottom-0 inset-x-0 font-bold text-white text-4xl">FRESH KICKS</h2>
                <Link to={'/Shoes'} type="button" className="ml-10 absolute bottom-0 inset-x-0 text-black bg-white text-center font-medium w-64 text-sm px-5 py-2.5 mr-2 mb-2">Shop Shoes</Link>
            </div>
            <div className="text-center pt-20">
                <div className="font-bold text-3xl pb-8">
                    SERVICES
                </div>
                <div className="text-left grid grid-cols-2 pl-10 gap-4 pr-10">
                    <div>
                        <img className="w-[48rem]" src="https://us.louisvuitton.com/images/is/image/Homepage_Service_Store_Appointment_DI3.jpg?wid=2048" />
                        <h2 className="text-xl font-bold pt-4">Virtual or In-Store Appointments</h2>
                        <h2 className="font-thin text-lg pt-1">Book a personal shopping experience with a Louis Vuitton Client Advisor.</h2>
                    </div>
                    <div>
                        <img className="w-[48rem]" src="https://us.louisvuitton.com/images/is/image/Homepage_Service_Contact_Us_DI3.jpg?wid=2048" />
                        <h2 className="text-xl font-bold pt-4">Contact Us</h2>
                        <h2 className="font-thin text-lg pt-1">Louis Vuitton Client Advisors are always here to help.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}