<script setup lang="ts">
// The home page. Change the words, keep the structure, or build your own from design/pages/
// (the screens drawn in Universal App Studio). Styles live in app/assets/studio-starter.css.
useSeoMeta({ description: 'Say what this site is for in one sentence. Search engines show it under the title.' })
</script>

<template>
  <div>
    <section class="hero" id="top">
      <div class="wrap">
        <div>
          <span class="pill">New: now open to everyone</span>
          <h1>A clear promise that says what you do.</h1>
          <p class="lead muted">One or two sentences for the people you serve: what they get, and why it is better than how they do it today.</p>
          <div class="actions">
            <a class="btn btn-primary" href="#contact">Get started</a>
            <a class="btn btn-ghost" href="#how">See how it works</a>
          </div>
          <ul class="ticks">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Free to try</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Set up in minutes</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Friendly support</li>
          </ul>
        </div>

        <div class="showcase" aria-hidden="true">
          <div class="panel main">
            <div class="panel-head"><span>This week</span><span class="muted">+24%</span></div>
            <div class="bar-chart"><span style="height:40%"></span><span style="height:62%"></span><span style="height:48%"></span><span class="on" style="height:86%"></span><span style="height:58%"></span><span style="height:72%"></span><span style="height:66%"></span></div>
            <div class="row" style="margin-top:16px"><span class="avatar"></span><span>New booking from Alex</span><span class="muted" style="margin-left:auto">2m</span></div>
            <div class="row"><span class="avatar alt"></span><span>Invoice paid</span><span class="muted" style="margin-left:auto">1h</span></div>
          </div>
          <div class="panel float">
            <span class="muted">Goal reached</span>
            <div class="big-number">72%</div>
            <div class="meter"><i></i></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt" id="features">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">Features</span>
          <h2>Everything people need, nothing they don't.</h2>
          <p class="muted">Three reasons to choose you. Keep each one short and about the person reading it.</p>
        </div>
        <div class="grid-3">
          <article class="card feature">
            <span class="icon-tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></span>
            <h3>Fast to start</h3>
            <p class="muted">Explain the first win someone gets, and how quickly they get it.</p>
          </article>
          <article class="card feature">
            <span class="icon-tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
            <h3>Safe by default</h3>
            <p class="muted">Say what you do to protect their time, money or data.</p>
          </article>
          <article class="card feature">
            <span class="icon-tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
            <h3>Real people</h3>
            <p class="muted">Show who is behind it and how to reach them when they need help.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="how">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">How it works</span>
          <h2>Three steps from hello to done.</h2>
        </div>
        <ol class="steps">
          <li><h3>Tell us what you need</h3><p class="muted">A short form, no account needed.</p></li>
          <li><h3>We get to work</h3><p class="muted">You see progress as it happens.</p></li>
          <li><h3>Enjoy the result</h3><p class="muted">Ready when we say it will be.</p></li>
        </ol>
      </div>
    </section>

    <section class="section alt" id="contact">
      <div class="wrap contact">
        <div class="section-head">
          <span class="eyebrow">Contact</span>
          <h2>Talk to us.</h2>
          <p class="muted">We reply within one working day. Tell us a little about what you need.</p>
        </div>
        <ContactForm />
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="cta-band">
          <h2>Ready when you are. Start in a few minutes.</h2>
          <a class="btn" href="#contact">Get started</a>
        </div>
      </div>
    </section>

  </div>
</template>
