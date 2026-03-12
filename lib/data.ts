export const projects = [
  {
    id: 'mangaPanelDownloader' as const,
    title: 'Manga Panel Downloader',
    description: '',
    technologies: ['Java 17', 'Spring Boot', 'Swagger', 'Angular 17', 'PostgreSQL', 'Docker', 'Python', 'FastAPI', 'OpenAI'],
    image: '/images/project1.jpg',
    github: 'https://github.com/Alok2221/Manga-Panel-Downloader',
    live: null,
    features: ['REST API', 'MangaDex/GlobalComix/MangaPlus', 'OCR & EN→PL translation', 'ZIP download'],
  },
  {
    id: 'vocal2midiLive' as const,
    title: 'Vocal2MIDI-Live',
    description: '',
    technologies: ['C++', 'JUCE', 'VST3', 'FFT', 'Pitch detection'],
    image: '/images/project2.jpg',
    github: 'https://github.com/Alok2221/Vocal2MIDI-Live',
    live: null,
    features: ['Real-time voice-to-MIDI', 'Scale snap', 'MIDI CC mapping'],
  },
  {
    id: 'mediaPlayer' as const,
    title: 'Media Player',
    description: '',
    technologies: ['Java', 'JavaFX', 'Swing', 'ID3', 'FFT'],
    image: '/images/project3.jpg',
    github: 'https://github.com/Alok2221/Media-Player',
    live: null,
    features: ['Video & audio', 'Playlists', 'Audio visualizations', 'Fullscreen'],
  },
  {
    id: 'updog' as const,
    title: 'UpDog',
    description: '',
    technologies: ['Java 17', 'Spring Boot', 'Swagger', 'Angular 17', 'PostgreSQL', 'Redis', 'Docker', 'WebSocket'],
    image: '/images/project4.jpg',
    github: 'https://github.com/Alok2221/UpDog',
    live: null,
    features: ['Communities', 'Posts & comments', 'Upvote/downvote', 'Real-time notifications'],
  },
] as const


export const techKnowledge = [
  { id: 'java', level: 'very_advanced' },
  { id: 'python', level: 'medium' },
  { id: 'csharp', level: 'medium' },
  { id: 'sql', level: 'advanced' },
  { id: 'cpp', level: 'basic' },
  { id: 'javascript', level: 'medium' },
  { id: 'typescript', level: 'advanced' },
  { id: 'angular', level: 'advanced' },
  { id: 'scala', level: 'medium' },
] as const

export const experience = [
  { companyKey: 'mikrobit', roleKey: 'intern_csharp', dateRangeKey: 'mikrobit_dates', bulletsKey: 'mikrobit_bullets' },
  { companyKey: 'jellytech', roleKey: 'junior_java', dateRangeKey: 'jellytech_dates', bulletsKey: 'jellytech_bullets' },
  { companyKey: 'rankomat', roleKey: 'scala_intern', dateRangeKey: 'rankomat_dates', bulletsKey: 'rankomat_bullets' },
] as const

export const socialLinks = {
  github: 'https://github.com/Alok2221',
  linkedin: 'https://linkedin.com/in/aleksander-zadubiec-6a0762243',
  email: 'aleksander.zadubiec@gmail.com',
} as const

export const cvUrlEn = '/cv_eng.pdf'
export const cvUrlPl = '/cv_pl.pdf'

export const heroTechTags = ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'TypeScript']
