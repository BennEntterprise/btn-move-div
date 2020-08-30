import React, { useState } from 'react';
import './App.css';

function App() {
  const [divLeftPos, setDivLeftPos] = useState(10);
  const [divTopPos, setDivTopPos] = useState(10)
  const [increment, setIncrement] = useState(5)

  const handleUpClick = (e: any) => {
    console.info(`handling Up click`)
    setDivTopPos(divTopPos - increment)
  }
  const handleLeftClick = (e: any) => {
    console.info(`handling Left click`)
    setDivLeftPos(divLeftPos - increment)
  }
  const handleRightClick = (e: any) => {
    console.info(`handling Right click`)
    setDivLeftPos(divLeftPos + increment)
  }
  const handleDownClick = (e: any) => {
    console.info(`handling Down click`)
    setDivTopPos(divTopPos + increment)
  }

  const increaseIncrement = (e: any) => {
    console.info(`handling increaseIncrement click`)
    setIncrement(increment + 1)
  }
  const deccreaseIncrement = (e: any) => {
    console.info(`handling deccreaseIncrement click`)
    setIncrement(increment - 1)
  }
  return (
    <div className="App">
      <button className="btn btn-up" onClick={handleUpClick}>Up</button>
      <button className="btn btn-left" onClick={handleLeftClick}>Left</button>
      <button className="btn btn-right" onClick={handleRightClick}>Right</button>
      <button className="btn btn-down" onClick={handleDownClick}>Down</button>
      <div id="play-area">
        <div id="sample" style={{ left: `${divLeftPos}%`, top: `${divTopPos}%` }}><p>Move this div in increments using the red buttons. Adjust the size of the increment by using the +/ buttons in the table</p></div>

        <div id="numeric-feedback">
          <table>
            <thead>
              <tr>
                <th>
                  <button className="btn-incrementer" id="decrease-increment" onClick={deccreaseIncrement}>-</button>
                </th>
                <th>
                  {increment}
                </th>
                <th>
                  <button className="btn-incrementer" id="increase-increment" onClick={increaseIncrement}>+</button>

                </th>
              </tr>
              <tr>
                <th>Left Value</th>
                <th>Top Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {divLeftPos}%
                </td>
                <td>
                  {divTopPos}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="note"><p>**The top and left values refer to the percentage measured from the top left of the white box to the top left of the green div.</p></div>

    </div >
  );
}

export default App;
