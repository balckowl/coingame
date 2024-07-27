import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


export default function Login() {
  return (
    <div className="flex justify-center pt-[100px]">
      <div>
        <h3 className="text-center font-bold text-[2.0rem]">Login to App</h3>
        <img src="/arcade.png" alt="" className="w-[250px] mb-[15px]" />
        <Button className="flex gap-2 mx-auto mb-[10px] items-center">
          <FontAwesomeIcon icon={faGoogle} />
          <p>Googleでログインする</p>
        </Button>
        <div className="text-center">
          <Button asChild variant="link">
            <Link to="/signup">
              Not account yet?
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
