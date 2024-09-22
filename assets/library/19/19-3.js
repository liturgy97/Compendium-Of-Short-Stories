var vince_num= 2
var jaime_num= 2
loadPage = function() {
    prepareStory();
    
const section1 = newSection(1);

const row1a = storyRow('1a', 'INT. WAITING AREA<br>AFTERNOON', 
`
${storyImage('early/waiting')}
<p>Drew&rsquo;s body was slouched like a rag doll outside the principal&rsquo;s office. He could hear muffled voices through the door, someone else in there getting his ear chewed off.&nbsp;Drew couldn&rsquo;t care less. He stared beneath his feet, trying to find a pattern in the chaos of scuff marks, but his brain wasn&rsquo;t cooperating.</p>
<p>His mind was dark and empty. Since he woke up this morning he&rsquo;d been completely emotionally and mentally drained. It was&nbsp;part hangover, part emotional trainwreck. Last night with Damian was supposed to be a&nbsp;mental enema.&nbsp;He&rsquo;d gone out, hit the bottle hard,&nbsp;hoping his emotions would flood out and&nbsp;cleanse him from the inside but Damian ended up pouring on him instead, both tears and vomit.</p>
<p>He'd never felt this shitty in his life. His bones ached like they&rsquo;d been hollowed out, leaving him weak, lazy, and tired. He drifted through the school day like a dizzy ghost, barely there, barely caring.</p>
<p><span class="PAF-Damian">I&rsquo;m on the outside. I don&rsquo;t belong. I wish I were nothing.</span><br><span class="PAF-Damian">I&rsquo;m on the outside. I don&rsquo;t belong. I wish I were nothing.</span><br><span class="PAF-Damian">I&rsquo;m on the outside. I don&rsquo;t belong. I wish I were nothing.</span><br><span class="PAF-Damian">I&rsquo;m on the outside. I don&rsquo;t belong. I wish I were nothing.</span><br><span class="PAF-Damian">I&rsquo;m on the outside. I don&rsquo;t belong. I wish I were nothing.</span></p>
<p>Words from Damian&rsquo;s drunken rant looped in his head like a broken record. Damian&rsquo;s voice was deep and harsh&nbsp;while&nbsp;he snivelled, a huge contrast to his usually light bird-noises. Melancholic but oddly intoxicating, like the sad song you can&rsquo;t help but play over and over.</p>
<p>The first part resonated with Drew deeply but he couldn&rsquo;t wrap his head around the last part&mdash;<span class="PAF-Damian">&ldquo;I wish I were nothing.&rdquo;</span> It was foreign to him, that desire to disappear.</p>
<p>He pulled out his notebook from his bag and flipped through the pages until he found the one he was looking for.</p>
<p><span class="PAF-Drew" style="font-family: 'Playwrite Argentina', sans-serif">&ldquo;I&rsquo;m an outsider. My family is a joke, and I neglect my friendships. I&rsquo;m a stranger at school. I don&rsquo;t belong in Sam&rsquo;s gang.&rdquo;</span></p>
<p>Drew read the words without feeling.&nbsp;</p>
<p><span class="PAF-Drew" style="font-family: 'Playwrite Argentina', sans-serif">&ldquo;I walk alone in crowds, I fade into the background, I&rsquo;m a stranger everywhere, even in my own mind. I despise people I&rsquo;m supposed to love. I tell people only what makes them shut up. I&rsquo;m an outsider. I don&rsquo;t belong anywhere or to anyone, and I am meant to stay like that. I hate myself.&rdquo;</span></p>
<p>But wanting to disappear? That was not on his agenda.</p>
<p>He suddenly recognized the faint voice of Damian through the wall, begging desperately for something.&nbsp;The office door creaked open, and Damian shuffled out, eyes red, face pale. He looked like a condemned man walking the Green Mile, too absorbed in his own misery to notice Drew. The principal&rsquo;s voice cut through the silence.</p>
<p></p>
${appendLinkRow('<strong>&ldquo;Drew, you&rsquo;re up.&rdquo;</strong>', '1b')}
`
)

section1.appendChild(row1a);

const row1b = storyRow('1b', ' ', 
`
${storyImage('early/principal')}
<p><strong>MR. BAKER</strong><br>Drew, you&rsquo;re suspended.</p>
<p>Drew didn&rsquo;t blink. Didn&rsquo;t say a word. Just stared at the man, blank-faced. The only thing he&rsquo;d said all day was <span class="PAF-Drew"">&ldquo;no&rdquo;</span>; when asked if he brought a blade to school.&nbsp;Yet even that didn't manner. The principal had already made up his mind.&nbsp;Drew&rsquo;s silence was seen as defiance, his blank expression as disrespect, and that only sealed the deal.</p>
<p><strong>&ldquo;Until your parents come in, you&rsquo;re out. And if they don&rsquo;t show, we&rsquo;re involving the cops.&rdquo;</strong></p>
${appendLinkRow('Drew just got up and left.', '1c')}
`
)

const row1c = storyRow('1c', 'INT. SAM&rsquo;S STORE<br>AFTERNOON', 
`
${storyImage('early/sam')}
<p><span class="PAF-Sam">SAM</span><br>Drew, you snort that shit, and I don&rsquo;t know you anymore. I&rsquo;d kick a junkie&rsquo;s teeth in the moment they walk into my store.</p>
<p><span class="PAF-Drew">DREW</span><br>Fine. Give me a pack.</p>
<p>He glanced over at Shamika, who was fussing with her hair by the register. She was lazy with customers, but for Drew, she moved like her life depended on it. Maybe it did.</p>
<p><span class="PAF-Drew">&ldquo;I&rsquo;ll take a lighter and rolling papers too,&rdquo;</span> he said, voice flat.</p>
<p>She scrambled to get a pack from the high shelf.&nbsp;Regulars got spiked smokes to get them hooked up, she'd only get Drew clean ones if she had to.</p>
<p><span class="PAF-Sam">SAM</span> (shouting)<br>This is no joke, kid! Once this shit hits your blood, you&rsquo;re hooked for life! Listen to me, son. You&rsquo;re smart and you&rsquo;ve got a future ahead of you. You can make mistakes you can learn from. Not like this.</p>
<p><span class="PAF-Drew">DREW</span><br>That&rsquo;s the point, Sam. It guarantees you&rsquo;ll be obsessed with something.</p>
<p><span class="PAF-Sam">SAM</span><br>Why, son? Why would you do that to yourself?</p>
<p><span class="PAF-Drew">DREW</span> <br>The blue diamond makes you feel, Sam. It gives you purpose, meaning, and pleasure. It brings light to the life of the thoughtless, hope to the useless; the dead, alive. It sets you on fire.</p>
<p><span class="PAF-Sam">SAM</span> <br>But then you become a slave to the drug. You&rsquo;ll be chasing that high forever, and once you come down, it&rsquo;s hell on earth until you get your next fix. The pain off that thing is worse than anything you can imagine. You&rsquo;re better off killing yourself.</p>
<p><span class="PAF-Drew">DREW</span> <br>I&rsquo;d rather burn than disappear.</p>
<p>Sam&rsquo;s eyes narrowed, his jaw clenched. His face could kill.</p>
<p><span class="PAF-Drew">DREW</span><br>Sell it to me, or I&rsquo;ll get it cheaper from the Riccis.</p>
<p>Sam unlocked a safe under the counter He pulled out a sachet filled with blue powder, mixed with tiny diamond shards fine as dust glinting in the light. Drew slammed a wad of bills, $1000, on the counter, quite disrespectfully, and took his wallet out to pay for the cigarettes and rolling paper.&nbsp;Sam swiped the cash away, scattering it in the air.</p>
<p><span class="PAF-Sam">&ldquo;It&rsquo;s on the house. Consider it a farewell gift. I don&rsquo;t want to see your fucking face again,&rdquo;</span> Sam growled.</p>
<p>Drew didn&rsquo;t flinch. He took the bag Shamika had prepped and turned to leave.</p>
<p><span class="PAF-Shamika">&ldquo;Drew, wait, please!&rdquo;</span> Shamika called before he exited the store. She put her hands on her chest, covering the pack of rolling papers underneath that she could not bring herself to drop in Drew&rsquo;s bag. Voice quivering with desperation, she pleaded. It was the first time she&rsquo;d ever spoken to him.&nbsp;Drew paused and listened.</p>
<p><span class="PAF-Shamika">SHAMIKA</span><br>Please, don&rsquo;t do this. For me.</p>
<p><span class="PAF-Drew">&ldquo;For you? Who the hell are you?&rdquo;</span> Drew sneered as he ${appendLinkInline('walked out.', 'section2')}</p>
`
)



const section2 = newSection(2);

const row2a = storyRow('2a', 'INT. HOME<br>AFTERNOON', 
`
<p>Drew entered home to the familiar sound of Mom&rsquo;s sobs, except they were far louder and more despearate than usual.</p>
${storyVideo('Vince/vince1')}
<p>When he walked into the living room and saw a strange man on top of her, his hand instinctually reached for his blade and he was about stab that son of a bitch. But then he noticed Dad and Jaime in the corner, locked in a passionate embrace. Dad didn&rsquo;t seem to care shit about his wife being destroyed by another man.</p>
${storyImage('Jaime/1')}
<p>As he slowly processed the scene, Drew realized that the man fisting Mom&rsquo;s ass was none other than Vince, a close friend of Dad&rsquo;s and an unbelievably obnoxious man that Drew hated to his core. Mom and Dad were swingers and they occasionally engaged in orgies and slept with other people. Drew didn&rsquo;t know that. To see his mother having sex with a man other than his father disgusted him beyond belief.</p>
<p>The whole place drowned in Mom and Vince&rsquo;s maniacal screams and grunts. Dad was rough and violent but Vince was a totally different beast. Drew had never seen his Mom in such an ecstatic frenzy before. In stark contrast to this mania, Dad was uncharacteristically tender and gentle with Jaime.</p>
<p>Drew gave up. He grabbed a chair, sat at the table and watched. The two shows were in front of him. On his left was Mom and Vince&rsquo;s depraved circus act, to his right was the most beautiful display of love-making he would get the privilege to see in his whole damn life.</p>
${storyVideo('Jaime/jaime1')}
<p>Drew pulled out his little iPod, slid on his headphones, and cranked the music to its loudest setting.</p>
<p>But even the thumping beats couldn&rsquo;t drown out the sounds of Mom and Vince&rsquo;s savage screams and grunts of pain and pleasure.</p>
<p>He ignored those sounds in his mind, focusing instead on Jaime, reading her moans and giggles through the movements of her mouth.</p>
<p>She was in her ballet costume. In his childhood memories that was always her most beautiful form.</p>
${storyImage('Jaime/2')}
<p>Drew&rsquo;s jealousy burned hot as he watched Dad flip Jaime over, descend on his knees, and rip her sacred ballet pantyhose, like she was a doll, a fantastic sight he wouldn't have dared to imagine.</p>
${appendLinkRow('Watch Mom and Vince (Part 2)', '2v2', isSwitch=true, 'setVince(vince_num+1)')}
${appendLinkRow('Watch Dad and Jaime (Part 2)', '2j2', isSwitch=true, 'setJaime(jaime_num+1)')}
`
)

section2.appendChild(row2a);

const row2v2 = storyRow('2v2', 'Mom and Vince (Part 2)', 
`
${storyVideo('Vince/vince2', false)}
${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}
${(jaime_num < 4)? `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}` : ``}
`
)
const row2v3 = storyRow('2v3', 'Mom and Vince (Part 3)', 
`
${storyVideo('Vince/vince3', false)}
${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}
${(jaime_num < 4)? `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}` : ``}
`
)

const row2v4 = storyRow('2v4', 'Mom and Vince (Part 4)', 
`
${storyVideo('Vince/vince4', false)}
${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}
${(jaime_num < 4)? `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}` : ``}

`
)
const row2v5 = storyRow('2v5', 'Mom and Vince (Part 5)', 
`
${storyVideo('Vince/vince2', false)}
${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}

`
)

const row2j2 = storyRow('2j2', 'Dad and Jaime (Part 2)', 
`
<p>Drew watched Dad and Jaime with extreme vigilance. He was numb and feelingless all day but suddenly he was fully awake and attentive, fascinated by their chemistry. He absorbed every small movement they made as it became etched onto his memory.</p>
${storyVideo('Jaime/jaime2', false)}
${(vince_num<5)? `${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}` : ``}

${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}

`
)

const row2j3 = storyRow('2j3', 'Dad and Jaime (Part 3)', 
`
${storyVideo('Jaime/jaime3', false)}
<p>Drew&rsquo;s cock was hard and throbbing in his jeans, and he sneakily stroked it through the fabric, sweating heavily and his heart beating in his chest more rapidly with each second passing, as his anxiety and arousal elevated while watching.</p>
<p>Jealousy had been coursing through him. He wished he&rsquo;d been the one staring in Jaime&rsquo;s eyes, the one who kissed her and fucked her...</p>
${storyImage('Jaime/3')}
<p>...Yet he slowly began to accept the fact that he himself wouldn&rsquo;t have pleasured her a tenth of this. He probably wouldn&rsquo;t have had a tenth of Dad&rsquo;s pleasure even.</p>
<p>He wondered if he himself would&rsquo;ve had half the pleasure coursing through his body right now if it was him on Jaime instead of Dad. His mind and heart were on fire.&nbsp;Was he&nbsp;better off watching Jaime fucked by better men than toughing her himself? He contemplated taking his pants off and jerking off to them.</p>

${(vince_num<5)? `${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}` : ``}

${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}

`
)

const row2j4 = storyRow('2j4', 'Dad and Jaime (Part 4)', 
`
${storyVideo('Jaime/jaime4', false)}

<p>Dad pulled Jaime to the table where Drew had sat watching. Drew was uncomfortable touching himself in their view and sat straight, though they barely acknowledged his existence on the table.</p>
${storyImage('Jaime/4')}
${storyImage('Jaime/5')}
${storyImage('Jaime/6')}
${storyImage('Jaime/7')}
${storyImage('Jaime/8')}
<p>He glanced at Mom and Vince and he was shook in terror at Vince&rsquo;s violence. He feared Dad would give Jaime to Vince after he was done with her. What would 
stop him, he was already making his wife fuck his friend. In a few days, it was going to be gangbangs and orgies on Jaime and Mom inside the house. His 
heart crashed at the thought and he was turned off immediately, within seconds of troubled breath he lost his boner. He took his pack of cigarettes out, 
rolled a cigarette back and forth, loosening the tightly packed tobacco inside to spill out, falling onto the sheet of paper he had spread out in front of 
him. Once the cigarette was empty, reduced to just a hollow tube of white paper, he straightened it out, smoothing the wrinkles with his thumb. He sprinkled 
the diamond powder on the loose tobacco, mixed the tobacco with the powder, then using the edge of another paper, he gently nudged the loose tobacco back 
towards the cigarette, guiding it carefully, bit by bit, back into its original shell. He worked with practiced precision, just&nbsp;like Rico taught him, 
rolling and tapping the paper to ensure the tobacco settled evenly, until the cigarette was full once more. Finally, he twisted the end to seal it, 
returning the cigarette to its original form, as if nothing had ever been disturbed but the tip. Rico would be proud of that job, a true 'invisible joint' as he calls him, but he might cry if he knew what the kid had put inside.</p>
${(vince_num<5)? `${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}` 
    : `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}`}



`
)

const row2j5 = storyRow('2j5', 'Dad and Jaime (Part 5)', 
`
${storyImage('Jaime/9')}
<p>By the time Drew was done rolling his drugged cigarette, Dad had pulled Jaime and moved her to her dancing pole. A tingle went through Drew&rsquo;s brain as he realized Dad was going to fuck her on her bar, a vision that seemed like an erotic dream he&rsquo;d been desperate to recall but always escaped him, and here and now he was about to experience it secondhand. He forgot about his cigarette. Put it aside and ecstatically watched Dad and Jaime&rsquo;s mesmerizing final act.</p>
${storyVideo('Jaime/jaime5', false)}
${setVince(2)}
${setJaime(2)}

${appendLink('Junkie...', 'section3')}

`
)






const section3 = newSection(3);

