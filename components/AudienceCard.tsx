import { Icon } from "./icons";

interface AudienceCardProps {
  icon: string;
  title: string;
  body: string;
}

export function AudienceCard({ icon, title, body }: AudienceCardProps) {
  return (
    <div className="bg-white border border-olh-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      <div className="w-12 h-12 rounded-full bg-olh-red-tint flex items-center justify-center flex-shrink-0">
        <Icon name={icon} className="w-6 h-6 text-olh-red" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-olh-text-primary">{title}</h3>
        <p className="mt-2 text-sm text-olh-text-secondary leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
