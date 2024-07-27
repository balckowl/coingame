import { Heart, StickyNote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Progress } from "../../components/ui/progress";

export default function Profile() {
    return (
        <div className="border p-7 rounded-md flex ittems-center justify-between">

            <div className="flex items-center gap-10">
                <Avatar className="w-[65px] h-[65px]">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-[1rem] font-bold">ひよこまめ</p>
            </div>


            <div>
                <div className="flex items-center gap-2 text-[1rem] justify-end">

                    <div className="flex items-center bg-muted gap-3 py-[7px] px-[10px] rounded-md">
                        <img src="/qiita.png" alt="" className="w-[20px]" />
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <StickyNote size={15} />
                                <p>28</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Heart size={18} color="red" />
                                <p>28</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center bg-muted gap-3 py-[7px] px-[10px] rounded-md">
                        <img src="/zenn.jpg" alt="" className="w-[20px]" />
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <StickyNote size={15} />
                                <p>100</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Heart size={18} color="red" />
                                <p>28</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="text-[1rem]">Lv.100</p>
                <Progress value={33} className="w-[500px]" />
            </div>

        </div>
    )
}
