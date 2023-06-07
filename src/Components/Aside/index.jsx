import './css/styles.css'

function Aside(){
    return(
        <aside className="lateral">
            <h2>Do you want to build a deeper connection with my community?</h2>
            <h3>If so, don't forget to join my discord server!</h3>
            <div className='discord_join'>
                <a target='_blank' href="https://discord.gg/uY5C6qJgqJ"><span>Join now!</span></a>
            </div>

            <h4>One of my friends told me you may be interested in some merch... Let's hope she didn't lie to me because here you have it!</h4>
            <div className='merch'>
                <a target='_blank' href='https://streamlabs.com/chiavtuber/merch'>Get yours now!</a>
            </div>

            <h5>Would you like to gift me something? That's so cute!</h5>
            <div className='gift'>
                <a target='_blank'href='https://throne.com/chiavtuber/wishlist'>Do it here!</a>
            </div>

            <h6>Wanna tip? I hear you asking where to do so? Look at your options!</h6>
            <div className='tips'>
                <div className='kofi'>
                    <a target= '_blank'href='https://ko-fi.com/chiavtuber'>Ko-fi</a>
                </div>

                <div className='streamlabs'>
                    <span className='inner'></span>
                    <a target='_blank' href='https://streamlabs.com/chiavtuber/tip'>Streamlabs</a>
                </div>
            </div>
            <div className="chia_image">
                <img src="https://i.ibb.co/XXFBRH2/chia1.png" alt="chia1" border="0"/>
            </div>

            
        </aside>
    )
}

export { Aside }
