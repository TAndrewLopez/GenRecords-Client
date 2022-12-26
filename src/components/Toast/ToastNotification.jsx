import { useEffect } from "react";

const colors = {
  info: "bg-blue-200 text-blue-800",
  error: "bg-red-200 text-red-800",
  success: "bg-green-200 text-green-800",
  warning: "bg-yellow-200 text-yellow-800",
  dark: "bg-gray-700 text-gray-300",
};

const ToastNotification = ({ type, toastMessage, clear }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      clear();
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      onClick={clear}
      className={`absolute top-20 left-1/2 z-10 -translate-x-1/2 w-full flex md:max-w-md p-4 text-sm rounded-lg cursor-pointer ${colors[type]}`}>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"></path>
      </svg>
      <span className="sr-only">{type}</span>
      <div>
        <span className="font-medium capitalize">{type}! </span>
        {toastMessage}
      </div>
    </div>
  );
};

export default ToastNotification;
