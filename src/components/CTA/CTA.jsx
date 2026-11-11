import { useEffect, useRef } from 'react';
import './CTA.css';
import Button from '../Button/Button';
import CalBookingButton from '../CalBookingButton/CalBookingButton';

function CTA() {
    const ctaRef = useRef(null);

    useEffect(() => {
        const cta = ctaRef.current;
        if (!cta) return;

        const handleMouseMove = (e) => {
            const rect = cta.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            cta.style.setProperty('--mouse-x', `${x}%`);
            cta.style.setProperty('--mouse-y', `${y}%`);
        };

        cta.addEventListener('mousemove', handleMouseMove);
        return () => cta.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="thin-cta" id="contact" ref={ctaRef}>
            <div className="thin-cta-glow"></div>
            <div className="thin-cta-content">
                <div className="thin-cta-left">
                    <span className="thin-cta-status">
                        <span className="pulse-dot"></span>
                        Available for projects
                    </span>
                    <span className="thin-cta-text mono">Let's craft something exceptional</span>
                </div>
                
                <div className="thin-cta-buttons">
                    <Button 
                        href="mailto:hello@creativecurrent.com" 
                        variant="ghost" 
                        className="thin-cta-btn secondary" 
                        magnetic
                        title="Primary inquiry email"
                    >
                        <i className="ri-mail-line" style={{ marginRight: '6px' }}></i>
                        Start Project
                    </Button>
                    <Button 
                        href="mailto:contact@creativecurrent.com" 
                        variant="ghost" 
                        className="thin-cta-btn secondary" 
                        magnetic
                        title="Alternative contact email"
                    >
                        <i className="ri-mail-send-line" style={{ marginRight: '6px' }}></i>
                        Alt Contact
                    </Button>
                    <CalBookingButton variant="primary" className="thin-cta-btn primary" showFreeBadge={true}>
                        Book Call
                    </CalBookingButton>
                </div>
            </div>
        </section>
    );
}

export default CTA;
