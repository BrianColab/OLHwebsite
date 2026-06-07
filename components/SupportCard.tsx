import { Icon } from "./icons";

interface SupportCardProps {
  icon: string;
  title: string;
  body: string;
}

export function SupportCard({ icon, title, body }: SupportCardProps) {
  return (
    <div className="bg-white border border-olh-border rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
      <div className="w-10 h-10 rounded-lg bg-olh-red-tint flex items-center justify-center flex-shrink-0">
        <Icon name={icon} className="w-5 h-5 text-olh-red" />
      </div>
      <h3 className="text-base font-semibold text-olh-text-primary">{title}</h3>
      <p className="text-sm text-olh-text-secondary leading-relaxed">{body}</p>
    </div>
  );
}
