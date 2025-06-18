import React from "react";

export type NotificationItemProps = {
  title: string;
  description: string;
  time: string;
};

const NotificationItem = ({
  notification,
}: {
  notification: NotificationItemProps;
}) => {
  const { title, description, time } = notification;
  return (
    <div className="bg-gray-50 py-3 px-4 rounded-[12px]">
      <div className="w-full flex items-center justify-between">
        <h6 className="font-medium text-gray-800 leading-6">{title}</h6>
        <p className="text-sm text-gray-300 font-poppins">{time}</p>
      </div>

      <p className="text-gray-600 text-sm leading-5 mt-2">{description}</p>
    </div>
  );
};

export default NotificationItem;
