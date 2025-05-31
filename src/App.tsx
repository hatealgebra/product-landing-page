import {
  Bleed,
  Box,
  Button,
  Flex,
  Group,
  Heading,
  Image,
  Separator,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import heroIphone from '@/assets/images/heroImage.webp'
import ProductListing from './components/products/ProductListing'

function App() {
  const fetchProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    if (!res.ok)
      throw new Error('Something went wrong. Please try again later.')
    return res.json()
  }

  const {
    data: productsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  if (error) {
    return <div>Error loading products</div>
  }

  return (
    <Flex direction="column" gap="2">
      <Box py="6" bg="gray.950" height={['40vh', '60vh', '70vh']}>
        <Heading as="h1" size="4xl" textAlign="center" color="gray.100" my={4}>
          The evolution begins
        </Heading>
      </Box>
      <Bleed blockStart="55%" overflow={'hidden'}>
        <Image
          src={heroIphone}
          width="full"
          objectPosition="center"
          objectFit="contain"
          minHeight={['40vh', '60vh', '70vh']}
        />
      </Bleed>
      <Heading as="h1" size="4xl" my={4} textAlign="center">
        Sony XM5
      </Heading>
      <Group grow width="80%" maxWidth="350px" mx="auto">
        <Button
          as="a"
          target="_blank"
          href="https://www.youtube.com/watch?v=D8wG67oko7E"
          variant="outline"
        >
          Learn more
        </Button>
        <Button>Buy</Button>
      </Group>
      <Separator mt={10} />
      <ProductListing
        heading="New products"
        productsData={productsData}
        isLoading={isLoading}
      />
    </Flex>
  )
}

export default App
