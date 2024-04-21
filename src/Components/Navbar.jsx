import {
  Box,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
  Hide,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Center
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
  const handleSideBar = () => {};

  return (
    <Flex
      w="full"
      alignItems="center"
      gap="2"
      p={5}
      pl="40px"
      pr="40px"
      justifyContent="space-between"
      bg="transparent"
    >
      <Box>
        <Link to="/">
          <Image
            src="https://github.com/atulya15/image/blob/main/Screenshot%202024-04-20%20041255.png?raw=true"
            w="100px" // Adjust the width here
            h="auto" // Maintain aspect ratio
          />
        </Link>
      </Box>
      <Spacer />
      <Show breakpoint="(min-width: 1000px)">
        <Flex gap="5">
          <Center>
            <Link>Blog</Link>
          </Center>
          <Center>
            <Link>Register As A Professional</Link>
          </Center>
          <Link>
            <Center>
              <Login />
            </Center>
          </Link>
        </Flex>
      </Show>
      <Hide above="1000px">
        <Popover>
          <PopoverTrigger>
            <Button>
              <HamburgerIcon w={8} h={8} onClick={handleSideBar} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />

            <PopoverBody color="black">
              <Flex direction="column" gap="2" p={4}>
                <Link>Blog</Link>
                <Link>Register As A Professional</Link>
                <Login />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Hide>
    </Flex>
  );
}
