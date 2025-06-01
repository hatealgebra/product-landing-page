import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { MdError } from 'react-icons/md'
import {
  Box,
  Breadcrumb,
  Flex,
  Grid,
  Heading,
  Separator,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import { LuHouse } from 'react-icons/lu'
import type { IProduct } from '@/types/api/products'
import ProductDetail from '@/components/products/ProductDetail'
import { productDetailQueryOptions } from '@/queryOptions/products/productDetailQueryOptions'

// FIX: Unite the styling with th product detail
const ProductPageSkeleton = () => (
  <Flex padding={4} direction="column" gap={4}>
    {/* Breadcrumb Skeleton */}
    <Flex align="center" gap={2}>
      <Skeleton width="24px" height="24px" borderRadius="full" />
      <Skeleton width="60px" height="16px" borderRadius="md" />
      <Skeleton width="16px" height="16px" borderRadius="full" />
      <Skeleton width="120px" height="16px" borderRadius="md" />
    </Flex>
    {/* Product Detail Skeleton */}
    <Grid templateColumns={['1fr', null, '1fr 2fr']} gap={8} alignItems="start">
      <Box>
        <Skeleton width="320px" height="320px" borderRadius="lg" />
      </Box>
      <Flex direction="column" gap={4}>
        <Skeleton width="60%" height="32px" borderRadius="md" />
        <Skeleton width="40%" height="24px" borderRadius="md" />
        <Skeleton width="80%" height="16px" borderRadius="md" />
        <Skeleton width="90%" height="16px" borderRadius="md" />
        <Skeleton width="70%" height="16px" borderRadius="md" />
        <Flex gap={2}>
          <Skeleton width="80px" height="32px" borderRadius="md" />
          <Skeleton width="80px" height="32px" borderRadius="md" />
        </Flex>
      </Flex>
    </Grid>
    <Separator my={4} />
    {/* More from category skeleton */}
    <Box>
      <Skeleton width="300px" height="40px" mx="auto" borderRadius="md" />
    </Box>
  </Flex>
)

const ProductPage = () => {
  const searchParams = useParams({ from: '/products/$id' })
  const productId = searchParams.id
  // Not using useSuspenseQuery, because I'm using enabled in the query options, to save the request if the productId is not available
  // TODO: Add useSuspenseQuery for the gallery with product from the same category. In the query fn i would check for the product id. If it is undefined, show the gallery with top prodfucst, if available, show procuts from the same category
  const { data, isLoading, error } = useQuery<IProduct>({
    ...productDetailQueryOptions(productId),
  })

  // FIX: Write either CHakra UI recipe or just make a component container with max width to reuse through the app
  if (isLoading) {
    return (
      <Flex padding={4} direction="column" gap={4} maxW="1200px" mx="auto">
        <ProductPageSkeleton />
      </Flex>
    )
  }

  return (
    <Flex padding={4} direction="column" gap={4} maxW="1200px" mx="auto">
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">
              <LuHouse />
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          {productId && !error && (
            <>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink
                  maxWidth="60vw"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {data?.title}
                </Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </>
          )}
        </Breadcrumb.List>
      </Breadcrumb.Root>
      {(error || !productId) && (
        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="300px"
          gap={4}
        >
          <Box fontSize="5xl" color="gray.400">
            <MdError />
          </Box>
          <Heading as="h2" size="lg" textAlign="center">
            Unfortunately the product was not found or the detail could not be
            shown.
            <br />
            Please go back or look at the products down below.
          </Heading>
        </Flex>
      )}
      {!error && <ProductDetail productData={data} />}
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
      <Separator my={4} />
      <Box>
        <Heading as="h2" size="2xl" textAlign="center">
          <Text as="span">More from </Text>
          <Text as="span">{data?.category?.name}</Text>
        </Heading>
      </Box>
    </Flex>
  )
}

export default ProductPage
