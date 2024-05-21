import React, { useEffect,useState } from 'react'
import './LinuxApps.css'
import { fetchAllLinuxApps } from '../../../Services/adminApi'

export default function LinuxApps() {
const [linuxApp,setLinuxApp]=useState([])
const [filteredApps, setFilteredApps] = useState([]);
const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
  filterGames();
}, [ searchQuery, linuxApp]);

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};


const filterGames = () => {
  let filtered = linuxApp;


  if (searchQuery) {
    filtered = filtered.filter((app) =>
      app.appName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  console.log("Filtered Apps:", filtered);
  setFilteredApps(filtered);
};
  useEffect(()=>{
    fetchAllLinuxApps().then((value)=>{
      if(value?.data?.status){
        setLinuxApp(value?.data?.data)
      }
    },[])
  },[])
  return (
    <div>
      <div id='div2'>
      <div id='anav1'>
                    <input type="text" id='hsearch' onChange={handleSearchChange} placeholder='Search..'/>
                    <button id='hsearchicon'><i class="bi bi-search" id='hsearch1'></i></button>
            </div>
            <h2 id='th2'>Apps for Linux</h2>
            <table class="table table-striped table-hover" id='tlinux'>
                <thead>
                    <tr>
                    <th scope="col">SL.No</th>
                    <th scope="col">Icon</th>
                    <th scope="col">App Name</th>
                    <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                {filteredApps.length>0?(
                  filteredApps.map((value,index)=>(
                    <tr>
                    <th scope="row">{index+1}</th>
                    <td><img id='timg' src={`http://localhost:4000/img/${value.appIcon}`} alt="App icon" /></td>
                    <td>{value?.appName}</td>
                    <td>{value?.Category}</td>
                    </tr>
                  ))
                  
                ):(<p>Empty</p>)}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
