import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, useColorMode } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import HeaderNav from './HeaderNav';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex
        width="1060px"
        flexDirection="row"
        margin="0 auto"
        justifyContent="space-between"
      >
        <Box>
          <Heading as="h1" textStyle="h1" variant="header">
            Bill Dean
          </Heading>
          <Heading as="h2" size="lg" variant="header">
            Front-End Web Developer
          </Heading>
        </Box>

        <SkipNavLink>Skip to content</SkipNavLink>

        <HeaderNav />

        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? (
            <MoonIcon aria-label="Dark Mode" />
          ) : (
            <SunIcon />
          )}
        </Button>
      </Flex>
    </header>
  );
}
