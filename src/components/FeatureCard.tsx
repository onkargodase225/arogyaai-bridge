
import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-xl shadow-md transition-all hover:shadow-lg border border-gray-100",
      className
    )}>
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-arogya-primary/10",
        iconClassName
      )}>
        <Icon className="h-6 w-6 text-arogya-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
