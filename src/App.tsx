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
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const whatsappMessage =
  "Assalamu alaykum, I want to start registration for AMFAJ September ’Umrah.";
const whatsappHref = `https://wa.me/2348069243134?text=${encodeURIComponent(whatsappMessage)}`;

const packages = [
  {
    id: "nigeria",
    title: "Nigeria ’Umrah Package",
    price: "3.5m NGN",
    audience: "For Nigeria-based pilgrims",
    note: "Departure from Lagos and Abuja",
    inclusions: [
      "Return ticket",
      "’Umrah visa",
      "2 meals",
      "Accommodation in Madeenah and Makkah",
      "’Umrah guide",
      "Ziyarah",
      "5 litre Zam Zam water",
    ],
    isFeatured: true,
  },
  {
    id: "diaspora",
    title: "Diaspora ’Umrah Package",
    price: "$1,750",
    audience: "For diaspora pilgrims and sponsors",
    note: "Designed for pilgrims joining the group journey",
    inclusions: [
      "’Umrah visa",
      "2 meals",
      "Accommodation in Madeenah and Makkah",
      "Ziyarah",
      "’Umrah guide",
      "5 litre Zam Zam water",
    ],
    isFeatured: false,
  },
];

const faqs = [
  {
    question: "When is the September ’Umrah journey?",
    answer:
      "Departure is planned for September 29 or 30, 2026, with arrival back on October 10 or 11, 2026, In Shā’ Allāh.",
  },
  {
    question: "Where will pilgrims depart from?",
    answer:
      "The current departure locations are Lagos and Abuja. AMFAJ will confirm operational details directly with intending pilgrims.",
  },
  {
    question: "Is the scholar-led guidance only for one package?",
    answer:
      "No. AMFAJ treats scholar-led guidance as a universal standard across its packages. For the coming ’Umrah, Dr. Sharafuddeen Gbadebo Raaji is planned to join as a scholar, with pilgrims under his tutelage, In Shā’ Allāh.",
  },
  {
    question: "Does AMFAJ guarantee visa approval or worship acceptance?",
    answer:
      "AMFAJ lists ’Umrah visa as an inclusion, but does not make misleading visa outcome claims. Worship acceptance belongs to Allāh. AMFAJ focuses on sincere preparation, guidance, and organized support.",
  },
  {
    question: "How do I start registration?",
    answer:
      "Use the Start Registration button to open WhatsApp with a prefilled message. The AMFAJ team can then guide you through the next confirmed steps.",
  },
];

