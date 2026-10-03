import Icon from "./Icon";
import { navItems } from "../data/appData";

export default function Sidebar({ active, setActive, collapsed, setCollapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="brand">
        <div className="brand-mark"><span>N</span></div>
        {!collapsed && <div><strong>Nexora</strong><small>Command Center</small></div>}
      </div>

      <div className="workspace">
        <div className="workspace-avatar">NC</div>
        {!collapsed && <div className="workspace-copy"><b>Nexora Collective</b><span>Enterprise workspace</span></div>}
        {!collapsed && <Icon name="ChevronsUpDown" size={15} />}
      </div>

      <nav>
        <div className="nav-label">{!collapsed && "Workspace"}</div>
        {navItems.map((item) => (
          <button key={item.label} className={`nav-item ${active === item.label ? "active" : ""}`} onClick={() => setActive(item.label)}>
            <Icon name={item.icon} size={18} />
            {!collapsed && <span>{item.label}</span>}
            {item.label === "Insights" && !collapsed && <em>NEW</em>}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item"><Icon name="Settings2" size={18}/>{!collapsed && <span>Settings</span>}</button>
        <button className="nav-item"><Icon name="LifeBuoy" size={18}/>{!collapsed && <span>Help center</span>}</button>
      </div>

      <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} title="Toggle sidebar">
        <Icon name={collapsed ? "PanelLeftOpen" : "PanelLeftClose"} size={17}/>
      </button>
    </aside>
  );
}