const row3a = storyRow('3a', ' ', 
`
${storyImage('Jaime/10')}
<p>When Dad finished with Jaime, he asked Vince if he wanted to swap.</p>
<p><span class="PAF-Jaime">&ldquo;I&rsquo;m not comfortable with this,&rdquo;</span> Jaime whispered, panicking.</p>
<p><span class="PAF-Dean">&ldquo;Get up,&rdquo;</span> Dad said firmly, dragging Jaime by the elbow to Mom&rsquo;s side. <span class="PAF-Dean">&ldquo;I want to see him inside you.&rdquo;</span></p>
<p>Jaime&rsquo;s eyes met Drew&rsquo;s while Dad pulled her. Drew saw she was reluctant but didn&rsquo;t make a move. Dad pushed Jaime over and she fell on top of Mom, who lay on the ground almost unconscious. Jaime&rsquo;s head landed right next to the mumbling woman&rsquo;s, their bodies entwined in a grotesque display. Jaime tried to get up but Dad pinned her down, digging his fingers into her scalp, forcing her forehead against the floor. Vince grabbed a bottle of oil and coated Jaime&rsquo;s back, ass, and legs with slick, glistening lube while stroking his cock.</p>
<p><span class="PAF-Jaime">&ldquo;I&rsquo;m not comfortable with this. Can we please talk about this?&rdquo;</span> Jaime pleaded while squirming and struggling to get up, her knees slipped on the slicked floor, making her fall flat on her stomach on top of Mom, earning chuckles from Dad and Vince.</p>
<p><span class="PAF-Dean">&ldquo;Sit still baby, you&rsquo;re gonna like this,&rdquo;</span> Dad said, slapping her on the back twice. He twisted her hair roughly, while grabbing the back of her neck with his other hand, pushing her to the floor.</p>
<p><span class="PAF-Vince">&ldquo;Jesus Christ, she&rsquo;s a squirmer!&rdquo;</span> Vince exclaimed. He grabbed Jaime&rsquo;s knees and pulled them back, making her flap on her face. She was subdued for a second, until Vince shoved the neck of the bottle and squeezed oil into her asshole, which squirted back outright. Jaime&rsquo;s legs flapped in defiance and Vince unleashed cruel slaps on her ass. That made her give up all control to Dad and Vince. Vince held his cock at the base, directing it towards Jaime&rsquo;s ass.</p>
<p>The sound of her muffled screams and pleas for help filled Drew with rage. His hand reached for his blade before stopping short. He hesitated and glanced at the cigarette he just wrapped.</p>
${appendLinkRow('Light the cigarette and watch' , '3b', true, 'select_junkie_path()')}
${appendLinkRow('Kill them all' , '3c', true, 'select_blood_path()')}


`
)

section3.appendChild(row3a);




const row3b = storyRow('3b', ' ', 
`
<p>What did it matter? Jaime&nbsp;was already dead to him. Yesterday, that&rsquo;s what he told himself, today he couldn&rsquo;t help but admire her again. Maybe Vince would destroy her for good.&nbsp;</p>
<p><strong>Click.</strong></p>
<p>His drugged cigarette hung from his lips. Drew&rsquo;s eyes gleamed, reflecting the flame in his lighter.</p>
<p><strong>Ding-dong.</strong></p>
<p>The doorbell&rsquo;s sudden ring cut through the scene like a knife through flesh. Vince and Dad exchanged a look, then tossed a glance at Drew, a silent order in their eyes. He let out a low growl, pissed at being pulled away from the dark thrill of it all, but he wasn&rsquo;t about to argue. Not now.</p>
<p>He tucked his erection in his jeans and pushed himself up, the cigarette still clinging to his lips. It swayed with every step as he made his way to the door.&nbsp;</p>
<p>But something was off. Whoever was at the door wasn&rsquo;t in front of the peephole, standing just out of sight. An alarm was set in the back of his head. He paused, eyes narrowing as he took the cigarette from his mouth and carefully slipped it back into the pack, upside down.</p>
<p>He stood there for a second longer, hand hovering over the knob, before finally giving in and opening the door, ${appendLinkInline('slow' , 'section4')} as hell, like he was bracing himself for whatever was coming next.</p>
`
)





const row3c = storyRow('3c', 'Kill them all', 
`

<p><strong>Click. Snap.</strong></p>
<p>The room stank of sweat, fear, and bad decisions.</p>
<p>Drew stood up, knife in hand, the Buck gleaming under the light. The room went still. Dean and Vince locked eyes with him, their smirks fading into something raw and ugly.&nbsp;</p>
<p><span class="PAF-Vince">&ldquo;The fuck are you on about?&rdquo;</span> Vince&rsquo;s voice wavered, though he tried to mask it with a sneer. He and Dad got to their feet, slow and deliberate, like two animals sizing up a predator.</p>
<p>Drew didn&rsquo;t say a word. He didn&rsquo;t have to. The fire in his eyes was enough.</p>
<p>The silence was suffocating. Jaime, crumpled on the ground like discarded trash, didn&rsquo;t even breathe.&nbsp;The three of them were caught in a sick game of chicken, Vince and Dad standing helplessly, completely naked in front of Drew, with their cocks erecting outwards.&nbsp;Drew&rsquo;s grip tightened on the knife.</p>
<p><strong>Ding-dong.</strong></p>
<p>The sudden chime of the doorbell shattered the silence like a bullet through glass. Drew blinked, momentarily thrown off his deadly focus. He caught the flash of fear in Vince and Dean&rsquo;s eyes, and it brought a twisted grin to his face.</p>
<p><strong>Snap.</strong> He flicked the blade back into its sheath. <span class="PAF-Drew">&ldquo;Stay where you are,&rdquo;</span> he growled, his voice a low rumble of menace. That grin was still plastered on his face as he turned to the door.</p>
<p>But as he approached, something changed. Whoever was at the door was smart&mdash;or paranoid. They were standing off to the side, out of sight. Drew&rsquo;s grin faltered, replaced by a flicker of unease. He hesitated, fingers brushing the door handle, then ${appendLinkInline('slowly' , 'section4')} pulled it open</p>

`
)



const section4 = newSection(4);


const row4a = storyRow('4a', 'EXT. FRONT PORCH<br>LATE AFTERNOON', 
`
${storyImageCenter('damian1', false)}
<p>There she stood&mdash;a girl shy and sweet, a stark contrast to the harshness that had filled the room moments ago. Drew&nbsp;raised an eyebrow, wondering what she wanted.</p>
<p>She looked up at him,</p>
<p><span class="PAF-Damian">&ldquo;Hey you...&rdquo;</span></p>
<p>Her voice carries a delicate lilt, with gentle inflections vibrating through the dull air. It&rsquo;s soft, her voice, almost ethereal, with a sweetness that evokes the memory of the delicate <br>timbre of a songbird. Her face is like a songbird&rsquo;s too.</p>
<p>She&rsquo;s mad cute.</p>
<p>Her nose is slender and refined, resembling the elegant beak. Her eyes shimmer with the same brightness of a small bird&rsquo;s. Framing her face, her lips possess a softness that mirrors the tender chirps of a bird&rsquo;s call, forming a lip purse that melts the heart. Words fluttered from her lips, imbued with a tender grace that caresses the ears. There&rsquo;s a lightness to her tone. Her voice resonates with warmth and sensitivity that are familiarly nice.</p>
<p>A smile slithered to the corners of Drew&rsquo;s lips.&nbsp;</p>
<p><span class="PAF-Drew">&ldquo;Damian?&rdquo;</span> His voice was low, almost a whisper, as he looked her&mdash;no, him, over, his gaze lingering on the way his features lit up under the afternoon sun. Damian, wearing a wig, makeup, and a skirt, was breathtaking in a way that caught Drew off guard. Drew&rsquo;s breath hitched, the world narrowing down to just the two of them.</p>
<p><span class="PAF-Damian">&ldquo;I&rsquo;ve sent you like a thousand messages. I need you.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;You look&hellip;&rdquo;</span> Drew trailed off, at a loss for words.</p>
<p>Damian shrugged, a little self-conscious. <span class="PAF-Damian">&ldquo;Weird? That's what I wear at home. I wouldn&rsquo;t dare leave home like this&hellip; until I met you.&rdquo;</span></p>
<p>Drew bit his lip,&nbsp;mesmerized by Damian&rsquo;s transformation.&nbsp;Something tugged at Drew&rsquo;s instincts&nbsp;but he didn't know what it was. He couldn&rsquo;t even shake the shock.</p>
<p><span class="PAF-Damian">&ldquo;Do you wanna go for a walk?&rdquo;</span> Damian&rsquo;s voice was soft, vulnerable.</p>
<p>Drew nodded, shutting the door behind him with a resolute ${appendLinkRowInline('click', '4b')}.</p>
`
)

section4.appendChild(row4a);




const row4b = storyRow('4b', 'EXT. STREETS<br>LATE AFTERNOON', 
`
${storyImageRight('city', false)}

<p>They walked through the city, the weight of Damian&rsquo;s confession hanging between them like a dark cloud. Drew&rsquo;s mind was racing, trying to make sense of it. Damian had been expelled from school. Drew did something reckless and got&nbsp;away with a suspension that he knew his parents could talk their way out of while Damian was immediately expelled for something simple.</p>
<p><span class="PAF-Drew">&ldquo;Why?&rdquo;</span> Drew&rsquo;s voice was edged with disbelief.</p>
<p><span class="PAF-Damian">&ldquo;I was caught kissing a boy, Drew. Come on.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;It&rsquo;s not that big of a deal,&rdquo;</span> Drew argued. <span class="PAF-Drew">&ldquo;They can&rsquo;t expel you for that.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;They can get away with it.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Your parents can sue them!&rdquo;</span> Drew&rsquo;s emotions flooded him.</p>
<p><span class="PAF-Damian">&ldquo;Trust me, they won&rsquo;t... They&rsquo;ve been looking for an excuse to take me out of school.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;What the hell is going on with you?&rdquo;</span> Drew asked, his frustration mingling with concern.</p>
<p>Damian stepped in front of him, his eyes searching Drew&rsquo;s face. <span class="PAF-Damian">&ldquo;Drew, I need to run away.&rdquo;</span></p>
<p>Drew demanded answers, wanted to understand what had driven Damian to this point. But Damian refused to explain. He nodded hesitatingly when Drew asked if he was in trouble, like he wasn&rsquo;t sure if he was, but he was undeniably scared about something. Damian asked if it was possible for one to run away and start over. Drew walked past Damian angrily and Damian followed, waiting for an answer. He found himself walking faster, his brain whirling with uncertainty. He did not know how to run away without getting mixed up with the wrong people, and Damian was too good for that world.</p>
<p><span class="PAF-Drew">&ldquo;What the fuck are you looking at?&rdquo;</span> He sneered at an old man who paused and eyed Damian curiously.</p>
<p>As they neared the city center, Drew couldn&rsquo;t ignore the way people stared at Damian. Damian was turning heads left and right as he walked. His slender frame, porcelain smooth clear pale skin, and natural grace attracted the eye. He looked like a girl on the first glance, but an examination of his square shoulders and face features and his prominent Adam&rsquo;s apple left a suspicion of his masculinity. A vein popped on Drew&rsquo;s forehead for every gesture of shock or disgust in the body language of the pedestrians surrounding them. Damian was struggling to catch up with Drew&rsquo;s pace. He slowed his pace, grabbing Damian&rsquo;s hand and pulling him close.</p>
<p><span class="PAF-Jax">JAX</span><br>Yo, Drew! (honk) (honk) Come right here!</p>
<p>Jax leaned against his car, a smirk curling his lips as he watched Drew walk past without noticing. He called out&nbsp;and stretched through the window to honk the horn for emphasis.</p>
<p>Drew turned, his face hardening as he approached. <span class="PAF-Drew">&ldquo;What&rsquo;s up?&rdquo;</span></p>
<p><span class="PAF-Jax">&ldquo;I heard you crushed Sam&rsquo;s little pony&rsquo;s heart. You know she had a crush on you?&rdquo;</span> Jax grinned as he bumped shoulder with Drew. <span class="PAF-Jax">&ldquo;That your girl?&rdquo;</span>&nbsp;Jax asked, the words dripping with disdain.</p>
<p>Drew&rsquo;s response was immediate&nbsp;and protective, his voice cold and hard. <span class="PAF-Drew">&ldquo;He&rsquo;s a boy.&rdquo;</span></p>
<p><span class="PAF-Jax">&ldquo;A boy?&rdquo;</span> Jax&rsquo;s eyebrows shot up. <span class="PAF-Jax">&ldquo;And whatcha doing that to youself for, man?&rdquo;</span></p>
<p>Jax leaned in, his hand reaching out toward Damian with a leer. But Drew stepped in, his presence a wall between them.</p>
<p><span class="PAF-Drew">&ldquo;Don&rsquo;t touch him,&rdquo;</span> he warned, his voice cold as ever, eyes shooting daggers at Jax.&nbsp;<span class="PAF-Drew">&ldquo;He's mine.&rdquo;</span></p>
<p>Jax could see the golden blur of Drew&rsquo;s switchblade in his eyes. He chuckled, raising his hands in mock surrender. <span class="PAF-Jax">&ldquo;Easy, man. Didn&rsquo;t know you were queer.&rdquo;</span></p>
<p>The seriousness on Jax&rsquo;s face and tone invited a fight. But Drew let the tension slide off his shoulders, though his grip on ${appendLinkRowInline('Damian', '4c')}&rsquo;s hand tightened. <span class="PAF-Drew">&ldquo;Whatever, Jax. I need to ask you something.&rdquo;</span></p>
`
)




const row4c = storyRow('4c', 'EXT. CITY CENTER<br>BEFORE SUNSET', 
`
${storyImageCenter('jax_city', false)}
<p><span class="PAF-Jax">&ldquo;You ain&rsquo;t built for this life, kid,&rdquo;</span> Jax muttered, shaking his head. <span class="PAF-Jax">&ldquo;But fine, listen up. You gotta take the train west, head to Lindenport.&rdquo;</span></p>
<p><span class="PAF-Damian">DAMIAN</span> (confused)<br> Lindenport? But why there?&nbsp;</p>
<p><span class="PAF-Jax">JAX</span><br>There&rsquo;s a safe house&nbsp;there run&nbsp;by the Ricci family. They got good relations with Sam&rsquo;s gang. We go way back.</p>
<p><span class="PAF-Damian">DAMIAN</span> (hesitant)<br>But... Lindenport is a shitty place. They call it ther incel capital of the world... I was thinking maybe somewhere else, somewhere far away.</p>
<p><span class="PAF-Jax">JAX</span><br>Listen, kid. As far as I know, only the big families can gurantee you a new identity and hide you in plain sight.&nbsp;One of them are&nbsp;real nasty motherfuckers. They'll see a weak, pretty boy like you without protection and they'll fuck you up and whore you out, if you know what I mean. I ain't even gonna say their names, they&rsquo;re that dangerous.</p>
<p>He scribbled an address on a scrap of paper, handing it to Damian. <span class="PAF-Jax">&ldquo;Here. They'll look after ya. Tell &rsquo;em Jax sent you.&rdquo;</span></p>
<p>Damian took the paper, shook hands with Jax. <span class="PAF-Damian">&ldquo;Thank you, Jax. I owe you.&rdquo;</span></p>
<p>Jax&rsquo;s expression softened, just for a moment. <span class="PAF-Jax">&ldquo;Just stay outta trouble, kid. And remember, you owe Sam&rsquo;s gang now. Don&rsquo;t mess it up.&rdquo;</span></p>
<p><span class="PAF-Damian">DAMIAN</span>&nbsp;(nodding firmly)<br>I won&rsquo;t. And I won&rsquo;t forget this.</p>
<p><span class="PAF-Jax">JAX</span><br>Good luck to ya, kid. You&rsquo;re gonna need it. Hey, when are you leaving?</p>
<p><span class="PAF-Damian">DAMIAN</span> (somberly)<br> Tonight.</p>
<p>Damian turned to Drew.</p>
<p><span class="PAF-Damian">DAMIAN</span><br>I guess it&rsquo;s farewell then.</p>
<p><span class="PAF-Drew">DREW</span><br>What will you do now?</p>
<p><span class="PAF-Damian">DAMIAN</span><br>I have to go to the train station and buy a ticket. Do you think we&rsquo;ll ever see each other again?</p>
<p><span class="PAF-Drew">DREW</span><br>I doubt it.</p>
<p><span class="PAF-Damian">DAMIAN</span><br>Okay, I know I&rsquo;ll regret it for the rest of my life if I don&rsquo;t ask this now. Can I ask you something before I go?</p>
<p><span class="PAF-Drew">DREW</span><br>Don&rsquo;t ask me to come with you.</p>
<p><span class="PAF-Damian">DAMIAN</span><br>No, I wouldn&rsquo;t ask you that while sober. It&rsquo;s much simpler but it would mean the world to me.</p>
<p><span class="PAF-Drew">DREW</span><br>Sure.</p>
<p><span class="PAF-Damian">DAMIAN</span> (stepping closer)<br>Kiss me.</p>
${storyImageCenter('damian2')}
<p><span class="PAF-Drew">DREW</span> (raising an eyebrow)<br>Kiss you?</p>
<p><span class="PAF-Damian">DAMIAN</span><br>Yes, kiss me, here, on the lips. Kiss me good and hard, like I&rsquo;m your kind of girl.</p>
${appendLinkRow('Kiss him', '4d', true, 'setKiss(true)')}
${appendLinkRow('Don&rsquo;t', '4d', true, 'setKiss(false)')}
`
)


