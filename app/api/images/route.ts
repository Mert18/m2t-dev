// app/api/images/route.ts
import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  const imagesDirectory = path.join(process.cwd(), 'public/fotoraf');

  try {
    const files = await readdir(imagesDirectory);
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
    const sortedImages = images.sort();

    const startIndex = (page - 1) * limit;
    const paginatedImages = sortedImages.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      images: paginatedImages,
      totalImages: sortedImages.length,
      currentPage: page,
      totalPages: Math.ceil(sortedImages.length / limit),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read images directory' }, { status: 500 });
  }
}