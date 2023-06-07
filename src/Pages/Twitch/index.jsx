import { useEffect } from "react";
import { useState } from "react";
import { APIPending } from "../../Components/APIPending";
import './css/styles.css'


function Twitch(){

    const [values, setValues] = useState({});
    const [pending, setPending] = useState(true)

    const url = 'https://twitch-channel-clips.p.rapidapi.com/public/clips/ChiaVTuber';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '1acd503002msh7b01f409eb0e337p1a92bejsn83cd054153c1',
		    'X-RapidAPI-Host': 'twitch-channel-clips.p.rapidapi.com'
	    }
    };

    async function fetchTwitch(url, options){
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setValues(result)
            setPending(false)
            console.log(values)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchTwitch(url, options);
    },  [])

    const clips = {...values}
    console.log('uwu' + clips)



    return( 
        <section className="clips_section">
            <h2>Check Out the main clips of my channel!</h2>
            <div className="clips">

                {pending && <APIPending/> }
                {!pending && clips?.clips?.map((clip)=>{

                    if(clip.views >= 85){
                        if(clip.title.length > 24 ){
                            return(
                                <div key = {clip.title}className="clip">
                                    <a target = '_blank'href={clip.url}>
                                        <img src={clip.thumbnailUrl}/>
                                    </a>
                                    <span className="clip_text long">{clip.title}</span>
                                </div>
                            )
                        }
                        return(
                            <div key = {clip.title}className="clip">
                                <a target = '_blank'href={clip.url}>
                                    <img src={clip.thumbnailUrl}/>
                                </a>
                                 <span className="clip_text">{clip.title}</span>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </section>
    )
}

export {Twitch}