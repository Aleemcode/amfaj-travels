import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  FileText,
  HelpCircle,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Play,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const whatsappMessage =
  "Assalamu alaykum, I want to start registration for AMFAJ September Umrah.";
const whatsappHref = `https://wa.me/2348069243134?text=${encodeURIComponent(whatsappMessage)}`;

const packages = [
  {
    id: "nigeria",
    title: "Nigeria Umrah Package",
    price: "3.5m NGN",
    audience: "For Nigeria-based pilgrims",
    note: "Departure from Lagos and Abuja",
    inclusions: [
      "Return ticket",
      "Umrah visa",
      "2 meals",
      "Accommodation in Madeenah and Makkah",
      "Umrah guide",
      "Ziyarah",
      "5 litre Zam Zam water",
    ],
  },
  {
    id: "diaspora",
    title: "Diaspora Umrah Package",
    price: "$1,750",
    audience: "For diaspora pilgrims and sponsors",
    note: "Designed for pilgrims joining the group journey",
    inclusions: [
      "Umrah visa",
      "2 meals",
      "Accommodation in Madeenah and Makkah",
      "Ziyarah",
      "Umrah guide",
      "5 litre Zam Zam water",
    ],
  },
];

const faqs = [
  {
    question: "When is the September Umrah journey?",
    answer:
      "Departure is planned for September 29 or 30, 2026, with arrival back on October 10 or 11, 2026, In Sha Allah.",
  },
  {
    question: "Where will pilgrims depart from?",
    answer:
      "The current departure locations are Lagos and Abuja. AMFAJ will confirm operational details directly with intending pilgrims.",
  },
  {
    question: "Is the scholar-led guidance only for one package?",
    answer:
      "No. AMFAJ treats scholar-led guidance as a universal standard across its packages. For the coming Umrah, Dr. Sharafuddeen Gbadebo Raaji is planned to join as a scholar, with pilgrims under his tutelage, In Sha Allah.",
  },
  {
    question: "Does AMFAJ guarantee visa approval or worship acceptance?",
    answer:
      "AMFAJ lists Umrah visa as an inclusion, but does not make misleading visa outcome claims. Worship acceptance belongs to Allah. AMFAJ focuses on sincere preparation, guidance, and organized support.",
  },
  {
    question: "How do I start registration?",
    answer:
      "Use the Start Registration button to open WhatsApp with a prefilled message. The AMFAJ team can then guide you through the next confirmed steps.",
  },
];

