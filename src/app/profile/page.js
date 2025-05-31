import MainBody from "@/components/MainBody";
import NavigationRoute from "@/components/NavigationRoute";
import ProfileHeader from "@/components/ProfileHeader";
import "../../styles/profileHeader.css";

export default function ProfilePage() {
    return (
        <>
        <main className="profile-global-container">
            <ProfileHeader/>
            <NavigationRoute/>
            <MainBody/>
        </main>
        </>
    )
}