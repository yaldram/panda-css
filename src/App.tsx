import { Flex } from "../styled-system/jsx";
import { Button } from "./Button";

export function App() {
  return (
    <Flex gap={6}>
      <Flex flex={1} p={15} gap={60} direction="column" data-color-mode="light">
        <Flex wrap="wrap" gap={45}>
          <Button>Click Me</Button>
          <Button colorScheme="secondary">Click Me</Button>
          <Button colorScheme="success">Click Me</Button>
          <Button colorScheme="warning">Click Me</Button>
          <Button colorScheme="error">Click Me</Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button isShadow>Click Me</Button>
          <Button isShadow colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow colorScheme="success">
            Click Me
          </Button>
          <Button isShadow colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button variant="bordered">Click Me</Button>
          <Button variant="bordered" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="success">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button variant="ghost">Click Me</Button>
          <Button variant="ghost" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="success">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button isShadow variant="ghost">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="success">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button variant="flat">Click Me</Button>
          <Button variant="flat" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="success">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button isShadow variant="flat">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="success">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="error">
            Click Me
          </Button>
        </Flex>
      </Flex>

      <Flex
        bg="black"
        p={15}
        gap={60}
        flex={1}
        direction="column"
        data-color-mode="dark"
      >
        <Flex wrap="wrap" gap={45}>
          <Button>Click Me</Button>
          <Button colorScheme="secondary">Click Me</Button>
          <Button colorScheme="success">Click Me</Button>
          <Button colorScheme="warning">Click Me</Button>
          <Button colorScheme="error">Click Me</Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button isShadow>Click Me</Button>
          <Button isShadow colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow colorScheme="success">
            Click Me
          </Button>
          <Button isShadow colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button variant="bordered">Click Me</Button>
          <Button variant="bordered" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="success">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button variant="ghost">Click Me</Button>
          <Button variant="ghost" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="success">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button isShadow variant="ghost">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="success">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow variant="ghost" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button variant="flat">Click Me</Button>
          <Button variant="flat" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="success">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="error">
            Click Me
          </Button>
        </Flex>

        <Flex wrap="wrap" gap={45}>
          <Button isShadow variant="flat">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="success">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow variant="flat" colorScheme="error">
            Click Me
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
