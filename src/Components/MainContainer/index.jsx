import './css/styles.css'

function MainContainer({children}){
    return(
        <main className="main_container">
            {children}
        </main>
    )
}

export {MainContainer}