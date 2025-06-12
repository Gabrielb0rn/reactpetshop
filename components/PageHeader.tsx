interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
    </div>
  )
}
