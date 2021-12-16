import Image from "next/image";
import { useMoralis } from "react-moralis";
import image from "../public/images/home-bg.jpg";
import image1 from "../public/images/profile-pic.jpg";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-black">
      <h2>login screen</h2>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src= {image1}
          className="object-cover rounded-3xl "
          height={230}
          width={200}
        />

        <button
          onClick={authenticate}
          className="bg-blue-300 rounded-3xl p-5 font-bold animate-pulse"
        >
          Login to METAVERSE
        </button>
      </div>
      <div className="w-full h-screen ">
        <Image
          src= {image}
          layout="fill"
          objectFit="center"
        />
      </div>
    </div>
  );
}

export default Login;
