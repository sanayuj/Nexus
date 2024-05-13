import React,{useEffect,useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
//import {userHeader} from '../../../Services/userApi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserDetails } from '../../../Features/setUser'
import { userHeader } from '../../../Services/userApi'


export default function Header() {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [data,setData]=useState({})

    const userLogOut=()=>{
        localStorage.removeItem("jwt")
        dispatch(setUserDetails(""));
        navigate("/login");
    };

    useEffect(()=>{
        userHeader().then((response)=>{
            console.log(response)
            if(response.data.status){
                setData(response.data.user)
                dispatch(setUserDetails(response.data.user));
            }
        });
    },[]);

    const handleLoginClick=()=>{
        navigate("/login");
    };

    const handleSignupClick=()=>{
        navigate("/signup");
    };
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <h2 id='t2'>Nexus</h2>
                    <select name="" id="osfilter">
                        <option value="">Choose OS</option>
                        <option value="">Windows</option>
                        <option value="">Linux</option>
                        <option value="">Mac</option>
                    </select><br /><hr id='hrfilter'/>
                    <input type="text" id='search' placeholder='Search..'/>
                    <button id='searchicon'><i class="bi bi-search" id='search1'></i></button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id='notification'>
                        <i class="bi bi-bell" id='notify'></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" id='notification_list'>
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id='profileicon'>
                        <i class="bi bi-person-circle" id='profile'></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" id='profile_details'>
                            <li><p class="dropdown-item active" >{data?.username}</p></li>
                            <li><p class="dropdown-item" >{data?.email}</p></li>
                            <li><button class="dropdown-item" onClick={()=>userLogOut()}>Sign out</button></li>
                            <li><hr class="dropdown-divider" id='underline'/></li>
                            <Link to='../profile'id='link'><li><a class="dropdown-item" href="#">View Profile</a></li></Link>
                        </ul>
                    </div>
            </div>
        </nav>
    </div>
  )
}
