import React, { useState } from 'react';

const FormModal = ({ closeModal, formOpen }) => {
  const initialState = {
    title: '',
    request_offer: null,
    details: '',
    // date_posted: '',
    location: '',
    quantity: 0,
    // between items and services
    deadline: '',
    completed: false,
  };

  const [state, setState] = useState(initialState);

  const clearForm = () => {
    setState(initialState);
  };

  const handleChange = event =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();

    console.log({ state });
    closeModal();
    clearForm();
  };

  const showHideClassName = formOpen ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName} onClick={closeModal}>
      <div className='class="modal-dialog" role="document"'>
        <div className="modal-main" onClick={event => event.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Aid Request/Offer</h5>

              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label className="input-containee">Title</label>

                <input
                  className="input-containee"
                  type="text"
                  name="title"
                  value={state.title}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="input-container">
                <label className="input-containee">Is this a request or an offer?</label>

                <select 
                className="input-containee"
                onChange={handleChange}
                >
                  <option>Request</option>
                  <option>Offer</option>
                </select>
              </div>

              <div className="input-container">
                <label className="input-containee">Content</label>

                <textarea
                  className="input-containee"
                  type="text"
                  name="details"
                  value={state.details}
                  required
                  onChange={handleChange}
                />
              </div>

              <button
                className="btn btn-success btn-lg btn modal-button"
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default FormModal;

