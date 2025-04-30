import AdminMenu from "../Admin/AdminMenu/AdminMenu";
import Dashboard from "../Admin/Dashboard/Dashboard";

function AdminLayout({children}) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
