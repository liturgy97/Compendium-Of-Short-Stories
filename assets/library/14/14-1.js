loadPage = function() {
    prepareStory();
    Emma1StartAudio();
    if (!currentStory.vars.hasOwnProperty('kissType')) currentStory.vars.kissType = '';
    const section1 = newSection(1);
    const row1a = storyRow('1a', 'INT. HALL<br>AFTERNOON', 
        `
<p>The new girl curtsied, her pale blue eyes meeting mine for the briefest moment before dropping demurely to the floor.</p>
<p>She was a striking figure&mdash;blonde hair neatly pinned back, a slender frame accentuated by a narrow waist and a surprisingly full bosom. Her smooth skin glowed with youth and vitality. I had ordered for a new maid, not a new wife for my husband!</p>
<p><span class="E-Arabella">&ldquo;So, you are the new girl,&rdquo;</span> I began, my tone cool and scrutinizing. <span class="E-Arabella">&ldquo;What is your name?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Emma, ma&rsquo;am,&rdquo;</span> the maid replied softly, her voice trembling slightly.</p>
<p><span class="E-Arabella">&ldquo;Emma,&rdquo;</span> I repeated, testing the name on my tongue. <span class="E-Arabella">&ldquo;My previous maid, Sarah, was a gem. Irreplaceable, really. I have high standards, and I expect them to be met.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Of course, ma&rsquo;am. I will do my best to serve you well,&rdquo;</span> Emma said, her sincerity evident.</p>
<p>She was young, fresh off the farm or some godforsaken place. I didn&rsquo;t trust her. Not one bit. I decided to grill her,<span class="E-Arabella"> &ldquo;Do you now? You seem very young. </span><br><span class="E-Arabella">How much experience could you possibly have?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;I&rsquo;ve worked in service since I was fourteen, ma&rsquo;am,&rdquo;</span> Emma responded quietly. <span class="E-Emma">&ldquo;I&rsquo;m nineteen now.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;Only five years,&rdquo;</span> I muttered, more to myself than to Emma. <span class="E-Arabella">&ldquo;And you think that qualifies you to work here, in Lord Henry&rsquo;s house?&rdquo;</span></p>
<p>Emma&rsquo;s cheeks flushed, but she held her head high. <span class="E-Emma">&ldquo;I believe so, ma&rsquo;am. I am diligent and eager to learn. I want to prove myself worthy of your trust.&rdquo;</span></p>
<p>There was a pause between us. I studied the maid&rsquo;s face, looking for any sign of deceit or arrogance. Instead, I found only earnestness and a touch of <br>fear. My own initial aggression began to waver.</p>
<p><span class="E-Arabella">&ldquo;Very well,&rdquo;</span> I said, softening my tone slightly. <span class="E-Arabella">&ldquo;Tell me, can you cook?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Yes, ma&rsquo;am, I can cook. I can also sew, clean, and tend to the garden. I am skilled in many household tasks.&rdquo;</span></p>
<p>I nodded slowly. Sarah before her couldn&rsquo;t cook. It was not expected of her since we had speciallized cooks, but I had been annoyed having to ask the cooks for snacks. <span class="E-Arabella">&ldquo;I see. And why did you leave your last position?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;My previous employers moved to America, ma&rsquo;am. They recommended me highly to Lord Hastings.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;<em>(eyebrows lifted in surprise)</em> Did they now? Lord Hastings didn&rsquo;t mention that.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;<em>(eyes widening)</em> Oh, I apologize if I overstepped, ma&rsquo;am. I only meant to convey that I come with good references.&rdquo;</span></p>
<p>I waved my hand dismissively. <span class="E-Arabella">&ldquo;No matter. You seem&hellip; capable. But know this: I will not tolerate laziness or incompetence. You will have to prove yourself every day.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Thank you, ma&rsquo;am. I won&rsquo;t disappoint you,&rdquo;</span> Emma said, her eyes shining with determination.</p>
<p>As I stared into those clear, blue eyes, I felt a flicker of something unexpected in my stomach. Emma&rsquo;s responses were so sweet and disarming, and despite myself, I felt my rigid exterior beginning to soften, and I replicated her smile.</p>
<p><span class="E-Arabella">&ldquo;Very well, Emma,&rdquo;</span> I replied, warmth creeping into my voice. <span class="E-Arabella">&ldquo;Welcome to Hastings Hall. Let&rsquo;s see how well you manage. Your duties begin tomorrow.&rdquo;</span></p>
<img class="portrait-right" src= "${baseImagesFolder}/1.jpg" data-animate-block>
<p>Emma curtsied again. <span class="E-Emma">&ldquo;Thank you, ma&rsquo;am. I promise I&rsquo;ll work hard.&rdquo;</span></p>
<div id='choices1a'>
${appendLinkRow('Ask her to kiss your hand', '1b', false, "applyKissType('hand')")}
${appendLinkRow('Ask her to kiss your cheek', '1b', false, "applyKissType('cheek')")}
${appendLinkRow('Let her be', '1b', false, 'applyKissType()')}

</div>
        `
    )
    
    section1.appendChild(row1a)

const row1b = storyRow('1b', ' ', 
`
${storyPart('hand_kiss_text_1', `<p>I extended my hand. <span class="E-Arabella">&ldquo;Kiss my hand, Emma. It&rsquo;s a sign of respect in this household.&rdquo;</span></p>
<p>The maid stepped closer hesitantly. Her cheeks flushed as she bent down, her lips brushing my knuckles. I felt a shiver run through me, the touch both soft, innocent and intimate. My mouth watered.</p>
<p><span class="E-Arabella">&ldquo;Good. Now, remember to greet me this way every morning,&rdquo;</span> I said. Emma nodded, her eyes sparkling with a mix of nerves and admiration.</p>
`)}

${storyPart('cheek_kiss_text_1', `<p>I stepped closer to Emma. <span class="E-Arabella">&ldquo;Kiss my cheek, Emma. It&rsquo;s a sign of respect in this household.&rdquo;</span></p>
<p>The maid froze, her hands trembling slightly as she failed to register my demand. Her cheeks flushed as&nbsp;I gracefully bent forward slightly, my lips grazing her rosy cheek. <span class="E-Arabella">&ldquo;Like this,&rdquo;</span> I iterated, and Emma hesitantly raised herself on her tiptoes, to plant an innocent kiss on my blemished cheek. I felt a shiver run through me, the touch of her lips unexpectedly soft and naturally wet. My mouth watered.</p>
<p><span class="E-Arabella">&ldquo;Good. Now, remember to greet me this way every morning,&rdquo;</span> I said, my voice softer than I intended. Emma nodded.`)}


<p>I let her to her chores and went on with my day.</p>
${appendLink('Almost a week later', 'section2')}
`
)

const section2 = newSection(2);


    
const row2a = storyRow('2a', 'INT. BEDROOM<br>EARLY MORNING', 
`
${storyImage(2)}
<p>I looked at myself in the mirror, examining my figure, voluptuous, curvaceous, with breasts that defied gravity. It had been ages since I&rsquo;d received a genuine compliment from Henry. Sure, he&rsquo;d mutter something nice before sex, but we hadn&rsquo;t even had sex in two months. I had grown cold toward it lately. My skin was blemishing, and wrinkles were creeping onto my forehead. I looked old.</p>
${storyImageCenter(3)}
<p>I descended the stairs to our grand hall. While this house and its inhabitants reeked of pretentiousnes, Emma stood there looking like innocence itself. She was just a simple maid, yet I wondered if she was the most stunning woman to have ever set foot here. My heart burnt with jealousy.</p>
<p>Emma was the sun that broke my Saturday dawn. Usually, I had no reason to drag myself out of bed early, but she made me eager. Eager to find a fault in her, seeking an opportunity to scold and embarrass her. But every task I gave her, she performed flawlessly. Cooking, sewing, gardening&mdash;she excelled at it all. She never questioned why I asked for things beyond her duties. She didn&rsquo;t need to, she was an expert in everything. It&rsquo;s hard to school a maiden in an art if she knows it better than you. She listened patiently, using each opportunity to showcase her knowledge and expertise. More than once, I found myself on the brink of embarrassment, unable to keep up with her. Yet, gentle Emma never truly humiliated me. Still, I persisted, knowing I&rsquo;d get my chance to belittle her and put her in her place.</p>
<p>It was difficult to corner the house&rsquo;s favorite with others around. My chances dwindled to moments when no one was watching, the early mornings, and not for long. Since Emma arrived, everyone in the house, even the butler and the rest of the staff, rose sooner. Her boundless energy seeped into every crevice, warming the place like nothing else ever had. New arrivals always brought change, but Emma was different. She lifted everyone&rsquo;s spirits, her charm infecting every soul. Guests at my afternoon parties commended Emma for her gentle and cheerful presence. Imagine that? A maid receiving more compliments than the hosts at a genteel gathering. Hell, even my soulless in-laws felt brighter around her.</p>
<p><span class="E-Emma">&ldquo;Good Morning, Lady Arabella!&rdquo;</span> Emma chirped so sweetly. And a Good Morning it was. </p>

${storyPart('hand_kiss_text_2', `<p>She ran to me and kissed my hand.</p>`)}
${storyPart('cheek_kiss_text_2', `<p>She ran to me and pecked me on the cheek.</p>`)}
    
<div id="choices2a">
${appendLinkRow('Kiss her back', '2b', false, "secondChoice('kind')")}
${appendLinkRow('Ask her why her uniform is not proper', '2b', false, "secondChoice('cruel')")}
</div>
`

)

section2.appendChild(row2a);

const row2b = storyRow('2b', ' ', 
`
${storyPart('second_choice_kind', `<p>I found myself cupping her chin, returning the gesture with a kiss on her cheek. Our massive tits inadvertently squeezed against each other&rsquo;s.</p>
<p><span class="E-Emma">&ldquo;Thank you, ma&rsquo;am, you&rsquo;re so kind,&rdquo;</span> she said, her eyes so bright. It was my pleasure, but I kept that to myself.</p>
<p><span class="E-Henry">&ldquo;Good Morning, my sweet wife.&rdquo;</span></p>
<p>Emma and I separated at hearing Henry&rsquo;s deep morning voice echoing around as he descended the steps to the main hall. 
Startled, Emma and I instinctively reached for our gowns, my hands fluttering to smooth the fabric that was already perfectly arranged, while Emma's 
moved quickly to her apron, ensuring it was properly tied, though it hadn’t come undone.</p>`)}

${storyPart('second_choice_cruel', `<p><span class="E-Arabella">&ldquo;Emma, why isn&rsquo;t your uniform proper?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;It&rsquo;s proper to my knowledge, ma&rsquo;am,&rdquo;</span> Emma responded nervously.</p>
<p><span class="E-Arabella">&ldquo;Come here,&rdquo;</span> I commanded with a firm voice. Emma stepped closer, her cheeks pink with shyness. I pulled her by her collar, our massive tits inadvertently squeezing against each other&rsquo;s as she closed the distance between us. I adjusted the maid&rsquo;s collar, and as my fingers brushed against her neck, I felt a rush of warmth.</p>
<p><span class="E-Arabella">&ldquo;Your uniform must always be immaculate,&rdquo;</span> I said. <span class="E-Arabella">&ldquo;You represent this household.&rdquo;</span></p>
<p>Emma nodded, her blue eyes wide and sincere. <span class="E-Emma">&ldquo;Yes, ma&rsquo;am. I understand.&rdquo;</span></p>
<p><span class="E-Henry">&ldquo;Good Morning, my sweet wife.&rdquo;</span></p>
<p>Emma and I separated at hearing Henry&rsquo;s deep morning voice echoing around as he descended the steps to the main hall.</p>`)}

<p>
Henry came down the stairs and kissed me on the mouth. A routine of his every morning.</p>
<p><span class="E-Emma">&ldquo;Good Morning, sir,&rdquo;</span> Emma greeted her lord. Eyes and head bowing submissively. Henry ignored her completely, like she did not exist before him. He left me to the maid and walked into his study. Lord Henry did not acknowledge courtesies from a servant, a&nbsp;particularity well-known in his household.</p>
<p>Emma shrank, embarrassed at the cold reception. She should have known better, but she had grown accustomed to the liberties I allowed her.</p>

<div id="choices2a2">
${appendLinkRow('Apologize for Henry&rsquo;s attitude', '2c', false, "thirdChoice('kind')")}
${appendLinkRow('Reprimand her for speaking to her Lord uninvited', '2c', false, "thirdChoice('cruel')")}
</div>

`
)


row2c = storyRow('2c', ' ', 
`
${storyPart('third_choice_cruel', `<p><span class="E-Arabella">&ldquo;Emma,&rdquo;</span> I scolded her. She looked up, eyes wide with worry. <span class="E-Arabella">&ldquo;You know Lord Henry does not accept greetings from servants.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;I... I&rsquo;m sorry, Lady Arabella. I forgot,&rdquo;</span> she stammered.</p>
<p><span class="E-Arabella">&ldquo;I understand you&rsquo;re used to a different way with me, but you must remember the rules of this house,&rdquo;</span> I continued. <span class="E-Arabella">&ldquo;Henry is not as lenient.&rdquo;</span></p>
<p>She nodded, biting her lip. <span class="E-Emma">&ldquo;Yes, ma&rsquo;am. It won&rsquo;t happen again.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;Good,&rdquo;</span> I said, my eyes softening. <span class="E-Arabella">&ldquo;Just be more mindful in the future. You&rsquo;re still learning.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Thank you, Lady Arabella,&rdquo;</span> she murmured, evidently relieved. <span class="E-Emma">&ldquo;May I ask Lord&rsquo;s forgiveness.&rdquo;</span></p>
<p>Her eyes were pointed to the floor. I was charmed by her innocence.</p>`)}

${storyPart('third_choice_kind', `
    <p><span class="E-Arabella">&ldquo;Excuse him, Emma, he had not noticed,&rdquo;</span> I found myself apologizing to the maid.</p>
<p><span class="E-Emma">&ldquo;Thank you, ma&rsquo;am,&rdquo;</span> Emma nodded. <span class="E-Emma">&ldquo;May I ask&nbsp;for his lordship's forgiveness?&rdquo;</span></p>
<p>Her eyes were pointed to the floor. Henry had disappointingly left us and went to his study. The bastard hurt her feelings and left.</p>`)}
<p>I wondered profusely how my husband could be so oblivious to her charm and beauty. He was the only one immune to Emma&rsquo;s striking allure. It seemed impossible that he could resist her so completely, even I found myself melting around her. Henry&rsquo;s felicity and self-respect were undeniable, but men are pigs, and that pig should have some feeling for her. If he had shown occasional kindness or admiration, I could have passed it off as natural. But his complete disregard was unnatural, unreal. I became suspicious of him.</p>
<p>I grabbed Emma&rsquo;s hand and squeezed it gently. The maid raised her beautiful eyes to meet mine.</p>
<p><span class="E-Arabella">&ldquo;Emma, would you bring Lord Hastings some tea?&rdquo;</span> My voice then lowered to a whisper, <span class="E-Arabella">&ldquo;Then you can ask him for forgiveness yourself.&rdquo;</span></p>
<p>Emma nodded and hurried off with suspicious eagerness. I accompanied my husband in his study and sat on the armchair next to his. Emma shortly entered with a tray. As she served him, I watched closely, my eyes sharp and probing.</p>
<p><span class="E-Emma">&ldquo;Thank you, Emma,&rdquo;</span> Henry said distractedly, barely glancing at her before returning to his stupid book. Emma tried to say something but the pig quickly dismissed her.</p>
<p>I felt a mix of relief and frustration. I leaned closer to Henry, my voice low. <span class="E-Arabella">&ldquo;Do you think she&rsquo;s doing a good job?&rdquo;</span></p>
<p><span class="E-Henry">&ldquo;Hmm? Yes, she seems quite competent,&rdquo;</span> Henry replied, not looking up.</p>
<p>My heart twisted. I had hoped for a reaction, any sign of interest or guilt. Instead, I was left with my own swirling thoughts.</p>

${appendLink('Later that afternoon', 'section3')}
`);




const section3 = newSection(3);



section3. innerHTML += `${storyWideImage('garden')}`;

const row3a = storyRow('3a', 'INT. LIVING ROOM<br>AFTERNOON', 
`
<p>I watched from the sitting room window, my eyes narrowing as I observed my husband, esteemed Lord Henry Hastings, speaking with Emma in the garden.</p>
<p>Their conversation seemed innocent enough. Suddenly, Henry pointed at a cluster of flowers by the side, the lavenders. He must have been telling her they were his favorites. Emma hopped towards them excitedly, bent over at the waist, so disgracefully and unladylike, flaunting her ass towards her master behind her, and turned her head to shoot him a smile before tilting her can to water his lavenders. From a distance, Henry seemed unimpressed, but my jealousy gnawed at me, imagining my husband&rsquo;s eyes lingering on Emma&rsquo;s butt.</p>
<p><span class="E-Arabella">&ldquo;Henry, come inside,&rdquo;</span> I called out.</p>
<p>Henry looked up, nodded, and began walking towards the house. My heart pounded as I imagined the worst. When Henry entered the room, I forced a smile.</p>
<p><span class="E-Henry">&ldquo;What&rsquo;s the matter, dear?&rdquo;</span> Henry asked, raising an eyebrow.</p>
<p><span class="E-Arabella">&ldquo;Nothing, I just... wanted to see you,&rdquo;</span> I replied. <span class="E-Arabella">&ldquo;What were you talking about with Emma?&rdquo;</span></p>
<p><span class="E-Henry">&ldquo;Just the garden. She&rsquo;s quite knowledgeable about flowers, you know,&rdquo;</span> Henry said nonchalantly.</p>
<p><span class="E-Arabella">&ldquo;Is that so?&rdquo;</span> My voice was unnaturally tight. <span class="E-Arabella">&ldquo;Well, I hope she focuses on her duties and not on... distractions.&rdquo;</span></p>
<p>Henry chuckled, oblivious to the tension of this conversation. <span class="E-Henry">&ldquo;Arabella, you do worry too much.&rdquo;</span></p>
<p>Do I?</p>
<p><span class="E-Henry">&ldquo;But you&rsquo;re right. I shouldn&rsquo;t be wasting my time with servants,&rdquo;</span> he continued as he pressed his strong hand on my shoulder, pulling me closer for a kiss, then stepped away to leave for his business. He seemed eager to escape my company. I pressed on his hand before it slid off my shoulder.</p>
<p><span class="E-Arabella">&ldquo;Henry, for all I&rsquo;m worth, you spoke a total of two words to this maid. How did you learn about her expertise so quickly?&rdquo;</span> I asked.</p>
<p>He stopped, turned halfway to face me again, and shrugged. <span class="E-Henry">&ldquo;You don&rsquo;t need to talk for long to know that someone loves what they&rsquo;re doing. The way this girl tends to flowers is a sight to see if you ask me.&rdquo;</span></p>
<p>A sight to see?!!!</p>

<p>Henry just patted me on the shoulder and walked out, leaving me to my burning thoughts.</p>

${appendLink('Day by day...', 'section4')}
`
)

section3.appendChild(row3a);

const section4 = newSection(4);


const row4a = storyRow('4a', 'INT. HALL<br>MORNING', 
`
<p>Day by day, my paranoia grew and grew. One morning, I confronted Emma in the hallway. My eyes must've been blazing with suspicion.</p>
${storyImageCenter(4, false)}
<p><span class="E-Arabella">&ldquo;Have you been trying to seduce my husband?&rdquo;</span> I asked out of the blue, my voice trembling with jealousy and fear.</p>
<p>Emma&rsquo;s eyes widened in shock, her cheeks flushing with their consistent crimson rise.</p>
<p><span class="E-Emma">&ldquo;No, ma&rsquo;am. I would never do such a thing,&rdquo;</span> she replied earnestly, almost whisperingly.</p>
<p><span class="E-Arabella">&ldquo;Show me your uniform. I want to see if you are dressed appropriately.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Ma&rsquo;am, I assure you-&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;Now, Emma!&rdquo;</span></p>
<p>I made her spin, showing me her attire from all sides and angles.</p>
<p><span class="E-Arabella">&ldquo;Are you aware of our undergarment rules?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Yes, ma&rsquo;am. Knee high socks and white underwear. The custom of every decent household.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;Show me.&rdquo;</span></p>
${storyImageCenter(5)}
<p>The girl lifted her skirt. My stomach flipped when I saw her pink, creamy smooth, glowing thigh.</p>
<p><span class="E-Arabella">&ldquo;And your underpants?&rdquo;</span></p>
${storyImageCenter(6)}
<p>Reluctantly, Emma complied with my implied demand, lifting her skirt to reveal her plain, practical shorts.</p>
<p><span class="E-Arabella">&ldquo;Why are you wearing those?&rdquo;</span> I asked, with a mixture of disdain and curiosity.</p>
<p>Emma&rsquo;s eyes met mine, her voice soft as ever. <span class="E-Emma">&ldquo;These are what farm girls wear, ma&rsquo;am. I am not a lady, and this is what is expected of me.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;Is that even cotton?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Yes, ma&rsquo;am, England&rsquo;s finest.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;No way. Turn around!&rdquo;</span></p>
${storyImageCenter(7)}
<p>I stepped closer, turned her around by the waist and began feeling her undershorts from behind, while demanding she stays still and keeps her skirt up. I couldn&rsquo;t resist slipping my fingers under the shorts&rsquo; legholes, feeling those blood filled heavenly thighs and soft underbuttocks and watching their reaction to my gentle touch.</p>
<p><span class="E-Arabella">&ldquo;Cotton? Do you even call that cotton? Emma those shorts are old and worn,&rdquo;</span> I scolded her as I slipped my hand under the shorts strap, feeling her understomach, and the fold of her thigh with her crotch, as I hugged her from behind. <span class="E-Arabella">&ldquo;It must be very irritating and uncomfortable to walk in those!&rdquo;</span></p>
<p>Suddenly, as I stroked a spot on her thigh that must&rsquo;ve grown sensitive with constant friciton with the cheap texture of her old shorts, Emma hummed softly at my touch. Her moan was so soft, I swear if my husband heard that his cock would spring up hard as a pole at the faintness of the sound alone.</p>
<p>Emma immediately pulled my hand out of her short and kissed it on the back repeatedly, <span class="E-Emma">&ldquo;Ma&rsquo;am, I beg you! I desperately need this job and I swear&nbsp;I have not committed anything wrong or disrespectful towards you or Lord Hastings. Please don&rsquo;t embarrass me any further, I do not deserve this and I cannot bear it!&rdquo;</span>&nbsp;</p>
<p>Her plead was followed by a turn of her head, while still in my embrace, she planted a warm kiss to my cheek. I stared at those wonderful wide begging eyes, contemplating how I should react.</p>

${appendLinkRow('Be cruel', '4b', false, "setPath('cruel')")}
<p>To be kind is nice sometimes (Perfume path unavailable)</p>
`
)

section4.appendChild(row4a);

const row4b = storyRow('4b', ' ', 
`
<p><span class="E-Arabella">&ldquo;A seductress should not ask her mistress for forgiveness.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Ma&rsquo;am!&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;Silence, girl! I'll conceal your scandalous acts as long as you listen to every word I tell you.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Please, ma&rsquo;am!&rdquo;</span> She kissed my cheek again. My heart melted but I retained my steel exterior.</p>
<p><span class="E-Arabella">&ldquo;If you were so pure as you claim, why is your underwear wet?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;I move a lot, ma&rsquo;am. Its purpose is to collect the moisture. That&rsquo;s what underwear is for.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;The moisture between yourt sexy legs?!&rdquo;</span> I blurted out, revealing my most current thought. Emma&rsquo;s spine shriveled as she let out a fearful, guilty, but also sweet gasp. I angrily ducked, pulling her undershorts off, <span class="E-Arabella">&ldquo;Take it off immediately,&rdquo;</span> I stopped myself from using the word whore, <span class="E-Arabella">&ldquo;Take it off! Take it off now, Emma!&rdquo;</span> I demanded as she shyly raised her feet off the ground so I could slip the dirty shorts off.</p>
${storyImageCenter(8, false)}
<p><span class="E-Arabella">&ldquo;Oh, look how wet they are!&rdquo;</span> I exclaimed as I crumbled the thing in my hand.</p>
<p><span class="E-Emma">&ldquo;That must be sweat, my lady.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;Sweat?! Don&rsquo;t take me for a fool, young maiden! I know me a womanly scent!&rdquo;</span> I excitedly declared, while sniffing the curled shorts in my palm. My knees weekened and I felt dizzy imagining my husband&rsquo;s ecstatic face as he fills his lungs with Emma&rsquo;s natural enchanting smell. Swiftly restoring my balance, I furiously demanded, <span class="E-Arabella">&ldquo;Lift your dress up high, Emma!&rdquo;</span></p>
<p>Stunned, she held on to her dress as I tried to lift it again. A sharp eye and a frank wonder if she had something to hide from her mistress, forced the maiden into lifting her dress, showing me her vagina.</p>
<p>At the sight of her naked crotch, my eyes watered and my mouth began to salivate.</p>
<p><span class="E-Arabella">&ldquo;Clean-shaven?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;A preference of mine, ma&rsquo;am.&rdquo;</span></p>
<p><span class="E-Arabella">&ldquo;For what? For whom?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;For myself, ma&rsquo;am. I beg your pardon. It is very comfortable to be like this.&rdquo;</span></p>
<p>Is it? Consistenet shaving is a chore. I remember my husband asking me to shave a couple of years back and I reacted so angrily at this ridiculous request. A mature lady trims, never shaves. Truth be told if I had fantastic lady parts like those clean petals, I wouldn&rsquo;t have minded the toil of tending to them. Oh, Henry must be revelling pounding that pussy!</p>
<p>At the swift press of the tips of my fingers against Emma&rsquo;s pussy lips, Emma shivered.</p>
<p><span class="E-Arabella">&ldquo;Why are you so wet?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;Women are meant to be wet, ma&rsquo;am.&rdquo;</span></p>
<p>They are. But I&rsquo;ve been dry as hell for months now. Is there something wrong with me?</p>
<p><span class="E-Arabella">&ldquo;Only when they desire,&rdquo;</span> The words escaped my lips.</p>
<p><span class="E-Emma">&ldquo;Excuse me, ma&rsquo;am,&rdquo;</span> She took a moment to collect herself, <span class="E-Emma">&ldquo;Well, I must confess I&rsquo;ve been yearning lately, but it&rsquo;s no shame for a farm girl to yearn.&rdquo;</span>&nbsp;She murmurred as she bowed her head down shamefully. I felt my heart bitten by the sorrowful look on her face.</p>
<p><span class="E-Arabella">&ldquo;Yearning for whom, Emma?&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;For a handsome and gentle man, my lady,&rdquo;</span> She purred softly, eyelids flickering nervously.</p>
<p><span class="E-Arabella">&ldquo;Handsome and gentle? That sounds exactly like Henry to me.&rdquo;</span></p>
<p><span class="E-Emma">&ldquo;No, ma&rsquo;am!&rdquo;</span> She closed her eyes, shaking her head nervously. I found myself increasing the pressure of my two fingers against her pussy. Emma&rsquo;s legs tightened and instinctually closed, hugging my fingers more and accidentally trapping them in the heat between her legs. I felt a rush of ecstasy. Pulling my fingers out from between her legs, I got up and leaned forward, whispering in Emma&rsquo;s ear.</p>
<p><span class="E-Arabella">&ldquo;I will not allow another woman in this house to desire my husband. If you wish to stay in this household, then you must part with these ugly shorts, and in fact <br>all underwear too. That should serve as a weak punishment for a maiden like you. Disobey me and my resolve will not be so merciful.&rdquo;</span></p>
<p>Her white cotton shorts in hand, I ascended the stairs to my room, leaving poor Emma in tears.</p>

${appendLink(`Major Gregory's visit`, 'section5')}
`
)
const section5 = newSection(5);


row5a = storyRow('5a', 'INT. LIVING ROOM<br>AFTERNOON', 
`
${storyImage(9)}
<p>Henry&rsquo;s friend, Major Gregory, had returned from the front lines and came in for a visit. A man of high rank and higher ego, he strutted into our home with all the bravado of a peacock. The gathering at our house had to be perfect, a showcase of wealth and status that would make even the most jaded of society pause. As we prepared for the small afternoon party, my mind buzzed with a cruel plan to put Emma in her place.</p>
<p>The guests arrived, filling the&nbsp;sitting room&nbsp;and the grand hall with their laughter and clinking glasses. Henry was in his element, his arm around Gregory, regaling him with tales of business and estate. I played the dutiful wife, painted a smile on my face, and exchanged pleasantries with the wives and daughters of our esteemed guests.</p>
${storyImage(10)}
<p><span class="E-Arabella">&ldquo;Emma, fetch more wine for our guests,&rdquo;</span> I called out, with a voice as sweet as honey. Emma, ever diligent, hurried to comply with quick, light steps.</p>
<p>She approached with a tray to the table where Henry, Major Gregory, his wife, and I had gathered. As she neared, I feigned a stumble, knocking into her just enough to send the glasses toppling. Red wine splashed across her dress and onto the pristine white tablecloth underneath.</p>
<p><span class="E-Arabella">&ldquo;Oh dear, Emma! How clumsy of you!&rdquo;</span> I exclaimed, loud enough for everyone to hear. The room fell silent, all eyes on the poor maid standing there, drenched in wine, her face mortified with embarrassment.</p>
${storyImage('henry1')}
<p>Henry&rsquo;s eyes narrowed, but before he could speak, Gregory burst into laughter. <span class="E-Gregory">&ldquo;Quite the spectacle, Arabella! You always did have a flair for drama,&rdquo;</span> he said, slapping Henry on the back. Henry shot me a look that could kill but said nothing, instead turning to Gregory with a forced chuckle. <span class="E-Henry">&ldquo;Apologies, old friend. These things happen.&rdquo;</span></p>
${storyImage(11)}
<p><span class="E-Arabella">&ldquo;Emma, clean this mess up immediately,&rdquo;</span> I ordered sharply. Emma&rsquo;s hands trembled as the butler hurried in and took the tray from the frozen Emma, who stood wide-eyed and immobile by the mess she&rsquo;d made, her cheeks burning with shame. The other guests exchanged amused glances, enjoying the show.</p>
<p><span class="E-Vivienne">&ldquo;What a mess! Housemaids don&rsquo;t come as they used to. It&rsquo;s a shame you had to replace Sarah; she was a gem,&rdquo;</span> Lady Vivienne, Gregory&rsquo;s wife, chimed in.</p>
<p><span class="E-Arabella">&ldquo;She truly was. Imagine Sarah having a mishap like that? Not in a decade of service did she make a mistake.&rdquo;</span></p>
<p><span class="E-Vivienne">&ldquo;I&rsquo;ll tell you, I never trust the young ones. I&rsquo;ve had my eyes on your new girl, and she looked distracted the whole time. I wonder what she had on her simple mind.&rdquo;</span></p>
${storyImage(12)}
<p><span class="E-Arabella">&ldquo;Oh, I definitely know what&rsquo;s on her mind. Too many handsome young men at the party, isn&rsquo;t it, Lady Vivienne?&rdquo;</span> I asked, my eyes pointing at the back of Emma&rsquo;s dress, who had bent over in front of Vivienne, leaving the moist spot on the back of her dress in full view of the loud gossiper.</p>
${storyImage(13)}
<p><span class="E-Vivienne">&ldquo;Oh my! How shameless!&rdquo;</span> Vivienne shouted, her face curling in disgust and her finger pointing at the wet spot on the back of Emma&rsquo;s dress. Guests responded to Vivienne&rsquo;s exclamation with loud laughter, and Emma stood there receiving their mockery, not sure what they were laughing at. When a few children darted behind Emma&rsquo;s back to see what was so funny about her dress, they immediately broke out in laughter and harassed her, poking at the wet spot. Emma shushed and slapped the naughty children, tears falling down her face, and they ran off telling others how the maid had wet herself. I watched Emma collapse to the ground, squatting, holding her red face in her palms, trying to rub the rain of tears away with her wine-filled apron. I broke out laughing at the hilarity of the sight of Emma scrubbing her tears off only to mess it up further; she looked like a clown with the wine reddening her face. But to the other guests, the sight was too grim. Suddenly the mood turned sour as she collected the empathy of the guests who watched her frantically crying herself off, but no one had the heart to go tend to her except for my husband, Henry.</p>
<p>Henry walked over to the girl and helped her stand up, whispered something in her ear to which the girl nodded and ran out of the room, her eyes fixated on the floor, not daring to meet anybody&rsquo;s. Henry then raised his hand, claiming the attention of everyone in the room.</p>
<p><span class="E-Henry">&ldquo;Emma, like all our staff, is as diligent and honorable as one can be. She has labored tirelessly from dawn and, regrettably, did not have the chance to refresh herself or change attire before our event. This oversight is mine alone. Any ridicule directed at her is a slight against this household and, by extension, against me personally, which I shall not tolerate.&rdquo;</span></p>
<p>The guests apologized for their behavior and their children&rsquo;s too. Gregory and some of the guests commended Henry for his ability in handling the situation and some even complimented his luck for getting a sweet spirit like Emma to be around. Henry responded to some compliments and apologies courteously, some he replied to rudely and disrespectfully. It was clear to the eye how impatient he was with the guests and how eager he was for this gathering to finish. The gathering came to an end shortly after dinner and all the guests left. I knew I was in for some serious talk. Henry aggressively demanded that I follow him to his study. Another devilish idea came to my mind. Before I went up to his study, I went to the kitchen and found poor Emma there, who had already changed her clothes and seemed to have gained some of her composure again. I told her to make two cups of tea and bring them to me and the lord in his study in exactly fifteen minutes.</p>

${storyEndButton('Chapter 2')}
`
)

section5.appendChild(row5a)


}



function Emma1StartAudio() {
    const x = document.createElement('div');
    x.innerHTML = storyAudio('Jazz-Lounge');
    document.querySelector('.s-intro').appendChild(x);
    playStoryAudio();
}





setChapterIndex = ()=> {
    currentChapterIndex.innerHTML= '';

    addToChapterIndex('Section 1', 'section1') 
    addToChapterIndex('Section 2', 'section2') 
    addToChapterIndex('Section 3', 'section3') 
    addToChapterIndex('Section 4', 'section4') 
    addToChapterIndex('Section 5', 'section5') 
    }


storyLoad();
applyKissTypeInit();
function applyKissTypeInit(k=currentStory.vars.kissType) {
    currentStory.vars.kissType = k;
    updateStoryObj();
    setPart(currentStory.vars.kissType=='hand', 'hand_kiss_text_1', '1b')
    setPart(currentStory.vars.kissType=='cheek', 'cheek_kiss_text_1', '1b')
    setPart(currentStory.vars.kissType=='hand', 'hand_kiss_text_2', '2a')
    setPart(currentStory.vars.kissType=='cheek', 'cheek_kiss_text_2', '2a')
}
    function applyKissType(k=currentStory.vars.kissType) {
        currentStory.vars.kissType = k;
        updateStoryObj();
        setPart(currentStory.vars.kissType=='hand', 'hand_kiss_text_1', '1b')
        setPart(currentStory.vars.kissType=='cheek', 'cheek_kiss_text_1', '1b')
        setPart(currentStory.vars.kissType=='hand', 'hand_kiss_text_2', '2a')
        setPart(currentStory.vars.kissType=='cheek', 'cheek_kiss_text_2', '2a')
        if (document.getElementById('choices1a')) document.getElementById('choices1a').innerHTML='';
    }

    function secondChoice(k='cruel') {
        
        setPart(k=='cruel', 'second_choice_cruel', '2b')
        setPart(k=='kind', 'second_choice_kind', '2b')
        if (document.getElementById('choices2a')) document.getElementById('choices2a').innerHTML='';
    }

    function thirdChoice(k='cruel') {
        
        setPart(k=='cruel', 'third_choice_cruel', '2c')
        setPart(k=='kind', 'third_choice_kind', '2c')
        if (document.getElementById('choices2a2')) document.getElementById('choices2a2').innerHTML='';
    }

    function setPath(k='cruel') {
        if (k=='cruel') currentStory.vars.path= 'cruel_path'
    }

