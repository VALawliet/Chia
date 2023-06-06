import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Twitter } from './Pages/Twitter';
import { YouTube } from './Pages/Youtube';
import { Twitch } from './Pages/Twitch';
import { NotFound } from './Pages/NotFound';
import { Navbar } from './Components/Navbar';
import { Aside } from './Components/Aside';
import { MainContainer } from './Components/MainContainer';

function AppRoutes(){
  let routes = useRoutes([
    {
      path: '/', element: <Home/>
    },

    {
      path: '/twt', element: <Twitter/>
    }, 

    {
      path: '/yt', element: <YouTube/>
    },

    {
      path: '/yt2', element: <div></div>
    },

    {
      path: '/twitch', element: <Twitch/>
    },
    {
      path: '/*', element: <NotFound/>
    }
  ]);

  return routes
}

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <MainContainer>
        <Aside/>
        <AppRoutes/>
      </MainContainer>
      
    </BrowserRouter>
  )
}

export default App;
