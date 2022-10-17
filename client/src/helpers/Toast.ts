import { toast } from "react-toastify";

const Toast = (toastType: string, message: string) => {
  switch (toastType) {
    case "Error":
      toast.error(message);

      break;
    case "Success":
      toast.success(message);

      break;
    case "Warn":
      toast.warn(message);

      break;
    default:
      break;
  }
};

export default Toast;
