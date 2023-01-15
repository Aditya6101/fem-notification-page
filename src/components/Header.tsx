export const Header = ({
  notifications,
  handleMarkAllRead,
}: {
  notifications: NotificationType[];
  handleMarkAllRead: () => void;
}) => {
  const unreadNotifications = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <div className="flex items-center justify-between py-5">
      <h3 className="text-xl font-black font-PlusJakartaSans text-very-dark-blue">
        Notifications{" "}
        <span className="bg-primary-blue text-light-grayish-blue-1 py-0.5 px-3 rounded mx-2 text-lg">
          {unreadNotifications}
        </span>
      </h3>
      <button
        className="font-semibold font-PlusJakartaSans font-base text-grayish-blue"
        onClick={handleMarkAllRead}
      >
        Mark all as read
      </button>
    </div>
  );
};
