import { notification } from "antd";

notification.config({ top: 30, placement: "topRight", duration: 3 });

const toast = {
  success: (message, description) =>
    notification.success({ message, description }),
  warning: (message, description) =>
    notification.warning({ message, description }),
  error: (message, description) => notification.error({ message, description }),
};

export default toast;
