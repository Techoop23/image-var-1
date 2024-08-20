import { NextResponse } from 'next/server';
import axios from 'axios';
import FormData from 'form-data';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {
  try {
    const { image } = await req.json();

    // Convert base64 to buffer
    const buffer = Buffer.from(image.split(',')[1], 'base64');

    const formData = new FormData();
    formData.append('image', buffer, { filename: 'image.png' });
    formData.append('n', 6);  // Request 6 variations
    formData.append('size', '1024x1024');

    const response = await axios.post('https://api.openai.com/v1/images/variations', formData, {
      headers: {
        ...formData.getHeaders(),
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    return NextResponse.json({ variations: response.data.data.map(img => img.url) });
  } catch (error) {
    console.error('Error generating variations:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: 'Failed to generate variations' }, { status: 500 });
  }
}
