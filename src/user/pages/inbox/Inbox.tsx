
import './Inbox.css'
import EmptyMessage from "../../../assets/images/empty-mail.648a482b.svg"
import UserSideBar from '../../components/userSidebar/UserSidebar'

const Inbox = () => {
  return (
    <>
        <div className="inboxPage">
            <UserSideBar/>
            <div className="inboxDetails">
                <div className="inbox-header">
                    <h2>Inbox Messages</h2>
                </div>
                <div className="inbox-body">
                    <img src={EmptyMessage} alt="" />
                    <p>You don't have any messages</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Inbox