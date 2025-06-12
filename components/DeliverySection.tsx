"use client"

import Image from "next/image"
import { Phone, Copy } from "lucide-react"
import toast from "react-hot-toast"

interface DeliverySectionProps {
  image: string
  title: string
  phone: string
  imageAlt: string
}

export default function DeliverySection({ image, title, phone, imageAlt }: DeliverySectionProps) {
  const handlePhoneClick = async () => {
    console.log("Phone button clicked:", phone)

    try {
      // Clean phone number (remove spaces, parentheses, etc.)
      const cleanPhone = phone.replace(/\D/g, "")

      // Copy to clipboard
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-200 md:h-[450px]">
            <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
          </div>
          <div className="md:w-4/5 bg-lime-400 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
            <button
              onClick={handlePhoneClick}
              className="flex items-center justify-center space-x-3 w-full hover:bg-lime-500 transition-colors p-4 rounded-lg group"
              title="Clique para copiar o número"
            >
              <div className="flex items-center space-x-2">
                <Phone size={32} className="text-gray-900" />
                <Copy size={20} className="text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-gray-900">{phone}</span>
            </button>
            <p className="text-sm text-gray-700 mt-2 opacity-75">Clique para copiar o número</p>
          </div>
        </div>
      </div>
    </section>
  )
}
