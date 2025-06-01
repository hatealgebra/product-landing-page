import type { IProduct } from '@/types/api/products'
import { Flex, For, Heading, Show, Stack } from '@chakra-ui/react'
import ProductCard from './ProductCard'

interface IProductListing
  extends Pick<IProduct, 'id' | 'category' | 'price' | 'title' | 'images'> {}

interface ProductListingProps {
  heading?: string
  isLoading?: boolean
  productsData?: IProductListing[]
}

const mockArray = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Product ${i + 1}`,
  images: [''],
  price: 0,
  category: { name: '' },
}))

const ProductListing = ({
  heading,
  isLoading,
  productsData,
}: ProductListingProps) => {
  const data = isLoading ? mockArray : productsData

  return (
    <Flex py={10} px={4} direction="column" gap={4} maxW="1200px" mx="auto">
      <Show when={heading}>
        <Heading as="h2" size="3xl" mb={5} textAlign="center">
          New products
        </Heading>
      </Show>
      <Stack direction="row" width="100%" flexWrap="wrap">
        <For
          each={data}
          fallback={
            <Heading as="h3" size="md" textAlign="center" width="100%">
              Sorry, but there are no products available
            </Heading>
          }
        >
          {(productData: any) => (
            <ProductCard isLoading={isLoading} productData={productData} />
          )}
        </For>
      </Stack>
    </Flex>
  )
}

export default ProductListing
