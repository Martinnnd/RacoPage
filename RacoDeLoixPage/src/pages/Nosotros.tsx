import { useEffect, useRef, useState } from "react";

const useAnimateOnce = () => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (!ref.current || played) return;
    const el = ref.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("animate-fadeUpOnce");
            setPlayed(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [played]);

  return ref;
};

const Nosotros = () => {
  const titleRef = useAnimateOnce();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/public/heroContact.jpg')", // 🔁 cambia la imagen aquí (public/about-hero.jpg)
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Overlay para contraste */}
      <div className="absolute bg-black/70 inset-0 backdrop-blur-xs bg-opacity-60 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center space-y-10">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-md"
        >
          About us
        </h1>

        <blockquote
          className="relative text-lg md:text-xl font-extrabold tracking-wide uppercase text-center px-6 py-4 max-w-4xl mx-auto
             bg-black/50 rounded-xl shadow-lg
             animate-quoteGlow"
        >

          “NOS PASAMOS LA VIDA TRATANDO DE ENCAJAR EN LOS ESTEREOTIPOS DE LA SOCIEDAD,
          CUANDO LO MÁS DIVERTIDO ES ALEJARSE DE ESO, ES CUANDO REALMENTE ENCAJAS,
          CUANDO NO RESPONDES A NADA MÁS QUE A TI MISMO”
        </blockquote>

        <div className="space-y-8 text-sm md:text-base leading-7 md:leading-8 opacity-95">
          <p>
            Creemos firmemente que cada uno de nosotros es diferente y
            paradójicamente eso es precisamente lo que tenemos en común como
            comunidad: el hecho de tener esas diferencias entre nosotros y
            sentirnos orgullosos de ello es lo que nos une como comunidad donde
            se exalta la libertad y se rechazan las etiquetas, para que cada uno
            de nosotros pueda ser la versión más completa, honesta, transparente
            y orgullosa de nosotros mismos.
          </p>

          <p>
            RACO DE LOIX, nació con el propósito de representar a todas las
            personas que están dispuestas a ser más reales. Más vivos. Más
            orgullosos. Más ambiciosos.
          </p>

          <p>
            En RACO DE LOIX nuestro principal foco siempre ha sido el producto y
            su calidad. Como empezó como un proyecto tan personal, no nos
            importaba hacer ruido ni ganar dinero. Solo nos importaba hacer ropa
            que nos gustaría usar.
          </p>

          <p>
            Hemos continuado con esa filosofía hasta el día de hoy y eso es lo
            que nos ha traído hasta donde estamos, y por eso seguiremos
            ampliando la variedad de nuestros productos y vistiéndote de arriba
            a abajo. Queremos que RACO sea tu elección para el día a día, todo
            ello a través de una estética cotidiana urbana y llena de luz, con
            un trasfondo de exaltación de lo personal y aspectos diferenciadores
            que buscan un crecimiento personal continuo. Siempre hay espacio para
            más desarrollo y crecimiento.
          </p>

          <p>
            Y nunca hay que olvidarse de la persona más importante dentro de
            todo este mundo cambiante. esa persona es: <strong>TU</strong>.
          </p>

          <p>
            Todo esto fue posible gracias a vos y a todas las personas que nos
            han apoyado desde el minuto 1. Así que siempre vamos a estar
            entregándoles lo mejor de lo mejor.
          </p>
        </div>

        <div className="pt-6 text-xs md:text-sm tracking-wide opacity-90">
          <p>From BUENOS AIRES</p>
          <p>Con amor</p>
          <img
            src="/LogoRaco.jpg"
            alt="RACO DE LOIX"
            className="mx-auto mt-4 w-32 md:w-40 glow"
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
