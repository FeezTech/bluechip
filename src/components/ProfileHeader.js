import Image from 'next/image';
import '../styles/profileHeader.css';


function ProfileHeader() {
  return (
    <header className="header">
        <div className="main-header">
            <div className="left-main-header">
                <Image
                    src="/images/header/Logo 11 1.png"
                    alt="bluechip logo"
                    width={64}
                    height={56}
                />
                <nav className='main-nav-container'>
                    <a href="/account" className='main-nav-link nav-active'>Account</a>
                    <a href="/reports" className='main-nav-link'>Reports</a>
                    <a href="/forms" className='main-nav-link'>Forms</a>
                    <a href="/roles" className='main-nav-link'>Roles</a>
                    <a href="/help-center" className='main-nav-link'>Help Center</a>
                </nav>
            </div>
            <div className="right-main-header">
                
                <Image
                    src="/images/header/Cart.svg"
                    alt="Cart picture"
                    width={27}
                    height={24.3}
                />

                <Image
                    src="/images/header/Layout-4-blocks.png"
                    alt="Layout-block picture"
                    width={29}
                    height={29}
                />

                <Image
                    src="/images/header/Equalizer.png"
                    alt="Equalizer picture"
                    width={29}
                    height={27.12}
                />

                <Image
                    src="/images/header/Group-chat.png"
                    alt="Group-chat picture"
                    width={25}
                    height={22.5}
                />

                <Image
                    src="/images/header/Avatar.png"
                    alt="Avatar picture"
                    width={129}
                    height={40}
                />
            </div> 
        </div>
        <div className="sub-header">
            <nav className='sub-nav-container'>
                <a href="/profile" className='sub-nav-link'>Profile</a>
                <a href="/billing" className='sub-nav-link'>Billing</a>
                <a href="/orders" className='sub-nav-link'>Orders
                <Image 
                    src="/images/header/Angle-down.png" 
                    alt='angle dropdown picture'
                    width={14}
                    height={14}
                />
                </a>
                <a href="/security" className='sub-nav-link'>Security</a>
                <a href="/referrals" className='sub-nav-link'>Referrals</a>
                <a href="/api-keys" className='sub-nav-link'>Api keys</a>
                <a href="/statement" className='sub-nav-link'>Statement</a>
            </nav>
        </div>
    </header>
  )
}

export default ProfileHeader