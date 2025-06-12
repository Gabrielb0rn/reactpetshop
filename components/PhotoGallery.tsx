import Image from "next/image"

interface PhotoGalleryProps {
  images: Array<{
    src: string
    alt: string
  }>
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit, mollitia, cupiditate quod qui reiciendis
          alias doloribus aliquid laboriosam tenetur expedita, vero a obcaecati velit explicabo laudantium beatae
          impedit est!
        </p>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi excepturi nam, dolorum ipsam, deserunt nulla
          necessitatibus provident consequatur perspiciatis numquam, minima aliquam reiciendis voluptatibus eligendi
          blanditiis velit tempore repellendus harum.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
