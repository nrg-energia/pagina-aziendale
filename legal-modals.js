/**
 * Legal modals — NRG Energia
 * Shared, centered, scrollable modals for Privacy Policy, Cookie Policy and
 * Politica per la Qualità / Quality Policy. Included on every page alongside
 * cookieconsent-config.js so the cookie banner footer links and the site
 * footer links can both open the same modal.
 *
 * Language: reads window.LANG when present (pages with a dynamic IT/EN
 * toggle, e.g. index.html / coming-soon.html) and falls back to
 * <html lang="">. Re-read on every open so it always matches the page's
 * current language.
 */

var LEGAL_CONTENT = {
  it: {
    privacy: {
      title: 'Privacy Policy',
      body: `
        <p>Ultimo aggiornamento: giugno 2026.</p>
        <h4>1. Titolare del trattamento</h4>
        <p>NRG Energia S.r.l., con sede a Imola (BO), è titolare del trattamento dei dati personali raccolti tramite questo sito. Per qualsiasi richiesta relativa alla privacy puoi scrivere a <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>.</p>
        <h4>2. Dati raccolti</h4>
        <p>Quando compili il modulo di contatto o richiedi un preventivo, raccogliamo i dati che inserisci direttamente: nome e cognome, indirizzo email, numero di telefono, il contenuto del messaggio e, se lo alleghi, un file (es. PDF, JPG o PNG). Non raccogliamo dati sensibili tramite il modulo.</p>
        <h4>3. Finalità e base giuridica</h4>
        <p>Utilizziamo questi dati esclusivamente per rispondere alla tua richiesta e, se richiesto, predisporre un preventivo. La base giuridica è l'esecuzione di misure precontrattuali richieste dall'interessato (art. 6.1.b GDPR) e, in assenza di un rapporto contrattuale, il legittimo interesse a rispondere a richieste spontanee.</p>
        <h4>4. Conservazione</h4>
        <p>I dati raccolti tramite il modulo di contatto sono conservati per il tempo necessario a gestire la richiesta e, in caso di rapporto commerciale successivo, per la durata prevista dagli obblighi contabili e fiscali.</p>
        <h4>5. Destinatari e trasferimenti</h4>
        <p>Per l'invio delle email generate dal modulo di contatto utilizziamo il servizio Resend (Resend Inc.), che agisce come responsabile del trattamento. Il servizio può comportare un trasferimento di dati verso paesi extra-UE, garantito da clausole contrattuali standard approvate dalla Commissione Europea.</p>
        <h4>6. Cookie</h4>
        <p>Questo sito utilizza cookie tecnici e, previo consenso, cookie analitici. Per maggiori informazioni consulta la <a href="#" onclick="closeLegalModal(); setTimeout(function(){ openLegalModal('cookie'); }, 50); return false;">Cookie Policy</a>.</p>
        <h4>7. Diritti dell'interessato</h4>
        <p>In qualsiasi momento puoi richiedere accesso, rettifica, cancellazione o limitazione del trattamento dei tuoi dati, opporti al trattamento o richiederne la portabilità, scrivendo a <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>. Hai inoltre diritto di presentare reclamo al Garante per la protezione dei dati personali.</p>
      `
    },
    cookie: {
      title: 'Cookie Policy',
      body: `
        <p>Ultimo aggiornamento: giugno 2026.</p>
        <h4>1. Cosa sono i cookie</h4>
        <p>I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.</p>
        <h4>2. Cookie utilizzati su questo sito</h4>
        <p><strong>Cookie tecnici (sempre attivi)</strong> — necessari al funzionamento del sito, ad esempio per ricordare le preferenze sui cookie già espresse. Non richiedono consenso.</p>
        <p><strong>Cookie analitici (facoltativi)</strong> — ci aiutano a capire come viene utilizzato il sito, in forma anonimizzata, in modo da poterlo migliorare. Vengono attivati solo dopo il tuo consenso esplicito.</p>
        <h4>3. Come gestire le tue preferenze</h4>
        <p>Puoi modificare il consenso in qualsiasi momento aprendo nuovamente il pannello cookie tramite il link "Gestisci preferenze" presente nel banner, oppure <a href="#" onclick="if (window.CookieConsent) { CookieConsent.showPreferences(); } return false;">cliccando qui</a>.</p>
        <h4>4. Cookie di terze parti</h4>
        <p>Se attivi i cookie analitici, alcuni servizi di terze parti (es. Google Analytics) potrebbero impostare propri cookie. Tali servizi sono attivati solo dopo aver ricevuto il tuo consenso.</p>
        <h4>5. Contatti</h4>
        <p>Per qualsiasi domanda relativa alla nostra politica sui cookie scrivi a <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>.</p>
      `
    },
    quality: {
      title: 'Politica per la Qualità',
      body: `
        <p>NRG Energia S.r.l. opera nei settori delle energie rinnovabili, delle coperture industriali e civili, della bonifica dell'amianto e degli impianti elettrici. La qualità del nostro lavoro è un impegno che guida ogni fase delle nostre attività, dal primo contatto con il cliente alla consegna dell'intervento.</p>
        <h4>Le nostre iscrizioni e autorizzazioni</h4>
        <p>Per gli interventi di bonifica amianto e gestione dei rifiuti pericolosi siamo iscritti all'Albo Nazionale Gestori Ambientali nelle categorie:</p>
        <p><strong>Categoria 10</strong> — bonifica di beni contenenti amianto, iscrizione obbligatoria per la mansione.</p>
        <p><strong>Categoria 5</strong> — raccolta e trasporto di rifiuti pericolosi, con autorizzazione ministeriale.</p>
        <p>Tutto il nostro personale operativo è inoltre equipaggiato con dispositivi di protezione individuale di terza categoria (DPI III), il livello più alto previsto per i rischi più gravi.</p>
        <h4>I nostri principi</h4>
        <p><strong>Sicurezza prima di tutto.</strong> Tutti gli interventi, in particolare quelli di bonifica amianto, sono condotti nel rispetto della normativa vigente in materia di sicurezza sul lavoro e tutela ambientale (D.Lgs. 81/08 e normative di settore). Affidarsi a operatori non iscritti all'Albo Gestori Ambientali per la bonifica amianto è illegale e pericoloso: NRG Energia opera in piena conformità di legge.</p>
        <p><strong>Trasparenza con il cliente.</strong> Ogni preventivo è chiaro e dettagliato; comunichiamo tempi, costi e fasi dell'intervento prima di iniziare i lavori, senza sorprese.</p>
        <p><strong>Competenza tecnica.</strong> Selezioniamo materiali e fornitori in base a criteri di affidabilità e durata, e formiamo costantemente il nostro personale sulle tecnologie e normative più recenti del settore energetico ed edilizio.</p>
        <p><strong>Miglioramento continuo.</strong> Raccogliamo il feedback dei clienti dopo ogni intervento e lo utilizziamo per migliorare i nostri processi interni e la qualità del servizio offerto.</p>
        <p><strong>Rispetto dell'ambiente.</strong> Promuoviamo soluzioni a basso impatto ambientale, dal conferimento dei rifiuti in discariche autorizzate alla scelta di tecnologie per le energie rinnovabili.</p>
        <p>Per qualsiasi domanda sulla nostra politica per la qualità puoi scriverci a <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>.</p>
      `
    }
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      body: `
        <p>Last updated: June 2026.</p>
        <h4>1. Data controller</h4>
        <p>NRG Energia S.r.l., based in Imola (BO), Italy, is the data controller for personal data collected through this website. For any privacy-related request you can write to <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>.</p>
        <h4>2. Data we collect</h4>
        <p>When you fill in the contact form or request a quote, we collect the data you enter directly: full name, email address, phone number, the content of your message and, if you attach one, a file (e.g. PDF, JPG or PNG). We do not collect sensitive data through the form.</p>
        <h4>3. Purpose and legal basis</h4>
        <p>We use this data solely to respond to your request and, if requested, to prepare a quote. The legal basis is the performance of pre-contractual steps requested by the data subject (Art. 6.1.b GDPR) and, absent a contractual relationship, our legitimate interest in responding to unsolicited enquiries.</p>
        <h4>4. Retention</h4>
        <p>Data collected through the contact form is kept for as long as needed to handle your request and, should a business relationship follow, for the period required by accounting and tax obligations.</p>
        <h4>5. Recipients and transfers</h4>
        <p>To send the emails generated by the contact form we use Resend (Resend Inc.), acting as a data processor. This may involve a transfer of data outside the EU, safeguarded by Standard Contractual Clauses approved by the European Commission.</p>
        <h4>6. Cookies</h4>
        <p>This site uses strictly necessary cookies and, with your consent, analytics cookies. See our <a href="#" onclick="closeLegalModal(); setTimeout(function(){ openLegalModal('cookie'); }, 50); return false;">Cookie Policy</a> for details.</p>
        <h4>7. Your rights</h4>
        <p>You may request access, rectification, erasure or restriction of processing of your data, object to processing, or request data portability at any time by writing to <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>. You also have the right to lodge a complaint with the competent data protection authority.</p>
      `
    },
    cookie: {
      title: 'Cookie Policy',
      body: `
        <p>Last updated: June 2026.</p>
        <h4>1. What cookies are</h4>
        <p>Cookies are small text files that websites send to your device, where they are stored before being sent back to the same site on your next visit.</p>
        <h4>2. Cookies used on this site</h4>
        <p><strong>Strictly necessary cookies (always active)</strong> — required for the site to function, e.g. to remember the cookie preferences you've already given. These don't require consent.</p>
        <p><strong>Analytics cookies (optional)</strong> — help us understand, in anonymised form, how the site is used so we can improve it. These are only activated after your explicit consent.</p>
        <h4>3. Managing your preferences</h4>
        <p>You can change your consent at any time by reopening the cookie panel via the "Manage preferences" link in the banner, or <a href="#" onclick="if (window.CookieConsent) { CookieConsent.showPreferences(); } return false;">by clicking here</a>.</p>
        <h4>4. Third-party cookies</h4>
        <p>If you enable analytics cookies, some third-party services (e.g. Google Analytics) may set their own cookies. These services are only activated once you've given consent.</p>
        <h4>5. Contact</h4>
        <p>For any question about our cookie policy, write to <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>.</p>
      `
    },
    quality: {
      title: 'Quality Policy',
      body: `
        <p>NRG Energia S.r.l. operates in renewable energy, industrial and residential roofing, asbestos removal, and electrical systems. Quality is a commitment that guides every stage of our work, from the first contact with a client to the completion of the job.</p>
        <h4>Our registrations and authorisations</h4>
        <p>For asbestos removal and hazardous waste management we are registered with the Italian National Register of Environmental Operators (Albo Nazionale Gestori Ambientali) in the following categories:</p>
        <p><strong>Category 10</strong> — removal of asbestos-containing materials, a mandatory registration for this type of work.</p>
        <p><strong>Category 5</strong> — collection and transport of hazardous waste, under ministerial authorisation.</p>
        <p>All our field staff are also equipped with category III personal protective equipment (PPE III), the highest level prescribed for the most serious risks.</p>
        <h4>Our principles</h4>
        <p><strong>Safety first.</strong> All our work, particularly asbestos removal, is carried out in compliance with applicable workplace safety and environmental regulations (Italian Legislative Decree 81/08 and sector-specific rules). Relying on operators not registered with the Albo Gestori Ambientali for asbestos removal is illegal and dangerous: NRG Energia operates in full legal compliance.</p>
        <p><strong>Transparency with clients.</strong> Every quote is clear and detailed; we communicate timelines, costs and the phases of the work before starting, with no surprises.</p>
        <p><strong>Technical expertise.</strong> We select materials and suppliers based on reliability and durability, and continuously train our staff on the latest technologies and regulations in the energy and construction sectors.</p>
        <p><strong>Continuous improvement.</strong> We gather client feedback after every job and use it to improve our internal processes and the quality of the service we provide.</p>
        <p><strong>Respect for the environment.</strong> We promote low-impact solutions, from disposing of waste at authorised facilities to the choice of renewable energy technologies.</p>
        <p>For any question about our quality policy, write to <a href="mailto:info@nrg-energia.it">info@nrg-energia.it</a>.</p>
      `
    }
  }
};