const row4d = storyRow('4d', ' ', 
`
${storyPart('first-kiss-accepted', 
    `
    <p>His curiousity was piqued.</p>
    <p>He still wondered what pushed Damian to the brink of desperation. For a moment, he feared that Damian would plead to run away together and he dreaded having to break Damian&rsquo;s heart before they parted ways. But then Damian&rsquo;s request was even more audacious than that.</p>
    <p>He knew this would be the last time he saw Damian, or the last time he would want to see him. A vulnerable pretty guy like him wouldn&rsquo;t last in the hands of the wrong people. He&rsquo;d be used and abused, just like Jaime.</p>
    <p><span class="PAF-Drew">&ldquo;Open your mouth, slut.&rdquo;</span> Without warning, he grabbed the back of Damian&rsquo;s neck, his grip firm and possessive, mirroring the cruel touch he&rsquo;d seen his father use on Jaime earlier. Damian gasped, their faces so close now that Drew could feel Damian&rsquo;s cool breath on his fevered skin.</p>
    <p><span class="PAF-Damian">&ldquo;I think my brain just melted,&rdquo;</span> Damian breathed, caught in the thrill of Drew&rsquo;s grip.</p>
    <p>And then they were kissing.</p>
    <p><span class="PAF-Jax">&ldquo;Yo, that shit&rsquo;s gay as fuck!&rdquo;</span> Jax laughed, his head thrown back in a loud, mocking guffaw.</p>
    <p>Their tongues tangled in a heated dance. Drew&rsquo;s tongue was long and heavy, dominating, while Damian&rsquo;s was quick and light, teasing, flicking rapidly against Drew&rsquo;s. Drew&rsquo;s grip tightened, a silent command for more, and with a gasp, Damian&rsquo;s tongue slipped deeper into Drew&rsquo;s mouth. Drew sucked on it powerfully, drawing a moan from Damian&rsquo;s lips until, finally, he pulled away, leaving Damian breathless and wanting more. 
    Damian clung to him, unallowing distance yet. Drew hugged him back. Damian&rsquo;s body,&nbsp;soft against Drew&rsquo;s solid frame, fit perfectly against him, as if they were made for this moment.</p>
    <p><span class="PAF-Damian">&ldquo;God almighty, you&rsquo;re so strong,&rdquo;</span> Damian whispered, his breath warm against Drew&rsquo;s skin. Drew could feel the tremble in Damian&rsquo;s body, the way his breath hitched with emotion. Before he could respond, Damian&rsquo;s lips found his neck, pressing soft, possessive kisses that made Drew&rsquo;s pulse quicken. Damian&rsquo;s fingers slid under Drew&rsquo;s t-shirt, exploring the hard muscles of his abdomen with a touch that was both tender and electric. Drew&rsquo;s body responded instinctively, a shiver running down his spine as Damian&rsquo;s touch ignited something deep within him.</p>
    <p>Drew&rsquo;s head turned left and right. He felt the weight of the crowd&rsquo;s eyes on them, the judgment and disdain palpable in the air.</p>
    <p>Damian&rsquo;s kisses continued, moving down Drew&rsquo;s chest with a fervor that was almost desperate. <span class="PAF-Damian">&ldquo;You&rsquo;re the strongest man I&rsquo;ve ever known,&rdquo;</span> he murmured between kisses breathlessly.</p>
<p><span class="PAF-Drew">&ldquo;You can&rsquo;t fucking seduce me, slut,&rdquo;</span> Drew growled roughly in Damian&rsquo;s ear, but made no move to pull away. His mind whirled, caught between the sensation of Damian&rsquo;s touch and the awareness of the crowd around them. The attention of so many people, their potential disgust, his desire to shield Damian from them, only added to the conflict in his mind.</p>
<p><span class="PAF-Damian">&ldquo;When I saw you pull that knife on Dan, I was so scared I almost pissed myself,&rdquo;</span> Damian confessed, his words in a rush as his lips continued their journey down Drew&rsquo;s body. <span class="PAF-Damian">&ldquo;When you beat those guys at the club, my heart almost stopped. But then I realized, I crave that feeling.&rdquo;</span></p>
<p>Damian&rsquo;s hands moved with a fevered urgency, pulling off his wig, eyelashes, and skirt, leaving him standing half-naked in the street, lower-body covered only in sheer black panties. <span class="PAF-Damian">&ldquo;I crave being in danger around you, so you can protect me,&rdquo;</span> Damian admitted, his eyes locked on Drew&rsquo;s with a challenge that made Drew&rsquo;s blood run hot.</p>
${storyImageCenter('damian3')}
<p>Drew&rsquo;s breath came hard and fast, his heart hammering in his chest as he stared at Damian. <span class="PAF-Drew">&ldquo;You crazy little slut!&rdquo;</span> he barked in Damian&rsquo;s face, who tweaked in fear and shame, his fists clenched by his sides, fighting the instinct to cover himself.</p>

    `
        
    )}

${storyPart('first-kiss-declined', 
`
<p><span class="PAF-Drew">&ldquo;I&rsquo;m sorry, Damian. I can&rsquo;t.&rdquo;</span></p>
<p>Damian&rsquo;s eyes dimmed. <span class="PAF-Damian">&ldquo;Okay,&rdquo;</span> he said quietly, <span class="PAF-Damian">&ldquo;can I have a hug then?&rdquo;</span></p>
<p>Drew stepped closer, wrapping his arms around Damian in a hesitant embrace. Damian clung to him, his body,&nbsp;soft against Drew&rsquo;s solid frame, fit perfectly against him, as if they were made for this moment.</p>
<p><span class="PAF-Damian">&ldquo;God almighty, you&rsquo;re so strong,&rdquo;</span> Damian whispered, his breath warm against Drew&rsquo;s skin. Drew could feel the tremble in Damian&rsquo;s body, the way his breath hitched with emotion. Before he could respond, Damian&rsquo;s lips found his neck, pressing soft, possessive kisses that made Drew&rsquo;s pulse quicken. Damian&rsquo;s fingers slid under Drew&rsquo;s t-shirt, exploring the hard muscles of his abdomen with a touch that was both tender and electric. Drew&rsquo;s body responded instinctively, a shiver running down his spine as Damian&rsquo;s touch ignited something deep within him.</p>
<p>But then, Jax&rsquo;s laughter broke through the moment, loud and mocking. <span class="PAF-Jax">&ldquo;Yo, that shit&rsquo;s gay as fuck!&rdquo;</span> Jax called out, his voice cutting through the intimacy like a knife. Drew felt the weight of the crowd&rsquo;s eyes on them, the judgment and disdain palpable in the air.</p>
<p>Damian&rsquo;s kisses continued, moving down Drew&rsquo;s chest with a fervor that was almost desperate. <span class="PAF-Damian">&ldquo;You&rsquo;re the strongest man I&rsquo;ve ever known,&rdquo;</span> he murmured between kisses breathlessly.</p>
<p><span class="PAF-Drew">&ldquo;You can&rsquo;t fucking seduce me, slut,&rdquo;</span> Drew growled roughly in Damian&rsquo;s ear, but made no move to pull away. His mind whirled, caught between the sensation of Damian&rsquo;s touch and the awareness of the crowd around them. The attention of so many people, their potential disgust, his desire to shield Damian from them, only added to the conflict in his mind.</p>
<p><span class="PAF-Damian">&ldquo;When I saw you pull that knife on Dan, I was so scared I almost pissed myself,&rdquo;</span> Damian confessed, his words in a rush as his lips continued their journey down Drew&rsquo;s body. <span class="PAF-Damian">&ldquo;When you beat those guys at the club, my heart almost stopped. And I realized, I crave that feeling.&rdquo;</span></p>
<p>Damian&rsquo;s hands moved with a fevered urgency, pulling off his wig, eyelashes, and skirt, leaving him standing half-naked in the street, lower-body covered only in sheer black panties. <span class="PAF-Damian">&ldquo;I crave being in danger around you, so you can protect me,&rdquo;</span> Damian admitted, his eyes locked on Drew&rsquo;s with a challenge that made Drew&rsquo;s blood run hot.</p>
${storyImageCenter('damian3')}
<p>Drew&rsquo;s breath came hard and fast, his heart hammering in his chest as he stared at Damian. <span class="PAF-Drew">&ldquo;You crazy little slut!&rdquo;</span> he barked in Damian&rsquo;s face, who tweaked in fear and shame, his fists clenched by his sides, fighting the instinct to cover himself.</p>
<p><span class="PAF-Damian">&ldquo;Kiss me now or I&rsquo;ll take all my clothes off!&rdquo;</span> Damian screamed, his eyes blazing wildly.</p>
`)}

<p>The onlookers&rsquo; jeers and taunts filled the air. Curses and slurs were thrown Damian&rsquo;s way by the dozens, while Jax intimidated and pushed off those who came too close. Some cars passing by honked, a few even stopped.</p>
<p>Disbelief and fury battled within Drew. His anger boiled over, and before he could stop himself, he grabbed Damian by the throat. The first slap echoed like a thunderclap against Damian&rsquo;s skull, followed by two more, each one more punishing than the last. Harsh curses he spat, laced with a mixture of rage and lust that he could no longer control.</p>
<p><span class="PAF-Damian">&ldquo;You make me mad, and you turn me wild,&rdquo;</span> Damian sobbed between the slaps. <span class="PAF-Damian">&ldquo;I&rsquo;m intoxicated by your power.&rdquo;</span></p>
<p>Drew&rsquo;s grip on Damian&rsquo;s neck loosened, the anger in him softening into something darker. What he just heard, in that desperate, needy voice, clicked with him just right. His first instinct screamed 'bullshit' but he recalled last night when he kissed and touched Damian up while he was intoxicated and 
Damian said he understood that feeling, to lose oneself completely. And he wondered if Damian was truly and simply drunk on him without exaggeration...and it clicked with Drew. Just. Right. His control slipped, and before he could fully comprehend it, Damian pulled him into a deep, fevered kiss. The world around them faded into oblivion as their bodies collided, the kiss igniting a fire through both of them.</p>
<p>Their hands explored each other eagerly, groaning and moaning with pleasure. Damian felt the bulge in Drew&rsquo;s pants against his stomach and he gasped. His hand found its way into Drew&rsquo;s pants, stroking his semi-erect cock while they kissed. Drew, inspired by his father, massaged Damian&rsquo;s neck with his thumbs, yet Damian was far more an advanced kisser than Drew. A perfect kisser. His tongue flickered rapidly under Drew&rsquo;s lazy slow tongue, earning a deep satisfied moan from Drew. With arousal coursing hot in his stomach and pain growing in his balls, Damian curled forward. Drew dug his fingers in the flesh of his exposed butt and pulled him close by the waist with strength that made Damian moan into his mouth. Damian&rsquo;s rapidly moving tongue came to a crawl, he paused, and tapped the most sensitive spot on Drew&rsquo;s tongue in a slow, pulsating, unsatisfying rhythm that teased and tormented with equal measure, driving Drew to the brink of madness as Damian sneakily unbuttoned his jeans. Drew sunk his fingers deeper into Damian&rsquo;s soft buttocks which he&rsquo;d been groping for so long. Damian wouldn&rsquo;t stop moaning and teasing, his tongue skillfully avoiding Drew&rsquo;s furious licker. Drew unleashed three thunderous slaps on Damian&rsquo;s butt. Damian&rsquo;s knees buckled beneath him, his body sinking to the ground as he gasped for breath, his lower back trembling with the aftershocks of Drew&rsquo;s passion. The little devil pulled Drew&rsquo;s pants on his way down, exposing Drew&rsquo;s erect cock. He took Drew into his ${appendLinkInline('mouth', 'section5')} without hesitation.</p>

`
)

const section5 = newSection(5);


const row5a = storyRow('5a', 'EXT. CITY CENTER<br>EVENING', 
`
${storyImage('twilight')}
<p>On Oct 13, 2002, Carolinia City saw its sexiest twilight. At the center of its busiest spot, Jax towered like a black titan, arms spreading wide. He dared a motherfucker to step up and interfere, while he urged Drew to get the fuck on with his goodbye.</p>
<p>Drew stood high and commanding. His hands were calm and limp by his sides, chin held high, legs planted in a wide stance reminiscent of a Greek god's.</p>
<p>Beneath him was Damian, on his knees,&nbsp;back arched and rosy ass cheeks spread wide, eagerly bobbing on Drew&rsquo;s rigid cock while stroking it with one hand.</p>
<p>Perfect kisser was an expert cocksucker. He knew how to please a cock very well but even he wasn&rsquo;t used to working a cock so hard and struggled to keep up with Drew&rsquo;s intense thrusts.</p>
<p>The blood pumping through Drew&rsquo;s engorged cock threatened to burst out of its skin. His cock was hard as fuck. So hard it hurt him from the inside, like a dagger stabbing from within, each bob of Damian&rsquo;s head shooting pain in Drew&rsquo;s spine.</p>
<p>Waves of pleasure and pain traveled between the fluidly moving couple.</p>
<p>With sadistic glee shining in Drew&rsquo;s eyes and a twisted grin playing on his sweaty face, he basked in the thousands of disgusted stares of the surrounding crowd.</p>
<p>It was full chaos. Danger lurking from all sides and the prospect of spilling blood loomed on him, that little femboy before him sucking him so eagerly, the attention of thousands of people witnessing his lewdness, everything hit him just right.</p>
<p>Every nerve in his body tingled with anticipation as he reached the brink of a full-body and mind orgasm, releasing all the tension, shame, and anger that had been building inside him for days.</p>
<p>Just then, a group of intimidating black thugs appeared behind Damian, sporting vicious viper tattoos around their necks.</p>
<p><strong>&ldquo;Look at those faggots,&rdquo;</strong> One of them sneered, lifting his tank top to reveal a pistol in his jeans.</p>
<p>Damian&rsquo;s heart almost stopped as the three shadows covered him. His spine shriveled up and his grip on Drew&rsquo;s cock tightened reflexively, his teeth chattering uncontrollably. He slowly began taking his head off Drew&rsquo;s cock.</p>
<p>Drew&rsquo;s knife materialized in his hand. And with a growl so dark it would've made the Devil shit himself, he pronounced. <span class="PAF-Drew">&ldquo;Let go and I slit your throat.&rdquo;</span></p>
<p>Head bobbing, click-snap, gunshot, police sirens.</p>
${storyPart('junkie_path_link', 
`${appendLinkRow('30 miles by...', '5b', true)}`
)}
${storyPart('blood_path_link', 
    `${appendLinkRow('Common As Light And Love Are Red Valleys Of Blood', '5c', true)}`
    )}
    


`
)

section5.appendChild(row5a);



const row5b = storyRow('5b', 'Butterflies', 
`
<p>Tension, gunpowder, and adrenaline. Jax fired his gun. The crack of the shot echoed through the street, and the viper went down, clutching his shoulder. The other two scattered, running for cover just as the wail of police sirens filled the falling night. Three patrol cars screeched onto the scene, lights flashing.</p>
<p>Jax barked an order to flee. Drew tucked his boner and Damian picked up his skirt of the pavement. They sprinted to Jax&rsquo;s beat-up sedan who already had the engine roaring. They piled in, and Jax floored it, tires squealing as they shot out of the fray. Jax weaved through the chaos skillfully, like it wasn&rsquo;t his first rodeo. Miraculously, they escaped, evading the cops with only Jax&rsquo;s car recieving injuries.</p>
<p>Jax didn&rsquo;t slow down until they were parked at a trusted mechanic&rsquo;s joint.</p>
<p>The mechanic took one look at the car&rsquo;s bullet-riddled backside and whistled low, said it was a miracle they ran 30 miles with a leaking tank and not ending up in flames.</p>
<p>Jax exploded in Drew and Damian&rsquo;s faces, berating them for their little sissy act. Drewkept his cool at first, letting Jax&rsquo;s anger wash over him like a tidal wave. He thanked Jax for not leaving them behind because they might have not been alive without him. Though the words only made Jax&rsquo;s rage burn hotter. <span class="PAF-Jax">&ldquo;You think I&rsquo;d leave a brother behind? You really think that, Drew?&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Well, why the hell didn&rsquo;t you stop us?&rdquo;</span> Drew shot back, his voice rising, the calm facade starting to crack.</p>
<p>Jax said he wouldn&rsquo;t touch the twisted motherfucker with a phantom blade. They went back and forth like a pair of boxers trading blows in the final round. Drew unconsciously tightened his grip around Damian&rsquo;s hand as his passion escalated. Damian was by his side, completely unfazed by the heated verbal fight, soaking in his last moments in Drew&rsquo;s presence, savoring them.</p>
<p>Then, like a ticking clock finally going off in his mind, Damian glanced at his watch. <span class="PAF-Damian">&ldquo;Drew, we gotta go. I need to catch a train.&rdquo;</span></p>
<p>Drew turned to Jax, audacious as ever. <span class="PAF-Drew">&ldquo;Can you drive us to the station?&rdquo;</span></p>
<p>Jax grunted, half-annoyed, half-amused. <span class="PAF-Jax">&ldquo;I&rsquo;m afraid you two horny bastards are gonna get my car all sticky.&rdquo;</span> He was still fuming at Drew, but he had a soft spot for Damian. The car was busted up and needed hours of work, so Jax borrowed a beater from the shop. Still, he&rsquo;d jokingly insist they didn&rsquo;t have sex in the car.</p>
<p>They pulled up at the train station around 10PM. Drew sat in the passenger seat, staring out the window, eyes scanning the crowd anxiously as Damian went to buy his ticket, counting each second Damian was out of sight. His mind spiraled into dark places.</p>
<p>Jax noticed the tension and nudged him, shaking him out of his obsession. <span class="PAF-Jax">&ldquo;You good, man?&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Yeah, I&rsquo;m fine.&rdquo;</span></p>
<p><span class="PAF-Jax">&ldquo;I&rsquo;m gonna miss that kid,&rdquo;</span> Jax said, more to himself than to Drew. <span class="PAF-Jax">&ldquo;He&rsquo;s a fucking charm.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Yeah,&rdquo;</span> Drew muttered. <span class="PAF-Drew">&ldquo;I&rsquo;m absolutely fine.&rdquo;</span></p>
<p><span class="PAF-Jax">&ldquo;Jesus Christ, these kids&hellip;&rdquo;</span> Jax muttered, shaking his head.</p>
<p>Finally, Damian reappeared, ticket in hand. <span class="PAF-Drew">&ldquo;What took you so damn long?&rdquo;</span> Drew snapped, a little too sharply.</p>
<p><span class="PAF-Damian">&ldquo;There was a line,&rdquo;</span> Damian explained, unfazed. <span class="PAF-Damian">&ldquo;Got a ticket for the 2AM train.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Good. That&rsquo;s still three hours away. You wanna hang out until then?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Yeah, sure.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Where&rsquo;s your stuff?&rdquo;</span> Drew asked, noticing Damian was empty-handed.</p>
<p><span class="PAF-Damian">&ldquo;I didn&rsquo;t bring any. I got enough cash to buy what I need.&rdquo;</span></p>
<p>Drew frowned. <span class="PAF-Drew">&ldquo;Let&rsquo;s head to your place&nbsp;and grab some clothes. We can kill time there if you want.&rdquo;</span></p>
<p>Damian&rsquo;s eyes lit up. <span class="PAF-Damian">&ldquo;Yeah, let&rsquo;s go!&rdquo;</span></p>
<p>They drove to Damian&rsquo;s house, which was about thirty minutes away. When they arrived, Damian and Drew stepped out, and Drew turned to Jax. <span class="PAF-Drew">&ldquo;You don&rsquo;t have to wait for us, Jax. Thanks for the ride.&rdquo;</span></p>
<p>Damian gave Jax a heartfelt farewell, reminding him how he owed him his life&mdash;twice over.</p>
${appendLinkRow("Damian&rsquo;s House", '5d')}

`
)

