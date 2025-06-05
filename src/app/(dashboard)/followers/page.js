import MainFollowersPage from "@/components/MainFollowersPage";
import '../../../styles/mainbody.css';
import "../../../styles/profileHeader.css";
import '../../../styles/routingPage.css';

export default function campaign() {
    return (
        <>
            <section className="routingPage">
                <MainFollowersPage/>
            </section>
        </>
    )
}