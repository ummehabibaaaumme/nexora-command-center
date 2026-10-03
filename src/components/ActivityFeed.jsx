import Icon from "./Icon";
import { activities } from "../data/appData";

export default function ActivityFeed() {
  return (
    <section className="panel activity-panel">
      <div className="panel-head"><div><span className="eyebrow">Live feed</span><h2>Recent activity</h2></div><button className="text-btn">View all <Icon name="ArrowUpRight" size={14}/></button></div>
      <div className="activity-list">
        {activities.map((a) => <div className="activity" key={a.name}>
          <div className={`person ${a.tone}`}>{a.initials}</div>
          <div className="activity-copy"><p><b>{a.name}</b> {a.action} <strong>{a.target}</strong></p><span>{a.time}</span></div>
          <Icon name="ChevronRight" size={16} className="activity-arrow"/>
        </div>)}
      </div>
    </section>
  );
}