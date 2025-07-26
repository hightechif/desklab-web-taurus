import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/ActivityCard";
import { CalendarWeekView } from "@/components/CalendarWeekView";
import { AddActivityModal } from "@/components/AddActivityModal";

export const Activities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);

  const weekDays = [
    { short: "Sen", full: "Senin", date: "14" },
    { short: "Sel", full: "Selasa", date: "15" },
    { short: "Rab", full: "Rabu", date: "16" },
    { short: "Kam", full: "Kamis", date: "17" },
    { short: "Jum", full: "Jumat", date: "18" },
    { short: "Sab", full: "Sabtu", date: "19" },
    { short: "Min", full: "Minggu", date: "20" },
  ];

  const handleAddActivity = (dayIndex: number) => {
    setSelectedDayIndex(dayIndex);
    setIsModalOpen(true);
  };

  const getSelectedDate = () => {
    if (selectedDayIndex === null) return new Date();
    // Create date for July 2025 based on the day index
    const dayDate = parseInt(weekDays[selectedDayIndex].date);
    return new Date(2025, 6, dayDate); // July is month 6 (0-indexed)
  };
  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Aktivitas</h1>
          <Button className="gap-2" onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4" />
            Tambah Aktivitas
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Activity Cards - Empty state */}
          <div className="lg:col-span-1 space-y-4">
            {/* No activities to show */}
          </div>

          {/* Calendar */}
          <div className="lg:col-span-3">
            <CalendarWeekView onAddActivity={handleAddActivity} />
          </div>
        </div>
      </div>

      {/* Add Activity Modal */}
      <AddActivityModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        selectedDate={getSelectedDate()}
      />
    </>
  );
};