import { NextRequest, NextResponse } from "next/server";
import { todos } from "../data";

// GET /api/todos/[id] - Get a single todo
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const todoId = parseInt(params.id);

  // validate ID
  if (isNaN(todoId)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  // Find the todo
  const todo = todos.find((todo) => todo.id === todoId);

  // check if todo exists
  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

// PUT /api/todos/[id] - Update a todo
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const todoId = parseInt(params.id);

    // Validate ID
    if (isNaN(todoId)) {
      return NextResponse.json(
        { message: "Invalid ID format" },
        { status: 400 }
      );
    }

    // Find the todo
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    // Check if todo exists
    if (todoIndex === -1) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    // Parse request body
    const body = await request.json();
    const { title, completed } = body;

    // Validate input
    if (title !== undefined && title.trim() === "") {
      return NextResponse.json(
        { message: "Title cannot be empty" },
        { status: 400 }
      );
    }

    // Update todo
    todos[todoIndex] = {
      id: todoId,
      title: title !== undefined ? title : todos[todoIndex].title,
      completed:
        completed !== undefined ? completed : todos[todoIndex].completed,
    };

    // Return updated todo
    return NextResponse.json(todos[todoIndex]);
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }
}

// DELETE /api/todos/[id] - Delete a todo
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const todoId = parseInt(params.id);

  // Validate ID
  if (isNaN(todoId)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  // Find the todo
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  // Check if todo exists
  if (todoIndex === -1) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  // Remove todo from array
  const deletedTodo = todos[todoIndex];
  todos.splice(todoIndex, 1);

  // Return deleted todo
  return NextResponse.json(deletedTodo);
}
