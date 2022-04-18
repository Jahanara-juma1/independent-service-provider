import React from 'react';

const Blogs = () => {
    return (
        <div>


            <h2>Question: Different between authorization and authentication?</h2>
            <p>Answer: Authentication: Authentication verifies who the user is.	Authorization determines what resources a user can access.
                Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.<br />
                Authorization: Authorization determines what resources a user can access.
                Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user
            </p>

            <h2>Question: Why are you using firebase? What other options do you have to implement authentication.</h2>
            <p>Answer: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.  You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, ...
 </p>

           <h2>Question: What other services does.firebase provide other then authentication?</h2>
           <p>Answer: Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it. Some of the Google Firebase platform's standout features include databases, authentication, push messages, analytics, file storage, and much more. </p>

        </div>
    );
};

export default Blogs;