const row5c = storyRow('5c', 'Bloodbath on the 13th', 
`
<p>Tension, gunpowder, and adrenaline. Jax fired his gun. The crack of the shot echoed through the street, and the viper went down, clutching his shoulder. The other two scattered, running for cover just as the wail of police sirens filled the falling night. Three patrol cars screeched onto the scene, lights flashing.</p>
<p>Jax barks an order to flee. Drew tucks his boner and Damian picks up his skirt of the pavement. They sprint to Jax&rsquo;s beat-up sedan who already had the engine roaring.</p>
<p>They pile in, Drew in the passenger seat, Damian in the back. Tires squeal as Jax slams the car into gear and floors it, swerving through the traffic like a madman, the engine screaming as it pushes to the limit. But there is no outrunning the cops. They're everywhere,&nbsp;flashes of blue and red swarmed Jax&rsquo;s car.</p>
<p><span class="PAF-Jax">&ldquo;Shit!&rdquo;</span> Jax spits, yanking the wheel hard to avoid a family pushing a stroller.</p>
<p>Jax skillfully drifts the car.&nbsp;The car skids, the stroller a blur as they barely miss it.</p>
<p>Seeing how dangerous Jax&rsquo;s car is&nbsp;in the traffic and knowing that&nbsp;the punks inside are armed, the cops go at them with full force.&nbsp;</p>
<p>Bullets pepper the car, smashing through the windows, punching holes in the metal. The back window shatters, showering Damian in glass.</p>
<p>That&rsquo;s when they smell it&mdash;the sharp stench of gasoline. The car is leaking, and they&rsquo;re driving a ticking time bomb.</p>
<p>Drew hears a bullet ricochet, bouncing around in the trunk. He&nbsp;turns, eyes wild, checking on Damian.</p>
<p><span class="PAF-Drew">&ldquo;Damian!&rdquo;</span> Drew&rsquo;s voice is pure panic. <span class="PAF-Drew">&ldquo;You&rsquo;re bleeding!&rdquo;</span></p>
<p>Damian&rsquo;s face twists in pain, his hand clutching his side where the bullet had torn through. He opens his mouth to scream, but all that comes out is a ragged gasp.</p>
<p><span class="PAF-Damian">&ldquo;Drew, help me!&rdquo;</span> Damian&rsquo;s voice is a thin thread, barely audible over the chaos.</p>
<p>Drew&rsquo;s instincts kick in. He twists in his seat, reaching back, trying to grab Damian&rsquo;s hand, to pull him close, to do anything to stop the blood from pouring out. But in his desperation, his arm hits Jax, throwing him off balance.</p>
<p>Jax snarls, jerking the wheel to keep the car under control. <span class="PAF-Jax">&ldquo;Sit the fuck down, Drew!&rdquo;</span>&nbsp;His foot slams down on the gas, and the car lurches forward with a roar, tearing down the street like a bullet from a gun.</p>
<p>The world slows down, every sound muffled, every movement exaggerated. Drew&rsquo;s hand finally finds Damian&rsquo;s, their fingers locking together in a grip of pure terror. Damian&rsquo;s eyes are wide, pleading, his breath coming in short, desperate bursts.</p>
<p>A bullet hits the fuel tank. The explosion is instant, a deafening roar that tears through the street, a fireball that lights up the sky. The car is swallowed in flames, the heat intense enough to scorch the asphalt.</p>
<p>The world goes ${appendLinkRowInline('white', '5cnews', true)}.</p>
`
)

const row5cnews = storyRow('5cnews', ' ', 
    `
    ${storyImage('bloodbath')}
    ${storyEndButton()}
    `
    )

const row5d = storyRow('5d', "INT. DAMIAN&rsquo;S HOUSE - NIGHT", 
    `
<p>An eerie feeling flowed through Drew as he stepped into Damian&rsquo;s house. He had imagined Damian lived in a bubbly happy house, given how naturally cheerful Damian was. But in huge contrast to what he thought, Damian&rsquo;s house felt dim and depressing, yet he couldn&rsquo;t put his hand on why he felt that way. It looked just like any regular house from the inside and outside, but for some reason the air inside made him sick.</p>
<p><span class="PAF-Drew">&ldquo;Your parents home?&rdquo;</span> Drew asked, his voice hushed.</p>
<p><span class="PAF-Damian">&ldquo;No,&rdquo;</span> Damian replied. <span class="PAF-Damian">&ldquo;Mom&rsquo;s on a trip with her husband.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;When are they coming back?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Tomorrow, supposedly.&rdquo;</span></p>
<p>Drew&rsquo;s gut twisted. He had a feeling this had to do with why he wanted to leave so quickly.</p>
<p>Damian grabbed two backpacks and started packing, throwing in clothes and essentials with Drew&rsquo;s help. The tension between them was thick, but neither spoke of it. Damian moved quickly, efficiently, as if trying to outrun whatever was lurking in that house, or maybe he was trying to buy more &lsquo;hanging-out&rsquo; time with Drew.</p>
<p><span class="PAF-Damian">&ldquo;I&rsquo;m gonna take a quick shower,&rdquo;</span> Damian said, excusing himself.</p>
<p>Drew asked if he could use his computer to check his email until Damian came out. Damian firied up the PC for him.</p>
<p>The desktop loaded. Drew&rsquo;s fingers hovered over the mouse. A mix of trepidation and curiosity swirled within him. He felt a strange pull, an undeniable urge to poke into Damian&rsquo;s world, to uncover the secrets that had cast a shadow over him. He clicked on the messenger icon, hoping to dig up something that would clue him in on what kind of danger was in. But the screen flashed a disappointing message&mdash;logged out. Drew&rsquo;s shoulders sagged slightly, the tension in his body refusing to ease.</p>
<p>His eyes flicked around the room, taking in the shadows, the quiet. There was something off about this place, something he couldn&rsquo;t quite pin down. He thought about getting up, tearing through drawers, flipping through notebooks, anything to find a hint. But he stayed seated, his fingers tapping impatiently on the desk.</p>
<p>Just as he was about to shut down the PC and start searching the house, his eyes caught on something&mdash;a shortcut on the desktop. The name was chilling, out of place, like a scream in the middle of a silent room:  ${appendLinkInline('My Daughter&rsquo;s World', 'section6')}.</p>
    `
    )

const section6 = newSection(6);

section6.innerHTML+= storyWideImage('mydaughtersworld/1', false, 'png')
const row6a = storyRow('6a', 'My Daughter&rsquo;s World', 
`
<p>The shortcut led to a webpage. The website was a playful splash of colors and bubbly designs, almost like something out of a child&rsquo;s dreamland. It had this innocent, cartoonish charm, like a blog meant for cute stories and childhood memories. But there was nothing innocent about what lay underneath.</p>
<p>The site, a blog by definition, was really Damian&rsquo;s private wonderland, or perhaps more accurately, his feminine alter ego&rsquo;s.</p>
<p>The content was a collection of sultry writings and provocative VODs, each available for those willing to pay the price. Picture after picture, video after video, Damian was captured in various costumes, wigs, and lingerie, teasing the page&rsquo;s viewers.&nbsp;</p>
<p>On Damian&rsquo;s PC, Drew was logged in as an adminstrator, earning full access to the content without paying, unlike the few customers who paid for that stuff.</p>
<p>As he poked around, Drew realized this wasn&rsquo;t Damian&rsquo;s PC at all. It was just placed in his room, maybe to film him with the webcam as in the early VODs on sale, or maybe Damian had borrowed it while his parents were away.</p>
<p>He found a&nbsp;folder named after the website on the hard drive, containing a gallery of the photos and videos that the website owner peddled and spreadsheets detailing the customers&nbsp;who bought into this erotic fantasy from the website owner directly. They were quite few but all persistent customers.</p>
<p>At first, the website just written smut and still images. Videos were only a recent addition. In all their writings, the author painted Damian as a girl, always referring to him as &ldquo;my daughter,&rdquo; &ldquo;my girl,&rdquo; or simply &ldquo;baby,&rdquo; never his name. The writing was dirty, gritty and depraved, not showing a single sign of holding back or remorse for the horrible stuff the author said about and did to Damian. The sudden contrast between the website&rsquo;s bright, playful presentation in the peripheral and its dark content upon focusing, sent Drew into a head trip. His gut tightened, his senses sharpened, and his curiousity was through the roof. Sucked into the rabbit hole, his hand moved almost on its own, opening VOD files.</p>
<p>He clicked on a few videos, starting with the very first released.</p>
${appendLinkRow('&ldquo;Releasing my daughter from her cage for the first time in 4 months.&rdquo;', '6b', true)}

`
)

section6.appendChild(row6a);

const row6b = storyRow('6b', 'My Daughter&rsquo;s World (Part 1)', 
`
<p>The first video opened with Damian on his bed, wearing nothing but a sports bra and black panties.</p>
${storyVideoCenter('mydaughtersworld/vid1/1', false)}
${storyImageRight('mydaughtersworld/vid1/2')}
<p>A seductive female voice came from behind the camera, Damian&rsquo;s mom, introducing the video as a special birthday gift. It was time to unlock his chastity cage after 4 months without release.</p>
<p>She had a little conversation with Damian, who squirmed nervously, unable to control himself as he squeezed his cock and balls between his legs desperately. His mom explained he wasn&rsquo;t allowed to touch himself yet. But Damian was dying to touch himself, saying his balls were so full, his cum was about to spill on its own. His mother scolded him with bizarre viciousness, swearing to lock him up for a full year if he dared to &lsquo;squirt&rsquo; without her permission.</p>
<p>Damian freaked out. He promised he wouldn&rsquo;t squirt unless she allowed him.</p>
<p>In between their conversation, it was evident that some parts were scripted while others were natural. Damian&rsquo;s mom asked if he was excited to turn 18, to which he replied that it didn&rsquo;t matter because he had been a slut for a long time already. She faked laughs and teased him about playing with his &ldquo;clit-dick,&rdquo; causing Damian to bob his head, his body shrinking in an attempt to rub his genitals without using his hands.&nbsp;</p>
${storyImageCenter('mydaughtersworld/vid1/3')}
<p><span class="PAF-Alison">&ldquo;She&rsquo;s insatiable like a bitch, always horny. Aren&rsquo;t you, honey? If we didn&rsquo;t keep her locked up, she&rsquo;d be milking herself in every corner of the house,&rdquo; Damian's mother told the camera.</span></p>
${storyImageCenter('mydaughtersworld/vid1/4')}
<p>Damian sobbed and nodded in agreement, desperately squeezing himself, writhing.</p>
<p><span class="PAF-Alison">&ldquo;How could you be so horny all the time?&rdquo;</span> His mother asked. <span class="PAF-Alison">&ldquo;It&rsquo;s unbelievable!&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Because I can&rsquo;t stop thinking about cocks,&rdquo;</span> Damian whined.</p>
<p><span class="PAF-Alison">&ldquo;Are you thinking about one right now?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Yes...&rdquo;</span> he admitted shamefully. <span class="PAF-Damian">&ldquo;All the time. Every second of every day.&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;Do you think about black or white cocks?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;I want a big black cock,&rdquo;</span> Damian moaned.</p>
<p><span class="PAF-Alison">&ldquo;A real man&rsquo;s cock, that&rsquo;s what she wants,&rdquo;</span> his mother chimed in. <span class="PAF-Alison">&ldquo;She can&rsquo;t help it. She&rsquo;s like a horny dog, always needing to be fucked.&rdquo;</span></p>
<p>Damian&rsquo;s eyes widened at the thought. His head flickered left and right nervously.</p>
${storyImageLeft('mydaughtersworld/vid1/5')}
<p><span class="PAF-Alison">&ldquo;Aww, she&rsquo;s so scared of getting fucked,&rdquo;</span> His mother continued. <span class="PAF-Alison">&ldquo;She never lets us go near her virgin asshole. But if you&rsquo;re not gonna let the black cock fuck you, why do you think of them?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;I want to suck them.&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;You want their milk all over you?&rdquo;</span></p>
<p>The mere mention had Damian squirming, his voice begging.</p>
<p><span class="PAF-Damian">&ldquo;No, I want to milk them into my stomach.&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;Do you like black men&rsquo;s milk or white jizz?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Black man&rsquo;s cum intoxicates me. It&rsquo;s so thick it sits in my stomach for so long until I digest it. It keeps me warm for days.&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;But you can&rsquo;t handle them. You&rsquo;re so small! Since your mouth is too small for a real man, they should use your ass.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;No, I can take so many things in my mouth.&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;We&rsquo;ll see about that, my viewers. How many big things can she take in her mouth? We&rsquo;ll show you that in a minute, but why not let her play with her clit-thing first.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Yes, please.&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;Okay, take it out. Show them your clit.&rdquo;</span></p>
${storyImageRight('mydaughtersworld/vid1/6')}
<p>Damian&rsquo;s mom cringed as soon as Damian whipped out his penis. She would degrade and humiliate him for his size, saying it was no bigger than a clit compared to a black man&rsquo;s cock.</p>
<p><span class="PAF-Alison">&ldquo;Look at that pathetic thing. It&rsquo;s so pathetically small, like all white clit-things. I can&rsquo;t understand why people wanted to see your clitty so much, it&rsquo;s so disgustingly tiny. I get a lot of messages about it. &lsquo;Show us her cock&rsquo;, &lsquo;Make her jerk her dick off&rsquo;, ugh.</span></p>
<p><span class="PAF-Alison">My viewer, if it&rsquo;s less than 7 inches, is it even a cock? No! It&rsquo;s closer to the size of a clit than a black man&rsquo;s penis for sure!&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Can I touch it now, please?&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;Yes, honey, flap your little clitty for us.&rdquo;</span></p>
${storyVideoCenter('mydaughtersworld/vid1/3',)}
<p>Damian eagerly played with his penis, stroking it rapidly. Once his cock got hard, his mother told him to stop.</p>
<p>They would talk for a while and then she&rsquo;d allow him to touch his cock again. When he was close to the edge she stopped him again.</p>
${storyImageCenter('mydaughtersworld/vid1/7')}
<p><span class="PAF-Damian">&ldquo;No, please, please, please. I wanna cum!&rdquo;</span> Damian begged to let him come.</p>
<p><span class="PAF-Alison">&ldquo;No, don&rsquo;t you dare wet yourself. (gasp) Did you just squirt?!!&rdquo;</span> His mother screamed.</p>
<p>Damian panicked and quickly released his cock, spreading his legs wide. His body tweaked as he used all his power to curb the desperate urge to cum. With a great display of self-control he managed to hold himself, without leaking, earning praises from his mother.</p>
${storyImageCenter('mydaughtersworld/vid1/8')}
${storyVideoCenter('mydaughtersworld/vid1/4')}
<p>They would repeat that game in multiple rounds throughout the video. In the end, Damian&rsquo;s mother locked him up in his chastity cage again.</p>
${appendLinkRow('Check other videos', '6c', true)}


`
)

