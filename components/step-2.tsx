"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Step2() {
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null)

  const htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <script>
      console.log('JavaScript funcionando');
    </script>
  </body>
</html>`

  const runCode = () => {
    setConsoleOutput("JavaScript funcionando")
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Puedes añadir JavaScript a una página HTML usando la etiqueta{" "}
        <code className="bg-gray-100 px-1 rounded">&lt;script&gt;</code>. Normalmente se coloca antes del cierre de la
        etiqueta <code className="bg-gray-100 px-1 rounded">&lt;/body&gt;</code>.
      </p>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-gray-800 text-white text-sm py-2 px-4">HTML con JavaScript</div>
        <SyntaxHighlighter language="html" style={tomorrow} customStyle={{ margin: 0, borderRadius: 0 }}>
          {htmlCode}
        </SyntaxHighlighter>
      </div>

      <div className="flex justify-center">
        <button
          onClick={runCode}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Ejecutar código
        </button>
      </div>

      {consoleOutput && (
        <div className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm">
          <div className="flex items-center mb-2">
            <span className="text-gray-400 mr-2">&gt;</span>
            <span>console.log('JavaScript funcionando');</span>
          </div>
          <div className="pl-4 border-l-2 border-gray-700">{consoleOutput}</div>
        </div>
      )}

      <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Formas de incluir JavaScript:</h3>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
          <li>
            Directamente en el HTML con la etiqueta <code className="bg-gray-100 px-1 rounded">&lt;script&gt;</code>
          </li>
          <li>
            En un archivo externo:{" "}
            <code className="bg-gray-100 px-1 rounded">&lt;script src="miarchivo.js"&gt;&lt;/script&gt;</code>
          </li>
          <li>
            En atributos de eventos HTML (no recomendado):{" "}
            <code className="bg-gray-100 px-1 rounded">&lt;button onclick="alert('Hola')"&gt;</code>
          </li>
        </ol>
      </div>
    </div>
  )
}
