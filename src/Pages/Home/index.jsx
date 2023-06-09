import './css/styles.css'
import twitch from '../../img/twitch-icon.svg'
import youtube from '../../img/youtube-svgrepo-com.svg'
import twitter from '../../img/twitter-seeklogo.com.svg'
import artStation from '../../img/art-station.svg'
import tiktok from '../../img/tiktok.svg'

function Home(){

    const links = [
        {
            link_name: 'YouTube',
            link: 'https://www.youtube.com/@chiavtuber/featured',
            image: youtube,
            class: 'yt'
        },

        {
            link_name: 'Twitch',
            link: 'https://www.twitch.tv/chiavtuber',
            image: twitch,
            class: 'twitch'
        },

        {
            link_name: 'Twitter',
            link: 'https://twitter.com/chiavtuber',
            image: twitter,
            class: 'twt'
        },

        {
            link_name: 'VOD Archive',
            link: 'https://www.youtube.com/@ChiaChronicles',
            image: youtube,
            class: 'yt'
        },

        {

            link_name: 'ArtStation',
            link: 'https://www.artstation.com/chiavtuber',
            image: artStation,
            class: 'art'
        },

        {
            link_name: 'TikTok',
            link: 'https://www.tiktok.com/@chiavtuber',
            image: tiktok,
            class: 'tk'


        }
    ]

    return(
        <section className="home_section">
            <h2>Hello there! Welcome to Chia's website!</h2>
            <div className='image'>
                <a target = '_blank'href='https://www.reddit.com/r/VirtualYoutubers/comments/110l9cu/i_hope_youll_accept_my_restraining_order/'>
                    <img src='https://i.ibb.co/FB5Gk3f/chia-order.webp'/>
                </a>
                
            </div>
            <h3>Wanna know a little more about myself?</h3>
            <p>Well, I'm hamster VTuber from Canada who likes to play games and draw. Wanna join me on my journey?</p>
            <q cite='https://www.youtube.com/@chiavtuber/about'>Like Ratatouille but f@#!*%& up</q>
            <p>– Some Hamster Girl</p>

            <div className='platforms'>
                <h4>Here are some of the places in which you can find me!</h4>
                <ul className='platforms_links'>
                    {links.map((link)=>{
                        return(
                            <li key = {link.link_name} className='link'>
                                <a target='_blank' href={link.link} className={link.class}>
                                    <span className='text'>{link.link_name}</span>
                                    <img src={link.image}/>    
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='image'>
                <img src="https://i.ibb.co/KqffwyW/artstation-chia.jpg" alt="artstation-chia" border="0"/>
            </div>
        </section>
    )
}

export {Home}