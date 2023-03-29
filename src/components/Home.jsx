import React from "react";

export default function Home() {
    const [roomID, setRoomID] = React.useState("");
    return (
        <div>
            <h1>Welcome to the Video Chat App powered by Zego</h1>
            <form
                action={`/room/${roomID}`}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                <input
                    type="text"
                    placeholder="Enter room id"
                    value={roomID}
                    onChange={(e) => setRoomID(e.target.value)}
                />
                <button style={{ width: 100 }}>Join Room</button>
            </form>
        </div>
    );
}
