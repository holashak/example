import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { archive, journal, projects, site, type Project } from './content/site'
import './styles.css'

function Seo({ title = site.title, description = site.description }: { title?: string; description?: string }) {
  useEffect(() => { document.title = title; const meta = document.querySelector('meta[name="description"]'); meta?.setAttribute('content', description) }, [title, description])
  return null
}

function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0) }, [pathname]); return null }

function Navigation({ onClose }: { onClose?: () => void }) {
  return <nav aria-label="Primary navigation" className="primary-nav">{['Portfolio', 'Journal', 'Archive', 'About'].map((label) => <NavLink key={label} onClick={onClose} to={label === 'Portfolio' ? '/' : `/${label.toLowerCase()}`} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
}

function SiteHeader() {
  const [open, setOpen] = useState(false); const menuRef = useRef<HTMLDivElement>(null); const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open') }, [open])
  useEffect(() => { if (!open) return; const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); buttonRef.current?.focus() } }; document.addEventListener('keydown', onKey); menuRef.current?.querySelector<HTMLElement>('a')?.focus(); return () => document.removeEventListener('keydown', onKey) }, [open])
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="mobile-header"><Link className="wordmark" to="/">{site.name}</Link><button ref={buttonRef} className="menu-button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><span /><span /></button></header>
    {open && <div ref={menuRef} className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu"><button className="menu-close" aria-label="Close menu" onClick={() => { setOpen(false); buttonRef.current?.focus() }}>Close</button><Link className="menu-wordmark" to="/" onClick={() => setOpen(false)}>{site.name}</Link><Navigation onClose={() => setOpen(false)} /><p>{site.descriptor}</p></div>}
  </>
}

function Footer() { return <footer><span>© 2026 Alex Morrow. All Rights Reserved.</span><a href={site.instagram} target="_blank" rel="noreferrer">instagram</a></footer> }
function Layout({ children }: { children: ReactNode }) { return <><SiteHeader /><div className="desktop-frame"><aside><Link className="wordmark" to="/">{site.name}</Link><p>{site.descriptor}</p><Navigation /></aside><main id="main">{children}</main></div><Footer /></> }

