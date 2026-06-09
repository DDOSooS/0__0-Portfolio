export type Project = {
  name: string
  status: 'LIVE' | 'WIP' | 'ARCHIVED' | 'COMPLETED'
  description: string
  stack: string[]
  link: string
  featured?: boolean
  type?: string
  longDescription?: string
}

export const projects: Project[] = [
  {
    name: 'AI Strategy Research Assistant',
    status: 'WIP',
    type: 'AI / Full-Stack',
    featured: true,
    description:
      'Give it a business question. Get back a structured research report with citations, produced by a multi-agent pipeline.',
    stack: ['Python', 'LangGraph', 'Next.js', 'Anthropic API', 'TypeScript'],
    link: 'https://github.com/DDOSooS',
    longDescription: `Consultants spend 60% of their time gathering and synthesizing information. This tool changes that ratio.

You give it a business question — "What are AI adoption patterns in retail?" — and a multi-agent pipeline handles the research: decomposing the question, running parallel searches, synthesizing findings, and returning a structured report with citations.

Built with LangGraph for orchestration, the Anthropic API for reasoning, and a Next.js interface for output.`,
  },
  {
    name: 'myWikiCLI',
    status: 'WIP',
    type: 'AI / Developer Tool',
    featured: true,
    description:
      "A command-line second brain. Implements Andrej Karpathy's approach to personal knowledge management in your terminal.",
    stack: ['Python', 'CLI', 'Embeddings', 'SQLite', 'Vector Search'],
    link: 'https://github.com/DDOSooS',
    longDescription: `A second brain that lives in your terminal. Inspired by Andrej Karpathy's approach to personal knowledge management: store notes, connect ideas, and retrieve them by semantic meaning rather than exact keywords.

Built as a CLI tool so it stays out of the way and integrates with any workflow.`,
  },
  {
    name: 'E-DAQIQ',
    status: 'COMPLETED',
    type: 'SaaS / Full-Stack',
    featured: true,
    description:
      'SaaS law firm management platform. Cases, client portal, billing, document vault, and analytics — built for Moroccan legal practices. Team lead.',
    stack: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'PHP'],
    link: 'https://github.com/DDOSooS/e-daqiq',
    longDescription: `A multi-tenant SaaS platform for law firms. Replaces scattered spreadsheets and disconnected billing tools with a single role-aware system: case lifecycle management, a client-facing portal, document vault with versioning, invoice generation, and a reporting dashboard. Led a team of 3 developers.`,
  },
  {
    name: 'Web-Server',
    status: 'LIVE',
    featured: true,
    description:
      'A production-capable HTTP/1.1 web server built from scratch in C++. Handles concurrency, CGI, and virtual hosts.',
    stack: ['C++', 'HTTP', 'Sockets', 'Unix'],
    link: 'https://github.com/DDOSooS/Web-Server',
  },
  {
    name: 'miniRT',
    status: 'ARCHIVED',
    description:
      'A ray tracer built in C. Renders 3D scenes with lighting, shadows, and reflections from scratch — no libraries.',
    stack: ['C', 'Ray Tracing', 'Linear Algebra', 'Graphics'],
    link: 'https://github.com/DDOSooS',
  },
  {
    name: 'Mini_Shell',
    status: 'ARCHIVED',
    description:
      'A Unix shell implementation in C. Supports pipes, redirections, environment variables, and built-in commands.',
    stack: ['C', 'Unix', 'Parsing', 'Processes'],
    link: 'https://github.com/DDOSooS',
  },
  {
    name: '42-Philosopher',
    status: 'ARCHIVED',
    description:
      'The dining philosophers problem implemented in C with threads and mutexes. A study in concurrency and deadlock prevention.',
    stack: ['C', 'Threads', 'Mutexes', 'Concurrency'],
    link: 'https://github.com/DDOSooS',
  },
  {
    name: 'Push_swap',
    status: 'ARCHIVED',
    description:
      'Sorting algorithm implementation using two stacks and a constrained instruction set. Optimized for minimum moves.',
    stack: ['C', 'Algorithms', 'Sorting', 'Data Structures'],
    link: 'https://github.com/DDOSooS',
  },
  {
    name: 'Inception',
    status: 'LIVE',
    description:
      'A Docker-based infrastructure project: nginx, WordPress, and MariaDB orchestrated with Docker Compose inside a VM.',
    stack: ['Docker', 'DevOps', 'Nginx', 'MariaDB'],
    link: 'https://github.com/DDOSooS',
  },
]
