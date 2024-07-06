// app/api/images/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/hosted/resource.json');

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const images = JSON.parse(fileContents);
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read image data' }, { status: 500 });
  }
}