// i'm still not really understanding this part, but i think this is where the chat messages are being displayed in the UI. The Message component is used to render individual messages, and the Home component contains a list of Message components representing a conversation between a user and a bot. Each Message component takes in props for the type (user or bot) and the content of the message. The Home component also includes a chat input area for users to type their messages.
// i only typed "i'm still not really understanding this part", thankfully the ai filled it in with breaking down the segment. thank you robot overlords!
//website's still stuck on a loading loop, doesn't seem to ever render. strange

import { ChatInput } from "~/components/Chat";
import { ChatMessages } from "~/components/Chat";

export default function Home() {
  return (
    <main className="chat-container">
      <ChatMessages />
      {/* Chat input area */}
      <ChatInput /> 
    </main>
  );
}
