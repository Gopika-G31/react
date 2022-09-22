import React,{useState} from 'react';
import {Modal,Button,Row,Col,Form,FloatingLabel} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addList} from './state/Action';
import {useNavigate} from 'react-router-dom';

const AddNoteModal=(props)=>{
    const [title,settitle]=useState('')
    const [description,setdescription]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const onTitleChange=(event)=>{
        if(event){settitle(event.target.value)}
        else{settitle('')} 
    }
    const onDescriptionChange=(event)=>{
        if(event){setdescription(event.target.value)}
        else{setdescription('')}
    }
    const onSave=()=>{
       dispatch((addList(title,description)),settitle(''),setdescription(''))
       navigate('/addedNotes')
       props.hide()
    }
    return(
        <>
        <Modal
        {...props}
        show={props.show}
        onHide={props.hide}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="addNoteModal">
            <Modal.Header className='mx-3'>Add Your Notes <span className='material-icons close-btn float-end' onClick={props.hide}>close</span></Modal.Header>
            <Modal.Body className='mx-3 mt-2'>
                <Row className='mt-2'>
                  <Col>
                    <FloatingLabel label='Enter Title'>
                            <Form.Control 
                                size='sm' 
                                className='title'
                                type='text' 
                                value={title} 
                                placeholder='Enter Title Here' 
                                onChange={(e)=>onTitleChange(e)}>
                            </Form.Control>
                        </FloatingLabel>
                  </Col>
                  </Row>
                  <Row className='mt-4'>
                  <Col>
                    <FloatingLabel label='Enter Description'>
                            <Form.Control 
                                as='textarea' 
                                style={{ height: '100px' }} 
                                value={description}
                                className="description"
                                onChange={(e)=>onDescriptionChange(e)}
                                placeholder='Enter Description Here'>
                            </Form.Control>
                        </FloatingLabel>
                  </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button size='sm'  variant='success' className='float-end' disabled={!title || !description} onClick={onSave}>Save</Button>
            </Modal.Footer>
           
        </Modal>

      
        </>
    )
}
export default AddNoteModal