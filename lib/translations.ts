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
            about: `I'm Aleksander, I am a developer with a very strong command of Java (11/17/21) – I'm comfortable with both object-oriented and functional programming (streams, lambdas, Optional), and I have hands-on experience with multithreading, design patterns, and code refactoring following clean code principles. In my daily work, I use the Spring ecosystem (Boot, Data JPA, Security), along with Hibernate, Lombok, and I write unit tests using JUnit and Mockito.
My frontend skills are equally solid – I have an advanced knowledge of Angular, working confidently with modules, components, services, directives, routing, guards, and lazy loading. I'm highly proficient in TypeScript (generics, interfaces, enums, decorators), and my JavaScript (ES6+) knowledge (async/await, promises, fetch API) allows me to seamlessly integrate backend and frontend layers.
When it comes to databases, I'm very confident – my SQL skills are advanced: complex joins, CTEs, window functions, indexing, query optimization, stored procedures, and transactions are part of my daily toolkit. I primarily work with PostgreSQL, but I also have experience with H2 and MySQL.
Additionally, my tech stack includes:
  - Python (intermediate) – used for automation scripts, data processing (pandas, numpy, matplotlib), and integrating with AI models
  - Scala (intermediate) – I appreciate its functional programming approach, immutable collections, and pattern matching, which broaden my architectural thinking
  - C# (.NET) – intermediate, mainly console applications, but familiarity with syntax and OOP paradigms helps me switch between ecosystems easily
  - C++ – basics, enough to understand low-level mechanisms
I'm open to learning new technologies and eagerly take on challenges beyond my current specialization. I don't shy away from problems that require analysis and independent research – I see them as growth opportunities. When debugging and optimizing code, I use tools like IntelliJ Debugger, Postman for API testing, and pgAdmin for query analysis. I continuously develop my skills, aiming to become a versatile developer who can effectively solve technical problems across different areas.

I learn quickly – I can master a new tool or framework in a short time and implement it in a project. For example, during a recent project, I independently explored JWT Authentication, WebClient for external API communication, and Docker for containerization. I'm responsible, meet deadlines, and never leave tasks unfinished. I care about code quality – I follow SOLID and DRY principles, and I write unit tests because I know that code quality directly impacts system stability and maintainability.

I have patience for explaining things, supporting others, and resolving conflicts – my team members appreciated this during group projects, where I often acted as a code integrator and helped resolve Git conflicts. I can work both independently and in a team. Under time pressure, I stay calm, prioritize tasks effectively, and maintain focus. Additionally, I have a good sense of humor, which helps me build a positive team atmosphere and diffuse tension in difficult moments.

In my professional experience so far, I've regularly participated in daily standups, retrospectives, and sprint planning, which has given me a solid understanding of how teamwork functions and why good communication is essential.

My goal is to continue growing as a full-stack developer, expanding into artificial intelligence, and combining programming with my passion for graphics and animation. I want to build modern, intelligent, and visually appealing applications that genuinely make people's lives easier and solve real business problems.`,
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
                tictactoe:
                    'Desktop game with Minimax AI, two game modes, score tracking and theme toggle. Built with pure Java Swing.',
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
            about: `Jestem Aleksander, jestem programistą z bardzo dobrą znajomością Java (11/17/21) - swobodnie poruszam się w programowaniu obiektowym i funkcyjnym (streamy, lambdy, Optional), mam doświadczenie w wielowątkowości, stosowaniu wzorców projektowych oraz refaktoryzacji kodu zgodnie z zasadami clean code. Na co dzień pracuję z ekosystemem Spring (Boot, Data JPA, Security), a w projektach wykorzystuję Hibernate, Lombok i testuję kod przy pomocy JUnit z Mockito.
Równie mocną stroną jest mój frontend - Angular znam na poziomie zaawansowanym, swobodnie operując modułami, komponentami, serwisami, dyrektywami, routingiem, guardami i lazy loadingiem. W TypeScript czuję się bardzo dobrze - typowanie generyczne, interfejsy, enums, dekoratory nie stanowią dla mnie wyzwania. JavaScript (ES6+) uzupełnia ten zestaw o async/await, promisy i fetch API, co pozwala mi swobodnie łączyć warstwę backendową z frontendową.
W obszarze baz danych czuję się pewnie - SQL znam zaawansowanie: złożone joiny, CTE, funkcje okienne, indeksy, optymalizacja zapytań, procedury składowane i transakcje to dla mnie codzienność. W projektach korzystam głównie z PostgreSQL, ale mam też doświadczenie z H2 i MySQL.
Dodatkowo, w moim warsztacie znajdują się:
  - Python (średniozaawansowany) - wykorzystuję go do skryptów automatyzujących, pracy z danymi (pandas, numpy, matplotlib) oraz integracji z modelami AI
  - Scala (średniozaawansowana) - cenię ją za programowanie funkcyjne, immutable collections i pattern matching, co poszerza moje myślenie o architekturze aplikacji
  - C# (.NET) - średniozaawansowany, głównie aplikacje konsolowe, ale znajomość składni i paradygmatów obiektowych ułatwia mi przełączanie się między ekosystemami
  - C++ - podstawy, ale wystarczające do zrozumienia niskopoziomowych mechanizmów
Jestem osobą otwartą na naukę nowych technologii i chętnie podejmuję się wyzwań wykraczających poza moją dotychczasową specjalizację. Nie boję się problemów wymagających analizy i samodzielnego poszukiwania rozwiązań - traktuję je jako okazję do rozwoju. Przy debugowaniu i optymalizacji kodu korzystam z IntelliJ Debugger, Postmana do testowania API oraz pgAdmin do analizy zapytań. Stale rozwijam swoje umiejętności, dążąc do tego, by stać się wszechstronnym programistą, który skutecznie rozwiązuje problemy techniczne w wielu obszarach.
Szybko się uczę - potrafię w krótkim czasie opanować nowe narzędzie czy framework i wdrożyć go w projekcie. Przykładowo, podczas pracy nad projektem samodzielnie zgłębiłem JWT Authentication, WebClient do komunikacji z zewnętrznymi API oraz Docker do konteneryzacji aplikacji. Jestem odpowiedzialny, dotrzymuję terminów i nie zostawiam niedokończonych zadań. Dbam o czystość kodu - stosuję zasady SOLID, DRY, a także piszę testy jednostkowe, bo wiem, że jakość kodu przekłada się na stabilność i łatwość utrzymania systemu.
Mam cierpliwość do tłumaczenia, wspierania innych i rozwiązywania konfliktów - doceniali to członkowie moich zespołów podczas projektów grupowych, gdzie często pełniłem rolę integratora kodu i pomagałem w rozwiązywaniu konfliktów w Git. Potrafię pracować zarówno samodzielnie, jak i w zespole. W sytuacjach pod presją czasu zachowuję spokój, potrafię priorytetyzować zadania i nie tracę koncentracji. Dodatkowo mam poczucie humoru, co pomaga mi budować dobrą atmosferę w zespole i rozładowywać napięcie w trudnych momentach.
W moim dotychczasowym doświadczeniu zawodowym regularnie uczestniczyłem w daily standupach, retrospektywach i planowaniu sprintów, dzięki czemu dobrze rozumiem, jak działa praca w zespole i jak ważna jest dobra komunikacja.
Moim celem jest dalszy rozwój w kierunku pełnego stacka z rozszerzeniem o sztuczną inteligencję oraz łączenie programowania z pasją do grafiki i animacji. Chcę tworzyć nowoczesne, inteligentne i wizualnie atrakcyjne aplikacje, które faktycznie ułatwiają ludziom życie i rozwiązują realne problemy biznesowe.`,
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
                tictactoe:
                    'Gra desktopowa z Minimax AI, tryb dwóch graczy, śledzenie wyników, tryb ciemny/jasny. Zaimplemntowany w czystym Java Swing\'u.',
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
