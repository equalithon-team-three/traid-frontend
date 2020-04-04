import React from 'react';

const FormModal = ({ showModal, closeModal, formOpen }) => {
<<<<<<< HEAD

  const [formInfo, setFormInfo] = useState(
    { title: '', request_offer: null, details: '', date_posted: '', location: '', quantity: 0, deadline: '', completed: null }
  )

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormInfo({...formInfo, [e.target.name]: e.target.value})
  }

  

  const showHideClassName = formOpen ? 'modal display-block' : 'modal display-none'
=======
  // const [ showForm, setShowForm ] = useState(false);

  const showHideClassName = formOpen
    ? 'modal display-block'
    : 'modal display-none';
>>>>>>> aab33c5d51c0dc56669ccf38cbff268657aa3498

  return (
    <div className={showHideClassName}>
<<<<<<< HEAD
      <div className='class="modal-dialog" role="document"'>
        <div className='modal-main'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className="modal-title">Make a Request</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}><span aria-hidden="true">&times;</span></button>
              
            </div>
          </div>
          <div className="modal-body">
              <p>Modal body text goes here.</p>
              <form>
                <input 
                  type='text'
                  name='name'
                  value={formInfo.name}
                  onChange={handleChange}>
                </input>
              </form>
            </div>
=======
      <div className="modal-dialog" role="document">
        <div className="modal-main">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Make a Request</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
>>>>>>> aab33c5d51c0dc56669ccf38cbff268657aa3498
        </div>
      </div>
    </div>
  );
};

export default FormModal;
