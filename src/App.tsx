import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import { AppDispatch, RootState, getUserRequest } from './redux';
import { useState } from 'react';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default function App() {
  const dispatch = useAppDispatch()
  const userState = useAppSelector(state => state.user);
  const [name, setName] = useState('')

  const handleUser = () => {
    dispatch(getUserRequest(name))
  }

  console.log(userState)

  return (
    <>
      <Header />
      <h1>User</h1>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleUser} disabled={!name.length}>User Request</button>
    </>
  )
}
