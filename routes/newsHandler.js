import { getLatestNews } from "../agent.js";
import url from "url";

export async function handleNewsRequests(req, res) {
  console.log("iNSIDE NEWS");
  let parsedUrl = url.parse(req.url, true); // splits the web address and create objects out of it.
  let pathname = parsedUrl.pathname;
  let query = parsedUrl.query;
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
            let content = [
              {
                id: "1",
                title:
                  "Maryland Men's Basketball Falls to UCLA in West Coast Road Trip",
                source_name: "Sports Illustrated",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGd7zmxO44gQEQGCJEAtEwzSACTk69OEkttkEUit1nTkQDh6WgUJA_5itcx9wm2g4lmmQJzjwVeAEAZn5_j_u-7Rsix68LfAMpaytTrU9DAY6hl67UEfh9jJ89cA5zTT8_qKNTBKp8udJrlJLATBgQlw3u_7hKWAoiBAWbGTvbrgitXbWI-MKtnVPcyEpOgzBOl2YB3QY9cdeXs9jtGsrK5HGlVTqk79MsM9Lf7tw==",
                summary:
                  "The Maryland men's basketball team suffered a 67-55 defeat against the UCLA Bruins on Saturday night at Pauley Pavilion, marking their third consecutive loss and dropping their season record to 7-9 overall and 0-5 in Big Ten play. The Terrapins struggled significantly in the first half, allowing UCLA to build a substantial 38-21 lead by halftime. Maryland's offense was particularly cold during a critical 16-0 run by the Bruins, where the Terps missed all three of their shot attempts and committed four turnovers over a four-and-a-half minute span. Despite a strong second-half effort where Maryland managed to cut the deficit to five points (56-51) with just over six minutes remaining, UCLA quickly responded with a 6-0 run to seal their victory. Elijah Saunders delivered a standout performance for Maryland, achieving his first double-double as a Terp with 17 points and 12 rebounds. Guard Darius Adams also contributed 13 points and six rebounds. However, the team's overall shooting efficiency, particularly from beyond the arc (6-of-33 from three-point range), proved to be a major hindrance. While Maryland outrebounded UCLA 48-29, including 20 offensive rebounds, their inability to convert these opportunities into points ultimately cost them the game. UCLA's Trent Perry led the Bruins with 16 points, and Eric Dailey Jr. added 15 points and nine rebounds. The loss extends Maryland's challenging start to the Big Ten season, highlighting a need for greater offensive consistency.",
                suggested_search_query_for_image:
                  "Maryland Men's Basketball vs UCLA January 2026",
              },
              {
                id: "2",
                title:
                  "No. 8 Maryland Women's Basketball to Host No. 19 Ohio State in Blackout Game",
                source_name: "University of Maryland Athletics",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3Aoy1v2W2Zb8sygvr7tK_Xw1Xz6omeLEi9PR7zhjtOJMCpIptKiLPVBaXpwoByZfltTSJabqlY3HP5sVCHT7gQUBc29iq_vO3gDDI6C8JMyeWTobDk_PT6i92SalKtRKlVSS-Tu5OiVuZIVVXO7W7omnya0Nu2ker8gUl032JIhFsBRiX71b6okvfm_Odyby2Z3QF1Bxb1sVRqnk0PDemK1S8I5Cr5af1IYqI2AoMocCfkQ==",
                summary:
                  "The 8th-ranked Maryland women's basketball team is set to host No. 19 Ohio State in a highly anticipated 'Blackout Game' on Sunday, January 11, 2026, at the XFINITY Center in College Park, MD. This significant Big Ten matchup pits two top-20 teams against each other, with both Maryland (16-1, 4-1 B1G) and Ohio State (14-2, 4-1 B1G) holding identical conference records. The game, scheduled for 4 PM ET, is designated as the Terps' annual 'BLACK OUT' event, featuring a 'Dark Side of the Shell - Star Wars' theme to engage fans. Special promotions include free T-shirts for the first 500 attendees and free admission for Testudo's Kids Club members, who are also invited to a pregame party. Following the game, the Terrapins will hold an autograph session on the concourse. Parking will be free in designated lots around the XFINITY Center. The game will be streamed live on Peacock and available on the Fox Sports app, with radio coverage on the One Maryland app. Head Coach Brenda Frese, in her 24th season, continues to lead the Terrapins with an impressive record, having guided the team to numerous conference titles, NCAA Tournament appearances, and a national championship in 2006. This game is crucial for both teams as they vie for position in the competitive Big Ten conference standings.",
                suggested_search_query_for_image:
                  "Maryland Women's Basketball vs Ohio State Blackout Game January 2026",
              },
              {
                id: "3",
                title:
                  "No. 7 Maryland Women's Basketball Rebounds with Dominant Win Over Indiana",
                source_name: "WHAS11 (AP News)",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGYT-eKJfb-Or63rg6qNLUc3-JBg1171enF30UUlibbft3M2lxc9YNSs2bFMupLRewUEGANP1pCNxK9xeEse4KBz6ytHRK3lDPrFuEAd8ottwodyvs3q-QNJUcjkIqIt2Hacucj06VEgKkHZ8_--KuZUTrfYWdzv_hp6WTNfeDo2zDMB_ly63M8xZ7HiEq2JBbAyd-ooESltjaOA_g90smcEuyzCG-G243UqQAqA8ifOjkuVhEqUzuYUW19XDggpOSs4pakPFc8T46GP717Vea70FN3husec2lZd2puK8l4h3HzzHayk4K2o8zk==",
                summary:
                  "The No. 7 Maryland women's basketball team successfully bounced back from their first loss of the season, securing an 82-67 victory over Indiana in College Park on January 5, 2026. This win came after a 73-70 defeat at Illinois, demonstrating the Terrapins' resilience on their home court. Oluchi Okananwa delivered a career-high performance, leading all scorers with an impressive 34 points. The Terrapins' defense was particularly stifling in the first half, forcing 16 turnovers from Indiana and limiting them to only 17 field goal attempts, with a mere six attempts in the second quarter. Before the game, the team honored their 2006 national championship squad, adding to the celebratory atmosphere. Maya Makalusky led the scoring for Indiana with 20 points, but her efforts were not enough to overcome Maryland's strong offensive and defensive showing. The victory improves Maryland's record and solidifies their position as a top contender in the Big Ten Conference. The team's ability to quickly recover from a loss and deliver a dominant performance against a conference opponent highlights their strength and depth as they continue their 2025-2026 season.",
                suggested_search_query_for_image:
                  "Maryland Women's Basketball Oluchi Okananwa vs Indiana January 2026",
              },
              {
                id: "4",
                title:
                  "Maryland Football 2026 Transfer Portal Sees Significant Activity",
                source_name: "Sports Illustrated",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEuOejXFrq64LWzgdf0wiWAoZvzKFRSQsJF1iHnvDLkobtWe7dG0TEwY_5puIkat95tD2_ooZckRV-vA12XNSq61ZzGdi8Ph03JMDPNY4fKUJgqh3jvaY7GhLKWFxcbqKyObdELZnbV3GZZCZv1fsIBAeNpK_Vuh6kfubDw5yU5TybOnO4kfFurgd6sP4Fo_1S2s5Gy6xAH6OaDkQJ1ofy7PzbN",
                summary:
                  "The Maryland Terrapins football program is actively engaged in the 2026 transfer portal season, with both incoming and outgoing players reshaping the roster under Head Coach Mike Locksley. As of January 9, 2026, the Terps have been busy addressing key areas, particularly on the defensive and offensive lines, and in the wide receiver corps. Notable incoming transfers include defensive lineman Derrick LeBlanc from UCF, who is expected to bolster the defensive front, and wide receivers Chris Durr Jr. (Wyoming) and Na'eem Abdul-Rahim Gladding (Virginia), aiming to add dynamic playmaking to a unit that ranked 104th nationally in yards per completion last season. The team also secured running backs Harry Dalton from USC and Trequan Jones from Old Dominion. While Locksley has managed to retain key players like quarterback Malik Washington, the portal has also seen a significant number of departures, with 15 players entering the portal. This ongoing activity underscores the strategic efforts to enhance the team's competitiveness for the upcoming 2026 season, with the transfer portal closing on January 16, and an additional window for FBS National Championship participants from January 20-24. The focus remains on roster retention, recruiting, and leveraging the transfer portal to build a stronger foundation.",
                suggested_search_query_for_image:
                  "Maryland Terrapins Football Transfer Portal 2026",
              },
              {
                id: "5",
                title:
                  "Terps Add Damon Hall Jr. to 2026 Football Signing Class",
                source_name: "University of Maryland Athletics",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHS2CzXie5WWAxEED2qTdZtgIF07mEs6cBhGpcxJe654zfNu9BBodjchDrdehF6bjszOhSpoINc6a-AFBWNnQJ87NWoYcGXIvJOk6ZCzHJz6gAak_3HbwCUC-rkg2l5odfshBVado6io2PnjEFPPDQhH7fWaHtplZSMlrsAtqmHF8NVfEwmz3p3AIXzDGC-ci50ptu6s6ePNwg==",
                summary:
                  "The University of Maryland football program announced on December 5, 2025, the addition of tight end Damon Hall Jr. to its 2026 signing class. Hall Jr., a consensus 3-star recruit from Saint Frances Academy in Baltimore, MD, officially signed a Big Ten athletics scholarship agreement on the final day of the early signing period. His commitment further strengthens Maryland's 2026 class, which is now ranked No. 25 nationally in Rivals/On3's composite average player rankings. Hall Jr. was highly sought after, choosing Maryland over offers from prominent programs such as Alabama, Florida, South Carolina, and Michigan. He is rated as the No. 17 overall player from the state of Maryland by 247Sports and the No. 31 tight end in the 2026 class by ESPN. His signing marks him as the third player from Saint Frances Academy to join the Terps in this cycle, alongside five-star Edge Zion Elee and three-star defensive back Hakim Satterwhite. This addition underscores Head Coach Michael Locksley's continued success in recruiting top talent from the DMV area and beyond, building a strong foundation for the future of Maryland football.",
                suggested_search_query_for_image:
                  "Damon Hall Jr. Maryland Football Signing 2026",
              },
              {
                id: "6",
                title:
                  "Maryland Inks 16 Student-Athletes During Start of Early Signing Period for 2026 Football Class",
                source_name: "University of Maryland Athletics",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdxg0_xvEC9AMy6fu1KbXbEl0qf8lOQWVnn0DEZf7CCewf1C1x84b5pOh-ykd7u6jzcT08bCN-lOH9Vy8Gpxf1ZBrGTBq7AfAAKnNVWfuDrPdjdvw0CqV4IJXffN07dTNxDYQt0yfFOKUX-LjUurRnigrFq_SEZqX0pbHO6MO_tanjy31Zkd6fPCGX9ayr0OCNYgg2lMh1_464JKjTASFVft_MZZIB2-xAyDSfZzMm4OQC",
                summary:
                  "On December 3, 2025, the University of Maryland football program officially announced the signing of 16 student-athletes to Big Ten athletics scholarship agreements during the initial phase of the early signing period for the 2026 class. This robust class is currently ranked No. 26 nationally by 247Sports and No. 29 by Rivals/On3 in their composite average player rankings, signaling a strong recruiting cycle for Head Coach Michael Locksley. A highlight of the class is five-star defensive lineman Zion Elee, who, according to 247Sports, is now the highest-rated player to ever sign with the Terps, surpassing Stefon Diggs. The class also features three four-star prospects identified by ESPN: linebacker Kaden Carter, offensive lineman Day'jon Moore, and defensive lineman Jamarcus Whyce. Maryland demonstrated its commitment to local talent by signing six of the top 17 players from the state of Maryland, including Elee, who was the consensus No. 1 player in the state. Additionally, the Terps secured two of the top eight players from Washington, D.C., and two of the top 20 from Ohio. The 16 signees represent five different states and Washington, D.C., with a balanced distribution of seven offensive players and nine defensive players. Eleven of these signees are set to enroll early, providing them with a head start in their collegiate careers.",
                suggested_search_query_for_image:
                  "Maryland Football 2026 Early Signing Period Zion Elee",
              },
              {
                id: "7",
                title:
                  "Mike Locksley to Return as Maryland Football Coach in 2026, Eyes NIL Boost",
                source_name: "CBS Sports",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyJKLf9Zy-ElP_B1NQocwqdA6vUph4uL6zKjtXJx1nwY5_mKp2uZZS5m5MpGKt2WxxHc88kqrtIBDODqpm9iaELBoHtbsrVIQeMJGFY-jbb5ZPTYU6BVn8KnvJMEfGPoy-_iKJ7zzAdO8opJcBObjRPFbMloUQzu4_BLobJkEoqMPgKMfLf47Z-Vzy_n9vb9ywaUia7-DhzjLbG-yzM7OixmRZQw==",
                summary:
                  "Despite a challenging 2025 season, Maryland athletic director Jim Smith confirmed on November 16, 2025, that Head Coach Mike Locksley will return for his eighth season in College Park in 2026. This decision comes amid a second consecutive disappointing season for the Terrapins, who, at the time of the announcement, held a 4-6 record (1-6 Big Ten) and needed to win out to secure bowl eligibility. Smith expressed full support for Locksley, emphasizing the department's commitment to providing increased resources, particularly in Name, Image, and Likeness (NIL) support, to enhance roster retention, recruiting, and competitiveness in the transfer portal. Locksley's tenure at Maryland has seen a 37-47 overall record, including an interim stint in 2015. The athletic director, who joined in May 2025, has ambitious goals of transforming the Terrapins into a football powerhouse. While Maryland's 2025 recruiting class was ranked 25th nationally, the 2026 class was 72nd at the time, though it included five-star edge defender Zion Elee. The focus on bolstering NIL resources is a direct response to the evolving landscape of college football, where retaining talent and attracting new recruits through the transfer portal has become paramount.",
                suggest_search_query_for_image:
                  "Mike Locksley Maryland Football 2026 NIL",
              },
              {
                id: "8",
                title:
                  "Maryland Men's Basketball Officially Signs Three Prospects to its 2026 Class",
                source_name: "Sports Illustrated",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmC4oRtI2oAh30-YWpvx75HEj_AloNXaTNlOy5qTzDCxdmBu8DE-8fjSImGTi_5RJ8yDcD1nHqRbdYMxRNsV-pNOR7714p0o7ZPb2LZXOEk4TVF2OCNDlIkqOQcnJcoM-Y8ZltBr4xm0W-CN-9NfroGlYVZ8FK6L_HNHewZ-evWpt2uDFLTjAmGSSeyUepayU5Yecl38rBUobHfo_mm1wZTjV0k5tk0bboktQhtOgCwtAshHBslg==",
                summary:
                  "The Maryland Terrapins men's basketball program officially strengthened its future roster by signing three promising prospects to its 2026 class on November 20, 2025. The new additions include four-star guard Kaden House, four-star forward Adama Tambedou, and three-star forward Austin Brown. Kaden House, a highly-touted recruit and the son of former NBA veteran Eddie House, committed to Maryland on Halloween. He is ranked as the 44th-best recruit in the 2026 class, the seventh-best combo guard nationally, and the sixth-best player in Arizona, according to 247Sports. House's decision to join the Terps was influenced by the program's vision and his potential role. Adama Tambedou brings a versatile skill set as a modern two-way wing, capable of stretching the floor with his shooting ability and defending multiple positions due to his size. Austin Brown, a three-star forward, further adds depth and talent to the incoming class. This recruiting class is seen as a significant step for the Terrapins, offering immense potential and generating excitement for the future of Maryland basketball at the Xfinity Center. The signings underscore the coaching staff's efforts to build a competitive and talented squad for the coming seasons.",
                suggested_search_query_for_image:
                  "Maryland Men's Basketball 2026 Recruiting Class Kaden House Adama Tambedou Austin Brown",
              },
              {
                id: "9",
                title:
                  "College Park High School Boys Basketball Delivers Strong Performance at Stonebarger Tournament",
                source_name: "College Park High School Athletics",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHt2v__MK1NOAEHKLDfSpvqZnekwTqIQQAtwzguEHhGaPzKewbOLR6dpCcK_v4uawhsnekEO5RYmEsq2xk7Zm0uKd39hWxbNxCp5BtzK1_OXreACUVT6-cf2ubBWVuTdho==",
                summary:
                  "The College Park High School boys basketball team showcased a strong performance at the Stonebarger Tournament, as reported on December 17, 2025. While specific game results and opponents were not detailed in the available information, the news highlights a positive and competitive outing for the team. This strong showing indicates the team's dedication and progress early in their season. High school sports news, such as this, is crucial for local communities, fostering school spirit and recognizing the achievements of student-athletes. The College Park Athletics website, which is currently undergoing updates, serves as a central hub for news and information regarding various sports programs at the high school. The mission of College Park Athletics is to provide a fun, challenging, and safe environment for student-athletes to achieve their goals both in sports and academics, emphasizing character, intelligence, and community contribution. The vision includes creating quality programs with knowledgeable coaches and exceptional facilities, instilling pride in the school and community. This tournament performance is a testament to these values and the hard work of the boys' basketball team.",
                suggested_search_query_for_image:
                  "College Park High School Boys Basketball Stonebarger Tournament 2025",
              },
              {
                id: "10",
                title:
                  "College Park Skyhawks to Face Grand Rapids Gold in January 2026 G-League Matchups",
                source_name: "Experience Grand Rapids",
                url: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxFALjduWAlUKYDIxMOF2EALVwX97JF9asTNkcTyeucv7_YkTSqvGOme96h3pf1Q9vsLl1cB-YaIfQe5yLWhhQBRw4SIyqhDXGF-3TqhGQALolPnjpuNaxijwqir3x3T0q2kPkismI7yum-bkusPvmkzmmDilyofACpXBZT7-oL5lFVoJy32egNzaqTN9dtQ==",
                summary:
                  "The College Park Skyhawks, the NBA G-League affiliate of the Atlanta Hawks, are scheduled to compete against the Grand Rapids Gold in a series of games between January 8 and January 10, 2026. These matchups are part of the 2025-2026 G-League season, offering professional basketball action for fans in both College Park and Grand Rapids. The Grand Rapids Gold, the G-League affiliate of the Denver Nuggets, will host the Skyhawks during these dates. G-League games provide an exciting platform for up-and-coming basketball talent to develop and showcase their skills, often featuring players who are on the cusp of or have spent time in the NBA. These games are significant for the development of future NBA stars and offer a high level of competitive basketball. Fans attending the games in Grand Rapids will have the opportunity to support their local team and enjoy concessions. While the specific outcomes of these games are not yet available as they are scheduled for the future, the series represents a key part of the G-League calendar and a trending event for sports enthusiasts in College Park.",
                suggest_search_query_for_image:
                  "College Park Skyhawks vs Grand Rapids Gold January 2026",
              },
            ];

            // console.log(body);
            res.writeHead(200, {
              "content-type": "application/json",
            });
            res.write(JSON.stringify(content));
          } catch (error) {
            res.statusCode = 400;
            console.error("error", error.message);
            res.write(JSON.stringify({ message: error.message }));
          } finally {
            res.end();
          }
        });
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify("Route not found"));
        res.end();
      }
      break;
  }
}
