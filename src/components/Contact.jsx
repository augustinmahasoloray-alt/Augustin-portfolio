import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, AlertCircle } from "lucide-react";
import { Reveal } from "./AnimatedReveal.jsx";
import { useGsapMagnetic } from "../hooks/useGsapEffects.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Contact({ personal }) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitBtnRef = useGsapMagnetic(0.2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: `${t.contact.fromNamePrefix} — ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(t.contact.errorGeneric);
      }
    } catch (err) {
      setError(t.contact.errorNetwork);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#0b0d14] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal yOffset={20}>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent dark:bg-accent-dark rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                {t.contact.tag}
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              {t.contact.title}<span className="text-accent dark:text-accent-dark">.</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} yOffset={28}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] gap-6 lg:gap-8 items-stretch">
              {/* Carte de contact */}
              <div className="order-1 bg-accent dark:bg-accent-dark p-7 sm:p-8 shadow-[0_20px_40px_-10px_rgba(var(--color-accent-rgb),0.4)] dark:shadow-[0_20px_40px_-10px_rgba(var(--color-accent-dark-rgb),0.4)] rounded-3xl flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
                    {t.contact.cardTitle}
                  </h3>
                  <p className="text-xs text-accent-light dark:text-accent-dark-light/90 mb-7">
                    {t.contact.cardSubtitle}
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-semibold text-accent-light dark:text-accent-dark-light uppercase tracking-wider">{t.contact.labels.email}</span>
                        <a
                          href={`mailto:${personal.email}`}
                          className="block text-sm font-semibold text-white hover:text-accent-light dark:hover:text-accent-dark-light transition-colors truncate"
                        >
                          {personal.email}
                        </a>
                      </div>
                    </div>

                    {personal?.phone && (
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-semibold text-accent-light dark:text-accent-dark-light uppercase tracking-wider">{t.contact.labels.phone}</span>
                          <a
                            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                            className="block text-sm font-semibold text-white hover:text-accent-light dark:hover:text-accent-dark-light transition-colors"
                          >
                            {personal.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-semibold text-accent-light dark:text-accent-dark-light uppercase tracking-wider">{t.contact.labels.location}</span>
                        <span className="block text-sm font-semibold text-white">
                          {personal.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-white/15 flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-accent-light dark:text-accent-dark-light shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed font-medium text-accent-light/80 dark:text-accent-dark-light/80">
                    {t.contact.availability.before} <strong className="text-white">{t.contact.availability.intern}</strong> {t.contact.availability.mid} <strong className="text-white">{t.contact.availability.freelance}</strong>.
                  </span>
                </div>
              </div>

              {/* Formulaire */}
              <div className="order-2 rounded-3xl bg-white dark:bg-[#121524] border border-neutral-200/80 -neutral-800 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] p-6 sm:p-8 md:p-10 lg:p-12">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent dark:text-accent-dark" />
                  <span>{t.contact.formTitle}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                  {t.contact.formSubtitle}
                </p>

                {isSubmitted ? (
                  <div
                    id="contact-success-message"
                    className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 -emerald-800 text-center animate-in fade-in zoom-in-95 duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-2">
                      {t.contact.successTitle}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto mb-6">
                      {t.contact.successMessage}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 -red-800 text-red-700 dark:text-red-300 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Champs Nom et Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                          {t.contact.fields.name}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.placeholders.name}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] dark:bg-[#181c2f] border border-neutral-200/90 -neutral-700/80 text-sm text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-accent dark:focus:border-accent-dark focus:ring-2 focus:ring-accent/10 dark:focus:ring-accent-dark/10 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                          {t.contact.fields.email}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.placeholders.email}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] dark:bg-[#181c2f] border border-neutral-200/90 -neutral-700/80 text-sm text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-accent dark:focus:border-accent-dark focus:ring-2 focus:ring-accent/10 dark:focus:ring-accent-dark/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Champ Objet */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        {t.contact.fields.subject}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.contact.placeholders.subject}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] dark:bg-[#181c2f] border border-neutral-200/90 -neutral-700/80 text-sm text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-accent dark:focus:border-accent-dark focus:ring-2 focus:ring-accent/10 dark:focus:ring-accent-dark/10 transition-all"
                      />
                    </div>

                    {/* Champ Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        {t.contact.fields.message}
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.placeholders.message}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] dark:bg-[#181c2f] border border-neutral-200/90 -neutral-700/80 text-sm text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-accent dark:focus:border-accent-dark focus:ring-2 focus:ring-accent/10 dark:focus:ring-accent-dark/10 transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Bouton d'envoi */}
                    <div ref={submitBtnRef} className="pt-2">
                      <button
                        id="contact-submit-button"
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover shadow-sm shadow-accent/25 dark:shadow-sm dark:shadow-accent-dark/25 hover:shadow-md hover:shadow-accent/35 dark:hover:shadow-md dark:hover:shadow-accent-dark/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm cursor-pointer disabled:opacity-70"
                      >
                        {loading ? (
                          <span>{t.contact.sending}</span>
                        ) : (
                          <>
                            <span>{t.contact.submit}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}