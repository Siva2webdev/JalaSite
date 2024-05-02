import React from 'react'

const IFrames = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "3rem", marginLeft:"200px"}}>
        <h1 style={{textAlign: "center"}}>IFRAMES</h1>
      <iframe src="Auto.js" height="368px" width="500px" title="frame" style={{marginTop: "2rem", border: "1px solid black"}}/>
      <iframe src={window.location.href} height="368px" width="500px" title="frame" style={{marginTop: "2rem", border: "1px solid black"}}/>
      <iframe src="google.com" height="368px" width="500px" title="frame" style={{marginTop: "2rem", border: "1px solid black"}}/>
    </div>
  )
}

export default IFrames
