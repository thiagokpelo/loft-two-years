import { useMediaQuery } from "@react-hook/media-query";

export const useBreakpoints = () => {
  const matches = useMediaQuery("only screen and (min-width: 1025px)");

  return matches;
};
