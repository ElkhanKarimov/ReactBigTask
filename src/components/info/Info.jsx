import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck,faShield,faRotateLeft  } from '@fortawesome/free-solid-svg-icons'
import '../../components/info/Info.css'


const Info = () => {
  return (
    <div>
        <div className='box-container'>
            <div className='box'>
                <div className='box-icons'><FontAwesomeIcon icon={faTruck} /></div>
                <div>WORLDWIDE DELIVERY</div>
                <div>Far far away, behind the word mountains,</div>
                <div>far from the countries.</div>
            </div>
            <div className='box'>
                <div className='box-icons'><FontAwesomeIcon icon={faShield}/></div>
                <div>SECURE PAYMENTS</div>
                <div>Far far away, behind the word mountains,</div>
                <div>far from the countries.</div>
            </div>
            <div className='box'>
                <div className='box-icons'><FontAwesomeIcon icon={faRotateLeft}/></div>
                <div>SIMPLE RETURNS</div>
                <div>Far far away, behind the word mountains,</div>
                <div>far from the countries.</div>
            </div>
        </div>
    </div>
  )
}

export default Info