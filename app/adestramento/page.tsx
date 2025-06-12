import PageHeader from "@/components/PageHeader"
import PhotoGallery from "@/components/PhotoGallery"
import FAQ from "@/components/FAQ"

const galleryImages = [
  { src: "/imagens/adestramento/adestramento1.jpg?height=200&width=200", alt: "Adestramento 1" },
  { src: "/imagens/adestramento/adestramento2.jpg?height=200&width=200", alt: "Adestramento 2" },
  { src: "/imagens/adestramento/adestramento3.jpg?height=200&width=200", alt: "Adestramento 3" },
  { src: "/imagens/adestramento/adestramento4.jpg?height=200&width=200", alt: "Adestramento 4" },
  { src: "/imagens/adestramento/adestramento5.jpg?height=200&width=200", alt: "Adestramento 5" },
]

export default function AdestramentoPage() {
  return (
    <div>
      <PageHeader title="Adestramento" />

      <div className="relative h-64 md:h-96 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/imagens/adestramento/banner-adestramento.jpg?height=400&width=1200')" }}
        />
      </div>

      <PhotoGallery images={galleryImages} />

      <FAQ />
    </div>
  )
}
