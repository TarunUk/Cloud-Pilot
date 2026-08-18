import { DeploymentItem, K8sNode, ActivityLog, InfrastructureService } from '../types/dashboard';

export const HERO_METRIC_CARDS = [
  {
    title: 'Applications',
    value: '3',
    unit: 'Active',
    subtext: '3 of 3 healthy',
    badge: '100% up',
    trend: '+12% traffic',
    icon: 'Layers',
    color: 'emerald' as const,
    sparkline: [20, 24, 22, 28, 26, 32, 35, 30, 36, 40]
  },
  {
    title: 'Deployments',
    value: '12',
    unit: 'This month',
    subtext: 'Zero failed rollouts',
    badge: '0 rollbacks',
    trend: '99.9% success',
    icon: 'Rocket',
    color: 'cyan' as const,
    sparkline: [8, 10, 6, 12, 14, 9, 11, 15, 12, 12]
  },
  {
    title: 'Containers',
    value: '8',
    unit: 'Running',
    subtext: 'Distributed across 2 zones',
    badge: '2 standby',
    trend: 'Optimal load',
    icon: 'Box',
    color: 'blue' as const,
    sparkline: [6, 7, 7, 8, 8, 8, 9, 8, 8, 8]
  },
  {
    title: 'Clusters',
    value: '2',
    unit: 'Healthy',
    subtext: 'us-east-1 & eu-west-1',
    badge: 'K8s v1.31',
    trend: 'Sync active',
    icon: 'Server',
    color: 'emerald' as const,
    sparkline: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  }
];

export const RECENT_DEPLOYMENTS: DeploymentItem[] = [
  {
    id: 'dep-1',
    service: 'frontend-v2.4',
    version: 'sha-9f3a8b',
    status: 'Deployed',
    time: '2m ago',
    author: 'alex.m',
    environment: 'production'
  },
  {
    id: 'dep-2',
    service: 'api-service-v1.8',
    version: 'sha-c412e0',
    status: 'Deployed',
    time: '18m ago',
    author: 'ci/cd',
    environment: 'production'
  },
  {
    id: 'dep-3',
    service: 'worker-service-v3.1',
    version: 'sha-e8b211',
    status: 'Running',
    time: '42m ago',
    author: 'devops-bot',
    environment: 'staging'
  },
  {
    id: 'dep-4',
    service: 'payments-api-v1.2',
    version: 'sha-77a19f',
    status: 'Completed',
    time: '1h ago',
    author: 'sarah.k',
    environment: 'production'
  }
];

export const K8S_NODES: K8sNode[] = [
  { id: 'node-1', name: 'prod-k8s-node-01', role: 'control-plane', cpuUsage: 38, memUsage: 54, pods: 8, status: 'Ready', ip: '10.0.12.41' },
  { id: 'node-2', name: 'prod-k8s-node-02', role: 'worker', cpuUsage: 45, memUsage: 68, pods: 10, status: 'Ready', ip: '10.0.12.42' },
  { id: 'node-3', name: 'prod-k8s-node-03', role: 'worker', cpuUsage: 52, memUsage: 62, pods: 9, status: 'Ready', ip: '10.0.12.43' },
  { id: 'node-4', name: 'prod-k8s-node-04', role: 'worker', cpuUsage: 36, memUsage: 58, pods: 7, status: 'Ready', ip: '10.0.12.44' },
  { id: 'node-5', name: 'prod-k8s-node-05', role: 'worker', cpuUsage: 41, memUsage: 64, pods: 5, status: 'Ready', ip: '10.0.12.45' },
  { id: 'node-6', name: 'prod-k8s-node-06', role: 'worker', cpuUsage: 39, memUsage: 59, pods: 3, status: 'Ready', ip: '10.0.12.46' },
];

export const INFRA_SERVICES: InfrastructureService[] = [
  { name: 'Edge API Gateway', type: 'Ingress / Envoy', region: 'Global Edge (Anycast)', health: 100, latency: '8ms', status: 'Operational' },
  { name: 'Core Auth & Session', type: 'Microservice', region: 'us-east-1a', health: 99.8, latency: '12ms', status: 'Operational' },
  { name: 'PostgreSQL Primary', type: 'Database (HA)', region: 'us-east-1b', health: 99.9, latency: '3ms', status: 'Operational' },
  { name: 'Redis Cache Cluster', type: 'In-Memory State', region: 'us-east-1a', health: 100, latency: '<1ms', status: 'Operational' },
  { name: 'Async Event Bus (Kafka)', type: 'Stream Ingest', region: 'us-east-1c', health: 97.4, latency: '19ms', status: 'Operational' },
  { name: 'Worker Queue Processor', type: 'Background Daemon', region: 'us-east-1b', health: 100, latency: '24ms', status: 'Operational' },
];

