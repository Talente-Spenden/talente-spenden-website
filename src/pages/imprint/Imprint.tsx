export const Imprint: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen px-6 pt-[20vh] bg-black text-white">
        <h1 className="text-3xl font-bold">Impressum</h1>
        <p>
          Talente Spenden e.V.
          <br />
          Arcisstra&szlig;e 21
          <br />
          Technische Universit&auml;t M&uuml;nchen - Hochschulreferat
          Fundraising (HR5)
          <br />
          80333 M&uuml;nchen
        </p>
        <p>
          Vereinsregister: VR 209989
          <br />
          Registergericht: Amtsgericht M&uuml;nchen
        </p>
        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Jonas Itt
          <br />
          Max Huppertz
          <br />
          Melis G&uuml;ler
          <br />
          Jonas S&uuml;&szlig;
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: +491728324215
          <br />
          E-Mail: talente-spenden@tum.de
        </p>
        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          Quelle:{" "}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum- generator.html
          </a>
        </p>
      </div>{" "}
      <div className="w-full h-[2px] bg-blue-mid-light" />
    </div>
  );
};
