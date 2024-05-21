import React from 'react'
import './AdminSidebar.css'
import {Link} from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <div>
      <div class="div2">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='sidebar'>
                            <Link to={'/admin/home'} id='link'><button id="hm"><i class="bi bi-house"id='home'>Home</i><br /><br /></button></Link>
                            {/* <Link to={'../apps'} id='link'><button id="ap"><i class="bi bi-app"id='app'>Apps</i><br /><br /></button></Link>
                            <Link to={'../games'} id='link'><button id="gm"><i class="bi bi-controller" id='game'>Games</i><br /><br /></button></Link> */}
                            {/* <Link to={'../library'} id='link'><button id="lb"><i class="bi bi-collection"id='library'>Library</i><br /><br /></button></Link> */}
                            <div class="btn-group dropend">
                                <button id='hp' type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots" id='more'><br />More</i><br /><br />
                                </button>
                                <ul class="dropdown-menu">
                                <Link to={'../app_management'} id='link'><li><i class="bi bi-gear-wide-connected" id='i1'></i>App Hub</li></Link>
                                <Link to={'../feedback'} id='link'><li><i class="bi bi-chat-fill" id='i1'></i>Feedback</li></Link>
                                <Link to={'../compliant'} id='link'><li><i class="bi bi-shield-fill-exclamation" id='i1'></i>Compliant</li></Link>
                                <Link to={'../notification'} id='link'><li><i class="bi bi-shield-fill-exclamation" id='i1'></i>Notification</li></Link>
                                <Link to={'../about'} id='link'><li><i class="bi bi-file-person-fill" id='i1'></i>About</li></Link>
                                <Link to={'../help'} id='link'><li><i class="bi bi-person-raised-hand" id='i1'></i>Get Help</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
