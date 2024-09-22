loadPage = function() {
    prepareStory();
    
const section1 = newSection(1);


const row1a = storyRow('1a', 'Preliminary Note', 
`
<p>The events of our stories span several years. In the major timelines, unless otherwise mentioned, <strong>all characters are over 18</strong>.</p>
<p>The primary timeline of this story takes place in <strong>2010-11</strong>, where <strong>Cherie</strong>, <strong>Lucy</strong>, <strong>Kenzie</strong>, <strong>Ethyl</strong>, and <strong>Mandy</strong> are aged 21, 21, 20, 20, and 18, respectively.</p>
<p>The <strong>2006-07</strong> timeline explores the backstory of Kelsi Alexander and the original Outsiders, during which the aforementioned five characters are underaged. However, their involvement is crucial to the story&rsquo;s progression and the development of the main characters&rsquo; arcs. Interactions with these characters are mostly unavoidable and integral to the narrative. If any of these characters are portrayed visually by a model or actress, that individual will be over the age of 18. There will be no sexual activity involving these characters in Boyhood. All other characters are over the age of 18.</p>
${appendLinkRow('Scene 1 &mdash; Heel Turn 2', '1b', false, 'updateCountdown()')}

`
)

section1.appendChild(row1a);

const row1b = storyRow('1b', ' ', 
    `
    ${storyVideo('K/countdown5', false, false, false, true)}
    <p>Act I (Wait for countdown)</p>
    `
    )
    
    const section2 = newSection(2);
    
    
    const row2a = storyRow('2a', ' ', 
    `
    ${storyAudio('audio/Night-on-the-Docks')}
    
    <h2 class="Boyhood-Header centralized">Friday, 25 March 2011 <span style="font-size: 2rem;">(3 days after the end)</span></h2>
    `
    )
    
    section2.appendChild(row2a);
    
    // const section = newSection(, '');
    
    const row2b = storyRow('2b', 'EXT.<br>SAINT SERAPHINA CATHEDRAL&rsquo;S GRAVEYARD<br>MORNING', 
        `
        ${storyVideo('K/0', true, false, true, true)}
        <p>The wind tugged at my hair, its chill biting into my skin.</p>
    <p>My right hand, so cold, felt like it wasn&rsquo;t even mine.</p>
    <p>I wanted to drop it to the ground but I couldn&rsquo;t let go.</p>
    ${storyImage('K/1')}
    <p>I fumbled for my phone, the numbers blurring, my fingers shaking as I tried to call her again.</p>
    ${storyImage('K/2')}
    <p>Still no answer.</p>
    ${storyImageRight('K/2_1')}
    <p>I was starting to think she gave me the wrong number on purpose. I let it drop and buried my hand back into my pocket. The temperature wasn&rsquo;t that low but I&rsquo;d been cursed with this persistent feeling of cold since that night.</p>
    <p><span class="Cherie">&ldquo;Ugh, you&rsquo;re till wearing that?&rdquo;</span> Her voice cut through the wind like a blade. <span class="Cherie">&ldquo;You look hideous in black.&rdquo;</span></p>
    <p>I looked up, and there she was. Bruised but still stunning, her hair wild in the wind, she had come again for the third morning in a row, bringing those colorful flowers for the graves.</p>
    <p>A red rose for Jade, a chrysanthemum for Alyssa, a poppy for Kitara, a sunflower for Goldie, and a lily for Ethyl.</p>
    <p>I brought nothing but the weight of steel in my hand. She stepped closer, took my hand, and kissed my cheek. It was the same way I had kissed her the day we met. This time, it felt like goodbye.</p>
    <p><span class="Cherie">&ldquo;I&rsquo;m leaving,&rdquo;</span> she said, like it was the simplest thing in the world.</p>
    <p><span class="Kelsi">&ldquo;I know,&rdquo;</span> I replied. She tried to take it from my hand but my grip tightened on the gun.</p>
    <p><span class="Cherie">&ldquo;It&rsquo;s time to let go, Kelsi.&rdquo;</span></p>
    <p>But I couldn&rsquo;t. Not yet. <span class="Kelsi">&ldquo;Not before I kill them all.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;You can&rsquo;t do it alone.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Then join me,&rdquo;</span> I whispered, desperation clawing at my voice. <span class="Kelsi">&ldquo;We&rsquo;ll end them together.&rdquo;</span></p>
    <p>I had no right to ask her that after I kicked her out. But she was the only good fighter I knew, other than Tiffany. I&rsquo;d learned to appreciate Cherie&rsquo;s powers, she was the only one to survive the hangman after all, and I was willing to beg for her help if had to.</p>
    ${storyImageRight('K/3')}
    <p><span class="Kelsi">&ldquo;Ma ch&eacute;rie, my darling...&rdquo;</span>
    <p>She shook her head, a sad smile playing on her lips. <span class="Cherie">&ldquo;I don&rsquo;t wanna die, Kelsi. There are too many joys in this life I don&rsquo;t want to miss.&rdquo;</span></p>
    <p>Her eyes sparked with a memory I couldn&rsquo;t share. Someone she loved. <span class="Cherie">&ldquo;I don&rsquo;t want you to die either,&rdquo;</span> she continued.</p>
    <p><span class="Kelsi">&ldquo;So, what am I supposed to do? Forget the ones who died? Forgive the ones who live?&rdquo;</span> I&nbsp;exploded in her face.</p>
    <p>She didn&rsquo;t answer, and I could see in her fading eyes her retreating into that safe place she always kept for herself.</p>
    <p><span class="Kelsi">&ldquo;Cherie, I... I woke up this morning and I asked myself: Who am I? I was once a Dino, I used to be a Heroine, now I&rsquo;m nothing. I saw the gun and I saw the image of an angry avenger in the mirror. That&rsquo;s something. Blue is gone. Hmm, even Kelsi is gone. This gun is still here, just like the mafia are,&rdquo;</span> I mumbled, mostly to myself.</p>
    <p><span class="Kelsi">&ldquo;What are you going to do now, Cherie? Who are you from now on?&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;I&rsquo;m an outsider now,&rdquo;</span> she said, her voice light, almost carefree. She twirled, clapping her hands like it was all a game. I chuckled despite myself&mdash;her spirit was contagious, maddeningly so.</p>
    <p><span class="Kelsi">&ldquo;Outsider, huh? Is that when you don&rsquo;t care about justice and injustice? Not a scum, nor a heroine? You&rsquo;re just gonna watch this war from your balcony? Don&rsquo;t you care about the kids anymore? Those soon-to-be orphans?&rdquo;</span></p>
    <p>She didn&rsquo;t flinch <span class="Cherie">&ldquo;Not if it means I don&rsquo;t get to have my own.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Me neither. I don&rsquo;t care about the oppressed anymore. I only want vengeance.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;There&rsquo;s no point in vengeance. You would only result in more people losing their lives, look how many have died already because of you.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;I would love to see the day where I regret killing them all.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;You can&rsquo;t bring them back, Kelsi,&rdquo;</span> she said, her voice soft, almost pitying. <span class="Cherie">&ldquo;They&rsquo;re all gone.&rdquo;</span></p>
    <p>But I wasn&rsquo;t ready to believe that. Not yet.</p>
    <p>I remembered what happened early this morning.</p>
    ${appendLinkRow('Act II (interlude)', '2c', true)}
        `
        )
    
    section2.appendChild(row2b);
    
    
    
    
    const row2c = storyRow('2c', 'INT. KITCHEN<br>EARLY MORNING', 
    `
    ${storyAudio('audio/Serpentine-Trek', )}
    ${storyImage('K/5', 'I feel naked when I think of him...')}
    ${storyImage('K/4')}
    <p><span class="Michael">&mdash;Are you still grieving, Kelsi? Would you like me to unleash you again?</span></p>
    <p>His voice is cold and hard as steel, his words dripping with merciless intentions. My body hair stands on end.</p>
    <p><span class="Michael">&mdash;I will ravage your tiny heart with my monstrous cock and fuck all your sorrows away.</span></p>
    <p>A surge of dread courses through me as he kisses the nape of my neck, his arms snaking around my trembling ribs. His whispers are like venom in my veins, sending paralyzing shivers through my brain. He presses me against the kitchen counter, his chest crushing me from behind. I try to lean away but his grip is unyielding.</p>
    <p>He yanks up my shirt to my neck, aggressively, violently, without my consent.</p>
    <p>My frozen body can only tremble as he assaults my spine with wet, cold kisses that feel like stabs from that weird gun with the black diamond inside. My mind is blank and dark, trapped in a state of terror. What is happening to me?</p>
    <p>He kisses his way down to my tailbone, growling hungrily. His lips are abusing my back, his hands are violating me, bending me so he can get more access to my spine.</p>
    <p>He moves his hand into my jeans and pulls them down. He knows he&rsquo;s violating me but he has no remorse. His lips and tongue caress my sacrum. I&rsquo;m too afraid to fight back.</p>
    <p>Just as he bites me just above my ass, I freak out.</p>
    <p>Something snaps inside me and I push him away with all my strength. Pulling down my shirt and up my pants, I glance at those two black holes in the middle of his eyes, full of anger and bloodlust.</p>
    <p>I walk out of the kitchen as fast as I can. Luckily, he doesn&rsquo;t follow. Each step takes me further from that evil aura of his, and I feel better.</p>
    <p>Yet in spite of that, fire burns in my loins and every footstep feels like a battle cry. My blood is boiling and my breath is shallow. I can&rsquo;t get the snake&rsquo;s hisses out of my mind. <span class="Michael">&ldquo;Fuck you, Kelsi. And fuck your damn heart.&rdquo;</span></p>
    <p><span class="Kenzie">KENZIE</span><br />Kelsi, can I ask you for a favor?</p>
    <p>It&rsquo;s springtime. There&rsquo;s a ${appendLinkRowInline('breeze', '2d', true)}.</p>
    `
    )
    
    const row2d = storyRow('2d', 'INT. MAIN HALL<br>EARLY MORNING', 
        `
        ${storyAudio('audio/Comfortable-Mystery')}
    ${storyImage('K/6', 'A favor?')}
    <p>Spring air seeped through the open window in my room. Kenzie stood in the doorway, a gust of morning breeze nudging her forward.</p>
    <p><span class="Kelsi">&ldquo;What do you want?&rdquo;</span> I asked, my voice cold and indifferent.</p>
    <p>She stepped closer, her voice trembling with something between desperation and shame. <span class="Kenzie">&ldquo;Can I borrow some money?&rdquo;</span></p>
    <p>My eyes narrowed, as if trying to see through the smoke of an invisible cigarette.</p>
    <p><span class="Kelsi">&ldquo;No. You never give back what you take.&rdquo;</span></p>
    <p>Her breath hitched, and the next words came out small, like a prayer.</p>
    <p><span class="Kenzie">&ldquo;Please, big sis, please.&rdquo;</span></p>
    <p>I felt the little brat&rsquo;s hug before it landed&mdash;a warm, needy embrace that made me stiffen. Kenzie stepped back, her hands clasped together like she&rsquo;s praying, her lips pushed out, eyes soft with a kind of practiced innocence.</p>
    <p>But I&rsquo;d been down this road too many times. I&rsquo;d seen the end of this reel.</p>
    <p><span class="Kelsi">&ldquo;I&rsquo;m not giving you any money, Kenzie. Go steal from him like you always do.&rdquo;</span></p>
    <p>Her face fell, shadows deepening in the lines of her cheeks.</p>
    <p><span class="Kenzie">&ldquo;He&rsquo;s not talking to me. He&rsquo;s... avoiding me like the plague since he changed. And I don&rsquo;t know where he keeps his money anymore.&rdquo;</span></p>
    <p>I watched my sister wilt, embarrassment and sadness pooling in her eyes. I almost felt sorry for her. Almost.</p>
    <p>I looked away, my voice softening with pity.</p>
    <p><span class="Kelsi">&ldquo;Sorry, baby girl. I don&rsquo;t have any money.&rdquo;</span></p>
    <p>Her voice hardened suddenly, sharply cutting through my haze.</p>
    <p><span class="Kenzie">&ldquo;The heroine business isn&rsquo;t going well, huh?&rdquo;</span></p>
    <p>My hand snapped up, covering Kenzie&rsquo;s mouth before she could say another word.</p>
    <p><span class="Kelsi">&ldquo;Shh-shhhh. What the fuck? Are you crazy?&rdquo;</span></p>
    <p>She opened her palm in front of her and I took my wallet out.</p>
    <p>I slapped four fifty-dollar bills into Kenzie&rsquo;s open palm. She looked at them unimpressed.</p>
    <p><span class="Kelsi">&ldquo;That&rsquo;s all I got.&rdquo;</span></p>
    <p>Kenzie fanned the bills out, then looked up at me with a familiar, demanding look. I wanted to smack her in the face so fucking bad. I digged out two more hundred-dollar bills, holding them just out of reach. The moment she tried to grip them, I pulled the money back. She clearly didn&rsquo;t like that. I dropped to one knee, leveling my gaze with Kenzie&rsquo;s.</p>
    <p><span class="Kelsi">&ldquo;I need you to answer one question first.&rdquo;</span></p>
    <p>Kenzie&rsquo;s eyes flickered with interest.</p>
    <p><span class="Kelsi">&ldquo;Do you know anything about mind control?&rdquo;</span></p>
    <p>Confusion deepened in her, a frown pulling at her brow.</p>
    <p><span class="Kenzie">&ldquo;Mind control of the masses? Thought control?&rdquo;</span></p>
    <p>I shook my head slowly, my voice barely above a whisper.</p>
    <p><span class="Kelsi">&ldquo;No... I&rsquo;m talking about wiping someone&rsquo;s mind clean and making them a slave.&rdquo;</span></p>
    <p>Kenzie recoiled, unease creeping into her expression.</p>
    <p><span class="Kenzie">&ldquo;There&rsquo;s no such thing.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Kenzie, I&rsquo;m not trying to scare you. Just humor me for a second. If a scientist deleted someone&rsquo;s mind, could they ever get it back?&rdquo;</span></p>
    <p><span class="Kenzie">&ldquo;I don&rsquo;t know. Uhh, I&rsquo;ll ask Mandy for you, she loves sci-fi stuff.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Kenzie, I really need you to answer this for me. You&rsquo;re the smartest person I know and I don&rsquo;t know what to do without you. Please think about it. What if some scientist had technology so advanced they could steal someone&rsquo;s memories and thoughts?&rdquo;</span></p>
    <p>I leaned in closer, the bills crinkling in my hand.</p>
    <p><span class="Kelsi">&ldquo;Can you restore a lost mind?&rdquo;</span></p>
    <p>Kenzie glanced at the money as I fanned my face with it, her thoughts visibly racing.</p>
    <p><span class="Kenzie">KENZIE</span><br />Are you serious right now?</p>
    <p><span class="Kelsi">KELSI</span><br />I&rsquo;m dead serious.</p>
    <p><span class="Kenzie">KENZIE</span> (sighs)<br />I don&rsquo;t know what you&rsquo;re talking about, Kelsi. Maybe... if they were smart enough to take someone&rsquo;s mind, they might be smart enough to keep a backup.</p>
    <p>I felt a wave of relief wash over me.</p>
    <p><span class="Kelsi">KELSI</span> (lips curling into a cold, grateful smile)<br />That&rsquo;s all I needed to hear. Thank you, baby girl.</p>
    <p>Kenzie chuckled as I pressed a kiss to her cheek. I rised, snatching the fifty-dollar bills back from her tiny hand.</p>
    <p><span class="Kenzie">KENZIE</span> (face flushing with anger, her eyes blazing)<br />You bitch!</p>
    ${appendLinkRow('Mirror', '2e')}
        `
        )
    
    const row2e = storyRow('2e', 'INT. MY ROOM<br>EARLY MORNING', 
        `
    ${storyImage('K/kelsi_room')}
    <p>I pushed Kenzie over and walked into my room, closing the door behind me. I opened the drawer to my nightstand, revealing the cold, metallic gun and the sleek white glass one inside. My fingers hovered over them. Just like every morning since the incident, I pondered on which gun to pick up. I counted my bullets&mdash;only one left.</p>
    <p>I took my clothes off and wore my new suit. The mirror reflected my image back, but all I could see was a stranger.</p>
    ${storyImage('K/7')}
    <p>My breath fell out deeply as I ran my fingers through my hair. I&rsquo;d tried so many times to tell my brother ny secret, but the words never came out right. I wanted to let him in, but something always held me back. I&rsquo;d kissed so many cheeks, held so many hands, but with him... it&rsquo;s different.</p>
    <p>I stared at my reflection, my heart pounding.</p>
    <p><span class="Kelsi">&ldquo;Who am I?&rdquo;</span> I whispered to the woman in the mirror.</p>
    <p>The answer echoed back in my mind.</p>
    <p><span class="Kelsi">&ldquo;I&rsquo;m anything but your bitch.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;I&rsquo;m Kelsi. And I&rsquo;m better than you.&rdquo;</span></p>
    ${appendLinkRow('Act III', '2f', true)}
        `
        )
    
    const row2f = storyRow('2f', 'EXT. GRAVEYARD<br>MORNING', 
        `
        ${storyAudio('audio/Night-on-the-Docks')}
    <p>The morning fog clung to the gravestones like a shroud, making the place feel even colder than it already was. I stood there, hands deep in my coat pockets, staring at the names etched in stone. Cherie was beside me, her face set in that easy, carefree expression she always wore.</p>
    ${storyImageRight('K/3')}
    <p><span class="Kelsi">&ldquo;Goodbye, outsider,&rdquo;</span> I said, my voice flat and devoid of emotions.</p>
    <p>She smirked, that same playful glint in her eyes. <span class="Cherie">&ldquo;I&rsquo;m still gonna be in town. Call me whenever you need me. Hey, I&rsquo;ll make you a new costume. Do you want it to be red this time?&rdquo;</span></p>
    <p>Red.</p>
    <p>It took me back, back to the days when we were just kids in costumes, running around thinking we were invincible.</p>
    ${storyImage('K/8')}
    <p>Cherie made all our costumes, with her own hands. I remember when she made the first two, Jade and I liked them so much, especially the red one. We were only Dinos back then and both of us wanted to be Red. I remembered how Jade and I had fought over the red costume and our match was drawn as usual.</p>
    <p>In the end, we let fate decide. Rock-paper-scissors. I ended up the Blue Dino, and Jade got to be Red. Funny how something so simple felt like the most important thing in the world back then.</p>
    ${storyImage('K/9')}
    <p>Cherie&nbsp;dressed herself in a costume too and started tagging along on our excursions, always late, always acting like she was some kind of superhero. And always with that damn smile. So happy to just be there. Jade didn&rsquo;t like her at first, didn&rsquo;t like having to be extra careful for Cherie&rsquo;s sake, always looking out for her and protecting her. She hated that never fading smile no matter how dangerous the situation was.</p>
    ${storyImage('K/10')}
    <p>We tried to ditch her more than once. Jade, especially, wasn&rsquo;t shy about letting Cherie know she wasn&rsquo;t welcome, and was quite cruel to her. But Darling kept coming back, kept trying to be part of our little gang.</p>
    <p>Cherie wasn&rsquo;t the superwoman she pretended to be, but she&rsquo;s super selfish. Cherie does whatever Cherie wants, no matter what or who is involved. She sees what she wants to see and hears what she wants to hear. You couldn&rsquo;t tell her no; you just had to go along with it.</p>
    <p>I&rsquo;ll admit it, though&mdash;I was always glad to see her. She brought life to our little crew, even if her antics annoyed the hell out of Jade. Life of the party I used to call her. The way she Nyah&rsquo;ed and Ooh&rsquo;ed her way through waves of villains and mafia henchmen cracked me up every time. Jade, on the other hand, just rolled her eyes.</p>
    ${storyImageLeft('K/11_1')}
    <p>Eventually, Cherie proved herself, and we let her into the Dinos for real, and immediately she decided to change the name of the group. How dare she? Heroines? Who does she think she is?</p>
    <p>But, as always, we went along with it. New girls joined later, handpicked by Jade and me. We trained them, taught them everything we knew. Cherie learned on the fly, the hard way. But she still found time to make all the costumes. Hell, without those outfits, we wouldn&rsquo;t have convinced a single one of those girls to join us. The costumes made them feel like they could take on the world. Cherie designed all our costumes, sewed them all, even named a handful of them. She did all that with so much care and love, I never heard a heroine complain about a costume&mdash;they wouldn&rsquo;t dare anyway. I&rsquo;d have knocked some sense into a heroine who did less than rain Cherie with compliments for her work.</p>
    <p>She gave each girl one, maybe two costumes. But she had plenty for herself. Before Cherie, we were just two punks fighting the system. With her, we became the mighty Heroines. Good times. It&rsquo;s all gone now.</p>
    ${storyImageRight('K/3')}
    <p>I snapped back to the present. <span class="Kelsi">&ldquo;I&rsquo;ll think about it,&rdquo;</span> I told her.</p>
    <p>She grinned, that same irritating, knowing grin. <span class="Cherie">&ldquo;I think it&rsquo;s goodbye then.&rdquo;</span></p>
    <p>She pulled me into a hug, tight enough that I could feel the steel in her muscles. <span class="Cherie">&ldquo;Good luck with your revenge against the mafia,&rdquo;</span> she whispered. Then, with a voice as cold as the morning air and as dangerous as a loaded gun, she added, <span class="Cherie">&ldquo;But if you break my toy, I WILL KILL YOU!&rdquo;</span></p>
    <p>Her grip tightened, ribs groaning under the pressure. I wheezed, <span class="Kelsi">&ldquo;Ughh- What... ugh ... toy?&rdquo;</span></p>
    <p>She let her bearhug go just as quickly, the pain leaving as fast as it had come.</p>
    <p>She laughed, light and carefree as if she hadn&rsquo;t just threatened my life. <span class="Cherie">&ldquo;Nothing. It&rsquo;s just a joke.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;A joke?&rdquo;</span> I growled, still trying to catch my breath. <span class="Kelsi">&ldquo;You almost crushed my ribs.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;Oh, you&rsquo;re overreacting,&rdquo;</span> she said with a dismissive wave. <span class="Cherie">&ldquo;Goodbye, K&mdash;oh, I almost forgot!&rdquo;</span> She reached into her purse and pulled out an envelope, handing it to me.</p>
    <p><span class="Cherie">&ldquo;Open it once you get h&mdash;&rdquo;</span> she started to say, but I was already tearing it open. Inside was a vial, filled with... blue diamonds?</p>
    <p><span class="Kelsi">&ldquo;What the fuck?&rdquo;</span> I muttered, staring at the shimmering shards.</p>
    <p><span class="Cherie">&ldquo;You told me you needed money, so...&rdquo;</span> she trailed off.</p>
    <p>I couldn&rsquo;t believe my eyes. <span class="Kelsi">&ldquo;Cherie, I never asked for so much money! Besides, my money problems are solved now. Wait. How did you get your hands on this?&rdquo;</span></p>
    <p>She just shrugged.</p>
    <p><span class="Kelsi">&ldquo;Cherie, these diamonds were stolen recently. They were all over the news. Where did you find them?&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;I joined a new gang,&rdquo;</span> she said casually.</p>
    <p>My blood ran cold. <span class="Kelsi">&ldquo;YOU WHAT?&rdquo;</span></p>
    <p>I squared my shoulders with hers, my body tensing, ready for a fight. <span class="Kelsi">&ldquo;Cherie, who the fuck are the ${appendLinkInline('Outsiders', 'section3')}?&rdquo;</span></p>
    
        `
        )
    
    const section3 = newSection(3);
    
    
    const row3a = storyRow('3a', 'Day 1', 
    `
    <h2 data-animate class="Boyhood-Header centralized">17 August, 2006 <span style="font-size: 2rem;">(4 years and 2 seasons before the end)</span></h2>
    `)
    const row3b = storyRow('3b', 'INT. KITCHEN<br>EARLY MORNING', 
    `
    ${storyAudio('audio/Shadow-Of-A-Doubt', false)}
    <p><span class="Michael">MICHAEL</span> (sauntering into the kitchen, tipping an invisible hat)<br />Morning, m&rsquo;Lady.</p>
    ${storyImageRight('mom')}
    <p><span class="Lena">MOM</span> (soft chuckle)<br />Good Morning, honey. Today&rsquo;s a special day for you, and I&rsquo;m so happy!</p>
    <p><span class="Michael">MICHAEL</span> (with a smirk)<br />And why&rsquo;s that? It&rsquo;s just the first day of school. Big deal. You&rsquo;re always so excited about everything.</p>
    <p>Mom pulled out a party blower and gave it a playful toot.</p>
    <p><span class="Lena">MOM</span><br />Happy 18th birthday!</p>
    <p><span class="Michael">MICHAEL</span> (shrugging)<br />Oh, right. That too, I guess.</p>
    <p>Mom stepped closer, her eyes locking with his.</p>
    <p><span class="Lena">MOM</span><br />I can&rsquo;t believe how quickly you&rsquo;ve grown up. Feels like just yesterday, you were my baby.</p>
    <p>A tear glistened in the corner of her eye as her gaze lingered on Michael&rsquo;s.</p>
    <p><span class="Michael">MICHAEL</span> (rolling his eyes, teasing)<br />Geez, Mom, don&rsquo;t get all dramatic on me. It&rsquo;s not like I shot up a foot overnight. I&rsquo;m the same guy I&rsquo;ve always been. It&rsquo;s just... now I can do more stuff legally, I guess. No big deal.</p>
    <p><span class="Lena">MOM</span> (smiling, pinching his cheek)<br />Don&rsquo;t be so grumpy. Look at you, all grown up and handsome! Those girls at school won&rsquo;t be able to keep their eyes off you. I&rsquo;m so jealous!</p>
    <p>She moved in for a hug, but Michael lightly pushed her away.</p>
    <p><span class="Michael">MICHAEL</span> (half-laughing, half-serious)<br />Stop that! You&rsquo;re treating me like a kid!</p>
    <p><span class="Lena">MOM</span> (pouting playfully)<br />I just want a hug.</p>
    <p><span class="Michael">MICHAEL</span><br />No, you&rsquo;re trying to embarrass me. You can&rsquo;t do that.</p>
    <p><span class="Lena">MOM</span> (with a wicked grin)<br />Oh, I can do whatever I want!</p>
    <p>He tried to step back, but Mom reached for his shirt. He slapped her hand away, and she giggled, attempting again with her other hand.</p>
    <p><span class="Michael">MICHAEL</span> (laughing, exasperated)<br />Hey, cut it out! You can&rsquo;t do that to a grown man like me. You&rsquo;re... legally not allowed anymore.</p>
    <p><span class="Lena">MOM</span><br />Oh yeah?</p>
    <p><span class="Michael">MICHAEL</span><br />Yeah! I&rsquo;ll report you to the police.</p>
    <p>Mom burst out laughing, and as she did, Michael seized the opportunity to dash away. But she was quicker, catching him from behind, her laughter vibrating against his neck.</p>
    <p><span class="Lena">MOM</span> (whispering, teasing)<br />No, no, no. Don&rsquo;t tell the police on me. I&rsquo;m sorry.</p>
    <p>She rubbed slow, comforting circles on his chest, her touch making him squirm.</p>
    <p><span class="Michael">MICHAEL</span><br />I&rsquo;ll report you for harassing an old man like me.</p>
    <p><span class="Lena">MOM</span> (giggling)<br />Ahahaha, nooooo.</p>
    <p>She ran her fingers through his hair.</p>
    <p><span class="Lena">MOM</span> (softly, almost possessively)<br />Mmm, I love you so much, Michael.</p>
    <p><span class="Michael">MICHAEL</span> (grinning)<br />As you should!</p>
    <p>She tightened her embrace, pressing her body against his, her nose nuzzling the back of his neck before placing a feather-light kiss on his skin. The touch sent a shiver down his spine, her lips leaving a cool, damp imprint that lingered.</p>
    <p><span class="Lena">MOM</span> (breathing him in)<br />You look so good this morning, and you smell even better. I&rsquo;m afraid some girl&rsquo;s going to steal you away from me one day.</p>
    <p>She ruffled his hair, messing it up deliberately, her hands roaming over his arms, his chest, his abdomen.</p>
    <p><span class="Michael">MICHAEL</span><br />Don&rsquo;t worry, Mom. I&rsquo;m not going anywhere.</p>
    <p><span class="Lena">MOM</span> (her hands moving faster)<br />Promise?</p>
    <p><span class="Michael">MICHAEL</span><br />Of course not. I&rsquo;m not going to leave you for some sexy high school girl&mdash;Hey! Watch it, woman! You&rsquo;re messing my clothes up. (gasp) That&rsquo;s what you&rsquo;re doing! You&rsquo;re messing me up on purpose!</p>
    <p><span class="Lena">MOM</span> (grinning devilishly)<br />They&rsquo;re not gonna take you from me!</p>
    <p><span class="Michael">MICHAEL</span><br />Leave me alone, you psycho!</p>
    <p>He wrestled free from Mom&rsquo;s grip and surveyed his crumpled clothes and tousled hair as she erupted into laughter. Disappointment flickered across his face as he gazed at her.</p>
    <p><span class="Lena">MOM</span> (still laughing)<br />Okay, okay, I&rsquo;m sorry. Enough playing around. Here, I got you a gift.</p>
    <p>She handed him a small box, the size of a chocolate bar. Michael opened it immediately, revealing ten crisp $100 bills.</p>
    <p><span class="Michael">MICHAEL</span><br />A thousand dollars? Seriously?</p>
    <p><span class="Lena">MOM</span><br />Yup, that&rsquo;s your birthday gift.</p>
    <p><span class="Michael">MICHAEL</span><br />Thank you so much. That&rsquo;s the best gift ever! I&rsquo;m gonna give you a thousand kisses for that.</p>
    <p><span class="Lena">MOM</span><br />As you should. Mmmm.</p>
    <p>Mom bent slightly, leaning in with her lips puckered, waiting for a kiss.</p>
    <p><span class="Michael">MICHAEL</span><br />You&rsquo;re so lame.</p>
    ${storyImage('street')}
    <p>Without another word, he left her hanging, walking out of the room. Backpack in hand, he headed for the front door. Mom swung it open, calling after him.</p>
    <p><span class="Lena">MOM</span><br />Michael! Break those girls&rsquo; hearts for me.</p>
    <p><span class="Michael">MICHAEL</span> (without turning around)<br />Shut up, Mom!</p>
    <p>He kept walking, Mom&rsquo;s laughter echoing down the street.</p>
    
    ${appendLink('Go to school', 'section4')}
    `
    )
    
    section3.appendChild(row3a);
    section3.appendChild(row3b);
    
    
    const section4 = newSection(4);
    
    
    const row4a = storyRow('4a', 'INT. FIRST MAIN HALL<br>EARLY MORNING', 
    `
    ${storyImage('school_hall')}
    
    <p><em>I&rsquo;ll break some hearts alright,</em> the thought crossed his mind as he stepped into the school hall.</p>
    <p>First days usually got his nerves going, but not today. Today, he wasn&rsquo;t nervous&mdash;just irritated by the chaos around him. His eyes scanned the crowd, searching for a familiar face. He walked down the long main hall, and then... he saw her.</p>
    ${storyImageLeft('gina_hall')}
    <p>Gina. The hottest girl in school&mdash;and probably the universe, he thought to himself.</p>
    <p>His heart sped up, sweat beading on his brow. She was heading his way, and for once, he didn&rsquo;t want to look away. Normally, he&rsquo;d wimp out, but today, she looked hotter than ever. Mom&rsquo;s words echoed in his mind, the memory of her kiss lingering on his neck. He&rsquo;d wanted to talk to Gina for years but never had the courage. Today, he decided, will be different.</p>
    <p><em>Let&rsquo;s break a heart today.</em></p>
    <p>He swallowed hard and took a deep breath, his nerves frazzled as he stepped forward.</p>
    <p><span class="Michael">&ldquo;Hey, Gina,&rdquo;</span> he called out, trying to sound cool, but his voice betrayed him, cracking with nerves.</p>
    <p>Gina turned, her eyes sliding over him with the barest hint of recognition. <span class="Gina">&ldquo;Who are you?&rdquo;</span> she asked, her tone laced with disdain.</p>
    <p><span class="Michael">&ldquo;I&rsquo;m Michael,&rdquo;</span> he stammered, clearing his throat, <span class="Michael">&ldquo;we were in the same class last year.&rdquo;</span></p>
    <p>Her eyes narrowed slightly, sizing him up with a slow, dismissive once-over. <span class="Gina">&ldquo;I don&rsquo;t remember you. What do you want, bozo?&rdquo;</span></p>
    <p>Michael&rsquo;s heart plummeted and his confidence shattered. He opened his mouth to speak, but before he could muster a response, Rick Davidson&mdash;towering, intimidating, and every bit fit to be the school&rsquo;s alpha male&mdash;stepped in, positioning himself between Michael and Gina.</p>
    ${storyImageRight('rick_hall')}
    <p><span class="Rick">&ldquo;Speak up, man,&rdquo;</span> Rick taunted. <span class="Rick">&ldquo;She can&rsquo;t understand you. What do you want from her?&rdquo;</span></p>
    <p>Michael&rsquo;s temper flared. <span class="Michael">&ldquo;I didn&rsquo;t speak to you, Rick. Mind your own fucking business.&rdquo;</span></p>
    <p>He shoved Rick aside, harder than he intended. Gina screamed as Rick stumbled, almost crashing into her. Panic flared in Michael&rsquo;s chest&mdash;what if she got hurt? But Rick quickly regained his balance, and his face twisted into a sneer. Without warning, he grabbed Michael by the collar and slammed him against a locker, his forearm pressing hard against Michael&rsquo;s throat.</p>
    <p><span class="Rick">&ldquo;What are you doing, man? You know I&rsquo;m gonna fuck you up, right? Why the fuck are you talking to my girl?&rdquo;</span> Rick growled, his face inches from Michael&rsquo;s.</p>
    <p>Michael&rsquo;s heart stopped. <em>They&rsquo;re dating now?</em></p>
    <p>Rick&rsquo;s arm pushed tighter against his throat, making it hard to breathe, let alone speak.</p>
    <p><span class="Rick">&ldquo;What? You can&rsquo;t talk? Are you mute like your dummy little sister?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;I didn&rsquo;t want anything. I was just saying hi,&rdquo;</span> Michael choked out</p>
    <p>Rick&rsquo;s eyes narrowed further. <span class="Rick">&ldquo;Well, say hi to my fist,&rdquo;</span> he snarled, drawing back to deliver the blow.</p>
    <p>Michael squeezed his eyes shut, bracing for the inevitable punch, but it never came.</p>
    <p>The hallway was filled with murmurs, a crowd gathering to watch the unfolding drama.</p>
    <p><strong>&ldquo;Oh, shit, a big fight&rsquo;s gonna start,&rdquo;</strong> someone whispered.</p>
    <p><strong>&ldquo;Nah, it&rsquo;s just Rick bullying a nobody,&rdquo;</strong> another voice responded.</p>
    <p><strong>&ldquo;That&rsquo;s Kelsi&rsquo;s brother, right there,&rdquo;</strong> someone else chimed in.</p>
    <p><strong>&ldquo;Oh, shit. Hell&rsquo;s gonna break loose today.&rdquo;</strong></p>
    <p>Rick&rsquo;s grip loosened immediately. <span class="Rick">&ldquo;Is that true? You&rsquo;re Kelsi&rsquo;s brother?&rdquo;</span></p>
    <p>Michael didn&rsquo;t answer, just glared at Rick, venom in his eyes. Rick stepped back, releasing him, then awkwardly patted Michael&rsquo;s shoulder, trying to play off his sudden fear. He even pulled Michael&rsquo;s collar and straightened his shirt for him.</p>
    <p><span class="Rick">&ldquo;Sorry, man, didn&rsquo;t know who you were. No hard feelings, huh?&rdquo;</span> Rick extended his fist for a bump, but Michael ignored it, shoving past him. Disappointed groans rippled through the crowd as they realized there would be no fight.</p>
    <p>Michael made a beeline for his next class. He barely took two steps and an angel had stuck beside him. <span class="Milena">&ldquo;Yo,&rdquo;</span> she called out.</p>
    ${storyImageLeft('milena_hall')}
    <p><span class="Michael">&ldquo;What&rsquo;s up?&rdquo;</span> he muttered without turning, still fuming.</p>
    <p><span class="Milena">&ldquo;You should&rsquo;ve told me you were gonna pick a fight. I wouldn&rsquo;t have missed that for the world,&rdquo;</span> Milena laughed, lunging to match Michael's pace.</p>
    <p><span class="Michael">&ldquo;So, Gina and Rick are dating now?&rdquo;</span></p>
    
    `
    )
    
    section4.appendChild(row4a);
    
    
    const row4b = storyRow('4b', 'INT. SECOND MAIN HALL<br>EARLY MORNING', 
    `
    <p><span class="Milena">&ldquo;Is that why you were fighting Rick? You gotta be insane.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;But I didn&rsquo;t know that before I approached her.&rdquo;</span></p>
    <p>Milena&rsquo;s eyes widened in disbelief. <span class="Milena">&ldquo;Wait, you actually approached her?!! Woah, woah, wait.</span> (Michael stopped)<span class="Milena"> Do you want to tell me... that after all these years, you finally</span><span class="Milena">decided to man up and talk to the girl of your dreams, the girl you&rsquo;ve always drooled thinking about?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Yup,&rdquo;</span> Michael confirmed, a self-deprecating chuckle escaping his lips. <span class="Michael">&ldquo;I walked through the door feeling like a big man and I saw her walking and I thought... well, you only live once.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;And you walked up to her, you... you collected enough courage to stop her in her tracks,</span> (chuckle) <span class="Milena">only... only when she started dating the biggest, well, second biggest jock in the school?&rdquo;</span></p>
    <p>She wanted to laugh so bad and she hardly kept the composure of her face while trying to complete her weak sentence.</p>
    <p><span class="Michael">&ldquo;Yup.&rdquo;</span></p>
    <p>Milena tried to hold back her laughter but failed miserably when Michael palmed his own face, bursting into a fit of giggles. When her fit was over, she raised her hand for a high five.</p>
    <p><span class="Milena">&ldquo;Wow, you really are the unluckiest bastard in the universe.&rdquo;</span></p>
    <p>Michael slapped her hand in a high five. <span class="Michael">&ldquo;You&rsquo;re goddamn right!&rdquo;</span></p>
    ${storyImage('milena1')}
    <p>So this is Milena. She&rsquo;s Michael&rsquo;s best friend. She used to be his &lsquo;school best friend,&rsquo; but after Kenzie turned into a weirdo around him, Milena became his best friend, period. Inside the school walls, they&rsquo;re inseparable. Two peas in a pod. Or two ass cheeks in a panty, as Milena would say.</p>
    <p>Milena&rsquo;s the only good thing about this school. She&rsquo;s smart, she&rsquo;s funny, and she&rsquo;s really, really, really beautiful.</p>
    <p>They became friends four years ago after he stupidly ran into a pole on the school grounds and knocked himself out.</p>
    <p>Back then, he didn&rsquo;t have many friends, and he wasn&rsquo;t exactly likable. Milena took pity on him, because no one else would bother, so she decided to wake him up herself.</p>
    <p>As he came to a wake and opened his eyes to her, he freaked out and screamed, <span class="Michael">&ldquo;Ah! Don&rsquo;t take me to heaven!&rdquo;</span></p>
    <p>He remembers the look of surprise on her face. After a moment of processing what she had just heard, Milena burst out laughing, almost rolling on the ground.</p>
    <p>You see, as criminally beautiful as she is, Milena wasn&rsquo;t popular at school either. Her family had moved in town four years ago, and almost every boy who saw her tried to hit on her. No wonder she was a bit intimidated by people here. And as he&rsquo;d later find out, she wasn&rsquo;t even interested in boys.</p>
    <p>So, given that every student either hit on her or acted awkwardly around her, she avoided most students. She gained a reputation for being arrogant, as if she thought she was better than everyone else. People harassed her at first, calling her names and telling her to get off her high horse. But she didn&rsquo;t care and kept to herself, speaking to nobody. Eventually, people just learned to ignore her.</p>
    <p>But she wasn&rsquo;t fazed by Michael. Initially, she suspected it was all a ploy, thinking he&rsquo;d faked unconsciousness just to talk to her. She found the notion both hilarious and pathetic. He insisted it was her fault, claiming their brief eye contact they had before the accident distracted him. She felt no remorse whatsoever and actually found it amusing that her presence had momentarily scared him. The whole thing was very funny to her.</p>
    <p>And ever since, it became a running joke between them that he called her an angel.</p>
    <p>But that small accident wasn&rsquo;t the reason she stuck with him. Why would an angel fall from the sky and be his buddy, you might ask? Well, it&rsquo;s because she wanted to get closer to...</p>
    ${storyImageRight('ned_hall')}
    <p><span class="Ned">&ldquo;Hey, guys. I want a high five too.&rdquo;</span></p>
    <p>Ned approached them with an eager smile, a bit too wide-eyed, like a lost puppy hoping to be adopted.</p>
    <p>Milena gave Ned a high five, nudging him to turn towards Michael, so he gestured for another high five. Michael&rsquo;s expression darkened, and in one swift move, he grabbed Ned by the shirt, yanking him closer. The suddenness of it made Ned whimper, his eyes now wide with fear.</p>
    <p><span class="Michael">&ldquo;What the fuck do you want, fatso?&rdquo;</span> Michael snarled, his voice low with malicious intent.</p>
    <p>Ned&rsquo;s courage crumbled. He stuttered, his words a shaky mess. <span class="Ned">&ldquo;I j-just want to... h-hang out with you... guys?&rdquo;</span></p>
    <p>Michael wasn&rsquo;t having it. He raised his fist, holding it menacingly close to Ned&rsquo;s face, the threat of violence clear in his eyes. <span class="Michael">&ldquo;Get the fuck out of here before I break your stupid face.&rdquo;</span></p>
    <p>Ned&rsquo;s breath hitched, and he nodded frantically. As soon as Michael let go, Ned bolted, practically tripping over his own feet as he fled. Michael watched him go, a smirk curling on his lips as he muttered, <span class="Michael">&ldquo;Pathetic.&rdquo;</span></p>
    <p>Milena, who had been silent up until now, stepped closer, her brow furrowed in disapproval. <span class="Milena">&ldquo;What did you do that for? He just wanted to hang out.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;He can&rsquo;t hang out with us! He&rsquo;s a fucking loser,&rdquo;</span> Michael shot back, his anger still simmering.</p>
    <p>Milena crossed her arms, her tone firm but calm. <span class="Milena">&ldquo;We&rsquo;re losers too, Michael. It only makes sense that he hangs with us.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;No, Milena, we&rsquo;re not losers,&rdquo;</span> Michael insisted, his voice softening as he tried to justify himself. <span class="Michael">&ldquo;We&rsquo;re just... average. We&rsquo;re bang average.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;Average? What does that even mean?&rdquo;</span> Milena asked, her voice tinged with disbelief. <span class="Milena">&ldquo;And anyway, if you don&rsquo;t like him, you could&rsquo;ve just told him off nicely. You didn&rsquo;t have to threaten him and scare him. That was totally unnecessary and uncalled for. Why did you do that?&rdquo;</span></p>
    <p>Michael sighed, running a hand through his hair, his earlier bravado fading. <span class="Michael">&ldquo;Ugh, I don&rsquo;t know. Maybe I was just blowing off steam after wimping out with that jerk Rick. Look, I&rsquo;m sorry.&rdquo;</span></p>
    <p>Milena&rsquo;s gaze softened, but she wasn&rsquo;t letting him off the hook. <span class="Milena">&ldquo;Go apologize to him, not me.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;I&rsquo;m not gonna look for him,&rdquo;</span> Michael muttered, his voice stubborn. <span class="Michael">&ldquo;He&rsquo;ll show up again later, I&rsquo;m sure.&rdquo;</span></p>
    <p>Milena shook her head, clearly not satisfied. <span class="Milena">&ldquo;So... what did you mean by &lsquo;bang average&rsquo;?&rdquo;</span></p>
    <p>Michael&rsquo;s eyes brightened as he leaned in. He put his arm around Milena&rsquo;s shoulder and dragged her by his side.</p>
    ${storyImage('pyramid0')}
    <p><span class="Michael">&ldquo;Well, you see? Not all students are equal in this school. We&rsquo;re divided into classes of what I call... The Pyramid of Popularity.&rdquo;</span></p>
    <p>Milena groaned, burying her face in her palms, clearly unimpressed with his metaphor. <span class="Milena">&ldquo;You&rsquo;ve got to be kidding me.&rdquo;</span></p>
    ${storyImage('pyramid2')}
    <p><span class="Michael">&ldquo;The pyramid has many levels,&rdquo;</span> Michael continued, undeterred. <span class="Michael">&ldquo;Hot girls and jocks like Gina and Rick are closer to the top of the pyramid. Other students reside in lower classes depending on their social status, inside the school at least.&rdquo;</span></p>
    ${storyImage('pyramid4')}
    <p>He smirked, his eyes gleaming with disdain. <span class="Michael">&ldquo;The bottom tier is a cesspool of worthless loners like Ned.&rdquo;</span></p>
    <p>Milena rolled her eyes, her patience thinning. <span class="Milena">&ldquo;And where do we fit into your pyramid, oh wise one?&rdquo;</span></p>
    <p>Michael&rsquo;s smirk softened into a more sincere expression. <span class="Michael">&ldquo;You and I? We&rsquo;re the average joes, we&rsquo;re in the middle of the pyramid. But don&rsquo;t worry, my sweet angel,&rdquo;</span> he added, his voice dropping into a confident whisper, <span class="Michael">&ldquo;I&rsquo;m gonna climb to the top of the ladder, and I&rsquo;m gonna take you with me.&rdquo;</span></p>
    <p>Milena raised an eyebrow, clearly skeptical but amused by his determination. <span class="Milena">&ldquo;Oh yeah? And who&rsquo;s at the top of that pyramid now?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;You know who,&rdquo;</span> Michael replied, his voice taking on a reverent tone.</p>
    <p>Milena glanced around, her eyes widening as she spotted her. <span class="Milena">&ldquo;Oh, oh, she&rsquo;s coming.&rdquo;</span></p>
    ${storyImage('kelsi_cropped')}
    <p>Michael followed her gaze, and there she was, striding towards them in an elegant but menacing stride, with an air of authority that made the hallway part before her like the Red Sea.</p>
    <p>She was the most popular girl in school. Every teacher&rsquo;s pet, every simp&rsquo;s queen, every bully&rsquo;s nightmare, and the angel&rsquo;s wet dream... The enforcer of our schoolyards... The undisputed ruler of the top of the ${appendLinkRowInline('pyramid', '4b2')}.</p>
    
    `
    )

    const row4b2 = storyRow('4b2', ' ', 
        `
        
        ${storyImageCenter('kelsi_hall')}
    <p>Kelsi.</p>
    <p>Kelsi was Michael&rsquo;s twin sister, though you&rsquo;d never know it by the way she carried herself. They were nothing alike. She was always quick to remind him that she&rsquo;d come out of the womb first, always calling him her &lsquo;little brother&rsquo; with a mocking sneer.</p>
    <p>Kelsi was the queen bee of our school. Michael remembered the days when she&rsquo;d bully anyone who dared cross her, even the biggest jocks. Her reputation as an extraordinary fighter was known all over the school&mdash;no, the whole town. But it wasn&rsquo;t just the fact that she could break an arm in the flash of an eye that scared people of her... It was her flair for humiliation.</p>
    <p>Once, she stripped a guy naked, slapped a dog collar on him, and made him crawl through the halls. Another time, she tormented a kid until he pissed himself, then kept going until he shit himself, right in front of the whole class and their teacher.</p>
    <p>Why didn&rsquo;t they expel her? First off, she was every teacher&rsquo;s pet. Top grades, a master at kissing ass. More importantly, Dad was a well-respected figure in society. He&rsquo;d visited the school a couple of times, apologized on her behalf, and Kelsi had promised to tone it down. But by then, she&rsquo;d already made a strong statement.</p>
    <p>With no one left to challenge her, she got bored of bullying. Instead, she started sticking up for some kids, craving action when things got dull. Soon, students began to seek her out for protection or revenge. But Kelsi didn&rsquo;t shield just anyone&mdash;only those she liked. Over time, she built a little army of loyal simps who&rsquo;d do anything for her.</p>
    <p>People were fascinated by her, spreading stories about her, a sort of Chuck Norris legend growing around her. She became respected, loved, and idolized by almost everyone in the school, though she made a few hidden enemies along the way.</p>
    <p>At school, Kelsi kept her distance from Michael, Kenzie, and Mandy, as if disowning any connection between them. She didn&rsquo;t want anyone to know her siblings. Michael never understood why, but when it came to him, he knew she hated his guts.</p>
    <p>A murmur rippled through the crowd as Kelsi approached. <strong>&ldquo;Our queen is angry,&rdquo;</strong> someone whispered.</p>
    <p>Suddenly, Michael&rsquo;s head was slammed into the nearest locker. Kelsi had him pinned, her hand pressing hard against his skull. Her eyes blazed with fury as she shouted at him.</p>
    <p><span class="Kelsi">&ldquo;You hit on a guy&rsquo;s girlfriend in front of him, and you go around saying I&rsquo;m your sister? And then you attack my friend?&rdquo;</span> Kelsi&rsquo;s voice was low, deadly.</p>
    <p><span class="Michael">&ldquo;Woah, chill out,&rdquo;</span> Michael gasped, trying to push her off. <span class="Michael">&ldquo;I didn&rsquo;t tell anybody you were my sister.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Why did you hit Ned?&rdquo;</span> Kelsi demanded, her grip tightening.</p>
    <p><span class="Michael">&ldquo;I didn&rsquo;t hit him! I just told him to fuck off! Hey, let me go!&rdquo;</span> Michael&rsquo;s voice rose, panic edging in.</p>
    <p>Kelsi&rsquo;s eyes narrowed. <span class="Kelsi">&ldquo;You need to apologize to him.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;What?!&rdquo;</span> Michael couldn&rsquo;t believe what he was hearing.</p>
    <p><span class="Kelsi">&ldquo;APOLOGIZE!&rdquo;</span> Kelsi&rsquo;s voice echoed through the hallway, commanding and terrifying.</p>
    <p><span class="Michael">&ldquo;To who? That piece of shit? I&rsquo;m not gonna apologize to anybody. What are you gonna do about it?&rdquo;</span> Michael spat back, defiance flashing in his eyes.</p>
    <p>A collective gasp echoed through the crowd. All eyes were on them. No one could believe someone was stupid enough to talk to Kelsi like that.</p>
    <p>Kelsi&rsquo;s expression didn&rsquo;t change, but her grip on Michael did. She shoved him into the center of the hall, holding him by the shirt. Then, with a loud, commanding voice, she addressed the onlookers.</p>
    <p><span class="Kelsi">&ldquo;Everybody, I&rsquo;ll make an announcement. This is my little brother. I&rsquo;ll have you know that I&rsquo;m not gonna protect him under any circumstances. If anybody wants to destroy this bitch&rsquo;s asshole, he&rsquo;s all yours.&rdquo;</span></p>
    <p>The crowd erupted in cheers, a wicked excitement buzzing through them. Michael felt the walls closing in, the predatory stares of the other students making him feel like prey.</p>
    <p>Kelsi strode off without a backward glance. As she disappeared, Milena stepped up beside him, her expression a mix of concern and exasperation.</p>
    ${storyImageLeft('milena_hall')}
    <p><span class="Milena">&ldquo;Well, you just became public enemy number one,&rdquo;</span> she said, her tone almost sympathetic as she tapped his chest a couple of times. <span class="Milena">&ldquo;You just pushed us to the bottom of the ladder, big man.&rdquo;</span></p>
    <p>As the school alarm blared, Milena grabbed Michael&rsquo;s arm, pulling him along. They hurried to class, Michael&rsquo;s mind spinning with the consequences of his sister&rsquo;s wrath.</p>
    ${appendLinkRow('Go to class', '4c', true)}
        `
        )
    
    section4.appendChild(row4b);
    
    const row4c = storyRow('4c', 'INT. CLASS 12A<br>EARLY MORNING', 
    `
    ${storyImageRight('jen_class')}
    <p>Michael couldn&rsquo;t believe his luck. Another year with Roberts as his math teacher. She was as stunning as ever, a walking distraction he couldn&rsquo;t get enough of. His mind drifted off into places it shouldn&rsquo;t as he sat in the classroom, pretending to focus on the lecture.</p>
    <p>He let his gaze trail over her, drinking in every detail&mdash;the delicate hands, the flawless skin, the way her blouse clung just right to her toned body, hinting at curves he&rsquo;d only ever fantasized about. Those legs, God, those legs&hellip; He&rsquo;d do anything just to see where they ended.</p>
    <p>As the minutes ticked by, Michael&rsquo;s mind wandered further, lost in a haze of fantasies about her, completely detached from the calculus she was explaining.</p>
    <p>Then, her voice sliced through his reverie. <span class="Jen">&ldquo;Let&rsquo;s see who&rsquo;s been paying attention,&rdquo;</span> Roberts announced, her tone sharp enough to snap him out of his daydream. <span class="Jen">&ldquo;What is the integral of sin x over x from zero to infinity?&rdquo;</span></p>
    <p>Michael&rsquo;s eyes snapped to attention, his heart pounding. She was looking right at him. <span class="Jen">&ldquo;Michael? Can you answer the question?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Me?&rdquo;</span> he stammered, panic setting in.</p>
    <p><span class="Jen">&ldquo;Yes, you,&rdquo;</span> she said, her gaze piercing.<span class="Jen"> &ldquo;Can you please answer my question?&rdquo;</span></p>
    <p>He had no idea what she&rsquo;d just asked, his brain still scrambled from his earlier thoughts. <span class="Michael">&ldquo;Uh, what was the question again?&rdquo;</span> he managed, feeling the heat rise to his forehead as a few girls snickered nearby.</p>
    <p>Roberts sighed, clearly unimpressed. <span class="Jen">&ldquo;What is &int;(sin x)/x dx from 0 to infinity?&rdquo;</span> she repeated, her patience wearing thin.</p>
    <p>Michael stared blankly, wondering how they learned all that in one class.</p>
    <p><span class="Michael">&ldquo;Umm&hellip;&rdquo;</span></p>
    ${appendLinkRow('infinity squared', '4d', true)}
    ${appendLinkRow('infinity/x', '4d', true)}
    ${appendLinkRow('sin infinity', '4d', true)}
    `
    )
    
    const row4d = storyRow('4d', ' ', 
    `
    
    <p>The classroom erupted in laughter. Even Milena couldn&rsquo;t contain herself. Roberts, however, was not amused.</p>
    <p><span class="Jen">&ldquo;That&rsquo;s completely wrong, Michael,&rdquo;</span> she said, her disappointment evident. <span class="Jen">&ldquo;You haven&rsquo;t been paying attention at all, have you? I&rsquo;d love to know what was going through your mind this whole time.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Nothing, Ms. Roberts,&rdquo;</span> he lied, trying to sound innocent.</p>
    <p>She shook her head, looking for someone else who was actually prepared to answer. Literally every other student was ready to answer. Michael slouched in his seat, feeling like an idiot.</p>
    <p>Ten excruciating minutes later, the bell rang, signaling the end of the class. As the students packed up, Roberts caught Michael&rsquo;s eye and gestured for him to come to her desk.</p>
    <p><span class="Jen">&ldquo;Michael, I want to see you in my office at the end of the day,&rdquo;</span> she said, her voice firm. <span class="Jen">&ldquo;Do you know where it is?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Yes, ma&rsquo;am,&rdquo;</span> he mumbled, dreading the impending lecture.</p>
    <p><span class="Jen">&ldquo;Good. I&rsquo;ll see you then,&rdquo;</span> she said, dismissing him with a look that made his stomach churn.</p>
    ${appendLinkRow('Skip to the end of the day', '4e', true)}
    `
    )
    
    const row4e = storyRow('4e', 'INT. SECOND MAIN HALL<br>AFTERNOON', 
    `
    ${storyImageLeft('milena_hall')}
    <p>The final bell rang, and Michael found himself lingering in the hallway with Milena, stalling before heading to Roberts&rsquo; office. He noticed a couple of jocks loitering near the school doors, one of them glaring at him with clear intent.</p>
    <p><span class="Michael">&ldquo;I think I should hide,&rdquo;</span> he muttered. <span class="Michael">&ldquo;Somebody&rsquo;s looking to pick a fight.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;More than one actually,&rdquo;</span> Milena said. <span class="Milena">&ldquo;It&rsquo;s like you have a target on your back.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Yeah, well, I&rsquo;ve got something else to take care of,&rdquo;</span> he replied, trying to sound nonchalant.</p>
    <p><span class="Milena">&ldquo;What are you going to do?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Something.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;Haha. Don&rsquo;t try to be mysterious with me. Tell me.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;It&rsquo;s nothing actually. Ms. Roberts wanted to see me in her office.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;I&rsquo;ll wait for you.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;No, you go on ahead,&rdquo;</span> Michael insisted. <span class="Michael">&ldquo;I&rsquo;m not sure how long those guys are gonna stick around, but if I hang back for a bit, they might get bored and leave. Besides, I don&rsquo;t want you getting caught up if things get ugly.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;Okay, whatever,&rdquo;</span> she shrugged, then smiled mischievously. <span class="Milena">&ldquo;Oh, and happy birthday, by the way.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Thanks,&rdquo;</span> Michael replied, trying to muster some enthusiasm.</p>
    <p><span class="Milena">&ldquo;What can I get you as a gift?&rdquo;</span> Milena asked, teasing him.</p>
    <p><span class="Michael">&ldquo;Hmm&hellip; Gina&rsquo;s number?&rdquo;</span> he joked.</p>
    <p>Milena laughed, shaking her head. <span class="Milena">&ldquo;Sorry, don&rsquo;t have it. And even if I did, it wouldn&rsquo;t do you much good&mdash;she&rsquo;s got a boyfriend now.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Yeah, you&rsquo;re right,&rdquo;</span> he sighed. Then, with a cheeky grin, he added, <span class="Michael">&ldquo;How about your mom&rsquo;s used panties?&rdquo;</span></p>
    <p>The slap came so fast he barely saw it coming. Milena&rsquo;s hand connected with his cheek, leaving a stinging red mark.</p>
    <p><span class="Milena">&ldquo;Don&rsquo;t talk about my mom like that!&rdquo;</span> she snapped, her eyes blazing.</p>
    <p><span class="Michael">&ldquo;Geez, Milena, it was a joke,&rdquo;</span> Michael said, rubbing his face.</p>
    <p><span class="Milena">&ldquo;Well, I don&rsquo;t like dirty jokes about my mom,&rdquo;</span> she shot back.</p>
    <p><span class="Michael">&ldquo;Okay, okay, I&rsquo;m sorry,&rdquo;</span> he said, holding up his hands in surrender. <span class="Michael">&ldquo;Wow. I guess I deserve everything that&rsquo;s happened to me today, don&lsquo;t I?&rdquo;</span></p>
    <p><span class="Milena">&ldquo;Aha, you&rsquo;re an asshole!&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Ok, I&rsquo;ll think of something else.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;I&rsquo;ll get you a buttplug... and I&rsquo;ll shove it in your mouth. That&rsquo;s the perfect gift for you, asshole.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;In what kind of world is a buttplug a good gift for an asshole?&rdquo;</span></p>
    <p><span class="Milena">&ldquo;Well, at least it&rsquo;s gonna stop you from spewing shit from your mouth all the time.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;That&rsquo;s not what buttplugs are for. But nice attempt at being funny, haha. Ok, are we gonna stand here all day? Just leave already.&rdquo;</span></p>
    <p>Milena rolled her eyes and pushed him playfully before sauntering off with a giggle, leaving Michael to make his way toRoberts&rsquo; office, wondering just how much worse this day could get.</p>
    ${appendLink('Go to Roberts&rsquo; office', 'section5')}
    
    `
    )
    
    const section5 = newSection(5);
    
    
    const row5 = storyRow('5', 'INT. ROBERT&rsquo;S OFFICE<br>AFTERNOON', 
    `
    ${storyImageCenter('J/0')}
    <p>Michael entered the office, his heart thudding in his chest as he faced Roberts. Her eyes locked onto his, a mix of frustration and something else he couldn&rsquo;t quite place polling in them.</p>
    ${storyImageCenter('J/1')}
    <p><span class="Jen">&ldquo;Michael,&rdquo;</span> she began, her voice smooth yet stern. <span class="Jen">&ldquo;I&rsquo;m glad you&rsquo;re finally here. Sit down.&rdquo;</span></p>
    ${storyImageCenter('J/2')}
    <p>He obeyed, the chair feeling uncomfortably firm beneath him as he watched her move to perch on the edge of her desk. Roberts released a heavy sigh.</p>
    <p><span class="Jen">&ldquo;Michael,&rdquo;</span> she continued, her gaze not leaving his. <span class="Jen">&ldquo;I&rsquo;m truly disappointed. You were one of my best students, and now...&rdquo;</span> Her voice trailed off, leaving the accusation hanging in the air.</p>
    <p><span class="Michael">&ldquo;I&rsquo;m sorry, Ms. Roberts,&rdquo;</span> he mumbled, his voice barely audible.</p>
    ${storyImageCenter('J/3')}
    <p>He swallowed hard, nerves prickling under his skin. There was something about her presence that always made him uneasy&mdash;maybe it was her undeniable allure, or perhaps the guilt for all these dirty thoughts he had for her while she held high in high regard?</p>
    <p>He doesn&rsquo;t know why. But at that moment her eyes weighed a ton upon his soul.</p>
    ${storyImageCenter('J/4')}
    <p>Roberts leaned back slightly, a subtle shift that did nothing to ease his discomfort. <span class="Jen">&ldquo;Relax, Michael,&rdquo;</span> she said <span class="Jen">&ldquo;We&rsquo;re just talking. You&rsquo;re not in trouble... yet.&rdquo;</span></p>
    <p>He gulped, nodding. <span class="Michael">&ldquo;Yes, Ms. Roberts.&rdquo;</span></p>
    ${storyImageCenter('J/5')}
    <p>Her lips curled into a small smile, and she let out a soft chuckle. <span class="Jen">&ldquo;It&rsquo;s very hot today, don&rsquo;t you think?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Y-yes, Ms. Roberts. Very hot,&rdquo;</span> he stammered, feeling the flush creep up his neck.</p>
    ${storyImageCenter('J/6')}
    <p>She sighed, her eyes closing briefly before she opened them again, fixing him with a mischievous glance. <span class="Jen">&ldquo;You don&rsquo;t mind if I get a little bit more comfortable, do you, Michael?&rdquo;</span></p>
    <p>Michael watched as Roberts slowly removed her jacket, letting it slide off her shoulders. He forgot to answer her.</p>
    ${storyImageCenter('J/7')}
    <p><span class="Jen">&ldquo;Here, that&rsquo;s better.&rdquo;</span></p>
    ${storyImageCenter('J/8')}
    <p><span class="Jen">&ldquo;Michael, I know how talented you are in mathematics. I&rsquo;m not going to let that talent go to waste.&rdquo;</span></p>
    ${storyImageCenter('J/9')}
    <p>Her words were firm, yet there was a teasing lilt in her voice as she stood and began to walk slowly towards him. <span class="Jen">&ldquo;You must know that I take this very seriously. It saddens me to see someone with so much potential... wasting it.&rdquo;</span></p>
    ${storyImageCenter('J/10')}
    <p>He nodded, his heart pounding louder in his ears as she stopped just inches away from his chair.</p>
    <p><span class="Jen">&ldquo;I will make it my personal goal,&rdquo;</span> she whispered, leaning down slightly, <span class="Jen">&ldquo;to turn you into the top student in my class this term. You don&rsquo;t know how important this is to me, Michael. You don&rsquo;t know how far I&rsquo;m willing to go to motivate you.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Yes, Ms. Roberts,&rdquo;</span> he breathed, his eyes wide as she straightened up.</p>
    <p><span class="Jen">&ldquo;Call me Jen, sweetheart,&rdquo;</span> she purred. <span class="Jen">&ldquo;We&rsquo;re going to get a lot closer over the next few months.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Y-yes, Ms. Jen,&rdquo;</span> he stuttered, the words stumbling out of his mouth.</p>
    ${storyImageCenter('J/11')}
    <p>She chuckled again, a low, throaty sound that sent shivers down his spine. <span class="Jen">&ldquo;Ah, Michael,&rdquo;</span> she said, tracing a hand slowly up her leg. <span class="Jen">&ldquo;Your problem is that you&rsquo;re easily distracted. But that&rsquo;s just how youth is today, isn&rsquo;t it? Always distracted...&rdquo;</span></p>
    ${storyImageCenter('J/12')}
    <p><span class="Jen">&ldquo;...by fantasies...&rdquo;</span></p>
    ${storyImageCenter('J/13')}
    <p>Her hand slowly and sensually swiped over her thigh, rolling her skirt up. She paused, her eyes narrowing as she watched him squirm. <span class="Jen">&ldquo;But if you focus, really focus, Michael... maybe your dreams could come true.&rdquo;</span></p>
    <p>Roberts ran her hands on her thigh, massaging herself, still keeping full eye contact with him. He struggled to keep his eyes on hers, with eyes insisting on falling to her beautiful legs.</p>
    <p>He fidgeted in his seat.</p>
    <p>His cock was erecting in his pants.</p>
    <p>Her words hung in the air as she snapped her fingers, jolting him back to reality. He looked up, meeting her gaze.</p>
    <p><span class="Michael">&ldquo;Yes, ma&rsquo;am,&rdquo;</span> he replied, his voice trembling.</p>
    ${storyImageCenter('J/14')}
    <p><span class="Jen">&ldquo;Maybe it&rsquo;s too difficult for you to follow my words. Let me show you with an illustration.&rdquo;</span></p>
    <p>Roberts rose from her seat, reaching up to retrieve a marker from a shelf above her desk. As she got up, her skirt rolled even more, revealing her ass and thighs, with only her pantyhose covering them.</p>
    <p>His cock got harder.</p>
    ${storyImage('J/15')}
    <p>Harder.</p>
    ${storyImageCenter('J/16')}
    <p>Even harder.</p>
    ${storyImage('J/17')}
    <p>By the time Roberts reached her marker, he had got a full hard-on already. He should&rsquo;ve taken a moment to adjust his pants and hid his boner but he was too busy staring at Roberts&rsquo; wonderful ass curved before him.</p>
    <p>Roberts grabbed the marker from the shelf and slowly turned to face him. As she slowly turned around, he saw her eyes glance quickly at the bulge in his pants and the hint of a smirk creeping up on her face.</p>
    <p><span class="Jen">&ldquo;Oh!&rdquo;</span> she exclaimed suddenly, dropping a marker from the desk.</p>
    ${storyImage('J/18')}
    <p><span class="Michael">&ldquo;I&rsquo;ll get it for you, Ms. Roberts,&rdquo;</span> he offered, quickly bending down to retrieve it.</p>
    <p><span class="Jen">&ldquo;You stay right where you are! Don&rsquo;t you move a muscle, I&rsquo;ll get it myself.&rdquo;</span></p>
    ${storyImageCenter('J/19')}
    <p>He leaned back in his chair watching Roberts get up and straighten her skirt, scowling at him with disgust, sizing up if he deserved the sneak peek he stole and contemplating scolding him and punishing him for it. But her eyes revealed a different desire in the mix, the suspicion of which would have been enough to get him off.</p>
    <p>As she bent down with deliberate slowness to retrieve her pen, his breath quickened and his heart raced. Her eyes remained fixed on his, never leaving him for a moment. It was difficult to maintain eye contact with her, especially when he was so aroused by her close proximity.</p>
    ${storyImageCenter('J/20')}
    <p>He couldn&rsquo;t fight it anymore. He glanced at her legs and his cock throbbed at the flash of red emanating from between them. She was so close to him, she caught all that, and he knew it.</p>
    ${storyImageCenter('J/21')}
    <p>Roberts immediately closed her legs tightly and his eyes quickly returned to where they should&rsquo;ve been.</p>
    <p>She squinted at him, trapping his nerves under the mercy of her suspicious gaze.</p>
    ${storyImageCenter('J/22')}
    <p><span class="Jen">&ldquo;I think this may not be the best time for our conversation. You can leave now and we&rsquo;ll talk again later, Michael.&rdquo;</span></p>
    <p>He was relieved to be let go of her weighing presence and left her office as quickly as possible, awkwardly hiding his erection in his pants.</p>
    ${storyImage('empty_school_hall')}
    <p>The halls were mercifully empty as he made his way out of the school.</p>
    ${storyImage('street')}
    <p>He walked his way back ${appendLinkInline('home', 'section6')}.</p>
    `
    )
    
    section5.appendChild(row5);
    
    const section6 = newSection(6);
    
    
    const row6a = storyRow('6a', 'INT. HALL<br>LATE AFTERNOON', 
    `
    ${storyImage('home')}
    <p>Michael finally reached home. He tossed his backpack on the couch in the living room. He was very agitated and horny and he headed straight to the bathroom.</p>
    ${storyImage('S/0')}
    <p>Heading to the bathroom, Michael walked past the kitchen. He spotted Sherrie bent over wiping the cupboards.</p>
    ${storyImage('S/1')}
    <p>Sherrie was our housekeeper. We&rsquo;re not sure when she started with us. She was around since we were very little.</p>
    ${storyImage('S/2')}
    <p>Sherrie wasn&rsquo;t your typical housekeeper though. She lived with us and had her own bedroom in the basement. She received food and board, but no pay, and she never took vacations.</p>
    <p>We learned all that because, when he was 7, Michael once ordered Sherrie to bring him food, in the manner that Dad usually ordered her to do stuff.</p>
    <p>But she didn&rsquo;t respond to him. When he complained to Mom, she told him Sherrie only took orders from Dad and herself, and that she wasn&rsquo;t actually a maid.</p>
    ${storyImage('S/3')}
    <p>Sherrie only followed Dad&rsquo;s word and by extension Mom&rsquo;s as well, yet not to the same extent. She followed Dad rather religiously. They had a special relationship where she never spoke up to him and never contradicted him. In fact, she always held her head down while he addressed her.</p>
    <p>She was the only one in the house allowed into Dad&rsquo;s office with his knowledge, even Mom wasn&rsquo;t, and many a time when he left the house she accompanied him. And whenever he traveled on a business trip, he took Sherrie with him, hiring a temporary maid for us until he came back, one that actually acted like a normal housekeeper.</p>
    ${storyImage('S/4')}
    <p>So, Sherrie wasn&rsquo;t much of a maid as much as much as Dad&rsquo;s servant, who served the capacity of a housekeeper as long as he wished her to, or as Kelsi used to call her &lsquo;Dad&rsquo;s slave.&rsquo;</p>
    ${storyImage('S/5')}
    <p>You see, for a number of years, Dad treated Sherrie rather disrespectfully. He was very short with her and many times even harsh on her. He never allowed her to sit with us at the dinner table and he rarely allow her to speak until he snapped his fingers or exclaimed &lsquo;Speak!&rsquo; at her.</p>
    ${storyImage('S/6')}
    <p>While Michael and Kelsi were eager to joke and play with her as kids, Sherrie reluctantly played along, but even then only in secret. Despite appearing sad and bored most of the time, she was pleasant to be around and she was really fun whenever she had the chance to show it. However, after one incident, when Dad caught her playing with Kelsi, he shouted at her and forbade her from playing with Michael or Kelsi again. And she never did since.</p>
    <p>We all saw Sherrie as family, but Dad certainly did not.</p>
    <p>For a while, between the ages of 7 and 11, Kelsi and Michael tried to resolve Sherrie&rsquo;s mystery. She was a curious case to them.</p>
    <p>Who was she? Why did Dad treat her like that and why did she respect him so much? Where did she come from? Where were her family and friends? What did she and Dad do in the office? The twins still hated each other back then as they always did. But with the prospect of finding more about Dad; just as two enemies would, they put their differences aside for a common cause. Kelsi and Michael exchanged theories and clues whenever they could. They cornered Kenzie and interrogated her repeatedly and they tried to extract as much<br />information from Mom as possible, but they ultimately came up empty-handed. While they were more interested in Dad himself rather than Sherrie, they always considered her as an important piece of the puzzle. However, after Sherrie was instructed not to play with them anymore, they dropped the case. They realized they couldn&rsquo;t uncover more about Dad without getting closer to Sherrie, which would only land her in trouble.</p>
    ${storyImage('S/7')}
    <p>Things changed over the years. Dad actually grew fonder to Sherrie.</p>
    ${storyImage('S/8')}
    <p>He now treats her much nicer than he used to, and there&rsquo;s some sort of camaraderie between the two. He treats her like his assistant now, yet still, she treats him like a god.</p>
    ${storyImage('S/9')}
    <p>Now, another thing about Sherrie, she was almost always in uniform inside the house. She wore that traditional French maid uniform with a scandalously short skirt. Anytime she bent over, her ass toned was on display like that, covered only by a pair of black or white panties and maybe pantyhose.</p>
    ${storyImage('S/10')}
    <p>When he walked past the kitchen and saw Sherrie bent over like that, he stopped. He had seen this sight countless times before and he was used to it since he was very young, but today it caught his attention like never before. The blood ran in his veins and his cock immediately hardened at the thought of Sherrie&rsquo;s perfect body.</p>
    <p>He knew she&rsquo;d get in trouble but he couldn&rsquo;t resist the urge any longer, he snuck away to the kitchen where he could secretly stroke himself while watching Sherrie work.</p>
    ${storyImage('S/11')}
    <p>As she bent over to clean something, he couldn&rsquo;t help but let out a moan.</p>
    <p><span class="Michael">MICHAEL</span><br />Ah, Sherrie...</p>
    ${storyImage('S/12')}
    <p><span class="Sherrie">SHERRIE</span><br />Yes, Master Michael!</p>
    <p>Sherrie&rsquo;s voice startled him and he quickly tried to hide his throbbing erection.</p>
    <p><span class="Sherrie">&ldquo;Master Michael? Is that you?&rdquo;</span> Her voice was soft, yet filled with curiosity. <span class="Sherrie">&ldquo;Why are you hiding behind that wall?&rdquo;</span></p>
    
    `
    )
    
    section6.appendChild(row6a);
    
    const row6b = storyRow('6b', 'INT. KITCHEN<br>LATE AFTERNOON', 
    `
    <p><span class="Michael">&ldquo;Oh, Sherrie,&rdquo;</span> Michael&rsquo;s voice wavered slightly as he stepped out from his hiding place. <span class="Michael">&ldquo;I didn&rsquo;t realize you were here.&rdquo;</span></p>
    <p><span class="Sherrie">&ldquo;Master Michael,&rdquo;</span> she smiled warmly, tilting her head to the side, <span class="Sherrie">&ldquo;you&rsquo;ve been standing there for quite some time now. Is there something you need from me?&rdquo;</span></p>
    ${storyImage('S/13')}
    <p>He hesitated, his gaze darting to the floor before slowly lifting to meet hers. <span class="Michael">&ldquo;I was... umm... Sherrie, did I tell you how stunning you look today?&rdquo;</span></p>
    ${storyImage('S/14')}
    <p>She giggled softly, a sound that sent a small thrill through him. <span class="Sherrie">&ldquo;Ehehehe, no, Master Michael, you didn&rsquo;t. In fact, you haven&rsquo;t said much to me at all lately.&rdquo;</span></p>
    <p>He sighed. <span class="Michael">&ldquo;It&rsquo;s because Dad told me not to.&rdquo;</span></p>
    ${storyImage('S/15')}
    <p><span class="Sherrie">&ldquo;That was a long time ago, Master Michael. He&rsquo;s changed since then. What made you come to me today?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;I walked in,&rdquo;</span> he started, his hand hovering in front of him awkwardly, <span class="Michael">&ldquo;and I was just... captivated by how beautiful you are.&rdquo;</span></p>
    <p><span class="Sherrie">&ldquo;But I look the same every day,&rdquo;</span> she replied, her tone gentle, trying to coax the real reason out of him.</p>
    ${storyImage('S/16')}
    <p><span class="Sherrie">&ldquo;Master Michael...&rdquo;</span> Her voice began taking on a more serious note.</p>
    ${storyImage('S/17')}
    <p><span class="Sherrie">&ldquo;Is there anything...&rdquo;</span></p>
    ${storyImage('S/18')}
    <p><span class="Sherrie">&ldquo;...that I can...&rdquo;</span></p>
    ${storyImage('S/19')}
    <p><span class="Sherrie">&ldquo;...assist you with?&rdquo;</span></p>
    ${storyImageLeft('S/20')}
    <p>Michael's cock throbbed in his pants. Sherrie could sense his nervousness, the way he shifted on his feet, the way his hands fidgeted, pulling his shirt down and forward, as if he was hiding a bulge in his stomach. It was clear to her that something was on his mind, something he was struggling to say.</p>
    <p>Taking a deep breath, Michael gathered his courage. <span class="Michael">&ldquo;Well, yes... there is something, something that only you can help me with. But it has to stay between us.&rdquo;</span></p>
    <p>Her face expression fluttered as if her heart skipped a beat at his words, curiosity and a hint of excitement mixing in her guise. <span class="Sherrie">&ldquo;What is it, Master Michael?&rdquo;</span> she asked, her voice laced with intrigue.</p>
    <p>Michael decided to blunt about it. <span class="Michael">&ldquo;I want you to help me get myself off.&rdquo;</span></p>
    <p>Sherrie gasped. <span class="Sherrie">&ldquo;You want me to jerk you off?&rdquo;</span> She sounded even more blunt.</p>
    <p><span class="Michael">MICHAEL</span><br />You don&rsquo;t have to do anything. I&rsquo;ll just stand there and watch you while you work. Just don&rsquo;t mind me.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Master Michael...</p>
    <p><span class="Michael">MICHAEL</span><br />Look, Dad will never know. Nobody will know.</p>
    <p><span class="Sherrie">SHERRIE</span><br />But why?</p>
    <p><span class="Michael">MICHAEL</span><br />I&rsquo;m so fucking horny right now. I can&rsquo;t believe I&rsquo;m doing this.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Hmm. Are you hard right now?</p>
    <p><span class="Michael">MICHAEL</span><br />Yeah. Because of you... I mean, it&rsquo;s not your fault, it&rsquo;s my fault... because you&rsquo;re here... I&rsquo;m... What the fuck am I even trying to say?</p>
    ${storyImage('S/21')}
    <p><span class="Sherrie">SHERRIE</span><br />Ehehehe. Can I take a look?</p>
    <p><span class="Michael">MICHAEL</span><br />Yeah, please do.</p>
    ${storyImage('S/22')}
    <p><span class="Sherrie">SHERRIE</span><br />Master Michael! Your cock is huge!</p>
    <p><span class="Michael">MICHAEL</span><br />No, no, it&rsquo;s not that big, don&rsquo;t worry. These pants make my erection look a lot bigger than it actually is.</p>
    <p>As if he had suddenly changed his mind, he swept her hand off and hid his cock.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Master Michael, I refuse to believe that a charming young man like you can&rsquo;t get laid by himself. Why do you want me to help you?</p>
    <p><span class="Michael">MICHAEL</span><br />I... never got laid before.</p>
    <p><span class="Sherrie">SHERRIE</span><br />What? You can&rsquo;t get a girlfriend?</p>
    <p><span class="Michael">MICHAEL</span><br />Well, I&rsquo;ve been in relationships before but they all ended short because of this (pointing at his erection). Once a girl sees it, she gets scared and leaves me.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Is something wrong with your cock?</p>
    <p><span class="Michael">MICHAEL</span><br />It&rsquo;s too big, just like you said.. huge, abnormally so, and it looks weird, I mean that&rsquo;s what I&rsquo;ve been told.</p>
    <p><span class="Sherrie">SHERRIE</span><br />So you never fucked a woman before?</p>
    <p><span class="Michael">MICHAEL</span><br />No. Didn&rsquo;t even get a blowjob before.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Do you have any sexual experience?</p>
    <p><span class="Michael">MICHAEL</span><br />A little bit. My last ex was brave enough to give me a handjob with both hands but she didn&rsquo;t like it. She tried to put my cock in her mouth and she failed miserably. She licked it though, which I liked a lot, more than anything actually, it was the best feeling ever, but she left me shortly afterward.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Oh my! Is it that bad? I mean it could be a little bit too big for a teenager but they can take it if they try!</p>
    <p><span class="Michael">MICHAEL</span><br />I&rsquo;m really embarrassed by it. I&rsquo;m sure it&rsquo;s my curse.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Master Michael, please don&rsquo;t say that. You should be proud!</p>
    <p><span class="Michael">MICHAEL</span><br />It&rsquo;s no joke the worst thing in my life.</p>
    <p><span class="Sherrie">SHERRIE</span><br />No, it&rsquo;s a gift. It&rsquo;s fascinating.</p>
    <p><span class="Michael">MICHAEL</span><br />Oh, yeah, every girl is fascinated by the idea for sure, and they tease the hell out of me because of it. But once it gets real, they call it weird, abnormal, disgusting even, and they run away.</p>
    ${storyImage('S/23')}
    <p><span class="Sherrie">SHERRIE</span><br />No, Master Michael. I&rsquo;m sure one day you&rsquo;ll find a woman who can appreciate your cock and take it in full.</p>
    <p><span class="Michael">MICHAEL</span><br />Uhh&hellip; You think you can take it, Sherrie?</p>
    <p><span class="Sherrie">SHERRIE</span><br />Well, Master Michael, I&rsquo;ve had many, many sexual experiences in my life. I can take any cock of any shape and size.</p>
    <p><span class="Michael">MICHAEL</span> (gulp)<br />Would you give me a blowjob then? It would mean the world to me on my birthday.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Master Michael, I would love to suck your cock&hellip;</p>
    <p>His jaw dropped at the sultriness in her voice. But the real blow came fast.</p>
    <p><span class="Sherrie">&ldquo;&hellip;But I have to get permission from Master first.&rdquo;</span></p>
    <p>His heart pounded, a cold sweat forming at the back of his neck. <span class="Michael">&ldquo;Master? You mean Dad? No... no, you&rsquo;re not telling anyone, Sherrie. You can&rsquo;t.&rdquo;</span></p>
    <p>He searched in her eyes if she was serious or not. Her eyes were unyielding, as if it was a matter of personal duty to her. <span class="Sherrie">&ldquo;I have to tell my master everything, Master Michael.&rdquo;</span></p>
    <p>His pulse quickened, the gravity of the situation sinking in. He stepped closer, his voice dropping to a low, urgent whisper. <span class="Michael">&ldquo;Sherrie, listen to me. This... this was all a joke, okay? Just a silly prank. I made it up, every word. You&rsquo;ve been so good playing along, but that&rsquo;s all it was. Just a game.&rdquo;</span></p>
    <p>He forced a smile but it felt brittle. <span class="Michael">&ldquo;You&rsquo;re such a good girl, Sherrie. Always so obedient.&rdquo;</span></p>
    <p>Her gaze never wavered, her voice steady. <span class="Sherrie">&ldquo;Master Michael, I must share everything with your father. You can come with me and speak to him, or you can wait for me until I return.&rdquo;</span></p>
    <p>A chill ran down his spine. <span class="Michael">&ldquo;Sherrie, you don&rsquo;t understand. If you tell him, we&rsquo;ll both be in trouble, not just me.&rdquo;</span></p>
    <p>There was a moment of silence, thick with tension, as she looked at him. <span class="Sherrie">&ldquo;I still have to tell my master,&rdquo;</span> she repeated, her voice soft but firm.</p>
    <p>His breath caught in his throat. He leaned in, his lips brushing close to her ear. <span class="Michael">&ldquo;Sherrie... please. Don&rsquo;t do this. Don&rsquo;t make me go with you. Just this once, keep it between us.&rdquo;</span></p>
    <p>His words were desperate, a final, trembling plea. But her gaze never changed, as if she didn&rsquo;t even comprehend the notion of disobeying Dad.</p>
    <p>He finally surrendered. <span class="Michael">&ldquo;Okay, fine. I&rsquo;ll ${appendLinkInline('come with you', 'section7')}. I&rsquo;ll try to explain.&rdquo;</span></p>
    
    `
    )
    
    section6.appendChild(row6b);
    
    const section7 = newSection(7);
    
    
    const row7a = storyRow('7a', 'INT. IN FRONT OF DAD&rsquo;S OFFICE<br>LATE AFTERNOON', 
    `
    ${storyImage('office_door')}
    <p>Sherrie and Michael approached Dad&rsquo;s office. The door, usually closed and imposing, stood silent as a tomb. Sherrie moved to knock, but Michael gently stopped her. He took a deep breath and knocked twice.</p>
    <p>No one answered.</p>
    <p>Sherrie, positioned just behind Michael, stepped forward and knocked again&mdash;five sharp, distinct taps. Ten seconds later, the door creaked open.</p>
    ${storyImageRight('dad')}
    <p>Dad swung the door open, His eyes scanning Michael and Sherrie with a look that was more disappointment than surprise.</p>
    <p><strong>DAD</strong><br />What do you want?</p>
    <p><span class="Michael">MICHAEL</span><br />Sherrie and I... um, we need to talk to you about something.</p>
    <p><strong>DAD</strong><br />Get on with it. I don&rsquo;t have all day.</p>
    <p>His mouth went dry, the words tangled on his tongue.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Master Michael wants to use my body for his sexual pleasure.</p>
    <p><strong>DAD</strong><br />What? He wants to have sex with you?</p>
    <p><span class="Michael">MICHAEL</span><br />No, no, no, wait, woah, that&rsquo;s not what I said.</p>
    <p>He was shocked by how blatantly they talked about it between each other.</p>
    <p><span class="Michael">MICHAEL</span><br />It&rsquo;s just... today&rsquo;s my 18th birthday, and I&rsquo;m... curious about, you know, the ladies. And I thought maybe Sherrie could... help me out?</p>
    <p><strong>DAD</strong><br />Curious about the ladies? Aren&rsquo;t you too old for that? What are you, 14?!! (sighs, tone takes a very dismissive turn) Well, I guess it&rsquo;s my fault for never having the birds and bees talk with you.</p>
    <p>Dad sighed again, a hint of irritation in His voice. <strong>&ldquo;Listen, son, it&rsquo;s natural to have feelings for women, to be curious as you say. You will learn what you need to learn when the time is right. If you want Sherrie to teach you about sex, I&rsquo;m not gonna stop you. I know she&rsquo;d like it a lot.&rdquo;</strong></p>
    <p>Michael&rsquo;s lips separated slightly in disbelief.&nbsp;</p>
    <p><strong>DAD</strong><br />However, my advice for you is this... Forget about it. Don&rsquo;t chase after temporary pleasures. That energy you&rsquo;re feeling&mdash;it&rsquo;s your life energy, your essence as a man, and it&rsquo;s powerful. Don&rsquo;t waste it on women. Learn to redirect that sexual desire. Channel it into creative energy and you will achieve greatness, then true happiness will come. Have sex only when it&rsquo;s necessary, with a woman that you truly love, and only to have a family.</p>
    <p><em>Just so I can neglect them like you?</em> The thought echoed in his mind.</p>
    <p><span class="Michael">MICHAEL</span><br />So... you&rsquo;re trying to say, I can... do it with Sherrie if I want to?</p>
    <p><strong>DAD</strong><br />You didn&rsquo;t understand a thing from what I just said, did you? You&rsquo;re just a horny little bastard, just like your mother.</p>
    <p><strong>DAD</strong> (turning to Sherrie)<br />Look at that, my Sherrie.&nbsp;The little girls took my intelligence and this boy got his mother&rsquo;s sex drive.</p>
    <p><span class="Sherrie">SHERRIE</span><br />And her beauty too, sir.</p>
    <p><strong>DAD</strong><br />Exactly. What a waste! What does a man need with beauty or sex? Dedicate yourself to something greater. You&rsquo;re not cut out to continue my legacy, that much is clear.</p>
    <p><strong>DAD&nbsp;</strong>(cont&rsquo;d)<br />If you want to use Sherrie to, that&rsquo;s your decision. She&rsquo;s yours now.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Thank you, master.</p>
    <p><strong>DAD</strong><br />Well, he&rsquo;s your master now. I&rsquo;ve got work to do, so get out of my sight.</p>
    <p>Sherrie placed her hands on Michael&rsquo;s shoulders, her fingers pressing gently into his tense muscles.</p>
    <p><span class="Sherrie">SHERRIE<br /></span>Thank you, sir. He won&rsquo;t forget your gift.</p>
    <p><strong>DAD</strong><br />What?</p>
    <p><span class="Sherrie">SHERRIE</span><br />His gift!</p>
    <p><strong>DAD</strong><br />Right... wait here.</p>
    ${storyImage('office_door')}
    <p>Dad disappeared into his office, slamming the door behind Him. A minute later, He returned, holding a package, which He handed to Michael.</p>
    ${storyImageCenter('dad')}
    <p><strong>DAD</strong><br />This is for you. A gift for your birthday. I don&rsquo;t believe in birthdays&mdash;they&rsquo;re a waste of time&mdash;but your mother&rsquo;s been nagging me about it for weeks. And I&rsquo;ve arranged for you to have an audition with a local wrestling promotion next Saturday. They&rsquo;ll sign you part-time if you&rsquo;re good enough, but not full-time until you finish college. Not that you&rsquo;ll need higher education with that brain of yours.</p>
    ${storyImage('fighting_gear')}
    <p>Michael stared at the package, bewildered.</p>
    <p><strong>DAD</strong><br />I need to give the other one, too. Where&rsquo;s your twin sister?</p>
    <p>Sherrie cleared her throat.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Ahem.</p>
    <p><strong>DAD</strong><br />Err... brother?</p>
    <p>Sherrie leaned in and whispered something in Dad&rsquo;s ear.</p>
    <p><strong>DAD</strong><br />Ah, damn it, why do I have so many kids?</p>
    ${storyImage('office_door')}
    <p>Dad stomped back into his office, returning moments later.</p>
    ${storyImageCenter('dad')}
    <p><strong>&ldquo;Right. This one&rsquo;s for your sister&mdash;brother&mdash;whatever they want to be called. And this is yours.&rdquo;</strong></p>
    <p>Dad switched packages with Michael.</p>
    ${storyImage('camera')}
    <p><em>Oh. My. God. It&rsquo;s a Canon EOS-1D Mark II N!!! The camera of the year! This thing costs over $10,000. Are you fucking kidding me?</em></p>
    <p>Michael screamed in his mind like a fucking Mark. He was stunned, not sure how to react. Didn&rsquo;t really know what to feel, either. On one hand, Dad just called him stupid and talked shit about Mom in front of him. On the other hand, he gave him the best two gifts he&rsquo;d ever received, Sherrie and his first camera. He was torn between two emotions inside of him. He wanted to hug Dad and thank him for his gifts. And he also wanted to kick the old man in the teeth. He wanted to get abck at him, for neglecting him all these years, for looking down on him.</p>
    <p>Michael stared at the box containing the camera, his mouth agape in great disbelief. Dad&rsquo;s impatience was palpable as He extended the box towards him, eager to end this unneeded interaction with His son. Michael accepted it with slow, deliberate movements, as if handling something incredibly delicate, fragile, no, in his eyes it was sacred. Dad didn&rsquo;t care. Michael hated how He looked at him at that moment like He pitied him. It hurt. He contemplated throwing it back in His face and cursing Him. But if he were to refuse the camera, would he return Sherrie to Him too? For what?</p>
    <p>Dad took a step back and was about to close the door in their faces for the last time that day.</p>
    ${storyImageRight('dad')}
    <p><span class="Michael">MICHAEL</span><br />Dad, wait... I need to say something. I won&rsquo;t bother you again, I promise, at least I hope I won&rsquo;t have to, just as I hope this gift didn&rsquo;t cost you too much time or trouble. I... Thank you so much for this. It means everything to me. I&rsquo;ve always dreamed of being a photographer.</p>
    <p><strong>&ldquo;A photographer, huh?&rdquo;</strong></p>
    ${storyImage('office_door')}
    <p>Dad closed the door, muttering, &ldquo;What a useless profession,&rdquo; under his breath.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Alright, Master Michael. ${appendLinkInline('Let&rsquo;s go back', 'section8')} to where we were.</p>
    
    `
    )

    section7.appendChild(row7a);
    
    const section8 = newSection(8);
    
    
    const row8 = storyRow('8', 'INT. KITCHEN<br>LATE AFTERNOON', 
    `
    ${storyImage('S/13')}
    <p>Sherrie took Michael back to the kitchen.</p>
    <p><span class="Sherrie">SHERRIE</span><br />You said you wanted to watch me work, master?</p>
    <p><span class="Michael">MICHAEL</span><br />No, I asked for a blowjob, Sherrie. If you can.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Oh, I sure can. Take it out, master.</p>
    ${storyImage('S/24')}
    <p>Sherrie kneeled before him while he shyly unzipped his pants.</p>
    ${storyImage('S/25')}
    <p><span class="Sherrie">SHERRIE</span><br />Oh my god, master, it&rsquo;s beautiful. You must&rsquo;ve been joking with me when you said you were having trouble with the girls.</p>
    <p>Sherrie began stroking his cock with both her hands. He had had his hopes up but he wasn&rsquo;t too disappointed. He knew she wouln&rsquo;t be able to take it into her mouth.</p>
    ${storyImage('S/26')}
    <p><span class="Michael">MICHAEL</span><br />I wish I were, Sherrie. Thank you for offering the blowjob, but if you wanna do me a real favor, cut my cock in half.</p>
    ${storyImage('S/27')}
    <p><span class="Sherrie">SHERRIE</span><br />Oh no, master....</p>
    <p>Sherrie kissed his cock with her soft lips.</p>
    ${storyImage('S/28')}
    <p><span class="Sherrie">SHERRIE</span><br />I will worship you and please your cock as much as you would allow me, sir.</p>
    ${storyImage('S/29')}
    <p><span class="Michael">&ldquo;Oh, yes. Fuck!&rdquo;</span> Michael groaned with ascending ecstasy.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Master, I&rsquo;m sure you can get any woman in the world that you want. There&rsquo;s nothing wrong or scary about your cock. It is very beautiful. All you need is confidence.</p>
    ${storyVideo('S/30')}
    <p>He was about to respond but could only voice a moan. After stroking hardness intp his cock, Sherrie opened her mouth and brought her hot breath to his shaft. His veins sizzled with anticipation.</p>
    ${storyVideo('S/32')}
    <p>Ladies and gentlemen, he did it. Michael was finally receiving a blowjob for the first time in his life. It was better than he&rsquo;d always dreamed of. Sherrie could barely take the shaft in her mouth, mind you, but the wetness, the warmth, and the stickiness of her mouth wrapping his most sensitive part tightly made him forget about all these nights he&rsquo;d been left high and dry.</p>
    <p>What marred the moment was Sherrie locking eye contact with Michael the whole time, which unnerved him for some reason.</p>
    <p>She gave him all her attention and she eagerly searched his face for expressions iof pleasure. Her probing stare made him feel like she was reading his thoughts. He couldn&rsquo;t handle the tension for too long and gazed away temporarily, attempting to focus on the feeling of his shaft expanding in the vacuum of her mouth, the softness of her lips carressing away the void during her swift sucks for breath, the gentle grazing of her teeth around his coronal ridge, the feeling of water seeping through her teeth as her mouth get wetter the more she was aroused sucking him, and her warm slippery tongue hugging his shaft from the front and the back, circling around. Only for her to ask her if she liked it and snatch his eyes back to hers. He did, a lot, he voiced breathily. Eyes met hers again. Her face brightened at sharing his gaze and that look on he face drove him wild. His knees weakened, and he moaned in further approval.</p>
    <p>He sensed Sherrie&rsquo;s displeasure when he looked away again. He wondered if that would turn her off. Her soft but locked gaze weighed heavily on him, made him uncomfortable. Didn&rsquo;t she mind him using her? The act of sucking him shouldn&rsquo;t stimulate her fucking so much, he supposed. But she was on fire. She only wanted his pleasure, only sought his approval.</p>
    ${storyImage('S/34')}
    <p>His heart thumped in his chest as his cock throbbed intensely, his breath got heavier, and his knees could barely hold him anymore.</p>
    <p>Did Sherrie take the hint to slow down? No, she shoved his cock further in to her mouth.</p>
    <p><span class="Michael">MICHAEL</span><br />Take it easy, Sherrie, you&rsquo;re gonna hurt yourself.</p>
    <p><span class="Sherrie">SHERRIE</span><br />I need to push it down my throat, master. Would you please help me?</p>
    <p><span class="Michael">MICHAEL</span><br />Down your throat? What do you mean?</p>
    <p><span class="Sherrie">SHERRIE</span><br />Put your hand behind my neck and push your cock inside my throat until I can take it all.</p>
    <p><span class="Michael">MICHAEL</span><br />You might get hurt.</p>
    <p>She didn&rsquo;t care.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Please, master.</p>
    ${storyImage('S/35')}
    <p><span class="Michael">MICHAEL</span><br />Like that?</p>
    <p><span class="Sherrie">SHERRIE</span><br />Mmmhm. Ah. Harder, master!</p>
    <p>He pulled her head with might. Gasped as the tip of his cock touched the back of her throat. What. Is. This? Sherrie&rsquo;s face illuminated to his reaction and her pupils widened. She grabbed his pants and pulled herself toward his body hard as she could. Pushed the tip cock further into her tight throat as a result, but only just a little bit. She squealed and moaned as she desperately pushed his cock further against the wall of her throat, to no avail. It simply didn&rsquo;t fit. But to his surprise, after a fair amount of gagging and uncontrolled drooling, she got some success.</p>
    <p>Gagged, breathless, and with an almost blue face, she murmured something that he could only interpret as<br />either 'more' or 'harder'.</p>
    <p><span class="Michael">MICHAEL</span><br />Oh fuck, that&rsquo;s so good, I&rsquo;m gonna cum.</p>
    <p>Sherrie took his cock out of her mouth. Apparently, breath was the last thing she sought.</p>
    <p><span class="Sherrie">SHERRIE</span><br />No, master, it&rsquo;s too soon, I promised to take it all in, please give me another minute and I will swallow your whole cock.</p>
    <p>Now that really set him over the edge.</p>
    ${storyImage('S/36')}
    <p>Sherrie&nbsp;ate his cock again and tried to shave it into her throat as hard as she could.</p>
    <p><span class="Michael">MICHAEL</span><br />No, Sherrie, I have to pull out I&rsquo;m really gonna cum.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Ughhhh-g-g-g-mmmmm...</p>
    <p>She looked like she was hurting but she desperately needed it.</p>
    ${storyImage('S/37')}
    <p>He had lasted a little over a minute in her mouth but to him it felt like an hour. He couldn&rsquo;t hold it anymore.</p>
    <p>He grabbed her head and pulled her to him. His cock nudged a thread&rsquo;s width further into her throat and the again nudged a little bit more...</p>
    ${storyVideo('S/38')}
    <p>And then he came... He unloaded his cum right into her throat to the most nerve-shattering orgasm he&rsquo;s ever had.</p>
    <p>Sherrie&rsquo;s throat tightened around his cock as she tried to contain all his cum. He came a good fucking lot, it was too much for her and she choked. He pulled his cock out a little bit and the remainder of his shot was enough to give Sherrie a mouthful.</p>
    ${storyImage('S/39')}
    <p>He smiled at Sherrie and cum spilled out of her mouth as she mirrored him. His knees had melted after shooting all that cum and he could only lift himself up leaning back onto using the kitchen counter. He stared at Sherrie, trying to catch his breath. She hadn&rsquo;t stopped moaning all this time and he instinctively met her with dark satisfied groans of his own. His essence, sliding down Sherrie&rsquo;s chin like she was frothing cum, began spilling to the floor. Sherrie immediately swallowed and collapsed to the floor to lick off what she&rsquo;d dropped.</p>
    <p><span class="Sherrie">SHERRIE</span><br />I&rsquo;m sorry I spilled it, master.</p>
    <p><span class="Michael">MICHAEL</span><br />No, no, Sherrie, get up.</p>
    ${storyImage('S/40')}
    <p>She obyed immediately, licking her fingers, still moaning and humming.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Did you like it, master?</p>
    <p><span class="Michael">MICHAEL</span><br />I absolutely did. What about you? Did you... like it?</p>
    ${storyImage('S/41')}
    <p><span class="Sherrie">SHERRIE</span><br />It doesn&rsquo;t matter, master. I only want to make you happy.</p>
    <p><span class="Michael">MICHAEL</span><br />I&rsquo;m sorry if I didn&rsquo;t last enough.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Don&rsquo;t ever apologize to me, master. You can do what you want.</p>
    <p><span class="Michael">MICHAEL</span><br />I felt you were disappointed that I didn&rsquo;t last long.</p>
    <p><span class="Sherrie">SHERRIE</span><br />I didn&rsquo;t mean to show that, sir. I was afraid you didn&rsquo;t get enough of me and I hadn&rsquo;t satisfied you enough.</p>
    <p><span class="Michael">MICHAEL</span><br />Well, you&rsquo;re right, I&rsquo;m not satisfied. You know what would really make me happy tonight, Sherrie?</p>
    <p><span class="Sherrie">SHERRIE</span><br />Mmmm.</p>
    <p><span class="Michael">MICHAEL</span><br />I uhh... I had this goal of losing my virginity before I turned 18. I guess I missed my chance, but if I could lose myself to you tonight, it would feel really special.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Mmmhm.</p>
    <p><span class="Michael">MICHAEL</span><br />Would you... Can I have sex with you, Sherrie?</p>
    ${storyImage('S/42')}
    <p><span class="Sherrie">SHERRIE</span><br />So you want to fuck me only to lose your virginity, sir?</p>
    <p>He was thrown off guard by her question, uncertain if he&rsquo;d offended her. He certainly didn&rsquo;t want to hurt her feelings and didn&rsquo;t mean to objectify her or make her feel like he was using her. For that very long minute, there was a connection between him and Sherrie that was tighter than any other girl he&rsquo;d known and he was grateful for it. He regretted what he&rsquo;d just said and he wish hewas smoother about it.</p>
    <p>He didn&rsquo;t know what to say. I wanted to apologize and defend myself and I realized it would take some effort to formulate an answer and I had no mind to speak and play games with her. But if I decided to stand by what I just said and go with it till the end, I only needed one word.</p>
    <p><span class="Michael">MICHAEL</span><br />Yes.</p>
    ${storyImage('S/43')}
    <p>Her reaction surprised him even more. She liked what she just heard. It&rsquo;s like she liked being used and objectified. That confused him.</p>
    <p>He&rsquo;s never seen anyone like her before.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Master, let&rsquo;s go to your room.</p>
    <p>He zipped his pants up and pulled Sherrie behind him. Excited as fuck, he...</p>
    <p><strong>SLAM!!!</strong></p>
    <p>A sudden slam echoed through the house&mdash;front door.</p>
    <p><span class="Kelsi-Scream">WHERE IS HE!!!!</span></p>
    <p><span class="Sherrie">SHERRIE</span><br />Master Kelsi is home.</p>
    <p>Fuck. That can&rsquo;t be good.</p>
    <p><span class="Michael">MICHAEL</span><br />You can go to your room, Sherrie. I&rsquo;ve got a thing to sort out with Kelsi first, then I&rsquo;ll drop by and we can do our thing.</p>
    <p><span class="Sherrie">SHERRIE</span><br />Ok, master. I&rsquo;ll wait in my room.</p>
    ${appendLink('Go to the living room', 'section9')}
    `
    )
    
    section8.appendChild(row8);
    
    const section9 = newSection(9);
    
    
    const row9a = storyRow('9a', 'INT. LIVING ROOM<br>ALMOST EVENING', 
    `
    <p>Michael stepped into the living room. The tension was crackling in the air like a live wire. Kelsi was already there, her eyes blazing with fury, her fists clenched so tightly that her knuckles turned white.</p>
    <p><span class="Kelsi">&ldquo;What the fuck is wrong with you?!&rdquo;</span> she spat, her voice like the crack of a whip.</p>
    <p>Michael tensed, trying to maintain his composure. <span class="Michael">&ldquo;What?&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Did Rick call Mandy stupid in front of you?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;He called her a dummy,&rdquo;</span> Michael admitted.</p>
    <p><span class="Kelsi">&ldquo;And you didn&rsquo;t do anything to him?&rdquo;</span> Kelsi&rsquo;s rage flared hotter, her whole body vibrating with anger.</p>
    <p><span class="Michael">&ldquo;What should I have done?&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;You should&rsquo;ve kicked his ass! He insulted our sister right in front of you! You should&rsquo;ve stood up for her! You let him call her a mute dummy to your face, and you did nothing. NOTHING! What kind of man are you?!&rdquo;</span></p>
    <p>Michael&rsquo;s jaw tightened. <span class="Michael">&ldquo;Well, she is mute, and she is a dummy. He didn&rsquo;t say anything wrong. If I fought every person who calls Mandy stupid, I&rsquo;d be fighting the whole school. The whole town, even.&rdquo;</span></p>
    <p>Kelsi&rsquo;s eyes narrowed, her face contorted with disgust. <span class="Kelsi">&ldquo;You&rsquo;re not a man&mdash;you&rsquo;re a fucking coward! You really are a bitch. I&rsquo;m gonna kill you!&rdquo;</span></p>
    <p>Kelsi beating the shit out of him wasn&rsquo;t new, he should&rsquo;ve gotten used to it by now. Michael was scared of Kelsi deep down to his bones but he always entertained the thought that he was going soft on her because she was his sister and that one day he was gonna snap and put her to place if he had a good enough reason to. He was wrong. Today he had every reason in the world to survive Kelsi&rsquo;s attack. He had the utmost desire to win that fight and go to his lovely Sherrie who was soaking waiting for him. But also, today, he met Kelsi&rsquo;s real wrath.</p>
    <p>The words were barely out of her mouth before she lunged at him. Michael braced himself, but it was no use. Kelsi had always been stronger, faster, and more ruthless. Her fists rained down on him, each blow harder than the last. His face, his ribs, his guts. She beat him harder than everthat night. A knee to the stomach and an elbow to the skull knocked him out for 15 mintes.</p>
    ${storyImage('S/46')}
    <p>He woke up, groggy and disoriented, his face throbbing with pain. Kelsi was tying him up. He tried to scream for help, but she stuffed her dirty socks into his mouth, sealing it shut with electrical tape. A final, brutal punch to his face sent him back into ${appendLinkRowInline('unconsciousness', '9b', true)}.</p>
    `
    )
    
    section9.appendChild(row9a);
    
    const row9b = storyRow('9b', 'INT. SOMEWHERE<br>SOMETIME', 
    `
    ${storyImage('basement')}
    <p>Michael didn&rsquo;t know how long he was out, but when he came to, he found himself in complete darkness. The air was thick with dust, the silence oppressive. He was in a storage room, underground&mdash;he could tell by the smell, the dampness, and the cold that seeped into his bones. He twisted and struggled against the ropes binding him, screaming into the gag until his throat was raw, but it was no use. He would rest for a while and repeat again, to no avail.</p>
    <p>He struggled like this for what felt like hours, his mind switching between panic and exhaustion, before he finally gave in and tried to sleep. But sleep was fleeting, his mind too restless, his body too battered.</p>
    <p>Morning came, though he couldn&rsquo;t tell. What he did know was that it was Sherrie who found him, who cut through the ropes and set him free. She had searched for him when he didn&rsquo;t show up at her room last night</p>
    <p>Sherrie knew better than to ask Kelsi, so she combed through the house, her worry mounting with every passing hour. They were unlucky to be out of sync, his muffled rampages never occurred whenever Sherrie descended underground. In the morning, Sherrie was too worried about Michael that she was willing to search the house room by room, until she finally found him, bound and beaten in that dark, forgotten corner of the house.</p>
    <p>Michael&rsquo;s pride took a hit as Sherrie freed him. He hated that she had to see her master like this&mdash;weak and helpless. But at least it wasn&rsquo;t Kenzie or Mom who found him. He was thankful, too, that he hadn&rsquo;t ended up with a concussion or a broken rib after Kelsi&rsquo;s savage attack.</p>
    <p>Sherrie cleaned his wounds and placed ice on the bruises that mottled his face and chest.<br />He kissed her and promised to come to her right after school, trying to sound like the man he wanted to be.</p>
    <p>After Sherrie left, Michael took a long, hot shower, the water washing away the blood but not the humiliation. He went through his morning routine, careful to avoid any encounter with Kelsi just like every day, but extra careful this morning.</p>
    <p>When he was ready he headed to school.</p>
    ${storyEndButton('Chapter 2')}
    `
    )
    
}


// const section = newSection();


// const row = storyRow('', '', 
// `

// `
// )

// section.appendChild(row);

   

    setChapterIndex = ()=> {
    currentChapterIndex.innerHTML= '';

    addToChapterIndex('Section 1 (Preliminary Note)', 'section1') 
    addToChapterIndex('Section 2', 'section2') 
    addToChapterIndex('Section 3', 'section3') 
    addToChapterIndex('Section 4', 'section4') 
    addToChapterIndex('Section 5', 'section5') 
    addToChapterIndex('Section 6', 'section6') 
    addToChapterIndex('Section 7', 'section7') 
    addToChapterIndex('Section 8', 'section8') 
    addToChapterIndex('Section 9', 'section9') 
    }
    

    storyLoad();

    
function updateCountdown() {
    setTimeout(() => {
        fadeTransition(document.getElementById('MainSection'), timeout=100, func =()=> {

            rows['1b'].innerHTML= `
            ${sceneryHeader(' ')}
            
            <div class="rowContent ${contentClass()} ">
            ${storyVideo('K/play', false, false, true, true)}
            
            ${appendLink('Act I', 'section2')}
        </div>
            
            `;
    

        })
        
        
    }, 16000);
}