export type NavTab = 
  | 'overview'
  | 'applications'
  | 'deployments'
  | 'infrastructure'
  | 'kubernetes'
  | 'monitoring'
  | 'activity'
  | 'settings';

export interface MetricCardData {
  title: string;
  value: string | number;
  subtext: string;
  badge?: string;
  trend?: string;
  iconName: string;
  chartData?: number[];
  color?: 'emerald' | 'cyan' | 'blue' | 'purple';
}

export interface DeploymentItem {
  id: string;
  service: string;
  version: string;
  status: 'Deployed' | 'Running' | 'Completed' | 'Failed';
  time: string;
  author?: string;
  commit?: string;
  environment?: string;
}

export interface K8sNode {
  id: string;
  name: string;
  role: 'control-plane' | 'worker';
  cpuUsage: number;
  memUsage: number;
  pods: number;
  status: 'Ready' | 'Warning' | 'Busy';
  ip: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  category: 'deploy' | 'k8s' | 'alert' | 'scale' | 'security';
  message: string;
  details: string;
  severity: 'info' | 'success' | 'warning';
}

export interface InfrastructureService {
  name: string;
  type: string;
  region: string;
  health: number; // 0-100
  latency: string;
  status: 'Operational' | 'Degraded' | 'Maintenance';
}
