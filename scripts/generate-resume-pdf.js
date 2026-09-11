import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  // Standard A4: 595.28 x 841.89 points (or Letter: 612 x 792)
  const width = 595.28;
  const height = 841.89;
  const page = pdfDoc.addPage([width, height]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const leftMargin = 55;
  const rightMargin = width - 55;
  const contentWidth = rightMargin - leftMargin;

  let y = height - 60;

  // Header
  page.drawText('Brent Liam Emmanuel L. Go', {
    x: leftMargin,
    y: y,
    size: 20,
    font: fontBold,
    color: rgb(0.08, 0.08, 0.08),
  });

  y -= 20;
  page.drawText('Grand Monaco La Potenza, Block 16 Lot 4, Pasig City', {
    x: leftMargin,
    y: y,
    size: 10.5,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });

  y -= 15;
  page.drawText('Contact No.:0915-475-5930', {
    x: leftMargin,
    y: y,
    size: 10.5,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });

  y -= 15;
  page.drawText('Email: brentliamemmanuelgo@gmail.com', {
    x: leftMargin,
    y: y,
    size: 10.5,
    font: fontRegular,
    color: rgb(0.12, 0.35, 0.75),
  });

  // Section helper
  function drawSectionTitle(title) {
    y -= 26;
    page.drawText(title, {
      x: leftMargin,
      y: y,
      size: 12,
      font: fontBold,
      color: rgb(0.08, 0.08, 0.08),
    });
    y -= 16;
  }

  function drawBullet(text, subLines = []) {
    // Draw bullet dot
    page.drawCircle({
      x: leftMargin + 20,
      y: y + 3,
      size: 2.2,
      color: rgb(0.1, 0.1, 0.1),
    });
    page.drawText(text, {
      x: leftMargin + 32,
      y: y,
      size: 10,
      font: fontRegular,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 14;

    for (const line of subLines) {
      page.drawText(line, {
        x: leftMargin + 32,
        y: y,
        size: 10,
        font: fontRegular,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 14;
    }
  }

  // 1. Qualifications
  drawSectionTitle('Qualifications');
  drawBullet('Dedicated and hard working individual');
  drawBullet('Exceptionally versatile and adaptability');
  drawBullet('Exposed and can interact with wide variety of personality');

  // 2. Objective
  drawSectionTitle('Objective');
  page.drawText('To secure an IT internship where i can leverage my skills to support company operations', {
    x: leftMargin,
    y: y,
    size: 10,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });
  y -= 14;
  page.drawText('while further developing my professional expertise and problem solving abilities.', {
    x: leftMargin,
    y: y,
    size: 10,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });
  y -= 4;

  // 3. Personal Data
  drawSectionTitle('Personal Data');
  drawBullet('Date of Birth: November 02, 2004');
  drawBullet('Citizenship: Filipino');
  drawBullet('Sex: Male');
  drawBullet('Civil Status: Single');

  // 4. Skills
  drawSectionTitle('Skills');
  drawBullet('Python (FastAPI, Pandas, APi Integration, Automation Scripting)');
  drawBullet('AI Powered Coding (Cursor, Codex, Claude Code, AI Debugging, Automated', [
    'Testing)',
  ]);
  drawBullet('Web Development ( React, Node.js, NextJS)');
  drawBullet('Tools & Workflow (Git/Github, VS Code)');

  // 5. Education
  drawSectionTitle('Education');

  // Draw table for Education
  const tableX = leftMargin;
  const tableY = y - 85;
  const tableW = contentWidth;
  const tableH = 100;
  const col1W = 210;

  // Outer border
  page.drawRectangle({
    x: tableX,
    y: tableY,
    width: tableW,
    height: tableH,
    borderColor: rgb(0.1, 0.1, 0.1),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  // Vertical divider
  page.drawLine({
    start: { x: tableX + col1W, y: tableY },
    end: { x: tableX + col1W, y: tableY + tableH },
    color: rgb(0.1, 0.1, 0.1),
    thickness: 1,
  });

  // Horizontal divider between Tertiary and Secondary
  const row1H = 50;
  const rowDividerY = tableY + tableH - row1H;
  page.drawLine({
    start: { x: tableX, y: rowDividerY },
    end: { x: tableX + tableW, y: rowDividerY },
    color: rgb(0.1, 0.1, 0.1),
    thickness: 1,
  });

  // Tertiary row content
  page.drawText('Tertiary', {
    x: tableX + 8,
    y: tableY + tableH - 18,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('2022 - Present', {
    x: tableX + 8,
    y: tableY + tableH - 32,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });

  page.drawText('Rizal Technological University Institute of', {
    x: tableX + col1W + 8,
    y: tableY + tableH - 18,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('Computer Studies in Information', {
    x: tableX + col1W + 8,
    y: tableY + tableH - 31,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('Technology', {
    x: tableX + col1W + 8,
    y: tableY + tableH - 44,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });

  // Secondary row content
  page.drawText('Secondary', {
    x: tableX + 8,
    y: rowDividerY - 14,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('2020 - 2022', {
    x: tableX + 8,
    y: rowDividerY - 26,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('2020- 2016', {
    x: tableX + 8,
    y: rowDividerY - 42,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });

  page.drawText('STI College Sta. Mesa', {
    x: tableX + col1W + 8,
    y: rowDividerY - 14,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('IT in Mobile App and Web Development', {
    x: tableX + col1W + 8,
    y: rowDividerY - 26,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('Good Shepherd Christian School', {
    x: tableX + col1W + 8,
    y: rowDividerY - 42,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });

  y = tableY - 10;

  // 6. References
  drawSectionTitle('References');
  page.drawText('Available Upon Request', {
    x: leftMargin,
    y: y + 2,
    size: 10,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });

  // Save PDF to public/Brent_Go_Resume.pdf
  const pdfBytes = await pdfDoc.save();
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outputPath = path.join(publicDir, 'Brent_Go_Resume.pdf');
  const cvPath = path.join(publicDir, 'cv.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  fs.writeFileSync(cvPath, pdfBytes);
  console.log(`Successfully generated resume PDFs at: ${outputPath} and ${cvPath} (${pdfBytes.length} bytes)`);
}

generateResumePdf().catch((err) => {
  console.error('Error generating resume PDF:', err);
  process.exit(1);
});
