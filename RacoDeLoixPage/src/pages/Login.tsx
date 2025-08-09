import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); // 🔹 Para redirección

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar con tu backend más adelante
    console.log({ email, pass });

    // 🔹 Redirigir al Home
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] ">
        {/* Header */}
        <div className="px-8 pt-8 text-center">
          {/* <img src="/LogoRaco.jpg" alt="RACO DE LOIX" className="mx-auto h-8 w-auto mb-6" /> */}
          <h1 className="text-xl font-bold tracking-tight">Iniciar sesión</h1>
          <p className="text-sm text-neutral-500 mt-1">
            Selecciona cómo querés iniciar sesión
          </p>
        </div>

        {/* Divider */}
        <div className="px-8 my-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-neutral-200" />
          <span className="text-neutral-400 text-xs select-none">o</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* Formulario */}
        <form onSubmit={onSubmit} className="px-8 pb-8 space-y-4">
          {/* EMAIL */}
          <div>
            <input
              id="email"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-lg border border-neutral-300 focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 placeholder:text-neutral-400"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-lg border border-neutral-300 focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 placeholder:text-neutral-400"
            />
            <div className="mt-2 text-right">
              <Link to="/recuperar" className="text-xs text-neutral-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-neutral-900 hover:bg-black text-white font-semibold tracking-wide transition-colors"
          >
            Iniciar sesión
          </button>

          {/* Footer links */}
          <div className="flex items-center justify-between text-xs pt-2">
            <Link to="#" className="text-red-600 hover:underline">
              Política de privacidad
            </Link>
            <Link to="#" className="text-red-600 hover:underline">
              Términos del servicio
            </Link>
          </div>

          {/* CTA crear cuenta */}
          <p className="text-center text-xs text-neutral-600 mt-2">
            ¿No tenés cuenta aún?{" "}
            <Link to="/registro" className="underline hover:no-underline text-neutral-900">
              Crear cuenta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
