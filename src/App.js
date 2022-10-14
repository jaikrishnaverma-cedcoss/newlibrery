import { useEffect, useRef, useState } from 'react';
import './App.css';
import Nav from './component/Nav';
function App() {
  const refinput = useRef()
  const [state, setState] = useState({
    items: [],
    DataisLoaded: false,
    currentBook: 0
  });
  useEffect(() => {
    let rl = 'https://openlibrary.org/search.json?q=fantastic+mr+fox&mode=ebooks&has_fulltext=true';
    fetch(rl)
      .then((res) => res.json())
      .then((json) => {
        setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
    , [])
  const fetchData = (e) => {
    e.preventDefault() 
    let rl = 'https://openlibrary.org/search.json?q='+e.target.city.value+'&mode=ebooks&has_fulltext=true';
    fetch(rl)
      .then((res) => res.json())
      .then((json) => {
        setState({
          items: json,
          DataisLoaded: true
        });
      })
  }




  const clicked=(data)=>{
    if(data.isbn===undefined)
    return "";
    let urls='https://openlibrary.org/api/books?bibkeys=ISBN:'+data.isbn[0]+'&jscmd=details&format=json';
    fetch(urls)
    .then((res)=>res.json())
    .then((json)=>{
      let x='ISBN:'+data.isbn[0];
      window.location.href=json[x].info_url
      console.log(json[x])
    })
}

const { DataisLoaded, items } = state;
if (!DataisLoaded) return <div className='loader'>
   <img src='Fidget-spinner.gif'></img>
    <h1 className='lfont'> Pleses wait some time.... </h1> </div>;
   
  return (
   <>
   <Nav clicked={clicked} datas={state.items} fetchData={fetchData} refinput={refinput}/>

   </>
  );
}

export default App;