export const ACTIVITY_LOGS: ActivityLog[] = [
  { id: 'act-1', timestamp: '14:22:08', category: 'deploy', message: 'frontend-v2.4 deployed to us-east-1', details: 'Automated canary passed 100% traffic gate without errors.', severity: 'success' },
  { id: 'act-2', timestamp: '14:18:45', category: 'scale', message: 'HPA scaled worker-service to 8 pods', details: 'CPU utilization reached threshold of 65% target.', severity: 'info' },
  { id: 'act-3', timestamp: '14:04:12', category: 'k8s', message: 'Node prod-k8s-node-06 joined production-cluster', details: 'Kernel version 6.8.0-aws verified, all health checks green.', severity: 'info' },
  { id: 'act-4', timestamp: '13:58:30', category: 'deploy', message: 'api-service-v1.8 rollout completed', details: '3/3 pods transitioned gracefully with zero dropped connections.', severity: 'success' },
  { id: 'act-5', timestamp: '13:41:19', category: 'alert', message: 'Telemetry latency spike mitigated', details: 'Auto-rerouted ingest pipeline to backup replica.', severity: 'warning' },
];

export const TIME_SERIES_CPU = [
  { time: '14:00', value: 38 },
  { time: '14:05', value: 44 },
  { time: '14:10', value: 41 },
  { time: '14:15', value: 49 },
  { time: '14:20', value: 45 },
  { time: '14:25', value: 39 },
  { time: '14:30', value: 42 },
];

export const TIME_SERIES_MEMORY = [
  { time: '14:00', value: 58 },
  { time: '14:05', value: 59 },
  { time: '14:10', value: 63 },
  { time: '14:15', value: 65 },
  { time: '14:20', value: 62 },
  { time: '14:25', value: 60 },
  { time: '14:30', value: 61 },
];

export const FEATURES_LIST = [
  {
    id: 'deploy',
    tag: 'CONTINUOUS DELIVERY',
    title: 'Deploy',
    headline: 'Ship applications with confidence.',
    description: 'Track rollouts, trigger canaries, and inspect release artifacts in real time with automated health gates and instant zero-downtime rollbacks.',
    icon: 'Rocket',
    badge: 'Zero downtime',
    stats: ['Git-native sync', 'Automated canary', 'Instant rollback'],
    codeSnippet: 'cloudpilot deploy --service=frontend --canary=10%'
  },
  {
    id: 'monitor',
    tag: 'REAL-TIME TELEMETRY',
    title: 'Monitor',
    headline: 'Understand infrastructure health at a glance.',
    description: 'Sub-second metrics, distributed tracing, and resource utilization streamed directly into an intelligent, low-latency command center view.',
    icon: 'Activity',
    badge: 'Sub-second telemetry',
    stats: ['99.99% accuracy', 'Live stream buffer', 'Multi-region synthesis'],
    codeSnippet: 'cloudpilot telemetry --stream --metrics=cpu,mem,io'
  },
  {
    id: 'kubernetes',
    tag: 'WORKLOAD ORCHESTRATION',
    title: 'Kubernetes',
    headline: 'Keep clusters, nodes, and workloads visible.',
    description: 'Deep visibility into your pods, daemonsets, node pressures, ingress routes, and CRDs without wrestling with complex kubectl configurations.',
    icon: 'Boxes',
    badge: 'Cluster synthesis',
    stats: ['6 Nodes linked', '42 Pods active', 'K8s 1.31 native'],
    codeSnippet: 'cloudpilot k8s inspect cluster://production-cluster'
  },
  {
    id: 'observe',
    tag: 'INTELLIGENT INSIGHTS',
    title: 'Observe',
    headline: 'See what changed, when it changed, and what needs attention.',
    description: 'Unified audit timeline mapping configuration changes directly to performance shifts, eliminating cross-team debugging confusion.',
    icon: 'Eye',
    badge: 'Root cause triage',
    stats: ['Full change history', 'Automated correlation', 'Audit compliance'],
    codeSnippet: 'cloudpilot audit --timeframe=24h --filter=config_diff'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    name: 'Connect',
    title: 'Bring your cloud environments into one workspace',
    description: 'Connect AWS, GCP, Azure, Bare Metal, or Kubernetes clusters with a single lightweight agent or native IAM role in under 60 seconds.',
    command: 'cloudpilot agent connect --env=production',
    highlights: ['Multi-cloud native', 'Zero credential exposure', 'Auto-discovery of clusters & VPCs']
  },
  {
    step: '02',
    name: 'Deploy',
    title: 'Track applications and deployments from one place',
    description: 'Connect your CI/CD pipelines and repositories. Inspect every commit, container build, and deployment stage with unified release health validation.',
    command: 'cloudpilot pipeline attach --repo=org/cloud-services',
    highlights: ['Multi-stage pipelines', 'Canary validation', 'Automated health verification']
  },
  {
    step: '03',
    name: 'Monitor',
    title: 'Understand infrastructure health in real time',
    description: 'Watch all your metrics, pod states, memory trends, and node health pulse in real-time from a beautifully engineered operations cockpit.',
    command: 'cloudpilot workspace view --live',
    highlights: ['Sub-second latency', 'Automated anomaly detection', 'Intelligent triage insights']
  }
];
