import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type, Schema } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const analysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    recommendation: {
      type: Type.STRING,
      enum: ['BUY', 'SELL', 'WAIT'],
      description: 'The overall trading recommendation based on the chart analysis.',
    },
    confidenceScore: {
      type: Type.INTEGER,
      description: 'Confidence score from 0 to 100.',
    },
    reasoning: {
      type: Type.STRING,
      description: 'Detailed explanation of the technical analysis and why the recommendation was made.',
    },
    riskManagement: {
      type: Type.OBJECT,
      properties: {
        entryPrice: { type: Type.STRING, description: 'Suggested entry price or range.' },
        stopLoss: { type: Type.STRING, description: 'Suggested stop loss level.' },
        takeProfit1: { type: Type.STRING, description: 'First take profit target.' },
        takeProfit2: { type: Type.STRING, description: 'Second take profit target.' },
        riskRewardRatio: { type: Type.STRING, description: 'Calculated risk to reward ratio (e.g., 1:2.5).' },
      },
      required: ['entryPrice', 'stopLoss', 'takeProfit1', 'takeProfit2', 'riskRewardRatio'],
    },
    marketStructure: {
      type: Type.OBJECT,
      properties: {
        supportZones: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: 'List of key support levels or zones.',
        },
        resistanceZones: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: 'List of key resistance levels or zones.',
        },
        trendDirection: {
          type: Type.STRING,
          enum: ['BULLISH', 'BEARISH', 'SIDEWAYS'],
          description: 'The primary trend direction.',
        },
        breakouts: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: 'Any detected breakouts.',
        },
        retests: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: 'Any detected retests of key levels.',
        },
        rejections: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: 'Any detected rejections at key levels.',
        },
        supplyDemandZones: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: 'Identified supply and demand zones.',
        },
      },
      required: ['supportZones', 'resistanceZones', 'trendDirection', 'breakouts', 'retests', 'rejections', 'supplyDemandZones'],
    },
  },
  required: ['recommendation', 'confidenceScore', 'reasoning', 'riskManagement', 'marketStructure'],
};

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType } = await req.json();

    if (!imageBase64) {
      return NextResponse.json({ error: 'Image data is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is not configured on the server' }, { status: 500 });
    }

    const prompt = `You are an expert technical analyst and professional trader. 
Analyze the provided trading chart image in deep detail.
Identify key market structures: Support & Resistance zones, Supply & Demand zones, Trend Direction, Breakouts, Retests, and Rejections.
Provide a clear trading recommendation (BUY, SELL, WAIT) along with a risk management plan including Entry, Stop Loss, Take Profits, and Risk/Reward ratio.
Base your entry and exit points strictly on the price action and levels visible in the chart.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            {
              inlineData: {
                data: imageBase64,
                mimeType: mimeType || 'image/jpeg',
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: 'application/json',
        responseSchema: analysisSchema,
        temperature: 0.2, // Low temperature for more analytical consistency
      },
    });

    const responseText = response.text;
    if (!responseText) {
        throw new Error("No response text from Gemini");
    }

    const result = JSON.parse(responseText);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error analyzing chart:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze the trading chart' },
      { status: 500 }
    );
  }
}
