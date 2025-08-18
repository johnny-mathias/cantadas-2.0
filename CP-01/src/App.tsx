import { Header } from './components/headerCard.tsx'
import { CantadaCard } from './components/cantadasCard.tsx'
import './App.css'

function App() {
  return (
    <>
      <Header
      id='1'
      title='Site de cantadas 2.0'
      sub='O Site de cantadas mais quentes de 2023! 😈😈'
      />

      <CantadaCard
      id='1'
      titulo='Peido'
      cantada='Gata, se você fosse um peido eu não te soltava'
      imagem='/moskitao_og_pic.jpg'
      />
      <CantadaCard
      id='2'
      titulo='Piolho'
      cantada='Gata, você é tipo piolho: não sai da minha cabeça!'
      imagem='/moskitao_2.jpg'
      />
    </>
  )
}

export default App