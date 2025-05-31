import type { IProduct } from '@/types/api/products'
import {
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

interface ProductDetailProps {
  productData?: IProduct
}

const ProductDetail = ({ productData }: ProductDetailProps) => {
  if (!productData) {
    return <div>No product data available.</div>
  }

  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={2.5}>
      <Image
        src={productData.images?.[0] || ''}
        alt={`${productData.id} image`}
        width="100%"
        aspectRatio="1"
        objectFit="contain"
        mb="1"
      />
      <Heading as="h1" size="2xl">
        {productData.title}
      </Heading>
      <Badge as="span" width="fit-content">
        {productData.category?.name}
      </Badge>
      <Heading as="span" size="3xl" py="2">
        ${productData.price}.00
      </Heading>
      <Button>Buy now</Button>
      <Box>
        <Heading as="h2" size="lg" mt={4} textDecoration="underline">
          Description
        </Heading>
        <Text>{productData.description}</Text>
      </Box>
      {/* <Box>
              <Heading as="h2" size="lg" mt={4} textDecoration="underline">
                Gallery
              </Heading>
            </Box> */}
      {/* <Flex overflowX="hidden" gapX={4}>
              <For each={data.images} fallback={<div>No images available</div>}>
                {(image) => <Image key={image} src={image} width="200px" />}
              </For>
            </Flex> */}
    </Grid>
  )
}

export default ProductDetail
