import MemoryGallery from '../components/MemoryGallery.jsx'
import BirthdayLayout from '../layouts/BirthdayLayout.jsx'
import memoriesPage from '../data/pages/memories.js'

function MemoriesPage() {
  return (
    <BirthdayLayout>
      <MemoryGallery content={memoriesPage} />
    </BirthdayLayout>
  )
}

export default MemoriesPage
