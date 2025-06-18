"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { BsFillSendFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const Chat = () => {
  const { t } = useTranslation("dialog");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello there!",
      user: "You",
      isCurrentUser: true,
      time: "10:00 AM",
    },
    {
      id: 2,
      text: "Hi! How can I help?",
      user: "Alex Chen",
      isCurrentUser: false,
      time: "10:00 AM",
    },
    {
      id: 3,
      text: "I need help with my project",
      user: "You",
      isCurrentUser: true,
      time: "10:01 AM",
    },
  ]);

  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      user: "You",
      isCurrentUser: true,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="flex flex-col h-full flex-1">
      <div className="px-5 py-3 border border-gray-200 rounded-2xl flex-grow overflow-y-auto max-h-[60vh] overflow-x-hidden">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "my-3 flex items-end",
              message.isCurrentUser ? "justify-end" : "justify-start"
            )}
          >
            {!message.isCurrentUser && (
              <div className="me-2 flex-shrink-0">
                <div className="bg-gray-200  rounded-full size-8 flex flex-col items-center justify-end">
                  <HiUser className="text-[#7A92C4] text-2xl translate-y-[1px]" />
                </div>
              </div>
            )}

            <div
              className={cn(
                "max-w-[80%]",
                message.isCurrentUser ? "flex flex-col items-end" : ""
              )}
            >
              {!message.isCurrentUser && (
                <span className="text-sm font-medium text-gray-800 mb-1 block">
                  {message.user}
                </span>
              )}

              <div
                className={cn(
                  "px-4 py-2 rounded-[12px] w-full",
                  message.isCurrentUser
                    ? "bg-main-blue text-white rounded-br-none"
                    : "bg-gray-50 text-gray-600 rounded-bl-none"
                )}
              >
                <span>{message.text}</span>
                <div className="flex justify-end mt-1">
                  <span
                    className={cn(
                      "text-xs  ms-auto block",
                      message.isCurrentUser
                        ? "text-right text-white"
                        : "text-left text-gray-300"
                    )}
                  >
                    {message.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-x-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t("enterYourMessageHere")}
          className="flex-grow px-4 py-2  rounded-lg md:rounded-2xl bg-gray-50 focus:outline-none h-10 md:h-[55px] text-sm text-gray-600 placeholder:text-gray-300"
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-main-blue text-white px-6 py-2 rounded-lg md:rounded-2xl hover:bg-main-blue/90  transition-colors h-10 md:h-[55px]"
        >
          <BsFillSendFill className="text-white text-xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
