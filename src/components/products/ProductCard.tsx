import type { IProduct } from '@/types/api/products'
import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  RatingGroup,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'

interface IProductCardProps {
  isLoading?: boolean
  productData: Pick<IProduct, 'id' | 'category' | 'price' | 'title' | 'images'>
}

const ProductCard = ({ isLoading, productData }: IProductCardProps) => {
  return (
    <LinkBox
      key={productData.id}
      width={{ base: '48%', sm: '48%', md: '32%', lg: '24%' }}
      //   borderWidth="1px"
      //   borderRadius="lg"
    >
      <LinkOverlay asChild>
        <Link to="/products/$id" params={{ id: String(productData.id) }}>
          <Box p={4}>
            <Image
              as={isLoading ? Skeleton : Image}
              src={productData.images?.[0] || ''}
              alt={productData.title}
              width="100%"
              aspectRatio="1"
              objectFit="cover"
            />
            <Heading as="h3" size="md" mt={2} lineClamp={2}>
              {isLoading && <SkeletonText noOfLines={1} />}
              {!isLoading && productData.title}
            </Heading>
            <RatingGroup.Root
              count={5}
              defaultValue={3}
              size="xs"
              colorPalette="yellow"
              autoFocus={false}
            >
              {isLoading && <SkeletonText noOfLines={1} w="50px" />}
              {!isLoading && (
                <>
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control />
                </>
              )}
            </RatingGroup.Root>
            <Box fontWeight="bold" fontSize="xl">
              {isLoading && <SkeletonText noOfLines={1} w="50px" />}
              {!isLoading && `\$${productData.price}`}
            </Box>
          </Box>
        </Link>
      </LinkOverlay>
    </LinkBox>
  )
}

export default ProductCard
