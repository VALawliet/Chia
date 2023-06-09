
import { APIPending } from "../../Components/APIPending";
import './css/styles.css'


function Twitch({clips}){

    



    return( 
        <section className="clips_section">
            <h2>Check Out the main clips of my channel!</h2>
            <div className="clips">

                
                {clips?.clips?.map((clip)=>{

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

            <div className="direct_twitch">
                <a href = "https://www.twitch.tv/chiavtuber"><span className="text">Don't miss out on any of my streams!</span></a>
            </div>
        </section>
    )
}

export {Twitch}