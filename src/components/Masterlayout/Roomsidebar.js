import React, { useCallback } from 'react';
import styled from 'styled-components';

const Roomsidebar = ({
    clickChat,
    clickCameraDevice,
    goToBack,
    toggleCameraAudio,
    userVideoAudio,
    clickScreenSharing,
    screenShare,
    videoDevices,
    showVideoDevices,
    setShowVideoDevices
}) => {
    const handleToggle = useCallback(
        (e) => {
            setShowVideoDevices((state) => !state);
        },
        [setShowVideoDevices]
    );

    return (
        <div>
            <nav
                class="sb-sidenav accordion sb-sidenav-light vh-100"
                id="sidenavAccordion"
            >
                <div class="sb-sidenav-menu">
                <div class="nav mb-4 mt-4">
                        <ViewButton onClick=''>
                            <div class="sb-nav-link-icon">
                                <FaIcon className="fas fa-users"></FaIcon>
                            </div>
                            Show Participents
                        </ViewButton>
                    </div>
                    <div class="nav mb-4 ">
                        <CameraButton onClick={toggleCameraAudio} data-switch='video'>
                            <div class="sb-nav-link-icon">
                                {userVideoAudio.video ? (
                                    <FaIcon className='fas fa-video'></FaIcon>
                                ) : (
                                    <FaIcon className='fas fa-video-slash'></FaIcon>
                                )}
                            </div>
                            Camera
                        </CameraButton>
                        {showVideoDevices && (
                            <SwitchList>
                                {videoDevices.length > 0 &&
                                    videoDevices.map((device) => {
                                        return <div key={device.deviceId} onClick={clickCameraDevice} data-value={device.deviceId} >{device.label}</div>;
                                    })}
                                <div>Switch Camera</div>
                            </SwitchList>
                        )}
                        <SwitchMenu onClick={handleToggle}>
                            <i className='fas fa-angle-up'></i>
                        </SwitchMenu>
                    </div>
                    <div class="nav mb-4">
                        <CameraButton onClick={toggleCameraAudio} data-switch='audio'>
                            <div class="sb-nav-link-icon">
                                {userVideoAudio.audio ? (
                                    <FaIcon className='fas fa-microphone'></FaIcon>
                                ) : (
                                    <FaIcon className='fas fa-microphone-slash'></FaIcon>
                                )}
                            </div>
                            Audio
                        </CameraButton>

                    </div>
                    <div class="nav mb-4">
                        <ChatButton onClick={clickChat}>
                            <div class="sb-nav-link-icon">
                                <FaIcon className='fas fa-comments'></FaIcon>
                            </div>
                            Chat
                        </ChatButton>
                    </div>
                    <div class="nav mb-4">
                        <ScreenButton onClick={clickScreenSharing}>
                            <div class="sb-nav-link-icon">
                                <FaIcon
                                    className={`fas fa-desktop ${screenShare ? 'sharing' : ''}`}
                                ></FaIcon>
                            </div>
                            Share Screen
                        </ScreenButton>
                    </div>
                    <div class="nav mb-4">
                        <StopButton onClick={goToBack}>
                            <div class="sb-nav-link-icon">
                                <FaIcon className="fas fa-stop"></FaIcon>
                            </div>
                            Leave
                        </StopButton>
                    </div>
                </div>
            </nav>
        </div>);
};

const ChatButton = styled.div`
//   width: 75px;
//   border: none;
//   font-size: 0.9375rem;
//   padding: 5px;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;

const ScreenButton = styled.div`
  width: auto;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  .sharing {
    color: #ee2560;
  }
`;

const FaIcon = styled.i`
  width: 30px;
  font-size: calc(16px + 1vmin);
`;

const StopButton = styled.div`
//   width: 75px;
//   height: 30px;
//   border: none;
//   font-size: 0.9375rem;
//   line-height: 30px;
//   margin-right: 15px;
//   background-color: #ee2560;
//   border-radius: 15px;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }
`;
const ViewButton = styled.div`
//   width: 75px;
//   height: 30px;
//   border: none;
//   font-size: 0.9375rem;
//   line-height: 30px;
//   margin-right: 15px;
//   background-color: #ee2560;
//   border-radius: 15px;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }
`;

const CameraButton = styled.div`
//   position: relative;
//   width: 75px;
//   border: none;
//   font-size: 0.9375rem;
//   padding: 5px;.
//   margin-top: 5%;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;

const SwitchMenu = styled.div`
  display: flex;
  position: absolute;
  width: 20px;
  top: 7px;
  left: 80px;
  z-index: 1;

  :hover {
    background-color: #476d84;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  > i {
    width: 90%;
    font-size: calc(10px + 1vmin);
  }
`;

const SwitchList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -65.95px;
  left: 80px;
  background-color: #4ea1d3;
  color: white;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;

  > div {
    font-size: 0.85rem;
    padding: 1px;
    margin-bottom: 5px;

    :not(:last-child):hover {
      background-color: #77b7dd;
      cursor: pointer;
    }
  }

  > div:last-child {
    border-top: 1px solid white;
    cursor: context-menu !important;
  }
`;
export default Roomsidebar;
