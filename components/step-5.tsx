"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Step5() {
  const htmlCode = `<button id="contador">Has hecho clic 0 veces</button>
<script src="script.js"></script>`

  const jsCode = `let clics = 0;

document.getElementById("contador").addEventListener("click", function () {
  clics++;
  this.innerText = \`Has hecho clic \${clics} veces\`;
});`

  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Es buena práctica mover tu JavaScript a un archivo externo para mantener tu código más organizado. Esto facilita
        el mantenimiento y mejora la estructura de tu proyecto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-800 text-white text-sm py-2 px-4">HTML (index.html)</div>
          <SyntaxHighlighter language="html" style={tomorrow} customStyle={{ margin: 0, borderRadius: 0 }}>
            {htmlCode}
          </SyntaxHighlighter>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-800 text-white text-sm py-2 px-4">JavaScript (script.js)</div>
          <SyntaxHighlighter language="javascript" style={tomorrow} customStyle={{ margin: 0, borderRadius: 0 }}>
            {jsCode}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Ventajas de usar archivos externos:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Separación de responsabilidades (HTML para estructura, JS para comportamiento)</li>
          <li>Mejor organización del código</li>
          <li>Facilita la reutilización del código en diferentes páginas</li>
          <li>Mejora el rendimiento gracias al almacenamiento en caché del navegador</li>
          <li>Facilita el trabajo en equipo</li>
        </ul>
      </div>

      <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
        <h3 className="font-medium text-amber-800 mb-2">Importante:</h3>
        <p className="text-gray-700">
          Asegúrate de que el archivo JavaScript se cargue después de que los elementos HTML estén disponibles. Puedes
          colocar la etiqueta <code className="bg-gray-100 px-1 rounded">&lt;script&gt;</code>
          justo antes del cierre de <code className="bg-gray-100 px-1 rounded">&lt;/body&gt;</code> o usar el atributo{" "}
          <code className="bg-gray-100 px-1 rounded">defer</code>:
          <code className="bg-gray-100 px-1 rounded">&lt;script src="script.js" defer&gt;&lt;/script&gt;</code>
        </p>
      </div>
    </div>
  )
}
