export type Task = {
  title: string,
  completed: boolean,
  priority?: string,
  date?: string
}
export type PriorityOptions = 'High' | 'Medium' | 'Low' | ''