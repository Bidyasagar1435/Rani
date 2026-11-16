import { useState } from 'react'
import GiftSurprise from '../components/GiftSurprise.jsx'
import BirthdayLayout from '../layouts/BirthdayLayout.jsx'
import surprisePage from '../data/pages/surprise.js'

function SurprisePage() {
  const [giftOpened, setGiftOpened] = useState(false)

  return (
    <BirthdayLayout>
      <GiftSurprise
        content={surprisePage}
        giftOpened={giftOpened}
        onOpen={() => setGiftOpened(true)}
      />
    </BirthdayLayout>
  )
}

export default SurprisePage
