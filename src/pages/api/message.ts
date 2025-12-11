export async function GET() {
    return new Response(
        `<div class="p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
      <p class="font-bold">¡Contenido cargado exitosamente!</p>
      <p class="mt-2">Este contenido fue cargado dinámicamente usando HTMX sin recargar la página.</p>
      <p class="mt-2 text-sm">Timestamp: ${new Date().toLocaleString('es-ES')}</p>
    </div>`,
        {
            status: 200,
            headers: {
                'Content-Type': 'text/html',
            },
        }
    );
}
