import React,{useState
} from'react';
import {Card,Container,Row,Col,Form,InputGroup} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux';
import { DelList } from './state/Action';
import AddNoteModal from './AddNoteModal';
import {orderBy} from 'lodash'
const AddedNotes=()=>{
     const [showModal,setshowModal]=useState()
   const openModal=()=>{setshowModal(true);}
   const hideModal=()=>{setshowModal(false)}
    const getUserData=useSelector((state)=>state.ListReducer)
    const dispatch=useDispatch()
    const [search,setsearch]=useState(null)
    const [sort,setsort]=useState(false)
    const onSearch=(e)=>{
        setsearch(e.target.value)
    }
    const onSort=()=>{
        setsort(o=>!o)
        
    }
    const sortedList=sort?orderBy(getUserData.List,[i=>i.title.toLowerCase()],['desc']):orderBy(getUserData.List,[i=>i.title.toLowerCase()],['asc']);
    const searchResult= !search ?sortedList:sortedList.filter((i)=>i.title.toLowerCase().includes(search.toLowerCase()))
    return(
        <>
        <AddNoteModal show={showModal} hide={hideModal} />
        <Container fluid className='addedNotes-container'>
            <Row className='p-3'>
            <Col lg={3}>
           <div className='float-end'>
                <span className='material-icons add-icon px-4' onClick={openModal} title='Add your Notes' >add_circle</span>
                <div className='count'>{searchResult.length}</div>
           </div>
            </Col>
            <Col lg={6}>
                <InputGroup>
                    <InputGroup.Text>
                     <span className='material-icons search'>search</span>
                    </InputGroup.Text>
                    <Form.Control 
                    type='search'
                    value={search}
                    onChange={onSearch}
                    placeholder='Search By Title'>
                    </Form.Control>
                </InputGroup>
            </Col>
            <Col lg={3}>
                <span className='material-icons sort-icon' onClick={onSort} title='Sort Notes By Title'>swap_vert</span>
                <span className='sort-icon-text mt-2' title='Sort Notes By Title'>{!sort?"Aa-Zz":"Zz-aA"}</span>
            </Col>
            </Row>
            <Row className='p-2'>
        {searchResult.map((data)=>{
        return(
            <>
            <Col lg={3} className='p-2'>
            <Card className='addedNotes-cards'>
                <Card.Header className='text-truncate p-2'>
                        <span className='material-icons float-end close-btn mt-n1' onClick={()=>dispatch(DelList(data.id))}>close</span>
                    {data.title} 
                </Card.Header>
                <Card.Body>
                   <div className='content mt-n1'>
                   {data.description}
                   </div>
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