import Image from 'next/image'
import '../styles/deals.css'

function Deals(props) {
  return (
    <section className="right-container">
        <div className="right-section">
            <div className="deals-card">
                <div className="top-deals-card">
                    <div className="deals-details">
                        <span>Deals</span>
                        <p>27 New Deals</p>
                    </div>
                    <div className="deals-option">
                        <button className='agent-btn' type='submit'>Agents</button>
                        <button className='client-btn' type='submit'>Clients</button>
                    </div>
                </div>
                <div className="bottom-deals-card">
                    <Image
                        src="/images/feed/Chart.png"
                        alt="chart picture"
                        width={450}
                        height={230}
                    />
                </div>
            </div>
        </div>
        
        <div className="contribution-details">
            <div className="project-header">
                <div className="project-details">
                    <span>Project Contributions</span>
                    <p>84 New Tasks & 29 Guides</p>
                </div>
                <div className="project-dropdown">
                    <Image
                        src="/images/feed/Dropdown.png"
                        alt="chart picture"
                        width={11}
                        height={11}
                    />
                </div>
            </div>
            {props.contributors && props.contributors.map((contributor, index) => (
                <div className="project-contributors" key={index}>
                    <div className="contributors">
                        <div className="contributors-details">
                            <div className="contributors-image">
                                <Image
                                    src={contributor.contributorImage || "/images/feed/fox-hub-2.png"}
                                    alt={contributor.contributorAlt || "aero picture"}
                                    width={contributor.contributorWidth || 36}
                                    height={contributor.contributorHeight || 34.6}
                                />
                            </div>
                            <div className="contributor-details">
                                <span>{contributor.contributorName || "Pipe Aerostar"}</span>
                                <p>{contributor.contributorDescription || "piper-aircraft-class.jsp"}</p>
                            </div>
                        </div>
                        <div className="contributor-rate">
                            <Image
                                    src={contributor.contributorRate || "/images/feed/Lbl 1 Grey L.png"}
                                    alt={contributor.contributorRateAlt || "aerorate picture"}
                                    width={contributor.contributorRateWidth || 26}
                                    height={contributor.contributorRateHeight || 26}
                                />
                        </div>
                    </div>
                </div>
            ))}
            <div className="project-collaborators">
                <p>
                    <em>Intive New .NET Collaborators</em> to creating great outstanding business to business .jsp modular class scripts
                 </p>
            </div>
        </div>
        <div className="upgrade">
            <div className="top-upgrade">
                <div className="upgrade-header">
                    <span>Upgrade to Pro</span>
                    <span>Create Limitless Deals</span>
                </div>
                <div className="upgrade-text">
                    <p>
                        Craft a headline that is both informative and will capture creating an outline, and checking facts
                    </p>
                </div>
                <div className="upgrade-btn">
                    <button className='btn' type='submit'>
                        Upgrade Now
                    </button>
                </div>
            </div>
            <div className="bottom-upgrade">
                <Image
                    src="/images/feed/3.png"
                    alt="upgrade picture"
                    width={406}
                    height={267.51}
                />
            </div>
        </div>
    </section>
  )
}

export default Deals