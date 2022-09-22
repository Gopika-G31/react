import React ,{useState}from 'react';
import AddNoteModal from './AddNoteModal';
import {Container,Button,Card,Row,Col} from 'react-bootstrap';


const Home=()=>{

   const [showModal,setshowModal]=useState()
   const openModal=()=>{setshowModal(true);}
   const hideModal=()=>{setshowModal(false)}
   
    return(
        <>
        <AddNoteModal show={showModal} hide={hideModal} />
        <Container fluid className='bg-white container-wrapper'>
            <Card className='w-25 h-50 top-50 start-50 translate-middle card-wrapper'>
                <Card.Body className='mt-5'>
                    <Row className='d-inline text-center'>
                         <Col> <span className='title'>Notes</span></Col>
                         <Col><p className='sub-title'>Create your own notes for free!</p></Col>
                         <Col><Button className='start-btn' size='sm' onClick={openModal}>Let's Start</Button> </Col>
                    </Row>
                 </Card.Body>
            </Card>
        </Container>
        </>
    )
}
export default Home;