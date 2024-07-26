import { Link } from "react-router-dom";

export default function Header() {

    interface MenuItem {
        name: string
        to: string
    }

    const menuList: MenuItem[] = [
        { name: "ホーム", to: "/" },
        { name: "ゲーム一覧", to: "/games" },
        { name: "ランキング", to: "/ranking" }
    ]

    return (
        <header className="h-[80px] border-b">
            <div className="flex h-full items-center justify-between container">
                <h1>テックトック</h1>
                <ul className="flex items-center gap-3">
                    {menuList.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
