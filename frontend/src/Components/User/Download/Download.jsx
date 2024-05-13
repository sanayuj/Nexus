import React from 'react'
import imageOne from "./12.jpg"
import './Download.css'

export default function Download() {
  return (
    <div>
      <div class="div2" id='div2'>
    <section>
        <div className="container">
            <div className="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='second_div'>
                    <div align='center'>
                        <img src={imageOne} alt="Sample app icon" id='img1'/>
                    </div><br />
                    <h3 id='head1' align='center'>App Name</h3><br />
                    <h6 id='head2' align='center'>Publisher Name</h6><br />
                    <div align='center'>
                        <input type="button" name="" id="btn2" value={'Download'}/>
                    </div><br />
                    <div class='row' id='row'>
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
                    </div><br />
                    <div align='center'>
                        <label htmlFor="" id='lab3' align='center'>Type of the app</label>
                    </div>
                    <div align='center'>
                        <button id='btn3' align='center'><i class="bi bi-flag" id='flag'></i>Report app</button>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='third_div'>
                    <div align='center' id='subdiv2'>
                        <h4 id='divh'>Screen Shots</h4><br /><hr id='imghr'/><br />
                        <img src="" alt="Sample screen shots" id='img2'/>
                    </div>
                    <div align='center' id='subdiv3'>
                        <h4 id='divh'>Description</h4><br /><hr id='deschr'/><br />
                        <p></p>
                    </div>
                    <div align='center' id='subdiv6'>
                        <h4 id='divh2'>Rating & Reviews</h4><br /><hr id='deschr'/><br />
                        <p>
                            <input id='inp' type="text" value={'Username'} readOnly/><br/><br />
                            <input id='inp2' type="text" value={'4'} readOnly/><i class="bi bi-star" id='inp2'></i><br/><br />
                            <textarea id='inp1' name="" cols="30" rows="5" value={'description'} readOnly></textarea>
                        </p>
                    </div>
                    <div id='subdiv4'>
                        <h4 id='divh1'align='center'>System Requirements</h4><br /><hr id='srhr'/><br />
                        <ul>
                            <li>Available on :</li>
                            <li>Operating System :</li>
                            <li>Architecture :</li>
                            <li>Keyboard :</li>
                            <li>Mouse :</li>
                            <li>RAM :</li>
                            <li>Storage Space :</li>
                        </ul>
                    </div>
                    <div align='center' id='subdiv5'>
                        <h3 id='divh1'>Additional information</h3><br /><hr id='addihr'/><br />
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
