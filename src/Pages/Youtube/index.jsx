import './css/styles.css'
function YouTube({ytVids1}){
    return(
        <section className="videos_section">
            <h2>Check out my most recent videos on Youtube!</h2>
            <div className="videos">

                
                {ytVids1?.videos?.map((video)=>{
                        let views_num = 0
                    if(video.number_of_views == null){
                        views_num = 0
                    }else{
                        let views = video.number_of_views.replace(' views', '');
                        views_num = parseInt(views);
                    }
                    
                    if(views_num >= 180){
                        if(video.title.length > 24 ){
                            return(
                                <div key = {video.title}className="video">
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                                    <span className="video_text long">{video.title}</span>
                                </div>
                            )
                        }
                        return(
                            <div key = {video.title}className="video">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                                 <span className="video_text">{video.title}</span>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </section>
    )
}

export {YouTube}