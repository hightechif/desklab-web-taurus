import { Card } from "@/components/ui/card";

interface ActivityCardProps {
  title: string;
  subtitle: string;
  color?: string;
}

export const ActivityCard = ({ title, subtitle, color = "bg-orange-400" }: ActivityCardProps) => {
  return (
    <Card className="p-4 bg-activity-card border-l-4 border-l-orange-400 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`w-1 h-16 ${color} rounded-full flex-shrink-0`} />
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-sm text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};