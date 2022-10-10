import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import GuestService from "../../BackendService/ReceptionistService/GuestService"

export const RAddGuestComponents = () => {

    const [name,setName]=useState("")
    const [roomNo,setRoomNo]=useState("")
    const [phoneNo,setPhoneNo]=useState("")
    const [email,setEmail]=useState("")
    const [gender,setGender]=useState("")
    const [address,setAddress]=useState("")
    const history = useHistory();
    const {id} = useParams();

    const required = (value) => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              This field is required!
            </div>
          );
        }
      };


    const saveOrUpdateGuest = (e) => {
        e.preventDefault();

        const guest = {name, roomNo, phoneNo,email,gender,address}
        console.log(guest);

        if(id){
            GuestService.updateGuest(id, guest).then((response) => {
                alert("are u sure to make this changes")
                history.push('/RListGuestComponent')
            }).catch(error => {
                console.log(error)
            })

        }else{
            GuestService.createGuest(guest).then((response) =>{
                

                console.log(response.data)
    
                history.push('/RListGuestComponent');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    useEffect(() => {

        GuestService.getGuestById(id).then((response) =>{
            setName(response.data.name)
            setRoomNo(response.data.roomNo)
            setPhoneNo(response.data.phoneNo)
            setEmail(response.data.email)
            setGender(response.data.gender)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">RUpdate Guest</h2>
        }else{
            return <h2 className = "text-center">RAdd Guest</h2>
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
                                        <label className = "form-label"> Guest Name :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter  name"
                                            name = "Guest Name"
                                            className = "form-control"
                                            value = {name}
                                            validations={[required]}
                                            onChange = {(e) => setName(e.target.value)}
                                        >
                                        </input>
                                    </div>
    
                                    
    
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> RoomNo :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter RoomNo"
                                            name = "RoomNo"
                                            className = "form-control"
                                            value = {roomNo}
                                             validations={[required]}
                                            onChange = {(e) => setRoomNo(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> phoneNo :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter phoneNo"
                                            name = "phoneNo"
                                            className = "form-control"
                                            value = {phoneNo}
                                            validations={[required]}
                                            onChange = {(e) => setPhoneNo(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Email :</label>
                                        <input
                                            type = "email"
                                            placeholder = "Enter Email"
                                            name = "Email"
                                            className = "form-control"
                                            value = {email}
                                            validations={[required]}
                                            onChange = {(e) => setEmail(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Gender:</label>
                                        <input
                                            type = "text"
                                            placeholder = "Gender"
                                            name = "Gender"
                                            className = "form-control"
                                            value = {gender}
                                            validations={[required]}
                                            onChange = {(e) => setGender(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Address:</label>
                                        <input
                                            type = "text"
                                            placeholder = "Address"
                                            name = "address"
                                            className = "form-control"
                                            value = {address}
                                            validations={[required]}
                                            onChange = {(e) => setAddress(e.target.value)}
                                        >
                                        </input>
                                    </div>
    
    
                                    <button className = "btn btn-success" onClick = {(e) => saveOrUpdateGuest(e)} >Submit </button>
                                    <Link to="/RListGuestComponent" className="btn btn-danger"> Cancel </Link>
                                </form>
    
                            </div>
                        </div>
                    </div>
    
               </div>
    
            </div>
        )
    }
    
    export default RAddGuestComponents
    