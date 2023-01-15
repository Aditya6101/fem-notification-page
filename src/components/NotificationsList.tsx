import Notification from "./Notification";

const NotificationsList = ({
  notifications,
}: {
  notifications: NotificationType[];
}) => {
  return (
    <ul className="space-y-4">
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </ul>
  );
};

export default NotificationsList;
