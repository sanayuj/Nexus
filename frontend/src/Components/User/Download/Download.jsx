import React, { useEffect,useState} from 'react'
import imageOne from "./12.jpg"
import './Download.css'
import { useParams } from 'react-router-dom'
import { appAddtoProfile, getSelectedAppsDetails } from '../../../Services/userApi'
import { useSelector } from 'react-redux'

export default function Download() {
    const appId=useParams().appId
    const [selectedData,setSelectedData]=useState([])
    const userId = useSelector((state) => state?.user?.value?._id);

    const DownloadSelectedApp = (apkFile, appId) => {
        appAddtoProfile(userId, appId).then((value) => {
          console.log(value, "Data Downloaded");
        });
        const fileUrl = `http://localhost:4000/img/${apkFile}`;
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    useEffect(()=>{
getSelectedAppsDetails(appId).then((value)=>{
    console.log(value?.data?.appData);
    if(value?.data?.status){
        setSelectedData(value?.data?.appData)
    }
})
    },[])
  return (
    <div>
      <div class="div2" id='div2'>
    <section>
        <div className="container">
            <div className="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='second_div'>
                    <div align='center'>
                        <img src={`http://localhost:4000/img/${selectedData?.appIcon}`} alt="Sample app icon" className='appLogo' id='img1'/>
                    </div><br />
                    <h3 id='head1' align='center'>{selectedData?.appName}</h3><br />
                    <h6 id='head2' align='center'>{selectedData?.publisherName}</h6><br />
                    
                    {/* <div class='row' id='row'>
                        <div align='center' id='subdiv1'>
                            <div>
                                <label htmlFor="" id='lab1' align='center'>4.4<i class="bi bi-star-fill" id='star'></i></label><br />
                                <p id='para1' align='center'>Average</p>
                            </div>
                            <div id='sub1'>
                                <label id='lab2' htmlFor="" align='center'>16</label><br />
                                <p id='para2' align='center'>Rating</p>
                            </div>
                        </div>
                    </div><br /> */}
                    <div className='appLogo' align='center'>
                        <button type="button" name="" id="btn2" onClick={()=>DownloadSelectedApp(selectedData?.apkFile,selectedData?._id)}>Download</button>
                    </div><br />
                    <div align='center'>
                        <label htmlFor="" id='lab3' align='center'>{selectedData?.Category}</label>
                    </div>
                    <div align='center'>
                        <button id='btn3' align='center'><i class="bi bi-flag" id='flag'></i>Report app</button>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='third_div'>
                    <div align='center' id='subdiv2'>
                        <h4 id='divh'>Screen Shots</h4><br /><hr id='imghr'/><br />
                        <img src={`http://localhost:4000/img/${selectedData?.appScreenshot}`} alt="Sample screen shots" id='img2' className='Screenimage' />
                    </div>
                    <div align='center' id='subdiv3'>
                        <h4 id='divh'>Description</h4><br /><hr id='deschr'/><br />
                        <p>{selectedData?.appDescription}</p>
                    </div>
                    {/* <div align='center' id='subdiv6'>
                        <h4 id='divh2'>Rating & Reviews</h4><br /><hr id='deschr'/><br />
                        <p>
                            <input id='inp' type="text" value={'Username'} readOnly/><br/><br />
                            <input id='inp2' type="text" value={'4'} readOnly/><i class="bi bi-star" id='inp2'></i><br/><br />
                            <textarea id='inp1' name="" cols="30" rows="5" value={'description'} readOnly></textarea>
                        </p>
                    </div> */}
                    <div id='subdiv4'>
                        <h4 id='divh1'align='center'>System Requirements</h4><br /><hr id='srhr'/><br />
                        <ul>
                            <li>Available on :{selectedData?.OS} OS</li>
                            <li>Operating System :{selectedData?.OS} OS</li>
                            <li>Architecture : 64x</li>
                            <li>Keyboard : yes</li>
                            <li>Mouse : yes</li>
                            <li>RAM : min 4 GB</li>
                            <li>Storage Space : min 10 GB free</li>
                        </ul>
                    </div>
                    {/* <div align='center' id='subdiv5'>
                        <h3 id='divh1'>Additional information</h3><br /><hr id='addihr'/><br />
                        <p></p>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
