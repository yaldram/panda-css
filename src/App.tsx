import { useState } from "react";
import { css } from "../styled-system/css";
import { Box, Flex } from "../styled-system/jsx";

import { Button } from "./Button";

const themes = [
  {
    id: "red",
    bg: css({ bg: "red.500" }),
  },
  {
    id: "blue",
    bg: css({ bg: "blue.500" }),
  },
  {
    id: "green",
    bg: css({ bg: "green.500" }),
  },
  {
    id: "orange",
    bg: css({ bg: "orange.500" }),
  },
];

export function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <>
      <Flex justify="center" gap={10} mt={10}>
        {themes.map((theme) => (
          <Box
            p="8px"
            rounded="full"
            cursor="pointer"
            key={theme.id}
            className={theme.bg}
            onClick={() => setCurrentTheme(theme)}
          />
        ))}
      </Flex>

      <Flex data-theme={currentTheme.id} gap={10} m={15}>
        <Flex flex={1} p={10} gap={10}>
          <Button>Click Me</Button>
          <Button varaint="outline">Click Me</Button>
        </Flex>

        <Flex
          bg="gray.800"
          flex={1}
          p={10}
          gap={10}
          data-theme={currentTheme.id}
          data-color-mode="dark"
        >
          <Button>Click Me</Button>
          <Button varaint="outline">Click Me</Button>
        </Flex>
      </Flex>
    </>
  );
}
