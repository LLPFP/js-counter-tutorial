export default function Step1() {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        JavaScript es un lenguaje de programación que permite añadir interactividad a los sitios web. Con JavaScript
        puedes responder a eventos como clics, validar formularios, cambiar el contenido de una página sin recargar, y
        mucho más.
      </p>

      <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">¿Qué puedes hacer con JavaScript?</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Responder a acciones del usuario (clics, movimientos del ratón, etc.)</li>
          <li>Validar formularios antes de enviarlos</li>
          <li>Actualizar contenido dinámicamente sin recargar la página</li>
          <li>Crear animaciones y efectos visuales</li>
          <li>Comunicarse con servidores para obtener o enviar datos (AJAX)</li>
        </ul>
      </div>

      <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
        <h3 className="font-medium text-amber-800 mb-2">Nota importante:</h3>
        <p className="text-gray-700">
          JavaScript es diferente de Java, a pesar de la similitud en el nombre. Son lenguajes completamente distintos
          con propósitos diferentes.
        </p>
      </div>
    </div>
  )
}
