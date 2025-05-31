import '../styles/mainbody.css'
import Feeds$Deals from './Feeds$Deals'
import Profile from './Profile'


function MainBody() {
  return (
    <main className="main-container">
        <Profile/>
        <Feeds$Deals/>
    </main>
  )
}

export default MainBody