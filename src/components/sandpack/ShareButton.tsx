import { Button } from "@salt-ds/core";
import { ShareIcon } from "@salt-ds/icons";
import { shareTheme } from "../../utils";

export const ShareButton = ({ theme }: { theme: object }) => {
  const handleClick = () => {
    shareTheme(theme);
  };
  return (
    <Button onClick={handleClick}>
      Theme <ShareIcon />
    </Button>
  );
};
