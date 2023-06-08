import React from 'react'
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

const Login = () => {
    /*
    object-cover => class ensures the video retains its aspect ratio while covering the entire container.
    justify-start: This aligns the contents to the start of the container horizontally.
    items-center: This centers the contents vertically within the container.
    h-screen: This sets the height of the container to fill the entire screen.
    */
  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
            {/*displays video*/}
            <video
            src={shareVideo}
            type="video/mp4"
            control={true}//disables the default video controls, the controls won't be displayed for the video.
            autoPlay//enables the video to start playing automatically when the page loads
            muted//mutes the video's audio
            loop//the video loop continuously
            className="w-full h-full object-cover"
            />
        </div>
    </div>
  )
}

export default Login