const guidanceItems = [
  {
    title: "’Umrah readiness",
    body: "Prepare your documents, intention, and essentials so you can start your journey with absolute clarity and peace of mind.",
    icon: CheckCircle2,
    to: "/guidance/umrah",
  },
  {
    title: "Ritual clarity",
    body: "Learn the step-by-step rites of ’Umrah with clear, calm explanations that keep your heart focused on sincere worship.",
    icon: BookOpen,
    to: "/guidance/umrah",
  },
  {
    title: "Group travel ādāb",
    body: "Nurture your character with patience and respect for fellow pilgrims and the sacred boundaries as you travel together.",
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
              ’Umrah Package
            </Link>
            <Link to="/packages/hajj" onClick={() => setOpen(false)}>
              Ḥajj Package <span>Coming soon</span>
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
  return (
    <section className="hero">
      <div className="hero-copy hero-copy-centered">
        <motion.p
          className="hero-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span />
          September 2026 ’Umrah registration path
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Journey to the House of Allāh with <em>clarity and care.</em>
        </motion.h1>
        <motion.p
          className="hero-subcopy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          We support you with organized ’Umrah and Ḥajj travel, completely honest promises,
          bespoke personalized hospitality, and scholar-led guidance every step of the way.
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
      <HeroCardsSequence />
    </section>
  );
}

function HeroCardsSequence() {
  const sequenceRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!iframeRef.current) return;

    const newMuteState = !isMuted;
    setIsMuted(newMuteState);

    const command = newMuteState ? "mute" : "unMute";

    // Send command via postMessage
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: "",
      }),
      "*"
    );

    // Explicitly maximize volume when unmuting to guarantee sound output
    if (!newMuteState) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "setVolume",
          args: [100],
        }),
        "*"
      );
    }
  };

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
          <h3>Your journey is guided by reputable scholars.</h3>
          <p>
            We plan every step of your pilgrimage under the guidance of respected scholars and certified
            students of knowledge, In Shā’ Allāh.
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
          <h3>Keeping your sacred travel organized and sincere.</h3>
          <p>
            We serve you with total honesty, personalized hospitality, financial integrity, and zero
            hidden fees.
          </p>
          <a className="text-link text-link-dark" href="#package-breakdown">
            More About AMFAJ
          </a>
        </motion.article>
        <motion.article
          className="hero-video-card"
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
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YDcMsYV7K0A?autoplay=1&mute=1&controls=1&loop=1&playlist=YDcMsYV7K0A&rel=0&playsinline=1&enablejsapi=1"
            title="September ’Umrah Guidance"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0, position: "absolute", inset: 0, zIndex: 0 }}
          />
          <button className="video-audio-toggle" onClick={toggleMute} aria-label={isMuted ? "Unmute video" : "Mute video"}>
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{isMuted ? "Unmute" : "Mute"}</span>
          </button>
          <motion.div className="video-caption" style={{ opacity: uiOpacity }}>
            <span>September ’Umrah Guidance</span>
            <strong>Scholar-Led Prep Tutelage Standard</strong>
          </motion.div>
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
        title="Our September ’Umrah registration is now open."
        body="Our active September ’Umrah is our primary focus right now. We have outlined two clear package options to help you—whether you are traveling from Nigeria or joining us from the diaspora—understand exactly what is included before we begin your registration on WhatsApp."
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
  isFeatured,
}: (typeof packages)[number]) {
  return (
    <article className={isFeatured ? "package-card is-featured" : "package-card"}>
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
      <a 
        className={`button full-width ${isFeatured ? "button-primary" : "button-secondary"}`} 
        href={whatsappHref}
      >
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
    ["Guidance", "Scholar-led tutelage, In Shā’ Allāh"],
  ];

  return (
    <section className="section split-section" id="package-breakdown">
      <div>
        <p className="eyebrow">Full breakdown</p>
        <h2>Everything you need to know before we begin your journey.</h2>
        <p>
          We believe in total honesty and financial integrity: no hidden fees, no unverified promises. We show your pricing, travel windows, and inclusions clearly so you can start your journey from a place of complete clarity.
        </p>
        <Link className="text-link" to="/packages/umrah">
          View the ’Umrah package page <ArrowRight size={17} />
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
        <h2>Built for you: organized travel designed so you never lose the spirit of worship.</h2>
        <p>
          We serve you with ’Umrah and Ḥajj travel support that is sincere, dignified, and guided by
          the Qur'an and Sunnah upon the understanding of the pious predecessors.
        </p>
        <div className="promise-grid">
          <Promise icon={ShieldCheck} title="Financial integrity" body="Clear promises and zero hidden fees." />
          <Promise icon={HeartHandshake} title="Personal hospitality" body="Care that treats you as a sacred trust." />
          <Promise icon={Compass} title="Guided journey" body="Your preparation and tutelage shaped around pure worship." />
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
        <h2>We believe authentic guidance is a necessity, never an afterthought.</h2>
        <p>
          We are intentional about providing you with scholar-led guidance across all our packages.
          For this coming ’Umrah, Dr. Sharafuddeen Gbadebo Raaji is planned to join as a scholar,
          giving you direct access to authentic knowledge and tutelage throughout your journey, In Shā’ Allāh.
        </p>
      </div>
      <div className="notice-card">
        <BookOpen size={24} />
        <p>
          We are committed to helping you prepare with sincerity and clear knowledge. While we guide
          your steps, the acceptance of our worship belongs to Allāh alone, and we pledge to remain
          completely honest and truthful in everything we promise.
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
        body="We bring our ’Umrah and Ḥajj preparation resources together in one place, helping you prepare your heart and knowledge before you commit, so you can embark on your journey with complete peace of mind."
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
        title="Clear answers to help you prepare before you register."
        body="We believe in absolute honesty and clarity. We have gathered answers to your primary questions here so you can understand every aspect of your journey with peace of mind."
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
      title="Choose the sacred journey you are preparing for."
      body="Select the sacred journey you are preparing for. Our active September ’Umrah package is ready for registration, while our Ḥajj package details will be shared here the moment every operational detail is verified and confirmed, In Shā’ Allāh."
    >
      <div className="category-grid">
        <Link className="category-card is-active" to="/packages/umrah">
          <PackageCheck size={28} />
          <span>Active</span>
          <h2>’Umrah Packages</h2>
          <p>View the September package, inclusions, travel window, and registration CTA.</p>
        </Link>
        <Link className="category-card" to="/packages/hajj">
          <Clock size={28} />
          <span>Coming later</span>
          <h2>Ḥajj Packages</h2>
          <p>AMFAJ will publish Ḥajj package information when the campaign is ready.</p>
        </Link>
      </div>
    </PageFrame>
  );
}

function UmrahPage() {
  return (
    <PageFrame
      eyebrow="’Umrah package"
      title="Everything you need for your September ’Umrah."
      body="We believe in absolute clarity: honest pricing, complete inclusions, and a direct WhatsApp path to start your registration today."
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
      eyebrow="Ḥajj packages"
      title="Our Ḥajj packages will be announced as the sacred season approaches."
      body="To maintain absolute honesty and clarity, we will publish Ḥajj packages only when every date, price, and flight schedule is completely confirmed. For now, you are welcome to explore our active September ’Umrah package."
      cta="Browse Active ’Umrah Package"
      to="/packages/umrah"
    />
  );
}

