import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://anorkhulov.uz/api/news', {
      cache: 'no-store',
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { message: 'News olishda xatolik' },
      { status: 500 }
    );
  }
}
