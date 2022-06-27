// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  withdrawAmt = val => {
    this.setState(prevStatus => ({count: prevStatus.count - val}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-div">
        <div className="inner-div">
          <div className="profile-div">
            <h1 className="p-img">S</h1>
            <h1 className="p-name">Sarah Williams</h1>
          </div>
          <div className="bal-div">
            <div>
              <p className="bal-title">Your Balance</p>
            </div>
            <div className="finBal-div">
              <p className="finBal">{count}</p>
              <p className="finBal-rup">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choo">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-div">
            {denominationsList.map(eachItem => (
              <DenominationItem
                withdrawAmt={this.withdrawAmt}
                key={eachItem.id}
                denominationDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
