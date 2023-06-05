import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreaters from '../state/index'

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreaters,dispatch)
  const balance = useSelector(state=>state.amount)
  return (
    <>
    <h2>Deposit/Withdraw money</h2>
    {/* without using bindActionCreators */}
    {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreaters.withdrawMoney(100))}}>-</button> */}

    {/* using bindActionCreators */}
    <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}>-</button>

    Update balance: {balance}
    {/* without using bindActionCreators */}
    {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreaters.depositMoney(100))}}>+</button> */}

    {/* using bindActionCreators */}
    <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
    </>
  )
}

export default Shop