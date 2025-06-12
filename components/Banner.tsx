"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import toast from "react-hot-toast"

const bannerImages = [
  {
    src: "/imagens/banner.jpg?height=750&width=1200",
    alt: "Banner 1 - Cuidados com seu Pet",
    title: "Cuidados Especiais para seu Pet",
    subtitle: "Amor e carinho em cada serviço",
  },
  {
    src: "/imagens/banner-01.jpg?height=750&width=1200",
    alt: "Banner 2 - Serviços Profissionais",
    title: "Serviços Profissionais",
    subtitle: "Qualidade e excelência garantidas",
  },
  {
    src: "/imagens/banho-e-tosa.png?height=750&width=1200",
    alt: "Banner 3 - Banho e Tosa",
    title: "Banho e Tosa Premium",
    subtitle: "Seu pet sempre bonito e cheiroso",
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPlaying])

  const nextSlide = () => {
    console.log("Next slide clicked")
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    toast.success("Próximo slide", { icon: "➡️" })
  }

  const prevSlide = () => {
    console.log("Previous slide clicked")
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
    toast.success("Slide anterior", { icon: "⬅️" })
  }

  const handleServicesClick = () => {
    console.log("Services button clicked")
    toast.success("Veja nossos serviços abaixo! 🐾")

    // Scroll to services section
    setTimeout(() => {
      const servicesSection = document.getElementById("services-section")
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 500)
  }

  const togglePlayPause = () => {
    console.log("Play/Pause clicked, current state:", isPlaying)
    const newState = !isPlaying
    setIsPlaying(newState)
    toast.success(newState ? "Carousel retomado" : "Carousel pausado", {
      icon: newState ? "▶️" : "⏸️",
    })
  }

  const goToSlide = (index: number) => {
    console.log("Dot clicked, going to slide:", index)
    setCurrentSlide(index)
    toast.success(`Slide ${index + 1}`, { icon: "🎯" })
  }

  return (
    <div className="relative carousel-item group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={bannerImages[currentSlide].src || "/placeholder.svg"}
            alt={bannerImages[currentSlide].alt}
            fill
            className="carousel-image"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{bannerImages[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">{bannerImages[currentSlide].subtitle}</p>
          <button
            onClick={handleServicesClick}
            className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-lg"
          >
            Conheça Nossos Serviços
          </button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 z-20"
        aria-label={isPlaying ? "Pausar carousel" : "Reproduzir carousel"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-lime-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  )
}
