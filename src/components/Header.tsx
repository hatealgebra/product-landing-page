import { Flex, Box, IconButton, Spacer } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header>
      <Flex
        paddingX={'5%'}
        py="2"
        align="center"
        justify="space-between"
        borderColor={'gray.200'}
        borderBottomWidth="1px"
      >
        {/* Logo */}
        <Box>
          <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
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
    </header>
  )
}
