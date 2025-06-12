"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import toast from "react-hot-toast"

const faqData = [
  {
    question: "Qual a melhor idade para adestramento?",
    answer:
      "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.",
  },
  {
    question: "Toda raça pode ser adestrada?",
    answer: "Sim, toda raça pode ser adestrada. A chave é a paciência e a consistência do tutor.",
  },
  {
    question: "Quanto tempo leva para o cachorro estar preparado?",
    answer:
      "O tempo de treinamento varia de acordo com o cão e os objetivos. Comandos básicos podem ser aprendidos em algumas semanas.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    console.log("FAQ toggled:", index)
    const newIndex = openIndex === index ? null : index
    setOpenIndex(newIndex)

    if (newIndex !== null) {
      toast.success(`Pergunta ${index + 1} expandida`, { icon: "❓" })
    }
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-600 text-white font-medium flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-200 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
