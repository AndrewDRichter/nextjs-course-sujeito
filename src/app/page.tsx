import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do Zero',
  description: 'Aprendendo Next Js com sujeito programador'
}

export default function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}