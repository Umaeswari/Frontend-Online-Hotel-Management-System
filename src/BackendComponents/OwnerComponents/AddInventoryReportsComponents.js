import React, {useState, useEffect} from 'react'
import InventoryReportsService from '../../BackendService/OwnerService/InventoryReportsService';
import {Link, useHistory, useParams } from 'react-router-dom';

export const AddInventoryReportsComponents = () => {

    const [maintainanceCost,setMaintainanceCost]=useState("")
    const [employeesalary,setEmployeesalary]=useState("")
    const [totalincome,setTotalincome]=useState("")
    const [totalProfit,setTotalProfit]=useState("")
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateInventoryReports = (e) => {
        e.preventDefault();

        const inventoryreports = {maintainanceCost, employeesalary, totalincome,totalProfit}
        console.log(inventoryreports);

        if(id){
            InventoryReportsService.updateInventoryReports(id, inventoryreports).then((response) => {
                history.push('/ListInventoryReportsComponent')
            }).catch(error => {
                console.log(error)
            })

        }else{
            InventoryReportsService.createInventoryReports(inventoryreports).then((response) =>{

                console.log(response.data)
    
                history.push('/ListInventoryReportsComponent');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    useEffect(() => {

        InventoryReportsService.getInventoryReportsById(id).then((response) =>{
            setMaintainanceCost(response.data.maintainanceCost)
            setEmployeesalary(response.data.employeesalary)
            setTotalincome(response.data.totalincome)
            setTotalProfit(response.data.totalProfit)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update InventoryReports</h2>
        }else{
            return <h2 className = "text-center">Add InventoryReports</h2>
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
                                        <label className = "form-label"> MaintainanceCost :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter  MaintainanceCost"
                                            name = "maintainanceCost"
                                            className = "form-control"
                                            value = {maintainanceCost}
                                            onChange = {(e) => setMaintainanceCost(e.target.value)}
                                        >
                                        </input>
                                    </div>
    
                                    
    
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Employeesalary :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter salary"
                                            name = "Employeesalary"
                                            className = "form-control"
                                            value = {employeesalary}
                                            onChange = {(e) => setEmployeesalary(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Totalincome :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter Totalincome"
                                            name = "Totalincome"
                                            className = "form-control"
                                            value = {totalincome}
                                            onChange = {(e) => setTotalincome(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> TotalProfit :</label>
                                        <input
                                            type = "number"
                                            placeholder = "Enter TotalProfit"
                                            name = "TotalProfit"
                                            className = "form-control"
                                            value = {totalProfit}
                                            onChange = {(e) => setTotalProfit(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    
    
    
                                    <button className = "btn btn-success" onClick = {(e) => saveOrUpdateInventoryReports(e)} >Submit </button>
                                    <Link to="/ListInventoryReportsComponent" className="btn btn-danger"> Cancel </Link>
                                </form>
    
                            </div>
                        </div>
                    </div>
    
               </div>
    
            </div>
        )
    }
    
    export default AddInventoryReportsComponents