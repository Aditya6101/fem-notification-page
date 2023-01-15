import { useState } from "react";
import { Header } from "./components/Header";
import NotificationsList from "./components/NotificationsList";
import NotificationsJSON from "./notifications.json";

function App() {
  const [notifications, setNotifications] =
    useState<NotificationType[]>(NotificationsJSON);

  function handleMarkAllRead() {
    let newNewNotification = [...notifications].map((notification) => ({
      ...notification,
      isRead: true,
    }));

    setNotifications(newNewNotification);
  }
  return (
    <main className="max-w-md px-4 mx-auto">
      {/* top header */}
      <Header
        notifications={notifications}
        handleMarkAllRead={handleMarkAllRead}
      />
      {/* notifications */}
      <NotificationsList notifications={notifications} />
    </main>
  );
}

export default App;
