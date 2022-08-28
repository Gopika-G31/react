import React ,{useState}from 'react';
import AddNoteModal from './AddNoteModal';
import {Container,Button} from 'react-bootstrap'
const Home=()=>{

   const [showModal,setshowModal]=useState()
   const openModal=()=>{setshowModal(true);}
   const hideModal=()=>{setshowModal(false)}
   
    return(
        <>
      
        <AddNoteModal show={showModal} hide={hideModal} />
        <Container fluid className='d-flex align-items-center justify-content-center wrapper'>
          <Button size='sm' onClick={openModal}>To Do List App</Button>
        </Container>

        </>
    )
}
export default Home;