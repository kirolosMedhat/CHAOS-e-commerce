import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import img from "../../images/image.png"
import "./notlogged.css"
const NotLoged = () => {
  return (
    <Fragment>
      <div className='notlogged'>
        <img src={img} alt=''/>
        <div className='textlog'>
        <h1>Please Log in First!</h1>
        <Link className="golog"
        to={"/LogIn"}>
        <h6>Log In Now &rarr;</h6>
        </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default NotLoged
