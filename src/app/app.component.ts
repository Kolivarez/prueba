import { Component } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void { }

  public export(): void {

    const docDefinition = {

      content: [
        { text: "Tables", style: "header" },
        "",
        {
          text:
            "WALLPANADEV es una empresa constituida por un grupo de profesionales con conocimientos en desarrollo, diseño, programación, y publicación de aplicaciones en Internet o de manera local.",
          style: "subheader"
        },
        "Crear soluciones tecnológicas que automaticen los procesos de trabajo de nuestros clientes, así como también ofrecer el servicio de hospedaje para llevar cualquier tipo negocio al alcance de todos los usuarios y así puedan aumentar su eficiencia, seguridad y productividad.",
        {
          style: "tableExample",
          table: {
            body: [
              ["Column 1", "Column 2", "Column 3"],
              ["wallpana1", "wallpana 2", "wallpana 3"]
            ]
          }
        }
      ],

      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download("documento.pdf");
  }
}
