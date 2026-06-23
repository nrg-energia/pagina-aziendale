/**
 * Cookie Consent configuration — NRG Energia
 * Library: vanilla-cookieconsent v3.1.0 (orestbida)
 * https://github.com/orestbida/cookieconsent
 *
 * Language: reads <html lang=""> on page load; on the home page where
 * language is toggled dynamically, patches window.toggleLang() to also
 * update the banner language.
 * Analytics placeholder: ready for Google Analytics (currently not active)
 */

CookieConsent.run({

  // ── Core settings ────────────────────────────────────────────────────────
  cookie: {
    name: 'cc_cookie',
    expiresAfterDays: 365,
    sameSite: 'Lax',
    useLocalStorage: false
  },

  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
      equalWeightButtons: false,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false
    }
  },

  // ── Categories ────────────────────────────────────────────────────────────
  categories: {

    necessary: {
      enabled: true,
      readOnly: true
    },

    analytics: {
      autoClear: {
        cookies: [
          { name: /^_ga/ },
          { name: '_gid' }
        ]
      },
      services: {
        ga: {
          label: 'Google Analytics',

          onAccept: () => {
            // TODO: initialize GA here when added
            // Step 1 — Add your GA script tag with these attributes:
            //   <script type="text/plain" data-category="analytics"
            //           src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
            // Step 2 — Uncomment and fill in your Measurement ID below:
            // window.dataLayer = window.dataLayer || [];
            // function gtag(){dataLayer.push(arguments);}
            // gtag('js', new Date());
            // gtag('config', 'G-XXXXXXXXXX');
            //
            // Or if using gtag consent mode:
            // gtag('consent', 'update', { analytics_storage: 'granted' });
          },

          onReject: () => {
            // TODO: block GA here when added
            // gtag('consent', 'update', { analytics_storage: 'denied' });
          }
        }
      }
    }

  },

  // ── Language ──────────────────────────────────────────────────────────────
  // Reads <html lang=""> at page load — already set correctly on every page.
  // On index.html the toggleLang() function is also patched below to keep
  // the banner in sync when the user switches language dynamically.
  language: {
    default: document.documentElement.lang === 'en' ? 'en' : 'it',

    translations: {

      it: {
        consentModal: {
          title: 'Utilizziamo i cookie',
          description: 'Utilizziamo cookie tecnici necessari al funzionamento del sito e, con il tuo consenso, cookie analitici per migliorare la tua esperienza. Puoi modificare le tue preferenze in qualsiasi momento.',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Solo necessari',
          showPreferencesBtn: 'Gestisci preferenze',
          footer: '<a href="#" onclick="return false;">Privacy Policy</a> · <a href="#" onclick="return false;">Cookie Policy</a>'
        },
        preferencesModal: {
          title: 'Preferenze cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Solo necessari',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          serviceCounterLabel: 'Servizio|Servizi',
          sections: [
            {
              title: 'Utilizzo dei cookie',
              description: 'Utilizziamo i cookie per garantire le funzionalità di base del sito e per migliorare la tua esperienza. Puoi scegliere di accettare o rifiutare ciascuna categoria in qualsiasi momento.'
            },
            {
              title: 'Cookie strettamente necessari <span class="pm__badge">Sempre attivi</span>',
              description: 'Questi cookie sono essenziali per il corretto funzionamento del sito. Senza questi cookie il sito non funzionerebbe correttamente.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Cookie analitici e di performance',
              description: 'Questi cookie raccolgono informazioni su come utilizzi il sito, quali pagine hai visitato e su quali link hai cliccato. Tutti i dati sono anonimizzati.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Ulteriori informazioni',
              description: 'Per qualsiasi domanda relativa alla nostra politica sui cookie, <a class="cc__link" href="mailto:info@nrgenergia.it">contattaci</a>.'
            }
          ]
        }
      },

      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'We use strictly necessary cookies to keep the site running and, with your consent, analytics cookies to improve your experience. You can change your preferences at any time.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Necessary only',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="#" onclick="return false;">Privacy Policy</a> · <a href="#" onclick="return false;">Cookie Policy</a>'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Necessary only',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie usage',
              description: 'We use cookies to ensure the basic functionality of the website and to enhance your online experience. You can choose to accept or reject each category at any time.'
            },
            {
              title: 'Strictly necessary cookies <span class="pm__badge">Always active</span>',
              description: 'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics & performance cookies',
              description: 'These cookies collect information about how you use the website, which pages you have visited and which links you have clicked on. All data is anonymised.',
              linkedCategory: 'analytics'
            },
            {
              title: 'More information',
              description: 'For any questions regarding our cookie policy, <a class="cc__link" href="mailto:info@nrgenergia.it">contact us</a>.'
            }
          ]
        }
      }

    }
  }

});

// ── Sync banner language with the home page's dynamic language toggle ──────
// index.html calls window.toggleLang() to swap IT/EN content without
// navigating to a new page. We patch it here to also update the banner.
(function() {
  function patchToggleLang() {
    if (typeof window.toggleLang !== 'function') return;
    var _orig = window.toggleLang;
    window.toggleLang = function() {
      _orig.apply(this, arguments);
      // After the original runs, documentElement.lang is already updated
      var newLang = document.documentElement.lang === 'en' ? 'en' : 'it';
      CookieConsent.setLanguage(newLang);
    };
  }
  // toggleLang is defined after this script runs, so wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchToggleLang);
  } else {
    // Small delay to ensure toggleLang is defined
    setTimeout(patchToggleLang, 0);
  }
})();
