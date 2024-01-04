import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openAI = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export async function POST (req: Request){
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse('No content', {
        status: 400,
      })
    }

    const chatCompletion = await openAI.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages
    });

    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    return new NextResponse('[CODE_ERROR]', {
      status: 500,
    })
  }

}