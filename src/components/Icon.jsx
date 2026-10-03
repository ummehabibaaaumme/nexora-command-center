import * as Icons from "lucide-react";

export default function Icon({ name, size = 18, strokeWidth = 1.8, ...props }) {
  const LucideIcon = Icons[name] || Icons.Circle;
  return <LucideIcon size={size} strokeWidth={strokeWidth} {...props} />;
}