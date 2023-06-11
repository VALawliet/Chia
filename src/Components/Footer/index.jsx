import './css/styles.css'
import twitch from '../../img/twitch-icon.svg'
import youtube from '../../img/youtube-svgrepo-com.svg'
import twitter from '../../img/twitter-seeklogo.com.svg'
import artStation from '../../img/art-station.svg'
import tiktok from '../../img/tiktok.svg'
import gmail from '../../img/gmail-svgrepo-com.svg'
import reddit from '../../img/reddit-svgrepo-com.svg'

function Footer(){

    const list = [
        {
            image: twitch,
            name: 'Twitch',
            class: 'social',
            link: 'https://www.twitch.tv/chiavtuber'
        },

        {
            image: youtube,
            name: 'YouTube',
            class: 'social',
            link: 'https://www.youtube.com/@chiavtuber'
        },

        {
            image: twitter,
            name: 'Twitter',
            class: 'social',
            link: 'https://twitter.com/chiavtuber'
        },

        {
            image: artStation,
            name: 'ArtStation',
            class: 'art',
            link: 'https://www.artstation.com/chiavtuber'
        },

        {
            image: tiktok,
            name: 'TikTok',
            class: 'social',
            link: 'https://www.tiktok.com/@chiavtuber'
        },

        {
            image: reddit,
            name: 'Reddit',
            class: 'art',
            link: 'https://www.reddit.com/user/chiavtuber/'
        }
    ];

    
    return (

        <footer className='footer'>
            <div className='main_one'>
                <div className='main_name'>
                    <div className='image'>
                        <img src='https://i.ibb.co/5LWkK7X/chia.jpg'/>
                        <span className='inner'></span>
                        
                    </div>
                    <h1 className='name'>@ChiaVTuber</h1>
                </div>

                <div className='email'>
                    <span className='contact'>Wanna talk business?</span>
                    <a href='mailto:chiavtuber@gmail.com'>

                        <span className='text'>Click here!</span>
                        <img src={gmail}/>
                        
                    </a>

                    <span className='extra'>
                        You can also send me an email to <strong>chiavtuber@gmail.com</strong>
                    </span>
                </div>
            </div>
            

            
            <div className='icons_footer'>
                <div className='socials'>
                    <h4>Connect</h4>
                    <ul className='socialMedia'>
                        {list.map((element)=>{
                            if(element.class == 'social'){
                                return(
                                    <li key = {element.name} className={element.class}>
                                        <a id = {element.name} target = '_blank'href= {element.link}>
                                            
                                            <img className= {element.name} src= {element.image}/>
                                        </a>
                                        
                                        
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                
                <div className='arts'>
                    <h4>Art</h4>
                    <ul className='Art'>
                        {list.map((element)=>{
                            if(element.class == 'art'){
                                return(
                                    <li key = {element.name} className={element.class}>
                                        <a id = {element.name} target = '_blank' href= {element.link}>
                                            
                                            <img className={element.name} src= {element.image}/>
                                        </a>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                
            </div>

            <div className='LawCredits'>
                <h1>Website made by <a target = '_blank' href = 'https://twitter.com/VALawliet'>@VALawliet</a></h1>
            </div>
        </footer>
    )
}

export {Footer}