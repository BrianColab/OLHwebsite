import { Icon } from "./icons";

interface AudienceCardProps {
  icon: string;
  title: string;
  body: string;
}

export function AudienceCard({ icon, title, body }: AudienceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm hover:shadow-xl transition-all duration-300 border-l-[3px] border-olh-red overflow-hidden">
      {/* Subtle red corner glow on hover */}
      <div
        className="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(207,31,42,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-olh-red flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-olh-red/30">
        <Icon name={icon} className="w-5 h-5 text-white" />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3 className="text-[15px] font-bold text-olh-text-primary leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-olh-text-secondary leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
