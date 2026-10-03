import Icon from "./Icon";

export default function MetricCard({ metric, index }) {
  return (
    <article className="metric-card" style={{"--delay": `${index * 70}ms`}}>
      <div className="metric-top"><span>{metric.label}</span><div className={`metric-icon mi-${index}`}><Icon name={["Layers3","Gauge","Clock3","ShieldAlert"][index]} size={17}/></div></div>
      <div className="metric-value">{metric.value}<small>{metric.suffix}</small></div>
      <div className="metric-footer"><span className={`trend ${metric.trend}`}><Icon name={metric.trend === "up" ? "TrendingUp" : "TrendingDown"} size={14}/>{metric.change}</span><span>vs last month</span></div>
    </article>
  );
}