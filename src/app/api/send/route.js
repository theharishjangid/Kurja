import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        console.log("Received data:", data);

        // Here you would add your logic to send the data (e.g., send an email)
        // ...

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error("Error in /api/send:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
