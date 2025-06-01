import type { IProduct } from '@/types/api/products'
import { queryOptions } from '@tanstack/react-query'

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products')
  return res.json()
}

export const productsQueryOptions = queryOptions({
  queryKey: ['products'],
  queryFn: fetchProducts,
})
