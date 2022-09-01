import toast from "react-hot-toast";

const Toast = Object.freeze({
    loading: (str) => {
        toast.loading(`${str}`, {
            style: {
                borderRadius: "0",
                border: "2px solid #222",
            },
            id: "loadingtoast",
        });
    },
    success: (str, icon = "✔") => {
        toast(`${icon} ${str}`, {
            style: {
                borderRadius: "0",
                border: "2px solid #2eca6a",
            },
        });
    },
    error: (str, icon = "🔺") => {
        toast(`${icon} ${str}`, {
            style: {
                borderRadius: "0",
                border: "2px solid #dc2626",
            },
        });
    },
    dismiss: () => toast.dismiss("loadingtoast"),
});

export default Toast;
