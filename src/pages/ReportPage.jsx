import RaniReport from '../components/RaniReport.jsx'
import reportPage from '../data/pages/report.js'
import BirthdayLayout from '../layouts/BirthdayLayout.jsx'

function ReportPage() {
  return (
    <BirthdayLayout>
      <RaniReport content={reportPage} />
    </BirthdayLayout>
  )
}

export default ReportPage
