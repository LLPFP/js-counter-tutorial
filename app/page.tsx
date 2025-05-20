import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Step1 from "@/components/step-1"
import Step2 from "@/components/step-2"
import Step3 from "@/components/step-3"
import Step4 from "@/components/step-4"
import Step5 from "@/components/step-5"
import Step6 from "@/components/step-6"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
          Introducción a JavaScript con un Contador de Clics
        </h1>

        <p className="text-gray-700 mb-8 text-center">
          Aprende los fundamentos de JavaScript creando un contador de clics interactivo
        </p>

        <Tabs defaultValue="paso1" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
            <TabsTrigger value="paso1">Paso 1</TabsTrigger>
            <TabsTrigger value="paso2">Paso 2</TabsTrigger>
            <TabsTrigger value="paso3">Paso 3</TabsTrigger>
            <TabsTrigger value="paso4">Paso 4</TabsTrigger>
            <TabsTrigger value="paso5">Paso 5</TabsTrigger>
            <TabsTrigger value="paso6">Paso 6</TabsTrigger>
          </TabsList>

          <TabsContent value="paso1">
            <Card>
              <CardHeader>
                <CardTitle>¿Qué es JavaScript?</CardTitle>
                <CardDescription>Fundamentos del lenguaje</CardDescription>
              </CardHeader>
              <CardContent>
                <Step1 />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paso2">
            <Card>
              <CardHeader>
                <CardTitle>Cómo incluir JavaScript en HTML</CardTitle>
                <CardDescription>Integrando JavaScript en páginas web</CardDescription>
              </CardHeader>
              <CardContent>
                <Step2 />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paso3">
            <Card>
              <CardHeader>
                <CardTitle>Crear un botón y conectarlo con JS</CardTitle>
                <CardDescription>Eventos y manipulación del DOM</CardDescription>
              </CardHeader>
              <CardContent>
                <Step3 />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paso4">
            <Card>
              <CardHeader>
                <CardTitle>Crear un contador de clics</CardTitle>
                <CardDescription>Variables y actualización dinámica</CardDescription>
              </CardHeader>
              <CardContent>
                <Step4 />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paso5">
            <Card>
              <CardHeader>
                <CardTitle>Separar JavaScript en un archivo externo</CardTitle>
                <CardDescription>Organización del código</CardDescription>
              </CardHeader>
              <CardContent>
                <Step5 />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paso6">
            <Card>
              <CardHeader>
                <CardTitle>Agregar estilos con CSS</CardTitle>
                <CardDescription>Mejorando la experiencia visual</CardDescription>
              </CardHeader>
              <CardContent>
                <Step6 />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
