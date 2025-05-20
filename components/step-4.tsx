"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Step4() {
  const [clicks, setClicks] = useState(0)

  const code = `<button id="contador">Has hecho clic 0 veces</button>

<script>
  let clics = 0;

  document.getElementById("contador").addEventListener("click", function () {
    clics++;
    this.innerText = \`Has hecho clic \${clics} veces\`;
  });
</script>`

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Ahora vamos a contar cuántas veces se ha hecho clic en el botón. Usaremos una variable y actualizaremos el texto
        del botón cada vez que se haga clic.
      </p>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-gray-800 text-white text-sm py-2 px-4">HTML con JavaScript</div>
        <SyntaxHighlighter language="html" style={tomorrow} customStyle={{ margin: 0, borderRadius: 0 }}>
          {code}
        </SyntaxHighlighter>
      </div>

      <div className="bg-gray-50 p-6 rounded-md border flex justify-center">
        <button
          id="contador"
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Has hecho clic {clicks} veces
        </button>
      </div>

      <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Conceptos clave:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <code className="bg-gray-100 px-1 rounded">let clics = 0</code>: Declaración de variable
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">clics++</code>: Incremento de variable
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">this.innerText</code>: Modificación del contenido de texto
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">`texto ${clicks}`</code>: Template literals (plantillas de texto)
          </li>
        </ul>
      </div>

      <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
        <h3 className="font-medium text-amber-800 mb-2">Nota:</h3>
        <p className="text-gray-700">
          En este ejemplo, <code className="bg-gray-100 px-1 rounded">this</code> se refiere al elemento que recibió el
          evento (el botón). Dentro de una función de evento, <code className="bg-gray-100 px-1 rounded">this</code>{" "}
          apunta al elemento que desencadenó el evento.
        </p>
      </div>
    </div>
  )
}
