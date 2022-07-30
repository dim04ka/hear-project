import IconPhone from './images/phone_icon.svg'
import { Icon, Number, Phone } from './Phone.style'

const PhoneComponent = () => {
  return (
    <Phone href="tel:+1-847-555-5555">
      <Icon src={IconPhone} />
      <Number>+375 29 65 92 367</Number>
    </Phone>
  )
}

export default PhoneComponent
