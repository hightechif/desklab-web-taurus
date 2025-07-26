import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/ActivityCard";
import { CalendarWeekView } from "@/components/CalendarWeekView";
import { AddActivityModal } from "@/components/AddActivityModal";

export const Activities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <CalendarWeekView />
          </div>
        </div>
      </div>

      {/* Add Activity Modal */}
      <AddActivityModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
};