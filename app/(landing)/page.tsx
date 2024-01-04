import { Button } from '@/components/ui/button'
import ProductsList from '@/entities/product/ui/ProductsLits'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '../config/routes'

export default function Home() {
  return (
    <div className="container py-4">
      <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold">PROMOTICH 360</h1>
        <ProductsList />
        <Link href={ROUTES.cabinet.dashboard}>
          <Button className="flex gap-2">
            Спробувати PROMOTICH 360
            <ArrowRight />
          </Button>
        </Link>
      </div>

    </div>
  )
}
