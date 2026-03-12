export type Locale = 'en' | 'pl'

const translations = {
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            skills: 'Skills',
            experience: 'Experience',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi, I'm",
            name: 'Aleksander Zadubiec',
            subtitle: 'Full-stack & Java Developer',
            about: `I'm Aleksander, a Java-focused full‑stack developer with commercial experience in building backend services and modern web apps. On the backend I work mainly with Java 17, Spring Boot (REST, Data JPA, Security), Hibernate and PostgreSQL; on the frontend I use Angular and TypeScript, keeping a clean, strongly typed codebase.
I'm comfortable with both object-oriented and functional programming in Java (streams, lambdas, Optional) and I care about clean architecture, refactoring and readable code. I write unit and integration tests (JUnit, Mockito), pay attention to error handling and performance, and I’m used to working with Git in a team setting (code review, branches, pull requests).
I’m currently finishing my 3rd year of Computer Science at the John Paul II Catholic University in Lublin (KUL), where I combine academic knowledge with practical project work and long-term personal projects.`,
            viewProjects: 'View projects',
            downloadCvEn: 'CV (EN)',
            downloadCvPl: 'CV (PL)',
            profileAlt: 'Profile photo',
        },
        projects: {
            title: 'Projects',
            github: 'GitHub',
            liveDemo: 'Live Demo',
            hoverToExpand: 'Hover or click to read full description',
            descriptions: {
                mangaPanelDownloader:
                    'Full-stack app for downloading and managing manga panels. Backend: Java 17, Spring Boot, Spring Data JPA, PostgreSQL, Docker. Frontend: Angular 17, TypeScript, RxJS, Angular Material. Integrates with MangaDex API (rate limiting, error handling). Translator: Python FastAPI, OpenAI (vision + chat) for OCR and EN→PL translation. Features: online reading, search, filters, download to ZIP, translation (ENG→PL). View modes per speech bubble: Original / Translated / Both. Preferences stored in DB.',
                vocal2midiLive:
                    'VST3 plugin for real-time voice-to-MIDI. Processes microphone input and outputs MIDI (notes, velocity, CC) to drive any instrument in a DAW. Backend/Engine: C++, JUCE (audio & GUI framework), signal processing (FFT, pitch detection, loudness and timbre analysis). Built-in JUCE GUI: native controls, signal visualization, scale and key selection. Integration: VST3, mapping to 4 MIDI CC (brightness, low/mid/high frequency energy). Features: real-time pitch detection, snap to scale, mapping.',
                mediaPlayer:
                    'Multimedia player combining JavaFX and Swing: JavaFX for video playback and audio visualization, Swing for playlist and UI. Demonstrates safe JavaFX-in-Swing integration. Backend: Java, JavaFX Media API, Swing, multithreading, playlist management (load, save, queue). Hybrid UI: JavaFX (video area, visualizations) + Swing (playlist, progress bar, buttons). Supports common audio/video formats, file system integration, MP3 tagging (ID3), subtitles. Features: video & audio playback, create and manage playlists, audio visualizations (FFT, charts), progress slider, volume, fullscreen.',
                updog:
                    'Social platform inspired by Reddit: space for sharing content, interaction and topic-based communities. Backend: Java 17, Spring Boot, Spring Data JPA, Spring Security, PostgreSQL, Redis (caching), Docker. Frontend: Angular 17, TypeScript, RxJS, NgRx, Angular Material. REST API with JWT, pagination, sorting, filtering, rate limiting. Features: create communities, posts, comments, upvote/downvote, user reputation, content moderation, real-time notifications (WebSocket), search.',
                restoflow:
                    'Online restaurant management system for small and medium venues. Backend: Java 17, Spring Boot 3.3, Spring Data JPA, Hibernate, H2/PostgreSQL; REST API designed around clear aggregates and DTOs. Frontend layer built with Bootstrap 5, HTML5/CSS3 and modern JavaScript (ES6+). Features: menu management with categories and availability, order handling (delivery / pickup), table reservations with conflict checking, special events calendar, simple reporting for daily sales and reservations, and an integrated admin panel for managing users and configuration.',
            },
        },
        skills: {
            title: 'Technical skills',
            techTitle: 'Technology knowledge',
            techColumns: {
                technology: 'Technology',
                level: 'Level',
                scope: 'Scope',
            },
            levels: {
                very_advanced: 'Very advanced',
                advanced: 'Advanced',
                medium: 'Intermediate',
                basic: 'Basic',
                beginner: 'Beginner',
            },
            tech: {
                java: {
                    name: 'Java (11, 17, 21)',
                    scope: 'OOP, functional (streams, lambdas, Optional), multithreading, design patterns, refactoring, clean code'
                },
                python: {
                    name: 'Python',
                    scope: 'Scripts, automation, data work, pandas, numpy, matplotlib, AI model integration'
                },
                csharp: {name: 'C#', scope: '.NET basics, OOP, console applications, syntax'},
                sql: {
                    name: 'SQL',
                    scope: 'Complex queries, joins (inner, outer, cross), subqueries, CTE, window functions, indexes, optimization, stored procedures, transactions'
                },
                cpp: {name: 'C++', scope: 'Procedural and OOP, syntax, pointers, references'},
                javascript: {name: 'JavaScript', scope: 'ES6+, async/await, promises, modules, DOM, events, fetch API'},
                typescript: {
                    name: 'TypeScript',
                    scope: 'Static typing, interfaces, generics, enums, decorators, tsconfig'
                },
                angular: {
                    name: 'Angular',
                    scope: 'Modules, components, services, directives, pipes, routing, guards, lazy loading, dependency injection'
                },
                scala: {
                    name: 'Scala',
                    scope: 'Functional programming, immutable collections, pattern matching, case classes'
                },
            },
            sections: {
                frameworksBackend: 'Frameworks & libraries - Backend',
                frontendAngular: 'Frontend - Angular',
                databases: 'Databases & SQL',
                tests: 'Unit & integration testing',
                devops: 'DevOps & tools',
                methodologies: 'Work methodologies',
                softSkills: 'Soft skills',
            },
            bullets: {
                frameworksBackend: 'Spring Boot: REST API, application.properties/yml, env profiles, DI, Beans, autoconfiguration\nSpring MVC: controllers, validation, exception handling, filters, interceptors\nSpring Data JPA: repositories, derived queries, @Query, modifications, pagination, sorting\nSpring Security: authorization, authentication, JWT, OAuth2, roles, filter chain, CORS\nSpring Cloud: microservices basics, Service Discovery, API Gateway, distributed config\nHibernate: ORM mapping, relations (OneToMany, ManyToMany), inheritance strategies, cache, query optimization',
                frontendAngular: 'Angular (12-17): modules, components, services, directives, pipes, routing, guards\nRxJS: Observables, Subjects, BehaviorSubject, operators (map, filter, switchMap, mergeMap, catchError)\nState: NgRx (Store, Actions, Reducers, Effects, Entities), Akita basics\nForms: Reactive Forms, Template-driven, custom and built-in validators\nAPI: HttpClient, interceptors (tokens, logging, error handling)\nTesting: Jasmine, Karma, TestBed, mocking',
                databases: 'PostgreSQL: advanced queries, indexes, transactions, views, functions, stored procedures\nMS SQL: database design, optimization, joins, subqueries, CTE\nH2: embedded DB for tests and development\nSQL: fluent syntax, table joins, grouping, aggregate functions, subqueries, optimization',
                tests: 'JUnit 5: test lifecycle, assertions, parameterization, tagging\nMockito: mocking, verification, argument captors, spy\nAssertJ: fluent assertions, collection and exception assertions\nTestcontainers: integration tests with real DB, container startup in tests',
                devops: 'Git: branching, merging, rebase, cherry-pick, conflict resolution\nGitHub / GitLab / Azure DevOps: repos, PRs, code review, issues, projects, wiki\nDocker: images, Dockerfile, networks, volumes, image optimization\nKubernetes: pods, deployments, services, ingress, configmap, secrets, minikube\nMaven: dependencies, profiles, plugins, builds\nRabbitMQ: queues, exchanges, routing, publish/subscribe, Spring Boot integration\nSwagger / OpenAPI: API docs, client generation, testing\nPostman: endpoint testing, collections, env variables, scripts\nCI/CD: GitHub Actions, GitLab CI basics, test and deployment automation',
                methodologies: 'Agile/Scrum: daily stand-ups, sprint planning, retrospectives, refinement, estimation\nTeamwork: code review, pair programming, problem solving\nTools: Jira, Trello, Asana, ClickUp',
                softSkills: 'Communication: clear expression, explaining complex topics, active listening\nOpenness: receptive to feedback, new ideas and technologies\nFast learner: quickly masters new tools and applies them in projects\nResponsibility: owns tasks, meets deadlines\nSense of humor: eases tension, builds team atmosphere\nAttention to detail: thorough, closes loose ends\nPatience: calmly explains, supports others, resolves conflicts\nTeamwork: enjoys collaboration, shares knowledge, seeks compromise\nWorking under pressure: stays calm, prioritizes effectively',
            },
        },
        experience: {
            title: 'Work experience',
            subtitle: 'Selected roles that shaped my approach to clean, reliable software.',
            company: {
                mikrobit: 'MIKROBIT Sp. z o.o.',
                jellytech: 'JELLYTECH',
                rankomat: 'Rankomat.pl',
            },
            role: {
                intern_csharp: 'C# .NET Student Internship',
                junior_java: 'Junior Java Developer',
                scala_intern: 'Scala Developer Intern',
            },
            dateRange: {
                mikrobit_dates: '01.09.2025 - 19.09.2025',
                jellytech_dates: '02.2023 - 06.2023',
                rankomat_dates: '05.2022 - 09.2022',
            },
            bullets: {
                mikrobit_bullets: 'Adding new features to .NET applications\nFixing bugs and solving issues',
                jellytech_bullets: 'Implementing new backend features\nWriting unit and integration tests (JUnit, Mockito)\nFixing issues in existing code',
                rankomat_bullets: 'Implementing new backend features\nError handling\nBackend and frontend tasks\nAdding unit tests',
            },
        },
        education: {
            title: 'Education',
            schoolKUL: 'John Paul II Catholic University of Lublin (KUL)',
            degreeKUL: 'B.Sc. Computer Science (3rd year, in progress)',
            periodKUL: '2023 - now',
            detailsKUL:
                'Focus on software engineering, algorithms and data structures, databases and web development; combining studies with commercial and personal projects.',
        },
        contact: {
            title: 'Contact',
            intro: 'Have a question or want to work together? Get in touch.',
            socialMedia: 'Social media',
            email: 'Email',
            downloadCv: 'Download CV',
            downloadCvEn: 'CV (EN)',
            downloadCvPl: 'CV (PL)',
        },
        form: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            namePlaceholder: 'John Doe',
            emailPlaceholder: 'john@example.com',
            messagePlaceholder: 'Your message...',
            send: 'Send',
            sending: 'Sending...',
            nameRequired: 'Name is required',
            emailRequired: 'Email is required',
            invalidEmail: 'Invalid email format',
            messageRequired: 'Message is required',
            configureEmailJs: 'Configure EmailJS variables in .env.local',
            errorSend: 'Failed to send. Please try again.',
            successMessage: 'Message sent. Thank you!',
        },
        footer: {rights: 'All rights reserved.'},
        a11y: {
            menu: 'Menu',
            scrollToTop: 'Scroll to top',
            themeLight: 'Switch to dark mode',
            themeDark: 'Switch to light mode',
        },
    },
    pl: {
        nav: {
            home: 'Strona Główna',
            projects: 'Projekty',
            skills: 'Umiejętności',
            experience: 'Doświadczenie',
            contact: 'Kontakt',
        },
        hero: {
            greeting: 'Cześć, jestem',
            name: 'Aleksander Zadubiec',
            subtitle: 'Full-stack & Java Developer',
            about: `Jestem Aleksander, programista ukierunkowany na Javę i backend, ale swobodnie poruszam się też w nowoczesnym frontendzie. Na backendzie pracuję głównie z Java 17, Spring Boot (REST, Data JPA, Security), Hibernate i PostgreSQL, a od strony frontu korzystam z Angulara i TypeScriptu, dbając o czytelną, typowaną architekturę.
W Javie swobodnie łączę podejście obiektowe i funkcyjne (streamy, lambdy, Optional), zależy mi na czystej architekturze, refaktoryzacji i czytelnym kodzie. Piszę testy jednostkowe i integracyjne (JUnit, Mockito), dbam o obsługę błędów i wydajność, a w pracy zespołowej naturalnie korzystam z Gita (branche, pull requesty, code review).
Obecnie kończę 3 rok Informatyki na Katolickim Uniwersytecie Lubelskim (KUL), gdzie łączę wiedzę akademicką z praktycznymi projektami i własnymi, długoterminowymi inicjatywami programistycznymi.`,
            viewProjects: 'Zobacz projekty',
            downloadCvEn: 'CV (EN)',
            downloadCvPl: 'CV (PL)',
            profileAlt: 'Zdjęcie profilowe',
        },
        projects: {
            title: 'Projekty',
            github: 'GitHub',
            liveDemo: 'Live Demo',
            hoverToExpand: 'Najedź lub kliknij, aby rozwinąć pełny opis',
            descriptions: {
                mangaPanelDownloader:
                    'Aplikacja full-stack do pobierania i zarządzania panelami z mang. Backend: Java 17, Spring Boot, Spring Data JPA, PostgreSQL, Docker. Frontend: Angular 17, TypeScript, RxJS, Angular Material. API: integracja z MangaDex API, rate limiting, obsługa błędów. Translator: Python FastAPI, OpenAI (vision + chat) do OCR i tłumaczenia EN→PL. Uruchamia OCR w panelach (wizja OpenAI), „Przetłumacz na polski” tłumaczy wyodrębniony tekst. Przełącz widok dla każdego dymka: Oryginalny / Przetłumaczony / Oba. Preferencje w bazie. Funkcje: czytanie online, wyszukiwanie, filtrowanie, pobieranie do ZIP, tłumaczenie ENG→PL.',
                vocal2midiLive:
                    'Wtyczka VST3 do konwersji głosu na MIDI w czasie rzeczywistym. Przetwarza sygnał z mikrofonu i generuje MIDI (nuty, velocity, CC) do sterowania instrumentami w DAW. Backend/Engine: C++, JUCE (framework audio i GUI), FFT, detekcja pitch, analiza głośności i barwy. GUI w JUCE: natywne kontrolki, wizualizacja sygnału, selekcja skali i klawiszy. Integracja: VST3, mapowanie do 4 MIDI CC (jasność, energia niskich/średnich/wysokich). Funkcje: detekcja pitch w czasie rzeczywistym, snap do skali, mapowanie.',
                mediaPlayer:
                    'Odtwarzacz łączący JavaFX i Swing: JavaFX do wideo i wizualizacji audio, Swing do playlisty i UI. Backend: Java, JavaFX Media API, Swing, wielowątkowość, zarządzanie playlistą. Interfejs hybrydowy: JavaFX (obszar wideo, wizualizacje) + Swing (playlista, pasek postępu, przyciski). Obsługa formatów audio/wideo, integracja z systemem plików, tagowanie MP3 (ID3), napisy. Funkcje: odtwarzanie wideo i audio, playlisty, wizualizacje audio (FFT), suwak postępu, głośność, pełny ekran.',
                updog:
                    'Platforma społecznościowa inspirowana Redditem. Backend: Java 17, Spring Boot, Spring Data JPA, Spring Security, PostgreSQL, Redis, Docker. Frontend: Angular 17, TypeScript, RxJS, NgRx, Angular Material. REST API z JWT, paginacja, sortowanie, filtrowanie, rate limiting. Funkcje: tworzenie społeczności, posty, komentarze, głosowanie (upvote/downvote), reputacja, moderacja, powiadomienia w czasie rzeczywistym (WebSocket), wyszukiwarka.',
                restoflow:
                    'System online do zarządzania restauracją skierowany do małych i średnich lokali. Backend: Java 17, Spring Boot 3.3, Spring Data JPA, Hibernate, baza H2/PostgreSQL; REST API oparte na czytelnych encjach i DTO. Warstwa frontowa: Bootstrap 5, HTML5/CSS3 oraz nowoczesny JavaScript (ES6+). Funkcje: zarządzanie menu (kategorie, dostępność), obsługa zamówień (dostawa / odbiór), rezerwacje stolików z kontrolą kolizji, kalendarz wydarzeń specjalnych, proste raporty dzienne oraz panel administratora do zarządzania użytkownikami i konfiguracją systemu.',
            },
        },
        skills: {
            title: 'Umiejętności techniczne',
            techTitle: 'Znajomość technologii',
            techColumns: {
                technology: 'Technologia',
                level: 'Poziom',
                scope: 'Zakres',
            },
            levels: {
                very_advanced: 'Bardzo zaawansowany',
                advanced: 'Zaawansowany',
                medium: 'Średnio zaawansowany',
                basic: 'Podstawy',
                beginner: 'Początkujący',
            },
            tech: {
                java: {
                    name: 'Java (11, 17, 21)',
                    scope: 'Programowanie obiektowe, funkcyjne (streamy, lambdy, Optional), wielowątkowość, wzorce projektowe, refaktoryzacja, clean code'
                },
                python: {
                    name: 'Python',
                    scope: 'Skrypty, automatyzacja, praca z danymi, pandas, numpy, matplotlib, integracja z modelami AI'
                },
                csharp: {
                    name: 'C#',
                    scope: 'Podstawy .NET, programowanie obiektowe, aplikacje konsolowe, znajomość składni'
                },
                sql: {
                    name: 'SQL',
                    scope: 'Zapytania złożone, joiny (inner, outer, cross), podzapytania, CTE, funkcje okienne, indeksy, optymalizacja, procedury składowane, transakcje'
                },
                cpp: {name: 'C++', scope: 'Programowanie proceduralne i obiektowe, składnia, wskaźniki, referencje'},
                javascript: {
                    name: 'JavaScript',
                    scope: 'ES6+, async/await, promisy, moduły, DOM, zdarzenia, fetch API'
                },
                typescript: {
                    name: 'TypeScript',
                    scope: 'Typowanie statyczne, interfejsy, typy generyczne, enums, dekoratory, tsconfig'
                },
                angular: {
                    name: 'Angular',
                    scope: 'Moduły, komponenty, serwisy, dyrektywy, pipe\'y, routing, guardy, lazy loading, dependency injection'
                },
                scala: {
                    name: 'Scala',
                    scope: 'Programowanie funkcyjne, immutable collections, pattern matching, case classes'
                },
            },
            sections: {
                frameworksBackend: 'Frameworki i biblioteki - Backend',
                frontendAngular: 'Frontend - Angular',
                databases: 'Bazy danych i SQL',
                tests: 'Testy jednostkowe i integracyjne',
                devops: 'DevOps i narzędzia',
                methodologies: 'Metodyki pracy',
                softSkills: 'Kompetencje miękkie',
            },
            bullets: {
                frameworksBackend: 'Spring Boot: tworzenie REST API, konfiguracja (application.properties/yml), profile środowiskowe, wstrzykiwanie zależności, Beans, autokonfiguracja\nSpring MVC: kontrolery, walidacja, obsługa wyjątków, filtry, interceptory\nSpring Data JPA: repozytoria, zapytania pochodne, @Query, modyfikacje, paginacja, sortowanie\nSpring Security: autoryzacja, uwierzytelnianie, JWT, OAuth2, role i uprawnienia, filtr chain, CORS\nSpring Cloud: podstawy mikroserwisów, Service Discovery, API Gateway, konfiguracja rozproszona\nHibernate: mapowanie ORM, relacje (OneToMany, ManyToMany), strategie dziedziczenia, cache, optymalizacja zapytań',
                frontendAngular: 'Angular (wersje 12-17): moduły, komponenty, serwisy, dyrektywy, pipe\'y, routing, guardy\nRxJS: Observables, Subjects, BehaviorSubject, operatory (map, filter, switchMap, mergeMap, catchError)\nZarządzanie stanem: NgRx (Store, Actions, Reducers, Effects, Entities), Akta (podstawy)\nFormularze: Reactive Forms, Template-driven Forms, walidatory własne i wbudowane\nKomunikacja z API: HttpClient, interceptory (tokeny, logowanie, obsługa błędów)\nTestowanie: Jasmine, Karma, TestBed, mockowanie zależności',
                databases: 'PostgreSQL: zaawansowane zapytania, indeksy, transakcje, widoki, funkcje, procedury składowane\nMS SQL: projektowanie baz, optymalizacja, joiny, podzapytania, CTE\nH2: baza wbudowana do testów i developmentu\nSQL: biegła znajomość składni, łączenie tabel, grupowanie, funkcje agregujące, podzapytania, optymalizacja',
                tests: 'JUnit 5: cykl życia testów, asercje, parametryzacja, tagowanie\nMockito: mockowanie zależności, weryfikacja interakcji, argument captors, spy\nAssertJ: płynne asercje, czytelność testów, asercje dla kolekcji i wyjątków\nTestcontainers: testy integracyjne z prawdziwą bazą, uruchamianie kontenerów w testach',
                devops: 'Git: zaawansowana obsługa (branching, merging, rebase, cherry-pick, rozwiązywanie konfliktów)\nGitHub / GitLab / Azure DevOps: repozytoria, pull requests, code review, issues, projekty, wiki\nDocker: tworzenie obrazów, Dockerfile, sieci, wolumeny, optymalizacja obrazów\nKubernetes: podstawy (pods, deployments, services, ingress, configmap, secrets), minikube\nMaven: zarządzanie zależnościami, profile, pluginy, budowanie projektów\nRabbitMQ: kolejki, wymiany, routing, publish/subscribe, integracja z Spring Boot\nSwagger / OpenAPI: dokumentowanie API, generowanie klientów, testowanie\nPostman: testowanie endpointów, kolekcje, zmienne środowiskowe, skrypty\nCI/CD: GitHub Actions, GitLab CI (podstawy), automatyzacja testów i deploymentu',
                methodologies: 'Agile/Scrum: daily standupy, planowanie sprintów, retrospectives, refinemente, szacowanie zadań\nPraca zespołowa: code review, pair programming, wspólne rozwiązywanie problemów\nNarzędzia: Jira, Trello, Asana, ClickUp',
                softSkills: 'Komunikatywność: jasno wyraża myśli, potrafi wytłumaczyć skomplikowane zagadnienia, aktywnie słucha\nOtwartość: chętnie przyjmuje feedback, otwartość na nowe pomysły i technologie\nSzybkie uczenie się: w krótkim czasie opanowuje nowe narzędzia i wdraża je w projekcie\nOdpowiedzialność: bierze odpowiedzialność za zadania, dotrzymuje terminów\nPoczucie humoru: rozładowuje napięcie, buduje dobrą atmosferę w zespole\nDokładność: dba o szczegóły, nie zostawia niedomkniętych tematów\nCierpliwość: spokojnie tłumaczy, wspiera innych, rozwiązywanie konfliktów\nPraca zespołowa: lubi współpracować, dzieli się wiedzą, szuka kompromisów\nPraca pod presją: zachowuje spokój w stresie, potrafi priorytetyzować zadania',
            },
        },
        experience: {
            title: 'Doświadczenie zawodowe',
            subtitle: 'Wybrane role, które ukształtowały moje podejście do czystego i niezawodnego oprogramowania.',
            company: {
                mikrobit: 'MIKROBIT Sp. z o.o.',
                jellytech: 'JELLYTECH',
                rankomat: 'Rankomat.pl',
            },
            role: {
                intern_csharp: 'Praktyki studenckie C# .NET',
                junior_java: 'Junior Java Developer',
                scala_intern: 'Staż Scala Developer',
            },
            dateRange: {
                mikrobit_dates: '01.09.2025 - 19.09.2025',
                jellytech_dates: '02.2023 - 06.2023',
                rankomat_dates: '05.2022 - 09.2022',
            },
            bullets: {
                mikrobit_bullets: 'Dodawanie nowych funkcjonalności w aplikacjach .NET\nRozwiązywanie problemów i bugów',
                jellytech_bullets: 'Tworzenie nowych funkcjonalności w aplikacjach back-endowych\nPisanie testów jednostkowych i integracyjnych (JUnit, Mockito)\nRozwiązywanie problemów w istniejącym kodzie',
                rankomat_bullets: 'Implementacja nowych funkcjonalności w systemie backend\nObsługa błędów\nImplementacja zadań zarówno backendu, jak i frontendu\nDodawanie testów jednostkowych',
            },
        },
        education: {
            title: 'Wykształcenie',
            schoolKUL: 'Katolicki Uniwersytet Lubelski Jana Pawła II (KUL)',
            degreeKUL: 'Informatyka, studia I stopnia (3 rok, w trakcie)',
            periodKUL: '2023 - obecnie',
            detailsKUL:
                'Specjalizacja w inżynierii oprogramowania, algorytmach i strukturach danych, bazach danych oraz aplikacjach webowych; łączenie studiów z komercyjnymi i własnymi projektami.',
        },
        contact: {
            title: 'Kontakt',
            intro: 'Masz pytanie lub chcesz nawiązać współpracę? Napisz do mnie.',
            socialMedia: 'Social media',
            email: 'Email',
            downloadCv: 'Pobierz CV',
            downloadCvEn: 'CV (EN)',
            downloadCvPl: 'CV (PL)',
        },
        form: {
            name: 'Imię',
            email: 'Email',
            message: 'Wiadomość',
            namePlaceholder: 'Jan Kowalski',
            emailPlaceholder: 'jan@example.com',
            messagePlaceholder: 'Twoja wiadomość...',
            send: 'Wyślij',
            sending: 'Wysyłanie...',
            nameRequired: 'Imię jest wymagane',
            emailRequired: 'Email jest wymagany',
            invalidEmail: 'Nieprawidłowy format email',
            messageRequired: 'Wiadomość jest wymagana',
            configureEmailJs: 'Skonfiguruj zmienne EmailJS w .env.local',
            errorSend: 'Wysłanie wiadomości nie powiodło się. Spróbuj ponownie.',
            successMessage: 'Wiadomość została wysłana. Dziękuję!',
        },
        footer: {rights: 'Wszystkie prawa zastrzeżone.'},
        a11y: {
            menu: 'Menu',
            scrollToTop: 'Przewiń do góry',
            themeLight: 'Włącz tryb ciemny',
            themeDark: 'Włącz tryb jasny',
        },
    },
} as const

function getNested(
    obj: Record<string, unknown>,
    path: string
): unknown {
    const keys = path.split('.')
    let current: unknown = obj
    for (const key of keys) {
        if (current == null || typeof current !== 'object') return undefined
        current = (current as Record<string, unknown>)[key]
    }
    return current
}

export function getTranslation(locale: Locale, key: string): string {
    const value = getNested(
        translations[locale] as Record<string, unknown>,
        key
    )
    return typeof value === 'string' ? value : key
}

export {translations}
