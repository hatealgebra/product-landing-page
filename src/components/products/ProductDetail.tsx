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
    <Grid
      templateColumns={{
        base: '1fr',
        sm: '1.5fr 1fr',
        md: '2fr 300px 1fr',
      }}
      templateRows={{ md: '1fr repeat(4, auto) 1fr auto' }}
      templateAreas={{
        sm: `"image title" "image categoryBadge" "image price" "image button" "image ." "description description"`,
        md: `"image . ." "image title ." "image categoryBadge ." "image price ." "image button ." "image . ." "description description ."`,
      }}
      gapX={{ sm: 4, md: 12 }}
      gapY={2}
      pr={{ sm: 4, md: 0 }}
    >
      <Image
        src={productData.images?.[0] || ''}
        alt={`${productData.id} image`}
        gridArea={{ sm: 'image' }}
        width="100%"
        aspectRatio="1"
        objectFit="contain"
        mb="1"
      />
      <Heading as="h1" size="2xl" gridArea={{ sm: 'title' }}>
        {productData.title}
      </Heading>
      <Badge
        as="span"
        width="fit-content"
        height="fit-content"
        gridArea={{ sm: 'categoryBadge' }}
      >
        {productData.category?.name}
      </Badge>
      <Heading as="span" size="3xl" py="2" gridArea={{ sm: 'price' }}>
        ${productData.price}.00
      </Heading>
      <Button gridArea={{ sm: 'button' }}>Buy now</Button>
      <Box gridArea={{ sm: 'description' }} maxW="700px">
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

// TODO: Switch single product photo for carousel component
//TODO: Add gallery section and add two variants: One when the product has been loaded and show the related. If not loaded, show most searched products
