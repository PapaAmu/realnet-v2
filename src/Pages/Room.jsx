import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams, useLocation } from "react-router-dom";

export default function App() {
  const { roomID } = useParams();
  const location = useLocation();
  const containerRef = useRef(null);
  const zpRef = useRef(null); // Store Zego instance in a ref

  // Get role from URL query string
  const queryParams = new URLSearchParams(location.search);
  const role_str = queryParams.get("role") || "Audience";

  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?roomID=" +
        roomID +
        "&role=Cohost",
    });
  }
  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?roomID=" +
      roomID +
      "&role=Audience",
  });

  // generate Kit Token
  const appID = YOUR_APP_ID_HERE; // Replace with your actual App ID
  const serverSecret = YOUR_SERVER_SECRET_HERE; // Replace with your actual Server Secret
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    Date.now().toString(),
    "YourUserName" // Added username parameter
  );

  // start the call
  useEffect(() => {
    if (!roomID || !containerRef.current) return;
    
    let myMeeting = async (element) => {
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current = zp; // Store instance in ref
      
      // start the call
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
        turnOnMicrophoneWhenJoining: role !== ZegoUIKitPrebuilt.Audience,
        turnOnCameraWhenJoining: role !== ZegoUIKitPrebuilt.Audience,
      });
    };
    
    myMeeting(containerRef.current);
    
    // Cleanup function
    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
      }
    };
  }, [roomID, kitToken, role, sharedLinks]); // Added dependencies

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}