const row6c = storyRow('6c', 'My Daughter&rsquo;s World (Part 2)', 
`
<p>This ongoing game of pleasure and denial was a recurring theme in their videos.</p>
${storyVideoCenter('mydaughtersworld/vid2', false)}
<p>The VODs they sold usually began with a casual Damian before transitioning into a frenzy of uncontrolled touching, with his mother ultimately taking control.</p>
${storyVideoCenter('mydaughtersworld/vid3')}
<p>They had crafted a narrative where Damian was banned from leaking pleasure outside of their videos as well. The more videos they made, the more desperate and needy Damian seemed, while his mom became increasingly harsh and dominant. Their signature style included constant banter between them and the camera, and Damian teasingly displaying his aroused cock in various poses.</p>
${storyVideoCenter('mydaughtersworld/vid4')}
<p>Drew noticed how whenever Damian was particularly agitated or excited, he would curl and flex his feet just like Jaime always did, and it made him even more adorable.</p>
${storyImageCenter('mydaughtersworld/11')}
<p>Their videos boasted Damian in different wigs, costumes, and lingerie.</p>
${storyVideoCenter('mydaughtersworld/moon', true, false, true, true)}
<p>But it was Damian&rsquo;s mother that Drew really craved to see, who hadn&rsquo;t appeared in any of the scenes yet.</p>
${storyVideoCenter('mydaughtersworld/vid5')}
<p>He wanted to skim through the videos to get a glimpse of her. But he would find himself captivated by the videos&rsquo; narratives and Damian&rsquo;s beauty, losing track of time as he watched them in their entirety.</p>
<p>There was something about seeing Damian dressed as a girl that made him even more stunning, somehow he felt happier than usual, that until his mother crushed him.</p>
<p>Damian&rsquo;s mother was mean to him, but it was clear he had a lot of love for her, perhaps too much.</p>
<p>Drew couldn&rsquo;t get enough of Damian in those videos.</p>
<p>He loved the way the cute boy gasped, laughed, arched and yawned, the way his face curled and twisted</p>
<p>when he was extremely horny and frustrated, only to lighten up with a blush spreading across his face. He loved every little reaction he made, some even passing those ideals he&rsquo;d seen in Jaime. It drove Drew crazy to see how much Damian was denied pleasure when he deserved it most, yet it only hooked him up more to the videos.</p>
${storyVideoCenter('mydaughtersworld/vid6')}
<p>In one scene, Damian edged himself so hard that precum spilled out in a glistening pool.</p>
${storyImageCenter('mydaughtersworld/12')}

<p>His mother flipped but Damian begged for forgiveness and insisted it was just precum. His mom got up and dipped the tip of her finger in the pool Damian dropped, feeling the texture, confirming to the camera it was just thin fluid.</p>
${storyVideoCenter('mydaughtersworld/vid7')}
<p>The next video had Damian and his mother watching TV in each other&rsquo;s lap. She slipped her hands under Damian&rsquo;s shorts and discovered the precum stains on his panties. She sighed and told the camera how her her horny little slut was always wet. She pinched and tickled the tip of Damian&rsquo;s cock through the fabric, occasionally teasing his little thighs, which he liked a lot. He would feel up his mother&rsquo;s arm and hand as she touched, except when she tickled his erect penis, inserting her nail in his dickhole through the fabric. Damian clawed the couch and writhed, begging for mercy. She tantalized him for a few more seconds and stopped. Damian shivered, holding back what seemed like a sure-hit orgasm. His cock tweaked, promising release and Damian fought it, earning light pats on his cock from his mother in between, which made his breath hitch and worsened his struggle a lot. Alas, after a minute of trembling, he saved it without leaking a drop of cum.</p>
${appendLinkRow('Next video', '6d', true)}


`
)

const row6d = storyRow('6d', 'My Daughter&rsquo;s World (Part 3)', 
`
<p>The next video was titled <strong>&ldquo;Allowing my slut daughter to cum on Camera for the first time&rdquo;</strong>. While scanning the spreadsheets, Drew saw they had started losing customers, and so his mother varied things up to pull them back.</p>
${storyVideoCenter('mydaughtersworld/white_panties', false)}
<p>Damian was dressed in sexy white panties and mind-stealing sexy high socks, forced to make himself cum with the horrid constraint of not using his hands. He squirmed and writhed, wiggling and twisting his hips and back, trying to find just the right angle to stimulate himself through the fabric, and then switched to tilting his cock up and down using his PC muscles, which must&rsquo;ve grown quite strong with all this edging, until his cock fell into a frenetic frenzy of uncontrolled twitching. Damian writhed and moaned hotly as his cock trembled, embracing his core tightly, which twitched like it was probed from the inside. His frenzy ended with a big, fat, healthy chunk of cum. Drew let out a big sigh at Damian&rsquo;s release. He was impressed a lot by Damian&rsquo;s self-control and obedience. The obedience, particularly, aroused him a lot.</p>
${appendLinkRow('Next video', '6e', true)}
`
)

const row6e = storyRow('6e', 'My Daughter&rsquo;s World (Part 4)', 
`
<p>In the later videos, the tension between Damian and his mother would to an extreme, making them unwatchable with how thick and ugly the air between them was. She consistently questioned about Damian&rsquo;s ass and if he was ready for anal play. Damian was reluctant. His mother would ask him how much he needed to be explored and destroyed from the inside by a black man. Damian had no desire in anyone touching his ass but his attempts at fighting against it would be shunned, his mother insisting it was the only way to satiate his doggy hunger and promised to free his cock for a week after he&rsquo;s fucked. At the start and end of those videos, the camera would show a black X-tape on Damian&rsquo;s butthole.</p>
${storyVideoCenter('mydaughtersworld/vid8', false)}
<p>In one of these videos, Damian and his mom lay in bed, locked in a conversation. Their conversation was mostly innocent. They talked about Damian&rsquo;s life, school, favorite kinds of clothes, soap preferences, how sensitive his nipples and chest were, and how he had recently discovered a fondness for playing with. His mother would use that as leverage to coerce Damian to play with his ass but he refused because the idea makes him feel violated.</p>
${storyImageCenter('mydaughtersworld/14')}
<p>And then suddenly without a warning, a large black man appeared behind Damian, climbed on the bed, lay his extremely large cock across Damian&rsquo;s face, and parted his hanging balls to cover each of Damian&rsquo;s eyes. He landed with his weight on Damian&rsquo;s head, suffocating him. The video ended abruptly without explanation.</p>
<p>Just like Damian&rsquo;s mother, the video did not show the black man&rsquo;s face.</p>
<p>Drew repeated the last part of the video many times. That look of fear and defeat on Damian&rsquo;s face at the end fueled the fire in him that ended up burning this very house.</p>

<p>After the last video was released the website saw its highest traffic since it launched. Damian&rsquo;s mom wasted no time in uploading pictures teasing their upcoming releases.</p>
<p>One photo showed that black man sitting on the couch naked, with his massive cock in full display dangling underneath him, so fat it looked like an elephant&rsquo;s hose. It was so thick and long, it almost touched the floor.</p>
<p>Damian was on all fours, sucking on the tip of that massive cock. His ass was facing the camera with the words &lsquo;virgin boy-cunt&rsquo; plastering it, written in red, and his asshole was covered with crossing black tapes.</p>
<p>The latest video on the site was titled ${appendLinkInline('&ldquo;Watching My Hot Mom Get Fucked by a Real Man&rsquo;s Cock&rdquo;', 'section7', true)}.</p>
${storyImage('mydaughtersworld/Alison/a', '', '', '', 'webp')}
`
)






const section7 = newSection(7);


const row7 = storyRow('7', 'My Daughter&rsquo;s World (Part 3)', 
`

${storyImage('mydaughtersworld/Alison/0')}
<p>This video was different from all the others. For once, Damian wasn&rsquo;t the star of the show. He was behind the camera, filming his mother. She undressed and posed for him.&nbsp;</p>
${storyImage('mydaughtersworld/Alison/1')}
<p><span class="PAF-Damian">&ldquo;Look at her, so sexy,&rdquo;</span> Damian murmured.</p>
${storyImage('mydaughtersworld/Alison/2')}
<p>He couldn&rsquo;t keep his hands off of her ample breasts.</p>
<p><span class="PAF-Damian">&ldquo;They&rsquo;re perfect,&rdquo;</span> he whispered while fondling her.</p>
${storyImage('mydaughtersworld/Alison/3')}
<p><span class="PAF-Alison">&ldquo;The best you&rsquo;ll ever see,&rdquo;</span> she purred.</p>
<p><span class="PAF-Damian">&ldquo;Can we see more?&rdquo;</span></p>
${storyImage('mydaughtersworld/Alison/4')}
<p><span class="PAF-Damian">&ldquo;Oh, oh, oh-oh, she&rsquo;s gonna do it!&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;Mmmhm, watch closely.&rdquo;</span></p>
${storyImage('mydaughtersworld/Alison/5')}
<p><span class="PAF-Damian">&ldquo;Oh my god, her ass is out of this world. Keep going, please! Show it all.&rdquo;</span></p>
${storyImage('mydaughtersworld/Alison/6')}
<p><span class="PAF-Alison">&ldquo;I can tell you&rsquo;re excited,&rdquo;</span> she teased.</p>
<p><span class="PAF-Damian">&ldquo;Oh god, your ass is incredible.&rdquo;</span></p>
${storyVideo('mydaughtersworld/Alison/v1')}
${storyImage('mydaughtersworld/Alison/7')}
<p><span class="PAF-Alison">&ldquo;Come here and touch me,&rdquo;</span> she demanded.</p>
<p>Damian gave her a tentative tap with his soft little hand. His mother locked it on her, making him grope her while swaying sensually.</p>
<p>Then the camera showed Damian&rsquo;s stepfather on the couch. He spat on his cock and stroked it while his wife danced seductively in front of him.</p>
<p>Her moans and hums filled the room, announcing how badly she wanted his cock to dominate her and suffocate her from the inside, her fingers tracing every curve and the crease between her legs.</p>
<p>She got down on her knees, grabbed his monster cock, and began to stroke it.</p>
<p>Drew wondered if she could actually take it in her mouth. The thing was bigger than her damn face. She lowered her head but paused and asked Damian to film from a better angle. Damian hesitated, unsure where to stand.</p>
<p><span class="PAF-Bob">&ldquo;Don&rsquo;t fret like that, sissyboy! Stand behind the couch!&rdquo;</span> His stepfather commanded gruffly.</p>
<p>The camera shook terribly as Damian scrambled to find a new spot. His mother whispered to his stepfather. <span class="PAF-Alison">&ldquo;Don&rsquo;t call her that, she likes being called a girl.&rdquo;</span></p>
<p><span class="PAF-Bob">&ldquo;I don&rsquo;t give a damn what he likes. Here. Stay right here.&rdquo;</span> Damian&rsquo;s stepfather&nbsp;sneered as he pulled Damian closer and made him stand right behind his head.</p>
${storyVideo('mydaughtersworld/Alison/v2')}
${storyImage('mydaughtersworld/Alison/8')}
<p>Damian filmed his mother giving her husband a hot blowjob.</p>
${storyImage('mydaughtersworld/Alison/9')}
<p>Surprisingly she could handle his cock with some artistry and did take it in her mouth, but never managed more than a quarter of it.</p>
${storyImage('mydaughtersworld/Alison/10')}
<p>They kept confusing Damian by making him switch angles constantly. They made him film his mother from behind and Damian mentioned how his mother&rsquo;s asshole was twitching in anticipation of its favorite cock, earning a giggle from his mom, muffled by the big cock in her mouth.</p>
<p>Then his stepfather stood up and demanded a shot from below.</p>
${storyImage('mydaughtersworld/Alison/11')}
<p>Before Damian could even move, he grabbed his head and forced him down to his knees.</p>
<p><span class="PAF-Bob">&ldquo;Get down on your knees like a good little sissy,&rdquo;</span> he growled.</p>
<p><span class="PAF-Damian">&ldquo;Ok, ok, I&rsquo;m doing it!&rdquo;</span> Damian whimpered.</p>
<p>The editing was terrible - those little cuts between positions and angles were still there, ruining the flow of the video.</p>
<p>Damian whimpered and groaned as he shot his stepfather&rsquo;s cock from below. Damian&rsquo;s stepfather&rsquo;s hand was out of view but Drew couldn&rsquo;t help but imagine it wrapping Damian&rsquo;s scalp inside. It felt like he was leaning his weight on top of Damian&rsquo;s head.</p>
${storyImage('mydaughtersworld/Alison/12')}
<p><span class="PAF-Bob">&ldquo;You&rsquo;re doing so well, baby. Now suck on those balls,&rdquo;</span> Damian&rsquo;s stepfather commanded, making his wife eagerly obey. She suckled on her bull&rsquo;s testicles moaning needily.</p>
${storyImage('mydaughtersworld/Alison/13')}
<p>But then, Damian&rsquo;s stepfather changed positions and pulled Damian&rsquo;s head up to capture the action from above.</p>
<p>The camera shook erratically but captured every complaining moan and whimper that escaped Damian&rsquo;s lips.</p>
<p>Drew could feel his blood boiling as he imagined Damian trapped under the mercy of his stepfather&rsquo;s arm.</p>
${storyImage('mydaughtersworld/Alison/14')}
<p>Soon after, Damian&rsquo;s stepfather pulled out of his wife&rsquo;s mouth and called her to move to the couch so he could fuck her.</p>
<p>His wife bent over and spread her ass cheeks for the camera.</p>
<p>Her pussy was dripping wet with excitement, juice was trailing down her thigh.</p>
<p><span class="PAF-Damian">&ldquo;(gasp) You&rsquo;re so wet.&rdquo;</span></p>
<p><span class="PAF-Alison">&ldquo;Mmmm, nothing arouses me than sucking on a big black cock. I can&rsquo;t wait to take it inside me.&rdquo;</span></p>
<p>She asked Damian if he was excited to watch her fucked. Damian and the camera nodded. His mother stepped over and lifted his skirt, slipping her hand in his panties and caressing his limp dick.</p>
<p><span class="PAF-Alison">&ldquo;Mmmm, not so excited, yet?&rdquo;</span></p>
<p>Damian was shooting a porno but he was completely limp. Drew wasn&rsquo;t sure how Damian could be in any way aroused while he was clearly intimidated by his stepfather.</p>
<p>Damian&rsquo;s mom pulled him by the strap of his panties and walked him over to her husband. She took hold of the camera and position ed him between his stepfather&rsquo;s legs and asked him if he would like to try her bull&rsquo;s cock. Damian shook his head, legs trembling.</p>
<p>His stepfather sneered at him and grabbed his knees still.</p>
<p>Damian&rsquo;s mother moaned in his ears, describing how excited she was to see her daughter taken by a black man, while rubbing his tummy and circles. Damian didn&rsquo;t answer. Sandwiched between his stepfather on the couch and his mother behind him, he was completely limp and powerless. His whimpers rippled through Drew&rsquo;s bones.</p>
<p>His panties hit the floor at his mother&rsquo;s pull. She taunted him and tried to arouse him, stroking his limp cock and squeezing his balls, shaming him for his white &lsquo;clit-dick&rsquo; and calling it disgusting. All while humping him from behind, the sound of her wet thighs and crotch slapping him audible.</p>
<p>She then held Damian&rsquo;s cock between two fingers while his stepfather directed his cock so their cocks pressed against each other, creating a sick image where the tip of Damian&rsquo;s cock was about to enter his step-father&rsquo;s precum-filled dickhole. His mother and stepfather laughed out loud. Damian didn&rsquo;t join.</p>
<p><span class="PAF-Bob">&ldquo;What&rsquo;s the matter with you, boy? Loosen up.&rdquo;</span> His stepfather shouted as he tapped his cock between Damian&rsquo;s tightly locked knees.</p>
<p>Damian was still timid.</p>
<p><span class="PAF-Bob">&ldquo;Don&rsquo;t act like you don&rsquo;t want this, sissyboy. I know you do,&rdquo;</span> his stepfather growled before thrusting hard between Damian&rsquo;s thighs.</p>
<p>Damian covered his face and sobbed as his step-father grinded hungrily against his thighs, enclosed tightly by his step-father&rsquo;s grip on his hip. His mother lifted his skirt and filmed her husband&rsquo;s cock springing in and out from between his thighs from the back. The footage showed the black tape around Damian&rsquo;s anus, same like all recent videos.</p>
<p><span class="PAF-Alison">&ldquo;Oh, baby, I can&rsquo;t wait to see him pleasure you,&rdquo;</span> His mother moaned, apparently touching herself to the scene.</p>
<p>But then, in a fit of panic, Damian ran out of the room and his mother called after him. All of that was included in the final footage. Drew skipped forward to where Damian had returned and filmed his mother and her husband fuck.</p>
<p>To her credit, Damian&rsquo;s mother knew how to cheer him up. When he got hold of the camera again, she playfully scolded him for making her dry up, while covering her pussy. Damian, sniffling, apologized. His mother ordered him to make it up to her, leaning back on the couch spread-eagle, still covering her pussy, teasing both Damian and her hungry husband.</p>
${storyImage('mydaughtersworld/Alison/15')}
<p>The camera shook from Damian&rsquo;s excitement as he approached her. He knelt down at the foot of the couch and apologized once again before the camera tilted away, the sound indicating a kiss on his mother&rsquo;s skin.</p>
<p><span class="PAF-Alison">&ldquo;Ah! Your tongue is so tingly!&rdquo;</span> His mother squealed playfully. Damian darted away, turning to capture his mother who skipped on her toes, chasing after him eagerly. A warm laugh escaped his lips, the kind that only comes out when you&rsquo;re teared up. He finally let her catch him. She slapped his chest and pinched his nipple, sweetly taunting and punishing him for teasing her with his tiny electric tongue. The words came out of her tongue sticky and wet from how much saliva she was producing. She pulled his hand, Damian filming her swaying hips as she showed him where to stand. Then she reclined on the couch next to her husband who had impatience etched on his face as he slowly stroked his cock waiting the playful duo to finish their bullshit. His wife revealed her pussy in full view, showing that she was deliciously soaking all along and hadn&rsquo;t dried as she claimed. He groaned darkly, stretching her inner thighs with his thumbs, making her crotch and lower stomach tighten in anticipation, allowing two drops of juice to leak from her. Without holding back any longer, he finally shoved himself inside his wife.</p>

${storyVideo('mydaughtersworld/Alison/v3')}
${storyVideo('mydaughtersworld/Alison/v4')}
${storyVideo('mydaughtersworld/Alison/v5')}
<p><span class="PAF-Damian">&ldquo;Ooh, that&rsquo;s a lot of cum.&rdquo;</span></p>
${storyImage('mydaughtersworld/Alison/16')}
<p>Damian&rsquo;s spirit was revived a bit by the end of the video. His mother chuckled, causing Damian to go down on his knees and eagerly lick up the dripping semen from her chin and lips.</p>
<p>His stepfather took the camera and zoomed in, capturing his wife and stepson locked in sloppy kissing. They alternated spitting in other&rsquo;s mouth, trading the cum-glob between them, until eventually they locked in a long messy kiss,</p>
<p>their tongues playing with their shared gobble of cum, before finally sucking on each other&rsquo;s tongues and swallowing everything at once. Their lips separated with a pop and with big sighs they revealed their empty mouths.</p>
<p>The video ended with Damian&rsquo;s stepfather praising both his cumsluts.</p>
<p>That was the last video shared on the site.</p>
<p>The last post was a still picture from the POV of his stepfather, showing Damian on all fours kneeling before him with his ass flared out.</p>
<p>His giant cock dangled until it almost hit Damian&rsquo;s butt which was taped at the asshole as usual. Damian&rsquo;s left asscheek was marked in red <strong>&ldquo;Taking my daughter&rsquo;s virginity&rdquo;</strong> and on his right cheek was written <strong>&ldquo;October 14&rdquo;</strong>.</p>
<p>That was tomorrow.</p>
<p>Drew finally understood why Damian wanted to run away. He stared at the screen for a minute, opened the spreadsheets of the website&rsquo;s customers&rsquo; data. It had all customers&rsquo; mailing addresses so Damian&rsquo;s mother would mail them the CD's with the videos burned on them. He uploaded the sheet and emailed it to himself, deleted all posts from the blog and the videos from the computer, and then got up and sprawled on Damian&rsquo;s bed, staring at the ceiling above.</p>
<p>Damian came out of the shower a few minutes later. He said he&rsquo;d take a quick shower and, like a femme, ended up staying there there for 30 minutes.</p>
<p>He walked into the room wearing nothing but a towel around his waist and a mischievous smile on his lips, smelling like fragrant ${appendLinkInline('lavender', 'section8')} soap.</p>
`
)


