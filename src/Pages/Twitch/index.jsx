import { useEffect } from "react";
import { useState } from "react";


function Twitch(){

    const [values, setValues] = useState([]);

    const url = 'https://twitch-channel-clips.p.rapidapi.com/public/clips/ChiaVTuber';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a798894fc3msh5d7aaab3804cf26p1904ddjsn084ca00e22c5',
		    'X-RapidAPI-Host': 'twitch-channel-clips.p.rapidapi.com'
	    }
    };

    async function fetchTwitch(url, options){
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setValues(result)
            console.log(values)
        } catch (error) {
            console.error(error);
        }
    }

    

    useEffect(()=>{
        fetchTwitch(url, options);
    },  [])



    return( 
        <section className="clips_section">
            <h2>Main clips!</h2>
            <div className="clips"></div>
        </section>
    )
}

export {Twitch}