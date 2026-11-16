import BirthdayFinale from '../components/BirthdayFinale.jsx'
import BirthdayLayout from '../layouts/BirthdayLayout.jsx'
import finalePage from '../data/pages/finale.js'

function FinalePage() {
  return (
    <BirthdayLayout>
      <BirthdayFinale content={finalePage} />
    </BirthdayLayout>
  )
}

export default FinalePage
