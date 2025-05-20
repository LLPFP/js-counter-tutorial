"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Step6() {
  const [clicks, setClicks] = useState(0)

  const htmlCode = `<link rel="stylesheet" href="estilos.css">
<button id="contador">Has hecho clic 0 veces</button>
<script src="script.js"></script>`

  const cssCode = `#contador {
  padding: 10px 20px;
  font-size: 18px;
  background-color: royalblue;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#contador:hover {
  background-color: #3355cc;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#contador:active {
  transform: translateY(0);
}`

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Aunque no es JavaScript, estilizar tu botón ayuda a mejorar la experiencia. Aquí un ejemplo con CSS básico para
        hacer que nuestro contador sea más atractivo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-800 text-white text-sm py-2 px-4">HTML (index.html)</div>
          <SyntaxHighlighter language="html" style={tomorrow} customStyle={{ margin: 0, borderRadius: 0 }}>
            {htmlCode}
          </SyntaxHighlighter>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-800 text-white text-sm py-2 px-4">CSS (estilos.css)</div>
          <SyntaxHighlighter language="css" style={tomorrow} customStyle={{ margin: 0, borderRadius: 0 }}>
            {cssCode}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-md border flex justify-center">
        <button
          onClick={handleClick}
          className="px-5 py-3 text-lg bg-[royalblue] text-white rounded-lg border-none cursor-pointer hover:bg-[#3355cc] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all"
        >
          Has hecho clic {clicks} veces
        </button>
      </div>

      <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Propiedades CSS utilizadas:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <code className="bg-gray-100 px-1 rounded">padding</code>: Espacio interno del botón
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">background-color</code>: Color de fondo
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">border-radius</code>: Esquinas redondeadas
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">:hover</code>: Estilo cuando el cursor está sobre el botón
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">transform</code>: Efecto de movimiento al interactuar
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">box-shadow</code>: Sombra para dar profundidad
          </li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-md border border-green-200">
        <h3 className="font-medium text-green-800 mb-2">¡Proyecto completo!</h3>
        <p className="text-gray-700">
          ¡Felicidades! Has creado un contador de clics funcional con HTML, JavaScript y CSS. Este es un excelente
          primer paso en tu viaje de aprendizaje de JavaScript.
        </p>
        <p className="text-gray-700 mt-2">
          Próximos pasos: Intenta añadir un botón para reiniciar el contador o cambiar el color del botón después de
          cierto número de clics.
        </p>
      </div>
    </div>
  )
}
