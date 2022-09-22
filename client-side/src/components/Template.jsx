import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Template() {
    return (
        <section>
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    )
}