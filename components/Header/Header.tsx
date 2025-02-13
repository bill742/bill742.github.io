import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import HeaderNav from './HeaderNav';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex width="100%" flexDirection="row" justifyContent="space-between">
        <SkipNavLink>Skip to content</SkipNavLink>

        <HeaderNav />

        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? (
            <MoonIcon aria-label="Dark Mode" />
          ) : (
            <SunIcon aria-label="Light Mode" />
          )}
        </Button>
      </Flex>
    </header>
  );
}
