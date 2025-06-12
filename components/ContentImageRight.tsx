"use client"

import Image from "next/image"
import toast from "react-hot-toast"

interface ContentImageRightProps {
  image: string
  imageAlt: string
  title?: string
}

export default function ContentImageRight({ image, imageAlt, title }: ContentImageRightProps) {
  const handleLearnMore = () => {
    console.log("Learn More button clicked (right)")
    toast.success("Mais informações em breve! Entre em contato conosco.", {
      icon: "📞",
    })
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 md:order-1">
          {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h2>}
          <p className="text-gray-600 leading-relaxed">
            Nullam eleifend, augue sit amet ullamcorper imperdiet, neque magna condimentum elit, ut semper massa felis
            ut dolor. Integer consectetur leo quis ex efficitur lobortis. Suspendisse ut quam varius, vulputate enim id,
            porttitor nisi. Vestibulum accumsan massa eu quam pharetra venenatis.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Vestibulum in tristique nulla. Vivamus ac tempor est, ut vestibulum arcu. Morbi eu molestie nisl, lacinia
            malesuada ligula. Sed quam arcu, molestie eget rhoncus sed, elementum in neque. Vestibulum dignissim ligula
            purus, sit amet luctus ipsum volutpat ut.
          </p>
          <button
            onClick={handleLearnMore}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Saiba Mais
          </button>
        </div>
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg md:order-2">
          <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
