export const useNotification = () => {
  const notifications = useState("notifications", () => []);

  return { notifications };
};
