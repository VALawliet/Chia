import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Twitter } from './Pages/Twitter';
import { YouTube } from './Pages/Youtube';
import { Youtube2 } from './Pages/Youtube2';
import { Twitch } from './Pages/Twitch';
import { NotFound } from './Pages/NotFound';
import { Navbar } from './Components/Navbar';
import { Aside } from './Components/Aside';
import { MainContainer } from './Components/MainContainer';
import { useState } from 'react';
import { useEffect } from 'react';

function AppRoutes(){

  const [values, setValues] = useState({});
  const [valuesYT, setValuesYT] = useState({});
  const [valuesYT2, setValuesYT2] = useState({})
  const [valuesTw, setValuesTw] = useState({});
  const [pending, setPending] = useState(true);

  const urlTwitch = 'https://twitch-channel-clips.p.rapidapi.com/public/clips/ChiaVTuber';
  const optionsTwitch = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '1acd503002msh7b01f409eb0e337p1a92bejsn83cd054153c1',
		  'X-RapidAPI-Host': 'twitch-channel-clips.p.rapidapi.com'
	  }
   };

   const urlTwicth2 = 'https://twitch-channel-clips.p.rapidapi.com/public/clips/chiavtuber';
    const optionsTwitch2 = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a798894fc3msh5d7aaab3804cf26p1904ddjsn084ca00e22c5',
		    'X-RapidAPI-Host': 'twitch-channel-clips.p.rapidapi.com'
	    }
    };

   const urlYT = 'https://youtube-search6.p.rapidapi.com/channel/videos/?channelId=UCyK6FWxE57tBrGxGtmHT0sw';
   const optionsYT = {
     method: 'GET',
     headers: {
       'X-RapidAPI-Key': '1acd503002msh7b01f409eb0e337p1a92bejsn83cd054153c1',
       'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
     }
   };

   const urlYTBackup = 'https://youtube-search6.p.rapidapi.com/channel/videos/?channelId=UCyK6FWxE57tBrGxGtmHT0sw';
  const optionsYTBackup = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a798894fc3msh5d7aaab3804cf26p1904ddjsn084ca00e22c5',
		    'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
	    }
    };

    const urlYT2 = 'https://youtube-search6.p.rapidapi.com/channel/videos/?channelId=UC6ZFjYbL3w9z9qFFtr2vi1Q';
    const optionsYT2 = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '1acd503002msh7b01f409eb0e337p1a92bejsn83cd054153c1',
		    'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
	    }
    };

    const urlYTBackup2 = 'https://youtube-search6.p.rapidapi.com/channel/videos/?channelId=UC6ZFjYbL3w9z9qFFtr2vi1Q';
    const optionsYTBackup2 = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a798894fc3msh5d7aaab3804cf26p1904ddjsn084ca00e22c5',
		    'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
	    }
    };



    const urlTw = 'https://twitter135.p.rapidapi.com/v2/UserTweets/?id=1442476366574731265&count=12';
    const optionsTw = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '1acd503002msh7b01f409eb0e337p1a92bejsn83cd054153c1',
		    'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
	    }

      
    };

    const urlTw2 = 'https://twitter135.p.rapidapi.com/v2/UserTweets/?id=1442476366574731265&count=12';
    const optionsTw2 = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a798894fc3msh5d7aaab3804cf26p1904ddjsn084ca00e22c5',
		    'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
	}
};



  async function fetchTwitch(url, options, url2, options2){
    try{
        const response = await fetch(url, options);
        const result = await response.json();
        
        if(result?.message == "You have exceeded the DAILY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/jakubbilko/api/twitch-channel-clips"){
          const responseBackUp = await fetch(url2, options2);
          const result2 = await responseBackUp.json()
          setValues(result2)
        }else{
          setValues(result)
        }
        
      }catch (error) {
            console.log(error)
        }
  }

  async function fetchYT(url, options, url2, options2){
    try{
      const responseYT = await fetch(url, options);
      const resultYT = await responseYT.json();

      if(resultYT?.message == "You have exceeded the MONTHLY quota for Channel on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/omarmhaimdat/api/youtube-search6"){
        const responseYTBackup = await fetch(url2, options2);
        const resultYTBackup =  await responseYTBackup.json();
        setValuesYT(resultYTBackup);
        console.log('if')
        console.log(resultYTBackup)
      }else{
        setValuesYT(resultYT);
        console.log('else')
        console.log(resultYT)
      }
      
      
      
      
    }catch(error){
      console.log(error)
    }
  }

  async function fetchYT2(url, options, url2, options2){
    try{
      const responseYT2 = await fetch(url, options);
      const resultYT2 = await responseYT2.json();
      
      if(resultYT2?.message == "You have exceeded the MONTHLY quota for Channel on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/omarmhaimdat/api/youtube-search6"){
        const responseYTBackup2 = await fetch(url2, options2);
        const resultYTBackup2 =  await responseYTBackup2.json();
        setValuesYT2(resultYTBackup2)
      }else{
        setValuesYT2(resultYT2);
      }
    }catch(error){
      console.log(error)
    }
  }

  async function fetchTwitter(url, options){
    try{
      const responseTw =  await fetch(url, options);
      const resultTw = await responseTw.json();

      setValuesTw(resultTw);
      console.log(resultTw)
    }catch(error){
      console.log(error)
    }
  }
    

  useEffect(()=>{
      fetchTwitch(urlTwitch, optionsTwitch, urlTwicth2, optionsTwitch2);
      fetchYT(urlYT, optionsYT, urlYTBackup, optionsYTBackup);
      fetchYT2(urlYT2, optionsYT2, urlYTBackup2, optionsYTBackup2)
      fetchTwitter(urlTw, optionsTw)
      setPending(false);
  },  [])

  const clips = {...values};
  const ytVids1 = {...valuesYT};
  const ytVids2 = {...valuesYT2};
  const tweets = {...valuesTw}
    
    

  let routes = useRoutes([
    {
      path: '/', element: <Home/>
    },

    {
      path: '/twt', element: <Twitter tweets={tweets}/>
    }, 

    {
      path: '/yt', element: <YouTube ytVids1 = {ytVids1}/>
    },

    {
      path: '/yt2', element: <Youtube2 ytVids2 = {ytVids2}/>
    },

    {
      path: '/twitch', element: <Twitch clips={clips}/>
    },
    {
      path: '/*', element: <NotFound/>
    }
  ]);

  return routes
}

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <MainContainer>
        <Aside/>
        <AppRoutes/>
      </MainContainer>
      
    </BrowserRouter>
  )
}

export default App;
