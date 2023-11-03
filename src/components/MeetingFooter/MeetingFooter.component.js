import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  faDesktop,
  faVideoSlash,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import ChatComponent from "./ChatComponent";

import "./MeetingFooter.css";

const MeetingFooter = (props) => {
  const [streamState, setStreamState] = useState({
    mic: true,
    video: false,
    screen: false,
  });

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const micClick = () => {
    setStreamState((currentState) => ({
      ...currentState,
      mic: !currentState.mic,
    }));
  };

  const onVideoClick = () => {
    setStreamState((currentState) => ({
      ...currentState,
      video: !currentState.video,
    }));
  };

  const onScreenClick = () => {
    props.onScreenClick(setScreenState);
  };

  const setScreenState = (isEnabled) => {
    setStreamState((currentState) => ({
      ...currentState,
      screen: isEnabled,
    }));
  };

  const openChatModal = () => {
    setIsChatModalOpen(true);
  };

  const closeChatModal = () => {
    setIsChatModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    props.onMicClick(streamState.mic);
  }, [streamState.mic]);

  useEffect(() => {
    props.onVideoClick(streamState.video);
  }, [streamState.video]);

  return (
    <div className="meeting-footer">
      <div
        className={"meeting-icons " + (!streamState.mic ? "active" : "")}
        data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}
        onClick={micClick}
      >
        <FontAwesomeIcon
          icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
          title="Mute"
        />
      </div>
      <div
        className={"meeting-icons " + (!streamState.video ? "active" : "")}
        data-tip={streamState.video ? "Hide Video" : "Show Video"}
        onClick={onVideoClick}
      >
        <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} />
      </div>
      <div
        className="meeting-icons"
        data-tip="Share Screen"
        onClick={onScreenClick}
        disabled={streamState.screen}
      >
        <FontAwesomeIcon icon={faDesktop} />
      </div>
      <div
     
        className="meeting-icons"
        data-tip="Open Chat"
        onClick={openChatModal}
      >
        <img
       
    src="https://upload.wikimedia.org/wikipedia/commons/8/85/Circle-icons-chat.svg"
    alt="Chat Icon"
  />
      </div>
      
      <ReactTooltip />

      <Modal
        isOpen={isChatModalOpen}
        onRequestClose={closeChatModal}
        contentLabel="Chat Modal"
      >
        <ChatComponent />
      </Modal>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          {/* Nội dung của sidebar */}
          {/* Bạn có thể thêm các mục danh sách, thông tin, hoặc các thành phần khác */}
        </div>
      )}
    </div>
  );
};

export default MeetingFooter;
