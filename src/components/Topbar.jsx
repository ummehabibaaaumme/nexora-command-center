import { useState } from "react";
import Icon from "./Icon";

export default function Topbar({ query, setQuery, dark, setDark, onCommand }) {
  const [notifications, setNotifications] = useState(false);
  return (
    <header className="topbar">
      <div className="mobile-brand"><div className="brand-mark small"><span>N</span></div><b>Nexora</b></div>
      <div className="search">
        <Icon name="Search" size={17}/>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects, people, insights..." />
        <kbd>⌘ K</kbd>
      </div>
      <div className="top-actions">
        <button className="icon-btn" onClick={() => setDark(!dark)} title="Toggle theme"><Icon name={dark ? "Sun" : "Moon"} size={18}/></button>
        <div className="notification-wrap">
          <button className="icon-btn" onClick={() => setNotifications(!notifications)}><Icon name="Bell" size={18}/><i></i></button>
          {notifications && <div className="notification-pop"><b>Notifications</b><p>3 new updates across your workspace.</p><button onClick={() => setNotifications(false)}>Mark all read</button></div>}
        </div>
        <button className="avatar">HA</button>
      </div>
    </header>
  );
}