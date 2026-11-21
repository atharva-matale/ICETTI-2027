import { motion } from 'framer-motion';
import { AlertCircle, ExternalLink, Info, AlertTriangle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Registration() {
    return (
        <PageWrapper>
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Registration" subtitle="Register for ICETTI 2027 Conference" />
                </div>
            </section>

            <section style={{ paddingBottom: '96px' }}>
                <div className="container-narrow">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
                    >
                        {/* Registration Guidelines */}
                        <motion.div variants={itemVariants} className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))' }}>
                                    <Info size={28} style={{ color: '#38bdf8' }} />
                                </div>
                                <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fff' }}>Registration Guidelines</h3>
                            </div>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
                                {[
                                    'It is mandatory that at least one of the authors should register in order to include the paper in the technical programme.',
                                    'Maximum page limit of a paper is 6 pages in IEEE PDF Xpress compatible pdf format.',
                                    'The papers exceeding 6 pages (a maximum of 8 pages) should pay extra page charge of Rs.1000/- (Indian authors) or 20 USD (Foreign authors).',
                                ].map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#94a3b8', fontSize: '15px', lineHeight: 1.7 }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0ea5e9', marginTop: '10px', flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Payment Details - Coming Soon Notice */}
                        <motion.div variants={itemVariants} className="glass-card" style={{ border: '1px solid rgba(251,191,36,0.3)', background: 'linear-gradient(135deg, rgba(251,191,36,0.05), rgba(251,191,36,0.02))' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(251,191,36,0.08))', flexShrink: 0 }}>
                                    <AlertTriangle size={28} style={{ color: '#fbbf24' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fff' }}>Registration Fee & Payment Details</h3>
                                    <p style={{ color: '#fbbf24', fontSize: '13px', fontWeight: 500, marginTop: '4px' }}>Information will be announced soon</p>
                                </div>
                            </div>

                            <div style={{ borderRadius: '14px', padding: '24px', border: '1px solid rgba(251,191,36,0.2)', background: 'rgba(251,191,36,0.05)' }}>
                                <p style={{ color: '#e5e7eb', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
                                    The registration fee structure and payment options for ICETTI 2027 are currently being finalized by the organizing committee.
                                </p>
                                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                                    Detailed information including category-wise fees (Student, IEEE Member, Non-IEEE Member, Industry, Attendee), early bird discounts, payment methods, and bank details will be published here once confirmed.
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: '12px', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', background: 'rgba(14,165,233,0.15)' }}>
                                        <Info size={18} style={{ color: '#38bdf8' }} />
                                        <span style={{ color: '#38bdf8', fontWeight: 500, fontSize: '13px' }}>Stay Updated</span>
                                    </div>
                                    <span style={{ color: '#9ca3af', fontSize: '14px', flex: 1 }}>
                                        Check this page regularly or watch for official announcements via email and the conference website.
                                    </span>
                                </div>
                            </div>

                            {/* Contact for queries */}
                            <div style={{ marginTop: '24px', padding: '20px', borderRadius: '14px', border: '1px solid rgba(148,163,184,0.1)', background: 'rgba(148,163,184,0.03)' }}>
                                <h4 className="heading-font" style={{ fontWeight: 600, color: '#cbd5e1', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                                    <ExternalLink size={18} style={{ color: '#64748b' }} />
                                    For Urgent Queries
                                </h4>
                                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7, marginBottom: '8px' }}>
                                    If you have immediate questions about registration, please contact the organizing committee:
                                </p>
                                <p style={{ color: '#38bdf8', fontSize: '14px', fontWeight: 500, fontFamily: 'monospace' }}>
                                    icetti2027@siesgst.ac.in
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
