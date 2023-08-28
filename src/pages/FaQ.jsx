import FaqContainer from './components/FaqContainer'
import { faqdetails } from '../data/faqdetails'
import { Typography } from '@material-tailwind/react'

const FaQ = () => {
  return (
    <div className="my-6 border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
      <Typography variant="h2">FAQ's</Typography>
      {faqdetails.map((faq) => {
        return <FaqContainer {...faq} key={faq.id} />
      })}
    </div>
  )
}

export default FaQ
