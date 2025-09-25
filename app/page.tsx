"use client";

import React, { useState } from "react";
import { Check, Shield, ArrowRight, Building2, Phone, Mail, FileText } from "lucide-react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const bullets = [
    "License-ready scripts, workflows, and talk tracks for niche debt categories",
    "Zero dialer access required — we provide SOPs, not collections",
    "Fast start: plug-and-play templates, compliance guardrails, and QA checklists",
  ];

  const features = [
    {
      title: "Licensing, not collections",
      desc: "We license a tested process to you. You execute under your badge and compliance program.",
      icon: <Shield className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Data & workflow kit",
      desc: "Skiptracing decision trees, dispute triage, contact cadence, and audit-ready logs.",
      icon: <FileText className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Revenue-focused",
      desc: "Prioritize high-odds files; stop burning collector mental capital on DOA placements.",
      icon: <Building2 className="h-6 w-6" aria-hidden />,
    },
  ];

  const tiers = [
    {
      name: "Starter License",
      price: "$499/mo",
      tagline: "Solo/Small shop proving ground",
      items: [
        "Core SOP pack + talk tracks",
        "Niche intake & triage forms",
        "Basic QA checklist",
      ],
      cta: "Join waitlist",
    },
    {
      name: "Growth License",
      price: "$1,200/mo",
      tagline: "Scale to 3–10 collectors",
      items: [
        "Everything in Starter",
        "Advanced contact cadence templates",
        "Weekly office hours (group)",
      ],
      cta: "Request demo",
    },
    {
      name: "Agency Pro",
      price: "Custom",
      tagline: "Multi-branch ops & compliance",
      items: [
        "Team rollout playbook",
        "KPI scorecards & QA rubrics",
        "Co-branded collateral",
      ],
      cta: "Talk to us",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 backdrop-blur border-b border-slate-200/60 bg-white/70 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <Shield className="h-6 w-6" />
            <span>ApexPro Licensing</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 shadow-sm border border-slate-300 hover:shadow-md transition"
          >
            <Phone className="h-4 w-4" /> Book a quick call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 mb-4">
              <span>New</span>
              <span className="opacity-70">Niche Receivables Licensing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              License a proven workflow for underworked debt categories —
              <span className="block">without adding headcount or risk.</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              We’re not a collection agency and we don’t call your debtors. We
              license a repeatable process that helps your team focus on
              high-probability files and stop bleeding time on DOA placements.
            </p>
            <ul className="mt-6 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 shadow-lg border border-slate-300 hover:shadow-xl font-semibold"
              >
                See pricing <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 shadow-lg bg-slate-900 text-white hover:shadow-xl font-semibold"
              >
                Request a 10-min fit check
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Compliance note: We license SOPs and enable your in-house team. We
              do not perform consumer collections, legal services, or credit
              reporting.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 shadow-sm p-6 bg-white">
              <h3 className="text-lg font-semibold">What you get on day one</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      {f.icon}
                      {f.title}
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                <strong className="font-semibold">Works with:</strong> your
                dialer/CRM, skip tools, and QA program. Bring your stack; we
                bring the playbook.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200"
        id="pricing"
      >
        <h2 className="text-3xl font-bold">Simple licensing plans</h2>
        <p className="mt-2 text-slate-600">
          Choose a starting point. Upgrade as you scale.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col"
            >
              <div className="text-xs uppercase tracking-wider text-slate-500">
                {t.tagline}
              </div>
              <h3 className="mt-1 text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {t.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> {it}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-2xl px-4 py-2 border border-slate-300 hover:shadow-md"
              >
                {t.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200"
        id="contact"
      >
        <div className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white">
          <h2 className="text-2xl font-bold">Get the playbook</h2>
          <p className="text-slate-600 mt-1">
            Join the waitlist or request a 10-minute fit check. No spam, ever.
          </p>
          {submitted ? (
            <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
              Thanks — you're on the list. We'll follow up shortly.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-4 grid md:grid-cols-3 gap-3"
            >
              <input
                type="text"
                placeholder="Agency name"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
                className="rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300"
                required
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300"
                required
              />
              <button
                type="submit"
                className="rounded-2xl px-4 py-3 bg-slate-900 text-white font-semibold hover:shadow-lg inline-flex items-center justify-center"
              >
                Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          )}
          <div className="mt-4 text-sm text-slate-500 flex items-center gap-3">
            <Mail className="h-4 w-4" /> apexproconsultingglobal@gmail.com
          </div>
        </div>
      </section>
    </div>
  );
}
