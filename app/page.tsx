export default function Home() {
  const faqs = [
    {
      q: "Which support platforms do you integrate with?",
      a: "FeedbackTriage connects with Intercom, Zendesk, Freshdesk, and email inboxes out of the box. More integrations are added regularly."
    },
    {
      q: "How accurate is the AI categorization?",
      a: "Our model achieves 94%+ accuracy on routing decisions. You can review and correct any misrouted tickets, and the system learns from your feedback."
    },
    {
      q: "Can I customize the routing rules?",
      a: "Yes. You define teams, keywords, sentiment thresholds, and escalation paths. The AI follows your rules and improves over time."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Triage
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route customer feedback<br />
          <span className="text-[#58a6ff]">to the right team, instantly</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop wasting hours manually sorting support tickets. FeedbackTriage uses AI to categorize, prioritize, and route every piece of customer feedback automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 14-day trial</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Connect", desc: "Link your support inbox or platform in under 2 minutes." },
            { step: "02", title: "Analyze", desc: "AI reads each ticket, detects sentiment, topic, and urgency." },
            { step: "03", title: "Route", desc: "Tickets land in the right queue with context attached." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-sm mb-2">{step}</div>
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited ticket routing",
              "Up to 10 team members",
              "Intercom, Zendesk & email integrations",
              "Custom routing rules",
              "Sentiment & priority detection",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} FeedbackTriage. All rights reserved.
      </footer>
    </main>
  );
}