section7.appendChild(row7);


const section8 = newSection(8);


const row8a = storyRow('8a', 'INT. DAMIAN&rsquo;S ROOM<br>NIGHT', 
`
${storyImage('damian4')}
<p>Damian walked into the room wearing nothing but a towel around his waist and a mischievous smile on his lips, smelling like fragrant lavender soap. He was in a mood. He moved with deliberate grace, his muscles rippling beneath his smooth skin as he crossed the room to his dresser. With a deep, almost sensual sigh, he let the towel drop. Drew&rsquo;s eyes, traced the lines of Damian&rsquo;s back. His skin was smooth, moist after the shower, with a subtle, inviting glow from that highlights his softness, while his shoulders tapered down to a narrow waist, the gentle slope of his spine creating a delicate yet striking silhouette. The muscles in his back were lean and toned, defined, a reminder of his supple strength. His back, from the elegant sweep of his neck down to the small of his back, displayed androgynous beauty at its finest. Damian&rsquo;s beauty was not the kind Drew was looking for, yet slowly but surely, he would be enamored with. Drew swiftly caught himself looking and felt slightly ashamed. He averted his eyes away.</p>
<p>Damian turned, one hand covering his crotch and a playful glint in his eyes as he sauntered over to the bed where Drew lay.</p>
<p><span class="PAF-Damian">&ldquo;Hey,&rdquo;</span> he purred seductively, <span class="PAF-Damian">&ldquo;does a gangster know how to pick a lock?&rdquo;</span></p>
<p>Drew tilted his head. <span class="PAF-Drew">&ldquo;What kind of lock?&rdquo;</span></p>
<p>Without a word, Damian removed his hand, revealing a pink chastity device snug around his boyhood. Drew blinked in surprise, the memory of seeing that flash of pink beneath Damian&rsquo;s panties at the city center flooding back. He hadn&rsquo;t realized it wasn&rsquo;t just a color choice in Damian&rsquo;s underwear.</p>
<p><span class="PAF-Drew">&ldquo;How are you going to run away with this thing locked?&rdquo;</span> Drew asked, sitting up.</p>
<p><span class="PAF-Damian">&ldquo;I don&rsquo;t know. I&rsquo;d rather stay locked forever than stay to be honest,&rdquo;</span> Damian admitted calmly. <span class="PAF-Damian">&ldquo;Can you do something about it?&rdquo;</span></p>
<p>Drew examined the lock on the device. <span class="PAF-Drew">&ldquo;Easy,&rdquo;</span> he said.</p>
<p>Damian&rsquo;s eyes widened, his lips parting slightly as he watched Drew reach into his wallet and pull out a small box containing a single pin pick. The lock resisted at first. But after a couple of minutes of focused effort, there was a click.</p>
<p>The device fell away.</p>
<p><span class="PAF-Damian">&ldquo;Oh my God. YES!&rdquo;</span> Damian cried out, his voice bursting with happiness, &ldquo;Ahahahaha.&rdquo;</p>
<p>Drew found himself mesmerized by the sheer elation on Damian&rsquo;s face. This was a curiousity of Damian that Drew was enamored with: An unusually animate and expressive face that flickered through a spectrum of emotions instantly at the faintest stimulus.</p>
<p>Drew, dangerously obsessive as he is, had a mental record of all Damian&rsquo;s faces, and this might&rsquo;ve been his favorite.</p>
<p>Damian stood before him, his thighs pressed, arms high up in the air, the backs of his hands brought together, and his hips shifting side to side. An absolute expression of<br>happiness.</p>
<p>Drew bit his lip, feeling an unexpected flush of arousal coursing through him as he checked out the subject of his obsession, completely exposed to him, raw,<br>without makeup or a wig, yet still absolutely gorgeous. In the beginning, he was attracted to Damian&rsquo;s vulnerabilty, submissiveness, artistry, and at one point his devilishness. But the heart&rsquo;s attractions alone don&rsquo;t make your hairs stand. Drew&rsquo;s magnetisation was now physical.</p>
<p>Damian, catching the lust in Drew&rsquo;s eyes, took a step back, twirling gracefully as he made his way to the dresser. leaving no doubt to Drew that he was taught classical dancing. His hands playing with his cosmetics , his hips shifting seductively.</p>
<p>Drew shrugged off his shirt. <span class="PAF-Drew">&ldquo;Hey,&rdquo;</span> he called out with a rough voice, <span class="PAF-Drew">&ldquo;you didn&rsquo;t finish what you started earlier.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Wait till I dress up for you first.&rdquo;</span> Damian teased, raising an eyebrow at Drew through the mirror. <span class="PAF-Damian">&ldquo;Oh my God, you can&rsquo;t be this horny, Drew.&rdquo;</span></p>
<p>Drew sprang from the bed, sweeping Damian off the ground and carrying his naked butt to ${appendLinkRowInline('bed', '8b')}.</p>

`
)

section8.appendChild(row8a);