const guidanceItems = [
  {
    title: "Umrah readiness",
    body: "Prepare documents, intention, travel expectations, and personal essentials before payment conversations become urgent.",
    icon: CheckCircle2,
    to: "/guidance/umrah",
  },
  {
    title: "Ritual clarity",
    body: "Understand the flow of Umrah with calm explanations and reminders that keep the journey grounded in worship.",
    icon: BookOpen,
    to: "/guidance/umrah",
  },
  {
    title: "Group travel adab",
    body: "Travel with patience, order, and respect for the group, the guides, and the sacred places.",
    icon: Users,
    to: "/guidance/umrah",
  },
];

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/umrah" element={<UmrahPage />} />
          <Route path="/packages/hajj" element={<HajjPackagePage />} />
          <Route path="/guidance" element={<GuidancePage />} />
          <Route path="/guidance/umrah" element={<UmrahGuidancePage />} />
          <Route path="/guidance/hajj" element={<HajjGuidancePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <img src="/amfaj-logo.svg" alt="AMFAJ Travels and Tours" />
      </Link>
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav is-open" : "nav"} aria-label="Main">
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <div className="nav-group">
          <NavLink to="/packages" onClick={() => setOpen(false)}>
            Packages <ChevronDown size={15} />
          </NavLink>
          <div className="nav-menu">
            <Link to="/packages/umrah" onClick={() => setOpen(false)}>
              Umrah Package
            </Link>
            <Link to="/packages/hajj" onClick={() => setOpen(false)}>
              Hajj Package <span>Coming soon</span>
            </Link>
          </div>
        </div>
        <NavLink to="/guidance" onClick={() => setOpen(false)}>
          Guidance
        </NavLink>
        <NavLink to="/faq" onClick={() => setOpen(false)}>
          FAQ
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
        <a className="button button-primary nav-cta" href={whatsappHref}>
          Start Registration
        </a>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <UmrahFeature />
      <PackageBreakdown />
      <AboutSection />
      <ScholarStandard />
      <GuidancePreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function Hero() {
  const [videoExpanded, setVideoExpanded] = useState(false);

  const playHeroPreview = () => {
    setVideoExpanded(true);
    window.setTimeout(() => {
      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 850);
    window.setTimeout(() => setVideoExpanded(false), 1700);
  };

  return (
    <section className="hero">
      <div className="hero-copy hero-copy-centered">
        <motion.p
          className="hero-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span />
          September 2026 Umrah registration path
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Journey to the House of Allah with <em>clarity and care.</em>
        </motion.h1>
        <motion.p
          className="hero-subcopy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          AMFAJ Travels and Tours supports intending pilgrims with organized Umrah and Hajj travel,
          honest promises, personalized hospitality, and scholar-led guidance.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
        >
          <a className="button button-primary button-arrow" href={whatsappHref}>
            Start Registration <span className="cta-orb"><ArrowRight size={18} /></span>
          </a>
          <Link className="button button-secondary" to="/packages">
            Browse Packages <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
      <HeroCardsSequence videoExpanded={videoExpanded} onPlay={playHeroPreview} />
      {videoExpanded && (
        <motion.div
          className="video-expander"
          initial={{ opacity: 0, scale: 0.56, y: 120 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1600&q=85"
            alt=""
          />
          <div>
            <span>AMFAJ Intro Preview</span>
            <strong>Moving into the September Umrah package</strong>
          </div>
        </motion.div>
      )}
    </section>
  );
}

function HeroCardsSequence({
  videoExpanded,
  onPlay,
}: {
  videoExpanded: boolean;
  onPlay: () => void;
}) {
  const sequenceRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sequenceRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 100, damping: 26, mass: 0.4 };

  // The video card scales up symmetrically to a clean wide layout (scale 1.8 spans 90% container width)
  // Maintains its expanded centered stable watch state from 0.45 to 0.75 scroll progress
  const rawScale = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.75, 1], [1, 1, 1.8, 1.8, 1.8]);
  const scale = useSpring(rawScale, springConfig);

  // Horizontal translation math: centers column 3 symmetrically onto the grid center (translate -50%)
  const rawX = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.75, 1], ["0%", "0%", "-50%", "-50%", "-50%"]);
  const x = useSpring(rawX, springConfig);

  // Vertical translation math: places top edge of Card 3 exactly below Card 1/Card 2 + gap (translate 624px)
  const rawY = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.75, 1], [0, 0, 624, 624, 624]);
  const y = useSpring(rawY, springConfig);

  // Border radius remains beautifully rounded (30px) throughout the transition
  const rawRadius = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.75, 1], [30, 30, 30, 30, 30]);
  const borderRadius = useSpring(rawRadius, springConfig);

  // Fade out the play button and text caption very early (by 25% progress)
  const rawUiOpacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 1], [1, 1, 0, 0]);
  const uiOpacity = useSpring(rawUiOpacity, springConfig);

  // Sliding overlay z-index and translate (completely slid away by 35% progress)
  const rawOverlayY = useTransform(scrollYProgress, [0, 0.1, 0.35, 1], ["0%", "0%", "-100%", "-100%"]);
  const overlayY = useSpring(rawOverlayY, springConfig);

  return (
    <div className="hero-sequence" ref={sequenceRef}>
      <div className="hero-card-grid">
        <motion.article
          className="hero-info-card scholar-stamp-card"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
        >
          <div className="stamp-mark">
            <BadgeCheck size={34} />
            <span>Verified guidance</span>
          </div>
          <h3>Every journey under reputable scholarship.</h3>
          <p>
            Each AMFAJ journey is planned with guidance from a reputable scholar or a certified
            student of knowledge, In Sha Allah.
          </p>
          <Link className="outline-pill" to="/guidance">
            See Guidance
          </Link>
        </motion.article>
        <motion.article
          className="hero-info-card hero-about-card"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36 }}
        >
          <div className="mini-seal">
            <HeartHandshake size={28} />
          </div>
          <h3>AMFAJ keeps sacred travel organized and sincere.</h3>
          <p>
            We serve pilgrims with honesty, personalized hospitality, financial integrity, and zero
            hidden fees.
          </p>
          <a className="text-link text-link-dark" href="#package-breakdown">
            More About AMFAJ
          </a>
        </motion.article>
        <motion.article
          className={videoExpanded ? "hero-video-card is-expanding" : "hero-video-card"}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44 }}
          style={{ 
            scale, 
            x, 
            y, 
            borderRadius, 
            transformOrigin: "center center" 
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1600&q=85"
            alt="Pilgrims around the Ka'bah placeholder"
          />
          <motion.div className="hero-video-overlay" style={{ y: overlayY }} />
          <motion.div className="video-caption" style={{ opacity: uiOpacity }}>
            <span>Placeholder video</span>
            <strong>CEO intro video will live here</strong>
          </motion.div>
          <motion.button 
            className="play-button" 
            type="button" 
            onClick={onPlay} 
            aria-label="Play AMFAJ intro preview"
            style={{ opacity: uiOpacity }}
          >
            <Play size={28} fill="currentColor" />
          </motion.button>
        </motion.article>
      </div>
    </div>
  );
}

