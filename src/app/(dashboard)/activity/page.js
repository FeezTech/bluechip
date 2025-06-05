import MainActivityPage from "@/components/MainActivityPage";
import '../../../styles/activitypage.css';
import '../../../styles/mainbody.css';
import "../../../styles/profileHeader.css";
import '../../../styles/routingPage.css';

export default function campaign() {
    return (
        <>
            <section className="activityContainer">
                <MainActivityPage/>
            </section>
        </>
    )
}