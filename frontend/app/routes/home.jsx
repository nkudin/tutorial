// i'm still not really understanding this part, but i think this is where the chat messages are being displayed in the UI. The Message component is used to render individual messages, and the Home component contains a list of Message components representing a conversation between a user and a bot. Each Message component takes in props for the type (user or bot) and the content of the message. The Home component also includes a chat input area for users to type their messages.
// i only typed "i'm still not really understanding this part", thankfully the ai filled it in with breaking down the segment. thank you robot overlords!
//website's still stuck on a loading loop, doesn't seem to ever render. strange

function Message(props) {
  return (
    <div className={`message ${props.type}-message`}>
      <div className="message-content">
        {props.content}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="chat-container">
      <div className="chat-messages">
       <Message 
        type = "user"
        content ="Hello! Can you help me understand React Router v7?"
        />

        <Message
        type ="bot"
        content = "Of course! React Router v7 is the latest version that introduces several improvements including better data loading, enhanced nested routing, and improved TypeScript support. What specific aspect would you like to learn about?"
        /> 
        <Message 
          type="user" 
          content="How do nested routes work in v7?" 
        />
        
        <Message 
          type="bot" 
          content="Nested routes in React Router v7 allow you to create hierarchical UI structures. You define parent routes that contain child routes, and use the <Outlet /> component to render child components. The parent route acts as a layout component that wraps its children." 
        />
        
        <Message 
          type="user" 
          content="What's the difference between route() and layout() helpers?" 
        />
        
        <Message 
          type="bot" 
          content="Great question! The route() helper creates routes that add URL segments, while layout() creates routes that only provide UI structure without affecting the URL. Layout routes are perfect for shared components like sidebars or headers that should appear across multiple pages." 
        />
        
        <Message 
          type="user" 
          content="Can you show me an example of a routes.js configuration?" 
        />
        
        <Message 
          type="bot" 
          content="Sure! Here's a basic example: You can use route(), index(), and layout() helpers to create nested route structures. The layout() function creates wrapper components, while route() adds URL segments. This approach gives you clean, hierarchical routing that's easy to maintain." 
        />
        
        <Message 
          type="user" 
          content="How do I handle data loading in React Router v7?" 
        />
        
        <Message 
          type="bot" 
          content="React Router v7 provides excellent data loading capabilities through loader functions. You can define a loader function in your route component that runs before the component renders, ensuring your data is available immediately. You can access the loaded data using the useLoaderData() hook within your component." 
        />
      </div>
      {/* Chat input area */}
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <textarea
            className="chat-input"
            placeholder="Type your message here..."
            rows="1"
          />
          <button className="send-button" type="button">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
