import { useState } from "react";
import imgImage2 from "../assets/Homepage/21.png";
import imgImage3 from "../assets/Homepage/22.png";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section className="relative w-full bg-white py-28 overflow-hidden">
      <img
        src={imgImage2}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-0 left-20 xl:left-16 h-[540px] object-contain z-0 pointer-events-none"
      />
      <img
        src={imgImage3}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-0 right-20 xl:right-16 h-[540px] object-contain z-0 pointer-events-none"
      />
  
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center animate-[fadeIn_0.6s_ease-out]">
        <h2 className="font-['Volkhov'] text-[38px] sm:text-[48px] lg:text-[52px] text-[#33302E] leading-[1.15]">
          Subscribe To Our Newsletter
        </h2>
        <div
          className="mt-5 mb-6 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-[#C08A3E]/40" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#C08A3E]" />
          <span className="h-px w-10 bg-[#C08A3E]/40" />
        </div>

        <p className="text-[#8A8580] leading-7 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>

        {status === "success" ? (
          <div
            role="status"
            className="mt-10 rounded-full border border-[#E5E1DA] bg-[#FBF9F6] px-8 py-5 text-[#33302E]"
          >
            You're on the list — check your inbox to confirm.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 sm:rounded-full rounded-2xl border border-[#E5E1DA] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-2 focus-within:border-[#C08A3E]/60 transition-colors"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="michael@ymail.com"
              className="w-full min-w-0 text-lg outline-none bg-transparent placeholder:text-gray-400 px-6 py-3 rounded-full"
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "email-error" : undefined}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 bg-[#1A1918] text-white px-8 py-3 rounded-full hover:bg-[#C08A3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C08A3E] transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe Now"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p
            id="email-error"
            role="alert"
            className="mt-3 text-sm text-red-500"
          >
            Enter a valid email to subscribe.
          </p>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeIn_0\\.6s_ease-out\\] { animation: none; }
        }
      `}</style>
    </section>
  );
}

export default Subscribe;
