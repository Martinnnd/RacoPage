import React from "react";

const Preguntas: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      {/* Contenedor central */}
      <div className="max-w-5xl mx-auto">
        {/* Título principal */}
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-wide mt-8">
          Preguntas
        </h2>

        {/* Formas de pago */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            ¿Qué formas de pago puedo aprovechar para realizar mi compra?
          </h3>

          {/* Logos en grid (mantengo tus src) */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-4 place-items-center mb-4">
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/visa@2x.png" alt="Visa" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/mastercard@2x.png" alt="Mastercard" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/amex@2x.png" alt="American Express" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/diners@2x.png" alt="Diners" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/banelco@2x.png" alt="Banelco" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/cabal@2x.png" alt="Cabal" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/tarjeta-naranja@2x.png" alt="Naranja" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/tarjeta-shopping@2x.png" alt="Tarjeta Shopping" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/mercadopago@2x.png" alt="Mercado Pago" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/argencard@2x.png" alt="Argencard" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/pagofacil@2x.png" alt="Pago Fácil" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/rapipago@2x.png" alt="Rapipago" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/falabella@2x.png" alt="CMR Falabella" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/nativa@2x.png" alt="Nativa" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/cencosud@2x.png" alt="Cencosud" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
            <img src="//web.archive.org/web/20250427001610im_/https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/cabaldebit@2x.png" alt="Cabal Débito" className="h-10 w-auto object-contain grayscale-[25%] hover:grayscale-0 hover:scale-105 transition" />
          </div>

          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            Aclaración: Tarjeta Naranja no habilita las cuotas sin interés ya que
            no es una tarjeta 100% bancaria.
          </p>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Preguntas y respuestas */}
        <div className="space-y-10 max-w-3xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">¿Cuál es el costo de envío?</h3>
            <p className="text-gray-700">
              El costo de envío será mostrado en base al total de la compra y ubicación,
              en el checkout, en el momento previo a la compra.
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              <li>Envíos dentro de CABA con el envío RACO DE LOIX.</li>
              <li>Envíos dentro de AMBA recomendamos Fixy Logística.</li>
              <li>Envíos fuera de AMBA OCA o ANDREANI.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">¿Cómo se realizan los envíos?</h3>
            <p className="text-gray-700">
              Trabajamos con OCA o ANDREANI, Fixy Logística (correo privado, AMBA) y
              mensajería privada de RACO DE LOIX (solo CABA).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">¿Dónde puedo recibir mi pedido?</h3>
            <p className="text-gray-700">Realizamos envíos a todo el país.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">¿Cuánto tarda en llegar el pedido?</h3>
            <p className="text-gray-700">
              Entre 2 y 6 días hábiles luego de acreditado el pago. <br />
              CABA y AMBA: 24 a 72 horas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">¿Cuál es el plazo para realizar un cambio?</h3>
            <p className="text-gray-700">
              15 días luego de realizada la compra. Costos a cargo del cliente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              ¿Qué debo hacer si el producto no llega en buen estado?
            </h3>
            <p className="text-gray-700">
              Ponte en contacto con nosotros a{" "}
              <span className="font-medium">racodeloix2020@gmail.com</span> y te
              enviaremos uno nuevo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preguntas;
