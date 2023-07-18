import { X } from "lucide-react";
import { Button } from "./ui/Button";

export const CloseModal = () => {
  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
      aria-label="close modal"
    >
      <X className="w-4 h-4" />
    </Button>
  );
};
