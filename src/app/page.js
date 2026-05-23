import React from "react";
import Link from "next/link";
import { Trees, Trophy, Target, ArrowRight, ShieldCheck, Mail, Users, ArrowDown } from "lucide-react";
import Crest from "../components/Crest";
import Countdown from "../components/Countdown";
import Forms from "../components/Forms";
import Kits from "../components/Kits";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="top" className={styles.container}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/#top" className={styles.logoGroup}>
            <Crest width="36" height="42" />
            <span className={styles.brandName}>IRON FOREST <span className={styles.fcGold}>FC</span></span>
          </Link>
          <nav className={styles.nav}>
            <a href="#story" className={styles.navLink}>Our Story</a>
            <a href="#kits" className={styles.navLink}>Official Kits</a>
            <a href="#timeline" className={styles.navLink}>Roadmap</a>
            <a href="#faqs" className={styles.navLink}>FAQs</a>
          </nav>
          <a href="#signup" className={`${styles.headerCta} glass-panel`}>
            Join the Forest
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroGrid}></div>
          <div className={styles.heroGlow}></div>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-fade-in-up`}>
              <span className={styles.badgePulse}></span> TARGETING USL LEAGUE TWO • INAUGURAL SEASON 2027
            </div>
            
            <div className={`${styles.heroLayout} animate-fade-in-up animation-delay-100`}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  THE FOREST <br />
                  <span className={styles.goldText}>IS RISING</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  A new era of soccer is coming to Huntsville, Texas. We&apos;re building a pre-professional club to unite fans, develop elite local talent, and represent East Texas with pride.
                </p>
                <div className={styles.heroActions}>
                  <a href="#signup" className={styles.primaryCta}>
                    Secure Fan Updates <ArrowRight size={18} />
                  </a>
                  <a href="#story" className={styles.secondaryCta}>
                    Learn More <ArrowDown size={18} />
                  </a>
                </div>
              </div>
              <div className={styles.heroCrestWrapper}>
                <Crest className={styles.heroCrest} width="280" height="340" />
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className={styles.countdownSection}>
          <div className={styles.sectionInner}>
            <Countdown />
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className={styles.storySection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} accent-title`}>OUR STORY</h2>
              <p className={styles.sectionSubtitle}>Uniting the Huntsville community through the beautiful game.</p>
            </div>

            <div className={styles.storyGrid}>
              <div className={`${styles.storyTextCard} glass-panel`}>
                <h3 className={styles.cardTitle}><Trees className={styles.goldText} size={20} /> Deep Piney Roots</h3>
                <p>
                  In the historic town of Huntsville, Texas—where the legacy of General Sam Houston still stands strong—Iron Forest FC is planting seeds for a new sporting tradition. From the dense piney woods of the Sam Houston National Forest to the heart of downtown, our club represents the pride, resilience, and spirit that define East Texas.
                </p>
                <p>
                  We are creating a gathering place where families, students, local businesses, and fans from all walks of life can belong. The home of General Sam Houston is now proudly the home of Iron Forest FC.
                </p>
              </div>

              <div className={`${styles.storyTextCard} glass-panel`}>
                <h3 className={styles.cardTitle}><Trophy className={styles.goldText} size={20} /> CEO Lou Fiscella&apos;s Vision</h3>
                <p>
                  At the helm of Iron Forest FC is CEO Lou Fiscella, a seasoned corporate executive with over two decades of strategic sales leadership and community advocacy. Lou&apos;s vision is to build a sustainable pre-professional sports organization that unites Huntsville and provides a professional platform for local development.
                </p>
                <p>
                  Under Lou&apos;s executive leadership, the club is establishing a premier business and sporting structure. By recruiting an elite coaching staff, forming strong local partnerships, and providing collegiate stars and prospects with a true pathway through targeted entry into USL League Two, Lou is committed to making Huntsville a hallmark market for American soccer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Official Kits Showcase */}
        <Kits />

        {/* Roadmap / Timeline Section */}
        <section id="timeline" className={styles.timelineSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} accent-title`}>THE ROAD TO KICKOFF</h2>
              <p className={styles.sectionSubtitle}>Track our milestones as we prepare to take the pitch in Summer 2027.</p>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={`${styles.timelineContent} glass-panel`}>
                  <span className={styles.timelineDate}>FALL 2026</span>
                  <h4>Official Logo & Crest Reveal</h4>
                  <p>Unveiling our final club crest, official colors, and opening the online fan shop for founding member merchandise.</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={`${styles.timelineContent} glass-panel`}>
                  <span className={styles.timelineDate}>WINTER 2026</span>
                  <h4>Jersey Launch & Venue Announcement</h4>
                  <p>Releasing details of our home stadium partner in Huntsville. <em>Update: Official home, away, and third kits have been launched! See the showcase above.</em></p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={`${styles.timelineContent} glass-panel`}>
                  <span className={styles.timelineDate}>SPRING 2027</span>
                  <h4>Open Tryouts & Player Signings</h4>
                  <p>Our newly appointed coaching staff hosts open evaluations for local and college players, aiming to finalize our inaugural USL League Two roster.</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={`${styles.timelineContent} glass-panel`}>
                  <span className={styles.timelineDate}>SUMMER 2027</span>
                  <h4>Inaugural Matchday Kickoff</h4>
                  <p>The first official match in Huntsville, TX. History is made as pre-professional soccer debuts in the Forest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Forms Section */}
        <section id="signup" className={styles.signupSection}>
          <div className={styles.sectionInner}>
            <div className={styles.signupLayout}>
              <div className={styles.signupIntro}>
                <h2 className={`${styles.signupTitle} accent-title-left`}>CLAIM YOUR PLACE IN THE FOREST</h2>
                <p className={styles.signupText}>
                  Whether you are a fan chanting in the stands, a player hungry to prove yourself on the pitch, or a business looking to connect with thousands of local supporters—there is a spot for you in our camp.
                </p>
                <div className={styles.bulletPoints}>
                  <div className={styles.bullet}>
                    <ShieldCheck className={styles.bulletIcon} size={20} />
                    <div>
                      <h5>First-Access season tickets</h5>
                      <p>Founding members get priority booking and discounts.</p>
                    </div>
                  </div>
                  <div className={styles.bullet}>
                    <Users className={styles.bulletIcon} size={20} />
                    <div>
                      <h5>Player tryout invitations</h5>
                      <p>Get immediate dates and registration details when tryouts open.</p>
                    </div>
                  </div>
                  <div className={styles.bullet}>
                    <Target className={styles.bulletIcon} size={20} />
                    <div>
                      <h5>Sponsorship Packages</h5>
                      <p>Custom stadium, kit, and digital partnership options.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.signupFormContainer}>
                <Forms />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className={styles.faqsSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} accent-title`}>FREQUENTLY ASKED QUESTIONS</h2>
              <p className={styles.sectionSubtitle}>Everything you need to know about Huntsville&apos;s targeted entry into USL League Two.</p>
            </div>

            <div className={styles.faqsGrid}>
              <div className={`${styles.faqCard} glass-panel`}>
                <h4>Why is Iron Forest FC targeting USL League Two?</h4>
                <p>
                  USL League Two (USL2) is the leader in pre-professional soccer in North America, serving as the primary pathway for elite college players to transition into professional leagues (like MLS, USL Championship, and international leagues) while maintaining collegiate eligibility. We are actively working toward bringing a USL2 franchise to the Huntsville community.
                </p>
              </div>

              <div className={`${styles.faqCard} glass-panel`}>
                <h4>When does the season take place?</h4>
                <p>
                  If approved for entry, our matches would be played during the summer months, typically running from mid-May through mid-July, with playoffs concluding in early August. This schedule allows collegiate athletes to play during their summer breaks.
                </p>
              </div>

              <div className={`${styles.faqCard} glass-panel`}>
                <h4>Where will Iron Forest FC play matches?</h4>
                <p>
                  Huntsville venue details, ticket prices, and stadium coordinates are currently being finalized. We will announce our official home venue in Winter 2026. Subscribing as a Fan ensures you receive the announcement first.
                </p>
              </div>

              <div className={`${styles.faqCard} glass-panel`}>
                <h4>How can local players get evaluated for the squad?</h4>
                <p>
                  Pre-registration for scouting is open! Simply click the &quot;Players&quot; tab in our sign-up section and enter your details. We will email you with registration forms, dates, and locations for our Spring 2027 open tryout camps hosted by our coaching staff.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Crest width="40" height="48" />
            <div>
              <h4 className={styles.footerBrandName}>IRON FOREST FC</h4>
              <p className={styles.footerBrandTagline}>Home of General Sam Houston, Home of Iron Forest FC.</p>
            </div>
          </div>
          <div className={styles.footerSocials}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <p>© {new Date().getFullYear()} Iron Forest FC. All Rights Reserved. Built for the Huntsville, Texas community.</p>
        </div>
      </footer>
    </div>
  );
}
