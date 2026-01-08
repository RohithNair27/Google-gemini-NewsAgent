import { getLatestNews } from "../agent.js";
import url from "url";

export async function handleNewsRequests(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  let pathname = parsedUrl.pathname;
  let query = parsedUrl.query;
  let id = query?.id || null;
  switch (pathname) {
    case "/news":
      let body = "";
      console.log(req.method);

      if (req.method === "POST") {
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          console.log("body");
          try {
            body = JSON.parse(body);
            console.log(body?.location);
            console.log(body?.category);
            // let content = await getLatestNews(body?.location, body?.category);
            // if (!content) {
            //   throw new Error("Empty content");
            // }
            res.writeHead(200, {
              "content-type": "application/json",
            });
            res.write(
              JSON.stringify([
                {
                  id: "1",
                  title:
                    "US Intervention in Venezuela Escalates with Maduro's Abduction and Trump's Plans for the Nation",
                  source_name:
                    "Al Jazeera, The Guardian, CBS News, AP News, German Marshall Fund of the United States, KSAT",
                  url: "https://www.aljazeera.com/news/2026/1/6/maduro-abduction-shows-influence-limits-of-us-secretary-of-state-rubio",
                  summary:
                    'The United States has significantly escalated its involvement in Venezuela, marked by the recent abduction of Venezuelan President Nicolás Maduro. This dramatic development has triggered widespread international reactions and intense political debate within the U.S. The Trump administration, following Maduro\'s ouster, is reportedly making preliminary plans to reopen the U.S. embassy in Caracas, signaling a potential shift in diplomatic relations and a more direct role in the country\'s future. Secretary of State Marco Rubio and Defense Secretary Pete Hegseth have briefed congressional leaders on the administration\'s plans for Venezuela, indicating a concerted effort to shape the post-Maduro landscape. President Trump has publicly stated that using the U.S. military is "always an option" for various foreign policy objectives, including potentially in Venezuela, and has suggested that U.S. taxpayers could reimburse oil firms for investments in Venezuelan oil production to rebuild the country\'s neglected infrastructure. This intervention has been met with mixed reactions domestically; while Republicans broadly approved of capturing Maduro, a Quinnipiac poll revealed divisions among Republicans regarding further military action. Democrats, including Senate Democratic Leader Chuck Schumer, have warned against a dangerous approach to foreign policy, fearing that American families would pay the price in "blood and treasure" for regime change efforts. Senator Lindsey Graham, a close Trump ally, asserted that the U.S. is now "in charge" of Venezuela and aims for a transition to a free election, with new leaders doing business with the U.S. However, many Americans, nearly half, oppose the U.S. taking control and choosing a new government, believing the Venezuelan people should decide their own leadership. The situation has drawn parallels to past U.S. interventions, such as the invasion of Panama, raising concerns about the long-term implications and the potential for Venezuela to become a quagmire, potentially leaving more space for other global powers like China and Russia. The Venezuelan opposition, which the U.S. maintained won the 2024 presidential election, has called for a fair trial for Maduro and the release of political prisoners.',
                  suggested_search_query_for_image:
                    "US intervention Venezuela Maduro abduction Trump",
                },
                {
                  id: "2",
                  title:
                    "Trump's Second Term: 'America First' Agenda Drives Sweeping Policy Changes and Executive Actions",
                  source_name:
                    "Fox News, Salve Regina University, POLITICO Pro, Holland & Knight",
                  url: "https://www.foxnews.com/politics/2025-shockers-biggest-moments-rocked-campaign-trail",
                  summary:
                    'President Donald Trump\'s second term, which began on January 20, 2025, has been characterized by a rapid implementation of his "America First" agenda, marked by numerous executive orders and significant policy shifts. Within his first 24 hours, Trump reportedly signed over 200 executive orders, aiming to deliver on promises made during his 2024 campaign, including saving the auto industry, increasing tariffs, tackling illegal immigration, and slashing taxes. His administration has moved quickly to test the boundaries of presidential power through these wide-ranging actions and emergency declarations. Key legislative accomplishments include the "One Big Beautiful Bill Act," a Republican reconciliation law enacted in 2025, which has facilitated initiatives like the Rural Health Transformation Program, awarding $50 billion to all 50 states. Domestically, Trump\'s focus on immigration has led to a significant decrease in border crossings, a point his supporters highlight as a major success. The administration has also emphasized efforts to reduce inflation, with current figures reported at 2.7%. However, these policies have not been without controversy. Critics argue that Trump\'s actions have led to a more "discombobulated" and "disconnected" country, pushing the limits of democracy and potentially leading towards an autocracy. Internationally, Trump\'s approach has been described as making the world a more dangerous place, with major policy shifts on energy and climate, and a dismantling of federal agencies. His administration\'s National Security Strategy, released last month, outlines a multifaceted pressure campaign against Europe, aiming to undermine EU institutions and bolster far-right political parties, with implications for Europe\'s relationship with China. The ongoing debates over these policies are expected to continue shaping the political landscape through 2026, particularly with the looming midterm elections.',
                  suggested_search_query_for_image:
                    "Donald Trump second term America First policies",
                },
                {
                  id: "3",
                  title:
                    "Congress Faces January 30th Deadline Amidst Looming Government Shutdown Threat and Spending Bill Negotiations",
                  source_name: "POLITICO Pro, Holland & Knight",
                  url: "https://www.politico.com/news/2026/01/05/spending-permitting-highway-bill-congress-2026-to-do-list-00133890",
                  summary:
                    "As the U.S. Senate and House of Representatives reconvene for the second session of the 119th Congress, a critical deadline looms: January 30, 2026. Lawmakers are scrambling to finalize and pass fiscal year 2026 spending bills to avert another government shutdown, a scenario both Republican and Democratic leaders are eager to avoid. Negotiations are ongoing between Senate and House appropriations leaders regarding various subcommittee bills. While a five-bill spending package covering Defense, Labor-Health and Human Services-Education, Commerce-Justice-Science, Transportation-Housing and Urban Development, and Interior-Environment failed to reach a unanimous consent agreement in December 2025, an agreement has been announced for consolidated Energy and Water, Interior, and Commerce-Justice-Science appropriations bills. The potential for another continuing resolution (CR) to fund portions of the government beyond the end of January remains significant. The expiration of enhanced advanced premium tax credits (APTCs) on December 31, 2025, adds another layer of complexity to the funding debates, with some advocating for their renewal and extension, even if it risks a shutdown. However, Senate Minority Leader Chuck Schumer has indicated a preference for two separate tracks: full-year government funding through bipartisan, bicameral cooperation, rather than linking it to the APTCs. Passing a bill to fund the government beyond January 30 will require a majority vote in the Republican-controlled House and 60 votes in the Senate, necessitating bipartisan support. Beyond appropriations, Congress also faces a mountain of unfinished business from the previous year, including reviving negotiations around permitting reform for energy and infrastructure projects. These legislative actions and debates over energy issues, particularly rising electricity prices, are expected to have sweeping implications for the November midterm elections.",
                  suggested_search_query_for_image:
                    "US Congress government shutdown deadline 2026",
                },
                {
                  id: "4",
                  title:
                    "Congressional Redistricting Battles Intensify Ahead of Crucial 2026 Midterm Elections",
                  source_name: "Fox News, The Independent",
                  url: "https://www.foxnews.com/politics/2025-shockers-biggest-moments-rocked-campaign-trail",
                  summary:
                    "The political landscape for the upcoming 2026 midterm elections is being significantly shaped by intense battles over congressional redistricting. President Donald Trump has actively pushed for mid-decade congressional redistricting, a rare but not unprecedented move, with the aim of shoring up the GOP's razor-thin House majority and preventing a repeat of the 2018 midterms when Democrats reclaimed control. Trump's strategy involves redrawing congressional district maps in red states to favor Republicans, with Texas identified as a primary target where he aimed to add five Republican-leaning House seats. This push triggered a high-stakes showdown with Democrats, who have vigorously opposed these efforts. For instance, Democratic state lawmakers in Texas broke quorum and fled the state in an attempt to delay the passage of a redistricting bill. While some Republican efforts faced setbacks, such as a Utah district judge rejecting a GOP-drawn map, Trump scored a victory when the Supreme Court greenlighted Texas' new map. The outcome of these redistricting battles is crucial, as they will determine the electoral map for the 2026 midterms, where the party in power traditionally faces headwinds and risks losing seats. Beyond redistricting, the 2026 elections are also seeing early movements in key races. In Alaska, the potential return of popular congresswoman Mary Peltola, who narrowly lost re-election in 2024, could significantly impact the race for Senator Dan Sullivan's seat. Her entry into the Senate race would put the Republican-held seat firmly in play and offer Democrats a major opportunity to gain control of the upper chamber, especially as President Trump's polling has reportedly slipped and Americans express frustration over high prices. Peltola's strength as a candidate is partly attributed to Alaska's unique electoral landscape. These redistricting and early campaign developments underscore the high stakes of the 2026 midterms for both parties.",
                  suggested_search_query_for_image:
                    "US congressional redistricting 2026 midterms",
                },
                {
                  id: "5",
                  title:
                    "Trump Renews Interest in Acquiring Greenland, Sparking International Concern",
                  source_name:
                    "The Guardian, Al Jazeera, German Marshall Fund of the United States",
                  url: "https://www.theguardian.com/us-news/2026/jan/06/trump-greenland-us-military-option",
                  summary:
                    'President Donald Trump has once again brought the idea of the United States acquiring Greenland into the political spotlight, stating that using the U.S. military is "always an option" for such an acquisition. This renewed interest in the autonomous Danish territory has sparked significant international concern and diplomatic tensions. European leaders have rallied behind Greenland, pushing back against what they perceive as U.S. threats and takeover designs. The discussion around Greenland is not new; Trump had previously expressed interest in purchasing the island during his first term, leading to a diplomatic spat with Denmark. The current re-emphasis on this ambition, particularly with the suggestion of military options, has been viewed as a significant risk to transatlantic relations in 2026. A tweet from the wife of Trump\'s top advisor Stephen Miller, featuring a map of Greenland covered in an American flag with the caption "SOON," further fueled speculation and concern among Danes. Critics, including Senate Democratic Leader Chuck Schumer, have warned that such actions are part of a dangerous approach to foreign policy, where the U.S. publicly signals interests in various countries, potentially leading to costly interventions. The German Marshall Fund of the United States suggests that Trump\'s ambitions for Greenland pose as big a risk to the transatlantic relationship as the fate of Ukraine, highlighting the instability and unpredictability in Europe\'s relationship with the United States under the current administration. This foreign policy stance is seen as part of a broader pattern where Trump\'s second term has shown an "uncanny ability to multitask," pursuing various geopolitical objectives simultaneously, which could embolden his administration to continue taking geopolitical risks. The international community is closely watching how this renewed interest in Greenland will unfold and its implications for global stability and diplomatic norms.',
                  suggested_search_query_for_image:
                    "Trump Greenland acquisition military option",
                },
                {
                  id: "6",
                  title:
                    "California Republican Congressman Doug LaMalfa Dies at 65",
                  source_name: "The Guardian, Punchbowl News, CBS News",
                  url: "https://www.cbsnews.com/news/doug-lamalfa-gop-congressman-california-dies-at-65/",
                  summary:
                    "Representative Doug LaMalfa, a Republican congressman from California who had served in the U.S. House of Representatives for over a decade, has died at the age of 65. The news of his passing was announced by House GOP Whip Tom Emmer. LaMalfa represented California's 1st congressional district, which covers a large, mostly rural area in the northern part of the state. Throughout his tenure in Congress, he was known for his conservative stance and focus on issues important to his agricultural district, including water policy, forestry, and rural development. His death marks a significant loss for the Republican caucus and for the state of California. The passing of a sitting member of Congress often triggers a special election to fill the vacant seat, depending on state laws and the timing relative to the next general election. This event will undoubtedly lead to discussions about succession and the political implications for his district and the broader House of Representatives. LaMalfa's career in public service extended beyond his time in Congress, having previously served in the California State Assembly and State Senate. His long-standing commitment to representing his constituents and advocating for their interests has been a hallmark of his political career. The political community and his constituents are mourning the loss of a dedicated public servant. The process to fill his seat will now begin, drawing attention to the electoral dynamics in California's 1st congressional district.",
                  suggested_search_query_for_image:
                    "Doug LaMalfa California Congressman",
                },
                {
                  id: "7",
                  title:
                    "Five Years On: January 6th Anniversary Prompts New Legislation to Prevent Taxpayer Payouts to Rioters",
                  source_name: "The Guardian, CBS News",
                  url: "https://www.cbsnews.com/news/january-6-five-years-on-democrats-seek-to-ban-taxpayer-funded-payouts-to-rioters/",
                  summary:
                    "Five years after the January 6th attack on the U.S. Capitol, the event continues to resonate deeply within American politics, prompting new legislative efforts and ongoing reflection. In response to the enduring fallout from the insurrection, some Senate Democrats are introducing new legislation aimed at preventing taxpayer money from being awarded to convicted and subsequently pardoned rioters. This proposed legislation underscores the ongoing debate about accountability for those involved in the attack and the use of public funds. The anniversary serves as a stark reminder of the sustained efforts by some, including former President Trump, to rewrite the history of the events that unfolded on that day. The attack, which saw a mob breach the Capitol building in an attempt to disrupt the certification of the 2024 presidential election results, remains a pivotal moment in recent U.S. history, highlighting deep political divisions and challenges to democratic processes. The proposed legislation by Senate Democrats reflects a continued commitment to addressing the consequences of the attack and ensuring that those who participated do not benefit from public resources. The debate surrounding this bill is likely to be contentious, reflecting the broader partisan divide on how to interpret and respond to the events of January 6th. The ongoing legal proceedings against many individuals involved in the riot, coupled with discussions about pardons, keep the issue at the forefront of political discourse. As the nation looks back on this significant anniversary, the legislative push by Democrats signals an intent to reinforce democratic norms and prevent future challenges to the peaceful transfer of power. The memory of January 6th continues to shape policy discussions and political narratives, influencing legislative priorities and public discourse on the state of American democracy.",
                  suggested_search_query_for_image:
                    "January 6th Capitol attack anniversary legislation",
                },
                {
                  id: "8",
                  title:
                    "Mary Peltola's Potential Alaska Senate Bid Could Shake Up 2026 Midterm Landscape",
                  source_name: "The Independent",
                  url: "https://www.independent.co.uk/news/world/americas/us-politics/mary-peltola-alaska-senate-dan-sullivan-b2473900.html",
                  summary:
                    "The political landscape for the 2026 midterm elections is poised for a significant shake-up with reports indicating that Mary Peltola, a popular Alaska congresswoman, is expected to launch a bid for Senator Dan Sullivan's seat later this month. Peltola, a Democrat, narrowly lost her re-election bid for Alaska's at-large congressional district in 2024, with her Republican opponent winning by just over two percentage points. Her formidable electoral strength, even amidst a wave election year that negatively impacted Democratic caucuses in both the House and Senate, highlights her unique appeal in Alaska's political environment. Her potential entry into the Senate race would immediately place Sullivan's Republican-held seat into play, offering a major opportunity for the Democratic Party to gain control of the upper chamber. This development is particularly noteworthy given that the Democratic Party is already slightly favored to take the House of Representatives, fueled by President Donald Trump's reportedly slipping polling numbers and widespread American frustration over high prices. Peltola's strength as a candidate is partly attributed to Alaska's distinctive electoral system, which includes ranked-choice voting, and her ability to appeal across party lines. Her candidacy could also put Senator Lisa Murkowski, an independent-leaning Republican from Alaska, in an awkward position. While Democrats face their own challenges, including continued dissatisfaction with party leadership among younger voters, recent electoral successes suggest the party is overcoming past malaise. Peltola's decision to run for Senate would inject a new dynamic into the 2026 midterm cycle, making Alaska a key battleground state and potentially influencing the balance of power in the U.S. Senate.",
                  suggested_search_query_for_image:
                    "Mary Peltola Alaska Senate bid",
                },
                {
                  id: "9",
                  title:
                    "US Supreme Court Expected to Rule on Tariffs, Raising Economic Implications",
                  source_name: "Al Jazeera",
                  url: "https://www.aljazeera.com/news/2026/1/6/us-supreme-court-expected-to-rule-on-tariffs-on-friday",
                  summary:
                    "The U.S. Supreme Court is anticipated to issue a significant ruling on tariffs this Friday, a decision that could have substantial economic implications for the nation. The case before the high court involves the legality of certain tariffs, and during arguments in November, both conservative and liberal justices reportedly voiced concerns about their constitutionality. The Supreme Court's involvement in tariff policy underscores the complex interplay between trade, law, and presidential authority. Tariffs, which are taxes on imported goods, have been a prominent feature of recent U.S. trade policy, particularly under the Trump administration, which has used them as a tool to protect domestic industries and exert pressure on trading partners. The outcome of this ruling could either affirm the executive branch's broad power to impose tariffs or place new limitations on it, potentially altering the future direction of U.S. trade policy. Businesses and industries that rely on international trade, as well as consumers, are closely watching the decision, as it could impact import costs, supply chains, and overall economic stability. A ruling against the tariffs could lead to a rollback of existing duties, potentially lowering prices for imported goods and easing trade tensions. Conversely, a decision upholding the tariffs could reinforce the current trade posture and its associated economic effects. The fact that justices from across the ideological spectrum expressed concerns during arguments suggests that the legal questions are complex and the ruling may not fall strictly along traditional partisan lines. This upcoming Supreme Court decision is a critical development in U. realm of U.S. economic and trade policy, with far-reaching consequences for various sectors of the American economy.",
                  suggested_search_query_for_image:
                    "US Supreme Court tariffs ruling",
                },
                {
                  id: "10",
                  title:
                    "Trump Administration Launches $50 Billion Rural Health Transformation Program",
                  source_name: "Holland & Knight",
                  url: "https://www.hollandknight.com/insights/2026/01/health-dose-january-6-2026",
                  summary:
                    'The Trump administration has announced a major new initiative, the Rural Health Transformation Program, awarding $50 billion to all 50 states. This significant program was established by the "One Big Beautiful Bill Act" (OBBB), a Republican reconciliation law enacted in 2025. The awards, ranging from $147 million to $281 million per state, are set to begin in 2026, with the full $50 billion distributed over a 10-year period. The program aims to address critical healthcare needs in rural areas across the United States, which often face challenges such as limited access to medical facilities, shortages of healthcare professionals, and disparities in health outcomes compared to urban areas. The substantial investment underscores the administration\'s focus on improving healthcare infrastructure and services in these underserved communities. The "One Big Beautiful Bill Act" itself was a sweeping tax and spending plan signed into law on July 4, 2025, which promised tax breaks and border security spending, though it was also expected to increase the federal deficit and offset costs by cutting Medicaid and government food assistance. The Rural Health Transformation Program, as a component of this larger legislative effort, represents a significant federal commitment to bolstering rural healthcare. The long-term distribution of funds over a decade suggests a sustained effort to bring about lasting change in rural health systems. This initiative is likely to be a key talking point for the administration, highlighting its efforts to deliver on domestic policy promises and address the concerns of rural voters. The program\'s implementation will be closely watched to assess its effectiveness in transforming healthcare access and quality in rural America.',
                  suggested_search_query_for_image:
                    "Trump Rural Health Transformation Program",
                },
              ])
            );
          } catch (error) {
            res.statusCode = 400;
            console.error("error", error.message);
            res.write(JSON.stringify({ message: error.message }));
          } finally {
            res.end();
          }
        });
      }
      break;
  }
}
