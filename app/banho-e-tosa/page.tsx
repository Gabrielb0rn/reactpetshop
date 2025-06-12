import PageHeader from "@/components/PageHeader"
import ContentImageLeft from "@/components/ContentImageLeft"
import ContentImageRight from "@/components/ContentImageRight"

export default function BanhoTosaPage() {
  return (
    <div>
      <PageHeader title="Banho e Tosa" />

      <ContentImageLeft
        image="imagens\imagens-banho-e-tosa\banho-tosa.jpg?height=400&width=600"
        imageAlt="Cachorro recebendo banho e tosa profissional"
        title="Serviços Profissionais de Banho e Tosa"
      />

      <div className="section-title">🐈 PET CARE 🐾</div>

      <ContentImageRight
        image="imagens\imagens-banho-e-tosa\vacina-cachorro.jpg?height=400&width=600"
        imageAlt="Cuidados veterinários e vacinação"
        title="Cuidados Completos para seu Pet"
      />
    </div>
  )
}
