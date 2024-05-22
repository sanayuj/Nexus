import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../../../Features/setUser";
import { getAdminFeedComment, getNotification, userHeader } from "../../../Services/userApi";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [feedComment, setFeedComment] = useState([]);
  const [notification, setNotification] = useState([]);

  const adminFeedNotification = async (userId) => {
    if (userId) {
      try {
        const value = await getAdminFeedComment(userId);
        if (value?.data?.status) {
          setFeedComment(value?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching admin feed comments:", error);
      }
    }
  };

  const getAdminNotification = async (userIdentity) => {
    try {
      const value = await getNotification(userIdentity);
      if (value?.data?.status) {
        setNotification(value?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const userLogOut = () => {
    localStorage.removeItem("jwt");
    dispatch(setUserDetails(""));
    navigate("/login");
  };

  const userIdentity = useSelector((state) => state?.user?.value?._id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userHeader();
        if (response.data.status) {
          setData(response.data.user);
          dispatch(setUserDetails(response?.data?.user));
        }
        await adminFeedNotification(userIdentity);
        await getAdminNotification(userIdentity);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
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
          <h2 id="t2">Nexus</h2>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  onClick={() => adminFeedNotification(userIdentity)}
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="notification"
                >
                  <i className="bi bi-bell" id="notify"></i>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  id="notification_list"
                >
                  <h5 className="notificationHead">Notifications</h5>
                  {feedComment.length > 0 || notification.length > 0 ? (
                    <>
                      {feedComment.map((value, index) => (
                        <li className="dropLi" key={index}>
                          <p className="dropdown-item">
                            {!value?.viewed && (
                              <span className="new-label">New</span>
                            )}
                            <p>Reply of "{value?.feedId?.feedbackComment}"</p>
                            {value?.message}
                          </p>
                        </li>
                      ))}
                      {notification.map((value, index) => (
                        <li className="dropLi" key={index}>
                          <p className="dropdown-item">
                            {/* {!value?.viewed && (
                              <span className="new-label">New</span>
                            )} */}
                            {value?.Message}
                          </p>
                        </li>
                      ))}
                    </>
                  ) : (
                    <li>
                      <p>No Notification</p>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="profileicon"
            >
              <i className="bi bi-person-circle" id="profile"></i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              id="profile_details"
            >
              <li>
                <p className="dropdown-item active">{data?.username}</p>
              </li>
              <li>
                <p className="dropdown-item">{data?.email}</p>
              </li>
              <li>
                <button className="dropdown-item" onClick={userLogOut}>
                  Sign out
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" id="underline" />
              </li>
              <Link to="../profile" id="link">
                <li>
                  <p className="dropdown-item">View Profile</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
