import Icon from "./Icon";
import { chartData } from "../data/appData";

export default function PerformanceChart() {
  const max = Math.max(...chartData);
  const points = chartData.map((v, i) => `${(i/(chartData.length-1))*100},${100-(v/max)*78-10}`).join(" ");
  const area = `0,100 ${points} 100,100`;
  return (
    <section className="panel chart-panel">
      <div className="panel-head">
        <div><span className="eyebrow">Performance</span><h2>Execution velocity</h2></div>
        <button className="select-btn">Last 30 days <Icon name="ChevronDown" size={14}/></button>
      </div>
      <div className="chart-meta"><strong>91.8%</strong><span className="trend up"><Icon name="TrendingUp" size={14}/> 14.2%</span><small>productivity index</small></div>
      <div className="chart">
        <div className="grid-lines"><span></span><span></span><span></span><span></span></div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopOpacity=".22"/><stop offset="100%" stopOpacity="0"/></linearGradient></defs>
          <polygon points={area} fill="url(#area)"/>
          <polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke"/>
        </svg>
        <div className="chart-labels"><span>Sep 04</span><span>Sep 11</span><span>Sep 18</span><span>Sep 25</span><span>Oct 02</span></div>
      </div>
    </section>
  );
}