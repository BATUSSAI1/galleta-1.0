import { useState } from 'react'
import './App.css'
import phrasesRandom from './utils/pharsesRandom'
import pharses from './utils/pharses.json'
import PhrasesComp from './components/PhrasesComp'
import Button from './components/Button'
import image from './utils/image.json'



function App() {
  
  const initial = phrasesRandom(pharses)
  const initialback= phrasesRandom(image)
  
const [Randomphrase, setRandomphrase] = useState(initial)
const [RandomImage, setRandomImage] = useState(initialback)

const oStyle= {
  backgroundImage: `url(/fondo${RandomImage}.png)`
}

  return (  
    <div className='fond' style={oStyle}> 
      <h1 className= 'title' >Galleta de la Fortuna</h1>
      <div className='card'>
     <PhrasesComp nameRandom={Randomphrase}/>
     </div>
     <div>
     <Button nextPhrase={setRandomphrase}
             nextImage={setRandomImage}
     />
     </div>
    </div> 
  )
}

export default App
