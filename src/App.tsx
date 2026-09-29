import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Download,
  FileText,
  HelpCircle,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Play,
  Plane,
  Printer,
  ShieldCheck,
  Sparkles,
  Users,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const whatsappMessage =
  "Assalamu alaykum, I want to start registration for AMFAJ October ’Umrah.";
const whatsappHref = `https://wa.me/2348069243134?text=${encodeURIComponent(whatsappMessage)}`;
const makkahLiveEmbedUrl =
  "https://www.youtube.com/embed/live_stream?channel=UCos52azQNBgW63_9uDJoPDA&autoplay=1&mute=1&controls=1&rel=0&playsinline=1&enablejsapi=1";

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
      "Accommodation in Makkah and Madīnah.",
      "’Umrah guide",
      "Ziyārah",
      "5 litres of Zamzam water",
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
      "Accommodation in Makkah and Madīnah.",
      "Ziyārah",
      "’Umrah guide",
      "5 litres of Zamzam water",
    ],
    isFeatured: false,
  },
];

const faqs = [
  {
    question: "When is the October ’Umrah journey?",
    answer:
      "Departure is planned for October 3, 2026, with return on October 15, 2026, In Shā’ Allāh.",
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
    title: "’Umrah Guidance",
    body: "Prepare your heart and mind with step-by-step guides for the rites of ’Umrah: Iḥrām, Ṭawāf, Sa‘y, and Ḥalq.",
    icon: BookOpen,
    to: "/guidance/umrah",
  },
  {
    title: "Ḥajj Guidance",
    body: "Explore the rites and timing of the greater pilgrimage. Information is updated as campaigns approach.",
    icon: CalendarDays,
    to: "/guidance/hajj",
  },
  {
    title: "Travel Ādāb & Ethics",
    body: "Nurture patience, respect, and proper conduct for group journeys within the sacred boundaries of the Holy Lands.",
    icon: Users,
    to: "/guidance/adab",
  },
];

interface ArrowButtonProps {
  href?: string;
  to?: string;
  variant: "primary" | "light" | "secondary";
  children: React.ReactNode;
}

