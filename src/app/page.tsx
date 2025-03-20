import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do Zero',
  description: 'Aprendendo Next Js com sujeito programador',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito no Youtube!',
    description: 'Aprendendo Next JS com Sujeito no Youtube!',
    images: ['https://picsum.photos/seed/picsum/200/300']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}