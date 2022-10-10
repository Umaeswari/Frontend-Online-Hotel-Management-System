import {Link, useHistory, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import RoomService from '../../BackendService/ReceptionistService/RoomService'


export const RAddRoomComponents = () => {

    const [roomNo,setRoomNo]=useState("")
    const [roomType,setRoomType]=useState("")
    const [isOccupied,setIsOccupied]=useState("")
    const [roomCost,setRoomCost]=useState("")
    const [checkIn,setCheckIn]=useState("")
    const [checkOut,setCheckOut]=useState("")
    const history = useHistory();
    const {id} = useParams();


    const saveOrUpdateRoom = (e) => {
        e.preventDefault();

        const room = {roomNo, roomType, isOccupied,roomCost,checkIn,checkOut}
        console.log(room);

        if(id){
            RoomService.updateRoombyId(id, room).then((response) => {
                history.push('/RListRoomComponent')
            }).catch(error => {
                console.log(error)
            })

        }else{
            RoomService.createRoom(room).then((response) =>{

                console.log(response.data)
    
                history.push('/RListRoomComponent');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    useEffect(() => {

        RoomService.getRoomById(id).then((response) =>{
            setRoomNo(response.data.roomNo)
            setRoomType(response.data.roomType)
            setIsOccupied(response.data.isOccupied)
            setRoomCost(response.data.roomCost)
            setCheckIn(response.data.checkIn)
            setCheckOut(response.data.checkOut)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">RUpdate Room</h2>
        }else{
            return <h2 className = "text-center">RAdd Room</h2>
        }
    }

    return (
        <div>
               <br /><br />
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           {
                               title()
                           }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Room No :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter No"
                                            name = " Room No"
                                            className = "form-control"
                                            value = {roomNo}
                                            onChange = {(e) => setRoomNo(e.target.value)}
                                        >
                                        </input>
                                    </div>
    
                                    
    
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Room Type :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter Room Type"
                                            name = "Room Type"
                                            className = "form-control"
                                            value = {roomType}
                                            onChange = {(e) => setRoomType(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> IsOccupied :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter IsOccupied"
                                            name = "IsOccupied"
                                            className = "form-control"
                                            value = {isOccupied}
                                            onChange = {(e) => setIsOccupied(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> RoomCost :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter RoomCost"
                                            name = "RoomCost"
                                            className = "form-control"
                                            value = {roomCost}
                                            onChange = {(e) => setRoomCost(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> checkIn:</label>
                                        <input
                                            type = "Date"
                                            placeholder = "checkIn"
                                            name = "CheckIn"
                                            className = "form-control"
                                            value = {checkIn}
                                            onChange = {(e) => setCheckIn(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> checkOut:</label>
                                        <input
                                            type = "Date"
                                            placeholder = "checkOut"
                                            name = "CheckOut"
                                            className = "form-control"
                                            value = {checkOut}
                                            onChange = {(e) => setCheckOut(e.target.value)}
                                        >
                                        </input>
                                    </div>
    
    
                                    <button className = "btn btn-success" onClick = {(e) => saveOrUpdateRoom(e)} >Submit </button>
                                    <Link to="/RListRoomComponent" className="btn btn-danger"> Cancel </Link>
                                </form>
    
                            </div>
                        </div>
                    </div>
    
               </div>
    
            </div>
        )
    }
    
    export default RAddRoomComponents
    