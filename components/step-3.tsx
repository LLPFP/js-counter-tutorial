"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Step3() {
  const [clicked, setClicked] = useState(false)

  const code = `<button id="miBoton">Haz clic</button>

<script>
  document.getElementById("miBoton").addEventListener("click", function () {
    alert("¡Has hecho clic!");
  });
</script>`

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Vamos a añadir un botón en HTML y usar JavaScript para detectar cuando se hace clic. El método{" "}
        <code className="bg-gray-100 px-1 rounded">addEventListener</code> nos permite "escuchar" eventos como clics,
        movimientos del ratón, pulsaciones de teclas, etc.
      </p>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-gray-800 text-white text-sm py-2 px-4">HTML con JavaScript</div>
        <SyntaxHighlighter language="html" style={tomorrow} customStyle={{ margin: 0, borderRadius: 0 }}>
          {code}
        </SyntaxHighlighter>
      </div>

      <div className="bg-gray-50 p-6 rounded-md border flex justify-center">
        <button
          id="miBoton"
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Haz clic
        </button>

        {clicked && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h3 className="text-lg font-medium mb-2">Alerta</h3>
              <p className="text-gray-700 mb-4">¡Has hecho clic!</p>
              <button
                onClick={() => setClicked(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Eventos comunes en JavaScript:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <code className="bg-gray-100 px-1 rounded">click</code>: Cuando se hace clic en un elemento
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">mouseover</code>: Cuando el cursor pasa por encima de un elemento
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">keydown</code>: Cuando se presiona una tecla
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">submit</code>: Cuando se envía un formulario
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">load</code>: Cuando la página ha terminado de cargar
          </li>
        </ul>
      </div>
    </div>
  )
}
