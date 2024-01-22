import Link from "next/link"
import Home from "@/app/dashboard/Home"

import Menu from '@/components/menubar/Menu'

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Home />
    </section>
  )
}
