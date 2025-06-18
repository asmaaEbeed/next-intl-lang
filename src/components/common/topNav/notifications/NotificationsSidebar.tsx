import { cn } from "@/lib/utils";
import { FiX } from "react-icons/fi";
import NotificationItem, { NotificationItemProps } from "./NotificationItem";

type NotificationsSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const notifications: NotificationItemProps[] = [
  {
    title: "New Notification",
    description: "This is a new notification",
    time: "12:00 PM",
  },
  {
    title: "New Notification",
    description: "This is a new notification",
    time: "12:00 PM",
  },
];

const NotificationsSidebar = ({
  isOpen,
  onClose,
}: NotificationsSidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed inset-0 bg-black/50 z-50 transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Clickable overlay to trigger close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className={cn(
          "fixed top-0 end-0 h-full w-full max-w-[488px] bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6">
            <h4
              className={cn(
                "text-xl md:text-3xl text-main-blue font-medium"
                // language === "ar" ? "font-semibold" : "font-medium"
              )}
            >
              Notifications
            </h4>

            <button
              onClick={onClose}
              className="bg-gray-50 hover:bg-gray-100 w-11 h-11 rounded-full flex items-center justify-center text-main-blue transition-all duration-200 cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Notifications Content */}
          <div className="flex-1 overflow-y-auto px-5 space-y-2">
            {notifications.map((notification, index) => (
              <NotificationItem key={index} notification={notification} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NotificationsSidebar;
