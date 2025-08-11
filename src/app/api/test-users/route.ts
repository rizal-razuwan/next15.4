import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Simulate fetching test users from a database or external API
  const testUsers = [{ id: 1, name: "Alice", email: "" }];

  return NextResponse.json(testUsers, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Simulate saving the user to a database or external API
    const newUser = { id: Date.now(), ...body };

    return NextResponse.json(newUser, {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    // Simulate updating the user in a database or external API
    const updatedUser = { id: body.id, ...body };

    return NextResponse.json(updatedUser, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get("id");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Simulate deleting the user from a database or external API
    return NextResponse.json(
      { message: `User with ID ${userId} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}

