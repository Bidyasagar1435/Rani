import FriendshipSection from '../components/FriendshipSection.jsx'
import BirthdayLayout from '../layouts/BirthdayLayout.jsx'
import friendshipPage from '../data/pages/friendship.js'

function FriendshipPage() {
  return (
    <BirthdayLayout>
      <FriendshipSection content={friendshipPage} />
    </BirthdayLayout>
  )
}

export default FriendshipPage
