import { cookies } from "next/headers";

const useGetColorMode = () => {
  const cookieStore = cookies();
  const defaultTheme = "dark";
  const uiColorMode =
    (cookieStore.get("chakra-ui-color-mode")?.value as "light" | "dark") ||
    defaultTheme;

  return uiColorMode;
};

export default useGetColorMode;
