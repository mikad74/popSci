import CoverImage from "/public/cover.jpg";

function Content() {
  return (
    <div className="content">
      <div className="text">
        <img src={CoverImage} alt="cover image" id="cover"></img>
        <h2>English ... Gay?</h2>
        <p className="date">Friday, May 26, 2023</p>
        <p>
          Growing up in Italy as a queer person, I noticed that it was quite
          common for me to use English or Italian-English code-switching with
          other Italian LGBTQ+ peers. This is striking when you discover that
          English is not commonly spoken as a second language, even by the
          younger generations. This would happen at school or in my free time,
          without me paying too much attention to the fact that I would only use
          English with queer people; in fact I just used to think that we all
          shared a spirit of international appreciation.
        </p>
        <p>
          Then, when I was seventeen I moved to my other home country, Finland,
          for a year-long exchange and what I now find interesting is that I
          would speak Finnish with most of my Finnish-speaking friends, and
          English with just a few: the queer ones.
        </p>
        <p>
          Fast-forward to a month ago, while taking a sociolinguistics class, I
          heard a gay coursemate from Turkey who mentioned the same experience
          and I started asking myself: “Is this a worldwide phenomenon and am I
          only finding out about this now?”
        </p>
        <h5>Queerphobia and Colonialism</h5>
        <p>
          While investigating this topic, we found roots of queerphobia in
          colonialism. Contrary to outdated beliefs of a civilising West,
          colonialism has been proven to be damaging even in the case of queer
          freedoms, as mentioned by scholar Peter Jackson. He observes that
          Thailand and Japan are the only East Asian countries where LGBTQ+
          cultures developed in modern times and he relates it to the fact that
          they did not suffer direct colonisation. The opposite is the case of
          Mongolia, which underwent Western colonisation in the form of Soviet
          imperialism, preventing these communities from sprouting.
        </p>
        <p>
          Another example of queerphobia rooted in colonialism is found in Hong
          Kong, where homosexuality was criminalised by the British rulers. The
          stigma persists to this day to the point that queerness is portrayed
          as being contrary to ‘traditional Chinese values’.
        </p>
        <h5>English as a Safe Space</h5>
        <p>
          Queerphobic attitudes lead to a necessity for safe spaces. It’s been
          observed in several studies that queer people tend to use English in
          order to build what we might call a “linguistic safe space”.
        </p>
        <p>
          The appropriation of English by queer communities involves countries
          like Israel where the local language(s) don’t allow escaping the
          gender binary due to their grammar. In this case, English can be
          perceived as a safe space due the fact that it allows for gender
          neutrality.
        </p>
        <p>
          On the other hand, Mongolia provides an interesting scenario, as the
          importance of the use of English on Facebook is shown by associate
          professor Dovchin to be an important component of the contemporary gay
          Mongolian identity. A participant in the study described the feeling
          of having found a safe space as “using English is more natural and
          easier for me than using Mongolian because it gives me the freedom I
          have always been searching for”.
        </p>
        <p>
          In addition, Dovchin pinpoints the form of English and
          English-Mongolian code-switching as “translingual English”. Namely,
          the way English is used in combination with other languages in online
          linguistic practices, accompanied by certain (homonormative)
          behaviours, exploring the way queer individuals navigate cultural and
          linguistic boundaries online.
        </p>
        <h5>Transnational English</h5>
        <p>
          Even outside of the virtual world, English is a tool for transnational
          connections. Among queer Israelis, English is thought of as a way to
          engage with like-minded people and take part in a global conversation.
          Similarly, during the late 70s and 80s in Hong Kong, only a small
          proportion of the population spoke English fluently, regarding it as
          the language of foreigners. Thus, the reason to learn English for many
          LGBTQ+ people at the time was mainly to provide a gateway to a more
          liberal Western culture and finding a foreign partner in order to
          escape the restrictions of their society. In other words, it allows
          for a sense of inclusion and cosmopolitanism by enabling people to
          express their identities in a way that transcends regional linguistic
          and cultural boundaries.
        </p>
        <h5>The English Queer Creole</h5>
        <p>
          When LGBTQ+ people use English, they show creativity by either
          integrating it into their language or assigning novel meanings to
          existing words. An example of the former is the way gay Mongolian men
          use a word like “emotion”, ‘cut’ it into “emo-” then add the suffix
          “-rood” (to become), forming emorood, which means “to become extremely
          emotional”.
        </p>
        <p>
          In the Thai gay community, queer concepts like “top” and “bottom” are
          expressed with English words “(gay) king” and “(gay) queen”, in a way
          that is not understandable by speakers of English. Likewise, the
          lesbian community uses the words tom and dee, respectively from
          “tomboy” and “lady” to express the pair “butch/femme”.
        </p>
        <p>
          As another example, within Israel's LGBTQ+ culture, there is a process
          of creolisation involving the blending of gay English, vernacular
          Hebrew, and Arabic, resulting in the creation of a unique local lingo
          that often retains the Hebrew grammar. For instance, in lesbian
          circles one is either “butch-eet” or “femme-eet” originating from the
          Hebrew feminine ending.
        </p>
        <h5>Conclusion</h5>
        <p>Everybody is gay.</p>
      </div>
      <div className="writer-container">
        <div className="writer-title">Written by:</div>
        <div className="writer-carrousel">
          <div className="writer-card">
            <div className="name">William Bordonaro</div>
            <div className="text">
              First year student Linguistics at UvA. Writer and Editor
            </div>
          </div>
          <div className="writer-card">
            <div className="name">Marta Sarić</div>
            <div className="text">
              First year student Linguistics at UvA. Writer and Editor
            </div>
          </div>
          <div className="writer-card">
            <div className="name">Mika Doorenbosch</div>
            <div className="text">
              First year student Linguistics at UvA. Writer and Editor
            </div>
          </div>
          <div className="writer-card">
            <div className="name">Tudora Rada</div>
            <div className="text">
              First year student Linguistics at UvA. Writer and Editor
            </div>
          </div>
          <div className="writer-card">
            <div className="name">Ben Chan</div>
            <div className="text">
              First year student Linguistics at UvA. Writer and Editor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
