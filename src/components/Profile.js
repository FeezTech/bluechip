'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/profile.css';


function Profile() {
    const currentPath = usePathname();

  return (
    <section className='top-main-container'>
        <div className="profile-details">
            <Image 
                src='/images/profile/Avatar (1).png' 
                alt='Profile Picture'
                height={160}
                width={160}
            />
            <div className="profile-detail">
                <div className="user-info">
                    <div className="profile-name">
                        <h3>Brad Dennis</h3>
                        <Image
                            src='/images/profile/Icon.png'
                            alt='Profile Avatar'
                            width={21}
                            height={21}
                        />
                    </div>
                    <div className="user-details">
                        <div className="author">
                            <Image
                                src='/images/profile/Duotone.svg' 
                                alt='Author Avatar'
                                width={14}
                                height={14}
                            />
                            <span>Author</span>
                        </div>
                        <div className="location">
                            <Image
                                src='/images/profile/Duotone.png' 
                                alt='location duotone'
                                width={14}
                                height={14}
                            />
                            <span>Westwood, NJ</span>
                        </div>
                        <div className="contact">
                            <Image
                                src='/images/profile/Duotones.png' 
                                alt='contact duotone'
                                width={14}
                                height={14}
                            />
                            <span>sales@kthemes.io</span>
                        </div>
                    </div>
                </div>
                <div className="bottom-profile-details">
                    <div className="info">
                        <div className="earning">
                            <h3>$6,840</h3>
                            <span>Total Earnings</span>
                        </div>
                        <div className="referral">
                            <h3>179</h3>
                            <span>New Referrals</span>
                        </div>
                        <div className="deal">
                            <h3>39</h3>
                            <span>New Deals</span>
                        </div>
                    </div>
                    <div className="status">
                        <div className="status-info">
                            <div className="profile-status">Profile Status</div>
                            <div className="profile-percentage">68%</div>
                        </div>
                        <div className="status-rate">
                            <div className="rate1">
                                <Image
                                src= '/images/profile/Rectangle 260 (1).png'
                                alt= 'rate 1'
                                width={182}
                                height={5}
                            />
                            </div>

                            <div className="rate2">
                                <Image
                                src= '/images/profile/Rectangle 259 (1).png'
                                alt= 'rate 2'
                                width={118}
                                height={5}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="profile-navigation">
            <nav className='profile-nav-container'>
                <Link href="/profile" className={`profile-nav-link ${currentPath === '/profile' ? 'nav-active' : ''}`}>Overview</Link>
                <Link href="/project" className={`profile-nav-link ${currentPath === '/project' ? 'nav-active' : ''}`}>Projects</Link>
                <Link href="/campaign" className={`profile-nav-link ${currentPath === '/campaign' ? 'nav-active' : ''}`}>Campaigns</Link>
                <Link href="/document" className={`profile-nav-link ${currentPath === '/document' ? 'nav-active' : ''}`}>Documents</Link>
                <Link href="/followers" className={`profile-nav-link ${currentPath === '/followers' ? 'nav-active' : ''}`}>Followers</Link>
                <Link href="/activity" className={`profile-nav-link ${currentPath === '/activity' ? 'nav-active' : ''}`}>Activity</Link>
            </nav>
        </div>
    </section>
  )
}

export default Profile