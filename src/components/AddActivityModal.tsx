import { useState } from "react";
import { CalendarIcon, X, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface AddActivityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddActivityModal = ({ open, onOpenChange }: AddActivityModalProps) => {
  const [date, setDate] = useState<Date>();
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      date,
      project: selectedProject,
      activity: selectedActivity,
      workingHours,
      notes
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-semibold text-primary">
            Tambah Aktivitas
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Date Field */}
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">
              Tanggal<span className="text-red-500">*</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-3 h-4 w-4" />
                  {date ? format(date, "dd/MM/yyyy") : "Masukkan Tanggal"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Project Field */}
          <div className="space-y-2">
            <Label htmlFor="project" className="text-sm font-medium">
              Proyek<span className="text-red-500">*</span>
            </Label>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Cari atau Pilih Proyek" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="edts-admin">EDTS-ADMIN</SelectItem>
                <SelectItem value="edts-training">EDTS-TRAINING</SelectItem>
                <SelectItem value="edts-development">EDTS-DEVELOPMENT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Activity Field */}
          <div className="space-y-2">
            <Label htmlFor="activity" className="text-sm font-medium">
              Aktivitas<span className="text-red-500">*</span>
            </Label>
            <Select value={selectedActivity} onValueChange={setSelectedActivity}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Aktivitas" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="annual-leave">Annual Leave</SelectItem>
                <SelectItem value="training">Training</SelectItem>
                <SelectItem value="sharing-session">Sharing Session</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Working Hours Field */}
          <div className="space-y-2">
            <Label htmlFor="hours" className="text-sm font-medium">
              Jam Kerja<span className="text-red-500">*</span>
            </Label>
            <Input
              id="hours"
              type="number"
              placeholder="Masukkan Jam Kerja"
              value={workingHours}
              onChange={(e) => setWorkingHours(e.target.value)}
              min="0"
              max="24"
              step="0.5"
            />
          </div>

          {/* Notes Field */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium">
              Catatan
            </Label>
            <Textarea
              id="notes"
              placeholder="Ketik Catatan (opsional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          {/* File Upload Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Lampiran</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted/50 transition-colors">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Drag & drop or{" "}
                <button type="button" className="text-primary hover:underline">
                  browse
                </button>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Format lampiran file .pdf, .zip, .jpg, .jpeg, .png. Maksimal ukuran file 2 MB
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button type="submit" className="px-8">
              Tambah
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};