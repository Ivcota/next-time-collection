import toast from "react-hot-toast";

export const successToast = (message: string) => {
  toast.success(message, {
    style: {
      fontWeight: "normal",
    },
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    style: {
      fontWeight: "normal",
    },
  });
};
