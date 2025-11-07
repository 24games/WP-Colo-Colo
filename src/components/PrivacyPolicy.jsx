import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-6">
            Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página web es exclusivamente informativa y está dedicada a proporcionar contenido 
              histórico y educativo sobre el Club Social y Deportivo Colo-Colo. En cumplimiento con 
              la Ley N° 19.628 sobre Protección de la Vida Privada de Chile, esta política de privacidad 
              describe cómo se maneja cualquier información que pueda ser recopilada durante su visita.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información Recopilada</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página es de naturaleza estática e informativa. No recopilamos información personal 
              de los visitantes de forma activa. Sin embargo, es posible que su navegador o proveedor 
              de servicios de internet pueda registrar información estándar de conexión, incluyendo:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador y versión</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Fecha y hora de acceso</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso de la Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Como página informativa sin fines comerciales, no utilizamos la información de los 
              visitantes para ningún propósito comercial o de marketing. Cualquier información que 
              pueda ser registrada por servicios de terceros (como proveedores de hosting) se utiliza 
              únicamente para fines técnicos y de seguridad.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página no utiliza cookies propias ni tecnologías de seguimiento. Sin embargo, 
              algunos servicios de terceros (como servicios de hosting o CDN) pueden utilizar cookies 
              técnicas necesarias para el funcionamiento del sitio. Estas cookies no recopilan información 
              personal identificable.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Enlaces a Sitios Externos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página puede contener enlaces a sitios web externos, incluyendo imágenes y recursos 
              de terceros. No somos responsables de las prácticas de privacidad de estos sitios externos. 
              Recomendamos revisar las políticas de privacidad de cualquier sitio que visite.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de seguridad apropiadas para proteger la integridad de la página web. 
              Sin embargo, debido a la naturaleza informativa de este sitio, no almacenamos datos personales 
              que requieran protección especial.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Derechos del Usuario</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acuerdo con la legislación chilena sobre protección de datos, usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Ser informado sobre el tratamiento de sus datos personales</li>
              <li>Acceder a sus datos personales si estos fueran recopilados</li>
              <li>Solicitar la rectificación o eliminación de datos inexactos</li>
              <li>Presentar reclamos ante las autoridades competentes</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cambios a esta Política</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
              Cualquier cambio será publicado en esta página con la fecha de última actualización. 
              Le recomendamos revisar esta política periódicamente.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tiene preguntas o inquietudes sobre esta política de privacidad, puede contactarnos 
              a través de los canales disponibles en esta página. Esta es una página informativa sin 
              fines comerciales, por lo que cualquier comunicación será tratada de manera adecuada 
              dentro de nuestras capacidades.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta política de privacidad se rige por las leyes de la República de Chile. Cualquier 
              disputa relacionada con esta política será resuelta en los tribunales competentes de Chile.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = ''
            }}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            ← Volver a la página principal
          </a>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

