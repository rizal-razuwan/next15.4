"use client";

import { useState, useEffect } from "react";
import { Todo } from "@/types/todo";
import { fetchAllTodos, createTodo, updateTodo, deleteTodo } from "@/lib/api";

// Import shadcn/ui components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn-components/card";
import { Input } from "@/components/ui/shadcn-components/input";
import { Button } from "@/components/ui/shadcn-components/button";
import { Checkbox } from "@/components/ui/shadcn-components/checkbox";
import {
  Alert,
  AlertDescription,
} from "@/components/ui/shadcn-components/alert";
import { Skeleton } from "@/components/ui/shadcn-components/skeleton";

// Import Lucide icons
import { Trash2, Plus, RefreshCcw } from "lucide-react";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load todos on component mount
  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchAllTodos();
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load todos");
    } finally {
      setIsLoading(false);
    }
  }

  // Handle creating a new todo
  async function handleCreateTodo(e: React.FormEvent) {
    e.preventDefault();

    if (!newTodoTitle.trim()) return;

    try {
      setIsSubmitting(true);
      setError(null);
      const newTodo = await createTodo(newTodoTitle);
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create todo");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Handle toggling a todo's completed status
  async function handleToggleTodo(id: number, completed: boolean) {
    try {
      setError(null);
      const updatedTodo = await updateTodo(id, { completed: !completed });
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : `Failed to update todo ${id}`
      );
    }
  }

  // Handle deleting a todo
  async function handleDeleteTodo(id: number) {
    try {
      setError(null);
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : `Failed to delete todo ${id}`
      );
    }
  }

  return (
    <div className="min-h-screen w-full justify-center items-center flex ">
      <div className="container max-w-md mx-auto p-4 ">
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle>Todo List</CardTitle>
            <CardDescription>Manage your tasks efficiently</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Error message */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* New todo form */}
            <form onSubmit={handleCreateTodo} className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                  placeholder="Add a new todo..."
                  disabled={isSubmitting}
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || !newTodoTitle.trim()}
                >
                  {isSubmitting ? (
                    <RefreshCcw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Plus className="h-4 w-4 mr-2" />
                  )}
                  Add
                </Button>
              </div>
            </form>

            {/* Loading state */}
            {isLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-12 w-full rounded" />
                <Skeleton className="h-12 w-full rounded" />
                <Skeleton className="h-12 w-full rounded" />
              </div>
            ) : (
              /* Todo list */
              <div className="space-y-2">
                {todos.length === 0 ? (
                  <div className="text-center py-4 text-muted-foreground">
                    No todos yet. Add one above!
                  </div>
                ) : (
                  todos.map((todo) => (
                    <div
                      key={todo.id}
                      className="flex items-center justify-between p-3 border rounded"
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={todo.completed}
                          onCheckedChange={() =>
                            handleToggleTodo(todo.id, todo.completed)
                          }
                          id={`todo-${todo.id}`}
                        />
                        <label
                          htmlFor={`todo-${todo.id}`}
                          className={`text-sm ${
                            todo.completed
                              ? "line-through text-muted-foreground"
                              : ""
                          }`}
                        >
                          {todo.title}
                        </label>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-4">
            <p className="text-sm text-muted-foreground">
              {todos.length} {todos.length === 1 ? "task" : "tasks"},{" "}
              {todos.filter((t) => t.completed).length} completed
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={loadTodos}
              disabled={isLoading}
            >
              <RefreshCcw
                className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
