// app/dashboard/layout.js
import NavigationRoute from "@/components/NavigationRoute";
import Profile from "@/components/Profile";
import ProfileHeader from "@/components/ProfileHeader";
import "../../styles/mainbody.css";
import "../../styles/profileHeader.css";
import "../../styles/routingPage.css";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <main className="profile-global-container">
      <ProfileHeader />
      <NavigationRoute />
      <main className="main-container">
        <Profile />
        {children}
      </main>
    </main>
  );
}
