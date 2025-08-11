
// Client-side API functions for todos
// This file organizes all API calls in one place for easier management

import { Todo } from '@/types/todo';

/**
 * Fetch all todos
 * @returns Promise resolving to an array of todos
 */
export async function fetchAllTodos(): Promise<Todo[]> {
  const response = await fetch('/api/todos');
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || 'Failed to fetch todos');
  }
  
  return response.json();
}

/**
 * Create a new todo
 * @param title The title of the todo
 * @param completed Whether the todo is completed (defaults to false)
 * @returns Promise resolving to the created todo
 */
export async function createTodo(title: string, completed: boolean = false): Promise<Todo> {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      completed
    }),
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || 'Failed to create todo');
  }
  
  return response.json();
}

/**
 * Fetch a single todo by ID
 * @param id The ID of the todo to fetch
 * @returns Promise resolving to the todo
 */
export async function fetchTodoById(id: number): Promise<Todo> {
  const response = await fetch(`/api/todos/${id}`);
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `Failed to fetch todo with id ${id}`);
  }
  
  return response.json();
}

/**
 * Update a todo
 * @param id The ID of the todo to update
 * @param updates The fields to update
 * @returns Promise resolving to the updated todo
 */
export async function updateTodo(id: number, updates: Partial<Todo>): Promise<Todo> {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `Failed to update todo with id ${id}`);
  }
  
  return response.json();
}

/**
 * Delete a todo
 * @param id The ID of the todo to delete
 * @returns Promise resolving to the deleted todo
 */
export async function deleteTodo(id: number): Promise<Todo> {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `Failed to delete todo with id ${id}`);
  }
  
  return response.json();
}
