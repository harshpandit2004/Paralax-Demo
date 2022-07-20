import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Parallax pages={2} style={{ top: '0', left: '0' , backgroundColor: "black"}}>
      <ParallaxLayer
        offset={0}
        speed={2}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , color: "White"}}>
        <p>void.</p>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'White' }} />

      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'Black',
        }}>
        <p>void, inverted.</p>
      </ParallaxLayer>
    </Parallax>
    </React.Fragment>
  );
}

export default App;
