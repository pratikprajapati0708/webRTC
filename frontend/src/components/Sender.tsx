import { useEffect, useState } from "react"
export const Sender = ()=>{

    const[socket,setSocket] = useState<WebSocket | null>(null);
    useEffect(()=>{
        const socket = new WebSocket("ws://localhost:8080");
        socket.onopen = ()=>{
            socket.send(JSON.stringify({type : 'sender'}))
        }
        setSocket(socket);
    },[])
    async function startSendingVideo(){
        if(!socket)return;
        const pc = new RTCPeerConnection();
        const offer = await pc.createOffer();
        pc.setLocalDescription(offer);
        socket?.send(JSON.stringify({type : 'createOffer', sdp : pc.localDescription }));

        socket.onmessage =(event)=>{
            const message = JSON.parse(event.data);
            if(message.type === 'createOffer'){
                pc.setRemoteDescription(message.sdp);
            }
        }
    }

    return <div>
        <button onClick={startSendingVideo}>Sender</button>
    </div>
}