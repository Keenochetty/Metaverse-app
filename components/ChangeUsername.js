import { useState } from "react";
import { useMoralis } from "react-moralis";
import Popup from "./Popup";

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [isOpen, setIsOpen] = useState(false);

  const setUsername = () => {

    if (!username) return;
    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={() => setIsOpen(true)}
        className="hover:text-blue-500 border-500 rounded-full p-2 outline-blue-500 outline-double "
      >
        Change your Username
      </button  >
      <Popup open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default ChangeUserName;






