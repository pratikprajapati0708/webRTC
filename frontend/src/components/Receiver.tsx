import { useEffect } from "react";

export const Receiver = () => {
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");
        socket.onopen = () => {
            socket.send(JSON.stringify({ type: 'receiver' }))
        }

        socket.onmessage = (event) =>{
            const message = JSON.parse(event.data);
            if(message.type === 'createOffer'){
                const pc = new RTCPeerConnection();
                pc.setLocalDescription(message.sdp);
            }
        }
    }, [])
    return <div>

    </div>
}