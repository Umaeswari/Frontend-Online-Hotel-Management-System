import React, { Component } from 'react'
import EmployeeService from '../../BackendService/ManagerService/EmployeeService';

class MCreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            emp_Name: '',
            email: '',
            salary: '',
            emp_Address: '',
            occupation:''
        }
        this.changeEmpNameHandler = this.changeEmpNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeEmp_AddressHandler = this.changeEmp_AddressHandler.bind(this);
        this.changeOccupationHandler = this.changeOccupationHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({emp_Name: employee.emp_Name,
                    email: employee.email,
                    salary : employee.salary,
                    emp_Address : employee.emp_Address,
                    occupation : employee.occupation

                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {emp_Name: this.state.emp_Name, email: this.state.email, salary: this.state.salary,emp_Address: this.state.emp_Address,occupation: this.state.occupation};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/MListEmployeeComponent');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/MListEmployeeComponent');
            });
        }
    }
    
    changeEmpNameHandler= (event) => {
        this.setState({emp_Name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeEmp_AddressHandler= (event) => {
        this.setState({emp_Address: event.target.value});
    }
    changeOccupationHandler= (event) => {
        this.setState({occupation: event.target.value});
    }

    cancel(){
        this.props.history.push('/MListEmployeeComponent');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Emp_Name: </label>
                                            <input placeholder="Emp_Name" name="Emp_Name" className="form-control" 
                                                value={this.state.emp_Name} onChange={this.changeEmpNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder=" Email" name=" Email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> salary: </label>
                                            <input placeholder="salary" name="Email Address" className="form-control" 
                                                value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Emp_Address: </label>
                                            <input placeholder="Emp_Address" name="Emp_Address" className="form-control" 
                                                value={this.state.emp_Address} onChange={this.changeEmp_AddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Occupation: </label>
                                            <input placeholder="Occupation" name="Occupation" className="form-control" 
                                                value={this.state.occupation} onChange={this.changeOccupationHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default MCreateEmployeeComponent
