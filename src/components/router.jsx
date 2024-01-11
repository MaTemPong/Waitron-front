import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ChoiceRole from './pages/ChoiceRole';

//admin 페이지
import AdminHeader from './organisms/AdminHeader';
import WaitManagement from './pages/WaitManagement'
import PersonManagement from './pages/PersonManagement';
import GroupManagement from './pages/GroupManagement';

//user페이지
import UserHeader from './organisms/UserHeader';
import JoinRequestFromUser from './pages/JoinRequestFromUser'
import NotificationList from './pages/NotificationList';

const url = window.location.pathname;
console.log(url)
const Router = () => {
  return(
    <BrowserRouter>
      {url.includes("/admin/") ? <AdminHeader/> : <></>} 
      {url.includes("/user/") ? <UserHeader/> : <></>} 
      <Routes>
        <Route path="/" element={<Login />} />
			  <Route path="/register" element={<Register/>} />
			  <Route path="/choiceRole" element={<ChoiceRole/>} />

        <Route path="/admin/waitList" element={<WaitManagement />} />
        <Route path="/admin/waitList" element={<WaitManagement />} />
			  <Route path="/admin/personList" element={<PersonManagement />} />
			  <Route path="/admin/groupList" element={<GroupManagement />} />

        <Route path="/user/joinRequest" element={<JoinRequestFromUser />}/>
        <Route path="/user/notificationList" element={<NotificationList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;