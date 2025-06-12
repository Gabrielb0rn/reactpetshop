export default function Map() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5949.360687626597!2d-48.497443192228225!3d-27.546646340195156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1744809102311!5m2!1spt-BR!2sbr"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Pet Shop"
        className="w-full"
      />
    </section>
  )
}
