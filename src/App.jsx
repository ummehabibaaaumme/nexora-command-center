import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Icon from "./components/Icon";
import MetricCard from "./components/MetricCard";
import PerformanceChart from "./components/PerformanceChart";
import ProjectCard from "./components/ProjectCard";
import ActivityFeed from "./components/ActivityFeed";
import InsightPanel from "./components/InsightPanel";
import { metrics, projects } from "./data/appData";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [active, setActive] = useState("Overview");
  const [collapsed, setCollapsed] = useLocalStorage("nexora-sidebar", false);
  const [dark, setDark] = useLocalStorage("nexora-dark", true);
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const list = showAll ? projects : projects.slice(0, 3);
    return q ? projects.filter(p => `${p.name} ${p.team} ${p.status}`.toLowerCase().includes(q)) : list;
  }, [query, showAll]);

  return (
    <div className={`app ${dark ? "dark" : "light"} ${collapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar active={active} setActive={setActive} collapsed={collapsed} setCollapsed={setCollapsed}/>
      <main className="main">
        <Topbar query={query} setQuery={setQuery} dark={dark} setDark={setDark}/>
        <div className="content">
          <section className="hero">
            <div>
              <div className="breadcrumb"><span>Workspace</span><Icon name="ChevronRight" size={13}/><b>{active}</b></div>
              <h1>Good afternoon, <span>Habiba.</span></h1>
              <p>Here’s what’s happening across your workspace today.</p>
            </div>
            <div className="hero-actions"><button className="ghost-btn"><Icon name="Download" size={16}/> Export</button><button className="primary-btn" onClick={() => setShowAll(true)}><Icon name="Plus" size={17}/> New project</button></div>
          </section>

          {active === "Overview" ? <>
            <section className="metrics-grid">{metrics.map((m,i)=><MetricCard key={m.label} metric={m} index={i}/>)}</section>
            <div className="dashboard-grid"><PerformanceChart/><ActivityFeed/></div>
            <InsightPanel/>
            <section className="projects-section">
              <div className="section-heading"><div><span className="eyebrow">Portfolio</span><h2>Active projects <span>{filtered.length}</span></h2></div><button className="text-btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show less" : "View all"} <Icon name="ArrowUpRight" size={14}/></button></div>
              {filtered.length ? <div className="projects-grid">{filtered.map(p=><ProjectCard project={p} key={p.id}/>)}</div> : <div className="empty"><Icon name="SearchX" size={28}/><b>No matching projects</b><span>Try another search term.</span></div>}
            </section>
          </> : <section className="placeholder panel"><div className="placeholder-icon"><Icon name={active === "Insights" ? "Sparkles" : active === "Projects" ? "FolderKanban" : active === "Team" ? "Users" : "Activity"} size={28}/></div><span className="eyebrow">Nexora module</span><h2>{active}</h2><p>This interactive portfolio demo focuses on the command-center overview. The selected module is ready for a dedicated route and API integration.</p><button className="primary-btn" onClick={() => setActive("Overview")}>Back to overview <Icon name="ArrowRight" size={16}/></button></section>}

          <footer><span>© 2026 Nexora Command Center</span><span>Built for the modern product team · React + Vite</span></footer>
        </div>
      </main>
    </div>
  );
}