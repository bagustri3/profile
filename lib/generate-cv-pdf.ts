import type { profile } from '@/data/profile'

type Profile = typeof profile

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character)

export function generateCVPdf(data: Profile) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  const experience = data.experience.map((item) => `
    <article class="experience">
      <div class="row"><strong>${escapeHtml(item.role)}</strong><span>${escapeHtml(item.period)}</span></div>
      <b>${escapeHtml(item.company)} · ${escapeHtml(item.location)}</b>
      <p>${escapeHtml(item.description)}</p>
      <small>${item.tags.map(escapeHtml).join(' · ')}</small>
    </article>`).join('')

  const education = data.education.map((item) => `
    <article class="education"><div class="row"><strong>${escapeHtml(item.degree)}</strong><span>${escapeHtml(item.year)}</span></div><p>${escapeHtml(item.school)} · ${escapeHtml(item.detail)}</p></article>`).join('')

  const skills = Object.entries(data.skills).map(([group, values]) => `<div><strong>${escapeHtml(group)}</strong><p>${values.map(escapeHtml).join(' · ')}</p></div>`).join('')
  const languages = data.languages.map(([language, level]) => `${escapeHtml(language)} (${escapeHtml(level)})`).join(' · ')

  const printRoot = document.createElement('div')
  printRoot.id = 'cv-print-root'
  printRoot.innerHTML = `<style>
    #cv-print-root { display: none; }
    @media print {
      body > *:not(#cv-print-root) { display: none !important; }
      #cv-print-root { display: block !important; color: #20201f; font: 10.5pt/1.55 Arial, sans-serif; }
      @page { size: A4; margin: 16mm; }
      #cv-print-root * { box-sizing: border-box; }
      #cv-print-root h1 { margin: 0; font: 700 30pt/1.05 Georgia, serif; letter-spacing: -1px; }
      #cv-print-root h2 { margin: 24px 0 9px; padding-bottom: 5px; border-bottom: 1px solid #d9d3c9; color: #6a7460; font-size: 9pt; letter-spacing: 2px; text-transform: uppercase; }
      #cv-print-root .header { display: flex; justify-content: space-between; gap: 24px; padding-bottom: 18px; border-bottom: 3px solid #9caa8e; }
      #cv-print-root .title { margin-top: 7px; color: #6a7460; font-size: 12pt; }
      #cv-print-root .contact { text-align: right; color: #66635d; font-size: 9pt; }
      #cv-print-root .intro { margin: 18px 0 0; font-size: 11pt; }
      #cv-print-root .experience, #cv-print-root .education { margin: 0 0 14px; page-break-inside: avoid; }
      #cv-print-root .row { display: flex; justify-content: space-between; gap: 16px; }
      #cv-print-root .row span { color: #66635d; }
      #cv-print-root article b { display: block; margin-top: 2px; color: #6a7460; font-size: 9.5pt; }
      #cv-print-root p { margin: 4px 0; }
      #cv-print-root small { color: #66635d; }
      #cv-print-root .skills { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
      #cv-print-root .skills p { color: #66635d; font-size: 9pt; }
    }
  </style>
  <main class="cv-document">
    <header class="header"><div><h1>${escapeHtml(data.name)}</h1><div class="title">${escapeHtml(data.title)}</div></div><div class="contact">${escapeHtml(data.location)}<br>${escapeHtml(data.email)}<br>${escapeHtml(data.phone)}</div></header>
    <p class="intro">${escapeHtml(data.about)}</p>
    <h2>Experience</h2>${experience}
    <h2>Education</h2>${education}
    <h2>Expertise</h2><div class="skills">${skills}</div>
    <h2>Languages</h2><p>${languages}</p>
  </main>`

  document.body.appendChild(printRoot)
  const cleanup = () => {
    printRoot.remove()
    window.removeEventListener('afterprint', cleanup)
  }
  window.addEventListener('afterprint', cleanup, { once: true })
  window.setTimeout(() => {
    window.print()
    window.setTimeout(cleanup, 1000)
  }, 50)
}
