export interface ArchitectureCubeItem {
  id: string;
  name: string;
  cubeIndex: number;
  role: string;
  color: string;
  description: string;
  specs: {
    protocol: string;
    latency: string;
    concurrency?: string;
    isolation?: string;
  };
  responsibilities: string[];
  techStack: string[];
}

export const ARCHITECTURE_CUBES: ArchitectureCubeItem[] = [
  {
    id: 'edge-ingress',
    name: 'Edge Ingress & Layer 7 Routing',
    cubeIndex: 0,
    role: 'Top-Left Node',
    color: '#E8A9C2',
    description:
      'Globally distributed anycast edge nodes with automatic DDoS mitigation, TLS 1.3 termination, and intelligent geo-proximity traffic routing.',
    specs: {
      protocol: 'HTTP/3 / QUIC / Anycast BGP',
      latency: '< 1.8ms P99 Edge Termination',
      concurrency: '500,000 req/sec sustained',
      isolation: 'Per-tenant rate limiting & Cloudflare Magic Transit',
    },
    responsibilities: [
      'Global SSL/TLS cryptographic handshakes and edge certificate rotation',
      'Dynamic DDoS scrubbing and automated rate-limiting shields',
      'Sub-millisecond static asset edge caching and compression (Brotli/Zstandard)',
      'Intelligent regional failover routing with automatic health probing',
    ],
    techStack: ['Cloudflare Enterprise', 'Envoy Proxy', 'QUIC', 'Rust Wasm', 'eBPF Filters'],
  },
  {
    id: 'api-gateway',
    name: 'API Gateway & Zero-Trust Shield',
    cubeIndex: 1,
    role: 'Top-Right Node',
    color: '#B9A6D1',
    description:
      'Central authentication and authorization gateway enforcing strict mTLS, JWT token rotation, role-based access control, and payload schema validation.',
    specs: {
      protocol: 'gRPC / OpenAPI v3 / OAuth 2.1 / mTLS',
      latency: '< 2.4ms P99 Validation Latency',
      concurrency: '250,000 concurrent tokens',
      isolation: 'Zero-trust network micro-segmentation',
    },
    responsibilities: [
      'Cryptographic JWT verification, HMAC signature validation, and revocation',
      'Fine-grained Role-Based Access Control (RBAC) & Attribute-Based Access Control (ABAC)',
      'Schema validation and strict request sanitization preventing injection attacks',
      'Real-time token exchange and session multiplexing across enterprise SSO providers',
    ],
    techStack: ['Kong Enterprise', 'Go / gRPC', 'Open Policy Agent (OPA)', 'Redis Enterprise', 'Vault'],
  },
  {
    id: 'distributed-services',
    name: 'Distributed Microservices Mesh',
    cubeIndex: 2,
    role: 'Center Junction',
    color: '#6B4A87',
    description:
      'High-velocity business logic engines operating as decoupled containers orchestrated via Kubernetes, communicating over ultra-fast gRPC and Kafka streams.',
    specs: {
      protocol: 'gRPC / Apache Kafka / Istio Service Mesh',
      latency: '< 0.9ms Service-to-Service Interconnect',
      concurrency: 'Dynamic auto-scaling up to 2,000 pods',
      isolation: 'Independent failure domains & circuit breakers',
    },
    responsibilities: [
      'Core business rule execution, calculation engines, and transactional workflows',
      'Asynchronous event broadcasting and message queuing via Apache Kafka clusters',
      'Automated service mesh discovery, circuit breaking, and retry backoff policies',
      'Distributed tracing and OpenTelemetry context propagation across all spans',
    ],
    techStack: ['Kubernetes (EKS/GKE)', 'Go', 'Rust', 'Node.js', 'Apache Kafka', 'Istio Mesh'],
  },
  {
    id: 'modular-erp-core',
    name: 'Modular Institutional ERP Core',
    cubeIndex: 3,
    role: 'Mid Stem',
    color: '#5A3875',
    description:
      'The domain engine powering Kiduart School ERP: timetable optimization algorithms, student 360 registries, biometric telemetry sync, and automated fee reconciliation.',
    specs: {
      protocol: 'REST / GraphQL / WebSocket IoT streams',
      latency: '< 15ms Complex Query Execution',
      concurrency: 'Multi-tenant architecture with 100+ schools',
      isolation: 'Tenant schema partitioning with strict data governance',
    },
    responsibilities: [
      'Genetic algorithm engine for conflict-free academic timetables & teacher rosters',
      'Real-time IoT bus GPS telemetry ingestion and parent notification dispatch',
      'Instant UPI/NetBanking payment reconciliation and automated GST invoice generation',
      'Automated grading, GPA calculation, and custom CBSE/ICSE report card compilation',
    ],
    techStack: ['TypeScript / Next.js', 'NestJS', 'PostgreSQL', 'Socket.io', 'BullMQ Jobs', 'Tailwind'],
  },
  {
    id: 'resilient-data-store',
    name: 'Resilient Multi-Cloud Data Lake & SQL',
    cubeIndex: 4,
    role: 'Base Stem',
    color: '#E0D8EC',
    description:
      'Fault-tolerant persistent storage with continuous multi-region replication, sub-second analytical querying, point-in-time recovery, and automated encryption at rest.',
    specs: {
      protocol: 'PostgreSQL Wire / ClickHouse Native / Redis RESP',
      latency: '< 0.5ms Read Replica Latency',
      concurrency: '100,000 IOPS sustained',
      isolation: 'AES-256 GCM encryption with customer-managed keys',
    },
    responsibilities: [
      'ACID-compliant relational transactions with automatic multi-AZ failover',
      'High-speed columnar analytics querying for campus dashboards and financial audits',
      'Immutable audit logging capturing every administrative data alteration',
      'Automated continuous differential snapshots with 35-day point-in-time restore',
    ],
    techStack: ['PostgreSQL (Amazon Aurora)', 'ClickHouse', 'Redis Enterprise', 'Amazon S3 / GCP Storage'],
  },
];
