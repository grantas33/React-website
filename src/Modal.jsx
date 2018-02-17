import React from 'react';

export default (props) => {

   return <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
         aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <img src={props.modalImg} className='modal-img' alt={''}/>
            </div>
        </div>
    </div>
}