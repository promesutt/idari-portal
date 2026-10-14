import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  convertMillimetersToTwip,
} from 'docx';
import { saveAs } from 'file-saver';
import { OfficialDocumentData } from '../types';

export const exportOfficialDocumentToDocx = async (
  docData: OfficialDocumentData,
  filename?: string
): Promise<void> => {
  const paragraphs: Paragraph[] = [];

  // T.C. Antet Başlığı (Kurumsal MEB Formatı)
  paragraphs.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: 'T.C.',
          bold: true,
          font: 'Times New Roman',
          size: 24, // 12pt
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: `${docData.district} KAYMAKAMLIĞI`,
          bold: true,
          font: 'Times New Roman',
          size: 22, // 11pt
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: `${docData.district} İlçe Millî Eğitim Müdürlüğü`,
          font: 'Times New Roman',
          size: 22,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 240 },
      children: [
        new TextRun({
          text: `${docData.schoolName} Müdürlüğü`,
          bold: true,
          font: 'Times New Roman',
          size: 24,
        }),
      ],
    })
  );

  // Sayı, Tarih ve Konu Bloğu
  paragraphs.push(
    new Paragraph({
      alignment: AlignmentType.BOTH,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: `Sayı  : ${docData.number || 'E-62846872-903.02.01-123456'}`,
          bold: true,
          font: 'Times New Roman',
          size: 22,
        }),
        new TextRun({
          text: `\t\t\t\t\tTarih: ${docData.date || new Date().toLocaleDateString('tr-TR')}`,
          bold: true,
          font: 'Times New Roman',
          size: 22,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 280 },
      children: [
        new TextRun({
          text: `Konu : ${docData.subject}`,
          bold: true,
          font: 'Times New Roman',
          size: 22,
        }),
      ],
    })
  );

  // Muhatap / Hitap Bloğu
  const addresseeLines = docData.addressee.split('\n');
  addresseeLines.forEach((line, index) => {
    paragraphs.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: index === addresseeLines.length - 1 ? 240 : 60 },
        children: [
          new TextRun({
            text: line.trim(),
            bold: true,
            font: 'Times New Roman',
            size: 24,
          }),
        ],
      })
    );
  });

  // İlgi (Varsa)
  if (docData.interest && docData.interest.trim()) {
    paragraphs.push(
      new Paragraph({
        spacing: { after: 180 },
        children: [
          new TextRun({
            text: `İlgi : ${docData.interest}`,
            font: 'Times New Roman',
            size: 22,
          }),
        ],
      })
    );
  }

  // Gövde Paragrafları
  const bodyParagraphs = docData.body.split('\n\n');
  bodyParagraphs.forEach((pText) => {
    if (pText.trim()) {
      paragraphs.push(
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { after: 140, line: 276 }, // 1.15 satır aralığı
          indent: { firstLine: convertMillimetersToTwip(10) }, // 1cm paragraf girintisi
          children: [
            new TextRun({
              text: pText.trim(),
              font: 'Times New Roman',
              size: 24,
            }),
          ],
        })
      );
    }
  });

  // Sonuç Cümlesi (Arz ederim / Rica ederim)
  let conclusionText = 'Gereğini arz ederim.';
  if (docData.conclusionType === 'rica') {
    conclusionText = 'Gereğini rica ederim.';
  } else if (docData.conclusionType === 'arz_rica') {
    conclusionText = 'Gereğini arz ve rica ederim.';
  }

  paragraphs.push(
    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { after: 360 },
      indent: { firstLine: convertMillimetersToTwip(10) },
      children: [
        new TextRun({
          text: conclusionText,
          font: 'Times New Roman',
          size: 24,
        }),
      ],
    })
  );

  // İmza Bloğu (Sağ Tarafta)
  paragraphs.push(
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: docData.signerName,
          bold: true,
          font: 'Times New Roman',
          size: 24,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { after: 280 },
      children: [
        new TextRun({
          text: docData.signerTitle,
          font: 'Times New Roman',
          size: 22,
        }),
      ],
    })
  );

  // Ekler (Varsa)
  if (docData.attachments && docData.attachments.trim()) {
    paragraphs.push(
      new Paragraph({
        spacing: { before: 180, after: 60 },
        children: [
          new TextRun({
            text: 'EKLER :',
            bold: true,
            font: 'Times New Roman',
            size: 20,
          }),
        ],
      })
    );

    const ekLines = docData.attachments.split('\n');
    ekLines.forEach((ek) => {
      if (ek.trim()) {
        paragraphs.push(
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({
                text: ek.trim(),
                font: 'Times New Roman',
                size: 20,
              }),
            ],
          })
        );
      }
    });
  }

  // Dağıtım (Varsa)
  if (docData.distribution && docData.distribution.trim()) {
    paragraphs.push(
      new Paragraph({
        spacing: { before: 140, after: 60 },
        children: [
          new TextRun({
            text: 'DAĞITIM :',
            bold: true,
            font: 'Times New Roman',
            size: 20,
          }),
        ],
      })
    );

    const dagitimLines = docData.distribution.split('\n');
    dagitimLines.forEach((d) => {
      if (d.trim()) {
        paragraphs.push(
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({
                text: d.trim(),
                font: 'Times New Roman',
                size: 20,
              }),
            ],
          })
        );
      }
    });
  }

  // Word Belgesi Yapılandırması (A4 Boyut, MEB Kenar Boşlukları)
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertMillimetersToTwip(25), // 2.5 cm
              bottom: convertMillimetersToTwip(25), // 2.5 cm
              left: convertMillimetersToTwip(25), // 2.5 cm
              right: convertMillimetersToTwip(15), // 1.5 cm
            },
          },
        },
        children: paragraphs,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const safeFilename = filename || `${docData.subject.replace(/[^a-zA-Z0-9ığüşöçİĞÜŞÖÇ_ -]/g, '_')}.docx`;
  saveAs(blob, safeFilename);
};
