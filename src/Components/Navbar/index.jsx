import './css/styles.css'
import twitch from '../../img/twitch-icon.svg'
import youtube from '../../img/youtube-svgrepo-com.svg'
import twitter from '../../img/twitter-seeklogo.com.svg'
import { NavLink } from 'react-router-dom'

function Navbar(){

    let logosMain = [
        {
            image: twitch,
            name: 'Twitch',
            to: '/twitch'

        },

        {
            image: youtube,
            name: 'YouTube',
            to: '/yt'
        },

        {
            image: twitter,
            name: 'Twitter',
            to: 'twt'
        },

        {
            image: youtube,
            name: 'VOD Archive',
            to: 'yt2'
        }

    ]
    return(
        <nav className="mainbar">
            <ul className="left">
                <li className='image'>
                    
                    <img src='https://i.ibb.co/5LWkK7X/chia.jpg'/>
                    <span className='inner'></span>
                    <div className='credits'>Art by <a href = "https://twitter.com/tyuna_24">@tyuna_24</a></div>
                
                </li>

                <li>
                    <h1>@ChiaVTuber</h1>
                </li>
                
            </ul>

            <ul className="right">
                {logosMain.map((logo)=>{
                    if(logo.name == 'Twitter'){
                        return(
                            <li key= {logo.name}className='link'>
                                <NavLink to={logo.to} className='main_link'>
                                    <span className='text'>
                                        {logo.name}
                                    </span>
                                    <img src={logo.image} id='twitter'/>
                                </NavLink>
                                    
                                
                                
                            </li>
                        )
                    }
                    return(
                        <li key= {logo.name}className='link'>
                            <NavLink to={logo.to}className='main_link'>
                                <span className='text'>
                                        {logo.name}
                                </span>
                                <img src={logo.image}/>
                            </NavLink>
                                
                            
                            
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export {
    Navbar
}