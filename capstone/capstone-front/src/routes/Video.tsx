import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET, SERVER_URL } from '../auth/constants';
import React, { useEffect } from 'react';
import PortalLayout from '../layout/PortalLayout';



export default function Video() {
      const roomID = "Diana";
      let myMeeting = async (element: any) => {
     // generate Kit Token
      const appID = APP_ID;
      const serverSecret = SERVER_SECRET;
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
         serverSecret, roomID,  Date.now().toString(), "Diana");

     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showScreenSharingButton: false,
      });

  };


  useEffect(() => { 
    return () => { 
        const elementoExistente = 
        document.getElementById('elemento-dinamico');
         if (elementoExistente) { 
            document.body.removeChild(elementoExistente); 
        } 
    }; 
}, 
[]);


  return (
    <PortalLayout>
    <div
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
    </PortalLayout>
  );
}





/*
import React, { useEffect, useRef, useState } from 'react';
import ZegoExpressEngine from 'zegocloud-zego-express-web-sdk';
import { APP_ID, SERVER_SECRET, SERVER_URL } from '../auth/constants';
import { useAuth } from "../auth/AuthProvider";

const ZegoVideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [client, setClient] = useState(null);
   const auth = useAuth();

  useEffect(() => {
    const appID = APP_ID; // Reemplaza con tu App ID de ZEGOCLOUD
    const server = SERVER_URL; // URL del servidor
    const userID = `user_${Math.floor(Math.random() * 10000)}`;
    const userName = `user_name_${Math.floor(Math.random() * 10000)}`;
    const token = auth.getAccessToken(); // Genera el token correspondiente

    // Inicializar el cliente de ZEGOCLOUD
    const zegoClient = new ZegoExpressEngine(appID, server);
    setClient(zegoClient);

    // Iniciar sesión en la sala
    zegoClient.loginRoom('room1', { userID, userName }, { token }).then(() => {
      console.log('Logged in to room successfully');
      
      // Obtener acceso a la cámara y el micrófono
      zegoClient.startPublishingStream(userID).then((localStream) => {
        localVideoRef.current.srcObject = localStream;
        localVideoRef.current.play();
      });

      // Reproducir el video remoto cuando alguien más se une
      zegoClient.on('remoteStreamAdded', (stream) => {
        remoteVideoRef.current.srcObject = stream;
        remoteVideoRef.current.play();
      });
    });

    // Limpiar cuando el componente se desmonte
    return () => {
      zegoClient.stopPublishingStream(userID);
      zegoClient.logoutRoom('room1');
    };
  }, []);

  return (
    <div>
      <h1>Video Call with ZEGOCLOUD</h1>
      <div>
        <video ref={localVideoRef} autoPlay muted style={{ width: '300px', height: '300px', border: '1px solid black' }} />
        <video ref={remoteVideoRef} autoPlay style={{ width: '300px', height: '300px', border: '1px solid black' }} />
      </div>
    </div>
  );
};

export default ZegoVideoCall;
*/






