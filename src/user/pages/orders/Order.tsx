import './Order.css'
// import EmptyMessage from "../../../assets/images/empty-mail.648a482b.svg"
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import UserSideBar from "../../components/userSidebar/UserSidebar";
const Order = () => {

  const header = (
    <div
      className="flex-1 "
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span className="text-xl text-900 font-bold">List of Users</span>
      <span className="p-input-icon-left" style={{display:"flex", alignItems:"center", justifyItems:"center"}}>
        <InputText
          placeholder="Keyword Search"
          style={{ padding: "10px"}}
        />
      </span>
    </div>
  );
  return (
    <>
    <div className="orderPage">
      <UserSideBar/>   
      <div className="order-details">
        <div className="orderHeader">
          <h2>Orders</h2>
        </div>
        <div className="card" style={{ marginTop: "40px" }}>
          <DataTable 
            lazy 
            header={header}>
             <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column field="id" header="ID" />
            <Column field="name" header="Name" />
            <Column field="date" header="Date" />
            <Column field="status" header="Status" />
            <Column field="action" header="Action" />
          </DataTable>

        </div>
        {/* <div className="orderBody">
          <img src={EmptyMessage} alt="" />
          <p>You don't have any orders</p>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Order