const row8b = storyRow('8b', 'Second Protagonist', 
`
${storyImage('Blood-And-Cum/1')}
<p>They locked in a hot kiss. His hands explored Drew&rsquo;s back greedily and his legs wrapped around Drew possessively. To seduce someone like Drew was a dream to him. Drew pulled his lips away and hissed something. He blinked at Drew slowly as a warm, fuzzy feeling spread through his brain.</p>
<p><span class="PAF-Damian">&ldquo;H-huh?&rdquo;</span> He let out a shaky exhale. <span class="PAF-Damian">&ldquo;What did you say?&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;God, you&rsquo;re so fucking hot,&rdquo;</span> Drew whispered breathily in his ear. His brain melted. A hot flush spread across his face as Drew rained kisses all over it. He closed his eyes, savoring his last moment with Drew.</p>
<p>Drew pulled back and watched Damian&rsquo;s bliss-struck face. Drew could not recall a woman ever being so consumed by him while he made love to her. Yet again, most of them were whores, but even those Drew loved did not love him back so much. Drew zoned out for a minute as flashes of his planned massacre resurfaced in his mind. When the haze in his mind cleared, Drew saw Damian&rsquo;s eyes boldly meeting him, pupils blown wide with lust.</p>
<p><span class="PAF-Damian">&ldquo;What are you waiting for? Get down on me, you sexy bastard!&rdquo;</span> Damian demanded, bursting into charming giggles. His giggles tapped directly into Drew&rsquo;s hindbrain and flipped a switch. 
This was no longer an act of kindness towards Damian. No longer would Drew have inhibitions towards loving a boy or a man as long as they were this beautiful.
And though Drew never got to unite with his obsession by traditional vows, 
it was that moment when Drew had secretly and forcefully wed himself to Damian, in life and death.</p>
<p>Drew lifted his chin and went down devouring his neck. He gasped and slipped his fingers through Drew&rsquo;s hair, caressing Drew&rsquo;s scalp as Drew kissed his way down to his chest. His nipple tightened as Drew traced his areola with his finger. Drew&rsquo;s kisses felt cold and wet on his heated-up skin. Drew deliciously flicked his tongue on his nipple, occasionally nibbling it and pulling it in a suck, each of his gasps, hums, and nods extremely delicious rewards to Drew. His skin prickled as Drew&rsquo;s hands brushed all over his body, not leaving a single point unfelt. He murmured dazedly, hands trailing down to fondle his penis and testicles. <span class="PAF-Damian">&ldquo;That&rsquo;s...ah...that&rsquo;s so good...&rdquo;.</span></p>
<p>He began kneading and teasing his balls as Drew kissed and nibbled his way down his stomach and crotch intending to taste every single bit of his body. He arched, folding his legs, curling his feet, and tucking his toes. Just the way Drew likes it. Drew kissed his butt, his thighs, under his knees, and his claves. And then sucked on his beautiful little toes while massaging his inner thigh.</p>
<p><span class="PAF-Damian">&ldquo;Ah! F-fuck...&rdquo;</span> He gritted his teeth, stroking his cock with great intensity.</p>
<p>Drew thought Damian was getting close. Drew pulled Damian&rsquo;s hands off his cock, placed one on his cock, and cuffed the other above his head.</p>
<p><span class="PAF-Drew">&ldquo;Not yet,&rdquo;</span> Drew whispered with a smirk.</p>
<p>His tongue darted out to wet his lips which were already slightly parted on a needy pant. <span class="PAF-Damian">&ldquo;Give it to me...I want you in my mouth...please,&rdquo;</span> he pleaded for Drew&rsquo;s cock, breathlessly. But Drew gave him his tongue instead.</p>
<p>He flickered his tiny tongue against Drew&rsquo;s furiously while stroking Drew&rsquo;s cock. With arousal pooling between his legs, he pressed his thighs together, squeezing his testicles. His hips rolled slowly, his tailbone seeking friction with the mattress. Drew&rsquo;s free hand slid down Damian&rsquo;s stomach, his finger wiggling into his navel. Damian&rsquo;s cock twitched uncontrollably. He pulled his tongue out of Drew&rsquo;s mouth.</p>
<p><span class="PAF-Damian">&ldquo;Drew, I&rsquo;m gonna cum... please...&rdquo;</span> he pleaded as he pulled his hand off Drew&rsquo;s cock and stroked his own viciously. Drew, angry at his defiance, pulled his nipples harshly, arching his back into a semicircle. He yelped aloud in pain and Drew tucked his elbows behind his back, cuffing both Damian's hands with his strong hand, and then put Damian&rsquo;s back on his thigh.</p>
<p><span class="PAF-Drew">&ldquo;Give me your mouth!&rdquo;</span> Drew barked as he grabbed the back of Damian&rsquo;s neck.</p>
<p>He obediently pursed his delicious lips out and Drew sucked on them hungrily, alternating between sucking both lips at the same time or draining one of them at a time. Damian parted his thighs wide and raised his hips, alleviating pressure on his groin, yet his cock twitched constantly.</p>
<p>He tried to beg for release. But when he tried to make the &rsquo;p&lsquo; sound in &rsquo;please&lsquo; while Drew was consuming his lower lip, they ended up as small kisses. Drew would eventually release his lips with a powerful pop and flip him over on his stomach. Drew shoved his head into the mattress and kissed his way down his spine...</p>
${storyImage('Blood-And-Cum/2')}
<p>...planted a powerful kiss on his tailbone...</p>
${storyImage('Blood-And-Cum/3')}
<p>And another on his left ass cheek...</p>
${storyImage('Blood-And-Cum/4')}
<p>Then pulled his left cheek and rubbed it, eying Damian's asshole hungrily...</p>
${storyImage('Blood-And-Cum/5')}
<p>And then with his hot breath steaming over Damian&rsquo;s asshole, Drew whispered. <span class="PAF-Drew">&ldquo;I wanna feel you from the inside.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;No, no, no.&rdquo;</span> His breath caught when he felt Drew&rsquo;s breath on his asshole. He immediately covered it. <span class="PAF-Damian">&ldquo;Feel me anywhere but here.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;What&rsquo;s so special about it.&rdquo;</span></p>
<p>Drew tried to pull his hand but he insisted. <span class="PAF-Damian">&ldquo;No, Drew. It makes me feel violated.&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Relax, baby, I&rsquo;m just gonna taste you,&rdquo;</span> Drew said as he caressed the back of his hand. <span class="PAF-Drew">&ldquo;Just tell me when it stops feeling good.&rdquo;</span></p>
${storyImage('Blood-And-Cum/6')}
<p>He sucked in a sharp breath as Drew grabbed and stroked him with a firm grip. He uncovered his asshole and put his hand over Drew&rsquo;s and they stroked his cock together, slowly, intimately, in a milking motion. A shiver of anticipation and trepidation swept over him as he felt Drew&rsquo;s hot breath over his asshole.</p>
${storyVideo('Blood-And-Cum/v1', true, false, true, true)}
<p><br>Drew began flicking his asshole with his tongue...</p>
${storyVideo('Blood-And-Cum/v2', true, false, true, true)}
<p><br>Then followed it with a series of taps with the tip of his tongue.</p>
${storyVideo('Blood-And-Cum/v3', true, false, true, true)}
<p><br><span class="PAF-Drew">&ldquo;Do you like it?&rdquo;</span></p>
<p><br><span class="PAF-Damian">&ldquo;Mmhm...Just slightly...&rdquo;</span></p>
${storyVideo('Blood-And-Cum/v4')}
<p><br>Drew inserted his tongue far up his asshole. He trembled. He braced his stomach and his body tightened, intimidated by Drew&rsquo;s growing desire. Yet as Drew&rsquo;s insistence grew, he couldn&rsquo;t help but fall into a haze, delirious with Drew&rsquo;s delicious lust toward him. His cock twitched repeatedly and his asshole contracted around Drew&rsquo;s tongue with each twitch.</p>
${storyVideo('Blood-And-Cum/v5', true, false, true, true)}
<p><br><span class="PAF-Drew">&ldquo;Fuck, that&rsquo;s so good,&rdquo;</span> Drew whispered as he watched Damian&rsquo;s asshole twitch, his mouth watering even more thinking about putting himself inside Damian.</p>
${storyVideo('Blood-And-Cum/v6')}
<p><br>Without warning, Drew inserted his thumb into Damian&rsquo;s asshole. Damian shuddered, pulling himself away from Drew immediately and jumping off the bed.</p>
<p><span class="PAF-Damian">&ldquo;You said you were just gonna taste me!&rdquo;</span> Damian yelled, feeling betrayed and violated.</p>
<p><span class="PAF-Drew">&ldquo;And you said you liked it,&rdquo;</span> Drew retorted.</p>
<p><span class="PAF-Damian">&ldquo;Well, you turned me off right now,&rdquo;</span> Damian whined, his eyes watering. <span class="PAF-Damian">&ldquo;Oh my God, it&rsquo;s getting late now. I gotta go to the train station.&rdquo;</span></p>
<p>His tears began to trail down his face. <span class="PAF-Damian">&ldquo;Oh my fucking God, Drew, I can&rsquo;t believe you did this. Well, good job, you turned me off. Good-fucking-bye, now.&rdquo;</span></p>
<p>His voice trailed off as Drew approached him menacingly. <span class="PAF-Drew">&ldquo;God, I fucking love it when you&rsquo;re emotional,&rdquo;</span> Drew growled. Damian stepped back, whimpering.</p>
<p><span class="PAF-Damian">&ldquo;No! Stop! You should&rsquo;ve asked me first! But you didn&rsquo;t because you don&rsquo;t care. I thought you cared and I thought you could love me before I left you- ah!&rdquo;</span></p>
<p>Drew tried to catch Damian but he slipped away. <span class="PAF-Damian">&ldquo;No! I said no! You never cared about me, did you? All you want is to use me. No, no, no, Drew, this is not a joke, it&rsquo;s fucking over now. Ahhhh!&rdquo;</span></p>
<p>Drew swiftly caught Damian, trapping him with a firm grip on his neck by his elbow and spinning him around to face him. Drew pulled him close by the waist. So close their cocks touched.</p>
<p>Their bodies pressed together tightly, their cocks rubbing, the tip of Damian&rsquo;s cock against the base of Drew&rsquo;s, in a delicious friction that sent shivers down both of their spines. Drew&rsquo;s hands landed powerfully on Damian&rsquo;s buttcheeks, causing Damian to immediately cover his butthole with both hands, his body arching forward as a result. With a firm squeeze on Damian&rsquo;s butt, Drew raised him to his tiptoes.</p>
<p><span class="PAF-Drew">&ldquo;Stand on my feet,&rdquo;</span> Drew ordered, and Damian obeyed without hesitation. As they stood on Drew&rsquo;s feet, their cocks were now fully aligned and Drew began thrusting his hips, grinding against Damian while firmly grasping his butt.</p>
<p>Damian couldn&rsquo;t believe the intensity of the sensation. He glanced down and watched their cocks grinding tightly. He gazed upward at Drew and begged for more. <span class="PAF-Damian">&ldquo;Ok, this is so fucking hot. Don&rsquo;t stop.&rdquo;</span></p>
<p>Drew nodded. <span class="PAF-Drew">&ldquo;Put your arms around my neck. You&rsquo;re gonna fall,&rdquo;</span> He said while raising the intensity of his grind.</p>
<p><span class="PAF-Damian">&ldquo;Ok, but please don&rsquo;t violate me,&rdquo;</span> Damian pleaded sweetly.</p>
<p>Damian wrapped his arms around Drew&rsquo;s neck to steady himself. But as soon as he did, Drew inserted his middle finger into Damian&rsquo;s tight asshole, sending him into a frenzy.</p>
<p><span class="PAF-Damian">&ldquo;You motherfucker!&rdquo;</span> Damian cried out and attempted to choke Drew with both hands, eliciting a chuckle from him. Damian&rsquo;s small hands were so soft and weak, they tickled Drew more than choked him.</p>
<p>He bit Damian&rsquo;s nose and grinded his erection even more intensely, reducing Damian to moans and begs.</p>
<p><span class="PAF-Damian">&ldquo;Ah-ah-ah, no, Drew, you&rsquo;re gonna make me cum like this,&rdquo;</span> Damian chirped, voice higher-pitched than ever before, as his rebellious attitude dissipated.</p>
<p>Drew eased on the grind. With his middle finger still hooking Damian by his ass, he lifted him up. Damian had to straddle Drew.</p>
<p><span class="PAF-Drew">&ldquo;It&rsquo;s not up to you, slut. You&rsquo;re mine now,&rdquo;</span> Drew growled possessively. <span class="PAF-Drew">&ldquo;I&rsquo;ll use you, punish you, reward you&hellip;control you. You&rsquo;re mine to do with as I want.&rdquo;</span></p>
<p>Damian stared back at Drew, mouth and eyes open wide, searching Drew&rsquo;s face for what he meant by saying that, unable to believe it. Warmth crept up his face slowly as the realization came in. Then Drew hit the bomb.</p>
<p><span class="PAF-Drew">&ldquo;I don&rsquo;t know what&rsquo;s gonna happen to you and I, Damian. But I sure as hell will never leave you.&rdquo;</span></p>
<p>The warmth in Damian&rsquo;s face suddenly collected in his eyes and nose, exploding with intense heat leaking through them. Damian&rsquo;s tears of happiness and his nose ran down Drew&rsquo;s face as he voraciously ate Drew&rsquo;s lips.</p>
<p><span class="PAF-Damian">&ldquo;Oh my God...Oh My God...I love you you...I love you...&rdquo;</span> Damian cried between kisses.</p>
<p><span class="PAF-Drew">&ldquo;I love you too,&rdquo;</span> Drew said, his free arm holding Damian tightly to him with crushing force.</p>
<p>When Damian heard that, he shrieked. With Drew&rsquo;s finger wiggling in his asshole and Drew blowing him back strong kisses, his emotions flooding his body, he was on the brink of orgasm.</p>
<p>With his face stuck to Drew, sobbing with runny eyes and nose, he pleaded. <span class="PAF-Damian">&ldquo;Ah-ah-ah-ah...please...please...hold...hold me...I&rsquo;m gonna cum&rdquo;.</span></p>
<p>Drew took his finger out of Damian&rsquo;s asshole and flipped him around. With his arms under Damian&rsquo;s knees, he tucked Damian to his chest.</p>
<p>A full-body shudder wracked Damian as he willfully stopped himself from orgasm. Drew still carried him, far drom tired, planting kisses through his hair after he managed to hold back his orgasm.</p>
<p><span class="PAF-Damian">&ldquo;Oh my God, this was the strongest feeling...(sniffling)...I&rsquo;ve had in my life.&rdquo;</span></p>
<p>Damian turned his head and Drew locked in kisses with him. With one arm under Damian&rsquo;s knees, he stimulated Damian&rsquo;s taint area with one hand. Drew&rsquo;s fingers would then creep below to Damian&rsquo;s asshole and penetrated him with his middle and index fingers, slowly and gently, just like their kisses.</p>
<p>He then carried Damian to bed, slicking his ass with saliva, and finger-fucked him until he was ready for three.</p>
<p>When Damian was ready, Drew spit in his asshole and slowly inserted his cock in him. Damian&rsquo;s asshole was very tight but with determination from both of them, Damian could take Drew inside him entirely.</p>
${storyImage('Blood-And-Cum/hilt')}
<p>Holding Damian by the waist, Drew shoved himself in to the hilt. He sighed, basking in the satisfaction of filling Damian from the inside, owning the most beautiful person he knew completely. Ass to crotch, thigh to thigh, the walls of Damian&rsquo;s asshole tightly wrapped around Drew&rsquo;s cock, expanding and contracting with throbbing rhythm, they felt closer and more connected than ever.</p>
<p>Damian trembled beneath Drew, his claws sinking into the mattress, trying to contain the pain.</p>
<p>Having something so big in his asshole, he instinctually pushed out. His insides would squeeze its invader with maximum force but Drew&rsquo;s strong hold kept him inside.</p>
<p>Soon enough his asshole would accept Drew as its partner. He quickly learned how to control the contraction of his asshole, and his pains would slowly turn into to pleasure, and he would feel the bliss of being filled with a man. And what a wonderful man that filled him. Damian&rsquo;s grunts and gasps turned into breathy moans as Drew slowly thrusted into him, still holding him close, their thighs never departing for a moment.</p>
<p>Drew would meet Damian&rsquo;s moans with deep dark hums. He pulled back slightly, separating their thighs, then slid his cock in balls deep again, slowly, repeating as the contractions of Damian;s asshole became less forced. Damian&rsquo;s asshole was sticky with dried up spit, so the friction between him and Drew was rough, but that only added to their pleasure.</p>
${storyVideo('Blood-And-Cum/v7')}
<p>Drew would build up to a fucking rhythm. Damian tried to control his pleasure, as he was trained to do as long as he could remember. But the strange pleasure pooling around his bottom, mixed with the thrumming pain in his stretching-up anal canal, he was unable to hold himself any longer. The heat in his prostate grew unbearable as he begged for permission to cum.</p>
<p><span class="PAF-Damian">&ldquo;Drew, please! Can I release? Let me cum! Let me cum!&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Can you hold it? I want us to cum at the same time.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Nononono, I can&rsquo;t...I can&rsquo;t...ahhh!&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Let go, baby, let it all out!&rdquo;</span></p>
<p>With a forceful thrust, Drew pushed deep into Damian, wrapped his arm around Damian&rsquo;s chest, and cruelly pulled him up to his chest. He grabbed Damian&rsquo;s cock and squeezed it harshly, stroking it rapidly, then he forced another back-breaking thrust and shoved himself deep, far deep into Damian.</p>
<p><span class="PAF-Damian">&ldquo;Oh my G-g-g-g-g-ahhhhh-ahhhhh-ahhhh!&rdquo;</span></p>
<p>Not only&nbsp;had he&nbsp; been denied for a long time, Damian had never been stimulated so intensely before. Thick creamy cum was shot from his Dick with an intensity and volume unimaginable to Drew. Drew gasped watching Damian spill himself so violently, holding him tightly as he trembled in his arms. With a mighty grip he squeezed cum out of Damian in what felt like a non-ending ejaculation. Damian poured and poured cum until his orgasmic tremor ceased. His mind was drained and his body went completely limp in Drew&rsquo;s hand. Drew allowed Damian to fall, landing on top of him. With his cock never leaving Damian&rsquo;s ass, he spooned Damian.</p>
<p>He pressed his hand against Damian&rsquo;s chest and felt his pumping heart, a habit he had previously with women. He held the back of Damian&rsquo;s neck in a long kiss as a warm feeling swept his head imagining the pleasure Damian had been in. He rained kisses over Damian, shoulders, neck and hand. His sticky hand roamed over Damian&rsquo;s body soothingly, not caring about spreading the remains of their lovemaking over his skin.</p>
<p>Exhausted and satisfied, Damian lay motionless, panting, his body intermingled with Drew, contained by him, in a pool of sweat and body heat. Damian made a slight move to push Drew off of him to rest but Drew wouldn&rsquo;t take it out. He kept thrusting himself in Damian, too horny to stop.</p>
<p><span class="PAF-Drew">&ldquo;How did it feel?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;(pant) (pant) (pant)&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Damian?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Just shut up, Drew...I can&rsquo;t take anymore...&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;But I&rsquo;m not finished with you yet. Can you handle it?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Mmmm-mmmm-mmm&rdquo;</span> Damian whined as Drew thrusted in him. He didn&rsquo;t answer Drew but Drew sat him up on his kneesand humped him regardless.</p>
<p><span class="PAF-Damian">&ldquo;Oh my fucking Ga-a-a-a-hd,&rdquo;</span></p>
${storyVideo('Blood-And-Cum/v8')}
<p>Drew fucked Damian until he brought him on the brink of a second orgasm.</p>
<p><span class="PAF-Damian">&ldquo;Drew, Drew, I might cum aga-a-a-a--innnnn....&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Do it, baby, don&rsquo;t hold back.&rdquo;</span></p>
<p>Damian came again. He stroked his cum out this time while Drew kept fucking him. His two ejaculations cost him a lot of energy, his arm failed beneath him and he collapsed onto the mattress. Drew let his weight land on Damian, still inside him, intent on not taking himself out until he came inside Damian. He stroked Damian&rsquo;s tousled hair, asking him for another round.</p>
<p><span class="PAF-Damian">&ldquo;Can we please take a break...I...I...Oh my God, Drew, have mercy.&rdquo;</span></p>
<p>Drew pulled Damian up to his knees. With a strong grip on Damian&rsquo;s neck, he locked him in a kiss, eating his sneaky little tongue out.</p>
${storyVideo('Blood-And-Cum/v9', true, false, true, true)}
<p>With his mouth and ass filled by Drew, it felt extremely hot and intimate. Too much for him to handle in this state.</p>
<p><span class="PAF-Damian">&ldquo;M-m-m...wait...Drew...&rdquo;</span> Damian tried to pull his mouth away from Drew.&nbsp;<span class="PAF-Damian">&ldquo;This is so fucking hot...&rdquo;</span></p>
<p>But as soon as they broke apart, Drew would hungrily seek Damian&rsquo;s lips again, each time attacking more furiously, not giving him the chance to lip a word.</p>
<p>Drew&rsquo;s insatiable desire and relentless advance for more restored Damian&rsquo;s arousal full force instantly. His cock was erect again and he instinctively jerked himself but Drew swiftly pulled his elbows back, unallowing self-touch this time.</p>
<p><span class="PAF-Damian">&ldquo;I CAN&rsquo;T...Uh, uh, uh...please...&rdquo;</span> Helpless in Drew&rsquo;s hold Damian yelped, begging for release. His cock twitched as Drew continued to mercilessly drilled his prostate. But Drew had had enough with Damian pulling away. He bit down on Damian&rsquo;s lip so hard that it drew blood. Wanting</p>
<p>to scare his femboy into submission, he growled so powerfully, that it shook Damian deeply. His eyes meeting Drew&rsquo;s fiery gaze, Damian&rsquo;s pupils were blown wide with fear and fascination of Drew&rsquo;s power. That deadly stare hit Damian&rsquo;s cords just right. A shot of cum immediately exploded out of Damian&rsquo;s cock. His hands wanted to race to his cock but Drew had them cuffed still. Waves of thick cum gushed out of Damian&rsquo;s cock, assisted&nbsp;only by the twitches of its own and Drew&rsquo;s violent thrusts.</p>
<p>Drew saw Damian&rsquo;s eyes fading out and he released his grip on him. Damian collapsed to the mattress again.</p>
<p><span class="PAF-Drew">&ldquo;Did you cum again?&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;Yes...yes...I came so fucking hard...I&rsquo;m so sorry...&rdquo;</span> Damian whined and sobbed, his voice muffled as Drew shoved his head into the mattress, ramming him furiously.</p>
${storyVideo('Blood-And-Cum/v10')}
<p><span class="PAF-Damian">&ldquo;Ahhhhh...fuck...fuck...Ahhhhh&rdquo;</span> Damian screamed, his last scream trailing with shudders and sobs as he bit the mattress to silence himself.</p>
<p><span class="PAF-Drew">&ldquo;Again?!!!!&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;You&rsquo;re so fucking hard!&rdquo;</span> Damian yelped after releasing his 4th cum.</p>
<p><span class="PAF-Drew">&ldquo;You cum like a fucking girl!&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;I can&rsquo;t...&rdquo;</span></p>
${storyVideo('Blood-And-Cum/v11')}
<p>Drew flipped Damian over and dicked him from beneath until Damian came again. Drew didn&rsquo;t stop fucking-still fucking Damian until he himself finally came to orgasm. While all Damian&rsquo;s cums came with sobs and cries, Drew&rsquo;s came with a chuckle. He came powerfully, gushing deep inside Damian, until he was drained completely, or at least he felt he did. Damian lay in Drew&rsquo;s embrace, panting while Drew&rsquo;s cum leaked from his ass to Drew&rsquo;s balls.</p>
<p>Drew took his cock out with a deep sigh. He kissed Damian&rsquo;s forehead and comforted him that it was over. Damian thanked God it was over.</p>
<p><span class="PAF-Damian">&ldquo;I thought you were gonna fuck me forever.&rdquo;</span> He giggled as he turned around and kissed Drew.</p>
<p>Drew watched in awe as Damian wiped his ass with his hand and smelled the cum he cupped in his palm curiously.</p>
<p>Damian&rsquo;s brow furrowed slightly in concentration, and his eyes narrowed as he brought his palm closer to his face, tilting his head to the side. He inhaled deeply, nostrils flaring as the scent of Drew&rsquo;s cum filled his senses. His lips parted just slightly, as if he was savoring the aroma before it even touched his tongue.</p>
<p>He closed his eyes, focusing entirely on the moment. He took a small, tentative sip. His mouth opened and closed a few times, his jaw working slowly as he tasted Drew&rsquo;s cum. His tongue moved with purpose, slapping against his palate, coaxing the thick substance.</p>
<p>There was a quiet, almost imperceptible smack as he swirled the cum around his mouth, his cheeks hollowing slightly with the effort. His tongue flicked against his teeth, pushing the cum between them, letting it flow from side to side. He savored it, as if trying to capture every nuance of its subtle flavor. His expression shifted subtly, a look of intense focus etched on his face. It was as though he was tasting the most delicious thing in the world, and he was determined to experience it fully.</p>
<p>Finally, he swallowed with a contented sigh, his eyes slowly opening as raised his palm to his face again and slurped the remaining cum inside, swallowing at ill at once. With a breathy sigh, he opened his mouth in Drew&rsquo;s face proudly, striking his tongue out, showing him his empty mouth.</p>
<p><span class="PAF-Drew">&ldquo;You absolute cumslut,&rdquo;</span> Drew mumbled, staring at Damian in disbelief.</p>
<p>Damian&rsquo;s head bobbed in approval. He wiped his ass and legs and fingered himself to get every bit of Drew&rsquo;s cum in and out of his body, so he could lick it off his hand and suck it off his finger in front of Drew. He then went down and sniffed his way on the mattress, licking off the remaining wet traces of his own cum that he could find. He sniffed his way up Drew&rsquo;s arm, planted a soft kiss on Drew&rsquo;s lips, and slid his undertongue down Drew&rsquo;s chiseled torso.</p>
<p>He licked and sucked off all traces of cum on Drew&rsquo;s legs, crotch, dick, and balls. Drew, inexplicably aroused by this extreme faggotry, was erect by the time Damian reached his cock.</p>
${storyImage('Blood-And-Cum/7')}
${storyImage('Blood-And-Cum/7a')}
${storyImage('Blood-And-Cum/8')}
<p>Damian kneaded, teased, kissed, licked, sucked, deepthroated, stroked, squeezed, and nibbled on what he could of Drew&rsquo;s cock and balls, and the perineum. His small tongue worked magic on Drew&rsquo;s genitals. His ending sequence was squeezing Drew&rsquo;s cock as hard as he could while peeling down his shaft with two fingers, stretching his dickhole open wide for the tip of his tongue to flicker through, his eyes meeting Drew daringly and his legs flapping behind, feet arched and toes tucked, just like Drew loves it.</p>
<p><span class="PAF-Drew">&ldquo;FUCK!&rdquo;</span> Drew barked, shoving Damian&rsquo;s head over his cock and coming inside his face. Damian tugged Drew&rsquo;s balls and squeezed until all of Drew&rsquo;s milk was in his mouth.</p>
${storyImage('Blood-And-Cum/9')}
${storyImage('Blood-And-Cum/10')}
<p><span class="PAF-Damian">&ldquo;G-gh-rrr...&rdquo;</span> Damian gargled as he tried to keep Drew&rsquo;s cum in his mouth. He approached Drew&rsquo;s face, begging for something.</p>
<p>Drew was reluctant for a moment before locking in a cummy, messy kiss with Damian. They swallowed the cum in their mouths and collapsed in each other&rsquo;s arms, puffing a few cigarettes in silence. It was well past midnight and they made their mind to take quick showers before they rushed to the train station, hoping to find Drew a ticket. They entered the shower together to save time and they ended up having sex in there for another hour. Exhausted and satisfied, they came out of the shower and collapsed on the bed again, surrendering to the temptation of a slumber. Damian set up an alarm to wake them up early so they could escape before his parents showed up, and fell asleep in mere seconds.</p>
<p>When Drew made sure Damian was asleep, he stretched out and turned the alarm off.</p>
${appendLink('First protagonist', 'section9')}
`
)

