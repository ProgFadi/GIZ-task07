import React, { Fragment } from "react";
import styles from './componat1.module.css'
import pair from './pair.jpg';
import { useState } from "react";

const Conponat1 = ({ nameslist, deleteHandler }) => {
  const cards = nameslist.map(({ name, price }, idx) => (
    <Fragment >
      <div className={styles.pro} key={idx}>
        <div className={styles.delete}>
          <button onClick={(e) => deleteHandler(e, idx)} >X</button>
        </div>
        <img src={pair} alt="pair"
          width={"80px"}
          height={"80px"} />
        {name}
        {price}
        <button className={styles.add_prodect} >add prodect</button>
      </div>
    </Fragment>
  ))
  return (
    <div>{cards}</div>
  )
}
export default Conponat1;