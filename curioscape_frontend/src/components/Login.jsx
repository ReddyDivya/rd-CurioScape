import React from 'react'
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import {FcGoogle} from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { client } from '../client';
/*
react-google-login=> allows you to integrate Google Sign-In functionality into your React application.
GoogleLogin component is used to render a Google Sign-In button and handle the authentication process with Google.
*/
import GoogleLogin from '@leecheuk/react-google-login';


const Login = () => {
    /*
    object-cover => class ensures the video retains its aspect ratio while covering the entire container.
    justify-start => This aligns the contents to the start of the container horizontally.
    items-center => This centers the contents vertically within the container.
    h-screen => This sets the height of the container to fill the entire screen.
    relative => <div> element represents a relative-positioned container within the parent container. 
    */
    
    const navigate = useNavigate();//navigate to different pages within a React application.

    /*
    responseGoogle that handles the response from Google after a user signs in using the GoogleLogin component.
    saves the user's profile information to the browser's local storage, creates a new user document in your Sanity.io project if it doesn't already exist, and navigates to the home page afterward.
    */
    const responseGoogle = (response) => {
        console.log('response >> '+ response);

        /*
        stores the 'profileObj' property of the response object in the browser's local storage.
        'profileObj' contains the user's profile information obtained from Google after successful authentication.
        */
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        //object destructuring to extract the name, googleId, and imageUrl properties from the 'profileObj'.
        const {name, googleId, imageUrl} = response.profileObj;
        console.log(name, googleId, imageUrl);

        //creates an object 'doc' with properties _id, _type, userName, and image. 
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl,
        };//doc

        /*
        uses the 'client' instance to create a new document in your Sanity.io project, representing the user.
        createIfNotExists method is used to check if a document with the given _id (Google ID) exists and create it if it doesn't.
        After the document is created, it uses the navigate function, to navigate to the home page ('/')
        */
        client.createIfNotExists(doc).then(() => {

            //{replace : true} => current route in the browser's history should be replaced with the new route instead of adding a new entry to the history stack
            navigate('/', {replace : true});
        });
    };//responseGoogle

    return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
            {/*displays video*/}
            <video
            src={shareVideo}
            type="video/mp4"
            // control={false}//disables the default video controls, the controls won't be displayed for the video.
            autoPlay//enables the video to start playing automatically when the page loads
            muted//mutes the video's audio
            loop//the video loop continuously
            className="w-full h-full object-cover"
            />

            <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blend-overlay">
                {/*displays logo*/}
                <div className="pt-15">
                    <img src={logo} width="130px" alt="logo"/>
                </div>

                {/*displays google login button*/}
                <div className="shadow-2xl">

                    {/*
                    
                    */}
                    <GoogleLogin
                        clientId='913338086499-fkncsqfhp3ms85u3geusvpvnd6m8ackh.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <button type="button"
                            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            >
                                <FcGoogle className="mr-4" /> Sign in with google
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                    />    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
