import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
    const { roomID } = useParams();
    return (
        <div>
            <h1>Room: {roomID}</h1>
        </div>
    );
}

export default Room;
