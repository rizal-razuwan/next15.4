
// Shared data store for todos
// Note: In production, you should use a database instead of this in-memory solution

// Define Todo type
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Create todos array with initial data
// Using a global variable for simplicity
export const todos: Todo[] = [
  { id: 1, title: 'Learn Next.js', completed: false },
  { id: 2, title: 'Build a CRUD API', completed: false },
  { id: 3, title: 'Deploy to production', completed: false },
];
