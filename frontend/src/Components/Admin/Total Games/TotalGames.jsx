import React, { useEffect,useState } from 'react'
import './TotalGames.css'
import { fetchAllGames } from '../../../Services/adminApi'

export default function TotalGames() {
  const [game,setGame]=useState([])
  const [filteredApps, setFilteredApps] = useState([]);
  const [selectedOS, setSelectedOS] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(()=>{
fetchAllGames().then((value)=>{
  if(value?.data?.status){
    setGame(value?.data?.data)
  }
  
})
  },[])

  useEffect(() => {
    filterGames();
  }, [selectedOS, searchQuery, game]);

  const handleOSChange = (e) => {
    setSelectedOS(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filterGames = () => {
    let filtered = game;

    if (selectedOS) {
      filtered = filtered.filter((apps) => apps.OS === selectedOS);
    }

    if (searchQuery) {
      filtered = filtered.filter((app) =>
        app.appName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    console.log("Filtered Apps:", filtered);
    setFilteredApps(filtered);
  };

  return (
    <div>
      <div id='div2'>
      <div id='anav'>
            <select name="" id="hosfilter" onChange={handleOSChange}>
                        <option value="">Choose OS</option>
                        <option value="Windows">Windows</option>
                        <option value="Linux">Linux</option>
                        <option value="MAC">Mac</option>
                    </select><br /><hr id='hhrfilter'/>
                    <input type="text" id='hsearch' onChange={handleSearchChange} placeholder='Search..'/>
                    <button id='hsearchicon'><i class="bi bi-search" id='hsearch1'></i></button>
            </div>
            <h2 id='th2'>Gaming Apps</h2>
            <table class="table table-striped table-hover" id='tgame'>
                <thead>
                    <tr>
                    <th scope="col">SL.No</th>
                    <th scope="col">Icon</th>
                    <th scope="col">App Name</th>
                    <th scope="col">OS</th>
                    </tr>
                </thead>
                <tbody>
                {filteredApps.length>0?(
                  (filteredApps?.map((value,index)=>(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td><img id='timg' src={`http://localhost:4000/img/${value.appIcon}`} alt="App icon" /></td>
                    <td>{value?.appName}</td>
                    <td>{value?.OS}</td>
                    </tr>
                  )))
                 ):(<p>No games found</p>)}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
