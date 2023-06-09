import './css/styles.css'
function Twitter({tweets}){

    tweets?.data?.user?.result?.timeline_v2?.timeline?.instructions[1]?.entries.splice(3, 6);
    
    return(
        <section className="twitter_section">
            <h2>Take a look at my recent tweets!</h2>
                
            <div className="tweets">
                
                {tweets?.data?.user?.result?.timeline_v2?.timeline?.instructions[1]?.entries.map(
                        (tweet)=>{
                            return (
                                <iframe key = {tweet.sortIndex} src={`https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2FChiaVTuber%2Fstatus%2F${tweet.sortIndex}`}></iframe>
                            )
                        }
                    )}

                <button className= 'follow'>
                    <a href= 'https://twitter.com/chiavtuber'>You can see more here!</a>
                </button>
            </div>

            
        </section>

    )
}

export {Twitter}