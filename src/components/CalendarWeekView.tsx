import { ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const weekDays = [
  { short: "Sen", full: "Senin", date: "14" },
  { short: "Sel", full: "Selasa", date: "15" },
  { short: "Rab", full: "Rabu", date: "16" },
  { short: "Kam", full: "Kamis", date: "17" },
  { short: "Jum", full: "Jumat", date: "18" },
  { short: "Sab", full: "Sabtu", date: "19" },
  { short: "Min", full: "Minggu", date: "20" },
];

const calendarEvents: any[] = [];

const weeklyTotals = [0, 0, 0, 0, 0, 0, 0];

export const CalendarWeekView = () => {
  return (
    <div className="space-y-4">
      {/* Date Range Header */}
      <div className="flex items-center gap-2">
        <Button variant="outline" className="gap-2">
          📅 14 Juli 2025 - 20 Juli 2025
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Header Row */}
        {weekDays.map((day, index) => (
          <div
            key={day.short}
            className={`p-4 text-center bg-calendar-header border-r border-border last:border-r-0 ${
              index >= 5 ? "text-red-600" : "text-foreground"
            }`}
          >
            <div className="font-medium">{day.short}</div>
            <div className="text-sm font-normal">{day.date}</div>
          </div>
        ))}

        {/* Calendar Body */}
        {weekDays.map((day, dayIndex) => (
          <div
            key={`${day.short}-body`}
            className="min-h-[200px] p-2 border-r border-b border-border last:border-r-0 bg-card space-y-1"
          >
            {calendarEvents
              .filter(event => event.day === dayIndex)
              .map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className={`p-2 rounded text-xs ${event.color} relative group`}
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs opacity-80">{event.duration}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1 right-1 h-4 w-4 opacity-0 group-hover:opacity-100"
                  >
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Weekly Summary */}
      <Card className="p-4 bg-weekly-summary">
        <div className="grid grid-cols-8 gap-4 items-center">
          <div className="col-span-1 font-medium text-sm">
            Total Jam Kerja Mingguan
          </div>
          <div className="col-span-1 text-right">
            <span className="text-sm font-medium">0/40</span>
          </div>
          {weeklyTotals.map((total, index) => (
            <div key={index} className="text-center">
              <span className="text-sm font-medium">{total}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};