import BirthdayLetter from '../components/BirthdayLetter.jsx'
import BirthdayLayout from '../layouts/BirthdayLayout.jsx'
import letterPage from '../data/pages/letter.js'

function LetterPage() {
  return (
    <BirthdayLayout>
      <BirthdayLetter content={letterPage} />
    </BirthdayLayout>
  )
}

export default LetterPage
