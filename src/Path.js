import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./components/Masterlayout/Script";
import Navbar from './components/Masterlayout/Navbar';
import Room from './components/Room/Room';
import Main from './components/Main/Main';
import BottomBar from './components/Masterlayout/BottomBar';
import Sidebar from './components/Masterlayout/Mainsidebar';
import Roomsidebar from './components/Masterlayout/Roomsidebar';
import Chat from './components/Chat/Chat';
import Emoji from './components/Chat/Emoji';


export default function Path() {
    return <div>
        <Switch>
            <Route exact path="/navbar" component={Navbar} />
            <Route exact path="/" component={Main} />
            <Route exact path="/room/:roomId" component={Room} />
            <Route exact path="/bottambar" component={BottomBar} />
            <Route exact path="/mainsidebar" component={Sidebar} />
            <Route exact path="/roomsidebar" component={Roomsidebar} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/emoji" component={Emoji} />
        </Switch>
    </div>;
}
