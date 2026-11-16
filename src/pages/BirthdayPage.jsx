import BirthdayHero from '../components/BirthdayHero.jsx'
import BirthdayLayout from '../layouts/BirthdayLayout.jsx'
import birthdayIntro from '../data/pages/birthdayIntro.js'

function BirthdayPage() {
  return (
    <BirthdayLayout>
      <BirthdayHero content={birthdayIntro} />
    </BirthdayLayout>
  )
}

export default BirthdayPage
