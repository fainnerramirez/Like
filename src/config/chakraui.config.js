import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito";

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "#0a1229")(props),
      lineHeight: "base",
    },
  }),
};

const fonts = {
  heading: "Nunito",
  body: "Nunito",
};

export const theme = extendTheme({
  styles,
  fonts,
});
