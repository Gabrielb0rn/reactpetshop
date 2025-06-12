"use client"

import { Sparkles, ArrowRight, Phone } from "lucide-react"
import toast from "react-hot-toast"

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  onButtonClick?: () => void
}

export default function CallToAction({ title, description, buttonText, onButtonClick }: CallToActionProps) {
  const handleScheduleClick = () => {
    console.log("Schedule button clicked")

    if (onButtonClick) {
      onButtonClick()
    } else {
      toast.success("Redirecionando para agendamento...", {
        icon: "📅",
      })

      setTimeout(() => {
        toast.success("Entre em contato pelo WhatsApp: (48) 99383-0928", {
          icon: "📱",
          duration: 6000,
        })
      }, 2000)
    }
  }

  const handleWhatsAppClick = () => {
    console.log("WhatsApp button clicked")

    const phoneNumber = "5548993830928"
    const message = encodeURIComponent("Olá! Gostaria de agendar um serviço para meu pet. Podem me ajudar?")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    toast.success("Abrindo WhatsApp...", {
      icon: "💬",
    })

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
    }, 1000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-lime-50 via-white to-lime-50 border-t-4 border-b-4 border-lime-400 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-animation absolute top-10 left-10">
          <Sparkles size={40} className="text-lime-500" />
        </div>
        <div className="floating-animation absolute top-20 right-20" style={{ animationDelay: "2s" }}>
          <Sparkles size={30} className="text-lime-400" />
        </div>
        <div className="floating-animation absolute bottom-20 left-1/4" style={{ animationDelay: "4s" }}>
          <Sparkles size={35} className="text-lime-600" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 gradient-text">{title}</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScheduleClick}
              className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-lg group inline-flex items-center space-x-2"
            >
              <span>{buttonText}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="bg-gray-800 hover:bg-gray-900 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-lg group inline-flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
