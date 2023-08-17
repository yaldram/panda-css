import { Flex } from "../styled-system/jsx";
import { Button } from "./Button";

export function App() {
  return (
    <Flex>
      <Flex direction="column" flex={1} gap="7" p="5">
        <Flex gap="7">
          <Button
            m="10"
            size="xs"
            colorScheme="green"
            _hover={{ bg: "red.800" }}
          >
            Click Me
          </Button>
          <Button size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button size="xs" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button variant="outline" size="xs" colorScheme="green">
            Click Me
          </Button>
          <Button variant="outline" size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button variant="outline" size="xs" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button colorScheme="green">Click Me</Button>
          <Button colorScheme="orange">Click Me</Button>
          <Button colorScheme="red">Click Me</Button>
        </Flex>

        <Flex gap="7">
          <Button variant="outline" colorScheme="green">
            Click Me
          </Button>
          <Button variant="outline" colorScheme="orange">
            Click Me
          </Button>
          <Button variant="outline" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button size="lg" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button variant="outline" size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button variant="outline" size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button variant="outline" size="lg" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="green"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="orange"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="red"
          >
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="green"
            variant="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="orange"
            variant="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="red"
            variant="outline"
          >
            Click Me
          </Button>
        </Flex>
      </Flex>

      <Flex
        className="dark"
        bg="gray.800"
        direction="column"
        flex={1}
        gap="7"
        p="5"
      >
        <Flex gap="7">
          <Button size="xs" colorScheme="green">
            Click Me
          </Button>
          <Button size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button size="xs" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button variant="outline" size="xs" colorScheme="green">
            Click Me
          </Button>
          <Button variant="outline" size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button variant="outline" size="xs" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button colorScheme="green">Click Me</Button>
          <Button colorScheme="orange">Click Me</Button>
          <Button colorScheme="red">Click Me</Button>
        </Flex>

        <Flex gap="7">
          <Button variant="outline" colorScheme="green">
            Click Me
          </Button>
          <Button variant="outline" colorScheme="orange">
            Click Me
          </Button>
          <Button variant="outline" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button size="lg" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button variant="outline" size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button variant="outline" size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button variant="outline" size="lg" colorScheme="red">
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="green"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="orange"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="red"
          >
            Click Me
          </Button>
        </Flex>

        <Flex gap="7">
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="green"
            variant="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="orange"
            variant="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="red"
            variant="outline"
          >
            Click Me
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
