import toast from "react-hot-toast";

const Toast = Object.freeze({
    loading: (str, icon = "🕓") => {
        toast(`${icon} ${str}`, {
            style: {
                borderRadius: "0",
                border: "2px solid #222",
            },
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
});

export default Toast;
