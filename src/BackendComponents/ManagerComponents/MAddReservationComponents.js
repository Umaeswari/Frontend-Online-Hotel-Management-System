import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import ReservationService from "../../BackendService/ManagerService/ReservationService"

export const MAddReservationComponents = () => {

    const [roomNo,setRoomNo]=useState("")
    const [children,setChildren]=useState("")
    const [adults,setAdults]=useState("")
    const [checkindate,setCheckindate]=useState("")
    const [checkoutdate,setCheckoutdate]=useState("")
    const history = useHistory();
    const {id} = useParams();

    
    const saveOrUpdateReservation = (e) => {
        e.preventDefault();

        const reservation = {roomNo, children, adults,checkindate,checkoutdate}
        console.log(reservation);

        if(id){
            ReservationService.updateReservationbyId(id,reservation ).then((response) => {
                history.push('/MListReservationComponent')
            }).catch(error => {
                console.log(error)
            })

        }else{
            ReservationService.createRervation(reservation).then((response) =>{

                console.log(response.data)
    
                history.push('/MListReservationComponent');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    useEffect(() => {

        ReservationService.getReservationById(id).then((response) =>{
            setRoomNo(response.data.roomNo)
            setChildren(response.data.children)
            setAdults(response.data.adults)
            setCheckindate(response.data.checkindate)
            setCheckoutdate(response.data.checkoutdate)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">MUpdate Reservation</h2>
        }else{
            return <h2 className = "text-center">MAdd Reservation</h2>
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
                                        <label className = "form-label"> RoomNo :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter number"
                                            name = "RoomNo"
                                            className = "form-control"
                                            value = {roomNo}
                                            onChange = {(e) => setRoomNo(e.target.value)}
                                        >
                                        </input>
                                    </div>
    
                                    
    
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Children :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter Chiidren"
                                            name = "Children"
                                            className = "form-control"
                                            value = {children}
                                            onChange = {(e) => setChildren(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Adults :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter Adults"
                                            name = "Adults"
                                            className = "form-control"
                                            value = {adults}
                                            onChange = {(e) => setAdults(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Checkindate :</label>
                                        <input
                                            type = "date"
                                            placeholder = "Enter salary"
                                            name = "Checkindate"
                                            className = "form-control"
                                            value = {checkindate}
                                            onChange = {(e) => setCheckindate(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Checkoutdate:</label>
                                        <input
                                            type = "date"
                                            placeholder = "Checkoutdate"
                                            name = "Checkoutdate"
                                            className = "form-control"
                                            value = {checkoutdate}
                                            onChange = {(e) => setCheckoutdate(e.target.value)}
                                        >
                                        </input>
                                    </div>
    
    
                                    <button className = "btn btn-success" onClick = {(e) => saveOrUpdateReservation(e)} >Submit </button>
                                    <Link to="/MListReservationComponent" className="btn btn-danger"> Cancel </Link>
                                </form>
    
                            </div>
                        </div>
                    </div>
    
               </div>
    
            </div>
        )
    }
    
    export default MAddReservationComponents
    