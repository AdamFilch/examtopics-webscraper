import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const examsDir = path.join(process.cwd(), 'public/dumps/exam_papers');


    
    try {
        const files = fs.readdirSync(examsDir);
        const jsonFiles = files.filter(file => file.endsWith('.json'));


        return NextResponse.json({ files: jsonFiles });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
    }
}