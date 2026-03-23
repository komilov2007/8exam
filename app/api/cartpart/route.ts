import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
  try {
    const token = (await cookies()).get('token')?.value;
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('sessionId');

    const url = new URL(`${API_URL}/cart`);

    if (sessionId) {
      url.searchParams.set('sessionId', sessionId);
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: 'no-store',
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: 'Cart olishda xatolik' },
      { status: 500 }
    );
  }
}
