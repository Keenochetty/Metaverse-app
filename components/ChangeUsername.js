import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const { setUserData, isUserupdating, userError, user } = useMoralis();

    const setUsername = () =>{
        const username=prompt(`Enter your new Username (current: ${user.getUsername()} )`)

        if (!username) return;

    setUserData({
        username,
    });
    };

    

   
    return (
        <div className="text-sm absolute top-5 right-5" >
            <button disabled={isUserupdating} onClick={setUsername} 
            className="hover:text-blue-500 border-500 rounded-full p-2 outline-blue-500 outline-double ">
                Change your username
            </button>
        </div>
    )
}

export default ChangeUsername
