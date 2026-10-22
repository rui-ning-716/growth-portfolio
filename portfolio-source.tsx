function Arrow() { return <span aria-hidden="true">↗</span>; }

function Metric({ value, label, note }: { value: string; label: string; note: string }) {
  return <article><strong>{value}</strong><span>{label}</span>{note && <small>{note}</small>}</article>;
}

function EvidenceCrop({src,box,width,height,label}:{src:string;box:string;width:number;height:number;label:string}) {
  const [x,y,w,h]=box.split(" ").map(Number);
  const clipId=`crop-${src.replace(/[^a-z0-9]/gi, "")}-${box.replace(/ /g, "-")}`;
  return <svg viewBox={box} role="img" aria-label={label} className="evidenceCrop"><defs><clipPath id={clipId}><rect x={x} y={y} width={w} height={h}/></clipPath></defs><image href={src} width={width} height={height} clipPath={`url(#${clipId})`}/></svg>;
}

export default function Home() {
  return <main>
    <nav className="nav" aria-label="Portfolio navigation">
      <a className="brand" href="#top" aria-label="Back to top"><span className="brandMark">R</span><span>Rui Ning Zhu</span></a>
      <div className="navLinks"><a href="#paid-growth">Google Ads</a><a href="#reddit-marketing">Reddit</a><a href="#b2b-growth">B2B growth</a><a href="#creative-work">Creative work</a></div>
      <a className="navCta" href="/Rui-Ning-Zhu-Growth-Resume.pdf">Resume ↗</a>
    </nav>

    <div id="top" className="pageShell">
      <header className="hero">
        <section className="heroCopy">
          <div className="eyebrow"><span className="pulse" />Bay Area · Growth & Product Marketing</div>
          <h1>I turn user insight<br/>into content<br/><em>and growth.</em></h1>
          <p className="heroSub">I connect product understanding, hands-on content creation and data-informed growth. I find the angle, make and distribute the content, then use audience response and product behavior to guide the next iteration.</p>
          <div className="heroActions"><a className="primaryButton" href="#paid-growth">Explore selected work</a><a className="textButton" href="/Rui-Ning-Zhu-Selected-Growth-Work.pdf">Download portfolio <Arrow /></a></div>
          <div className="scopeLine" aria-label="Growth capabilities"><span>Product × marketing</span><span>Content & distribution</span><span>Data & experimentation</span><span>AI workflows</span></div>
        </section>

        <aside className="workIndex" aria-label="Selected work at a glance">
          <div className="indexTop"><span>SELECTED WORK</span><span>2026</span></div>
          <p className="indexIntro">Creative execution.<br/>Product and data judgment.</p>
          <a href="#paid-growth"><span className="indexNumber">01</span><div><small>MEASURE + IMPROVE</small><strong>Know what the response means.</strong><p>Audience analysis · Google Ads · revenue data</p></div><span className="indexArrow">↗</span></a>
          <a href="#reddit-marketing"><span className="indexNumber">02</span><div><small>BUILD + OWN</small><strong>Turn the work into a system.</strong><p>AI workflows · product positioning · iteration</p></div><span className="indexArrow">↗</span></a>
          <a href="#creative-work"><span className="indexNumber">03</span><div><small>CREATE + DISTRIBUTE</small><strong>Make something worth watching.</strong><p>TikTok · Bilibili · Reddit · product demos</p></div><span className="indexArrow">↗</span></a>
        </aside>
      </header>

      <section className="impactStrip" aria-label="Selected growth outcomes">
        <Metric value="2.68×" label="reported Google Ads conversions" note="January–September 2026" />
        <Metric value="10K+" label="views on a Reddit post" note="200 upvotes" />
        <Metric value="~300%" label="B2B revenue growth" note="Over three months" />
        <Metric value="30K+" label="plays on a Bilibili music video" note="" />
      </section>

      <section className="roleBand" aria-label="Role and scope">
        <div><span>CORE STRENGTH</span><strong>Connecting product &amp; marketing</strong></div>
        <div><span>ANALYTICAL FOUNDATION</span><strong>UCSD · Probability &amp; Statistics + Business Economics</strong></div>
        <div><span>HANDS-ON EXECUTION</span><strong>Content, distribution, campaigns &amp; workflows</strong></div>
        <div><span>TOOLKIT</span><strong>HubSpot · Apollo · Clay · Google Ads · n8n</strong></div>
      </section>

      <section id="paid-growth" className="caseSection paidSection">
        <div className="caseHeader"><div><p className="kicker">GROWTH EXECUTION · PAID ACQUISITION</p><h2>Run the campaigns.<br/>Understand the results.</h2></div><p>I managed Google Ads across markets, refined keywords and creative, and built reporting that connects campaign performance with transactions and operating context.</p></div>
        <div className="caseContext"><span>GOOGLE ADS · JANUARY–SEPTEMBER 2026</span><span>CAMPAIGN MANAGEMENT · ANALYSIS · AUTOMATION</span></div>
        <div className="paidHighlights"><div><strong>2.68×</strong><span>reported conversions</span></div><div><strong>3.20×</strong><span>impressions</span></div><div><strong>2.42×</strong><span>interactions</span></div></div>
        <figure className="adsFeature"><a href="/evidence/google-ads-growth-summary.png" target="_blank" rel="noreferrer" aria-label="Open Google Ads growth summary at full resolution"><img src="/evidence/google-ads-growth-summary.png" alt="Google Ads January to September 2026 portfolio summary: conversions 234.56 to 627.76, impressions 26,767 to 85,662, interactions 3,276 to 7,936" loading="lazy"/></a><figcaption><a href="/evidence/google-ads-growth-summary.png" target="_blank" rel="noreferrer">View full size ↗</a></figcaption></figure>
        <p className="comparisonNote">Displayed totals cover unequal periods. Platform-reported conversions.</p>
        <div className="ownershipGrid">
          <article><span>01 · ACQUISITION</span><h3>Operate the campaigns</h3><p>Manage paid acquisition across markets, refine keywords, test creative and review performance to inform campaign decisions.</p></article>
          <article><span>02 · MEASUREMENT</span><h3>Connect ads to the business</h3><p>Cross-check Google Ads, GA4 and WooCommerce. Connect spend with actual transactions, refunds and local course availability.</p></article>
          <article><span>03 · SYSTEMS</span><h3>Make the workflow repeatable</h3><p>Build monitoring, AI-assisted diagnostics and execution logs, with human review for campaign actions.</p></article>
        </div>
        <details className="caseDetails"><summary>View source screenshots</summary><div className="detailsBody"><p>January and September snapshots from the same Ads view.</p><div className="sourcePair"><a href="/evidence/google-ads-january-chart.svg" target="_blank" rel="noreferrer"><img src="/evidence/google-ads-january-chart.svg" alt="Original Google Ads screenshot with January values and report totals" loading="lazy"/><span>January source ↗</span></a><a href="/evidence/google-ads-september-chart.svg" target="_blank" rel="noreferrer"><img src="/evidence/google-ads-september-chart.svg" alt="Original Google Ads screenshot with September values and report totals" loading="lazy"/><span>September source ↗</span></a></div></div></details>
        <details className="caseDetails"><summary>Inside the Ads workflow</summary><div className="detailsBody"><p>My work notes document a live campaign-pause test, followed by performance analysis, approval handling and execution logs. AI-assisted analysis, rule-based actions and human decisions each have a defined role.</p><p>My wider campaign-management scope included approximately $800K in annual media budget across Search and YouTube. That scope is separate from the selected Ads report above.</p></div></details>
      </section>

      <section id="reddit-marketing" className="caseSection redditSection">
        <div className="redditLayout">
          <div className="redditCopy">
            <p className="kicker">AUTOMATION + PRODUCT MARKETING</p><h2>Reddit Lead Finder</h2><h3>Find potential customers automatically on Reddit.</h3>
            <p>I turned my own acquisition workflow into an open-source, self-hosted product. It discovers relevant conversations, ranks buying intent and prepares replies for human review, reducing repetitive research so I can spend more time on judgment, messaging and interaction. I also created its positioning, landing page and demo.</p>
            <div className="redditFlow" aria-label="Reddit marketing workflow"><span>Product URL</span><i>→</i><span>Relevant conversations</span><i>→</i><span>Buying-intent score</span><i>→</i><span>Human-reviewed reply</span></div>
            <div className="redditMetrics"><div><strong>~80%</strong><span>estimated reduction in manual prospecting time</span></div><div><strong>Open source</strong><span>Public repository; self-hosted deployment</span></div></div>
            <div className="workLinks"><a href="https://ai-powered-reddit-lead-finder.lovable.app/" target="_blank" rel="noreferrer">View product <Arrow /></a><a href="https://github.com/rui-ning-716/ai-powered-reddit-lead-finder" target="_blank" rel="noreferrer">View GitHub <Arrow /></a></div>
          </div>
          <figure className="redditProductImage"><img src="/reddit-marketing-product.png" alt="AI-powered Reddit marketing product homepage showing an automated customer discovery and reply workflow" /></figure>
        </div>
        <div id="community-growth" className="communityEvidence">
          <div className="evidenceHeading"><div><p className="kicker">COMMUNITY DISTRIBUTION · SELECTED REDDIT WORK</p><h3>Create content people engage with.</h3></div><p>My Reddit content has reached 10K+ views and 200 upvotes on a single post. Selected analytics below show additional post-level reach, a predominantly U.S. audience and community response.</p></div>
          <div className="communityHeadline"><div><strong>10K+</strong><span>views on a single Reddit post</span></div><p><b>200 upvotes</b> on a single post.<br/>Content creation, distribution and community response.</p></div>
          <div className="communityCards">
            <article><span className="evidenceLabel">REACH SNAPSHOT 01</span><strong>7.9K<span>views</span></strong><p><b>98.6% U.S.</b> audience by views</p><a href="/evidence/reddit-post-01.png" target="_blank" rel="noreferrer"><img src="/evidence/reddit-post-01.png" alt="Reddit post analytics showing 7.9K views and 98.6 percent United States audience" loading="lazy"/><span>View original analytics ↗</span></a></article>
            <article><span className="evidenceLabel">REACH SNAPSHOT 02</span><strong>6K<span>views</span></strong><p><b>98.7% U.S.</b> audience by views</p><a href="/evidence/reddit-post-02.png" target="_blank" rel="noreferrer"><img src="/evidence/reddit-post-02.png" alt="Reddit post analytics showing 6K views and 98.7 percent United States audience" loading="lazy"/><span>View original analytics ↗</span></a></article>
            <article><span className="evidenceLabel">ENGAGEMENT SNAPSHOT</span><strong>176<span>upvotes</span></strong><p><b>5.3K views</b> · 100% upvote ratio</p><a href="/evidence/reddit-post-03.png" target="_blank" rel="noreferrer"><img src="/evidence/reddit-post-03.png" alt="Reddit analytics showing 5.3K views, 176 upvotes and a 100 percent upvote ratio" loading="lazy"/><span>View original analytics ↗</span></a></article>
          </div>
          <div className="evidenceTakeaway"><b>How the work connects</b><p>I can build an acquisition tool, explain its value and work directly in the distribution channel. That combination connects product marketing with practical growth execution.</p></div>
          <p className="smallNote">Separate post snapshots; peak results reported above.</p>
        </div>        <div id="content-demo" className="demoLayout"><div><p className="kicker">CONTENT SAMPLE · PRODUCT WALKTHROUGH</p><h3>Turn a product workflow into a clear demo.</h3><p>Product walkthrough of an earlier version. Current setup is in the repository.</p><p><b>My contribution:</b> concept, workflow design, positioning, landing-page messaging and demo production with AI tools.</p></div><div><video controls preload="none" poster="https://reddit-lead-finder.rui-ning.chatgpt.site/media/dashboard-v05.webp" aria-label="Reddit Lead Finder product demo"><source src="https://reddit-lead-finder.rui-ning.chatgpt.site/media/reddit-lead-finder-v05-demo.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><a className="textButton" href="https://reddit-lead-finder.rui-ning.chatgpt.site/media/reddit-lead-finder-v05-demo.mp4" target="_blank" rel="noreferrer">Open video directly <Arrow/></a></div></div>

      </section>

      <section id="b2b-growth" className="caseSection b2bSection">
        <div className="caseHeader"><div><p className="kicker">GROWTH EXECUTION · B2B ACQUISITION</p><h2>Give every good lead a path to revenue.</h2></div><p>I built the path from customer research to prospecting, outreach and booking. My work connected acquisition strategy with the day-to-day follow-up that moves a deal forward.</p></div>
        <div className="caseContext"><span>ROLE: GROWTH OPERATOR</span><span>HUBSPOT · APOLLO · CLAY</span><span>CONTEXT: B2B SERVICES</span></div>
        <div className="pipelineGrid">
          <article><span className="stageNum">01</span><p className="kicker">CUSTOMER DATA → ICP</p><h3>Find the right accounts</h3><p>Use historical HubSpot customers to define an ICP. Prioritize company type, size and geography in Apollo, then validate companies and enrich relevant contacts with Clay.</p><strong>Output: a segmented, qualified prospect list</strong></article>
          <article><span className="stageNum">02</span><p className="kicker">TARGETING → CONVERSATION</p><h3>Make the outreach relevant</h3><p>Connect account research to segmented email outreach, reply handling and follow-up. Give each opportunity enough context for a useful customer conversation.</p><strong>Output: a reason to engage and a clear next action</strong></article>
          <article><span className="stageNum">03</span><p className="kicker">CRM → BOOKING</p><h3>Keep the deal moving</h3><p>Track opportunities and follow-ups in HubSpot. Coordinate quotes, training requirements and booking details, connecting the commercial conversation to delivery.</p><strong>Output: a visible owner and next step</strong></article>
        </div>
        <div className="outcomeBand"><div><span>OBSERVED BUSINESS RESULT</span><strong>~300% B2B revenue growth in three months</strong></div><p>I owned the acquisition workflow and follow-up improvements. This result reflects the wider B2B operation during that period; it is not isolated outbound attribution.</p></div>
        <details className="caseDetails"><summary>See the CRM workflow and handoffs</summary><div className="detailsBody"><p>Workflow reconstruction showing the decisions and handoffs, with customer records omitted.</p><div className="handoffRows"><div><b>Qualified account</b><span>Company fit, relevant contact, source, reason for outreach</span></div><div><b>Active conversation</b><span>Need, timing, participant count, next action, follow-up owner</span></div><div><b>Booking &amp; fulfillment</b><span>Quote status, training requirements, payment status, delivery handoff</span></div></div><p><b>Transferable skills:</b> ICP definition, data quality, segment-specific messaging, follow-up discipline and revenue visibility. A developer product needs its own account signals and activation definition.</p></div></details>
        <details className="caseDetails"><summary>Additional analysis &amp; search work</summary><div className="detailsBody"><p><b>Six-market analysis:</b> analyzed regional and cohort performance in R; researched personas, competitors and user feedback for an AI productivity product.</p><p><b>SEO / GEO:</b> built search-intent and comparison pages, submitted pages to Google Search Console and structured product content around user questions.</p></div></details>
      </section>

      <section id="revenue" className="caseSection revenueSection">
        <div className="caseHeader"><div><p className="kicker">SUPPORTING WORK · REVENUE INTELLIGENCE</p><h2>Know what the spend<br/>is actually producing.</h2></div><p>I cross-checked Google Ads, GA4 and WooCommerce, improved conversion-value tracking from fixed values to actual transactions, and built market-level reporting for growth decisions.</p></div>
        <div className="revenueLayout">
          <div className="revenueCopy">
            <div className="valueList">
              <article><span>01</span><div><strong>See true profitability</strong><p>Compare acquisition cost with completed orders, refunds and revenue.</p></div></article>
              <article><span>02</span><div><strong>Prioritize markets</strong><p>Identify where to scale, investigate, pause, or protect supply.</p></div></article>
              <article><span>03</span><div><strong>Shorten the feedback loop</strong><p>Cross-check Google Ads, GA4 and WooCommerce before acting on performance changes.</p></div></article>
            </div>
            <div className="dashboardTags"><span>Google Ads</span><span>WooCommerce</span><span>Attribution</span><span>Refunds</span><span>Net ROAS</span></div>
          </div>

          <div className="dashboardMock" role="img" aria-label="Illustrative market-level ROAS dashboard with fictional English-language data">
            <div className="dashboardTop"><div><small>GROWTH INTELLIGENCE</small><strong>Market-level ROAS Dashboard</strong></div><span>ILLUSTRATIVE DEMO DATA</span></div>
            <div className="dashboardMetrics">
              <div><small>AD SPEND</small><strong>$32.8K</strong><em>+6.2% vs. prior period</em></div>
              <div><small>PAID NET REVENUE</small><strong>$81.6K</strong><em>+14.8% vs. prior period</em></div>
              <div><small>NET ROAS</small><strong>2.49×</strong><em className="good">+0.18 improvement</em></div>
              <div><small>PAID ORDERS</small><strong>1,032</strong><em>3.1% refund rate</em></div>
            </div>
            <div className="dashboardBody">
              <div className="chartCard"><div className="chartTitle"><strong>Net ROAS by market</strong><span>Last 30 days</span></div><div className="barChart" aria-hidden="true"><div><i style={{ height: "54%" }} /><span>Market A</span></div><div><i style={{ height: "72%" }} /><span>Market B</span></div><div><i style={{ height: "42%" }} /><span>Market C</span></div><div><i style={{ height: "88%" }} /><span>Market D</span></div><div><i style={{ height: "65%" }} /><span>Market E</span></div><div><i style={{ height: "79%" }} /><span>Market F</span></div></div></div>
              <div className="actionCard"><div className="chartTitle"><strong>Priority actions</strong><span>AI-assisted summary</span></div><ul><li><b>SCALE</b><span>Market D has strong ROAS and available capacity.</span></li><li><b>REVIEW</b><span>Market C spend rose while order value declined.</span></li><li><b>PROTECT</b><span>Pause two campaigns with no near-term supply.</span></li></ul></div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="compactRelated"><details className="caseDetails"><summary>Related work: pricing research and conversion improvement</summary><div className="detailsBody"><p>I compared orders across price periods and acquisition sources in three markets. The pattern suggested referral traffic was more price-sensitive than paid-search traffic, informing a targeted coupon proposal.</p><p>Microsoft Clarity recordings also helped identify loading friction and repeated clicks on unclear interface controls, shaping concrete UX recommendations.</p></div></details></section>

      <section id="creative-work" className="caseSection creativeSection restoredCreative">
        <div className="caseHeader"><div><p className="kicker">CREATIVE WORK · PERSONAL PROJECTS</p><h2>I make the content,<br/>then pay attention<br/>to the response.</h2></div><p>My work spans music video editing, travel content, nonprofit video and product walkthroughs. These personal projects show hands-on creation and distribution alongside my professional growth work.</p></div>
        <div className="creatorGrid">
          <article className="creatorCase"><div className="creatorCopy"><span className="creatorPlatform">BILIBILI · MUSIC VIDEO EDIT</span><h3>30K+ <small>plays</small></h3><p>Music video editing and publishing.</p></div><figure><img className="originalCreatorEvidence" src="/evidence/bilibili-music-video.jpg" alt="Original Bilibili music video screenshot" loading="lazy"/></figure></article>
          <article className="creatorCase"><div className="creatorCopy"><span className="creatorPlatform">REDNOTE · AI COURSE REVIEW</span><h3>10K+ <small>views</small></h3><p>An introductory AI course review published on my AI and growth account.</p></div><figure><img className="originalCreatorEvidence" src="/evidence/rednote-ai-course.jpg" alt="Latest Rednote account screenshot, shown in full" loading="lazy"/></figure></article>
          <article className="creatorCase"><div className="creatorCopy"><span className="creatorPlatform">TIKTOK · TRAVEL VIDEO</span><h3>200+ <small>likes</small></h3><p>A San Diego beach video framed around a scenic spot just minutes from campus.</p></div><figure><EvidenceCrop src="/evidence/tiktok-beach-video.jpg" box="0 480 941 1240" width={941} height={2048} label="TikTok beach video supporting 200+ likes"/></figure></article>
        </div>
<div className="creativeFormats"><div><span>MORE FORMATS I HAVE CREATED</span><strong>Nonprofit video · WeChat Channels · Product demos</strong></div><p>Different contexts, the same task: decide what matters, make it understandable and give the audience a reason to watch.</p><a href="#content-demo">Watch a product demo ↗</a></div>
      </section>

      <section id="contact" className="contact"><div><span>PRODUCT MARKETING · CONTENT & GROWTH · AI WORKFLOWS</span><h2>Let’s make product value<br/>worth paying attention to.</h2></div><div className="contactLinks"><a href="https://www.linkedin.com/in/rui-ning-zhu-004457261/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a><a className="secondaryContact" href="/Rui-Ning-Zhu-Growth-Resume.pdf">Download resume <Arrow /></a><a className="secondaryContact" href="/Rui-Ning-Zhu-Selected-Growth-Work.pdf">Download selected work <Arrow /></a></div></section>

      <footer><span>Rui Ning Zhu · Growth &amp; GTM</span></footer>
    </div>
  </main>;
}
