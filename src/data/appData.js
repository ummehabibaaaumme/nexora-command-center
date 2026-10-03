export const navItems = [
  { label: "Overview", icon: "LayoutDashboard" },
  { label: "Insights", icon: "Sparkles" },
  { label: "Projects", icon: "FolderKanban" },
  { label: "Team", icon: "Users" },
  { label: "Activity", icon: "Activity" }
];

export const projects = [
  { id: 1, name: "Atlas Mobile", team: "Product", progress: 82, status: "On track", color: "#8b5cf6", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Orbit AI", team: "Engineering", progress: 67, status: "At risk", color: "#22c55e", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Northstar", team: "Marketing", progress: 91, status: "On track", color: "#38bdf8", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "Pulse CRM", team: "Growth", progress: 43, status: "Needs focus", color: "#f59e0b", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" }
];

export const activities = [
  { name: "Maya Chen", action: "completed a milestone in", target: "Atlas Mobile", time: "8 min ago", initials: "MC", tone: "purple" },
  { name: "Noah Williams", action: "uploaded a new build to", target: "Orbit AI", time: "22 min ago", initials: "NW", tone: "blue" },
  { name: "Aisha Rahman", action: "shared an insight from", target: "Northstar", time: "41 min ago", initials: "AR", tone: "green" },
  { name: "Ethan Park", action: "commented on", target: "Pulse CRM", time: "1 hr ago", initials: "EP", tone: "orange" }
];

export const metrics = [
  { label: "Active initiatives", value: "24", change: "+12.5%", trend: "up" },
  { label: "Team velocity", value: "87.4", suffix: "%", change: "+8.2%", trend: "up" },
  { label: "Hours reclaimed", value: "186", suffix: "h", change: "+21.4%", trend: "up" },
  { label: "Risk signals", value: "07", change: "-18.6%", trend: "down" }
];

export const chartData = [34, 42, 39, 54, 48, 61, 57, 68, 64, 76, 71, 84, 81, 91, 87, 96];
