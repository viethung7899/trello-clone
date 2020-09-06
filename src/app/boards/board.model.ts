export interface Board {
  id?: string;
  priority?: number;
  title?: string;
  tasks?: Task[];
}

export interface Task {
  description?: string;
  color?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}