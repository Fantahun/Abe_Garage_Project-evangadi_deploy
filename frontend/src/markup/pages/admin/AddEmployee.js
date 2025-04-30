import React from 'react';
// Import the AddEmployeeForm component 
import AddEmployeeForm from '../../components/Admin/AddEmployeeForm/AddEmployeeForm';
// Import the AdminMenu component 
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';

function AddEmployee(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        
          <div className="col-md-12 admin-right-side">
            <AddEmployeeForm />
          </div>
       
      </div>
    </div>
  );
}

export default AddEmployee;