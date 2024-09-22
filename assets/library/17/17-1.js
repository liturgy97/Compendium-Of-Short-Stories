loadPage = function() {
    prepareStory();
    
    const section1 = newSection(1);
    section1.style.paddingTop = '6.4rem';
    const row1a = storyRow('1a', 'fullRow', 
    `
        ${storyImageLeft(0)}
<p>In the heart of <strong>Rome</strong>, among the charming chaos of ice cream parlors and ancient ruins, lay the grandeur of <strong><em>Sancta Celestia Cathedral</em></strong>. Within its consecrated halls, hymns intertwined with the fragrance of incense and the quiet voices of its few remaining faithful.</p>
<p>Those consecrated halls, unlike the bustling streets that surrounded them, bore the weight of centuries-old tradition and the challenge of navigating one's faith in a complex world. While the free world thrived in liberty and opportunity, the Church faced a crisis.</p>
<p>Sancta Celestia stood as the final church on Earth, a symbol of Christianity's waning influence. Once vibrant, now it resonates with the prayers of just a few thousand believers, the last remaining faithful in the entire world, their numbers dwindling with each passing year. Its majestic architecture and historic artworks reminisced of an era when milions worshipped with its walls. Today, it stands as a reminder of a faith in decline, yet still holding onto the echoes of its storied past.</p>
`)

const row1b = storyRow('1b', 'fullRow', 
    `<p>Amidst the sea of useless cardinals and ministers, one figure stood out: <span class="N-Pristine">Pristine Rivers</span>. At just twenty-four, she exuded wisdom beyond her years, a humility that charmed everyone, and a faith that could light up a room&mdash;figuratively speaking, of course, though there were those who swore the sanctuary seemed a bit brighter whenever she spoke.</p>`);

const row1c = storyRow('1c', 'fullRow', 
    `
${storyImageRight(1)}
<p><span class="N-Pristine">Pristine</span> was a woman unlike any other. She possessed the prestige of a seasoned theologian and the charm of a playful cherub. With a twinkle in her eye and a gift for witty banter, she was both revered and adored by the congregation.</p>
<p>As rumors of divine intervention swirled through the air, <span class="N-Pristine">Pristine</span>'s name rose to prominence, accompanied by curious looks and knowing smiles. Could this woman, with her irreverent humor and unorthodox approach, breathe new life into the venerable institution?</p>
<p>It was <span class="N-Pristine">Pastorette Pristine</span> who called for the journey of change. She swore to kick the Vatican's doors open, inviting believers from all walks of life. Under her guidance,<em><strong> Sancta Celestia</strong></em> will undergo a transformation unlike any other. Gone will be the days of somber sermons and stoic silence; in their place will stand a vibrant community filled with laughter, song, and the occasional game of Vatican Bingo.</p>
`);

const row1d = storyRow('1d', 'fullRow', 
    `
<p>"We need to embrace fun!" <span class="N-Pristine">Reverendess Pristine</span> declared, waving her old Bible like a flag of innovation. "We must bring the flock back to the pews!"</p>
${storyImageLeft(2)}
<p>And so, she embarked on a quest to make the old church the quirkiest place of worship in town. She dusted off the church organ and hired a choir of pensioners to sing hymns reminiscent of the latest tunes on the wireless. Worshipers chuckled as they, for the first time ever, sang along to tunes their grandparents never hummed. Kids cackled as they listened to her deliver a sermon entirely in limericks.</p>
<p>Not stopping there, Pristine, unveiled her pi&egrave;ce de r&eacute;sistance: <strong><span style="color: #ff6600;">Bingo Sundays</span></strong>. Instead of solemn sermons, churchgoers now eagerly awaited the chance to win a prize by shouting "Bingo!" during the service. No longer did the Catholic Sanctuary, the Anglican Communion, and the Eastern Orthodox Haven reside to separate chapels within the last church on Earth. Bingo knows no denominations! The pews echoed with laughter as bingo balls bounced and numbers were called out by the enthusiastic church ladies.</p>
<p>While <span class="N-Pristine">Pristine</span>'s methods faced criticism and disapproval from the elders, she wouldn't back down a single bit until she saw Sunday sanctuary attendance doubled. Her dedicaton did not go unnoticed; soon enough, her efforts drew attention from near and far. Newspapers headlined "Bingo and Hymns: The Latest Trend in Worship!" and "Church Turns Back Time to Draw Crowds." People flocked to<em><strong> Sancta Celestia</strong></em>, eager to experience something that feels so retro in a futuristic world, the warmth of faith.</p>

`);

const row1e = storyRow('1e', 'fullRow', 
    `
${storyImageRight(3)}
<p>Slowly but surely, the wounds of the Church started to heal. The once-mysterious Vatican now stood as a symbol of hope and renewal, all thanks to one young woman's unholy approach to realising miracles. The Vatican suddenly buzzed with a fresh energy. From the high offices to the small parishes, <span class="N-Pristine">Pristine</span>'s message of love and inclusion touched the hearts of hundreds of sinners in the heart of Rome, reigniting their passion for <span style="color: #B22222;">Christ</span>'s teachings.</p>
<p>And in a moment of sheer audacity, <span class="N-Pristine">Pristine</span> pleaded for the momentum to be maintained. She inisisted on the unification of the three denominations into a "Trinity of Faiths". A new pontiff must be appointed, a spiritual guide, a chosen conduit to the divine, to lead them Christianity to its former glory. With a playful wink and a flourish of her robe, announced her readiness to assume the mantle of leadership, her laughter echoing through the rafters as she promised to lead with equal parts wisdom and whimsy.</p>
    `);

const row1f = storyRow('1f', 'centered8Row', 
`


<p>And so, in the singular church on Earth, the clergy held a historic meeting. In the grand hall of the sanctuary, the Elders of the three remaining denominations deliberated over a matter long dormant: selecting a bishop. In a world where the need for bishops had become unclear, the church's growing popularity marked a new era. With congregations expanding and the possibility of dioceses reemerging, the clergy acknowledged the necessity of leadership. After fervent discussions and spirited debates about the eligibility of a woman to hold such a revered titled, it was determined that change must be embraced, and bringing more followers to the church was its only hope. The clergy set out to elect a figure who would shepherd the faithful into this uncharted future, guiding them with wisdom, grace, and most importantly, skill and vision.</p>
<p>The clergy appointed the new Bishop, a man unlike any other, <span style="color: #b36c4a;"><em><strong>Alistair Everhart</strong></em></span>.</p>
<p><strong>Sister Pristine:</strong> Who the rivers is Alistair Everhart?</p>

${storyEndButton('To be continued...')}
`)
section1.appendChild(row1a);
section1.appendChild(row1b);
section1.appendChild(row1c);
section1.appendChild(row1d);
section1.appendChild(row1e);
section1.appendChild(row1f);


}

storyLoad();