import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL =
  process.env.WEBHOOK_URL ||
  'https://n8n.srv1104529.hstgr.cloud/webhook/bd9f5208-4d9c-4cba-b2b9-e341b1021b38';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot: silently accept if filled
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    // Validate required fields
    const missing: string[] = [];
    if (!body.fullName?.trim()) missing.push('fullName');
    if (!body.email?.trim()) missing.push('email');
    if (!body.whatsapp?.trim()) missing.push('whatsapp');
    if (!body.yearsExperience?.trim()) missing.push('yearsExperience');
    if (!body.portfolio?.trim()) missing.push('portfolio');
    if (!body.videoWalkthrough?.trim()) missing.push('videoWalkthrough');
    if (!body.salaryExpectation?.trim()) missing.push('salaryExpectation');
    if (!body.whyTWS?.trim()) missing.push('whyTWS');
    if (!body.availability?.trim()) missing.push('availability');

    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    // Forward to webhook
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: 'Webhook delivery failed' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed' },
    { status: 405 }
  );
}

export function PUT() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed' },
    { status: 405 }
  );
}
