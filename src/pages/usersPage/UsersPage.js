import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAction } from '../../redux/actions'
import User from '../../components/user/User'


function UsersPage() {

  const dispatch = useDispatch()
  const usersState = useSelector(state => state.usersReducer)
  const { users } = usersState || {}

  useEffect(()=>{
    dispatch(fetchUserAction()) 
  }, [dispatch])


  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap:'10px'}}>
        {users && users.map(userInfo => <User key={userInfo.id} userInfo={userInfo}/>)}
    </div>
  )
}

export default UsersPage