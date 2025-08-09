import React from "react";

const Politica: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-wide mt-8">
          Política de Cambios
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Te contamos cómo gestionar un cambio de manera rápida y simple.
        </p>

        {/* Cómo solicitar un cambio */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cómo solicitar un cambio</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>
              Podés acercarte a nuestra oficina <span className="font-medium">con previo aviso</span> por WhatsApp al{" "}
              <a
                href="https://wa.me/541134914584"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                11 3491 4584
              </a>
              . Coordinamos una cita y evaluamos la prenda para realizar el cambio.
            </li>
            <li>
              Si estás lejos, coordinamos un <span className="font-medium">envío de ida y vuelta</span> por WhatsApp. El
              costo de ambos envíos corre por cuenta del cliente.
            </li>
            <li>
              Una vez recibamos el producto, revisamos su estado (condiciones y etiqueta colgante). Si todo está OK, te
              avisamos y hacemos el cambio.
            </li>
          </ol>
        </div>

        {/* Condiciones */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-semibold mb-4">Condiciones</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>
              Los cambios se realizan dentro de los <span className="font-medium">7 días</span> siguientes a la{" "}
              <span className="font-medium">ENTREGA DEL PRODUCTO</span>.
            </li>
            <li>
              El cambio puede ser por el mismo producto en otro talle/color o por otro producto{" "}
              <span className="font-medium">abonando diferencias</span> si las hubiera.
            </li>
            <li>
              Si queda un saldo a favor del cliente, se entrega un <span className="font-medium">cupón</span> por el
              importe para una futura compra.
            </li>
            <li>
              El precio tomado para el cambio es el <span className="font-medium">precio vigente de lista</span> del
              producto al momento de gestionar el cambio.
            </li>
          </ul>
        </div>

        {/* Envíos y pagos */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-semibold mb-4">Envíos y pagos</h2>
          <p className="text-gray-800 leading-relaxed">
            Si el cambio es a distancia, se realizan dos envíos (ida y vuelta). El costo de ambos corre por cuenta del
            cliente. Las diferencias de precio se abonan en <span className="font-medium">transferencia</span> o{" "}
            <span className="font-medium">efectivo</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/541134914584?text=Hola%20RACO%20DE%20LOIX%2C%20quiero%20gestionar%20un%20cambio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-900 transition"
          >
            Gestionar mi cambio
            <span aria-hidden>💬</span>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            También podés escribirnos a{" "}
            <a href="mailto:racodeloix2020@gmail.com" className="underline">
              racodeloix2020@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Politica;
