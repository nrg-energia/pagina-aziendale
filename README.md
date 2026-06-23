# NRG Energia — Sito Web Aziendale

Sito web istituzionale bilingue (italiano/inglese) per **NRG Energia S.r.l.**, azienda specializzata in energie rinnovabili, coperture industriali e civili, bonifica amianto e impianti elettrici, con sede a Imola (BO).

---

## Panoramica del progetto

Il sito è composto da pagine HTML statiche, CSS inline e JavaScript vanilla, senza framework o build tool. È ospitato su **GitHub Pages** e gestisce due versioni linguistiche parallele:

| Lingua | Percorso |
|--------|----------|
| Italiano | `/index.html`, `/portfolio.html`, `/services/*.html` |
| Inglese | `/services/en/*.html` |

### Pagine principali

| Pagina | IT | EN |
|--------|----|----|
| Home | `index.html` | — |
| Portfolio | `portfolio.html` | `services/en/portfolio.html` |
| Energie rinnovabili | `services/energie-rinnovabili.html` | `services/en/renewable-energy.html` |
| Coperture | `services/coperture.html` | `services/en/roofing.html` |
| Bonifica amianto | `services/bonifica-amianto.html` | `services/en/asbestos-removal.html` |
| Impianti elettrici | `services/impianti-elettrici.html` | `services/en/electrical-systems.html` |

---

## Stack tecnologico

