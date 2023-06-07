
function Twitter({tweets}){

    tweets?.data?.user?.result?.timeline_v2?.timeline?.instructions[1]?.entries.splice(3, 6);
    
    return(
        <section className="twitter_section">
            <h2>Take a look at my recent tweets!</h2>
                {tweets?.data?.user?.result?.timeline_v2?.timeline?.instructions[1]?.entries.map(
                    (tweet)=>{
                        return (
                            <iframe src={`https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2FChiaVTuber%2Fstatus%2F${tweet.sortIndex}`}></iframe>
                        )
                    }
                )}
            <div className="tweets">
                
            </div>
        </section>

    )
}

export {Twitter}