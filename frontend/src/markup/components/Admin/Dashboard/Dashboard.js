import React from "react";
import AdminMenu from "../AdminMenu/AdminMenu";

function Dashboard() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row p-4">
            <div className="col-md-12 admin-right-side">
            <h1>Dashboard</h1>
            <p>Welcome to the Admin Dashboard!</p>
            {/* Add more dashboard content here */}
          </div>
        </div>
      </div>    
  </div>
  );
}

export default Dashboard;
