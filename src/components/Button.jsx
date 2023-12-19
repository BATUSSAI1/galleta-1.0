import phrasesRandom from "../utils/pharsesRandom"
import pharses from "../utils/pharses.json"
import image from "../utils/image.json"

const Button = ({nextPhrase, nextImage}) => {

    const handleNextPharese =() =>{
      nextPhrase(phrasesRandom(pharses)) 
      nextImage(phrasesRandom(image))
    }
  return (
    <button className="Next" onClick={handleNextPharese}>PUSH!</button>
  )
}
export default Button