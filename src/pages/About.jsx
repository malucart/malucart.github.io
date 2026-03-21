const experience = [
  {
    role: 'Software Engineer',
    company: 'Microsoft',
    period: 'Jan 2023 – Jan 2025',
    description: [
      'Fullstack working with Typescript, React, C# and C++ in Power Automate product features:',
      '- Redesigned the Approvals UI for premium users by collaborating with PMs and designers to improve workflow efficiency and user satisfaction for approximately 4 million monthly premium users across over 130,000 companies. On the backend, handle approval request routing, state transitions, notification triggers, and database interactions that process user permissions and approval history.',
      '- Developed UI for Power Automate in Excel Online and Desktop, implementing telemetry tracking with the Excel team and PMs. This led to an 11% usage increase in the first month, enhancing user experience and workflow efficiency.',
      "- Migrated authentication system from Azure Active Directory to Microsoft Graph for the Approvals feature, streamlining authentication processes and enhancing integration with Microsoft 365 services. This improvement impacted millions of users as part of Power Automate’s 10M+ monthly active users across 350,000+ organizations."
    ]
  },
  {
    role: 'Code Instructor',
    company: 'X-Camp',
    period: 'Nov 2025 – Present',
    description: [
      '- Python instructor teaching kids through interactive lessons, project based learning, and problem solving activities that develop logical thinking and real coding skills.'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Microsoft',
    period: 'Summer 2022',
    description: [
      '- Developed and shipped a layout feature for Power Automate using React and TypeScript.',
      '- Focusing on the frontend side, collaborated with designers and PMs on UX research, product spec, analyzing telemetry data to identify user interface challenges, which guided targeted UI improvements in the layout redesign.'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Meta',
    period: 'Summer 2021',
    description: [
      '- Focused on mobile development using Java for Android.',
      '- Participated in the CodePath training program and delivered an internship project that exceeded requirements by implementing three additional features.'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'CodeDay',
    period: 'Summer 2020',
    description: [
      '- Developed an open-source Burp Suite extension that detects timing-based authentication vulnerabilities using Python.',
      '- Created a demo website with MySQL and PHP to showcase a security vulnerability.'
    ]
  },
]

export default function About({ dark }) {
  const t = dark ? darkTheme : lightTheme
  return (
    <div className="about-page">
      <div style={{ width: '100%', maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* Experience */}
        <div>
          <h2 style={{ ...sectionHeading, color: t.accent, borderBottomColor: t.border }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experience.map((job) => (
              <div key={job.role + job.company} style={{ ...card, backgroundColor: t.cardBg }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.5rem' }}>
                  <div>
                    <div style={{ fontWeight: '600', color: t.textPrimary, fontSize: '0.95rem' }}>{job.role}</div>
                    <div style={{ color: t.accent, fontSize: '0.875rem' }}>{job.company}</div>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: t.textSecondary }}>{job.period}</div>
                </div>
                {Array.isArray(job.description)
                  ? job.description.map((line, i) => (
                      <p key={i} style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', color: t.textSecondary, lineHeight: '1.6' }}>{line}</p>
                    ))
                  : <p style={{ margin: 0, fontSize: '0.875rem', color: t.textSecondary, lineHeight: '1.6' }}>{job.description}</p>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 style={{ ...sectionHeading, color: t.accent, borderBottomColor: t.border }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { degree: 'BS Software Development', school: 'Bellevue College', period: '2020 – 2023' },
              { degree: 'BS Applied Physics (undergrad equivalent)', school: 'Universidade Federal do Rio Grande do Norte', period: '2013 – 2017' },
            ].map((edu) => (
              <div key={edu.degree} style={{ ...card, backgroundColor: t.cardBg }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.3rem' }}>
                  <div>
                    <div style={{ fontWeight: '600', color: t.textPrimary, fontSize: '0.95rem' }}>{edu.degree}</div>
                    <div style={{ color: t.accent, fontSize: '0.875rem' }}>{edu.school}</div>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: t.textSecondary }}>{edu.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

const lightTheme = {
  textPrimary: '#222',
  textSecondary: '#666',
  cardBg: 'rgba(255,255,255,0.30)',
  accent: '#c0607a',
  border: '#f0d0d8',
}

const darkTheme = {
  textPrimary: '#e6edf3',
  textSecondary: '#8b949e',
  cardBg: '#1c2128',
  accent: '#3fb950',
  border: '#30363d',
}

const sectionHeading = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#c0607a',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '1rem',
  borderBottom: '1px solid #f0d0d8',
  paddingBottom: '0.5rem',
}

const tag = {
  backgroundColor: 'rgba(255,255,255,0.7)',
  border: '1px solid #f0d0d8',
  borderRadius: '20px',
  padding: '0.3rem 0.8rem',
  fontSize: '0.85rem',
  color: '#444',
}

const card = {
  backgroundColor: 'rgba(255,255,255,0.30)',
  borderRadius: '10px',
  padding: '1rem 1.2rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.00)',
}