function ProjectCard({ project, index }: { project: Project; index: number }) { return <Link className={`project-card card-${index}`} to={`/projects/${project.slug}`}><img src={project.images[0].src} alt={project.coverAlt} loading={index === 0 ? 'eager' : 'lazy'} /><span className="project-card-scrim" /><span className="project-card-title">{project.title}</span><span className="project-card-meta">{project.category} / {project.year}</span></Link> }
function Home() { return <><Seo /><section className="home-intro"><p>Photographs of people, place, and the spaces between.</p><span>Melbourne / Australia</span></section><section className="project-grid" aria-label="Photography projects">{projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</section></> }

function ProjectPage() { const { slug } = useParams(); const project = projects.find((p) => p.slug === slug); if (!project) return <NotFound />; const index = projects.indexOf(project); const previous = projects[(index + projects.length - 1) % projects.length]; const next = projects[(index + 1) % projects.length]; return <><Seo title={`${project.title} — ${site.name}`} description={project.introduction} /><article className="project-page"><Link className="back-link" to="/">← Portfolio</Link><div className="project-heading"><p className="eyebrow">{project.category} / {project.location} / {project.year}</p><h1>{project.title}</h1><p className="lede">{project.introduction}</p></div><div className="gallery"><div className="gallery-row">{project.images.slice(0, 3).map((im) => <img key={im.src} src={im.src} alt={im.alt} loading="lazy" />)}</div><img className="gallery-large" src={project.images[3].src} alt={project.images[3].alt} loading="lazy" /></div><div className="project-pager"><Link to={`/projects/${previous.slug}`}><small>Previous</small>{previous.title}</Link><Link to={`/projects/${next.slug}`}><small>Next</small>{next.title}</Link></div></article></> }

function Journal() { return <><Seo title={`Journal — ${site.name}`} /><section className="listing-page"><p className="eyebrow">Field notes</p><h1>Journal</h1><div className="journal-list">{journal.map((entry) => <Link key={entry.slug} to={`/journal/${entry.slug}`}><time>{entry.date}</time><span><strong>{entry.title}</strong><em>{entry.summary}</em></span></Link>)}</div></section></> }
function JournalPage() { const { slug } = useParams(); const entry = journal.find((j) => j.slug === slug); if (!entry) return <NotFound />; return <><Seo title={`${entry.title} — Journal — ${site.name}`} description={entry.summary} /><article className="journal-page"><Link className="back-link" to="/journal">← Journal</Link><p className="eyebrow">{entry.date}</p><h1>{entry.title}</h1><p className="lede">{entry.summary}</p><div className="article-body">{entry.body.map((p) => <p key={p}>{p}</p>)}</div></article></> }

function Archive() { const [filter, setFilter] = useState(''); const entries = [...projects.map((p) => ({ label: p.title, detail: `${p.category} / ${p.location}`, year: p.year.toString(), tags: p.tags, category: p.category, to: `/projects/${p.slug}` })), ...journal.map((j) => ({ label: j.title, detail: `Journal / ${j.date}`, year: j.year.toString(), tags: j.tags, category: 'Notes', to: `/journal/${j.slug}` }))]; const filtered = filter ? entries.filter((e) => e.year === filter || e.tags.includes(filter) || e.category === filter) : entries; return <><Seo title={`Archive — ${site.name}`} /><section className="archive-page"><p className="eyebrow">Index</p><h1>Archive</h1><div className="archive-controls">{Object.entries(archive).map(([group, values]) => <div key={group}><h2>{group}</h2><div className="filter-list">{values.map((value) => <button key={value} className={filter === value ? 'selected' : ''} onClick={() => setFilter(filter === value ? '' : value)} aria-pressed={filter === value}>{value}</button>)}</div></div>)}</div>{filter && <button className="clear-filter" onClick={() => setFilter('')}>Clear filters</button>}<p className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'entry' : 'entries'}</p><div className="archive-results">{filtered.map((e) => <Link key={e.to} to={e.to}><span>{e.label}</span><small>{e.detail}</small><time>{e.year}</time></Link>)}</div></section></> }

function About() { return <><Seo title={`About — ${site.name}`} /><section className="about-page"><div><p className="eyebrow">About</p><h1>About</h1></div><figure><img src={`${import.meta.env.BASE_URL}images/about-portrait.jpg`} alt="Portrait placeholder of Alex Morrow in soft window light." /><figcaption>Alex Morrow, Melbourne</figcaption></figure><div className="about-copy"><p>Alex Morrow is a fictional placeholder identity for an independent photographer based in Melbourne, Australia. The work moves between human stories and open landscapes, with an interest in ordinary gestures, changing weather, and the traces people leave on a place.</p><p>The photographs are made slowly and with available light. They look for moments that feel observed rather than arranged: a pause at a crossing, a room at the end of the day, or a road disappearing into rain.</p><p>For assignments, print enquiries, or collaborations, write to <a href={`mailto:${site.email}`}>{site.email}</a>.</p><dl><div><dt>Based in</dt><dd>Melbourne, Australia</dd></div><div><dt>Availability</dt><dd>Editorial and personal commissions</dd></div><div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div><div><dt>Instagram</dt><dd><a href={site.instagram}>instagram</a></dd></div></dl></div></section></> }
function NotFound() { return <><Seo title={`Not found — ${site.name}`} /><section className="not-found"><p className="eyebrow">404</p><h1>The frame is empty.</h1><p>The page you were looking for has moved or no longer exists.</p><Link className="button-link" to="/">Return to Portfolio</Link></section></> }
function App() { const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'; return <BrowserRouter basename={basename}><ScrollToTop /><Layout><Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectPage />} /><Route path="/journal" element={<Journal />} /><Route path="/journal/:slug" element={<JournalPage />} /><Route path="/archive" element={<Archive />} /><Route path="/about" element={<About />} /><Route path="*" element={<NotFound />} /></Routes></Layout></BrowserRouter> }

export default App

createRoot(document.getElementById('root')!).render(<App />)
