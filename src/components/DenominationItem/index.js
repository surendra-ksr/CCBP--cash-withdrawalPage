// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdrawAmt} = props
  const {value} = denominationDetails

  const onWithdraw = event => {
    const val = event.target.value
    withdrawAmt(val)
  }

  return (
    <li className="listItem-div">
      <button
        type="button"
        value={value}
        onClick={onWithdraw}
        className="list-btn"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
