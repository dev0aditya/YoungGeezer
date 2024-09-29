import toast from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";

export function CopyToClipBoard(text) {
  navigator.clipboard.writeText(text);
  toast.dismiss();
  toast("Copied!", {
    icon: <IoCopyOutline />,
  });
}
