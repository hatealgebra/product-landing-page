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

const fetchProductDetail = async (id: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

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
  // For demonstration, let's assume the product ID comes from the URL query string
  // In a real app, you might use react-router's useParams or similar
  const searchParams = useParams({ from: '/products/$id' })
  const productId = searchParams.id

  const { data, isLoading, error } = useQuery<IProduct>({
    queryKey: ['product', productId],
    queryFn: () => fetchProductDetail(productId),
    enabled: !!productId,
  })

  if (!productId) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="300px"
        gap={4}
      >
        <Box fontSize="5xl" color="gray.400">
          <LuHouse />
        </Box>
        <Heading as="h2" size="lg" textAlign="center">
          Unfortunately the product was not found or the detail could not be
          shown.
          <br />
          Please go back or look at the products down below.
        </Heading>
      </Flex>
    )
  }

  if (isLoading) {
    return <ProductPageSkeleton />
  }

  return (
    <Flex padding={4} direction="column" gap={4}>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">
              <LuHouse />
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          {!productId && !error && (
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
      {error && (
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
