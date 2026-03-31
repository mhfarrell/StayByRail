import PageMeta from "../components/PageMeta";

function TrainTimesPage() {
  return (
    <div className="page-content">
      <PageMeta
        title="Train Times & Transit Resources — StayByRail"
        description="Journey planners, rail operators, and practical transit tips for Japan, the UK, France, Germany, Spain, and Thailand. Plan your train travel with confidence."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>
        Train Times & Transit Resources
      </h2>
      <p className="page-intro" style={{ textAlign: "center" }}>
        Every country StayByRail covers has its own rail operators, ticketing
        systems, and journey planners. Below you will find the key resources for
        each country — official websites, planning tools, and practical tips to
        help you navigate local transit like a regular.
      </p>

      <div className="about-sections">
        <div className="about-block">
          <h3 className="about-block-heading">Japan</h3>
          <p className="about-block-text">
            Japan's rail network is operated by the{" "}
            <strong>JR Group</strong> (six regional companies) along with dozens
            of private railways and municipal metro systems. For English-language
            journey planning, use{" "}
            <a
              href="https://www.jreast.co.jp/e/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              JR East
            </a>{" "}
            for the Tokyo area and Shinkansen routes, or{" "}
            <a
              href="https://www.jorudan.co.jp/english/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Jorudan
            </a>{" "}
            for nationwide route searches including private lines.
          </p>
          <p className="about-block-text">
            Pick up an <strong>IC card</strong> (Suica in Tokyo, ICOCA in
            Osaka/Kyoto) for seamless tap-and-go travel on trains, buses, and
            even convenience stores. If you are covering long distances, the{" "}
            <strong>Japan Rail Pass</strong> offers unlimited travel on most JR
            lines including the Shinkansen — just remember it does not cover
            Nozomi or Mizuho bullet train services. Purchase the pass before
            arriving in Japan.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">United Kingdom</h3>
          <p className="about-block-text">
            Use{" "}
            <a
              href="https://www.nationalrail.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              National Rail
            </a>{" "}
            for journey planning and live departure boards across the entire UK
            mainline network. In London,{" "}
            <a
              href="https://tfl.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Transport for London (TfL)
            </a>{" "}
            covers the Underground, Overground, Elizabeth line, DLR, and buses.{" "}
            <a
              href="https://www.thetrainline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Trainline
            </a>{" "}
            is a popular third-party app for booking advance tickets at
            discounted fares.
          </p>
          <p className="about-block-text">
            In London, use an <strong>Oyster card</strong> or simply tap your{" "}
            <strong>contactless bank card</strong> — both apply daily and weekly
            fare caps automatically. Book long-distance tickets in advance for
            the best prices; walk-up fares can be several times higher.
            Off-peak and super off-peak tickets offer significant savings if
            your schedule is flexible.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">France</h3>
          <p className="about-block-text">
            France's national rail operator is <strong>SNCF</strong>. Use{" "}
            <a
              href="https://www.sncf-connect.com/en-en/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              SNCF Connect
            </a>{" "}
            to search timetables and book TGV high-speed trains, Intercites, and
            regional TER services. In Paris, the Metro, RER, buses, and trams
            are managed by{" "}
            <a
              href="https://www.ratp.fr/en"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              RATP
            </a>
            , which also has a handy journey planner.
          </p>
          <p className="about-block-text">
            For getting around Paris, pick up a{" "}
            <strong>Navigo Easy</strong> card or the weekly{" "}
            <strong>Navigo Decouverte</strong> pass, which covers unlimited
            travel on Metro, RER, buses, and trams within central Paris. TGV
            tickets are cheapest when booked well in advance — prices rise
            steeply as departure dates approach, especially on popular routes
            like Paris-Lyon and Paris-Marseille.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Germany</h3>
          <p className="about-block-text">
            <a
              href="https://www.bahn.de/en"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Deutsche Bahn (DB)
            </a>{" "}
            operates the national rail network including ICE high-speed trains,
            IC/EC intercity services, and regional trains. The DB Navigator app
            is essential for journey planning and mobile tickets. In Berlin,{" "}
            <a
              href="https://www.bvg.de/en"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              BVG
            </a>{" "}
            runs the U-Bahn, trams, and buses, while Munich's transit is
            managed by{" "}
            <a
              href="https://www.mvv-muenchen.de/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              MVV
            </a>
            .
          </p>
          <p className="about-block-text">
            The <strong>Deutschland-Ticket</strong> (49-euro ticket) is
            outstanding value — it provides unlimited travel on all regional and
            local public transport across the entire country for one calendar
            month. It does not cover ICE or IC long-distance trains, but
            regional services can get you almost anywhere with a bit of
            patience. For ICE trains, book Sparpreis (saver) fares early for
            the best deals.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Spain</h3>
          <p className="about-block-text">
            Spain's national rail operator is <strong>Renfe</strong>. Use{" "}
            <a
              href="https://www.renfe.com/es/en"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Renfe
            </a>{" "}
            to book AVE high-speed trains, regional Media Distancia services,
            and Cercanias commuter trains. In Barcelona,{" "}
            <a
              href="https://www.tmb.cat/en/home"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              TMB
            </a>{" "}
            operates the Metro and city buses. Madrid's Metro is one of
            Europe's largest — use the{" "}
            <a
              href="https://www.metromadrid.es/en"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Metro Madrid
            </a>{" "}
            website or app for maps and journey planning.
          </p>
          <p className="about-block-text">
            AVE tickets between major cities (Madrid-Barcelona, Madrid-Seville)
            are significantly cheaper when booked in advance — Renfe releases
            tickets up to 120 days ahead. In Barcelona, the{" "}
            <strong>T-Casual</strong> card gives you 10 trips on Metro, bus,
            tram, and Cercanias within zone 1. Madrid offers a similar{" "}
            <strong>Multi card</strong> with 10-trip bundles.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Thailand</h3>
          <p className="about-block-text">
            Bangkok has three urban rail systems. The{" "}
            <a
              href="https://www.bts.co.th/eng/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              BTS Skytrain
            </a>{" "}
            covers central Bangkok above ground, the <strong>MRT</strong> runs
            underground with extensions reaching the northern and eastern
            suburbs, and the <strong>Airport Rail Link</strong> connects
            Suvarnabhumi Airport to the city centre. For long-distance rail,
            the{" "}
            <a
              href="https://www.railway.co.th/en"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              State Railway of Thailand (SRT)
            </a>{" "}
            operates routes to Chiang Mai, the south, and the northeast.
          </p>
          <p className="about-block-text">
            BTS and MRT use separate ticketing systems — a stored-value{" "}
            <strong>Rabbit card</strong> works on the BTS, while the MRT
            accepts its own tokens or stored-value cards. For last-mile
            transport, <strong>Grab</strong> (Southeast Asia's ride-hailing
            app) is reliable, affordable, and widely used across all Thai
            cities. Long-distance SRT sleeper trains are a budget-friendly way
            to travel overnight between Bangkok and Chiang Mai — book at least
            a few days ahead for lower berths.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrainTimesPage;