(function() {
  var injected = false;

  function currentLang() {
    if (typeof window.LANG === 'string' && (window.LANG === 'it' || window.LANG === 'en')) {
      return window.LANG;
    }
    return document.documentElement.lang === 'en' ? 'en' : 'it';
  }

  function injectModal() {
    if (injected) return;
    injected = true;

    var style = document.createElement('style');
    style.textContent = [
      '.lm-overlay { display:none; position:fixed; inset:0; z-index:2147483000; background:rgba(10,30,18,0.7); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:20px; }',
      '.lm-overlay.open { display:flex; }',
      '.lm-modal { background:#fff; border-radius:16px; width:100%; max-width:680px; max-height:85vh; display:flex; flex-direction:column; box-shadow:0 24px 64px rgba(0,0,0,0.32); animation:lm-in 0.25s cubic-bezier(0.34,1.56,0.64,1) both; }',
      '@keyframes lm-in { from { opacity:0; transform:translateY(16px) scale(0.98); } to { opacity:1; transform:none; } }',
      '.lm-header { display:flex; align-items:center; justify-content:space-between; padding:24px 32px; border-bottom:1px solid #ece9e3; flex-shrink:0; }',
      '.lm-title { font-family:"Syne",sans-serif; font-size:1.3rem; font-weight:800; color:#1a1a18; margin:0; }',
      '.lm-close { background:none; border:none; font-size:20px; line-height:1; cursor:pointer; color:#888880; width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }',
      '.lm-close:hover { background:#f0f4ee; color:#1a4d2e; }',
      '.lm-body { padding:24px 32px 36px; overflow-y:auto; font-size:14px; line-height:1.7; color:#3a3a36; }',
      '.lm-body h4 { font-family:"Syne",sans-serif; font-size:15px; font-weight:700; color:#1a1a18; margin:20px 0 8px; }',
      '.lm-body h4:first-child { margin-top:0; }',
      '.lm-body p { margin:0 0 12px; }',
      '.lm-body a { color:#1a4d2e; text-decoration:underline; }'
    ].join('\n');
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.className = 'lm-overlay';
    overlay.id = 'legalModalOverlay';
    overlay.innerHTML =
      '<div class="lm-modal" role="dialog" aria-modal="true" aria-labelledby="legalModalTitle">' +
        '<div class="lm-header">' +
          '<h3 class="lm-title" id="legalModalTitle"></h3>' +
          '<button class="lm-close" aria-label="Close" id="legalModalCloseBtn">&times;</button>' +
        '</div>' +
        '<div class="lm-body" id="legalModalBody"></div>' +
      '</div>';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeLegalModal();
    });
    document.getElementById('legalModalCloseBtn').addEventListener('click', closeLegalModal);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeLegalModal();
    });
  }

  window.openLegalModal = function(key) {
    injectModal();
    var lang = currentLang();
    var content = (LEGAL_CONTENT[lang] && LEGAL_CONTENT[lang][key]) || LEGAL_CONTENT.it[key];
    if (!content) return;
    document.getElementById('legalModalTitle').textContent = content.title;
    document.getElementById('legalModalBody').innerHTML = content.body;
    document.getElementById('legalModalBody').scrollTop = 0;
    document.getElementById('legalModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLegalModal = function() {
    var overlay = document.getElementById('legalModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };
})();