function UmrahFeature() {
  return (
    <section className="section package-feature" id="packages">
      <SectionIntro
        eyebrow="Active package"
        title="September Umrah is the priority now."
        body="Two clear package paths make it easier for Nigeria-based pilgrims, diaspora pilgrims, and sponsors to understand the offer before opening a WhatsApp conversation."
      />
      <div className="package-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </section>
  );
}

function PackageCard({
  title,
  price,
  audience,
  note,
  inclusions,
}: (typeof packages)[number]) {
  return (
    <article className="package-card">
      <div>
        <p className="card-kicker">{audience}</p>
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="muted">{note}</p>
      </div>
      <ul className="check-list">
        {inclusions.map((item) => (
          <li key={item}>
            <CheckCircle2 size={18} />
            {item}
          </li>
        ))}
      </ul>
      <a className="button button-primary full-width" href={whatsappHref}>
        Ask About This Package
      </a>
    </article>
  );
}

function PackageBreakdown() {
  const facts = [
    ["Departure", "September 29 or 30, 2026"],
    ["Arrival", "October 10 or 11, 2026"],
    ["Departure cities", "Lagos and Abuja"],
    ["Guidance", "Scholar-led tutelage, In Sha Allah"],
  ];

  return (
    <section className="section split-section" id="package-breakdown">
      <div>
        <p className="eyebrow">Full breakdown</p>
        <h2>What intending pilgrims should see before they ask questions.</h2>
        <p>
          AMFAJ keeps the package conversation plain: dates, locations, inclusions, and the next
          step. Pricing and inclusions are shown clearly so every serious inquiry begins from the
          same understanding.
        </p>
        <Link className="text-link" to="/packages/umrah">
          View the Umrah package page <ArrowRight size={17} />
        </Link>
      </div>
      <div className="fact-panel">
        {facts.map(([label, value]) => (
          <div className="fact-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about-band">
      <div className="about-mark">
        <img src="/amfaj-logo-inverted.svg" alt="AMFAJ Travels and Tours" />
      </div>
      <div>
        <p className="eyebrow inverse">About AMFAJ</p>
        <h2>Built for pilgrims who want organized travel without losing the spirit of worship.</h2>
        <p>
          AMFAJ Travels and Tours serves Muslims seeking Hajj and Umrah support that is sincere,
          dignified, and guided by the Qur'an and Sunnah upon the understanding of the pious
          predecessors.
        </p>
        <div className="promise-grid">
          <Promise icon={ShieldCheck} title="Financial integrity" body="Clear promises and zero hidden fees." />
          <Promise icon={HeartHandshake} title="Personal hospitality" body="Care that treats every pilgrim as a trust." />
          <Promise icon={Compass} title="Guided journey" body="Preparation and tutelage shaped around worship." />
        </div>
      </div>
    </section>
  );
}

function Promise({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <div className="promise">
      <Icon size={20} />
      <strong>{title}</strong>
      <span>{body}</span>
    </div>
  );
}

function ScholarStandard() {
  return (
    <section className="section scholar-section">
      <div className="scholar-copy">
        <p className="eyebrow">Universal AMFAJ standard</p>
        <h2>Scholar-led guidance is not treated as an add-on.</h2>
        <p>
          AMFAJ is intentional about scholar-led guidance across its packages. For this coming
          Umrah, Dr. Sharafuddeen Gbadebo Raaji is planned to join as a scholar, with pilgrims
          under his tutelage, In Sha Allah.
        </p>
      </div>
      <div className="notice-card">
        <BookOpen size={24} />
        <p>
          AMFAJ supports preparation and guidance. Worship acceptance belongs to Allah, and public
          claims must remain truthful and verified.
        </p>
      </div>
    </section>
  );
}

function GuidancePreview() {
  return (
    <section className="section">
      <SectionIntro
        eyebrow="Guidance"
        title="Education that makes the registration conversation easier."
        body="The Guidance section groups Umrah and Hajj preparation in one place, so visitors can learn before they commit and arrive with better questions."
      />
      <div className="guidance-grid">
        {guidanceItems.map((item) => (
          <Link className="guidance-card" to={item.to} key={item.title}>
            <item.icon size={24} />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section faq-preview">
      <SectionIntro
        eyebrow="FAQ"
        title="Questions serious pilgrims ask before they register."
        body="Short answers keep the path clear and prevent unsupported claims from slipping into sales conversations."
      />
      <div className="faq-list">
        {faqs.slice(0, 4).map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function PackagesPage() {
  return (
    <PageFrame
      eyebrow="Packages"
      title="Choose the journey you are preparing for."
      body="Umrah is active now. Hajj will open closer to the Hajj campaign window, with details published only after AMFAJ confirms them."
    >
      <div className="category-grid">
        <Link className="category-card is-active" to="/packages/umrah">
          <PackageCheck size={28} />
          <span>Active</span>
          <h2>Umrah Packages</h2>
          <p>View the September package, inclusions, travel window, and registration CTA.</p>
        </Link>
        <Link className="category-card" to="/packages/hajj">
          <Clock size={28} />
          <span>Coming later</span>
          <h2>Hajj Packages</h2>
          <p>AMFAJ will publish Hajj package information when the campaign is ready.</p>
        </Link>
      </div>
    </PageFrame>
  );
}

function UmrahPage() {
  return (
    <PageFrame
      eyebrow="Umrah package"
      title="September Umrah package details."
      body="Clear pricing, clear inclusions, and a direct WhatsApp path for intending pilgrims."
    >
      <UmrahFeature />
      <PackageBreakdown />
      <FinalCta />
    </PageFrame>
  );
}

function HajjPackagePage() {
  return (
    <ComingSoon
      eyebrow="Hajj packages"
      title="Hajj package details will open closer to the season."
      body="For now, AMFAJ is keeping the website focused on the active September Umrah campaign. Hajj information will be added when the package details are confirmed."
      cta="Browse Active Umrah Package"
      to="/packages/umrah"
    />
  );
}

function GuidancePage() {
  return (
    <PageFrame
      eyebrow="Guidance"
      title="Learn before the journey becomes urgent."
      body="AMFAJ groups Umrah and Hajj preparation into one guidance home, so pilgrims can understand worship flow, travel conduct, and practical readiness."
    >
      <div className="category-grid">
        <Link className="category-card is-active" to="/guidance/umrah">
          <BookOpen size={28} />
          <span>Available</span>
          <h2>Umrah Guidance</h2>
          <p>Readiness checklist, what to confirm before payment, packing, and group travel adab.</p>
        </Link>
        <Link className="category-card" to="/guidance/hajj">
          <Clock size={28} />
          <span>Early state</span>
          <h2>Hajj Guidance</h2>
          <p>A quiet placeholder for future Hajj education as the campaign matures.</p>
        </Link>
      </div>
    </PageFrame>
  );
}

function UmrahGuidancePage() {
  const topics = [
    ["Readiness checklist", "Passport validity, package review, health preparation, and personal essentials."],
    ["Before you pay", "Confirm inclusions, dates, departure city, payment expectations, and communication channel."],
    ["What to pack", "Keep worship, comfort, medication, documents, and modest travel needs organized."],
    ["Group travel adab", "Patience, punctuality, respectful speech, and cooperation with guides protect the journey."],
  ];

  return (
    <PageFrame
      eyebrow="Umrah guidance"
      title="Prepare with knowledge, order, and calm."
      body="This first guidance page gives AMFAJ a clean foundation for future articles and downloadable checklists."
    >
      <div className="topic-grid">
        {topics.map(([title, body]) => (
          <article className="topic-card" key={title}>
            <CheckCircle2 size={22} />
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <FinalCta />
    </PageFrame>
  );
}

function HajjGuidancePage() {
  return (
    <ComingSoon
      eyebrow="Hajj guidance"
      title="Hajj guidance will grow when AMFAJ begins the Hajj campaign."
      body="This section is reserved for structured Hajj education. For now, visitors can explore Umrah guidance or contact AMFAJ for general travel questions."
      cta="Open Umrah Guidance"
      to="/guidance/umrah"
    />
  );
}

function FaqPage() {
  return (
    <PageFrame
      eyebrow="FAQ"
      title="Straight answers before WhatsApp."
      body="These answers protect trust by keeping AMFAJ's claims specific, truthful, and easy to verify."
    >
      <div className="faq-list standalone">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </PageFrame>
  );
}

function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title="Speak with AMFAJ about September Umrah."
      body="WhatsApp is the fastest path for registration readiness, package questions, sponsorship discussions, and next-step confirmation."
    >
      <div className="contact-panel">
        <div>
          <MessageCircle size={34} />
          <h2>Start with a clear message.</h2>
          <p>
            The button opens WhatsApp with a prepared inquiry so the conversation begins with the
            right context.
          </p>
        </div>
        <a className="button button-whatsapp" href={whatsappHref}>
          Open WhatsApp <ArrowRight size={18} />
        </a>
      </div>
    </PageFrame>
  );
}

function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";
  return (
    <PageFrame
      eyebrow="Legal"
      title={isPrivacy ? "Privacy Policy" : "Terms and Conditions"}
      body={
        isPrivacy
          ? "A simple launch-ready privacy page for AMFAJ's inquiry-led website."
          : "A simple launch-ready terms page for package inquiry and public information."
      }
    >
      <article className="legal-card">
        <FileText size={24} />
        <h2>{isPrivacy ? "How inquiry information is handled" : "Important package clarity"}</h2>
        <p>
          {isPrivacy
            ? "AMFAJ may collect inquiry details through WhatsApp or future forms to respond to travel questions and registration interest. Sensitive payment or travel documents should be shared only through confirmed official channels."
            : "Package information on this website reflects AMFAJ's current public direction and should be confirmed directly before payment. AMFAJ does not publish unsupported visa outcome or worship acceptance guarantees."}
        </p>
      </article>
    </PageFrame>
  );
}

function ComingSoon({
  eyebrow,
  title,
  body,
  cta,
  to,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  to: string;
}) {
  return (
    <PageFrame eyebrow={eyebrow} title={title} body={body}>
      <div className="empty-state">
        <Sparkles size={32} />
        <h2>Not inactive. Just intentionally quiet.</h2>
        <p>
          AMFAJ will publish details only when the facts are ready. That keeps the brand's public
          promises clean and protects intending pilgrims from confusion.
        </p>
        <Link className="button button-primary" to={to}>
          {cta} <ArrowRight size={18} />
        </Link>
      </div>
    </PageFrame>
  );
}

function PageFrame({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-frame">
      <div className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      {children}
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="section final-cta">
      <div>
        <p className="eyebrow inverse">Next step</p>
        <h2>Ready to ask about the September Umrah package?</h2>
        <p>
          Open WhatsApp with the right message and let AMFAJ guide you through the confirmed next
          step.
        </p>
      </div>
      <a className="button button-light button-arrow" href={whatsappHref}>
        Start Registration <span className="cta-orb cta-orb-navy"><ArrowRight size={18} /></span>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src="/amfaj-logo-inverted.svg" alt="AMFAJ Travels and Tours" />
        <p>
          Hajj and Umrah travel support with honesty, personalized hospitality, financial
          integrity, and scholar-led guidance.
        </p>
      </div>
      <div className="footer-grid">
        <FooterColumn title="Packages" links={[["Umrah", "/packages/umrah"], ["Hajj", "/packages/hajj"]]} />
        <FooterColumn title="Guidance" links={[["Hub", "/guidance"], ["Umrah", "/guidance/umrah"], ["Hajj", "/guidance/hajj"]]} />
        <FooterColumn title="Company" links={[["FAQ", "/faq"], ["Contact", "/contact"]]} />
        <FooterColumn title="Legal" links={[["Privacy", "/privacy"], ["Terms", "/terms"]]} />
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div className="footer-column">
      <strong>{title}</strong>
      {links.map(([label, to]) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </div>
  );
}

function MobileStickyCta() {
  return (
    <div className="mobile-sticky">
      <a href={whatsappHref}>
        <MessageCircle size={18} />
        Start Registration
      </a>
    </div>
  );
}

export default App;
