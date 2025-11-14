export const PRIVACY_SECTIONS = [
  {
    id: "general",
    title: "Informacje ogólne",
    content: (
      <>
        Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych
        osobowych na stronie portfolio prowadzonej przez:{" "}
        <strong>Rafał Bobko</strong>. E-mail kontaktowy:{" "}
        <strong>rafbobbob@gmail.com</strong>.
        <br />
        <br />
        Korzystając z formularza kontaktowego, przekazujesz mi swoje dane
        dobrowolnie w celu umożliwienia kontaktu zwrotnego. Nie przetwarzam
        danych w żadnym innym celu.
      </>
    ),
  },
  {
    id: "collected-data",
    title: "Jakie dane zbieram",
    content: (
      <>
        W formularzu kontaktowym przetwarzane są następujące dane:
        <br />
        • Imię (pole wymagane)
        <br />
        • Adres e-mail (pole wymagane - używany wyłącznie do odpowiedzi)
        <br />
        • Treść wiadomości
        <br />
        • Dane techniczne po stronie serwera: adres IP (wyłącznie na potrzeby
        zabezpieczeń takich jak rate limiting)
        <br />
        <br />
        Nie zbieram: danych wrażliwych, danych marketingowych, danych
        analitycznych (brak Google Analytics, Hotjar, itp.).
      </>
    ),
  },
  {
    id: "processing",
    title: "W jaki sposób dane są przetwarzane",
    content: (
      <>
        Twoje dane:
        <br />• Trafiają do mojego backendu (endpoint <code>/api/contact</code>
        ).
        <br />
        • Przechodzą walidację oraz mechanizmy antyspamowe (honeypot + rate
        limiting).
        <br />• Są przekazywane do zewnętrznego dostawcy e-mail — Resend, w celu
        wysłania wiadomości do mnie (<strong>rafbobbob@gmail.com</strong>).
        <br />
        <br />
        Nie są przechowywane w żadnej bazie danych. Nie wykorzystuję ich do
        żadnych celów marketingowych.
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Podstawa prawna przetwarzania",
    content: (
      <>
        Podstawą prawną przetwarzania danych jest:
        <br />
        <br />
        Art. 6 ust. 1 lit. b RODO - przetwarzanie niezbędne do udzielenia
        odpowiedzi na wiadomość wysłaną przez formularz kontaktowy.
      </>
    ),
  },
  {
    id: "sharing",
    title: "Komu udostępniam dane",
    content: (
      <>
        Dane są przekazywane wyłącznie:
        <br />
        <br />
        <strong>Resend (resend.com)</strong> - w celu realizacji wysyłki
        wiadomości e-mail. Resend działa jako podmiot przetwarzający (Data
        Processor).
        <br />
        <br />
        Poza tym nie przekazuję danych żadnym innym podmiotom.
      </>
    ),
  },
  {
    id: "retention",
    title: "Jak długo przechowuję dane",
    content: (
      <>
        Dane nie są przechowywane w bazie danych.
        <br />
        <br />
        Są one jedynie przekazywane e-mailem i przetwarzane w celu odpowiedzi. W
        skrzynce odbiorczej mogą być przechowywane przez czas niezbędny do
        komunikacji.
        <br />
        <br />
        Nie prowadzę profilowania ani automatycznego podejmowania decyzji.
      </>
    ),
  },
  {
    id: "rights",
    title: "Twoje prawa",
    content: (
      <>
        Masz prawo do:
        <br />
        • dostępu do swoich danych,
        <br />
        • poprawienia danych,
        <br />
        • usunięcia danych („prawo do bycia zapomnianym”),
        <br />
        • ograniczenia przetwarzania,
        <br />
        • wniesienia sprzeciwu,
        <br />
        • przenoszenia danych.
        <br />
        <br />
        Aby skorzystać z tych praw, napisz na adres:{" "}
        <strong>rafbobbob@gmail.com</strong>.
      </>
    ),
  },
  {
    id: "voluntary",
    title: "Dobrowolność podania danych",
    content: (
      <>
        Podanie danych w formularzu jest dobrowolne, ale niezbędne do kontaktu
        zwrotnego.
      </>
    ),
  },
  {
    id: "security",
    title: "Zabezpieczenia",
    content: (
      <>
        Stosuję podstawowe środki ochrony:
        <br />
        • szyfrowanie HTTPS,
        <br />
        • honeypot chroniący przed botami,
        <br />
        • rate limiting ograniczający nadużycia,
        <br />
        • walidację danych po stronie serwera (Zod),
        <br />• przetwarzanie danych wyłącznie w celu odpowiedzi na wiadomość.
      </>
    ),
  },
  {
    id: "contact",
    title: "Kontakt",
    content: (
      <>
        W sprawach dotyczących danych osobowych możesz kontaktować się:
        <br />
        <strong>rafbobbob@gmail.com</strong>
      </>
    ),
  },
];
