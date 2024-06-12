import { Template } from "@pdfme/common";

import { barcodes } from "@pdfme/schemas";
import { basePDF } from "./basePDF";

import { generate } from "@pdfme/generator";

export const generatePDF = async (url: string): Promise<Uint8Array> => {
  const plugins = { qrcode: barcodes.qrcode };
  const inputs = [ { "qrcode": url } ];
  const template: Template = {
    basePdf: basePDF,
    pdfmeVersion: "4.0.0",
    schemas: [
      {
        qrcode: {
          type: "qrcode",
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-qr-code\"><rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"/><path d=\"M21 21v.01\"/><path d=\"M12 7v3a2 2 0 0 1-2 2H7\"/><path d=\"M3 12h.01\"/><path d=\"M12 3h.01\"/><path d=\"M12 16v.01\"/><path d=\"M16 12h1\"/><path d=\"M21 12v.01\"/><path d=\"M12 21v-1\"/></svg>",
          position: {
            "x": 40.21,
            "y": 83.78
          },
          backgroundColor: "#ffffff",
          barColor: "#243055",
          width: 35,
          height: 35,
          rotate: 0,
          opacity: 1,
        }
      }
    ] 
  };

  const pdf: Uint8Array = await generate({
    template,
    inputs,
    plugins
  });

  return pdf;
};
