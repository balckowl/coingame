import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Outlet />
            </main>
            <div className="sticky top-full">
                <Footer />
            </div>
        </div>
    )
}