const section9 = newSection(9);

const row9a = storyRow('9a', 'Old Boy', 
`
${storyAudio('you-and-whose-army')}
${storyImage('blinds')}
<p>Drew wakes up to the light slicing through the blinds, glancing over at Damian, still spread-eagled on the bed, oblivious and exposed. He carefully slips out of bed, grabs Damian&rsquo;s keys, and heads out.</p>
<p>The morning streets are eerily quiet today, the air thick with the impending doom he feels rising in his gut.</p>
${storyImage('gas_station')}
<p>The gas station is a ghost town. The only movement is the slow drip of gasoline into the plastic containers. Drew grabs two. He walks back to Damian&rsquo;s house, the fuel sloshes in the container as memories of Damian and their last night together breeze in his mind.</p>
<p>As he opens the door, the house is silent. Things feel&hellip;too silent. He smells it&mdash;acrid, like burning chemicals. He sees the smoke next, a lazy curl of blue, hanging in the air like a ghost. His heart stops.</p>
<p>Damian&rsquo;s on the floor, body jerking like a marionette with cut strings, blue-tinged blood leaking from his nose, his ears. Drew&rsquo;s breath catches in his throat, his pulse skyrocketing. He drops the gas cans; the clatter echoes like gunshots.</p>
<p><span class="PAF-Drew">&ldquo;Damian!&rdquo;</span> Drew&rsquo;s voice rips through the silence, raw and desperate. He&rsquo;s on the floor in a heartbeat, sliding under Damian, trying to hold him down, to stop the violent shaking, but it&rsquo;s like trying to hold back a tidal wave. Damian&rsquo;s pulse is wild, erratic, like a dying bird fluttering under his skin. The blue smoke is thick, wrapping around Drew&rsquo;s brain, his lungs, pulling him under.</p>
<p><span class="PAF-Drew">&ldquo;Hold on! Just hold on!&rdquo;</span> Drew&rsquo;s voice is cracking, breaking like shattered glass. His hands are slick with blood, his eyes wide and wild. <span class="PAF-Drew">&ldquo;I&rsquo;m sorry, I&rsquo;m so fucking sorry!&rdquo;</span></p>
<p>Damian&rsquo;s eyes roll to the back of his head. Body spasms one last time, his back arching off the floor like he&rsquo;s being ripped out of his skin. Then, he goes still. Too still.</p>
<p><span class="PAF-Drew">&ldquo;Damian! Damian, baby, wake up!&rdquo;</span> Drew slaps his face, panic twisting his voice into something ugly, something broken.<span class="PAF-Drew"> &ldquo;I&rsquo;m sorry. I&rsquo;m so sorry, Damian. Don&rsquo;t you die on me, huh? Stay with me.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;&hellip;&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Damian, wake&hellip;up&hellip;wake up, baby.&rdquo;</span></p>
<p>Time is slow. Drew&rsquo;s losing his grip on reality. The world is as dark as a dark alley.</p>
<p><span class="PAF-Drew">&ldquo;Baby, don&rsquo;t leave me now.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;&hellip;&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Baby, don&rsquo;t leave me now.&rdquo;</span> His voice is a whisper, a plea. <span class="PAF-Drew">&ldquo;Why would you... Don&rsquo;t you think I&rsquo;ve been looking for someone like you? Damian, please&hellip; Do me this favor. Don&rsquo;t die. Survive this and I&rsquo;ll make it up to you, I promise.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;&hellip;&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Why not?<br>Don&rsquo;t you think we&rsquo;re the same?<br>You&rsquo;re broken, I&rsquo;m an outsider too.<br>Let&rsquo;s burn this house. Let&rsquo;s burn school and this world together.<br>I&rsquo;ll never leave you. I promise.<br>You&rsquo;ll be my friend, my companion, you&rsquo;ll learn to understand me, and I&rsquo;ll learn to love you.<br>You could be my whore and (chuckle) I&rsquo;ll be your man. I&rsquo;ll protect you forever.<br>I never saw anyone as beautiful as you are. Never loved so much. Don&rsquo;t die on me now that I found love.&rdquo;</span></p>
<p><span class="PAF-Damian">&ldquo;&hellip;&rdquo;</span></p>
<p><span class="PAF-Drew">&ldquo;Why are you so cruel?!!!<br>No, no, no, you can&rsquo;t die!<br>You won&rsquo;t!<br>It&rsquo;s not up to you, slut!&rdquo;</span></p>
<p>Drew scrambles to his feet, grabs a cordless phone off the table, his fingers slick and sticky with Damian&rsquo;s blood as he punches in Sam&rsquo;s number, his breath coming in ragged gasps. He returns under Damian&rsquo;s body, stroking his tousled hair until the phone is answered.</p>
<p><span class="PAF-Drew">&ldquo;Sam!&rdquo;</span> he yells, eyes darting around the room, hallucinations creeping at the edges of his vision. The walls seem to close in, the smoke thickening, suffocating. <span class="PAF-Drew">&ldquo;It&rsquo;s the blue diamond! He&rsquo;s&mdash;he&rsquo;s dying!&rdquo;</span></p>
<p><span class="PAF-Sam">&ldquo;What the hell are you talking about?&rdquo;</span> Sam&rsquo;s voice crackles over the line, confused, trying to piece together Drew&rsquo;s frantic words. <span class="PAF-Sam">&ldquo;Did you smoke it? How much?&rdquo;</span></p>
<p>Drew&rsquo;s gaze falls on the smoldering cigarette on the floor, its blue ember glowing like a tiny, malevolent eye. <span class="PAF-Drew">&ldquo;Just a few puffs! It&rsquo;s not me&mdash;it&rsquo;s Damian! What do I do? He&rsquo;s overdosing!&rdquo;</span></p>
<p><span class="PAF-Sam">&ldquo;Damian? Is that the boy Jax left you with? (sigh) Relax, kid, he could be fine. Are his eyes fixed or still?&rdquo;</span></p>
${storyImage('eye', '', '', '', 'webp')}
<p>Drew rolls down one of Damian&rsquo;s eyes.&nbsp;His eye is bloodshot and still. But the iris is in fluid motion, the colors within it are shifting and undulating, like waves in water. Drew&rsquo;s grip tightens on the phone, knuckles white, the plastic creaking under the pressure.</p>
<p><span class="PAF-Sam">&ldquo;That&rsquo;s what the blue diamond does, kid. It sets you on fire.&rdquo;</span></p>
<p>The phone slips from Drew&rsquo;s hand, clattering to the floor. He looks up, heart slamming against his ribs as a shadow looms over him. A giant black man, eyes burning with rage, towering over Drew like a specter from his worst nightmare.</p>
<p><p<span class="PAF-Bob">&ldquo;What the fuck are you doing in my house?&rdquo;</span></p>
${appendLinkRow('Blaze', '9b', true)}
`

)

section9.appendChild(row9a);

const row9b = storyRow('9b', 'Blaze (Part 1)', 
`
${storyImage('arsonist1', '', '', '', 'png')}

${appendLinkRow('Blaze (Part 2)', '9c')}
`
)


const row9c= storyRow('9c', 'Blaze (Part 2)', 
`
${storyImage('arsonist2', '', '', '', 'png')}
${appendLinkRow('Blaze (Part 3)', '9d')}
`
)


const row9d= storyRow('9d', 'Blaze (Part 3)', 
`
${storyImage('arsonist3', '', '', '', 'png')}

${storyEndButton('To be continued...', 'checkPathEnd193()')}
`
)


}


// section.appendChild(row);


//${storyPart('id', 'text')}



// const section = newSection();


// const row = storyRow('', ' ', 
// `

// `
// )

// section.appendChild(row);


    
//parts



   

    setChapterIndex = ()=> {
        reSetChapterIndex()

    addToChapterIndex('Section 1', 'section1') 
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


function setVince(num) {
    vince_num = num;

    
    return ''
}

function setJaime(num) {
    jaime_num = num;
    resetVandJ()
    return ''
}

function setVince(num) {
    vince_num = num;
    resetVandJ();
    
    return ''
}

function resetVandJ() {
storyRow('2v2', 'Mom and Vince (Part 2)', 
`
${storyVideo('Vince/vince2', false)}
${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}
${(jaime_num < 4)? `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}` : ``}
`
)
storyRow('2v3', 'Mom and Vince (Part 3)', 
`
${storyVideo('Vince/vince3', false)}
${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}
${(jaime_num < 4)? `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}` : ``}
`
)

storyRow('2v4', 'Mom and Vince (Part 4)', 
`
${storyVideo('Vince/vince4', false)}
${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}
${(jaime_num < 4)? `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}` : ``}

`
)
storyRow('2v5', 'Mom and Vince (Part 5)', 
`
${storyVideo('Vince/vince5', false)}
${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}

`
)

storyRow('2j2', 'Dad and Jaime (Part 2)', 
`
<p>Drew watched Dad and Jaime with extreme vigilance. He was numb and feelingless all day but suddenly he was fully awake and attentive, fascinated by their chemistry. He absorbed every small movement they made as it became etched onto his memory.</p>
${storyVideo('Jaime/jaime2', false)}
${(vince_num<5)? `${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}` : ``}

${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}

`
)

storyRow('2j3', 'Dad and Jaime (Part 3)', 
`
${storyVideo('Jaime/jaime3', false)}
<p>Drew&rsquo;s cock was hard and throbbing in his jeans, and he sneakily stroked it through the fabric. He was sweating heavily and his heart beat in his chest more as his anxiety elevated while watching.</p>
<p>Jealousy had been coursing through him. He wished he&rsquo;d been the one staring in Jaime&rsquo;s eyes, the one who kissed her and fucked her.</p>
${storyImage('Jaime/3')}
<p>Yet he slowly began to accept the fact that he himself wouldn&rsquo;t have pleasured her a tenth of this. He probably wouldn&rsquo;t have had a tenth of Dad&rsquo;s pleasure even.</p>
<p>He wondered if he himself would&rsquo;ve had half his enjoyment right now if it was him on Jaime instead of Dad. His mind and heart were on fire.&nbsp;Was he&nbsp;better off watching Jaime fucked by better men than toughing her himself? He contemplated taking his pants off and jerking off to them.</p>

${(vince_num<5)? `${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}` : 
    
    `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}`}



`
)

storyRow('2j4', 'Dad and Jaime (Part 4)', 
`
${storyVideo('Jaime/jaime4', false)}

<p>Dad pulled Jaime to the table where Drew had sat watching. Drew was uncomfortable touching himself in Dad and Jaime&rsquo;s view. They barely acknowledged his existence on the table.</p>
${storyImage('Jaime/4')}
${storyImage('Jaime/5')}
${storyImage('Jaime/6')}
${storyImage('Jaime/7')}
${storyImage('Jaime/8')}
<p>He glanced at Mom and Vince and he was turned off immediately. He feared Dad would give Jaime to Vince after he was done with her. What would stop him, he was already making his wife fuck his friend. In a few days, it was going to be gangbangs and orgies on Jaime and Mom inside the house. His heart crashed at the thought and he was turned off immediately, within seconds of troubled breath he lost his boner. He took his pack of cigarettes out, rolled a cigarette back and forth, loosening the tightly packed tobacco inside to spill out, falling onto the sheet of paper he had spread out in front of him. Once the cigarette was empty, reduced to just a hollow tube of white paper, he straightened it out, smoothing the wrinkles with his thumb. He sprinkled the diamond powder on the loose tobacco, mixed the tobacco with the powder, then using the edge of another paper, he gently nudged the loose tobacco back towards the cigarette, guiding it carefully, bit by bit, back into its original shell. He worked with practiced precision, just&nbsp;like Rico taught him, rolling and tapping the paper to ensure the tobacco settled evenly, until the cigarette was full once more. Finally, he twisted the end to seal it, returning the cigarette to its original form, as if nothing had ever been disturbed but the tip. Rico would be proud of that job, a true 'invisible joint' as he calls him, but he might cry if he knew what the kid had put inside.</p>
${(vince_num<5)? `${appendLinkRow('Watch Mom and Vince (Part ' + vince_num + ')', '2v'+vince_num, isSwitch=true, 'setVince(vince_num+1)')}` 
    : `${appendLinkRow('Watch Dad and Jaime (Part ' + jaime_num + ')', '2j'+jaime_num, isSwitch=true, 'setJaime(jaime_num+1)')}`}



`
)

storyRow('2j5', 'Dad and Jaime (Part 5)', 
`
${storyImage('Jaime/9')}
<p>By the time Drew was done rolling his drugged cigarette, Dad had pulled Jaime and moved her to her dancing pole. A tingle went through Drew&rsquo;s brain as he realized Dad was going to fuck her on her bar, a vision that seemed like an erotic dream he&rsquo;d been desperate to recall but always escaped him, and here and now he was about to experience it secondhand. He forgot about his cigarette. Put it aside and ecstatically watched Dad and Jaime&rsquo;s mesmerizing final act.</p>
${storyVideo('Jaime/jaime5', false)}

${appendLink('Junkie...', 'section3')}

`
)

    return ''
}


function select_junkie_path() {
    currentStory.vars.junkie_path = true;
    earnAchievement('Junkie');
    setPart(currentStory.vars.junkie_path, 'junkie_path_link', '5a')
    setPart(!currentStory.vars.junkie_path, 'blood_path_link', '5a')
    setVince(2);
    setJaime(2);
    return ''
}

function select_blood_path() {
    currentStory.vars.junkie_path = false;
    earnAchievement('Bloodbath');
    setPart(currentStory.vars.junkie_path, 'junkie_path_link', '5a')
    setPart(!currentStory.vars.junkie_path, 'blood_path_link', '5a')
    setVince(2);
    setJaime(2);
    return ''
}

function setKiss(val=true) {
    currentStory.vars.first_kiss = val;
    setPart(currentStory.vars.first_kiss, 'first-kiss-accepted', '4d')
    setPart(!currentStory.vars.first_kiss, 'first-kiss-declined', '4d')
}

if (currentStory.vars.hasOwnProperty('junkie_path')) {
    if(currentStory.vars.junkie_path) {
        select_junkie_path()
    }   

    else {
        select_blood_path()
    }
}

if (currentStory.vars.hasOwnProperty('first_kiss')) {
    if(currentStory.vars.first_kiss) {
        setKiss()
    }

    else {
        setKiss(false)
    }
}

function checkPathEnd193() {
    if (currentStory.vars.junkie_path) {
        endPath('junkies_path');
    } else {
        endPath('blood_path');
    }
}