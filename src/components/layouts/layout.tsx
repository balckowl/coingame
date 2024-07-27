import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}
