import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then((message) => {})
      .catch((error) => {
        console.log(error.message);
      });
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex  fixed bottom-10 bg-black opacity-8  w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 
    border-blue-500">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-white pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}...`}
      ></input>
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-gray-200"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;