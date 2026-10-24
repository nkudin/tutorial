// Extracted SidebarHeader and SidebarFooter components for better organization
// SidebarHeader component

function SidebarHeader() {
  return (
  <div className="sidebar-header">
          <h2 className="chatbot-title">Chatbot</h2>
          <a href="/chat/new" className="new-chat-btn">
            + New
          </a>
        </div>
  )
}

// SidebarFooter component

function SidebarFooter() {
  return (
  <div className="sidebar-footer">
    <a href="/profile" className="user-profile">
      <img
        src="https://ui-avatars.com/api/?name=Batman&background=0D0D0D&color=fff&size=40"
        alt="User avatar"
        className="user-avatar"
        width={30}
        height={30}
      />
      <span className="user-name">Batman</span>
    </a>
  </div>
  )
}

function ChatThreadItem(props) {
  return (
  <li className="chat-thread-item">
    <a href={props.href} className="chat-thread-link">
      {props.title}
    </a>
  </li>  
  );
}

// Chat Threads List component

function ChatThreadsList() {
  return (
     <nav className="chat-threads-list" aria-label="Chat threads">
          <ul>
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
            <ChatThreadItem />
          </ul>
        </nav>
  )
}

// Sidebar component
// This component combines the SidebarHeader, ChatThreadsList, and SidebarFooter components
// By separating the components, the code is more organized and easier to read.
// Also the components are easier to maintain/test, and can be reused in other parts of the application if you want to.

function Sidebar() {
  return (
    <aside className="sidebar">
        <SidebarHeader />
        {/* Chat threads list */}
        <ChatThreadsList />
        {/* Sidebar footer */}
        <SidebarFooter />
      </aside>
  )
}

export default Sidebar;