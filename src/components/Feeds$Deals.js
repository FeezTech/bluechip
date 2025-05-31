import '../styles/feeds$deals.css'
import Deals from './Deals'
import Feeds from './Feeds'

function Feeds$Deals() {
  return (
    <main className='feeds-deals-container'>
        <div className="left-section-feeds">
            <Feeds/>
            <Feeds
                name="Jane Doe"
                time="Today at 3:00 PM"
                profileImage="/images/feed/150-13 4.png"
                profileAlt="Jane's profile"
                middleImage="/images/feed/Photo.png"
                middleAlt="Custom post image"
                middleWidth={485}
                middleHeight={260}
                text="Here's a fully customizable post! that deals with paasing of props and fully working with rendering of component and displaying them in a dynamic way"
                messageCount={15}
                likeCount={80}
                messageIcon="/images/feed/Group-chat (1).png"
                likeIcon="/images/feed/Heart (1).png"
                clipIcon="/images/feed/Clip.png"
                locationIcon="/images/feed/Marker.png"
            />

            <Feeds
                name="Jane Doe"
                time="Today at 3:00 PM"
                profileImage="/images/feed/150-13 4.png"
                profileAlt="Jane's profile"
                text="Here's a fully customizable post! that deals with paasing of props and fully working with rendering of component and displaying them in a dynamic way"
                comments={[
                    {
                    commentImage: "/images/feed/150-20 2.png",
                    commentWidth: 42,
                    commentHeight: 42,
                    commentName: "Mr. Anderson",
                    commentDays: "1 day ago",
                    commentType: "reply",
                    commentText: "This is Mr. Anderson's comment."
                    },
                    {
                    commentImage: "/images/feed/150-12 1.png",
                    commentWidth: 42,
                    commentHeight: 42,
                    commentName: "Ms. Clara",
                    commentDays: "2 days ago",
                    commentType: "reply",
                    commentText: "Long before you sit down to put digital pen to paper."
                    }
                ]}
                messageCount={15}
                likeCount={80}
                messageIcon="/images/feed/Group-chat (1).png"
                likeIcon="/images/feed/Heart (1).png"
                clipIcon="/images/feed/Clip.png"
                locationIcon="/images/feed/Marker.png"
            />
            <Feeds/>
            <div className="more-feeds-btn">
                <button type='submit'>More Feeds</button>
            </div>
        </div>
        <div className="right-section-deals">
            <Deals
                contributors={[
                    {
                    contributorImage: "/images/feed/fox-hub-2.png",
                    contributorAlt: "Fox Hub Contributor",
                    contributorWidth: 36,
                    contributorHeight: 34.6,
                    contributorName: "Piper Aerostar",
                    contributorDescription: "piper-aircraft-class.jsp",
                    contributorRate: "/images/feed/Lbl 1 Grey L.png",
                    contributorRateAlt: "Fox Hub Rate",
                    contributorRateWidth: 26,
                    contributorRateHeight: 26
                    },
                    {
                    contributorImage: "/images/feed/Icon (1).png",
                    contributorAlt: "Cirrus Logo",
                    contributorWidth: 36,
                    contributorHeight: 36,
                    contributorName: "Cirrus SR22",
                    contributorDescription: "cirrus-aircraft.jsp",
                    contributorRate: "/images/feed/Lbl 1 Blue.png",
                    contributorRateAlt: "Cirrus Rating",
                    contributorRateWidth: 26,
                    contributorRateHeight: 26
                    },
                    {
                    contributorImage: "/images/feed/Icon (2).png",
                    contributorAlt: "Cessna Logo",
                    contributorWidth: 36,
                    contributorHeight: 36,
                    contributorName: "Beachcraft Baron",
                    contributorDescription: "baron-class.pyt",
                    contributorRate: "/images/feed/Lbl 1 Grey L.png",
                    contributorRateAlt: "Beachcraft Baron Rating",
                    contributorRateWidth: 26,
                    contributorRateHeight: 26
                    },
                    {
                    contributorImage: "/images/feed/Icon (3).png",
                    contributorAlt: "Cessna logo",
                    contributorWidth: 36,
                    contributorHeight: 36,
                    contributorName: "Cessna SF150",
                    contributorDescription: "cessna-aircraft-class.jsp",
                    contributorRate: "/images/feed/Lbl 1 Grey L.png",
                    contributorRateAlt: "Cessna SF150 Rating",
                    contributorRateWidth: 26,
                    contributorRateHeight: 26
                    }
                ]}
                />
        </div>
    </main>
  )
}

export default Feeds$Deals