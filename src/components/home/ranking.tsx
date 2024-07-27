import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Ranking() {

    const rankingList = [
        { name: "ひよこまめ", exp: "5000" },
        { name: "ひよこまめ", exp: "4000" },
        { name: "ひよこまめ", exp: "3000" },
        { name: "ひよこまめ", exp: "1000" }
    ]
    return (
        <div className="border rounded-md p-7">
            <div className="flex justify-between items-center mb-[10px]">
                <h4 className="text-[1.4rem] font-bold">ランキング</h4>
                <Button asChild>
                    <Link to="/ranking">
                        もっと見る
                    </Link>
                </Button>
            </div>
            <ul className="text-[1rem] space-y-3">
                {rankingList.map((item, index) => (
                    <li key={index} className="flex justify-between border px-[10px] py-[7px] rounded-sm shadow-md">
                        <div className="flex items-center gap-2">
                            <p className={`${index + 1 === 1 && "bg-yellow-300"} ${index + 1 === 2 && "bg-gray-300"} ${index + 1 === 3 && "bg-orange-600"} ${index + 1 > 3 && "bg-muted"} w-[30px] h-[25px] flex items-center justify-center rounded-md`}>{index + 1}</p>
                            <p>{item.name}</p>
                        </div>
                        <p>{item.exp}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
