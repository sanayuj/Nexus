import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../../../Features/setUser';
import { getAdminFeedComment, userHeader } from '../../../Services/userApi';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [feedComment, setFeedComment] = useState({});

  const adminFeedNotification = (userId) => {
    if (userId) {
      console.log(userId, "&&&**&******&&**&&&&&");
      getAdminFeedComment(userId).then((value) => {
        console.log(value?.data?.data, "++++++=====+++++");
        if(value?.data?.status){
        setFeedComment(value?.data?.data)
        }
      });
    }
  };

  const userLogOut = () => {
    localStorage.removeItem("jwt");
    dispatch(setUserDetails(""));
    navigate("/login");
  };

  const userIdentity = useSelector((state) => state?.user?.value?._id);

  useEffect(() => {
    userHeader().then((response) => {
      if (response.data.status) {
        setData(response.data.user);
        dispatch(setUserDetails(response?.data?.user));
      }
    });
    adminFeedNotification(userIdentity);
  }, [dispatch, userIdentity]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h2 id='t2'>Nexus</h2>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id='notification'>
                  <i className="bi bi-bell" id='notify'></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" id='notification_list'>
               {feedComment.length>0?(feedComment.map((value,index)=>(
                <li key={index}><p className="dropdown-item" ><p>Reply of "{value?.feedId?.feedbackComment}"</p>{value?.message}</p></li>
               ))):(
                <li><p >No Notification</p></li>
               )}
                 
                 
                </ul>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id='profileicon'>
              <i className="bi bi-person-circle" id='profile'></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" id='profile_details'>
              <li><p className="dropdown-item active">{data?.username}</p></li>
              <li><p className="dropdown-item">{data?.email}</p></li>
              <li><button className="dropdown-item" onClick={() => userLogOut()}>Sign out</button></li>
              <li><hr className="dropdown-divider" id='underline'/></li>
              <Link to='../profile' id='link'><li><p className="dropdown-item" href="#">View Profile</p></li></Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
