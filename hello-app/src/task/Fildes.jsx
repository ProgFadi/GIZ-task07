import React, { Fragment } from "react";
import styles from './fildes.module.css'
import pair from './pair.jpg';
import Conponat1 from './Conponat1'
import Search from './Search';
import { useState } from "react";
const Fildes = () => {
  const [filter, setfilter] = useState("")
  const [name,setname]= useState('')
  const [price,setprice]= useState('')
  const [state, setState] = useState([
    {
      name: "shoes",
      price: "5$"

    },
    {
      name: "kkk",
      price: "10$"

    },
    {
      name: "jjj",
      price: "15$"

    }
  ]);
  const [list, setList] = React.useState(state);
  const handleSubmit = event => {
    if (name && price) {
      setList(list.concat(name,price));
    }
    setname('');
    setprice('');
    event.preventDefault();
    console.log(name,price)
  };

  const searchPrice = (name) => {
    setfilter(name);
  }
  const priceHandeler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter))
    }
    return state;
  }
  
  const deleteHandler = (e,clickeidx)=>{
     const deleteProdect = state.filter((el,idx) => idx !== clickeidx);
     setState(deleteProdect)
  }
  return (
    <Fragment >
      <div className={styles.cardmap}>
        <div>
          <Search searchPrice={searchPrice} />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="name"  
          value={name} 
          onChange={(e)=> setname(e.target.value)}/>

          <input type="text" 
          placeholder="price" 
          value={price} 
          onChange={(e)=> setprice(e.target.value)}/>
          <button >add</button>
        </form>
      </div>
      <div>
        <Conponat1 nameslist={priceHandeler()} deleteHandler={deleteHandler}/>
      </div>
    </Fragment>
  )
}
export default Fildes;