loadPage = function() {

    prepareStory();


const section1 = newSection(1);


const row1a = storyRow('1a', ' INT. ROOM<br>EARLY MORNING', 
`
${storyImageRecurring('myroom_ground')}
<p>Michael woke up early on Sunday. He woke up in a fowl mood. The sun was already punching through the cracked blinds. He dragged himself out of bed, threw on some clothes, and stumbled downstairs for a breakfast that didn&rsquo;t taste like cardboard, cause Kenzie was there. Then he went on with the rest of his sorry day.</p>
${storyImageRecurring('hall_ground')}
<p>Around noon, the doorbell rang. He shuffled to the front door and opened it.</p>
${storyImage('ned_door')}
<p>Ned was standing there, looking like he&rsquo;d seen a ghost.</p>
<p><span class="Michael">MICHAEL</span><br />What the hell are you doing here?</p>
${appendLinkRow('Ned at the door', '1b', true)}

`
)

section1.appendChild(row1a);

const row1b = storyRow('1b', 'EXT. FRONT DOOR<br>NOON', 
`
${storyImageLeft('ned_door_1')}
<p><span class="Michael">MICHAEL</span><br />What the hell are you doing here?</p>
<p><span class="Ned">NED</span><br />Is Kelsi home?</p>
<p><span class="Michael">MICHAEL</span><br />What? No, she&rsquo;s out. Why didn&rsquo;t you call her?</p>
<p><span class="Ned">NED</span><br />I- I don&rsquo;t have her number.</p>
<p><span class="Michael">MICHAEL</span><br />Are you and Kelsi friends now?</p>
<p><span class="Ned">NED</span><br />No, we&rsquo;re not friends.</p>
<p><span class="Michael">MICHAEL</span><br />Then why the fuck are you ringing our door?</p>
<p><span class="Ned">NED</span><br />I&rsquo;m sorry. I made a mistake.</p>
<p>Michael dashed at him, grabbed him by the jacket and yanked him downward, slamming him to the floor. His arm wrapped around Ned&rsquo;s head, trapping him in a headlock.</p>
<p><span class="Michael">MICHAEL</span><br />What the fuck are you doing here, man?</p>
<p><span class="Ned">NED</span><br />Look, I&rsquo;m sorry, I&rsquo;m gonna leave!</p>
<p>Ned whimpered, begging for mercy. Pathetic. Michael squeezed harder.</p>
<p><span class="Ned">NED</span><br />Aaaah! What did I do? Why are you doing this, man?</p>
<p><span class="Michael">MICHAEL</span><br />WHY AM I DOING THIS?!!</p>
<p>Why the hell am I doing this? He thought. Why am I acting like Rick?</p>
<p>He let Ned go. Ned bolted, but Michael shouted for him to wait. He didn&rsquo;t. Michael chased him down, tackled him to the ground. Ned cowered, arms shielding his face, expecting another beating.</p>
<p><span class="Michael">MICHAEL</span><br />Relax, I&rsquo;m not gonna hit you.</p>
<p><span class="Ned">NED</span><br />Listen, man, I just rang your door. I&rsquo;m-</p>
<p><span class="Michael">MICHAEL</span><br />Shut up and get up!</p>
<p>Michael sighed, extending a hand to help Ned up. Ned ignored it, got up on his own. Michael almost felt like apologizing.</p>
<p><span class="Michael">MICHAEL</span><br />What did you want from Kelsi?</p>
<p><span class="Ned">NED</span><br />Nothing! I won&rsquo;t bother you again.</p>
<p><span class="Michael">MICHAEL</span><br />Hell yeah, you won&rsquo;t. Look, you can simp to her in school all you want, I don&rsquo;t care. But to come to our house just to suck up to her, that&rsquo;s insane. If you don&rsquo;t give me a good reason why you came to our house, I&rsquo;m gonna beat the shit out of you right now!</p>
<p><span class="Ned">NED</span><br />We have a problem with our kitchen. The plumbing setup under our kitchen sink broke and I was going to ask Kelsi for help.</p>
<p><span class="Michael">MICHAEL</span><br />So Kelsi is a plumber now?</p>
<p><span class="Ned">NED</span><br />No! It&rsquo;s just- This happened before when she was staying at our house with my sister once and she fixed the sink very easily and I was going to ask her to do it again. My dad&rsquo;s outta town and I didn&rsquo;t know what to do.</p>
<p><span class="Michael">MICHAEL</span><br />Just open the newspaer, man. There&rsquo;s a section for handy men. It&rsquo;s not that hard.</p>
<p><span class="Ned">NED</span><br />I&rsquo;ll do that right now thank you.</p>
<p><span class="Michael">MICHAEL</span><br />And when I opened the door, why didn&rsquo;t it come to you to ask me to do it? Do you think I can&rsquo;t do what Kelsi does?</p>
<p><span class="Ned">NED</span><br />I- don&rsquo;t-</p>
<p>Michael put my his around Ned&rsquo;s shoulder, tapped his arm cordially.</p>
<p><span class="Michael">MICHAEL</span><br />Relax, I&rsquo;m just teasing you. Tell me, do you have any money?</p>
<p><span class="Ned">NED</span><br />Not much, no.</p>
<p><span class="Michael">MICHAEL</span><br />Shit. How&rsquo;re you gonna hire a plumber then? I don&rsquo;t think you can hire anyone for less than $200 on a Saturday.</p>
<p><span class="Ned">NED</span><br />I can get money from Mom.</p>
<p><span class="Michael">MICHAEL</span><br />Alright, how about this, I&rsquo;ll come fix your sink for just a $100. What do you say?</p>
<p>He had no clue about plumbing, but he needed cash for a gym membership. Ned was an easy mark. He agreed quickly, anxious at the thought of calling a stranger. Weak like a child.</p>
${appendLinkRow('Ned&rsquo;s kitchen', '1c', true)}

`
)
const row1c = storyRow('1c', 'INT. NED&rsquo;S KITCHEN<br />PAST NOON', 
`
${storyImage('plumbing')}
<p>They ended up at Ned&rsquo;s shortly. Ned led Michael to the kitchen, pointed at the mess under the sink. Neither of them knew a damn thing about plumbing. The problem was the water flow. Kelsi had mentioned clogged drains once, so they latched onto that. They sat on the floor, staring at the pipes like two idiots. Neither had an idea of what to do. The abomination before them could only be understood by a professional. After a lot of head scratching, Michael realized there was only one thing to do.</p>
${storyImage('call_kelsi')}
${appendLinkRow('Call Kelsi', '1d', true)}
`
)

const row1d = storyRow('1d', 'Plumbing', 
`<p>She quickly answered, as fiery as ever.</p>
${storyImageRight('call_kelsi_1')}
<p><span class="Kelsi">KELSI</span><br />What do you want?</p>
<p><span class="Michael">MICHAEL</span><br />Hey, so... Ned came to our house and asked about you. There&rsquo;s a problem with their sink and they wanted you to fix it again.</p>
<p><span class="Kelsi">KELSI</span><br />Are you kidding me? Tell them to hire a plumber!</p>
<p><span class="Michael">MICHAEL</span><br />Yeah that&rsquo;s what I said at first but, out of the kindness of my heart, I volunteered to help them with it.</p>
<p><span class="Kelsi">KELSI</span><br />Aww so sweet of you.</p>
<p><span class="Michael">MICHAEL</span><br />The problem is...</p>
<p><span class="Kelsi">KELSI</span><br />You don&rsquo;t know shit about anything.</p>
<p><span class="Michael">MICHAEL</span><br />Look, I&rsquo;m at his house right now. If I send you a picture of the thing under the sink, would you be able to help or what?</p>
${storyImage('plumbing')}
<p>Turns out he didn&rsquo;t have to. Kelsi knew there was an issue with Ned&rsquo;s sink. Turns out she&rsquo;d already told Ned to get a plumber but Ned deferred to his Dad when he returns from his business trip. Kelsi gave Michael some temporary fixes to try. After some fumbling, Michael and Ned finally got the water running. They cheered like idiots when it finally came out.</p>
${storyImageCenter('aaliyah1')}
<p><span class="Aaliyah">AALIYAH</span><br />What&rsquo;s going on in here?!</p>
${appendLink('Aaliyah...', 'section2')}

`
)
const section2 = newSection(2);
const row2a = storyRow('2a', 'Second Happiness', 
`
${storyImageLeft('aaliyah1')}
<p>Ned&rsquo;s mother burst into the kitchen to see what the commotion was. Michael hung up..</p>
<p><span class="Ned">NED</span><br />Mom, we fixed the sink again!</p>
<p><span class="Michael">MICHAEL</span><br />Hello, Mrs. James.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Oh hello! Are you Ned&rsquo;s friend?</p>
<p><span class="Ned">NED</span><br />No, Mom, he&rsquo;s-</p>
<p><span class="Michael">MICHAEL</span><br />Yes, ma&rsquo;am, I&rsquo;m Michael, I&rsquo;m Ned&rsquo;s friend from school.</p>
<p>He was far from Ned&rsquo;s friend. Just being courteous to his mother.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Nice to meet you, Michael! Oh, did you fix the sink? Bravo!</p>
<p>She was so energetic and happy. He couldn&rsquo;t help but chuckle.</p>
<p><span class="Michael">MICHAEL</span><br />It&rsquo;s my pleasure.</p>
<p>Ned approached his mom Ned whispered something to her, and Michael caught the word "dollars".</p>
<p><span class="Aaliyah">AALIYAH</span><br />Why do you need so much money?</p>
<p><span class="Michael">MICHAEL</span><br />That&rsquo;s ok Mrs. James. We expected to need some money to buy some replacements but it wasn&rsquo;t necessary.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Ok, perfect! Are you done with the kitchen?</p>
<p><span class="Michael">MICHAEL</span><br />Pretty much yeah.</p>
${storyImageCenter('aaliyah2')}
<p><span class="Aaliyah">AALIYAH</span><br />Alright! Leave the kitchen for me now. I&rsquo;ve got a surprise for you!</p>
<p>The energy!</p>
<p><span class="Aaliyah">AALIYAH</span><br />Go play together in Ned&rsquo;s room and don&rsquo;t come out until I call you!</p>
<p>Do what now?</p>
<p><span class="Ned">NED</span><br />Mom...</p>
${storyImageCenter('aaliyah3')}

<p><span class="Aaliyah">AALIYAH</span><br />Apapap. Zip it, young boy. I said go to your room.</p>
<p><em>Oh shit</em>, Michael thought, musingly watching them interact. <em>Oh shit. Look at how she&rsquo;s treating him. Man, this is so embarrassing.</em></p>
<p>The way Ned&rsquo;s mother leaned over and beckoned her finger at him was almost too funny to bear.</p>
${storyImageCenter('aaliyah4')}
<p><span class="Aaliyah">AALIYAH</span><br />Take your friend with you. I&rsquo;ll count to 3 and if you two weren&rsquo;t out of my face, bad things will happen to you.</p>
<p>Why was he caught up in this?</p>
<p><span class="Aaliyah">AALIYAH</span><br />Get outta here!</p>
<p>He stood there awkwardly, unsure of what to do.</p>
<p><span class="Aaliyah">AALIYAH</span><br />One!</p>
<p>Ned switched his gaze between Michael and his mom, confused just as Michael was.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Two!</p>
<p>Ned snatched Michael&rsquo;s hand, pulled him out of the kitchen. His mom gleefully hopped in place and clapped her hands twice.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Go! Go!</p>
${storyImage('ned_stairs')}

<p>The boys went up to ${appendLinkRowInline('Ned&rsquo;s room', '2b', true)}.</p>

`);
section2.appendChild(row2a);

const row2b = storyRow('2b', 'INT. NED&rsquo;S ROOM<br>PAST NOON', 
`
${storyImageRight('ned_in_room')}

<p><span class="Michael">MICHAEL</span><br />Dude, what is going on?</p>
<p><span class="Ned">NED</span><br />Eheh- she&rsquo;s just like that sometimes.</p>
<p><span class="Michael">MICHAEL</span><br />Your mom is awesome!</p>
<p><span class="Ned">NED</span><br />Well, yeah, she&rsquo;s funny but she can be very embarrassing as you can see.</p>
<p><span class="Michael">MICHAEL</span><br />Fuck yeah, she&rsquo;s great!</p>
${storyImage('ned_room')}

<p>Surprisingly, Ned&rsquo;s room was cool. Michael flopped onto Ned&rsquo;s bed.</p>
<p><span class="Michael">MICHAEL</span><br />Ahahaha. The way she clapped her hands and told us to run. Aaa this is so refreshing.</p>
<p>Ned ignored him and turned on his PlayStation, grabbed a controller, and sat down on the floor.</p>
<p><span class="Michael">MICHAEL</span><br />So, do I have to sneak my way out of here or what? Pfft.</p>
${storyImageLeft('ned_in_room')}

<p><span class="Ned">NED</span><br />Nah, just wait a couple of minutes and she&rsquo;ll relax.</p>
<p><span class="Michael">MICHAEL</span><br />Yeah, right. *I looked at my watch* I can wait a couple of minutes, there&rsquo;s no rush.</p>
<p>Lying there, on Ned&rsquo;s comfortable bed, staring at the ceiling, Michael reminiscened about Ned&rsquo;s mom&rsquo;s giggles from literally a minute ago. Such a sweet character. She was unreal, so full of joy.</p>
<p><span class="Michael">MICHAEL</span><br />So, what do you think that \surpriseis going to be?</p>
<p><br />He was trying to sound sarcastic and cool even though he was quite curious to know what Mrs. James was actually doing for them. Silly as it was, Ned actually took his question seriously, which Michael appreciated of him.</p>
<p><span class="Ned">NED</span><br />She&rsquo;s probably baking something.</p>
<p><span class="Michael">MICHAEL</span><br />What a surprise, Mrs. James!</p>
<p><span class="Ned">NED</span><br />She&rsquo;s actually a very good cook.</p>
<p><span class="Michael">MICHAEL</span><br />Bring me some of that stuff when you come to school on Monday.</p>
<p><span class="Ned">NED</span><br />Why don&rsquo;t you wait? She&rsquo;s not gonna take long.</p>
<p>Ned paused his game, picked up a second controller from the floor and shook it in the air without looking at Michael.</p>
<p>Again, Michael was being snarky and Ned was direct him me. He got up, took the controller from Ned&rsquo;s hand, and sat down on the floor cross-legged next to him.</p>
<p>They played. Ned beat him at every game: football, racing, wrestling. The hours flew by.</p>
<p>Then Mrs. James knocked on the door.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Come on boys, it&rsquo;s ready!</p>
<p>Ned paused the game mid-match.</p>
<p><span class="Michael">MICHAEL</span><br />Woah, wait till we&rsquo;re done with the match at least.</p>
<p><span class="Ned">NED</span><br />Nah, we should just-</p>
<p>(Knock knock knock)</p>
<p><span class="Aaliyah">AALIYAH</span><br />Boys!</p>
<p><span class="Ned">NED</span><br />We&rsquo;re coming!</p>
<p><span class="Michael">MICHAEL</span><br />Dude, this is waaay too much.</p>
<p><span class="Ned">NED</span><br />Yeah, I told you.</p>
${storyImage('ned_stairs')}
<p>Michael didn&rsquo;t argue any more. They went downstairs.</p>
${storyImage('aaliyah5')}

<p><span class="Aaliyah">AALIYAH</span><br />Who loves Mommy&rsquo;s muffins!</p>
<p>No, no, ${appendLinkRowInline('no fucking way', '2c', true)}.</p>
`
)

const row2c = storyRow('2c', 'INT. AALIYAH&rsquo;S KITCHEN<br />AFTERNOON', 
`

${storyImageRight('aaliyah5_1')}

<p><span class="Aaliyah">AALIYAH</span><br />Who loves Mommy&rsquo;s muffins!</p>
<p>No, no, no fucking way.</p>
<p><span class="Aaliyah">AALIYAH</span><br />I said! Who. Wants. Mommy&rsquo;s muffins!</p>
<p>Ned&rsquo;s head dropped into his palms.</p>
<p><span class="Ned">NED</span><br />I love Mommy&rsquo;s muffins.</p>
<p>Mrs. James looked at Michael, eyebrows raised. What is he supposed to do now?</p>
<p><span class="Aaliyah">AALIYAH</span><br />Do you want Mommy&rsquo;s muffins, Michael?</p>
<p>What the fuck? She&rsquo;s not his mom, let alone related to him!</p>
<p><span class="Michael">MICHAEL</span><br />What?</p>
<p><span class="Aaliyah">AALIYAH</span><br />Say you do.</p>
<p><span class="Michael">MICHAEL</span><br />Yes, ma&rsquo;am.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Perfect! Come here and fill your tummies with those sweet muffins. Come on, come!</p>
<p>Ned and Michael froze in their places, staring at Mrs. James, Ned embarrassed and Michael confused.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Hmmm, wait. This looks off. I think I&rsquo;m forgetting something! The strawberry sauce!</p>
${storyImage('aaliyah6')}

<p>She turned, and on her second step, slipped. The sweet-looking muffins flew everywhere.</p>
${storyImageCenter('aaliyah9')}
<p><span class="Aaliyah">AALIYAH</span><br />Oh my! I&rsquo;m so clumsy!</p>
<p><span class="Michael">MICHAEL</span><br />Mrs. James, are you ok?</p>
${storyImageCenter('aaliyah7')}
<p>Michael rushed to help her, but she was laughing hysterically. Mrs. James was sat down, legs open wide, and while laughing her heart out, she was oblivious to her dress rolling up her legs. Her underwear was in full view in front of Michael.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Oh, I lost my balance. I&rsquo;m ok but those muffins are not. Aww, I&rsquo;m so sorry, kids, I&rsquo;ll make you some more.</p>
<p>Michael was so consumed by the sight of Mrs. James&rsquo; panties that he didn&rsquo;t care she called them kids.</p>
${storyImageCenter('aaliyah8')}
<p>She rested a hand on his knee, picking up the muffins. Seeing her face so depressed after she was so gleeful and hyperactive a minute ago broke his heart. Michael snapped back to reality, helping Aaliyah gather the muffins.</p>
${storyImageRight('aaliyah1')}
<p>Ned stood there, useless. He probably hadn&rsquo;t seen Aaliyah&rsquo;s panties flash, hidden by Michael&rsquo;s body.</p>
<p><span class="Michael">MICHAEL</span><br />Don&rsquo;t worry, Mrs. James, they&rsquo;re still ok.</p>
<p><span class="Aaliyah">AALIYAH</span><br />No, no, don&rsquo;t eat them from the floor.</p>
<p><span class="Michael">MICHAEL</span><br />Why not? It&rsquo;s not like they were ruined or something.</p>
<p>Michael took a bite of a muffin..</p>
<p><span class="Michael">MICHAEL</span><br />Wow. This is... really good.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Oh, you like it?</p>
<p>He was struck with an insane sugar rush all of a sudden. That small bite he took probably had more sugar than a whole fucking cake! How could she pack so much sweetness into one bite? It was so fucking sweet, he felt it in his brain.</p>
<p><span class="Michael">MICHAEL</span><br />Oh my god. These are unreal.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Ned, leave some for Michael!</p>
<p>In the time it took Michael to recover from one bite, that monster Ned had devoured two muffins. Aaliyah snatched the tray from Ned and gave the rest to Michael.</p>
<p><span class="Michael">MICHAEL</span><br />That&rsquo;s ok, Mrs. James. I&rsquo;ll be good with this one. Ahem. Excuse me.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Sh-shhhh. Don&rsquo;t talk with food in your mouth.</p>
<p>She&rsquo;s so fucking sweet!</p>
<p><span class="Michael">MICHAEL</span><br />Ahaha alright take it easy on me.</p>
<p>He took another bite. Fuck! These things are a health hazard, and he fucking loves them!</p>
<p><span class="Michael">MICHAEL</span><br />Mrs. James, I&rsquo;m not known for giving compliments. These are honestly the sweetest things I&rsquo;ve ever tasted. I can&rsquo;t talk.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Awww, that&rsquo;s so sweet of you. You can call me Aaliyah honey, or just Mom.</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;d... prefer to call you Aaliyah... thanks.</p>
<p><span class="Michael">MICHAEL</span> (cont&rsquo;d)<br />Thank you so much for the cupcakes Mrs. James I&rsquo;ll-</p>
<p><span class="Aaliyah">AALIYAH</span><br />Aaliyah!</p>
<p><span class="Michael">MICHAEL</span><br />...Aaliyah. I&rsquo;ll have to go now. It was very nice to meet you.</p>
<p><span class="Aaliyah">AALIYAH</span><br />What about the muffins? Who&rsquo;s gonna eat them?</p>
<p>His tongue was tied. She&nbsp;was so damn warm and compassionate and so happy he couldn&rsquo;t say no to her face. Aaliyah shook the tray, tempting him with her cupcakes as if they were the best thing in the world, and they were. She treated him like a child, and he didn&rsquo;t mind. He couldn&rsquo;t remember the last time someone was so kind to him. That stupid shitpiece Ned must be the luckiest bastard alive, he thought, for he has the best mother in it all.</p>
<p><span class="Michael">MICHAEL</span> (switching attention to Ned)<br />Ned, show me to the door</p>
<p><span class="Ned">NED</span><br />Sure.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Michael, do you live nearby?</p>
<p><span class="Ned">NED</span><br />He lives at the house at the end of the road. He&rsquo;s Kelsi&rsquo;s brother.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Is that Lucy&rsquo;s friend who fixed the sink before?</p>
<p><span class="Ned">NED</span><br />Yes.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Ok, wait, before you go.</p>
<p>Mrs. James packed the muffins into a paper bag grocery bag, folded it, handing them to him.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Give those to your sister and mom when you go home. Send my greetings and kisses to them both, ok?</p>
<p><span class="Michael">MICHAEL</span><br />Fine.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Send my apologies to Dad, he won&rsquo;t be getting muffins this time. The next time you visit us, I&rsquo;ll have deserts for all of you!</p>
<p><span class="Michael">MICHAEL</span><br />Trust me, he&rsquo;ll never eat them. But I&rsquo;m sure the little girls will like them a lot.</p>
<p><span class="Aaliyah">AALIYAH</span><br />You have any other siblings?</p>
<p><span class="Michael">MICHAEL</span><br />I have two younger sisters. Kenzie and Mandy.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Oh my god! Ned, why did you have to eat all the muffins?!</p>
<p>Aaliyah literally baked 5 of them and Ned only took 2. Now look at her scolding him like that.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Michael, when are you coming next time?</p>
<p><span class="Michael">MICHAEL</span><br />Next time? I&rsquo;m not sure if I&rsquo;m gonna visit you again, Mrs. James. I&rsquo;m not used to staying in my friends&rsquo; houses I just came to fix the sink.</p>
<p>She didn&rsquo;t correct him this time.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Don&rsquo;t say that, honey! You&rsquo;re part of the family now. Our door is open to you all the time.</p>
<p><span class="Michael">MICHAEL</span><br />Thank you, Mrs. James, I&rsquo;ll make sure to drop by and say hi later.</p>
<p><span class="Aaliyah">AALIYAH</span><br />When?</p>
<p><span class="Michael">MICHAEL</span><br />What?</p>
<p><span class="Aaliyah">AALIYAH</span><br />When are you coming next time?</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;ll arrange it with Ned.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Wonderful! You have to tell me before you come. Next time I&rsquo;ll bake you a mountain of cookies!</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;m looking forward to it.</p>
<p><span class="Aaliyah">AALIYAH</span><br />And don&rsquo;t take long to visit us again, I&rsquo;ll be waiting for you!</p>
<p>He had a feeling she&rsquo;s not trying to sound courteous or generous, she&rsquo;s... serious.</p>
<p><span class="Michael">MICHAEL</span><br />I promise I&rsquo;ll visit again at the nearest opportunity.</p>
<p><span class="Aaliyah">AALIYAH</span><br />Great! Give Mommy Aaliyah a kiss before you go.</p>
<p>Wants him to do what exactly?</p>
<p>He didn&rsquo;t have a chance to do anything. The lovely Mrs. James grabbed Michael&rsquo;s head, fixing him in place, kissed his left cheek twice quite intensely, making a loud pop as her lips parted with his skin.</p>
${storyImage('ned_stairs')}
<p>He pulled away, embarrassed, and excused himself. She waved goodbye, so gleeful. Ned took him to the door.</p>
${storyImageRight('ned_front_house_1')}
<p><span class="Michael">MICHAEL</span><br />Yo. What&rsquo;s going on? Is she happy like this all the time?</p>
<p><span class="Ned">NED</span><br />She&rsquo;s just excited she saw someone new. She stays in the house all the time.</p>
<p><span class="Michael">MICHAEL</span><br />Look, I&rsquo;m not gonna visit you again, just don&rsquo;t tell her that. I don&rsquo;t want her to be mad at me, haha, I don&rsquo;t know why, I&rsquo;ll probably never see her again, but I like her a lot. She&rsquo;ll probably forget me in a couple of days anyway.</p>
<p><span class="Ned">NED</span><br />She won&rsquo;t.</p>
<p>Why&rsquo;s this guy so depressed with such a lively family? Michael wondered.</p>
<p><span class="Michael">MICHAEL</span><br />Yeah, sorry, man. We shouldn&rsquo;t have told her we were friends.</p>
<p><span class="Ned">NED</span><br />It&rsquo;s ok. Hey, I almost forgot, don&rsquo;t you wanna finish that game real quick?</p>
<p><span class="Michael">MICHAEL</span><br />No. Maybe next time.</p>
${appendLinkRow('Go home', '2d', true)}

`
)

const row2d = storyRow('2d', ' ', 
`
${storyImageRecurring('hall_ground')}
<p>He went home, put the muffins in the freezer like Aaliyah told him to, and carried on with his day.</p>
${appendLink('Skip till the evening', 'section3', true)}

`
)
const section3 = newSection(3);
const row3a = storyRow('3a', ' ', 
`
${storyImage('gym_ground')}

<p>Michael showed up at the gym at 7 PM. Punctual, like it mattered. The receptionist took his money, activated his membership. She asked if he wanted a <br />trainer, but he told her he was good on his own, and headed to the main hall.</p>

`
)
section3.appendChild(row3a);
const row3b = storyRow('3b', 'INT. GYM MAIN HALL<br>EVENING', 
`
${storyImageRecurringRight('gym_interior_evening_portrait')}
<p>The main hall was packed with bodies, sweat, and the stench of effort. He scanned for Lauren. Nowhere. Figured he&rsquo;d kill time with some cardio until she showed.</p>
<p>Thirty minutes later, still no Lauren. The only reason he forked over cash for this overpriced hellhole was to see her again. Maybe she liked mornings. Maybe she forgot. Maybe she didn&rsquo;t give a damn.</p>
<p>He slugged through his workout alone. Yesterday had some spark, some drive. Today, it was just him and his pathetic hope for a chance with Lauren. Not in a sleazy way. Just wanted to be friends. He didn&rsquo;t mess with married women. He was a decent guy. Well, except for that Sherrie mess. Three disappointments from women in a week. His confidence was already scraping the bottom. This was just another kick in the teeth.</p>
<p>The gym was a circus. Bodies everywhere, noise, and he was still sore from yesterday. But he began pushing harder. Anger fueled him. Anger from Sherrie&rsquo;s blue-ball bullshit, from Lauren&rsquo;s absence, from his own damn loneliness.</p>
<p>He&rsquo;d see her eventually. Maybe tomorrow. Or the day after. He almost asked the receptionist about her. Then he caught himself. Why the hell was he acting like such a desperate idiot? One minute he was helping Ned with his crap, next he was about to turn into some stalker. What the fuck was wrong with him?</p>
<p>Turns out in his case, desperation plus confusion equals aggression. He hit the weights harder. Lost himself in the burn. More intense than yesterday. <br />Less focused, but more driven.</p>
${storyImageRecurring('gym_interior_evening')}
<p>Fitness +5</p>
<p>He finished up, showered, went ${appendLinkRowInline('home', '3c', true)}.</p>

`
)

section3.appendChild(row3b);

const row3c = storyRow('3c', ' ', 
`
${storyImageRecurring('myroom_ground')}
<p>He didn&rsquo;t want to train with Sherrie tonight. Screw that. He was spent. And honestly, she turned him off now. Ever since her \lessons\ on women and sex and dominance, he&rsquo;d gotten worse with them. She was messed up, and she was dragging him down too.</p>
${appendLinkRow('Study', '3d', true)}

`
)

const row3d = storyRow('3d', ' ', 
`
${storyImageRecurring('study_in_room')}
<p>Instead, he hit the books. He wasn&rsquo;t a nerd, but since that Math homework with Kenzie, he&rsquo;d been enjoying it. Couldn&rsquo;t wait to show Roberts his improvement. And with the new French teacher, he&rsquo;d been busting his ass in French. He wasn&rsquo;t terrible at it, but whatever. English too, just to avoid another humiliation from Ms. Calvert. These are the three classes he cared for. He studied for the social gains, not the grades. This year, he&rsquo;d studied more in one week than in a month any other year.</p>
${storyImageRecurring('myroom_ground')}
<p>Five minutes later, he heard noise from his room.</p>
${appendLinkRow('Check what&rsquo;s going on', '3e', true)}
`
)

const row3e = storyRow('3e', 'INT. UPSTAIRS<br />NIGHT', 
`


<p>Michael&rsquo;s door was slightly open and he could hear Kenzie banging on Mom&rsquo;s door.</p>
${storyImageRecurringLeft('kenzie_upstairs')}
<p><span class="Kenzie">KENZIE</span><br />Mom! Mom! Mom!</p>
<p>Mom opened the door.</p>
<p><span class="Mom"><span class="Lena">MOM</span></span><br />What?</p>
<p><span class="Kenzie">KENZIE</span><br />Mom, what&rsquo;s this thing?</p>
<p>He decided to get up, see what was going on.</p>
<p><span class="Mom"><span class="Lena">MOM</span></span><br />It&rsquo;s just a muffin, honey, what are you so excited about?</p>
<p><span class="Kenzie">KENZIE</span><br />It&rsquo;s the best thing ever! Taste it!</p>
<p>Kenzie was holding two muffins, one with a tiny bite missing. She handed the other to Mom, who took a bite.</p>
<p><span class="Mom"><span class="Lena">MOM</span></span><br />Ah! Why is it so stingy? Oh, so much sugar! It hurts! Ahahaha, where did you get that from?</p>
<p><span class="Kenzie">KENZIE</span><br />I thought you brought it.</p>
<p><span class="Mom"><span class="Lena">MOM</span></span><br />No, I didn&rsquo;t.</p>
<p><span class="Mom"><span class="Lena">MOM</span></span> (taking another bite)<br />Ow! This is so good, ehehehe.</p>
<p><span class="Michael">MICHAEL</span><br />It&rsquo;s out of this world, isn&rsquo;t it?</p>
<p><span class="Kenzie">KENZIE</span><br />Michael, did you buy these?</p>
<p><span class="Michael">MICHAEL</span><br />No, our neighbor made them.</p>
<p><span class="Kenzie">KENZIE</span><br />Oh my god. You must get some more of this. This is heavenly!</p>
<p>Kenzie brought the muffin close to her mouth, hands shaking. That sugar bomb was about to send her brain on a wild ride. Before her teeth touched the muffin, Mandy came running, dove through the air, snatched the muffin from Kenzie, rolled on the ground, curled into a fetal position, and started licking the frosting.</p>
<p><span class="Kenzie">KENZIE</span><br />No! It&rsquo;s mine!</p>
${storyImageRecurringRight('upstairs_portrait')}
<p>Kenzie yelled, attacking Mandy. Mandy pushed her off, got up, and ran downstairs. Kenzie chased after her like a maniac, tearing through the living room. Mom took her muffin into her room and closed the door to be alone with it.</p>
<p>He watched Kenzie and Mandy from upstairs. They were like two cats, fighting over a toy. Kenzie screamed at Mandy, warning she&rsquo;d break the muffin, begging her to share. Selfish Mandy wouldn&rsquo;t listen. Kenzie eventually caught Mandy by climbing onto the couch and jumping on top of her as Mandy tried to escape. She grabbed Mandy&rsquo;s back and took her down. Mandy held the muffin in her hand, threatening to crush it if Kenzie tried to take it.</p>
<p>Kenzie panicked, raised her arms in surrender. Then she put out her hand, extending her pinky. Mandy did the same, and they locked pinkies. They sat cross-legged on the floor, taking turns biting the sugar bomb. He went back to his room.</p>
${storyImageRecurring('myroom_ground')}
<p>Michael continued what he was doing until he went to sleep.</p>
${storyEndButton('Chapter 7')}
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

    addToChapterIndex('Section 1', 'section1') 
    addToChapterIndex('Section 2', 'section2') 

    }
    

storyLoad();