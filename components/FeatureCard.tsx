import { Icon } from "./icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col gap-5 p-6 rounded-2xl bg-[#1a1a1a] border border-white/[0.08] hover:border-white/[0.16] hover:bg-[#202020] transition-all duration-200">
      {/* Subtle top-edge red glow line */}
      <div
        className="absolute top-0 inset-x-6 h-px rounded-full"
        style={{ background: "linear-gradient(to right, transparent, rgba(207,31,42,0.5), transparent)" }}
        aria-hidden="true"
      />
      <div className="w-12 h-12 rounded-xl bg-olh-red flex items-center justify-center flex-shrink-0">
        <Icon name={icon} className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-white/50 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
