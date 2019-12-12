/*global AFRAME*/

import React from "react";
import "aframe";
import "aframe-state-component";
import "./App.css";

function App() {
  AFRAME.registerState({
    initialState: {
      score: 10,
      enabled: true
    },

    handlers: {
      decreaseScore: function(state, action) {
        state.score -= action.points;
      },

      increaseScore: function(state, action) {
        state.score += action.points;
        state.enabled = !state.enabled
      }
    }

  });

  return (
    <a-scene vr-mode-ui="enterVRButton: #myEnterVRButton">
      <a
        id="myEnterVRButton"
        href="#"
        style={{ position: "absolute", zIndex: 1000 }}
      >
        ENTER VR
      </a>

      <button style={{ position: "absolute", zIndex: 1000, top:50, right:0 }} onClick={()=> AFRAME.scenes[0].emit("increaseScore", { points: 50 })}>CLICK</button>

      <a-box
        bind="visible: enabled"
        position="-1 0.5 -3"
        rotation="0 45 0"
        scale="1 1 0.15"
        color="#4CC3D9"
      />
      <a-box
        position="-0.728 0.080 -2.7"
        rotation="86.562 45 0"
        scale="1 0.645 0.130"
        color="#4CC3D9"
      />

      <a-sphere
        position="0.333 2 -5"
        radius="1.25"
        scale="0.3 0.3 0.3"
        color="#EF2D5E"
      />
      <a-cylinder
        position="0.2 0.75 -2.207"
        radius="0.5"
        height="1.5"
        scale="0.358 0.763 1"
        color="#FFC65D"
      />
      <a-plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"
      />

      

      <a-entity oculus-touch-controls="hand: left" />
      <a-entity oculus-touch-controls="hand: right"/>

      <a-sky color="#CCC" />
    </a-scene>
  );
}

// <a-entity id="rightHand" hand-controls="right"></a-entity>
// <a-entity id="leftHand" hand-controls="left"></a-entity>
// abuttondown={() =>
//   AFRAME.scenes[0].emit("increaseScore", { points: 50 })
// }

export default App;
