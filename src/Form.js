import React, { useState, useEffect } from 'react';

const Form = () => {

  const [formInfo, setFormInfo] = useState(
    { title: 'Title', request_offer: null, details: '', date_posted: '', location: '', quantity: 0, deadline: '', completed: null }
  )

  const trackChange = (e) => {
    console.log(e.target)
    // console.log(e.target.value)
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
  }

  return (
    <form>
      <div className="form-group row">
        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
          <input type="text" readOnly="" className="form-control-plaintext" name="title" value='Your Title Here' onChange={trackChange}>
          </input>

        </div>
      </div>
    </form>
  )

}

export default Form;