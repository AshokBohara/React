import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

function demo()
{
  document.getElementById('demo').innerHTML = "Hello World";
}
  return (
    <>
  <div>
    <h1>welcome to my website !</h1>
    <p id='demo'></p>
    <button onClick={demo}>click me</button>
  </div>
{/* container first */}
  <div className='container1'>
    right side of container
    <table>
      <tbody>
        <tr>
            <td><img src="img/IG.jpg"/>
            This place is located in Sudurpachim province Bungal Bajhang</td>
        </tr>
      </tbody>
    </table>
  </div>
{/* container second */}
  <div className='container2'>
    left side of container
    <table>
      <tbody>
      <tr>
          <td><img src="img/Nature.jpg"/>
          This place is located in sudurpachim province
          Bungal Bajhang</td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
  )
}
export default App
