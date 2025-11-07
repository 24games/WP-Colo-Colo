import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Términos y Condiciones
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-6">
            Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al acceder y utilizar esta página web, usted acepta cumplir con estos términos y condiciones 
              de uso. Si no está de acuerdo con alguna parte de estos términos, le recomendamos que no 
              utilice este sitio web. Esta página es exclusivamente informativa y no tiene fines comerciales 
              o lucrativos.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Propósito de la Página</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página web está dedicada a proporcionar información histórica, educativa y cultural 
              sobre el Club Social y Deportivo Colo-Colo. El contenido es de naturaleza informativa y 
              no pretende generar ingresos comerciales, establecer relaciones comerciales ni realizar 
              transacciones de ningún tipo.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso del Contenido</h2>
            <p className="text-gray-700 leading-relaxed mb-4 mb-4">
              El contenido de esta página, incluyendo textos, imágenes y otros materiales, está disponible 
              únicamente para fines informativos y educativos. Usted puede:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Leer y consultar el contenido para uso personal e informativo</li>
              <li>Compartir enlaces a esta página</li>
              <li>Utilizar el contenido como referencia educativa</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              No está permitido:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Reproducir el contenido con fines comerciales sin autorización</li>
              <li>Modificar o alterar el contenido de manera que desvirtúe su intención original</li>
              <li>Utilizar el contenido de manera que infrinja derechos de propiedad intelectual de terceros</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Las imágenes y algunos contenidos utilizados en esta página pueden pertenecer a terceros, 
              incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Fotografías bajo licencia de uso público o fair use</li>
              <li>Logos y marcas del Club Social y Deportivo Colo-Colo</li>
              <li>Contenido de fuentes públicas y enciclopedias</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página reconoce los derechos de propiedad intelectual de terceros y utiliza contenido 
              únicamente con fines informativos y educativos, en conformidad con las leyes chilenas de 
              propiedad intelectual y derechos de autor.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Precisión de la Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos esforzamos por proporcionar información precisa y actualizada sobre el Club Colo-Colo. 
              Sin embargo, no garantizamos la exactitud, completitud o actualidad de toda la información 
              presentada. La información histórica y estadística se basa en fuentes públicas y puede 
              estar sujeta a cambios o actualizaciones.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Enlaces Externos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página puede contener enlaces a sitios web externos que consideramos relevantes para 
              el contenido informativo. No somos responsables del contenido, políticas de privacidad o 
              prácticas de estos sitios externos. La inclusión de enlaces no implica respaldo ni 
              asociación con estos sitios.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página se proporciona "tal cual" sin garantías de ningún tipo. No seremos responsables 
              de ningún daño directo, indirecto, incidental o consecuente que pueda surgir del uso de 
              esta página web o de la información contenida en ella. Esta limitación se aplica en la 
              máxima medida permitida por la ley chilena.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones de los Términos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento 
              sin previo aviso. Los cambios entrarán en vigor inmediatamente después de su publicación 
              en esta página. Es responsabilidad del usuario revisar periódicamente estos términos para 
              estar informado de cualquier cambio.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. No Afiliación Oficial</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta página web no está afiliada, respaldada ni autorizada por el Club Social y Deportivo 
              Colo-Colo. Es una página independiente creada con fines informativos y educativos. Las 
              opiniones y el contenido presentado reflejan únicamente el propósito informativo de esta 
              página y no representan las opiniones oficiales del club.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estos términos y condiciones se rigen por las leyes de la República de Chile. Cualquier 
              disputa que surja de o esté relacionada con estos términos será resuelta en los tribunales 
              competentes de Chile, y las partes se someten expresamente a la jurisdicción de dichos 
              tribunales.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de 
              los canales disponibles en esta página. Como página informativa sin fines comerciales, 
              haremos nuestro mejor esfuerzo para responder a sus consultas dentro de nuestras capacidades.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Separabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si alguna disposición de estos términos y condiciones es considerada inválida o inaplicable 
              por un tribunal competente, las disposiciones restantes permanecerán en pleno vigor y efecto. 
              La disposición inválida será modificada en la medida mínima necesaria para hacerla válida 
              y aplicable.
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

export default TermsAndConditions

