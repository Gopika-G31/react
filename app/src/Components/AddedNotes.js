import React,{useState
} from'react';
import {Card,Container,Row,Col,Form,InputGroup,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux';
import { DelList } from './state/Action';
import AddNoteModal from './AddNoteModal';
const AddedNotes=()=>{
     const [showModal,setshowModal]=useState()
   const openModal=()=>{setshowModal(true);}
   const hideModal=()=>{setshowModal(false)}
    const getUserData=useSelector((state)=>state.ListReducer)
    const dispatch=useDispatch()
    const [search,setsearch]=useState(null)
    const onSearch=(e)=>{
        setsearch(e.target.value)
    }
    const searchResult= !search ? getUserData.List:getUserData.List.filter((i)=>i.title.toLowerCase().includes(search.toLowerCase()))
    console.log(searchResult)
    return(
       <>
        <AddNoteModal show={showModal} hide={hideModal} />
        <Container fluid className='addedNotes-container'>
           <Row className='p-3'>
            <Col lg={10}>
                <InputGroup>
                    <InputGroup.Text>
                     <span className='material-icons'>search</span>
                    </InputGroup.Text>
                    <Form.Control 
                    type='search'
                    value={search}
                    onChange={onSearch}
                    placeholder='Search By Title'>
                </Form.Control>
                </InputGroup>
            </Col>
            <Col lg={2}>
                <Button size='sm' onClick={openModal}>
                     <span class='material-icons'>add</span>
                </Button>
            </Col>
           </Row>
        <Row className='p-2'>
        {searchResult.map((data)=>{
        return(
            <>
            <Col lg={3} className='p-2'>
            <Card className='addedNotes-cards'>
                <Card.Header>
                    <div className='delBtn' onClick={()=>dispatch(DelList(data.id))}><span className='material-icons float-end'>delete_sweep</span></div>
                    {data.title}
                </Card.Header>
                <Card.Body>
                    {data.description}
                </Card.Body>
            </Card>
            </Col>
            </>
        )
       })}
        </Row>
        </Container>
     
       </>
    )
}
export default AddedNotes;