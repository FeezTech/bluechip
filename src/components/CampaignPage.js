import Image from "next/image";
import '../styles/campaignpage.css';

function CampaignPage(props) {
  return (
    <section className="campaign-container">
        <div className="campaign-info">
            <div className="campaign-name-image">
                <div className="campaignImage">
                    <Image
                    src={props.iconSrc || "/images/campaign/Icon (8).png"}
                    alt={props.iconAlt || "campaign image"}
                    width={46}
                    height={46}
                    />
                </div>
                <div className="campaign-name">
                    <span>{props.campaignName || "Twitch Ads"}</span>
                </div>
            </div>
            <div className="campaign-dropdow-icon">
                <Image
                    src={props.dropdownIconSrc || "/images/campaign/Dropdown (1).png"}
                    alt={props.dropdownIconAlt || "campaign dropdown"}
                    width={11}
                    height={11}
                />
            </div>
        </div>

        <div className="campaign-followers">
            <span>{props.followers || "608K"}</span>
        </div>

        <div className="campaign-rate">
            <div className="campaign-rate-image">
                <Image
                    src={props.rateIconSrc || "/images/campaign/Up-right.png"}
                    alt={props.rateIconAlt || "campaign-upright"}
                    width={20}
                    height={20}
                />
            </div>
            <div className="campaign-rate-percent">
                <span>{props.rateChange || "+28.5%"}</span>
                <p>{props.rateText || "more spending"}</p>
            </div>
        </div>
    </section>
  );
}

export default CampaignPage;
