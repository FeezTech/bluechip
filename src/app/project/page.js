import MainProjectPage from "@/components/MainProjectPage";
import Profile from "@/components/Profile";
import '../../styles/mainbody.css';
import "../../styles/profileHeader.css";
import '../../styles/routingPage.css';
import NavigationRoute from './../../components/NavigationRoute';
import ProfileHeader from './../../components/ProfileHeader';

export default function project() {
    return (
        <>
            <main className="profile-global-container">
                <ProfileHeader/>
                <NavigationRoute/>
                <main className="main-container">
                    <Profile/>
                    <section className="routingPage">
                        <MainProjectPage/>
                    </section>
                </main>
            </main>
        </>
    )

}