import { Icon } from "./icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-white border border-olh-border shadow-sm hover:shadow-md hover:border-olh-red/20 transition-all duration-200">
      <div className="w-11 h-11 rounded-xl bg-olh-red-tint flex items-center justify-center flex-shrink-0">
        <Icon name={icon} className="w-5 h-5 text-olh-red" />
      </div>
      <div>
        <h3 className="text-base font-bold text-olh-text-primary leading-snug">{title}</h3>
        <p className="mt-1.5 text-sm text-olh-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
