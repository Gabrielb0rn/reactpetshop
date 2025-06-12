"use client"

import { motion } from "framer-motion"
import Banner from "@/components/Banner"
import ServiceCard from "@/components/ServiceCard"
import CallToAction from "@/components/CallToAction"
import ClientSection from "@/components/ClientSection"
import DeliverySection from "@/components/DeliverySection"
import Footer from "@/components/Footer"
import Map from "@/components/Map"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Home() {
  return (
    <div>
      <Banner />

      {/* Services Section */}
      <section id="services-section" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              image="/imagens/banho-Tosa.jpg?height=300&width=400"
              title="Banho e Tosa"
              alt="Serviços de banho e tosa para pets"
              href="/banho-e-tosa"
              description="Cuidados completos de higiene e beleza"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              image="/imagens/vacina-cachorro.jpg?height=300&width=400"
              title="Pet Care"
              alt="Cuidados veterinários para pets"
              description="Saúde e bem-estar do seu pet"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              image="/imagens/adestramento.jpg?height=300&width=400"
              title="Adestramento"
              alt="Serviços de adestramento para cães"
              href="/adestramento"
              description="Educação e comportamento canino"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              image="/imagens/hotel-para-cachorros.jpg?height=300&width=400"
              title="Hotel Resort"
              alt="Hotel e resort para pets"
              href="/hotel-resort"
              description="Hospedagem com conforto e diversão"
            />
          </motion.div>
        </motion.div>
      </section>

      <CallToAction
        title="Cuidamos do seu Pet com Amor e Carinho"
        description="Oferecemos os melhores serviços para o bem-estar do seu animal de estimação. Entre em contato conosco e agende uma visita!"
        buttonText="Agendar Agora"
      />

      <motion.div
        className="section-title"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🐾 SEJA BEM-VINDO AO PETSHOP! 🐾
      </motion.div>

      <ClientSection
        title="Relação com o cliente"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum tincidunt arcu, eu porttitor odio efficitur eget. Nunc sed augue sit amet dolor molestie interdum sed et erat. Vivamus nisi enim, eleifend id ex quis, accumsan ornare felis. Ut vel libero consequat, rhoncus orci id, auctor lorem. Donec mollis pellentesque magna a vestibulum. Nam sed arcu sit amet sapien tincidunt convallis a non quam."
        image="/imagens/rottweiller.jpg?height=400&width=600"
        imageAlt="Cliente feliz com seu pet"
      />

      <DeliverySection
        image="/imagens\Delivery.jpg"
        title="Atendimento Delivery"
        phone="0800 555 3232"
        imageAlt="Serviço de delivery para pets"
      />

      <Footer />
      <Map />
    </div>
  )
}
