import { Home, Calendar, CalendarCheck, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "Beranda", isActive: false },
  { icon: Calendar, label: "Aktivitas", isActive: true, hasSubmenu: true },
  { icon: CalendarCheck, label: "Aktivitas Anda", isActive: false, isSubmenu: true },
  { icon: FileText, label: "Laporan Anda", isActive: false, isSubmenu: true },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-sidebar-bg border-r border-sidebar-border transition-transform duration-300 z-50",
          "lg:relative lg:top-0 lg:h-screen lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Button
                variant={item.isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-left",
                  item.isSubmenu && "pl-8",
                  item.isActive && "bg-secondary"
                )}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
                {item.hasSubmenu && <ChevronDown className="ml-auto h-4 w-4" />}
              </Button>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};