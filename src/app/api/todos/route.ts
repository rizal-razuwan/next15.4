import { NextRequest, NextResponse } from "next/server";
import { todos, Todo } from "./data";

// 1. GET /api/todos - Get all todos
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(todos);
}

// 2. POST /api/todos - Create a new todo
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // parse request body
    const body = await request.json();
    const { title, completed = false } = body;

    // validate input
    if (!title || title.trim() === "") {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    // create a new todo item
    const newTodo: Todo = {
      id: todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
      title,
      completed,
    };

    todos.push(newTodo);

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
