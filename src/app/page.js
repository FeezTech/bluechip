import Image from 'next/image';
import '../styles/home.css';

export default function Home() {
    return(
        <div className="auth-container">
            <div className="left-container">
                <div className="top-container">
                    <div className="top-welcome-container">
                        <div className="logo-container">
                                <Image 
                                src="/images/bluechip-logo/Logo M 1.png" 
                                alt="Bluechip logo left vector" 
                                width={78}
                                height={56}
                                />
                        </div>
                        <div className="bluechip-container">
                            <span>Welcome to</span>
                            <span>Bluechip Technologies LTD</span>
                        </div>
                    </div>
                    <div className="bottom-welcome-container">
                        <p>Plan and manage your projects the best way possible, all in one platform. </p>
                    </div>
                </div>
                <div className="bottom-container">
                    <Image 
                        src="/images/bottom-vector/S_confirmation.svg"
                        alt="Bluechip logo right vector"
                        width={500}
                        height={500}
                        />
                </div>
            </div>
            <div className="right-container">
                <div className="login-container">
                    <div className="login-header">
                        <h2>Sign In to Bluewatch</h2>
                        <div className="create-account">.
                            <span className='new'>New Here? &nbsp; <a href="">Create an Account</a></span>
                        </div>
                    </div>
                    <form className="login-form">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className='signIn-container'>
                            <button type="submit" className="login-button">
                                Sign In
                            </button>
                            <button type="submit" className="google-signIn-button">
                                <Image
                                    src="/images/google-logo/google-icon 1.png"
                                    alt="Google icon"
                                    width={20}
                                    height={20}
                                />
                                Sign in with Google
                            </button>
                        </div>
                    </form>

                    <div className="footer-container">
                        <span className='footer-text'>Terms</span>
                        <span className='footer-text'>Plans</span>
                        <span className='footer-text'>Contact Us</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}