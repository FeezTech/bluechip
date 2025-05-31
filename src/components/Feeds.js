import Image from "next/image";
import '../styles/feeds.css';

function Feeds(props) {
  return (
    <section className="left-section">
        <div className="profile-card">
            <div className="profile-info">
                <Image
                    src={props.profileImage || "/images/feed/150-13 4.png"}
                    alt={props.profileAlt || "card picture"}
                    width={props.profileWidth || 44}
                    height={props.profileHeight || 44}
                    className="img"
                />
                <div className="statusCard">
                    <span>{props.name || "Brad Dennis"}</span>
                    <p>{props.time || "Yesterday at 5:06 PM"}</p>
                </div>
            </div>
            <div className="dropdown">
                <Image
                    src={props.dropdownImage || "/images/feed/Dropdown.png"}
                    alt={props.dropdownAlt || "drop down picture"}
                    width={props.dropdownWidth || 11}
                    height={props.dropdownHeight || 11}
                />
            </div>
        </div>

        {/* Optional middle image */}
        {props.middleImage && (
            <div className="post-image">
                <Image
                    src={props.middleImage}
                    alt={props.middleAlt || "post content"}
                    width={props.middleWidth || 500}
                    height={props.middleHeight || 300}
                    style={{ borderRadius: '8px' }}
                />
            </div>
        )}

        <div className="text-card">
            <p>
                {props.text || "Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post"}
            </p>
        </div>
      
        {props.comments && props.comments.map((comment, index) => (
            <div className="comment-card" key={index}>
                <div className="comment-profile-image">
                <Image
                    src={comment.commentImage || "/images/feed/default.png"}
                    alt={comment.commentAlt || "comment profile"}
                    width={comment.commentWidth || 44}
                    height={comment.commentHeight || 44}
                    className="img"
                />
                </div>
                <div className="comment-container">
                    <div className="comment-profile-info">
                        <div className="comment-name">{comment.commentName || "Anonymous"}</div>
                        <div className="comment-days">{comment.commentDays || "Unknown time"}</div>
                        <div className="comment-type">{comment.commentType || "comment"}</div>
                    </div>
                    <div className="comment-text">
                        <p>{comment.commentText || "No comment text"}</p>
                    </div>
                </div>
            </div>
        ))}

        <div className="tweet-repost-card">
            <div className="message">
                <Image
                    src={props.messageIcon || "/images/feed/Group-chat (1).png"}
                    alt={props.messageAlt || "group chat picture"}
                    width={props.messageWidth || 17}
                    height={props.messageHeight || 17}
                />
                <span>
                    {props.messageCount || 24}
                </span>
            </div>
            <div className="like">
                <Image
                    src={props.likeIcon || "/images/feed/Heart.png"}
                    alt={props.likeAlt || "heart picture"}
                    width={props.likeWidth || 21}
                    height={props.likeHeight || 21}
                />
                <span>
                    {props.likeCount || 75}
                </span>
            </div>
        </div>

        <hr />

        <div className="response-card">
            <div className="reply-input">
                <input type="text" name="text" id="text" placeholder="Reply..." />
            </div>
            <div className="share-location">
                <Image
                    src={props.clipIcon || "/images/feed/Clip.png"}
                    alt={props.clipAlt || "share picture"}
                    width={props.clipWidth || 18}
                    height={props.clipHeight || 18}
                />
                <Image
                    src={props.locationIcon || "/images/feed/Marker.png"}
                    alt={props.locationAlt || "location picture"}
                    width={props.locationWidth || 19}
                    height={props.locationHeight || 19}
                />
            </div>
        </div>
        
    </section>
  );
}

export default Feeds;
