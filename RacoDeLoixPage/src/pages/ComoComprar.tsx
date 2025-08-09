import React from "react";
import { Link } from "react-router-dom";

const ComoComprar: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-wide mt-8">
          Cómo Comprar
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Seguí estos pasos y completá tu compra de manera simple y rápida.
        </p>

        {/* Paso a paso */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4">Paso a paso</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>Elegí el producto que deseas comprar.</li>
            <li>
              Hacé clic en el botón <span className="font-medium">“Agregar al carrito”</span>.
              Se agregará el producto al carrito y te llevará al mismo.
            </li>
            <li>
              Podés seguir agregando otros productos al carrito o hacer clic en{" "}
              <span className="font-medium">“Iniciar compra”</span>.
            </li>
            <li>Completá tus datos de contacto y hacé clic en “Continuar”.</li>
            <li>
              Ingresá la dirección donde deseas recibir el producto. Luego hacé
              clic en “Continuar”.
            </li>
            <li>Seleccioná el método de envío y hacé clic en “Continuar”.</li>
            <li>Elegí el medio de pago.</li>
            <li>
              Una vez elegido el medio de pago, hacé clic en “Continuar”. Si
              seleccionás Mercado Pago, se abrirá la página de pago para
              completarlo allí.
            </li>
            <li>
              Revisá toda la información en la página de{" "}
              <span className="font-medium">Confirmación de compra</span> y
              volvé a hacer clic en “Continuar” para finalizar.
            </li>
            <li>
              Una vez acreditado el pago, realizamos el envío correspondiente a
              los productos que compraste.
            </li>
          </ol>
        </div>

        {/* Aclaraciones */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border mb-10">
          <h2 className="text-2xl font-semibold mb-4">Aclaraciones</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>
              Si seleccionaste pago en <span className="font-medium">efectivo o transferencia</span>,
              se hace automático el descuento del{" "}
              <span className="font-medium">15%/10%</span> del total de la compra.
            </li>
            <li>
              Si elegís <span className="font-medium">Mercado Pago</span>, vas a
              ser redirigido a su sitio para finalizar el pago (pudiendo abonar
              con débito/crédito y, si aplica, en <span className="font-medium">3 cuotas sin interés</span>).
            </li>
            <li>
              Al finalizar la compra te llegará un mail de confirmación al
              correo que dejaste en el checkout.
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/productos"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-900 transition w-full sm:w-auto"
          >
            Ver productos
          </Link>

          <a
            href="https://wa.me/541134914584?text=Hola%20RACO%20DE%20LOIX%2C%20necesito%20ayuda%20para%20comprar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-white border px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-50 transition w-full sm:w-auto"
          >
            Ayuda por WhatsApp 💬
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComoComprar;
