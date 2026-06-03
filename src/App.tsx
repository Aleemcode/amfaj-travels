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
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
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
    question: "When is the September ’Umrah journey?",
    answer:
      "Departure is planned for September 29/30, 2026, with arrival back on October 10/11, 2026, In Shā’ Allāh.",
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
      <WelcomeVoicePlayer />
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
        title="Our September ’Umrah registration is now open."
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

function PackageBreakdown() {
  const facts = [
    ["Departure", "September 29/30, 2026"],
    ["Arrival", "October 10/11, 2026"],
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
      title="Ḥajj package details will open closer to the season."
      body="For now, we are keeping the website focused on the active September ‘Umrah campaign. Ḥajj information will be added when the package details are confirmed."
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
                    {node.step === "02" && <InteractiveTawafGuide />}
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
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">&gt;</span>
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

function WelcomeVoicePlayer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const played = sessionStorage.getItem("welcome_played");
    if (!played) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsBlocked(false);
        })
        .catch((error) => {
          console.log("Welcome voice autoplay blocked:", error);
          setIsBlocked(true);
        });
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsBlocked(false);
        })
        .catch((err) => {
          console.error("Welcome play failed:", err);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    sessionStorage.setItem("welcome_played", "true");
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    sessionStorage.setItem("welcome_played", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="welcome-voice-widget"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <audio
            ref={audioRef}
            src="/welcome.m4a"
            preload="auto"
            onEnded={handleEnded}
          />
          
          <button className="welcome-voice-close" onClick={handleClose} aria-label="Dismiss welcome greeting">
            <X size={16} />
          </button>

          <div className="welcome-voice-header">
            <div className="welcome-voice-badge">
              <span className="welcome-voice-pulse-dot" />
              Audio Welcome
            </div>
            {isPlaying && (
              <div className="welcome-voice-visualizer">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </div>
            )}
          </div>

          <div className="welcome-voice-body">
            <p className="welcome-voice-text">
              “Welcome to AMFAJ Travels and Tours. We are happy to serve you with sincere trust and integrity. How may we help you prepare for the coming ’Umrah?”
            </p>
          </div>

          <div className="welcome-voice-controls">
            <button
              className={`button-welcome-voice-action ${isBlocked ? "is-pulsing" : ""}`}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Welcome Greeting" : "Play Welcome Greeting"}
            >
              {isPlaying ? <Volume2 size={18} /> : <Play size={18} />}
              <span>{isPlaying ? "Pause Greeting" : isBlocked ? "Play Welcome Greeting" : "Play"}</span>
            </button>
            <button
              className="button-welcome-voice-mute"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Greeting" : "Mute Greeting"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
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

export default App;
