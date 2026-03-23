import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://anorkhulov.uz/api/galleries', {
      method: 'GET',
      cache: 'no-store',
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: 'Gallery olishda xatolik' },
      { status: 500 }
    );
  }
}
