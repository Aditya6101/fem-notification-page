const Notification = ({ notification }: { notification: NotificationType }) => {
  return (
    <li
      className={`${
        notification.isRead ? "bg-white" : "bg-very-light-grayish-blue"
      } flex p-2 rounded gap-2`}
    >
      <img
        src={`./src/assets/images/avatar-${notification.user
          .replace(" ", "-")
          .toLowerCase()}.webp`}
        alt={notification.user}
        className="w-12 h-12"
      />
      <div className="text-base font-PlusJakartaSans">
        <span className="font-bold cursor-pointer text-very-dark-blue hover:text-primary-blue">
          {notification.user} &nbsp;
        </span>
        <span className="font-medium text-grayish-blue">
          {notification.text}
        </span>
        {!notification.isRead && (
          <span className="inline-block w-2 h-2 mx-1 align-middle rounded-full bg-primary-red"></span>
        )}
        <br />
        <span className="text-sm font-medium text-grayish-blue">
          {notification.date}
        </span>

        {notification.message && (
          <p className="px-4 py-2 my-2 text-base font-normal leading-6 border rounded cursor-pointer text-light-grayish-blue hover:bg-very-light-grayish-blue border-light-grayish-blue-2">
            {notification.message}
          </p>
        )}
      </div>
    </li>
  );
};

export default Notification;
