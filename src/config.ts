export const config = {
    developer: {
        name: "Dhruvil",
        fullName: "Dhruvil Thakor",
        title: "Software Engineer | Java Backend & AI",
        description: "Software Engineer at Barclays building scalable distributed systems and intelligent applications. Passionate about microservices, cloud infrastructure, and AI-driven solutions."
    },
    social: {
        github: "thakordrvl",
        email: "thakordrvl@gmail.com",
        location: "Pune, India"
    },
    about: {
        title: "About Me",
        description: "I am a Software Engineer at Barclays, working on backend microservices, CI/CD pipelines, and cloud infrastructure. I graduated from DA-IICT with a B.Tech in Information and Communication Technology. My expertise spans distributed systems, Java/Spring Boot, Go, Kubernetes, Kafka, and AI. I am passionate about building fault-tolerant, scalable systems and exploring the intersection of software engineering and artificial intelligence."
    },
    experiences: [
        {
            position: "Software Engineer",
            company: "Barclays",
            period: "Aug. 2025 - Present",
            location: "Pune, India",
            description: "Full-time software engineer building and maintaining backend microservices for financial systems.",
            responsibilities: [
                "Engineered enhancements across 5 backend microservices using Java/Spring Boot with robust system design supporting 100,000+ daily transactions",
                "Streamlined deployments by integrating automated CI/CD pipelines, Kubernetes orchestration, and AWS provisioning via Terraform",
                "Optimized data processing utilizing SQL within PostgreSQL, reducing average request latency by 15%",
                "Led Root Cause Analysis (RCA) and rigorous debugging for production incidents, maintaining 99.9% uptime and reducing MTTR by 30%",
                "Collaborated in an Agile/Scrum environment to gather scope constraints and implement reliable data representation reports"
            ],
            technologies: ["Java", "Spring Boot", "Kubernetes", "Terraform", "AWS", "PostgreSQL", "Kafka", "CI/CD"]
        },
        {
            position: "Software Engineering Intern",
            company: "Barclays",
            period: "May 2024 - July 2024",
            location: "Pune, India",
            description: "Summer internship building data ingestion pipelines and contributing to legacy system decoupling.",
            responsibilities: [
                "Developed automated data ingestion pipelines to parse, process, and publish over 100,000 records utilizing SQL and message queues",
                "Executed unit testing via Mockito and performed component debugging during legacy system decoupling, accelerating API response times by 20%",
                "Participated in technical design discussions to plan and execute tasks aimed at improving the team's operational development ecosystem"
            ],
            technologies: ["Java", "SQL", "Mockito", "Message Queues", "Unit Testing"]
        },
        {
            position: "B.Tech in ICT",
            company: "DA-IICT",
            period: "Oct 2021 - May 2025",
            location: "Gandhinagar, India",
            description: "Bachelor's degree in Information and Communication Technology from Dhirubhai Ambani Institute of ICT.",
            responsibilities: [
                "Studied core CS fundamentals including data structures, algorithms, operating systems, and computer networks",
                "Focused on distributed systems, artificial intelligence, and software engineering",
                "Built multiple projects in systems programming, AI, and distributed computing"
            ],
            technologies: ["Java", "C++", "Go", "Python", "Distributed Systems", "AI"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "CogniDocs",
            category: "AI / RAG",
            technologies: "Java 21, Spring Boot, Spring AI, Ollama",
            image: "",
            description: "A Retrieval-Augmented Generation engine built with Spring AI and Ollama. Features local RAG ingestion pipeline with Apache Tika, token-based document chunking, vector store integration, and real-time streaming via Server-Sent Events.",
            link: "https://github.com/thakordrvl/cognidocs"
        },
        {
            id: 2,
            title: "hraftd",
            category: "Distributed Systems",
            technologies: "Go, HashiCorp Raft, BoltDB, HTTP API",
            image: "",
            description: "A fault-tolerant distributed key-value store built in Go using the HashiCorp Raft consensus algorithm for strict leader election and replicated state machine log replication.",
            link: "https://github.com/thakordrvl/-hraftd"
        },
        {
            id: 3,
            title: "HTTP Proxy & Load Balancer",
            category: "Systems / Networking",
            technologies: "C++17, POSIX/Winsock2, Multithreading",
            image: "",
            description: "A multithreaded Layer-7 HTTP reverse proxy built from scratch in C++17 with non-blocking I/O polling, custom thread pool, dynamic routing algorithms, and automated TCP health checks.",
            link: "https://github.com/thakordrvl/cpp-proxy-loadbalancer"
        },
        {
            id: 4,
            title: "NexusLedger",
            category: "Fintech / Payments",
            technologies: "Java 21, Spring Boot, gRPC, Kafka, PostgreSQL, Redis, React",
            image: "",
            description: "A high-throughput payment engine with double-entry ledger, idempotency protection, saga orchestration, and a real-time React dashboard. Supports 10K+ TPS with sub-50ms p99 latency.",
            link: "https://github.com/thakordrvl/NexusLedger"
        },
        {
            id: 5,
            title: "VideoSphere",
            category: "Microservices / Streaming",
            technologies: "Java 17, Spring Boot, Angular, Kafka, PostgreSQL, FFmpeg, Docker",
            image: "",
            description: "A production-grade microservices video streaming platform with JWT auth, async event-driven processing, FFmpeg transcoding to HLS adaptive streaming, full-text search, and WebSocket notifications.",
            link: "https://github.com/thakordrvl/VideoSphere"
        },
        {
            id: 6,
            title: "Real-Time Leaderboard",
            category: "Real-Time Systems",
            technologies: "Java 21, Spring Boot, React, PostgreSQL, Redis, WebSocket, Docker",
            image: "",
            description: "A scalable real-time leaderboard with live ranking updates via WebSocket, Redis sorted sets for O(log N) queries, JWT auth, competition sharing, and horizontal scaling behind Nginx load balancer.",
            link: "https://github.com/thakordrvl/Real-Time-LeaderBoard"
        },
        {
            id: 7,
            title: "User Rating Microservice",
            category: "Microservices",
            technologies: "Java 17, Spring Boot, Eureka, Kafka, PostgreSQL, MongoDB, Resilience4J",
            image: "",
            description: "A microservices architecture with Eureka service discovery, Spring Cloud Gateway, centralized config server, Resilience4J circuit breakers, and OAuth2/JWT security across User, Hotel, and Rating services.",
            link: "https://github.com/thakordrvl/User-Rating-Microservice"
        },
        {
            id: 8,
            title: "Spring Batch Kafka",
            category: "Data Pipelines",
            technologies: "Java, Spring Boot, Spring Batch, Apache Kafka",
            image: "",
            description: "A Spring Boot application integrating Spring Batch to read CSV data and publish it to Kafka topics via REST-triggered batch jobs with custom serialization.",
            link: "https://github.com/thakordrvl/Spring-Batch-Kafka"
        },
        {
            id: 9,
            title: ".drvl Version Control",
            category: "Systems Programming",
            technologies: "Python, File I/O, Hashing",
            image: "",
            description: "A custom command-line version control system with init, add, commit, checkout, logging, and user management — built from scratch in Python.",
            link: "https://github.com/thakordrvl/WoC_6.0_Systems_Programming_drvl"
        },
        {
            id: 10,
            title: "Search Engine",
            category: "Data Structures / Algorithms",
            technologies: "C++, Trie, KMP Algorithm",
            image: "",
            description: "An efficient text search engine using Trie for prefix/exact search and KMP algorithm for universal substring matching on large datasets.",
            link: "https://github.com/thakordrvl/Search-Engine"
        }
    ],
    contact: {
        email: "thakordrvl@gmail.com",
        github: "https://github.com/thakordrvl",
        linkedin: "https://linkedin.com/in/dhruvil-thakor"
    },
    skills: {
        develop: {
            title: "SYSTEMS ENGINEER",
            description: "Building distributed, scalable, and fault-tolerant systems",
            details: "Architecting microservices, distributed data stores, and high-performance backend systems using Java, Go, Spring Boot, and cloud-native infrastructure.",
            tools: ["Java", "Go", "C++", "Spring Boot", "Kubernetes", "Docker", "Kafka", "Terraform", "AWS", "PostgreSQL"]
        },
        design: {
            title: "AI ENGINEER",
            description: "Intelligent systems and AI-driven applications",
            details: "Building RAG pipelines, LLM-powered applications, and AI agents using Spring AI, LangChain4j, and modern ML frameworks.",
            tools: ["Spring AI", "LangChain4j", "LLMs", "RAG", "Ollama", "Pinecone", "OpenAI API", "Anthropic Claude", "Groq", "GCP"]
        }
    }
};