function GuidancePage() {
  return (
    <PageFrame
      eyebrow="Guidance"
      title="Prepare your heart and mind with authentic knowledge before your journey."
      body="We bring our ’Umrah and Ḥajj preparation resources together under one guidance home, providing you with scholar-led guidance to understand the rites of worship, proper travel conduct, and the practical steps needed for a smooth and spiritually rewarding journey."
    >
      <div className="category-grid">
        <Link className="category-card is-active" to="/guidance/umrah">
          <BookOpen size={28} />
          <span>Available</span>
          <h2>’Umrah Guidance</h2>
          <p>Readiness checklist, what to confirm before payment, packing, and group travel ādāb.</p>
        </Link>
        <Link className="category-card" to="/guidance/hajj">
          <Clock size={28} />
          <span>Early state</span>
          <h2>Ḥajj Guidance</h2>
          <p>A quiet placeholder for future Ḥajj education as the campaign matures.</p>
        </Link>
      </div>
    </PageFrame>
  );
}

function UmrahGuidancePage() {
  const topics = [
    ["Readiness checklist", "Verify your passport validity, review your package choices, prepare your health, and organize your personal essentials."],
    ["Before you register", "Confirm your package inclusions, travel dates, departure city, and next steps with us directly."],
    ["What to pack", "Keep your worship essentials, comfortable clothing, medication, travel documents, and modest attire carefully organized."],
    ["Group travel ādāb", "Nurture patience, punctuality, respectful speech, and loving cooperation with your guides and fellow pilgrims to preserve the blessings of the journey."],
  ];

  return (
    <PageFrame
      eyebrow="’Umrah guidance"
      title="Prepare with knowledge, order, and calm."
      body="We have designed this guidance to help you prepare your document check, packing lists, and group travel character so you can embark on your spiritual journey with complete clarity and peace of mind."
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
      eyebrow="Ḥajj guidance"
      title="Ḥajj preparation resources will be shared as the season approaches."
      body="We are preparing comprehensive Ḥajj guidance materials to support your journey. For now, you are welcome to explore our ’Umrah guidance or contact us directly on WhatsApp for any questions about Hajj planning."
      cta="Open ’Umrah Guidance"
      to="/guidance/umrah"
    />
  );
}

function FaqPage() {
  return (
    <PageFrame
      eyebrow="FAQ"
      title="Clear, honest answers to help you prepare before you register."
      body="We believe in complete transparency and have answered your primary questions here so you can verify details easily and proceed with trust."
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
      title="We are here to support your sacred journey."
      body="Connect with us on WhatsApp for absolute clarity on your September ’Umrah registration, package details, or sponsorship discussions. Let us take the next step together."
    >
      <div className="contact-panel">
        <div>
          <MessageCircle size={34} />
          <h2>Let's talk on WhatsApp.</h2>
          <p>
            Clicking the button will open WhatsApp with a helpful, pre-written message, letting us
            assist you and answer your questions right away.
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
          ? "Your privacy and trust are a sacred trust to us. Read how we handle and protect your inquiry details."
          : "Clear terms to protect your journey. Read our package inquiries and public information guidelines."
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
        <h2>We are preparing details with absolute care.</h2>
        <p>
          We only publish package information when every date, price, and accommodation is 100% verified, protecting you from confusion and keeping our promises completely honest.
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
  // Map page names to the correct CSS banner background classes
  let bgClass = "bg-general";
  const rawKey = eyebrow.toLowerCase();

  if (rawKey.includes("package")) {
    bgClass = "bg-packages";
  } else if (rawKey.includes("guidance")) {
    bgClass = "bg-guidance";
  } else if (rawKey.includes("faq")) {
    bgClass = "bg-faq";
  } else if (rawKey.includes("contact")) {
    bgClass = "bg-contact";
  }

  return (
    <section className="page-frame">
      <div className={`page-hero ${bgClass}`}>
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">&gt;</span>
            <span className="current">{eyebrow}</span>
          </nav>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
      <div className="page-content-wrapper">
        {children}
      </div>
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
    <section className="final-cta">
      <div>
        <p className="eyebrow inverse">Next step</p>
        <h2>Ready to begin your sacred journey?</h2>
        <p>
          Start your registration on WhatsApp today. Let us guide you through every step of this
          blessed preparation with complete honesty and care.
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
          Ḥajj and ’Umrah travel support with honesty, personalized hospitality, financial
          integrity, and scholar-led guidance.
        </p>
      </div>
      <div className="footer-grid">
        <FooterColumn title="Packages" links={[["’Umrah", "/packages/umrah"], ["Ḥajj", "/packages/hajj"]]} />
        <FooterColumn title="Guidance" links={[["Hub", "/guidance"], ["’Umrah", "/guidance/umrah"], ["Ḥajj", "/guidance/hajj"]]} />
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
