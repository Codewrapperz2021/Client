import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../../socket';
import Sidebar from '../Masterlayout/Mainsidebar';
import Navbar from '../Masterlayout/Navbar';

const Main = (props) => {
  const roomRef = useRef();
  const userRef = useRef();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [username, setuserName] = useState();
  const [roomname, setroomName] = useState();

  useEffect(() => {

    socket.on('FE-error-user-exist', ({ error }) => {
      if (!error) {
        const roomName = roomRef.current.value;
        const userName = userRef.current.value;

        sessionStorage.setItem('user', userName);
        props.history.push(`/room/${roomName}`);
      } else {
        setErr(error);
        setErrMsg('User name already exist');
      }
    });
  }, [props.history]);

  function clickJoin() {
    const roomName = roomRef.current.value;
    const userName = userRef.current.value;

    if (!roomName || !userName) {
      setErr(true);
      setErrMsg('Enter Room Name or User Name');
    } else {
      socket.emit('BE-check-user', { roomId: roomName, userName });
    }
  }

  return (
    <div>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div id="layoutSidenav_content">
            <MainContainer>
              <div>
                <div className='row d-flex justify-content-around'>
                  <div className='col-md-3'>
                    <img src="vc1.jpg" alt="vc1" width="350" height="250" />
                  </div>
                  <div className='col-md-3'>
                    <img src="vc2.jpg" alt="vc1" width="350" height="250" />
                  </div>
                  <div className='col-md-3'>
                    <img src="vc3.jpg" alt="vc1" width="350" height="250" />
                  </div>
                </div>
              </div>
              <Row style={{ marginTop:"6%" }}>
              <Label htmlFor="userName">User Name</Label>
                <Input type="text" id="userName" placeholder="smith" onChange={(e) => setuserName(e.target.value)} ref={userRef} />             
              </Row>
              <Row>
              <Label htmlFor="roomName">Room id</Label>
                <Input type="text" id="roomName" placeholder="7832" onChange={(e) => setroomName(e.target.value)} ref={roomRef} />
              </Row>
              <JoinButton onClick={clickJoin}><div> Click To Join</div>  </JoinButton>
              {err ? <Error>{errMsg}</Error> : null}
            </MainContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

const MainContainer = styled.div`
  
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
  line-height: 35px;
`;

const Label = styled.label`
font-size: 20px;
color: #FFFFFF;
:hover {
  color: #000000;
}
`;

const Input = styled.input`
  width: 150px;
  height: 35px;
  margin-left: 15px;
  margin-right:40%;
  padding-left: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
`;

const Error = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #e85a71;
`;

const JoinButton = styled.button`
  margin-top: 3%;
  outline: none;
  border: none;
  border-radius: 15px;
  height: 40px;
  color: #d8e9ef;
  background-color: #4ea1d3;
  font-size: 19px;
  font-weight: 500;

  :hover {
    background-color: #7bb1d1;
    cursor: pointer;
  }
`;
export default Main;
