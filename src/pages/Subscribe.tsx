import { FormEvent, useState } from "react";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export default function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation({
    variables: { name, email },
  });

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber();

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="flex flex-col md:flex-row     w-full max-w-[1100px]  items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px] flex flex-col items-center md:items-start">
          <Logo />

          <h1 className="mt-8 text-[1.875rem] md:text-[2.5rem] leading-tight text-center md:text-left">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="m-4 md:mt-4 md:m-0 text-gray-200 leading-relaxed text-center md:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-8 md:mt-0">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src="/src/assets/code-mockup.png"
        className="mt-10"
        alt="code-mockup"
      />
    </div>
  );
}
