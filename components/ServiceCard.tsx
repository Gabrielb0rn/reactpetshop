"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import toast from "react-hot-toast"

interface ServiceCardProps {
  image: string
  title: string
  alt: string
  href?: string
  description?: string
}

export default function ServiceCard({ image, title, alt, href, description }: ServiceCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    console.log("Service card clicked:", title, "href:", href)

    if (!href) {
      e.preventDefault()
      toast.success(`Serviço de ${title} - Em breve mais informações!`, {
        icon: "🐾",
      })
    } else {
      toast.success(`Redirecionando para ${title}...`, {
        icon: "🔗",
      })
    }
  }

  const CardContent = () => (
    <div
      className="card-service group cursor-pointer h-full hover:transform hover:-translate-y-2 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="h-64 relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <div className="bg-white/90 p-2 rounded-full">
            <ArrowRight size={20} className="text-gray-800" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-lime-600 transition-colors mb-2">
          {title}
        </h3>
        {description && <p className="text-gray-600 text-center text-sm">{description}</p>}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} onClick={handleClick}>
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
