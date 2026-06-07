import { Icon } from "./icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-olh-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      <div className="w-11 h-11 rounded-full bg-olh-red-tint flex items-center justify-center flex-shrink-0">
        <Icon name={icon} className="w-5 h-5 text-olh-red" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-olh-text-primary">{title}</h3>
        <p className="mt-2 text-sm text-olh-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
