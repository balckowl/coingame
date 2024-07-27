import { Link } from "react-router-dom";

export default function Game() {
    return (
        <div className="border rounded-sm p-7 h-full">
            <Link to="/games">
                <h4 className="text-[1.4rem] font-bold">ミニゲームを始める</h4>
                <div className="grid place-content-center">
                    <img src="/arcade.png" alt="" className="w-[200px]" />
                </div>
            </Link>
        </div>
    )
}
