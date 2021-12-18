import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";


export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  
  return (

    <div className="h-screen overflow-y-scroll   overflow-hidden ">
      <div class="fullscreen-video-wrap h-screen ">
              <video src="images/video.mp4" 
              muted autoPlay loop
              ></video>
            </div>
      
      <Head>
        
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
    
      
      
      <div className="max-w-screen-2xl mx-auto "  >
        
        <Header className="z-50" />
        
    
        
        <Messages/>
        
       
      </div>
      
    </div>
    
  );
}
