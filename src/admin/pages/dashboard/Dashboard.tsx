import AdminSidebar from '../../components/adminSidebar/AdminSidebar'
import Topnav from '../../components/topnav/Topnav'
import './Dashboard.css'
const Dashboard = () => {
    return (
     <>
      <div className="adminDash flex w-[100%]">
          <AdminSidebar/>
          <div className="dashboard-main w-[100%] bg-[whitesmoke]">
            <Topnav/>
          </div>
      </div>
     </>
    )
  }
  
  export default Dashboard