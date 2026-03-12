export const projects = [
    {
        id: 'mangaPanelDownloader' as const,
        title: 'Manga Panel Downloader',
        description: '',
        technologies: ['Java 17', 'Spring Boot', 'Swagger', 'Angular 17', 'PostgreSQL', 'Docker', 'Python', 'FastAPI', 'OpenAI'],
        image: '/images/project1.png',
        github: 'https://github.com/Alok2221/Manga-Panel-Downloader',
        live: null,
        features: [
            'Multi-platform support - integrates with MangaDex, GlobalComix, and MangaPlus APIs',
            'Smart panel detection - computer vision algorithms identify and extract individual panels from manga pages',
            'OCR text extraction - Tesseract OCR captures text bubbles for processing',
            'Automated translation - EN→PL translation via OpenAI API with context awareness',
            'Batch download - download entire chapters or selected panels',
            'ZIP export - bundle panels into organized ZIP archives',
            'Async processing - background jobs handle long-running downloads',
            'Download queue - manage multiple downloads with priority system',
            'Search & discovery - search manga across all integrated platforms',
            'Responsive gallery - Angular-based panel viewer with zoom and navigation',
            'Local library - store downloaded panels with metadata',
            'Progress tracking - real-time download progress with notifications',
            'Error handling - automatic retry mechanism for failed downloads'
        ],
    },
    {
        id: 'vocal2midiLive' as const,
        title: 'Vocal2MIDI-Live',
        description: '',
        technologies: ['C++', 'JUCE', 'VST3', 'FFT', 'Pitch detection'],
        image: '/images/project2.png',
        github: 'https://github.com/Alok2221/Vocal2MIDI-Live',
        live: null,
        features: [
            'Real-time voice-to-MIDI conversion with low latency processing',
            'Advanced pitch detection algorithms using FFT analysis',
            'Scale snap functionality - automatically quantizes detected notes to selected scales',
            'MIDI CC mapping - assign voice parameters to MIDI continuous controllers',
            'Configurable note range - restrict detection to specific octave ranges',
            'Velocity sensitivity - maps voice volume to MIDI velocity',
            'Multiple output formats - VST3 plugin and standalone application',
            'Real-time visualization - displays detected pitch and MIDI output',
            'Noise gate and filtering - reduces false triggers from background noise',
            'MIDI learn functionality - assign controls via MIDI learn',
            'Preset management - save and load configurations',
            'Monophonic and polyphonic detection modes',
            'Low CPU usage - optimized for live performance scenarios'],
    },
    {
        id: 'mediaPlayer' as const,
        title: 'Media Player',
        description: '',
        technologies: ['Java', 'JavaFX', 'Swing', 'ID3', 'FFT'],
        image: '/images/project3.png',
        github: 'https://github.com/Alok2221/Media-Player',
        live: null,
        features: [
            'Multi-format video and audio playback',
            'Playlist management with drag-and-drop reordering',
            'Audio visualizations - real-time FFT-based spectrum analyzer and waveform display',
            'Fullscreen mode with custom video controls',
            'ID3 tag editing - edit metadata for MP3 files',
            'Subtitle support with synchronization controls',
            'Playback speed control - adjust speed without pitch distortion',
            'Equalizer with customizable presets',
            'Sleep timer and auto-shutdown functionality',
            'Queue management - add items to play next',
            'File association - set as default media player',
            'Hotkey support - customizable keyboard shortcuts',
            'Volume normalization across tracks',
            'Recent files list and resume playback'
        ],
    },
    {
        id: 'updog' as const,
        title: 'UpDog',
        description: '',
        technologies: ['Java 17', 'Spring Boot', 'Swagger', 'Angular 17', 'PostgreSQL', 'Redis', 'Docker', 'WebSocket'],
        image: '/images/project4.png',
        github: 'https://github.com/Alok2221/UpDog',
        live: null,
        features: [
            'Community creation and management - users can create and moderate their own communities',
            'Posts with rich text formatting - support for markdown and embedded media',
            'Comment threads with nested replies',
            'Upvote/Downvote system with karma tracking',
            'Real-time notifications via WebSocket - instant alerts for replies and votes',
            'User profiles with post and comment history',
            'Sorting options - hot, new, top, controversial',
            'Search functionality across posts and communities',
            'Moderation tools - post removal, user banning, reports handling',
            'Redis caching for high-performance feed generation',
            'Infinite scroll for feeds',
            'Dark/light theme toggle',
            'Responsive design - mobile-friendly interface',
            'REST API with Swagger documentation'],
    },
    {
        id: 'restoflow' as const,
        title: 'RestoFlow',
        description: '',
        technologies: ['Java 17', 'Spring Boot 3.3', 'Spring Data JPA', 'Hibernate', 'H2 Database', 'Bootstrap 5', 'HTML5/CSS3', 'JavaScript ES6+', 'Maven'],
        image: '/images/project5.png',
        github: 'https://github.com/Alok2221/RestoFlow',
        live: null,
        features: [
            'Menu management with categories and items',
            'Order processing (delivery / pickup)',
            'Table reservation system with availability checking',
            'Special events management',
            'Comprehensive admin panel',
            'REST API backend with simple frontend in single app'
        ],
    }
] as const


export const techKnowledge = [
    {id: 'java', level: 'very_advanced'},
    {id: 'python', level: 'medium'},
    {id: 'csharp', level: 'medium'},
    {id: 'sql', level: 'advanced'},
    {id: 'cpp', level: 'basic'},
    {id: 'javascript', level: 'medium'},
    {id: 'typescript', level: 'advanced'},
    {id: 'angular', level: 'advanced'},
    {id: 'scala', level: 'medium'},
] as const

export const experience = [
    {companyKey: 'mikrobit', roleKey: 'intern_csharp', dateRangeKey: 'mikrobit_dates', bulletsKey: 'mikrobit_bullets'},
    {companyKey: 'jellytech', roleKey: 'junior_java', dateRangeKey: 'jellytech_dates', bulletsKey: 'jellytech_bullets'},
    {companyKey: 'rankomat', roleKey: 'scala_intern', dateRangeKey: 'rankomat_dates', bulletsKey: 'rankomat_bullets'},
] as const

export const socialLinks = {
    github: 'https://github.com/Alok2221',
    linkedin: 'https://linkedin.com/in/aleksander-zadubiec-6a0762243',
    email: 'aleksander.zadubiec@gmail.com',
} as const

export const cvUrlEn = '/cv_eng.pdf'
export const cvUrlPl = '/cv_pl.pdf'

export const heroTechTags = [
    'Java',
    'Spring Boot',
    'Spring Data JPA',
    'Spring Security',
    'REST API',
    'PostgreSQL',
    'Hibernate',
    'Angular',
    'TypeScript',
    'JUnit',
    'Mockito',
] as const
