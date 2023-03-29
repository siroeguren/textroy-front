import React from 'react';
import Header from '../header/headerApp';
import TweetForm from '../tweetForm/tweetForm';
import masterJWT from "./masterJWT.js";
import { useEffect } from 'react';


const MasterPage = () =>  
{
  
  useEffect(()=>
  {
    masterJWT();
  },[]);

  return (
    <div>
      <Header />
      <div className="container">
        <TweetForm />
      </div>
    </div>
  );
}

export default MasterPage;
