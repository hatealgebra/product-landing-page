import { Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <Flex
      as="header"
      paddingX={'5%'}
      py="2"
      align="center"
      justify="space-between"
      borderColor={'gray.200'}
      borderBottomWidth="1px"
      position="sticky"
      bg="white"
      zIndex="sticky"
      top={0}
    >
      <Box>
        <Link to="/">
          <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
        </Link>
      </Box>

      <Spacer />
      <Flex as="nav" maxWidth="fit-content" gap={4} flex="1">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/" className="hover:underline">
          Features
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
      </Flex>
    </Flex>
  )
}
