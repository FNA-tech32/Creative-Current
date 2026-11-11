import { useEffect, useRef, useState } from 'react'
import './Footer.css'

function Footer() {
    const footerRef = useRef(null)
    const [copiedEmail, setCopiedEmail] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = footerRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedEmail(type);
        setTimeout(() => setCopiedEmail(''), 2000);
    }

    return (
        <footer className="footer" id="contact-details" ref={footerRef}>
            <div className="container footer-container reveal">
                
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-top-left">
                        <div className="footer-brand-title">
                            <span className="footer-brand-name">Creative Current</span>
                            <span className="footer-brand-dot">•</span>
                            <span className="footer-tagline mono">Visual Transformation Studio</span>
                        </div>
                        <p className="footer-creator">© 2026 Creative Current. All rights reserved.</p>
                        
                        <div className="footer-actions">
                            <button 
                                onClick={() => handleCopy('hello@creativecurrent.com', 'primary')} 
                                className="footer-btn footer-btn-outline"
                                title="Copy primary email"
                            >
                                <i className={copiedEmail === 'primary' ? "ri-check-line" : "ri-mail-line"}></i> 
                                {copiedEmail === 'primary' ? "Primary Copied!" : "hello@creativecurrent.com"}
                            </button>

                            <button 
                                onClick={() => handleCopy('contact@creativecurrent.com', 'alt')} 
                                className="footer-btn footer-btn-outline"
                                title="Copy alternative contact email"
                            >
                                <i className={copiedEmail === 'alt' ? "ri-check-line" : "ri-mail-send-line"}></i> 
                                {copiedEmail === 'alt' ? "Alt Copied!" : "Alt: contact@creativecurrent.com"}
                            </button>
                        </div>
                    </div>

                    <div className="footer-top-right">
                        <div className="footer-contact-channels">
                            <div className="footer-contact-item">
                                <span className="mono contact-meta-label">DIRECT PHONE / WHATSAPP</span>
                                <a href="tel:+15550192834" className="footer-contact-link mono">
                                    <i className="ri-phone-line"></i> +1 (555) 019-2834
                                </a>
                            </div>
                            <div className="footer-contact-item">
                                <span className="mono contact-meta-label">INQUIRIES & BOOKINGS</span>
                                <a href="mailto:contact@creativecurrent.com" className="footer-contact-link mono">
                                    <i className="ri-calendar-check-line"></i> contact@creativecurrent.com
                                </a>
                            </div>
                        </div>

                        <div className="footer-socials">
                            <a href="https://x.com/creativecurrent" target="_blank" rel="noopener noreferrer" className="social-circle" title="X (Twitter)">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                            <a href="https://www.youtube.com/@creativecurrent" target="_blank" rel="noopener noreferrer" className="social-circle" title="YouTube">
                                <i className="ri-youtube-line"></i>
                            </a>
                            <a href="https://www.instagram.com/creativecurrent" target="_blank" rel="noopener noreferrer" className="social-circle" title="Instagram">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://t.me/creativecurrent" target="_blank" rel="noopener noreferrer" className="social-circle" title="Telegram">
                                <i className="ri-telegram-line"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-badges">
                        <span className="footer-badge">
                            <span className="badge-label mono">BUILT WITH</span> <i className="ri-reactjs-line" style={{color: '#61dafb', fontSize: '14px'}}></i> React.js
                        </span>
                        <span className="footer-badge">
                            <span className="badge-label mono">STYLED WITH</span> 
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#38bdf8"/>
                            </svg> Tailwind CSS
                        </span>
                        <span className="footer-badge">
                            <span className="badge-label mono">DEPLOYED ON</span> <i className="ri-triangle-fill" style={{color: '#fff', fontSize: '12px'}}></i> Vercel
                        </span>
                    </div>

                    <div className="footer-location mono">
                        <i className="ri-shield-check-line" style={{ color: 'var(--accent)', marginRight: '6px' }}></i>
                        Official Creative Current Website
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
