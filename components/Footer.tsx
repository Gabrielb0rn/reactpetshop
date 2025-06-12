"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Send, Loader2, Copy } from "lucide-react"
import toast from "react-hot-toast"

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos!", {
        icon: "⚠️",
      })
      return
    }

    setIsSubmitting(true)
    toast.loading("Enviando mensagem...", { id: "form-submit" })

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.", {
      id: "form-submit",
      icon: "🐾",
      duration: 5000,
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePhoneClick = async () => {
    console.log("Footer phone clicked")
    const phoneNumber = "(48) 3222 0098"

    try {
      await navigator.clipboard.writeText(phoneNumber)
      toast.success(`Número ${phoneNumber} copiado para área de transferência!`, {
        icon: "📋",
        duration: 3000,
      })
    } catch (err) {
      console.error("Failed to copy phone number:", err)

      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = phoneNumber
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)

      toast.success(`Número ${phoneNumber} copiado!`, {
        icon: "📋",
        duration: 3000,
      })
    }
  }

  const handleWhatsAppClick = () => {
    console.log("Footer WhatsApp clicked")
    const phoneNumber = "5548993830928"
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    toast.success("Abrindo WhatsApp...", { icon: "💬" })
    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
    }, 1000)
  }

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`)
    toast.success(`Redirecionando para ${platform}...`, { icon: "🔗" })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <Send size={24} className="text-lime-400" />
              <span>Fale Conosco</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  required
                  className="w-full px-4 py-4 bg-white/10 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu melhor e-mail"
                  required
                  className="w-full px-4 py-4 bg-white/10 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar você e seu pet?"
                  rows={4}
                  required
                  className="w-full px-4 py-4 bg-white/10 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-vertical"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-lime-500 hover:bg-lime-600 disabled:bg-gray-600 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:pl-8">
            <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
            <div className="space-y-6 mb-10">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer w-full text-left hover:scale-105 transform duration-300 group"
                title="Clique para copiar o número"
              >
                <div className="bg-lime-500 p-3 rounded-full flex items-center space-x-1">
                  <Phone size={20} className="text-gray-900" />
                  <Copy size={16} className="text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-white font-semibold">Telefone</p>
                  <p className="text-gray-300">(48) 3222 0098</p>
                  <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Clique para copiar
                  </p>
                </div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer w-full text-left hover:scale-105 transform duration-300"
              >
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-gray-300">(48) 99383 0928</p>
                  <p className="text-xs text-gray-400">Clique para abrir</p>
                </div>
              </button>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/5">
                <div className="bg-red-500 p-3 rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Endereço</p>
                  <p className="text-gray-300">
                    Rua Marechal Deodoro, 55
                    <br />
                    Centro - Florianópolis/SC
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-white font-semibold mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleSocialClick("Facebook")}
                  className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 transform"
                >
                  <Facebook size={24} className="text-white" />
                </button>
                <button
                  onClick={() => handleSocialClick("Instagram")}
                  className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110 transform"
                >
                  <Instagram size={24} className="text-white" />
                </button>
                <button
                  onClick={() => handleSocialClick("LinkedIn")}
                  className="bg-gray-700 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 transform"
                >
                  <Linkedin size={24} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pet Shop. Todos os direitos reservados. Feito com ❤️ para seu pet.
          </p>
        </div>
      </div>
    </footer>
  )
}
