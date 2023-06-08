import React from 'react'
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import GoogleLogin from 'react-google-login';
import {FcGoogle} from 'react-icons/fc';

const Login = () => {
    /*
    object-cover => class ensures the video retains its aspect ratio while covering the entire container.
    justify-start => This aligns the contents to the start of the container horizontally.
    items-center => This centers the contents vertically within the container.
    h-screen => This sets the height of the container to fill the entire screen.
    relative => <div> element represents a relative-positioned container within the parent container. 
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

            <div className="absolute flex flex-col justify-center item-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                
                {/*displays logo*/}
                <div className="p-5">
                    <img src={logo} width="130px"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