| Componente | Tecnologia |
|------------|------------|
| Markup | HTML5 semantico |
| Stile | CSS3 inline (per pagina), variabili CSS custom |
| Interattività | JavaScript vanilla (ES5/ES6, nessun framework) |
| Font | Google Fonts — [Syne](https://fonts.google.com/specimen/Syne) (titoli) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (corpo) |
| Media | [Cloudinary](https://cloudinary.com/) (cloud `dmegrbq5k`) per immagini e video con ottimizzazione automatica (`q_auto`, `f_auto`) |
| Hosting | [GitHub Pages](https://pages.github.com/) — branch `main`, root del repository |
| Contatto/Form | Modal di preventivo con logica JS inline |
| WhatsApp | Widget floating collegato a `wa.me/390542552010` |

---

## Avvio in locale

### Prerequisiti

- Git
- Un browser moderno
- (Facoltativo) Un server locale tipo [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) per VS Code, o `python3`

### Clona il repository

```bash
git clone https://github.com/lindsey-brock/nrg-energia.git
cd nrg-energia
```

### Esegui in locale

Non sono necessari `npm install` né build step. Apri direttamente il file HTML nel browser:

```bash
# Opzione 1 — apri direttamente
open index.html

# Opzione 2 — server locale con Python (consigliato per evitare problemi CORS)
python3 -m http.server 8080
# poi visita http://localhost:8080
```

### Variabili d'ambiente

Non sono presenti variabili d'ambiente. Le uniche dipendenze esterne sono:

| Risorsa | Configurazione |
|---------|---------------|
| Cloudinary | Cloud name `dmegrbq5k` — hardcoded negli URL delle immagini |
| Google Fonts | Caricati via `<link>` nell'`<head>` di ogni pagina |
| WhatsApp | Numero `+39 0542 55201` hardcoded nei link `wa.me` |
| Telefono | `+39 0542 552010` hardcoded nei link `tel:` |

---

## Deployment

Il sito viene pubblicato automaticamente su **GitHub Pages** ad ogni push sul branch `main`.

**URL di produzione:** [https://lindsey-brock.github.io/nrg-energia/](https://lindsey-brock.github.io/nrg-energia/)

### Flusso di deploy

```bash
# 1. Modifica i file HTML/CSS/JS in locale
# 2. Fai commit delle modifiche
git add .
git commit -m "Descrizione della modifica"

# 3. Push su main — il deploy avviene automaticamente entro ~2 minuti
git push origin main
```

### Configurazione GitHub Pages

- **Sorgente:** branch `main`, cartella root `/`
- **Nessun file di configurazione** (`_config.yml`, `package.json`) necessario
- Tempo di propagazione: ~1–2 minuti dopo ogni push

---

## Gestione dei contenuti

Poiché il sito è HTML puro, ogni modifica ai contenuti richiede l'editing diretto dei file `.html`.

### Immagini e video

Tutti i media sono ospitati su **Cloudinary** (cloud `dmegrbq5k`). Per aggiornare un'immagine:

1. Carica il nuovo file sulla dashboard di Cloudinary
2. Copia l'URL pubblico con i parametri di ottimizzazione: `q_auto,f_auto`
3. Sostituisci l'URL nel file HTML corrispondente

### Aggiornare contenuti testuali

- **Titoli e testi hero:** modificare direttamente il tag `<h1>` / `<p>` nelle sezioni `.hero` di ogni pagina
- **Sezione "Come lavoriamo":** modificare i tag `.processo-title` e `.processo-desc` nelle pagine di servizio
- **Portfolio / Progetti:** aggiungere o modificare i `<div class="carousel-slide">` con gli attributi `data-img`, `data-desc`, `data-badge`
- **Footer:** aggiornare i dati aziendali nella sezione `<footer>` di ogni pagina

### Versione bilingue

Ogni pagina IT ha una controparte EN nella cartella `services/en/`. Le modifiche ai contenuti vanno replicate manualmente in entrambe le versioni linguistiche.

### Breakpoint responsive

Il sito è ottimizzato per:
- **Desktop:** ≥ 769px
- **Mobile:** ≤ 768px (con media query dedicate per hero, carousel, navigazione)

---

## Struttura del repository

```
nrg-energia/
├── index.html                    # Home page (IT)
├── portfolio.html                # Portfolio completo (IT)
├── services/
│   ├── energie-rinnovabili.html  # Energie rinnovabili (IT)
│   ├── coperture.html            # Coperture (IT)
│   ├── bonifica-amianto.html     # Bonifica amianto (IT)
│   ├── impianti-elettrici.html   # Impianti elettrici (IT)
│   └── en/
│       ├── renewable-energy.html # Renewable Energy (EN)
│       ├── roofing.html          # Roofing (EN)
│       ├── asbestos-removal.html # Asbestos Removal (EN)
│       ├── electrical-systems.html # Electrical Systems (EN)
│       └── portfolio.html        # Portfolio (EN)
├── cookieconsent-config.js       # Config GDPR cookie consent (bilingue IT/EN)
└── README.md
```

---

## GDPR — Cookie Consent

Il sito implementa il consenso ai cookie tramite **[vanilla-cookieconsent v3.1.0](https://github.com/orestbida/cookieconsent)** (licenza MIT), caricato via CDN su tutte le pagine.

### Funzionamento

| Componente | Dettaglio |
|------------|-----------|
| Libreria | `vanilla-cookieconsent@3.1.0` via jsDelivr CDN |
| Configurazione | `cookieconsent-config.js` nella root del progetto |
| Lingua default | Italiano (`it`), con rilevamento automatico del browser (IT/EN) |
| Categorie | `necessary` (sempre attivo) + `analytics` (opt-in) |

### Categoria analytics — Google Analytics (non ancora attivo)

La categoria analytics è **pre-configurata** per Google Analytics ma non attiva. Quando verrà aggiunto GA:

1. **Aggiungi il tag script GA** con gli attributi che lo bloccano fino al consenso:
   ```html
   <script type="text/plain" data-category="analytics"
           src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
   > L'attributo `type="text/plain"` impedisce l'esecuzione finché l'utente non acconsente. `data-category="analytics"` dice a vanilla-cookieconsent quando attivarlo.

2. **Decommentare i callback** `onAccept` / `onReject` in `cookieconsent-config.js` e inserire il Measurement ID (`G-XXXXXXXXXX`).

3. **Script già presenti sul sito** — nessuno script di terze parti necessita attualmente del trattamento `type="text/plain"`. Google Fonts è esente (font, non tracking). WhatsApp widget è di prima parte funzionale.

---

## Manutentore

**Lindsey Brock Morales**
📧 [lindsey.brock2201@gmail.com](mailto:lindsey.brock2201@gmail.com)
🔗 [github.com/lindsey-brock](https://github.com/lindsey-brock)
