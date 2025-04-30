// Import react
import React from "react";
// Import the Routes and Route components from react-router
import { Routes, Route } from "react-router";
// Import the page components
import Home from "../../markup/pages/Home";
import Login from "../../markup/pages/Login";
import AddEmployee from "../../markup/pages/admin/AddEmployee";
import Unauthorized from "../../markup/pages/Unauthorized";
import About from "../../markup/pages/About";
import Services from "../../markup/pages/Services";
import Contact from "../../markup/pages/Contact";
// Import the Orders and Customers components
import Orders from "../../markup/pages/admin/Orders";
import Customers from "../../markup/pages/admin/Customers";
// Import the Employees component
import Employees from "../../markup/pages/admin/Employees";

// Import the Header component
import Header from "./../../markup/components/General/Header/Header";
// Import the Footer component
import Footer from "./../../markup/components/General/Footer/Footer";

// Import the PrivateAuthRoute component
import PrivateAuthRoute from "./../../markup/components/Auth/PrivateAuthRoute";
import AdminLayout from "../../markup/components/AdminLayout/AdminLayout";
import Dashboard from "../../markup/components/Admin/Dashboard/Dashboard";

function PageRouter() {
  return (
    <>
      <Header />
      <Routes>
        {/* KEY FOR ROLES
        - Adm: 3  - Manag: 2  - Employee: 1 
        */}
        {/* 
          (/admin/customers) - managers (2) and admins(3)
          (/admin/orders) - Can be accessed by all employees
          (/admin/add-employee) - admins only 
            
        */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* // Add the Admin Dashboard Route  */}
        <Route path="/admin" element={<PrivateAuthRoute roles={[3]}><AdminLayout><Dashboard /></AdminLayout></PrivateAuthRoute>} /> 
        {/* // Add the Orders Route  */}
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <AdminLayout><Orders /></AdminLayout>
            </PrivateAuthRoute>
          }
        />

        {/* // Add the Customers Route  */}
        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AdminLayout><Customers /></AdminLayout>
            </PrivateAuthRoute>
          }
        />

        {/* // Add the Employees Route  */}
        <Route path="/admin/employees" element={<AdminLayout><Employees /></AdminLayout>} />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AdminLayout>
                <AddEmployee />
              </AdminLayout>
            </PrivateAuthRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default PageRouter;
