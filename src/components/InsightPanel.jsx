import Icon from "./Icon";

export default function InsightPanel() {
  return (
    <section className="insight-card">
      <div className="orb"><Icon name="Sparkles" size={22}/></div>
      <div className="insight-copy">
        <span className="eyebrow">Nexora intelligence</span>
        <h2>Your teams are moving faster.</h2>
        <p>Three initiatives improved delivery velocity this week. Atlas Mobile is 12% ahead of its projected milestone.</p>
        <button className="primary-btn">Explore insights <Icon name="ArrowRight" size={16}/></button>
      </div>
      <div className="insight-decoration"><span></span><span></span><span></span></div>
    </section>
  );
}