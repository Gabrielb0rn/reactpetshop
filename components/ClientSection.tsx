"use client"

import Image from "next/image"
import { Phone, Copy } from "lucide-react"
import toast from "react-hot-toast"

interface ClientSectionProps {
  title: string
  description: string
  image: string
  imageAlt: string
  showPhone?: boolean
  phone?: string
}

export default function ClientSection({
  title,
  description,
  image,
  imageAlt,
  showPhone = false,
  phone,
}: ClientSectionProps) {
  const handlePhoneClick = async () => {
    if (!phone) return

    console.log("Client section phone clicked:", phone)

    try {
      await navigator.clipboard.writeText(phone)
      toast.success(`Número ${phone} copiado para área de transferência!`, {
        icon: "📋",
        duration: 3000,
      })
    } catch (err) {
      console.error("Failed to copy phone number:", err)

      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = phone
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)

      toast.success(`Número ${phone} copiado!`, {
        icon: "📋",
        duration: 3000,
      })
    }
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{description}</p>

          {showPhone && phone && (
            <button
              onClick={handlePhoneClick}
              className="flex items-center space-x-3 bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group"
              title="Clique para copiar o número"
            >
              <Phone size={20} />
              <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>{phone}</span>
            </button>
          )}
        </div>
        <div className="relative">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
