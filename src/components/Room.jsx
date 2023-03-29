import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
    const { roomID } = useParams();
    const MyMeeting = async (element) => {
        const appID = import.meta.env.VITE_ZEGOCLOUD_APP_ID;
        const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            Number(appID),
            serverSecret,
            roomID,
            Date.now().toString(),
            "Ali Warraich"
        );
        const zegoCloud = ZegoUIKitPrebuilt.create(kitToken);
        zegoCloud.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            sharedLinks: [
                {
                    title: "MedxCure Video Call",
                    url: `http://localhost:5173/room/${roomID}`,
                },
            ],
            showScreenSharingButton: false,
        });
    };

    return (
        <div>
            <div ref={MyMeeting} style={{ width: "98vw", height: "97vh" }} />
        </div>
    );
}

export default Room;
