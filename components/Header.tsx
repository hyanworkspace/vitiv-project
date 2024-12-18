import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">VITIV</Link>
        <nav className="space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="outline">Start Creating</Button>
        </nav>
      </div>
    </header>
  )
}

