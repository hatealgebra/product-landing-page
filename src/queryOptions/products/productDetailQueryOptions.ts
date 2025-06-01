import type { IProduct } from '@/types/api/products'

const fetchProductDetail = async (id: string): Promise<IProduct> => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  return res.json()
}

export const productDetailQueryOptions = (productId: string) => ({
  queryKey: ['product', productId],
  queryFn: () => fetchProductDetail(productId),
  enabled: !!productId,
  retry: 2,
})
