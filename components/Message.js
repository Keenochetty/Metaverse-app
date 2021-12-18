import { useMoralis} from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

function Message({ message }) {
    const {user} = useMoralis();

    const isUserMessage = message.get("ethAddress") === 
    user.get("ethAddress")

    return (
        <div className={`flex item-end space-x-2 relative ${
            isUserMessage &&'justify-end'
            }`}>

                <div className={`relative h-8 w-8 ${
                    isUserMessage && 'order-last ml-2'
                    }`}>
                    <Avatar username={message.get("username")} />
                </div>
            <div className={`flex space-x-4 p-3 rounded-lg
            ${isUserMessage ? 
                'rounded-br-none bg-white '
                : 'rounded-bl-none bg-gray-800'
            }`}
            >
           <p>{message.get('message')}</p> 
        </div>

            <TimeAgo
            className={`text-[10px] italic text-gray-400 ${
                isUserMessage && 'order-first pr-1'
            } `}
                datetime={message.createdAt}
            />

        <p className={`absolute -bottom-5 text-xs ${
            isUserMessage ? 'text-white'
            : "text-blue-400"
        }`}>
            {message.get('username')}
        </p>

    </div>
    )
}

export default Message