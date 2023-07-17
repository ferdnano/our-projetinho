import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import { AppDispatch, CatType, RootState, getUserRequest } from './redux';
import { useState } from 'react';
import "./App.css";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default function App() {
  const dispatch = useAppDispatch()
  const userState = useAppSelector(state => state.user);
  const [name, setName] = useState('')

  const CAT_MOCK = [{ "id": "2n6", "url": "https://cdn2.thecatapi.com/images/2n6.gif", "width": 500, "height": 240 }, { "id": "3k3", "url": "https://cdn2.thecatapi.com/images/3k3.jpg", "width": 320, "height": 256 }, { "id": "3k7", "url": "https://cdn2.thecatapi.com/images/3k7.gif", "width": 350, "height": 263 }, { "id": "akb", "url": "https://cdn2.thecatapi.com/images/akb.jpg", "width": 729, "height": 1097 }, { "id": "b1k", "url": "https://cdn2.thecatapi.com/images/b1k.gif", "width": 500, "height": 313 }, { "id": "bjr", "url": "https://cdn2.thecatapi.com/images/bjr.jpg", "width": 375, "height": 500 }, { "id": "MTYzMzQ3NQ", "url": "https://cdn2.thecatapi.com/images/MTYzMzQ3NQ.jpg", "width": 610, "height": 575 }, { "id": "MTg3MDk3Ng", "url": "https://cdn2.thecatapi.com/images/MTg3MDk3Ng.jpg", "width": 642, "height": 427 }, { "id": "bGUQ04k2E", "url": "https://cdn2.thecatapi.com/images/bGUQ04k2E.jpg", "width": 2592, "height": 1936 }, { "id": "LX9uvE3dl", "url": "https://cdn2.thecatapi.com/images/LX9uvE3dl.jpg", "width": 1919, "height": 1919 }]
  const handleUser = () => {
    dispatch(getUserRequest(name))
  }

  const getCats = () => {
    'https://api.thecatapi.com/v1/images/search?limit=10'
  }

  console.log(userState)

  function CatItem({ cat }: CatType) {
    console.log('url', cat.url)
    return <li>
      <img src={cat.url} width={cat.width} height={cat.height} />
    </li>;
  }

  function CatList(cats: any) {
    return (
      <ul>
        {CAT_MOCK.map((cat: any) => <CatItem key={cat.key} cat={cat} />)}
      </ul>
    );
  }

  return (
    <>
      <Header />
      <body>
        {/* 
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={handleUser} disabled={!name.length}>User Request</button> 
        */}
        <CatList />
      </body>
    </>
  )
}
