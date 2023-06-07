import './css/styles.css'

function Youtube2({ytVids2}){
    return(
        <section className="videos_section">
            <h2>Check out my most recent videos on Youtube!</h2>
            <div className="videos">

                
                {ytVids2?.videos?.map((video)=>{
                    let views = video.number_of_views.replace(' views', '');
                    let views_num = parseInt(views);
                    if(views_num >= 5 ){
                        if(video.title.length > 24 ){
                            return(
                                <div key = {video.title}className="video">
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <span className="video_text long">{video.title}</span>
                                </div>
                            )
                        }
                        return(
                            <div key = {video.title}className="video">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                 <span className="video_text">{video.title}</span>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </section>
    )
}

export {Youtube2}