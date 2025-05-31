import Image from 'next/image';
import '../styles/followerspage.css';

function FollowersPage(props) {
    const isFollow = (props.followerStatus || "").toLowerCase() === "follow";
    const followButtonClass = `follow-btn ${isFollow ? "follow-grey" : "follow-blue"}`;
    const followTextClass = isFollow ? "follow-text-grey" : "follow-text-white";


  
    return (
        <section className="followers-container">
            <div className="followers-details">
                <div className="follower-image">
                    <Image
                        src={props.followerImage || "/images/followers/Header.png"}
                        alt={props.followerImageAlt || "follower image"}
                        width={props.followerImageWidth || 64}
                        height={props.followerImageHeight || 64}
                    />
                </div>

                <div className="follower-info">
                    <div className="follower-name">
                        <span>{props.followerName || "Karina Clark"}</span>
                    </div>
                    <div className="follower-role">
                        <p>{props.followerRole || "Art Director at Novica Co."}</p>
                    </div>
                </div>

                <div className="follower-deal">
                    <div className="average-deal">
                        <span>{props.followerAvgDeal || "$14,560.80"}</span>
                        <p>Avg. Deal</p>
                    </div>
                    <div className="total-deal">
                        <span>{props.followerTotalDeal || "$236,400.00"}</span>
                        <p>Deal</p>
                    </div>
                </div>

                <div className="follower-following">
                    <button className={followButtonClass}>
                        <div className="tick-icon">
                            <Image
                                src={props.followerCheckIcon || "/images/followers/Checked.png"}
                                alt={props.followerCheckIconAlt || "checked icon"}
                                width={props.followerCheckIconWidth || 12}
                                height={props.followerCheckIconHeight || 12}
                            />
                        </div>
                        <div className="following-text">
                            <span className={followTextClass}>{props.followerStatus || "Following"}</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FollowersPage;
