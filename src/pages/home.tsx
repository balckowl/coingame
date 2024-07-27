import Banner from "../components/home/banner";
import Game from "../components/home/game";
import Profile from "../components/home/profile";
import Ranking from "../components/home/ranking";

export default function Home() {
  return (
    <div className="container grid grid-cols-10 gap-3 place-content-center min-h-[calc(100vh-80px-80px)]">
      <div className="col-span-10">
        <Profile />
      </div>
      <div className="col-span-6">
        <Ranking />
      </div>
      <div className="col-span-4">
        <Game />
      </div>
      <div className="col-span-10">
        <Banner />
      </div>
    </div>
  )
}