function ArrowButton({ href, to, variant, children }: ArrowButtonProps) {
  const orbClass = variant === "light" ? "cta-orb cta-orb-navy" : "cta-orb";
  const buttonClass = `button button-${variant} button-arrow`;

  const content = (
    <>
      {children}
      <span className={orbClass}>
        <ArrowRight size={18} />
      </span>
    </>
  );

  if (href) {
    return (
      <a className={buttonClass} href={href}>
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link className={buttonClass} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClass}>
      {content}
    </button>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/umrah" element={<UmrahPage />} />
          <Route path="/packages/hajj" element={<HajjPackagePage />} />
          <Route path="/guidance" element={<GuidancePage />} />
          <Route path="/guidance/umrah" element={<UmrahGuidancePage />} />
          <Route path="/guidance/umrah/scholar-text" element={<UmrahScholarGuidePage />} />
          <Route path="/guidance/adab" element={<AdabGuidancePage />} />
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
        <NavLink to="/about" onClick={() => setOpen(false)}>
          About Us
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
          October 2026 ’Umrah registration path
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
          <ArrowButton variant="primary" href={whatsappHref}>
            Start Registration
          </ArrowButton>
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
            Each of our journeys is planned with guidance from a reputable scholar or a certified student of knowledge, In Shā’ Allāh.
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
          <Link className="text-link text-link-dark" to="/about">
            More About AMFAJ
          </Link>
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
            src={makkahLiveEmbedUrl}
            title="Makkah Live Stream"
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
            <span>Masjid Al-Ḥarām Live</span>
            <strong>Makkah Al-Mukarramah 24/7</strong>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}

function UmrahFeature() {
  return (
    <motion.section
      className="section package-feature"
      id="packages"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <SectionIntro
        eyebrow="Active package"
        title="Our October ’Umrah registration is now open."
        body="Two clear package paths make it easier for Nigeria-based pilgrims, Diaspora pilgrims, and sponsors to understand the offer before opening a WhatsApp conversation."
      />
      <div className="package-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </motion.section>
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

function PackageBreakdown({ showLink = true }: { showLink?: boolean } = {}) {
  const facts = [
    ["Departure", "October 3, 2026"],
    ["Return", "October 15, 2026"],
    ["Departure cities", "Lagos and Abuja"],
    ["Guidance", "Scholar-led, In Shā‘ Allāh"],
  ];

  return (
    <motion.section
      className="section split-section"
      id="package-breakdown"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <p className="eyebrow">Full breakdown</p>
        <h2>Everything you need to know before we begin your journey.</h2>
        <p>
          We believe in total honesty and financial integrity: no hidden fees, no unverified promises. We show your pricing, travel windows, and inclusions clearly so you can start your journey from a place of complete clarity.
        </p>
        {showLink && (
          <Link className="text-link" to="/packages/umrah">
            View the ’Umrah package page <ArrowRight size={17} />
          </Link>
        )}
      </div>
      <div className="fact-panel">
        {facts.map(([label, value]) => (
          <div className="fact-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function AboutSection() {
  return (
    <motion.section
      className="section about-band"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="about-mark">
        <img src="/amfaj-logo-inverted.svg" alt="AMFAJ Travels and Tours" />
      </div>
      <div>
        <p className="eyebrow inverse">About AMFAJ</p>
        <h2>Built for you: organized travel designed so you never lose the spirit of worship.</h2>
        <p>
          AMFAJ Travels and Tours serves Muslims seeking Ḥajj and ‘Umrah support that is sincere, dignified, and guided by the Qur'ān and Sunnah upon the understanding of the pious predecessors.
        </p>
        <div className="promise-grid">
          <Promise icon={ShieldCheck} title="Financial integrity" body="Clear promises and zero hidden fees." />
          <Promise icon={HeartHandshake} title="Personal hospitality" body="Care that treats you as a sacred trust." />
          <Promise icon={Compass} title="Guided journey" body="Your preparation and tutelage shaped around pure worship." />
        </div>
      </div>
    </motion.section>
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
    <motion.section
      className="section scholar-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="scholar-copy">
        <p className="eyebrow">Universal AMFAJ standard</p>
        <h2>We believe authentic guidance is a necessity, never an afterthought.</h2>
        <p>
          We are intentional about Scholar-led guidance across our packages. For this coming ‘Umrah, Dr. Sharafuddeen Gbadebo Raaji is the scholar leading the pilgrims, In Shā‘ Allāh.
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
    </motion.section>
  );
}

function GuidancePreview() {
  return (
    <motion.section
      className="guidance-preview-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
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
    </motion.section>
  );
}

function FaqSection() {
  return (
    <motion.section
      className="section faq-preview"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
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
    </motion.section>
  );
}

function PackagesPage() {
  return (
    <PageFrame
      eyebrow="Packages"
      title="Choose the sacred journey you are preparing for."
      body="Select the sacred journey you are preparing for. Our active October ’Umrah package is ready for registration, while our Ḥajj package details will be shared here the moment every operational detail is verified and confirmed, In Shā’ Allāh."
    >
      <div className="category-grid">
        <Link className="category-card is-active" to="/packages/umrah">
          <PackageCheck size={28} />
          <span>Active</span>
          <h2>’Umrah Packages</h2>
          <p>View the October package, inclusions, travel window, and registration CTA.</p>
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
      title="Everything you need for your October ’Umrah."
      body="We believe in absolute clarity: honest pricing, complete inclusions, and a direct WhatsApp path to start your registration today."
      parent={{ name: "Packages", to: "/packages" }}
    >
      <UmrahFeature />
      <PackageBreakdown showLink={false} />
      <FinalCta />
    </PageFrame>
  );
}

function HajjPackagePage() {
  return (
    <ComingSoon
      eyebrow="Ḥajj packages"
      title="Ḥajj package details will open closer to the season."
      body="For now, we are keeping the website focused on the active October ‘Umrah campaign. Ḥajj information will be added when the package details are confirmed."
      cta="Browse Active ’Umrah Package"
      to="/packages/umrah"
      parent={{ name: "Packages", to: "/packages" }}
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
          <p>Readiness checklist, what to confirm before payment, packing, and rites of worship.</p>
        </Link>
        <Link className="category-card is-active" to="/guidance/adab">
          <HeartHandshake size={28} />
          <span>Available</span>
          <h2>Travel Ādāb & Ethics</h2>
          <p>Patience, group cooperation, speaking kindly, and respecting the sanctity of the sanctuaries.</p>
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
  const [isTawafModalOpen, setIsTawafModalOpen] = useState(false);
  const steps = [
    {
      step: "01",
      title: "Iḥrām",
      description: "Begin your ’Umrah by making a sincere intention to enter the state of Iḥrām and perform its rites for the Sake of Allāh. Then wear the Iḥrām garments and commence your pilgrimage by reciting the Talbiyah.",
      image: "/ihram_step.png",
      details: [
        "Make a sincere intention in your heart to enter the state of Iḥrām and perform its rites for the Sake of Allāh.",
        "Wear the defined Iḥrām garments (two white unstitched sheets for men, modest loose clothing for women).",
        "Commence your pilgrimage state by reciting the Talbiyah: \"Labbayk Allāhumma Labbayk, Labbayka Lā Sharīka Laka Labbayk...\""
      ]
    },
    {
      step: "02",
      title: "Ṭawāf",
      description: "Ṭawāf is the act of worship of circling the Ka‘bah in devotion to Allāh and seeking closeness to Him.",
      image: "/tawaf_step.png",
      details: [
        "Enter the Maṭāf area and begin at the Black Stone, keeping the Ka‘bah on your left.",
        "When aligned with the Black Stone, raise your hand and say, “Allāhu Akbar.”",
        "Walk around the Ka‘bah in a counterclockwise direction while making Du‘ā‘ and remembering Allāh.",
        "Each time you return to the Black Stone, you have completed one round. Again, raise your hand and say, “Allāhu Akbar.”",
        "Continue in the same manner until you complete seven rounds."
      ]
    },
    {
      step: "03",
      title: "Sa‘ī Between Ṣafā and Marwah",
      description: "After completing Ṭawāf, proceed to Ṣafā to begin Sa‘ī, walking between the hills of Ṣafā and Marwah in remembrance of Hajar's struggle and devotion to Allāh.",
      image: "/say_step.png",
      details: [
        "Start at Ṣafā, where signs indicate its location inside the Grand Mosque.",
        "Walk from Ṣafā towards Marwah. Men should jog between the two green markers along the route (women continue walking normally).",
        "Upon reaching Marwah, one lap is completed.",
        "Turn back and walk from Marwah to Ṣafā. Continue until you complete seven laps, ending at Marwah. Men should jog between the green markers during each lap."
      ]
    },
    {
      step: "04",
      title: "Shaving or Trimming the Hair",
      description: "After completing Ṭawāf and Sa‘ī, the pilgrim ends the state of Iḥrām by cutting or shaving the hair. This marks the completion of ’Umrah, and all restrictions of Iḥrām are lifted.",
      image: "/halq_step.png",
      details: [
        "For men: It is better to shave the entire head (Ḥalq), but shortening the hair (Taqsīr) is also allowed.",
        "For women: They should cut a small portion of their hair (Taqsīr), about 1–2 cm (the size of a finger-joint) from the ends.",
        "With this final step, your state of Iḥrām is lifted and the ’Umrah is complete."
      ]
    }
  ];

  return (
    <PageFrame
      eyebrow="’Umrah guidance"
      title="Prepare with knowledge, order, and calm."
      body="We have designed this journey map and checklist based on the Qur'an and Sunnah to help you understand the rites of ’Umrah before you begin your pilgrimage."
      parent={{ name: "Guidance", to: "/guidance" }}
    >
      <div className="guidance-journey-page">
        {/* Intro Section */}
        <section className="guidance-intro-section">
          <div className="guidance-intro-grid">
            <div className="guidance-intro-main">
              <h2>A Sacred Journey of Devotion</h2>
              <p>
                ’Umrah is a sacred act of worship in Islām that involves visiting the Ka‘bah in Makkah and performing specific rites in devotion to Allāh. Unlike Ḥajj, which is obligatory upon those who are able and is performed during specific days of the Islāmic calendar, ’Umrah is a voluntary pilgrimage that can be performed at any time of the year.
              </p>
              <p>
                It is often referred to as the “lesser pilgrimage,” yet it remains a tremendous opportunity for a Muslim to draw closer to Allāh, seek His Forgiveness, and renew their faith. Among the notable features of ’Umrah are its simplicity, flexibility of timing, and its ability to bring together Muslims from different parts of the world in a shared act of worship and submission to their Lord.
              </p>
              <p>
                The benefits of ’Umrah are numerous. It serves as a means of expiation for sins, strengthens one's relationship with Allāh, increases spiritual awareness, and brings peace and tranquillity to the heart.
              </p>
            </div>
            
            <div className="guidance-intro-side">
              {/* Hadith Card */}
              <div className="hadith-card">
                <Volume2 size={24} className="hadith-icon" />
                <blockquote>
                  “One ’Umrah to another is an expiation for the sins committed between them.”
                </blockquote>
                <cite>— Sahih al-Bukhari 1773, Sahih Muslim 1349</cite>
              </div>

              {/* Arkan Summary Card */}
              <div className="arkan-card">
                <ShieldCheck size={24} className="arkan-icon" />
                <h3>The Four Pillars (Arkān)</h3>
                <ul>
                  <li><span>1</span> Entering Iḥrām with intention</li>
                  <li><span>2</span> Ṭawāf around the Ka‘bah</li>
                  <li><span>3</span> Sa‘ī between Ṣafā and Marwah</li>
                  <li><span>4</span> Shaving or trimming the hair</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Scholar Guide Resource Banner */}
        <section className="featured-scholar-banner">
          <div className="featured-scholar-badge">
            <Sparkles size={16} /> Official Scholar Lecture & Printable Reference
          </div>
          <div className="featured-scholar-content">
            <div className="featured-scholar-info">
              <h3>Authentic Step-by-Step ’Umrah Sunnah Guide</h3>
              <p>
                Study the complete, vocalized Arabic lecture transcript covering all five stages of ’Umrah upon the understanding of the pious predecessors — complete with highlighted Prophetic Adhkār, Sunnah vs. Pitfall verifications, and an official printable/downloadable PDF.
              </p>
            </div>
            <div className="featured-scholar-action">
              <Link to="/guidance/umrah/scholar-text" className="button button-primary featured-scholar-btn">
                <BookOpen size={18} /> Open Scholar Guide &amp; PDF
              </Link>
            </div>
          </div>
        </section>

        {/* Journey Map Stepper Title */}
        <div className="journey-title-block">
          <p className="eyebrow">Interactive Path</p>
          <h2>The Rites of ’Umrah Step-by-Step</h2>
          <p>Follow the chronological timeline to learn how each rite is performed in accordance with the Sunnah.</p>
        </div>

        {/* Winding Timeline Journey Map */}
        <div className="journey-roadmap">
          <div className="journey-timeline-line" />
          
          {steps.map((node, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={node.step}
                className={`journey-node ${isEven ? "journey-node-left" : "journey-node-right"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Timeline Dot Indicator */}
                <div className="journey-dot">
                  <span>{node.step}</span>
                </div>

                {/* Step Content Card */}
                <div className="journey-card">
                  <div className="journey-card-image-box">
                    <img src={node.image} alt={node.title} />
                  </div>
                  <div className="journey-card-info">
                    <span className="step-tag">Step {node.step}</span>
                    <h3>{node.title}</h3>
                    <p className="step-desc">{node.description}</p>
                    
                    <div className="step-actions-list">
                      <h4>Ritual Guidelines:</h4>
                      <ul>
                        {node.details.map((detail, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={16} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {node.step === "01" && <InlineTalbiyahPlayer />}
                    {node.step === "02" && (
                      <div className="timeline-action-block">
                        <button
                          className="button button-primary walkthrough-trigger-btn"
                          onClick={() => setIsTawafModalOpen(true)}
                        >
                          <Compass size={18} /> See Visual Walkthrough
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recommended Sunnah Actions Section */}
        <motion.section
          className="sunnah-actions-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="sunnah-intro">
            <Sparkles size={28} />
            <h2>Recommended Sunnah Actions</h2>
            <p>Enhance the reward of your pilgrimage by practicing these recommended acts of the Prophet (ﷺ):</p>
          </div>
          <div className="sunnah-grid">
            <div className="sunnah-action-card">
              <h3>Uncover Right Shoulder (Men)</h3>
              <p>Uncover the right shoulder (Iḍṭibā‘) during Ṭawāf. After finishing Ṭawāf, cover it again before praying.</p>
            </div>
            <div className="sunnah-action-card">
              <h3>Brisk Walking (Men)</h3>
              <p>Walk briskly (Raml) with short steps during the first three rounds of Ṭawāf, and walk normally for the remaining four.</p>
            </div>
            <div className="sunnah-action-card">
              <h3>Two Rak‘ahs of Ṭawāf</h3>
              <p>After finishing Ṭawāf, pray two rak‘ahs behind Maqām Ibrāhīm if possible. If not, pray anywhere in Masjid al-Ḥarām.</p>
            </div>
            <div className="sunnah-action-card">
              <h3>Jogging between markers (Men)</h3>
              <p>Jog lightly during Sa‘ī between the two green-lit markers along the path between Ṣafā and Marwah.</p>
            </div>
          </div>
        </motion.section>

        <div className="guidance-back-btn-wrap" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '20px' }}>
          <ArrowButton variant="secondary" to="/guidance">
            Back to Guidance Hub
          </ArrowButton>
        </div>
      </div>

      <FinalCta />
      <AnimatePresence>
        {isTawafModalOpen && (
          <TawafWalkthroughModal onClose={() => setIsTawafModalOpen(false)} />
        )}
      </AnimatePresence>
    </PageFrame>
  );
}

function UmrahScholarGuidePage() {
  const [activeStage, setActiveStage] = useState("stage-1");

  const scrollToSection = (id: string) => {
    setActiveStage(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <PageFrame
      eyebrow="Authenticated Reference"
      title="Step-by-Step ’Umrah Sunnah Guide"
      body="The comprehensive scholar lecture transcript on the rites of ’Umrah upon the understanding of the pious predecessors — complete with vocalized Arabic text, authoritative Prophetic Adhkār, fiqh verifications, and an official printable/downloadable PDF."
      parent={{ name: "’Umrah Guidance", to: "/guidance/umrah" }}
    >
      <div className="scholar-guide-page">
        {/* Print-Only Header Stamp */}
        <div className="print-only-stamp">
          <div className="print-stamp-logo">AMFAJ TRAVELS &amp; TOURS</div>
          <div className="print-stamp-title">دَلِيلُ صِفَةِ الْعُمْرَةِ عَلَى هَدْيِ السُّنَّةِ النَّبَوِيَّةِ — Official Scholar Reference</div>
          <div className="print-stamp-meta">Guidance Department • WhatsApp: +234 806 924 3134 • amfajtravels.com</div>
        </div>

        {/* Interactive Top Actions Toolbar */}
        <div className="scholar-toolbar-card">
          <div className="scholar-toolbar-info">
            <span className="scholar-toolbar-tag">
              <Sparkles size={15} /> Practical Pilgrim Resource
            </span>
            <h3>Preserve or Print This Authentic Guide</h3>
            <p>
              Download the official pre-formatted PDF document or print directly with custom high-contrast formatting for your pilgrimage journey.
            </p>
          </div>
          <div className="scholar-toolbar-actions">
            <a
              href="/AMFAJ_Umrah_Sunnah_Guide_Arabic.pdf"
              download="AMFAJ_Umrah_Sunnah_Guide_Arabic.pdf"
              className="button button-primary scholar-dl-btn"
            >
              <Download size={18} /> Download Official PDF
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="button button-secondary scholar-print-btn"
            >
              <Printer size={18} /> Print / Save as PDF
            </button>
          </div>
        </div>

        {/* Jump Navigation Pills */}
        <div className="scholar-nav-pills">
          <button
            type="button"
            className={`scholar-pill ${activeStage === "stage-1" ? "is-active" : ""}`}
            onClick={() => scrollToSection("stage-1")}
          >
            ١. الإحرام والميقات
          </button>
          <button
            type="button"
            className={`scholar-pill ${activeStage === "stage-2" ? "is-active" : ""}`}
            onClick={() => scrollToSection("stage-2")}
          >
            ٢. التلبية والمسير
          </button>
          <button
            type="button"
            className={`scholar-pill ${activeStage === "stage-3" ? "is-active" : ""}`}
            onClick={() => scrollToSection("stage-3")}
          >
            ٣. طواف القدوم
          </button>
          <button
            type="button"
            className={`scholar-pill ${activeStage === "stage-4" ? "is-active" : ""}`}
            onClick={() => scrollToSection("stage-4")}
          >
            ٤. خلف المقام وزمزم
          </button>
          <button
            type="button"
            className={`scholar-pill ${activeStage === "stage-5" ? "is-active" : ""}`}
            onClick={() => scrollToSection("stage-5")}
          >
            ٥. السعي والتحلل
          </button>
        </div>

        {/* Scholarly Overview Notice */}
        <div className="scholar-overview-card">
          <div className="scholar-overview-badge">
            <ShieldCheck size={18} /> Standard of Tutelage &amp; Verification
          </div>
          <div className="scholar-overview-body">
            <p>
              In accordance with AMFAJ’s commitment to religious tutelage and authentic guidance upon the Qur’ān and the Sunnah according to the understanding of the pious predecessors, this guide documents the complete oral lecture explaining how the Prophet Muhammad ﷺ performed ’Umrah.
            </p>
            <blockquote className="scholar-prophetic-quote">
              <span className="quote-ar">«خُذُوا عَنِّي مَنَاسِكَكُمْ»</span>
              <span className="quote-en">“Take from me your pilgrimage rites.” (Ṣaḥīḥ Muslim 1297)</span>
            </blockquote>
          </div>
        </div>

        {/* ==================== STAGE 1 ==================== */}
        <section id="stage-1" className="scholar-stage-container">
          <div className="scholar-stage-header">
            <div className="stage-num-badge">STAGE 01 / 05</div>
            <h2 className="stage-ar-title">الْمَرْحَلَةُ الأُولَى: التَّهَيُّؤُ لِلإِحْرَامِ وَعَقْدُ النِّيَّةِ عِنْدَ الْمِيقَاتِ</h2>
            <p className="stage-en-subtitle">Stage 1: Pre-Iḥrām Preparation, Hygiene, Garments, &amp; The Intention at the Mīqāt</p>
          </div>

          {/* Unit 1.1 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">1.1 Personal Hygiene &amp; Cleanliness (التَّنَظُّفُ وَقَصُّ الشَّعْرِ وَالأَظَافِرِ)</h3>
              <span className="tarbiyah-unit-badge">Sunnah Preparation</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَاعْلَمُوا — وَفَّقَنِي اللهُ وَإِيَّاكُمْ — أَنَّهُ يُسْتَحَبُّ لِمُرِيدِ الْحَجِّ أَوِ الْعُمْرَةِ أَنْ يَتَهَيَّأَ لِلإِحْرَامِ بِالتَّنَظُّفِ، بِإِزَالَةِ الشُّعُورِ الزَّائِدَةِ؛ شَعْرِ الإِبْطَيْنِ، وَشَعْرِ الْعَانَةِ، وَحَفِّ الشَّارِبِ، وَقَلْمِ الأَظَافِرِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Know — may Allāh grant success to me and to you — that it is recommended for anyone intending Ḥajj or ’Umrah to prepare for Iḥrām through personal cleanliness: by removing excess body hair (underarms and pubic hair), trimming the mustache, and clipping the nails.”
              </p>
            </div>
          </div>

          {/* Unit 1.2 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">1.2 Timing &amp; Location of Preparation (تَوْقِيتُ ذَلِكَ وَمَكَانُهُ)</h3>
              <span className="tarbiyah-unit-badge">Rulings of Time</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَيُسْتَحَبُّ أَنْ يَكُونَ ذَلِكَ قُبَيْلَ الإِحْرَامِ، إِلَّا إِذَا كَانَ يُرِيدُ أَنْ يُضَحِّيَ بِأَنْ يَذْبَحَ أُضْحِيَّةً فِي بَلَدِهِ فِي أَيَّامِ الْعِيدِ، فَإِنَّهُ يَجْعَلُ ذَلِكَ قَبْلَ اسْتِهْلَالِ ذِي الحِجَّةِ. وَيَجُوزُ لِلْمُسْلِمِ أَنْ يَفْعَلَ ذَلِكَ فِي بَيْتِهِ أَوْ فِي الْفُنْدُقِ أَوْ فِي الْمِيقَاتِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “It is recommended that this be done shortly before entering Iḥrām — unless one intends to offer a sacrifice (Uḍḥiyyah) in their homeland during the days of ‘Īd, in which case they should do so before the new moon of Dhū al-Ḥijjah appears. A Muslim is permitted to do this at home, in the hotel, or at the Mīqāt.”
              </p>
            </div>
          </div>

          {/* Unit 1.3 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">1.3 Ritual Bathing (Ghusl) for All Pilgrims (الاغْتِسَالُ لِلإِحْرَامِ)</h3>
              <span className="tarbiyah-unit-badge">Prescribed Sunnah</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَيُسْتَحَبُّ وَيُسَنُّ لَهُ أَنْ يَغْتَسِلَ لِلإِحْرَامِ، وَهَذَا الاغْتِسَالُ مُسْتَحَبٌّ فِي حَقِّ الرِّجَالِ وَالنِّسَاءِ حَتَّى الْحَائِضِ وَالنُّفَسَاءِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “It is recommended and a prescribed Sunnah to perform a ritual bath (Ghusl) for Iḥrām. This bath is recommended for both men and women, including women who are menstruating or experiencing postpartum bleeding.”
              </p>
            </div>
          </div>

          {/* Unit 1.4 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">1.4 Men's Attire &amp; Perfume (لِبَاسُ الرَّجُلِ وَطِيبُهُ)</h3>
              <span className="tarbiyah-unit-badge">Rules of Dress</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَيَتَجَرَّدُ الرَّجُلُ مِنَ الثِّيَابِ الْمَخِيطَةِ، وَيَلْبَسُ إِزَارًا وَرِدَاءً أَبْيَضَيْنِ نَظِيفَيْنِ، وَيُسْتَحَبُّ أَنْ يَتَطَيَّبَ فِي بَدَنِهِ كَرَأْسِهِ وَلِحْيَتِهِ قَبْلَ الإِحْرَامِ بِمَا تَيَسَّرَ مِنْ طِيبٍ، وَلَا يُطَيِّبُ ثِيَابَ الإِحْرَامِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “The man divests himself of stitched, tailored garments and puts on a clean white waist-wrapper (Izār) and upper sheet (Ridā’). It is recommended that he apply available perfume to his body, such as his head and beard, before entering Iḥrām; however, he must not apply perfume to his Iḥrām garments.”
              </p>
            </div>
          </div>

          {/* Unit 1.5 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">1.5 Women's Modest Attire (لِبَاسُ الْمَرْأَةِ الْمُحْرِمَةِ)</h3>
              <span className="tarbiyah-unit-badge">Modesty Standard</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «أَمَّا الْمَرْأَةُ فَتَلْبَسُ مَا شَاءَتْ مِنَ الثِّيَابِ الْمُبَاحَةِ الَّتِي لَيْسَ فِيهَا تَبَرُّجٌ وَلَا شُهْرَةٌ، وَلَا تَلْبَسُ النِّقَابَ وَلَا الْقُفَّازَيْنِ، وَلَكِنْ تَسْدُلُ خِمَارَهَا عَلَى وَجْهِهَا عِنْدَ مُرُورِ الرِّجَالِ الأَجَانِبِ بِهَا.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “As for the woman, she wears whatever permissible clothing she chooses that is free from adornment and ostentation. She does not wear the Niqāb (face-veil) nor gloves, but she drapes her headscarf over her face when passing in front of non-mahram men.”
              </p>
            </div>
          </div>

          {/* Unit 1.6 & Dhikr */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">1.6 Intention at the Mīqāt (عَقْدُ النِّيَّةِ وَالإِهْلَالُ عِنْدَ الْمِيقَاتِ)</h3>
              <span className="tarbiyah-unit-badge">Entering the Rite</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَإِذَا وَصَلَ الْمُسْلِمُ إِلَى الْمِيقَاتِ — أَوْ حَاذَاهُ جَوًّا أَوْ بَحْرًا — أَحْرَمَ، وَيُهِلُّ بِالْعُمْرَةِ قَائِلًا:»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “When the Muslim reaches the Mīqāt — or passes parallel to it by air or sea — he enters the sacred state of Iḥrām and raises his voice proclaiming the intention for ’Umrah, saying:”
              </p>
            </div>
          </div>

          <div className="scholar-dhikr-box">
            <span className="dhikr-category">Prophetic Invocation at the Mīqāt</span>
            <p className="dhikr-arabic-phrase" dir="rtl">«لَبَّيْكَ عُمْرَةً» <span className="dhikr-or">أَوْ</span> «اللَّهُمَّ لَبَّيْكَ عُمْرَةً»</p>
            <p className="dhikr-transliteration">“Labbayk ‘Umrah” or “Allāhumma Labbayka ‘Umrah”</p>
            <p className="dhikr-meaning">“Here I am, O Allāh, answering Your call for ‘Umrah.”</p>
          </div>

          <div className="scholar-pitfall-box">
            <h4><AlertTriangle size={18} /> Critical Caution (تنبيه شرعي)</h4>
            <p>
              <strong>No Iḍṭibā‘ at the Airport or Mīqāt:</strong> Many pilgrims mistakenly bare their right shoulder at the Mīqāt or wear it throughout airport transit and flights. This is incorrect. Both shoulders must remain completely covered until reaching the Ka‘bah to begin the actual Ṭawāf.
            </p>
          </div>
        </section>

        {/* ==================== STAGE 2 ==================== */}
        <section id="stage-2" className="scholar-stage-container">
          <div className="scholar-stage-header">
            <div className="stage-num-badge">STAGE 02 / 05</div>
            <h2 className="stage-ar-title">الْمَرْحَلَةُ الثَّانِيَةُ: التَّلْبِيَةُ وَآدَابُ الْمَسِيرِ إِلَى مَكَّةَ الْمُكَرَّمَةِ</h2>
            <p className="stage-en-subtitle">Stage 2: The Talbiyah Journey &amp; Entry into the Sacred Sanctuary</p>
          </div>

          {/* Unit 2.1 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">2.1 The Talbiyah Proclamation (شِعَارُ التَّلْبِيَةِ النَّبَوِيَّةِ)</h3>
              <span className="tarbiyah-unit-badge">Pilgrim's Chant</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «ثُمَّ يَشْرَعُ فِي التَّلْبِيَةِ الَّتِي كَانَ النَّبِيُّ ﷺ يُلَبِّي بِهَا، وَيَرْفَعُ الرِّجَالُ أَصْوَاتَهُمْ بِهَا، أَمَّا النِّسَاءُ فَيُسْمِعْنَ أَنْفُسَهُنَّ وَمَنْ يَلِيهِنَّ دُونَ رَفْعٍ مُلْفِتٍ لِلصَّوْتِ:»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Then he begins the Talbiyah with which the Prophet ﷺ used to proclaim devotion. Men raise their voices with it, while women recite loud enough only for themselves and those beside them without attracting attention:”
              </p>
            </div>
          </div>

          <div className="scholar-dhikr-box">
            <span className="dhikr-category">The Prophetic Talbiyah</span>
            <p className="dhikr-arabic-phrase" dir="rtl">«لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ»</p>
            <p className="dhikr-transliteration">“Labbayk Allāhumma Labbayk, Labbayka Lā Sharīka Laka Labbayk, Innal-Ḥamda Wan-Ni‘mata Laka Wal-Mulk, Lā Sharīka Lak.”</p>
            <p className="dhikr-meaning">“Here I am, O Allāh, here I am. Here I am, You have no partner, here I am. Verily all praise, grace, and dominion belong to You, You have no partner.”</p>
          </div>

          {/* Unit 2.2 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">2.2 Continuous Dhikr until Ṭawāf (مُوَاصَلَةُ الذِّكْرِ حَتَّى بَدْءِ الطَّوَافِ)</h3>
              <span className="tarbiyah-unit-badge">Spiritual Focus</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَيَسْتَمِرُّ الْمُحْرِمُ فِي التَّلْبِيَةِ وَالإِكْثَارِ مِنْ ذِكْرِ اللهِ وَالاسْتِغْفَارِ وَالدُّعَاءِ فِي طَرِيقِهِ إِلَى مَكَّةَ، حَتَّى يَبْدَأَ بِالطَّوَافِ؛ فَإِذَا شَرَعَ فِي الطَّوَافِ قَطَعَ التَّلْبِيَةَ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “The pilgrim continues reciting the Talbiyah, abundantly remembering Allāh, seeking forgiveness, and supplicating along the road to Makkah until he begins Ṭawāf. As soon as he commences Ṭawāf, he ceases reciting the Talbiyah.”
              </p>
            </div>
          </div>

          {/* Unit 2.3 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">2.3 Supplication upon Mosque Entry (آدَابُ دُخُولِ الْمَسْجِدِ الْحَرَامِ)</h3>
              <span className="tarbiyah-unit-badge">Sacred Etiquette</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَيُسْتَحَبُّ لَهُ إِذَا دَخَلَ الْمَسْجِدَ الْحَرَامَ أَنْ يُقَدِّمَ رِجْلَهُ الْيُمْنَى وَيَقُولَ ذِكْرَ دُخُولِ الْمَسْجِدِ:»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “When entering the Sacred Mosque, it is recommended that he step in with his right foot first and recite the supplication for entering mosques:”
              </p>
            </div>
          </div>

          <div className="scholar-dhikr-box">
            <span className="dhikr-category">Supplication upon Entering Masjid al-Ḥarām</span>
            <p className="dhikr-arabic-phrase" dir="rtl">«بِسْمِ اللهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ»</p>
            <p className="dhikr-transliteration">“Bismillāh, Waṣ-Ṣalātu Was-Salāmu ‘Alā Rasūlillāh, Allāhummaf-taḥ Lī Abwāba Raḥmatik.”</p>
            <p className="dhikr-meaning">“In the Name of Allāh, and prayers and peace be upon the Messenger of Allāh. O Allāh, open for me the gates of Your Mercy.”</p>
          </div>

          <div className="scholar-pitfall-box">
            <h4><AlertTriangle size={18} /> Critical Caution (تنبيه شرعي)</h4>
            <p>
              <strong>Avoid Choir Chanting &amp; Fabricated Sighting Du‘ās:</strong> Chanting the Talbiyah in unison behind a megaphone leader is contrary to the Sunnah. Furthermore, there is no verified specific du‘ā required solely for first looking at the Ka‘bah; supplicate freely and sincerely from your own heart.
            </p>
          </div>
        </section>

        {/* ==================== STAGE 3 ==================== */}
        <section id="stage-3" className="scholar-stage-container">
          <div className="scholar-stage-header">
            <div className="stage-num-badge">STAGE 03 / 05</div>
            <h2 className="stage-ar-title">الْمَرْحَلَةُ الثَّالِثَةُ: الطَّوَافُ بِالْبَيْتِ الْعَتِيقِ وَسُنَنُهُ</h2>
            <p className="stage-en-subtitle">Stage 3: Ṭawāf al-Qudūm (Circumambulation), Raml, Iḍṭibā‘, &amp; The Authentic Adhkār</p>
          </div>

          {/* Unit 3.1 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">3.1 Sunan of Ṭawāf al-Qudūm for Men (سُنَنُ الرَّجُلِ فِي طَوَافِ الْقُدُومِ)</h3>
              <span className="tarbiyah-unit-badge">Iḍṭibā‘ &amp; Raml</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَإِذَا وَصَلَ إِلَى الْكَعْبَةِ، قَطَعَ التَّلْبِيَةَ، وَيُسَنُّ لِلرَّجُلِ فِي طَوَافِ الْقُدُومِ شَيْئَانِ:<br />
              ١. <strong>الاِضْطِبَاعُ:</strong> وَهُوَ أَنْ يَجْعَلَ وَسَطَ رِدَائِهِ تَحْتَ إِبْطِهِ الأَيْمَنِ وَطَرَفَيْهِ عَلَى عَاتِقِهِ الأَيْسَرِ؛ فَيَبْدُو كَتِفُهُ الأَيْمَنُ مَكْشُوفًا، وَهَذَا فِي جَمِيعِ أَشْوَاطِ الطَّوَافِ السَّبْعَةِ فَقَطْ.<br />
              ٢. <strong>الرَّمَلُ:</strong> وَهُوَ إِسْرَاعُ الْمَشْيِ مَعَ مُقَارَبَةِ الْخُطَى فِي الأَشْوَاطِ الثَّلَاثَةِ الأُولَى، ثُمَّ يَمْشِي كَعَادَتِهِ فِي الأَرْبَعَةِ الْبَاقِيَةِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Upon reaching the Ka‘bah, he ceases reciting the Talbiyah. Two specific acts are Sunnah for men during this arrival circumambulation (Ṭawāf al-Qudūm):<br />
                1. <strong>Iḍṭibā‘:</strong> Placing the middle of the upper sheet under the right armpit and both ends over the left shoulder, leaving the right shoulder bare throughout all seven circuits of Ṭawāf only.<br />
                2. <strong>Raml:</strong> Walking briskly with short, rapid steps during the first three circuits, followed by normal walking in the remaining four circuits.”
              </p>
            </div>
          </div>

          {/* Unit 3.2 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">3.2 Commencing at the Black Stone (بِدَايَةُ الشَّوْطِ مِنَ الْحَجَرِ الأَسْوَدِ)</h3>
              <span className="tarbiyah-unit-badge">Alignment &amp; Takbīr</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَيَبْدَأُ الطَّوَافَ مِنَ الْحَجَرِ الأَسْوَدِ؛ فَيَسْتَلِمُهُ بِيَدِهِ وَيُقَبِّلُهُ إِنْ تَيَسَّرَ دُونَ مُزَاحَمَةٍ وَلَا إِيذَاءٍ، فَإِنْ لَمْ يَتَيَسَّرْ أَشَارَ إِلَيْهِ بِيَدِهِ الْيُمْنَى إِشَارَةً وَاحِدَةً قَائِلًا: <strong>«اللهُ أَكْبَرُ»</strong>، وَلَا يُقَبِّلُ يَدَهُ عِنْدَ الإِشَارَةِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “He begins Ṭawāf at the Black Stone. He touches it with his right hand and kisses it if easily feasible without pushing or harming others. If that is not readily possible, he points toward it once with his right hand saying ‘Allāhu Akbar’ (Allāh is the Greatest), and he does not kiss his hand when pointing.”
              </p>
            </div>
          </div>

          {/* Unit 3.3 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">3.3 The 7 Full Circuits Outside the Ḥijr (الطَّوَافُ سَبْعَةَ أَشْوَاطٍ مِنْ وَرَاءِ الْحِجْرِ)</h3>
              <span className="tarbiyah-unit-badge">Validity Ruling</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَيَجْعَلُ الْكَعْبَةَ عَنْ يَسَارِهِ وَيَطُوفُ سَبْعَةَ أَشْوَاطٍ كَامِلَةً مِنْ وَرَاءِ الحِجْرِ (حِجْرِ إِسْمَاعِيلَ). وَيَدْعُو فِيهَا بِمَا شَاءَ مِنْ خَيْرَيِ الدُّنْيَا وَالآخِرَةِ، وَيَقْرَأُ الْقُرْآنَ، وَيَذْكُرُ اللهَ تَعَالَى؛ وَلَيْسَ لِكُلِّ شَوْطٍ دُعَاءٌ مَخْصُوصٌ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “He keeps the Ka‘bah to his left and completes seven full circuits outside Ḥijr Ismā‘īl. During these circuits, he may supplicate for whatever he wishes of the good of this life and the Hereafter, recite the Qur’ān, and remember Allāh. There is no specific, fabricated du‘ā assigned to each circuit.”
              </p>
            </div>
          </div>

          {/* Unit 3.4 & Dhikr */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">3.4 The Yemeni Corner &amp; Black Stone Adhkār (الرُّكْنُ الْيَمَانِيُّ وَالدُّعَاءُ بَيْنَ الرُّكْنَيْنِ)</h3>
              <span className="tarbiyah-unit-badge">Authentic Du‘ā</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «وَكُلَّمَا مَرَّ بِالرُّكْنِ الْيَمَانِي اسْتَلَمَهُ بِيَدِهِ إِنْ تَيَسَّرَ دُونَ تَقْبِيلٍ، فَإِنْ لَمْ يَتَيَسَّرْ مَضَى وَلَا يُشِيرُ إِلَيْهِ وَلَا يُكَبِّرُ. وَيُسْتَحَبُّ أَنْ يَقُولَ بَيْنَ الرُّكْنِ الْيَمَانِي وَالْحَجَرِ الأَسْوَدِ:»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Every time he passes the Yemeni Corner, he touches it with his hand if easily possible, without kissing it. If not easily reachable, he passes on without pointing to it or saying Takbīr. Between the Yemeni Corner and the Black Stone, it is recommended to recite:”
              </p>
            </div>
          </div>

          <div className="scholar-dhikr-box">
            <span className="dhikr-category">Dhikr between the Yemeni Corner and the Black Stone</span>
            <p className="dhikr-arabic-phrase" dir="rtl">«رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ»</p>
            <p className="dhikr-transliteration">“Rabbanā Ātinā Fid-Dunyā Ḥasanatan Wa Fil-Ākhirati Ḥasanatan Wa Qinā ‘Adhāban-Nār.”</p>
            <p className="dhikr-meaning">“Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire.”</p>
          </div>

          <div className="scholar-pitfall-box">
            <h4><AlertTriangle size={18} /> Critical Caution (تنبيه شرعي)</h4>
            <p>
              <strong>Never Cut Through Ḥijr Ismā‘īl:</strong> Walking through the opening of the Ḥijr invalidates that circuit because the Ḥijr is part of the interior of the Ka‘bah. Do not kiss or wave at the Yemeni Corner; only touch it if reachable without jostling. Do not rub the cloth (Kiswah) for blessings.
            </p>
          </div>
        </section>

        {/* ==================== STAGE 4 ==================== */}
        <section id="stage-4" className="scholar-stage-container">
          <div className="scholar-stage-header">
            <div className="stage-num-badge">STAGE 04 / 05</div>
            <h2 className="stage-ar-title">الْمَرْحَلَةُ الرَّابِعَةُ: صَلَاةُ رَكْعَتَيِ الطَّوَافِ وَالشُّرْبُ مِنْ زَمْزَمَ</h2>
            <p className="stage-en-subtitle">Stage 4: Two Rak‘ahs Behind Maqām Ibrāhīm &amp; Hydration with Zamzam Water</p>
          </div>

          {/* Unit 4.1 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">4.1 Covering the Shoulder &amp; Proceeding to the Maqām (تَغْطِيَةُ الْكَتِفِ وَالتَّوَجُّهُ إِلَى الْمَقَامِ)</h3>
              <span className="tarbiyah-unit-badge">End of Iḍṭibā‘</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَإِذَا فَرَغَ مِنَ الشَّوْطِ السَّابِعِ، غَطَّى كَتِفَهُ الأَيْمَنَ بِرِدَائِهِ (فَيَنْتَهِي الاِضْطِبَاعُ)، ثُمَّ يَتَوَجَّهُ إِلَى مَقَامِ إِبْرَاهِيمَ عَلَيْهِ السَّلَامُ وَهُوَ يَقْرَأُ قَوْلَ اللهِ تَعَالَى:<br />
              <strong>﴿وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى﴾</strong>»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “When he finishes the seventh circuit, he covers his right shoulder with his sheet (ending Iḍṭibā‘). He then proceeds towards Maqām Ibrāhīm (the Station of Abraham), reciting the verse of Allāh: ‘Wattakhidhū Mim-Maqāmi Ibrāhīma Muṣallā’ (And take the Station of Abraham as a place of prayer).”
              </p>
            </div>
          </div>

          {/* Unit 4.2 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">4.2 The Two Rak‘ahs of Ṭawāf (صَلَاةُ رَكْعَتَيِ الطَّوَافِ)</h3>
              <span className="tarbiyah-unit-badge">Prescribed Recitation</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَيُصَلِّي رَكْعَتَيْنِ خَفِيفَتَيْنِ خَلْفَ الْمَقَامِ إِنْ تَيَسَّرَ، وَإِلَّا فَفِي أَيِّ مَكَانٍ مِنَ الْمَسْجِدِ الْحَرَامِ.<br />
              - يَقْرَأُ فِي الرَّكْعَةِ الأُولَى بَعْدَ الْفَاتِحَةِ: <strong>﴿قُلْ يَا أَيُّهَا الْكَافِرُونَ﴾</strong>.<br />
              - وَفِي الرَّكْعَةِ الثَّانِيَةِ بَعْدَ الْفَاتِحَةِ: <strong>﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾</strong>.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “He prays two brief rak‘ahs behind the Maqām if easily feasible, or anywhere else within the Sacred Mosque.<br />
                - In the first rak‘ah after al-Fātiḥah, he recites: Sūrah al-Kāfirūn (﴿قُلْ يَا أَيُّهَا الْكَافِرُونَ﴾).<br />
                - In the second rak‘ah after al-Fātiḥah, he recites: Sūrah al-Ikhlāṣ (﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾).”
              </p>
            </div>
          </div>

          {/* Unit 4.3 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">4.3 Plentiful Drinking from Zamzam (الشُّرْبُ مِنَ زَمْزَمَ وَالتَّضَلُّعُ)</h3>
              <span className="tarbiyah-unit-badge">Spiritual Hydration</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «ثُمَّ يَتَوَجَّهُ إِلَى زَمْزَمَ فَيَشْرَبُ مِنْ مَائِهَا حَتَّى يَتَضَلَّعَ (يَمْتَلِئَ شِبَعًا وَرِيًّا)، وَيَصُبُّ عَلَى رَأْسِهِ، وَيَدْعُو اللهَ بِمَا شَاءَ، فَإِنَّ «مَاءَ زَمْزَمَ لِمَا شُرِبَ لَهُ».»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Then he proceeds to Zamzam water and drinks until he is fully quenched (his ribs filled with water), pours water over his head, and supplicates to Allāh for whatever he wishes, for indeed: ‘Zamzam water is for whatever purpose it is drunk for.’”
              </p>
            </div>
          </div>

          <div className="scholar-pitfall-box">
            <h4><AlertTriangle size={18} /> Critical Caution (تنبيه شرعي)</h4>
            <p>
              <strong>Avoid Harmful Congestion at the Maqām:</strong> If the area directly behind the glass station of Ibrāhīm is crowded with circling pilgrims, do not push or cause harm. You may pray these two rak‘ahs anywhere inside the Grand Mosque without any loss of reward.
            </p>
          </div>
        </section>

        {/* ==================== STAGE 5 ==================== */}
        <section id="stage-5" className="scholar-stage-container">
          <div className="scholar-stage-header">
            <div className="stage-num-badge">STAGE 05 / 05</div>
            <h2 className="stage-ar-title">الْمَرْحَلَةُ الْخَامِسَةُ: السَّعْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ وَالتَّحَلُّلُ الْكَامِلُ</h2>
            <p className="stage-en-subtitle">Stage 5: Sa‘ī Between Ṣafā &amp; Marwah and Complete Taḥallul (Ḥalq / Taqṣīr)</p>
          </div>

          {/* Unit 5.1 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">5.1 Approaching Mount Ṣafā (التَّوَجُّهُ إِلَى الصَّفَا وَقِرَاءَةُ الآيَةِ)</h3>
              <span className="tarbiyah-unit-badge">Initial Rite Only</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «ثُمَّ يَتَوَجَّهُ إِلَى الصَّفَا لِيَبْدَأَ السَّعْيَ، فَإِذَا دَنَا مِنَ الصَّفَا قَرَأَ قَوْلَهُ تَعَالَى:<br />
              <strong>﴿إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ﴾</strong><br />
              ثُمَّ يَقُولُ: <strong>«نَبْدَأُ بِمَا بَدَأَ اللهُ بِهِ»</strong> (وَلَا يُعِيدُ هَذِهِ الآيَةَ إِلَّا فِي بِدَايَةِ السَّعْيِ عِنْدَ الصَّفَا فَقَطْ).»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Then he heads towards Mount Ṣafā to begin Sa‘ī. When approaching Ṣafā, he recites the verse of Allāh: ‘Innaṣ-Ṣafā Wal-Marwata Min Sha‘ā’irillāh...’ (Indeed, Ṣafā and Marwah are among the symbols of Allāh...). Then he says: ‘Nabda’u Bimā Bada’allāhu Bih’ (We begin with that with which Allāh began). Note: He does not repeat this verse except once at the very start of Sa‘ī when approaching Ṣafā.”
              </p>
            </div>
          </div>

          {/* Unit 5.2 & Dhikr */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">5.2 Tawḥīd &amp; Supplication atop Ṣafā &amp; Marwah (الدُّعَاءُ وَالتَّوْحِيدُ عَلَى الصَّفَا)</h3>
              <span className="tarbiyah-unit-badge">Prophetic Practice</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَيَصْعَدُ عَلَى الصَّفَا حَتَّى يَرَى الْكَعْبَةَ، فَيَسْتَقْبِلُ الْقِبْلَةَ، وَيَرْفَعُ يَدَيْهِ كَهَيْئَةِ الدُّعَاءِ، فَيُوَحِّدُ اللهَ وَيُكَبِّرُهُ وَيَقُولُ:»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “He climbs onto Ṣafā until he can see the Ka‘bah, faces the Qiblah, and raises his hands in supplication (not like the Takbīr of prayer). He declares the Oneness of Allāh, glorifies Him, and recites:”
              </p>
            </div>
          </div>

          <div className="scholar-dhikr-box">
            <span className="dhikr-category">Supplication upon Mount Ṣafā &amp; Mount Marwah (Recited 3 Times with Personal Du‘ā in Between)</span>
            <p className="dhikr-arabic-phrase" dir="rtl">«لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الأَحْزَابَ وَحْدَهُ»</p>
            <p className="dhikr-transliteration">“Lā Ilāha Illallāhu Waḥdahū Lā Sharīka Lah, Lahul-Mulku Wa Lahul-Ḥamd, Wa Huwa ‘Alā Kulli Shay’in Qadīr. Lā Ilāha Illallāhu Waḥdah, Anjaza Wa‘dah, Wa Naṣara ‘Abdah, Wa Hazamal-Aḥzāba Waḥdah.”</p>
            <p className="dhikr-meaning">“None has the right to be worshipped except Allāh alone, without partner. To Him belongs all sovereignty and praise, and He has power over all things. None has the right to be worshipped except Allāh alone. He fulfilled His promise, granted victory to His servant, and defeated the allied armies alone.”</p>
          </div>

          {/* Unit 5.3 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">5.3 Sprinting Between Green Lights &amp; Walking (السَّعْيُ بَيْنَ الْعَلَمَيْنِ الأَخْضَرَيْنِ)</h3>
              <span className="tarbiyah-unit-badge">Men's Sunnah</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «ثُمَّ يَنْزِلُ مِنْ الصَّفَا مُتَّجِهًا إِلَى الْمَرْوَةِ يَمْشِي مَشْيًا مُعْتَادًا، فَإِذَا بَلَغَ الْعَلَمَيْنِ الأَخْضَرَيْنِ رَكَضَ الرَّجُلُ رَكْضًا شَدِيدًا (سَعَى سَعْيًا حَثِيثًا) إِنْ تَيَسَّرَ لَهُ دُونَ أَذًى، أَمَّا الْمَرْأَةُ فَلَا تَرْكُضُ. فَإِذَا جَاوَزَ الْعَلَمَ الثَّانِيَ مَشَى كَعَادَتِهِ حَتَّى يَصِلَ إِلَى الْمَرْوَةِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Then he descends from Ṣafā heading towards Marwah at a normal walking pace. When he reaches the two green-lighted markers, the man sprints briskly if feasible without causing harm, while the woman walks normally. Once past the second green marker, he walks normally until reaching Marwah.”
              </p>
            </div>
          </div>

          {/* Unit 5.4 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">5.4 Seven Laps: Ending at Marwah (إِتْمَامُ السَّبْعَةِ أَشْوَاطٍ)</h3>
              <span className="tarbiyah-unit-badge">Calculation of Laps</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَإِذَا وَصَلَ إِلَى الْمَرْوَةِ فَقَدْ تَمَّ لَهُ شَوْطٌ وَاحِدٌ؛ فَيَصْعَدُ عَلَيْهَا وَيَسْتَقْبِلُ الْقِبْلَةَ وَيَقُولُ وَيَفْعَلُ مِثْلَ مَا فَعَلَ عَلَى الصَّفَا (مِنَ التَّكْبِيرِ وَالتَّهْلِيلِ وَالدُّعَاءِ دُونَ قِرَاءَةِ الآيَةِ). ثُمَّ يَنْزِلُ مِنَ الْمَرْوَةِ عَائِدًا إِلَى الصَّفَا فَيَكُونُ هَذَا الشَّوْطَ الثَّانِيَ؛ وَهَكَذَا حَتَّى يُكْمِلَ سَبْعَةَ أَشْوَاطٍ يَبْدَأُ بِالصَّفَا وَيَخْتِمُ بِالْمَرْوَةِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “When he reaches Marwah, one complete lap is accomplished. He climbs onto it, faces the Qiblah, and says and does as he did atop Ṣafā (glorifying Allāh, declaring Tawḥīd, and supplicating, without repeating the Quranic verse). He then descends towards Ṣafā, completing the second lap; and continues likewise until completing seven laps, beginning at Ṣafā and finishing at Marwah.”
              </p>
            </div>
          </div>

          {/* Unit 5.5 */}
          <div className="tarbiyah-unit">
            <div className="tarbiyah-unit-header">
              <h3 className="tarbiyah-unit-title">5.5 Shaving (Ḥalq) vs. Trimming (Taqṣīr) (الْحَلْقُ أَوِ التَّقْصِيرُ وَالتَّحَلُّلُ الْكَامِلُ)</h3>
              <span className="tarbiyah-unit-badge">Final Taḥallul</span>
            </div>
            <p className="tarbiyah-arabic-text" dir="rtl">
              «فَإِذَا أَتَمَّ سَبْعَةَ أَشْوَاطٍ، بَقِيَ عَلَيْهِ وَاجِبُ التَّحَلُّلِ:<br />
              - <strong>لِلرِّجَالِ:</strong> الْحَلْقُ (وَهُوَ حَلْقُ شَعْرِ الرَّأْسِ كُلِّهِ بِالْمُوسَى)، وَهُوَ الأَفْضَلُ لِدُعَاءِ النَّبِيِّ ﷺ لِلْمُحَلِّقِينَ ثَلَاثًا، أَوِ التَّقْصِيرُ (بِأَنْ يَأْخُذَ مِنْ جَمِيعِ شَعْرِ رَأْسِهِ).<br />
              - <strong>لِلنِّسَاءِ:</strong> التَّقْصِيرُ فَقَطْ، بِأَنْ تَقُصَّ مِنْ أَطْرَافِ ضَفَائِرِهَا أَوْ خُصَلِ شَعْرِهَا قَدْرَ أُنْمُلَةٍ (نَحْوَ سَنْتِيمِتْرَيْنِ)، وَلَا يَجُوزُ لَهَا الْحَلْقُ.<br /><br />
              فَبِذَلِكَ تَمَّتِ الْعُمْرَةُ بِحَمْدِ اللهِ، وَحَلَّ لِلْمُعْتَمِرِ كُلُّ شَيْءٍ حُرِّمَ عَلَيْهِ بِالإِحْرَامِ.»
            </p>
            <div className="tarbiyah-english-box">
              <span className="tarbiyah-english-label">Meaning &amp; Guidance</span>
              <p className="tarbiyah-english-text">
                “Once he finishes seven laps, the obligation of Taḥallul (exiting Iḥrām) remains:<br />
                - <strong>For men:</strong> <em>Ḥalq</em> (shaving the head entirely with a razor), which is vastly superior due to the Prophet's ﷺ supplication for those who shave three times, or <em>Taqsīr</em> (shortening the hair comprehensively across the entire head).<br />
                - <strong>For women:</strong> <em>Taqsīr</em> only, by cutting approximately a fingertip’s length (~2 cm) from the ends of her hair braids or locks. Shaving the head is strictly prohibited for women.<br />
                With this, the ’Umrah is completed by the grace of Allāh, and everything previously prohibited by Iḥrām becomes lawful again.”
              </p>
            </div>
          </div>

          <div className="scholar-pitfall-box">
            <h4><AlertTriangle size={18} /> Critical Caution (تنبيه شرعي)</h4>
            <p>
              <strong>Do Not Repeat the Ayah at Every Lap:</strong> The ayah ﴿إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ﴾ is recited only once upon initial approach to Ṣafā, not on every lap or at Marwah. Also, clipping only two strands of hair does not satisfy the requirement of Taqṣīr for men; trimming must encompass the entire head.
            </p>
          </div>
        </section>

        {/* Bottom Concluding & Action Card */}
        <div className="scholar-concluding-card">
          <h3>Your ’Umrah is Complete (تَمَّتِ الْعُمْرَةُ بِحَمْدِ اللهِ)</h3>
          <p>
            May Allāh accept your pilgrimage, forgive your shortcomings, and grant you an accepted and transformative journey upon the Sunnah.
          </p>
          <div className="scholar-concluding-actions">
            <a
              href="/AMFAJ_Umrah_Sunnah_Guide_Arabic.pdf"
              download="AMFAJ_Umrah_Sunnah_Guide_Arabic.pdf"
              className="button button-primary"
            >
              <Download size={18} /> Download Official PDF Guide
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="button button-light"
            >
              <Printer size={18} /> Print Guide
            </button>
            <Link to="/guidance/umrah" className="button button-secondary">
              Back to ’Umrah Journey Hub
            </Link>
          </div>
        </div>
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
      parent={{ name: "Guidance", to: "/guidance" }}
    />
  );
}

function AdabGuidancePage() {
  const principles = [
    {
      title: "Sanctity of the Holy Cities",
      desc: "Makkah and Madīnah are protected sanctuaries. Refrain from arguments, raising your voice unnecessarily, or disturbing others around the Harams.",
      points: [
        "Be mindful of your speech and avoid any idle disputes (Jidāl).",
        "Keep the focus on continuous Dhikr, Istighfār, and worship.",
        "Respect the local guides, workers, and authority rules in the sanctuaries."
      ]
    },
    {
      title: "Patience & Compassion",
      desc: "Travel brings unexpected delays, crowd pressures, and fatigue. Patience (Sabr) is key to protecting the reward of your pilgrimage.",
      points: [
        "Respond to delays or hotel/transport checks with calm and prayer.",
        "Show gentleness (Rifq) to fellow pilgrims, especially the elderly or weak.",
        "Forgive minor shortcomings from service staff or group members."
      ]
    },
    {
      title: "Group Cooperation",
      desc: "Traveling as a group requires coordination, and coordination protects everyone's safety and comfort.",
      points: [
        "Strictly adhere to the group departure and gathering times set by guides.",
        "Help members of your travel cohort who are struggling or need assistance.",
        "Respect the privacy and resting times of roommates and fellow travelers."
      ]
    }
  ];

  return (
    <PageFrame
      eyebrow="Travel Conduct"
      title="Travel Ādāb & Ethics"
      body="Perform your journey with the highest standards of Islamic character, respecting the sacred boundaries and supporting your fellow pilgrims."
      parent={{ name: "Guidance", to: "/guidance" }}
    >
      <div className="adab-container">
        <div className="adab-intro-card">
          <span className="adab-quote-badge">“</span>
          <h2>Character is the weightiest scale</h2>
          <p>
            The Prophet ﷺ said: "Nothing is heavier on the Scale of Deeds than good character." During ’Umrah and Ḥajj, this standard is even more critical as you travel as a guest of Allāh (Wafd Allāh).
          </p>
        </div>

        <div className="adab-principles-grid">
          {principles.map((pr, idx) => (
            <div key={idx} className="adab-principle-card">
              <h3>{pr.title}</h3>
              <p className="pr-desc">{pr.desc}</p>
              <ul className="principle-list">
                {pr.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle2 size={16} className="bullet-icon-orange" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="adab-action-banner">
          <h3>Need guidance on travel preparations?</h3>
          <p>Our scholars and guides are available to discuss pre-departure ethics with you.</p>
          <div className="adab-btn-wrap">
            <ArrowButton variant="secondary" to="/guidance">
              Back to Guidance Hub
            </ArrowButton>
          </div>
        </div>
      </div>
    </PageFrame>
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
      body="Connect with us on WhatsApp for absolute clarity on your October ’Umrah registration, package details, or sponsorship discussions. Let us take the next step together."
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
          <svg
            className="whatsapp-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px" }}
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.452L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.638 1.982 14.15 1.946 12.01 1.946c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.452 3.39 1.312 4.869L2.433 21.05l4.214-1.896zm12.004-6.848c-.328-.164-1.938-.956-2.237-1.064-.299-.11-.517-.164-.734.164-.218.327-.844 1.064-1.034 1.282-.19.218-.379.245-.708.082-.328-.164-1.386-.51-2.639-1.627-.975-.87-1.633-1.945-1.824-2.272-.19-.328-.02-.505.143-.668.148-.147.328-.382.492-.573.164-.19.218-.328.328-.546.11-.218.055-.41-.028-.573-.082-.164-.734-1.77-1.006-2.428-.266-.641-.533-.553-.734-.563-.19-.01-.408-.01-.626-.01-.218 0-.573.082-.873.41-.3.327-1.147 1.12-1.147 2.73s1.173 3.165 1.336 3.382c.164.218 2.302 3.513 5.578 4.922.779.336 1.388.536 1.864.688.784.249 1.498.214 2.062.13.629-.094 1.938-.792 2.211-1.556.273-.764.273-1.42.19-1.556-.083-.136-.3-.218-.629-.382z" />
          </svg>
          Open WhatsApp
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
  parent,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  to: string;
  parent?: { name: string; to: string };
}) {
  return (
    <PageFrame eyebrow={eyebrow} title={title} body={body} parent={parent}>
      <div className="empty-state">
        <Sparkles size={32} />
        <h2>{title}</h2>
        <p>{body}</p>
        <ArrowButton variant="primary" to={to}>
          {cta}
        </ArrowButton>
      </div>
    </PageFrame>
  );
}

function PageFrame({
  eyebrow,
  title,
  body,
  parent,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  parent?: { name: string; to: string };
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
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">&gt;</span>
            {parent && (
              <>
                <Link to={parent.to}>{parent.name}</Link>
                <span className="separator">&gt;</span>
              </>
            )}
            <span className="current">{eyebrow}</span>
          </nav>
          <h1>{title}</h1>
          <p>{body}</p>
        </motion.div>
      </div>
      <motion.div
        className="page-content-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
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
    <motion.section
      className="section final-cta"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <p className="eyebrow inverse">Next step</p>
        <h2>Ready to begin your sacred journey?</h2>
        <p>
          Start your registration on WhatsApp today. Let us guide you through every step of this
          blessed preparation with complete honesty and care.
        </p>
      </div>
      <ArrowButton variant="light" href={whatsappHref}>
        Start Registration
      </ArrowButton>
    </motion.section>
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
        <FooterColumn title="Company" links={[["About Us", "/about"], ["FAQ", "/faq"], ["Contact", "/contact"]]} />
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

function InlineTalbiyahPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Play failed:", err);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="inline-talbiyah-player">
      <audio
        ref={audioRef}
        src="https://archive.org/download/labaika_lahoma_labaik_haj/labaika.mp3"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />
      <div className="inline-talbiyah-header">
        <span className="inline-talbiyah-title">Listen to the Talbiyah Supplication</span>
        {isPlaying && (
          <div className="talbiyah-visualizer">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        )}
      </div>
      
      <p className="inline-talbiyah-arabic" lang="ar" dir="rtl">
        لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ
      </p>

      <div className="inline-talbiyah-controls">
        <button
          className="button button-primary button-talbiyah-play"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Talbiyah" : "Play Talbiyah"}
        >
          {isPlaying ? <Volume2 size={16} /> : <Play size={16} />}
          <span>{isPlaying ? "Pause Recitation" : "Listen to Recitation"}</span>
        </button>
        <button
          className="button-talbiyah-mute"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute Talbiyah" : "Mute Talbiyah"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
}

function InteractiveTawafGuide() {
  const [activeTab, setActiveTab] = useState<'anatomy' | 'sequence' | 'post_tawaf'>('anatomy');
  const [selectedLandmark, setSelectedLandmark] = useState<'black_stone' | 'yemeni' | 'hijr' | 'maqam'>('black_stone');

  const landmarks = {
    black_stone: {
      name: "The Black Stone (Al-Ḥajar al-Aswad)",
      significance: "The absolute starting and ending line of each of the 7 rounds of Ṭawāf. Aligned with a green light on the Haram wall.",
      ruling: "When aligning with the Black Stone, point your right hand toward it and say 'Bismillāhi, Allāhu Akbar' (In the Name of Allāh, Allāh is the Greatest) and start the round. Repeat this at the end of each round."
    },
    yemeni: {
      name: "The Yemeni Corner (Rukn al-Yamānī)",
      significance: "The corner of the Ka‘bah right before the Black Stone corner.",
      ruling: "Touch it with your right hand if possible, without kissing it or saying Takbīr. If too crowded, simply pass it without pointing. Recite the Sunnah Du‘ā‘ between this corner and the Black Stone: 'Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ‘adhāban-nār' (Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire)."
    },
    hijr: {
      name: "Al-Hijr (Hijr Isma‘īl / Al-Ḥaṭīm)",
      significance: "The semi-circular low wall on the north side of the Ka‘bah. It is legally part of the Ka‘bah.",
      ruling: "Crucial Rule: You must walk outside the Hijr Isma‘īl during Ṭawāf. Walking through the gap between this wall and the Ka‘bah invalidates the round, as you would be walking inside the Ka‘bah itself."
    },
    maqam: {
      name: "Maqām Ibrāhīm (The Station of Abraham)",
      significance: "The stone containing the footprints of Prophet Ibrāhīm (as) where he stood to build the Ka‘bah.",
      ruling: "After completing your 7 rounds of Ṭawāf, pray 2 short Rak‘ahs behind Maqām Ibrāhīm (if possible, or anywhere in the Haram if crowded). Recite Surah Al-Kāfirūn in the first Rak‘ah and Surah Al-Ikhlāṣ in the second."
    }
  };

  const steps = [
    { num: 1, text: "Align with the Black Stone (start line), make intention, point right hand and say: 'Bismillāhi, Allāhu Akbar'." },
    { num: 2, text: "Begin walking counter-clockwise, keeping the Ka‘bah on your left." },
    { num: 3, text: "Walk briskly (Raml) with chest out for the first 3 rounds (men only), and walk normally for the remaining 4 rounds." },
    { num: 4, text: "Ensure you walk completely outside the semi-circular Hijr Isma‘īl wall." },
    { num: 5, text: "Perform Dhikr, recite Qur'ān, and make personal supplications (there are no fixed words for rounds 1-6)." },
    { num: 6, text: "Upon reaching the Yemeni Corner, recite: 'Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ‘adhāban-nār' until you reach the Black Stone." },
    { num: 7, text: "Reaching the Black Stone completes one round. Align, point, say 'Allāhu Akbar', and repeat the sequence for 7 total rounds." }
  ];

  return (
    <div className="tawaf-interactive-guide">
      <div className="tawaf-tabs">
        <button 
          className={activeTab === 'anatomy' ? 'tab-btn active' : 'tab-btn'} 
          onClick={() => setActiveTab('anatomy')}
        >
          Ka‘bah Anatomy
        </button>
        <button 
          className={activeTab === 'sequence' ? 'tab-btn active' : 'tab-btn'} 
          onClick={() => setActiveTab('sequence')}
        >
          Path of a Round
        </button>
        <button 
          className={activeTab === 'post_tawaf' ? 'tab-btn active' : 'tab-btn'} 
          onClick={() => setActiveTab('post_tawaf')}
        >
          Post-Ṭawāf Prayer
        </button>
      </div>

      <div className="tawaf-tab-content">
        {activeTab === 'anatomy' && (
          <div className="anatomy-tab">
            <p className="tab-instruction">Select a landmark to view its specific Sunnah guidelines:</p>
            <div className="landmark-grid">
              {Object.keys(landmarks).map((key) => {
                const item = landmarks[key as keyof typeof landmarks];
                const isSelected = selectedLandmark === key;
                return (
                  <button 
                    key={key}
                    className={`landmark-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedLandmark(key as any)}
                  >
                    {item.name.split(' (')[0]}
                  </button>
                );
              })}
            </div>
            <div className="landmark-details-card">
              <h4>{landmarks[selectedLandmark].name}</h4>
              <div className="landmark-info-row">
                <span className="info-badge significance">Significance</span>
                <p>{landmarks[selectedLandmark].significance}</p>
              </div>
              <div className="landmark-info-row">
                <span className="info-badge ruling">Sunnah Action</span>
                <p>{landmarks[selectedLandmark].ruling}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sequence' && (
          <div className="sequence-tab">
            <div className="sequence-steps-list">
              {steps.map((step) => (
                <div key={step.num} className="sequence-step-item">
                  <div className="step-number">{step.num}</div>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
            <div className="tab-quote-box">
              <blockquote>“Ṭawāf begins at the Black Stone and ends there.”</blockquote>
            </div>
          </div>
        )}

        {activeTab === 'post_tawaf' && (
          <div className="post-tawaf-tab">
            <div className="post-tawaf-grid">
              <div className="post-tawaf-card">
                <div className="card-header">
                  <MapPin size={20} />
                  <h4>2-Rak‘ahs at Maqām Ibrāhīm</h4>
                </div>
                <p>
                  Upon completing your 7th round, move towards Maqām Ibrāhīm, reciting: 
                  <strong className="block-arabic">“Wattakhidhū min maqāmi Ibrāhīma muṣallā”</strong>
                  (And take, [O believers], from the standing place of Abraham a place of prayer).
                </p>
                <p>Perform two short Rak'ahs: recite <strong>Surah Al-Kāfirūn</strong> in the first Rak'ah, and <strong>Surah Al-Ikhlāṣ</strong> in the second.</p>
              </div>
              <div className="post-tawaf-card">
                <div className="card-header">
                  <CheckCircle2 size={20} />
                  <h4>Drink Zamzam Water</h4>
                </div>
                <p>
                  After the prayer, proceed to the Zamzam wells or water coolers located in the Haram. Drink your fill while standing and facing the Ka‘bah, supplicating for what you wish.
                </p>
                <p>Pour some water over your head (as the Prophet ﷺ did) before proceeding to the hills of Ṣafā and Marwah for Sa‘ī.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TawafWalkthroughModal({ onClose }: { onClose: () => void }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
  const [mobileTab, setMobileTab] = useState<'map' | 'guide'>('map');

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      className="tawaf-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="tawaf-modal-container"
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tawaf-modal-top-bar">
          <div className="modal-header-info">
            <span className="modal-eyebrow">Interactive Guide & Visual</span>
            <h2>Step 02: Ṭawāf Walkthrough</h2>
          </div>
          <button className="tawaf-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {isMobile && (
          <div className="modal-mobile-toggle">
            <button 
              className={mobileTab === 'map' ? 'toggle-btn active' : 'toggle-btn'} 
              onClick={() => setMobileTab('map')}
            >
              <Compass size={16} />
              <span>Visual Map</span>
            </button>
            <button 
              className={mobileTab === 'guide' ? 'toggle-btn active' : 'toggle-btn'} 
              onClick={() => setMobileTab('guide')}
            >
              <BookOpen size={16} />
              <span>Guide Text</span>
            </button>
          </div>
        )}

        <div className="tawaf-modal-grid">
          {(!isMobile || mobileTab === 'map') && (
            <div className="tawaf-modal-left">
              <div className="tawaf-image-scroll-wrapper">
                <img src="/tawaf-guide-infographic.png" alt="Ka'bah Tawaf Guide Infographic" />
              </div>
              <div className="tawaf-image-caption">
                <Compass size={14} className="spin-icon" />
                <span>{isMobile ? "Scroll or pinch-zoom to view infographic details" : "Scroll inside the image to view the details"}</span>
              </div>
            </div>
          )}
          {(!isMobile || mobileTab === 'guide') && (
            <div className="tawaf-modal-right">
              <InteractiveTawafGuide />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AboutPage() {
  const [activePillarTab, setActivePillarTab] = useState<'scholar' | 'finance' | 'hospitality'>('scholar');
  const [activeServiceCategory, setActiveServiceCategory] = useState<'packages' | 'logistics' | 'bespoke'>('packages');

  const services = {
    packages: [
      {
        title: "’Umrah Bookings",
        icon: PackageCheck,
        description: "Comprehensive packages with flights, visas, hotels, guides, and Zamzam water.",
      },
      {
        title: "Ḥajj Bookings",
        icon: BadgeCheck,
        description: "Dedicated and highly organized Hajj pilgrimage support, structured around the Sunnah.",
      },
      {
        title: "Group Tours",
        icon: Users,
        description: "Well-coordinated, scholar-led group journeys for collective worship and support.",
      },
    ],
    logistics: [
      {
        title: "Air Tickets",
        icon: Plane,
        description: "Seamless booking and arrangement of return tickets with premium airlines.",
      },
      {
        title: "Visas",
        icon: FileText,
        description: "Hassle-free procurement of official ’Umrah and Hajj visas with absolute compliance.",
      },
      {
        title: "Chartered Flights",
        icon: Plane,
        description: "Specialized flight arrangements for peak periods (such as Hajj) to ensure timely departures.",
      },
    ],
    bespoke: [
      {
        title: "Hotel Reservations",
        icon: MapPin,
        description: "Vetted accommodations in Makkah and Madīnah situated close to the Harams.",
      },
      {
        title: "Family Tours",
        icon: HeartHandshake,
        description: "Tailored, slower-paced private packages designed for the specific needs of families.",
      },
      {
        title: "Holiday Packages",
        icon: Sparkles,
        description: "Specially curated spiritual and educational journeys for families and groups.",
      },
    ],
  };

  const pillarTabs = {
    scholar: {
      num: "01",
      title: "Reputable Scholar-Led Tutelage",
      subtitle: "Guidance on the Qur'an and Sunnah",
      description: "Our package designs are not simply logistics; they are centered around worship correctness. We secure reputable scholars to travel with you, delivering daily tutelage and verified guidance for every rite.",
      bulletPoints: [
        "Interactive pre-departure webinars to clarify the rites of Ihram, Tawaf, and Sa'i.",
        "On-site lectures and question-and-answer sessions in Makkah and Madīnah.",
        "Dr. Sharafuddeen Gbadebo Raaji planned to join the coming Umrah as scholar."
      ],
      quote: "“Prepare your journey before payment with verified knowledge.”"
    },
    finance: {
      num: "02",
      title: "Total Financial Integrity",
      subtitle: "Honest Promises & Zero Hidden Fees",
      description: "We believe in complete financial transparency. We disclose all inclusions and exclusions upfront, ensuring you never face unexpected surcharges for visas, hotels, or transport.",
      bulletPoints: [
        "Clear package outlines specifying what is included and what is excluded.",
        "No sudden charges or adjustments due to exchange rate fluctuations once registered.",
        "Secure payments tracked in structured records."
      ],
      quote: "“Absolute financial honesty is our sacred trust with every pilgrim.”"
    },
    hospitality: {
      num: "03",
      title: "Bespoke Sincere Hospitality",
      subtitle: "Personalized Support Every Step",
      description: "Every pilgrim is an honored guest of Allah. Our team provides close, personalized care to ensure your comfort, safety, and health needs are fully met.",
      bulletPoints: [
        "Dedicated group guides who stay with the pilgrims 24/7.",
        "Accommodation pre-vetted to ensure close proximity to the Harams.",
        "Special attention and assistance for elderly or first-time pilgrims."
      ],
      quote: "“Your safety and focus on worship are our highest operational priorities.”"
    }
  };

  return (
    <PageFrame
      eyebrow="About Us"
      title="Sincere service, uncompromised integrity."
      body="AMFAJ Travels and Tours serves Muslims seeking Hajj and ’Umrah travel support that is honest, dignified, and fully aligned with the Sunnah."
    >
      <div className="about-page-container">
        {/* Section 1: Why AMFAJ (Zemtura inspired Split Layout) */}
        <section className="about-why-section">
          <div className="about-why-grid">
            <div className="why-stat-card">
              <h3>100%</h3>
              <p>Sunnah-Aligned Guidance</p>
              <div className="why-stat-divider" />
              <span className="why-stat-sub">Led by Verified Scholars</span>
            </div>
            <div className="why-text-col">
              <span className="why-eyebrow-tag">Why AMFAJ</span>
              <h2 className="why-split-content">
                We exist for sincere pilgrims, devotion-focused families, and seekers of authentic worship. <span className="why-split-content-span">For those who want Hajj and ’Umrah travel supported with total financial integrity and guided by the pure Qur'an and Sunnah.</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Section 2: Stats Strip (Zemtura inspired Monotony Break) */}
        <section className="about-stats-strip">
          <div className="about-stats-strip-container">
            <div className="stat-strip-item">
              <strong>100%</strong>
              <span>Sunni Standard</span>
            </div>
            <div className="stat-strip-item">
              <strong>0</strong>
              <span>Hidden Surcharges</span>
            </div>
            <div className="stat-strip-item">
              <strong>1:1</strong>
              <span>Bespoke Care</span>
            </div>
            <div className="stat-strip-item">
              <strong>24/7</strong>
              <span>On-Field Support</span>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Pillars Section (Zemtura inspired Vertical Tabs) */}
        <section className="about-pillars-interactive">
          <div className="section-header-centered">
            <span className="section-eyebrow-mini">Core Framework</span>
            <h2>Our Core Pillars of Service</h2>
            <p>Select a pillar to explore how we protect and enrich your journey to the Holy Land.</p>
          </div>
          <div className="pillars-tabs-grid">
            <div className="pillars-menu">
              {(Object.keys(pillarTabs) as Array<keyof typeof pillarTabs>).map((key) => {
                const item = pillarTabs[key];
                const isActive = activePillarTab === key;
                return (
                  <button
                    key={key}
                    className={`pillar-menu-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActivePillarTab(key)}
                  >
                    <span className="btn-num">{item.num}</span>
                    <div className="btn-text-wrap">
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="pillars-pane-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillarTab}
                  className="pillar-pane-card"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="pane-num-badge">{pillarTabs[activePillarTab].num}</span>
                  <h3>{pillarTabs[activePillarTab].title}</h3>
                  <p className="pane-lead-text">{pillarTabs[activePillarTab].description}</p>
                  <ul>
                    {pillarTabs[activePillarTab].bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <blockquote>{pillarTabs[activePillarTab].quote}</blockquote>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Section 4: Our Core Services (Tabbed Category Monotony Break) */}
        <section className="about-services-section">
          <div className="section-header-centered">
            <span className="section-eyebrow-mini">Capabilities</span>
            <h2>Our Core Services</h2>
            <p>We handle every travel detail with professionalism and integrity, enabling you to focus completely on your devotion.</p>
          </div>

          <div className="services-tabs-menu">
            <button 
              className={activeServiceCategory === 'packages' ? 'service-tab-btn active' : 'service-tab-btn'}
              onClick={() => setActiveServiceCategory('packages')}
            >
              <BadgeCheck size={18} />
              <span>Pilgrimage Packages</span>
            </button>
            <button 
              className={activeServiceCategory === 'logistics' ? 'service-tab-btn active' : 'service-tab-btn'}
              onClick={() => setActiveServiceCategory('logistics')}
            >
              <Plane size={18} />
              <span>Travel & Logistics</span>
            </button>
            <button 
              className={activeServiceCategory === 'bespoke' ? 'service-tab-btn active' : 'service-tab-btn'}
              onClick={() => setActiveServiceCategory('bespoke')}
            >
              <Sparkles size={18} />
              <span>Bespoke Accommodation</span>
            </button>
          </div>

          <div className="services-pane-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceCategory}
                className="about-services-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                {services[activeServiceCategory].map((service, idx) => {
                  const IconComp = service.icon;
                  return (
                    <div key={idx} className="about-service-card">
                      <div className="service-icon-circle">
                        <IconComp size={24} />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Section 5: CEO Message Section */}
        <section className="about-ceo-section">
          <div className="about-ceo-grid">
            <div className="about-ceo-speech-card">
              <span className="speech-quote-icon">“</span>
              <h2>A Message from Our Leadership</h2>
              <p className="ceo-intro-greeting">Assalamu alaykum wa rahmatullahi wa barakatuh.</p>
              <p>
                At AMFAJ Travels and Tours, we believe that Hajj and ’Umrah are not merely journeys or travel bookings; they are sacred trusts. Our mission is to facilitate your pilgrimage with absolute honesty and the highest level of care.
              </p>
              <p>
                We understand the deep anxiety pilgrims feel regarding hidden charges, unfulfilled promises, and incorrect guidance during worship. This is why we built AMFAJ on four pillars of integrity: absolute financial honesty, clear promises with zero hidden fees, scholar-led tutelage, and bespoke personalized hospitality.
              </p>
              <p>
                When you choose AMFAJ, you are not just booking a ticket. You are embarking on a journey structured around the pure worship of Allah, guided by the Qur'an and the Sunnah as understood by the pious predecessors. Our team is committed to standing by your side at every step, ensuring your safety, comfort, and focus remain entirely on your devotion.
              </p>
              <p className="ceo-signoff">
                We look forward to serving you on your next sacred journey. May Allah accept our intentions and acts of worship.
              </p>
              <div className="ceo-profile">
                <strong>Fajumobi Adekunle Ibrahim</strong>
                <span>CEO, AMFAJ Travels and Tours</span>
              </div>
            </div>
            
            <div className="about-ceo-visual">
              <div className="ceo-visual-card">
                <div className="ceo-visual-accent" />
                <div className="ceo-visual-content">
                  <HeartHandshake className="ceo-visual-icon" size={48} />
                  <h3>Honest Promises</h3>
                  <p>“We serve you with total honesty, personalized hospitality, financial integrity, and zero hidden fees.”</p>
                  <span className="ceo-visual-seal">Verified Sunni Standard</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* About CTA Card */}
        <div className="about-cta-card-wrapper">
          <div className="about-cta-card">
            <h2>Join Our Next Journey</h2>
            <p>Experience a stress-free, scholar-led pilgrimage to Makkah and Madīnah structured around the Qur’ān and Sunnah.</p>
            <a className="button button-white" href={whatsappHref}>
              <MessageCircle size={18} /> Start Registration on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

export default App;
