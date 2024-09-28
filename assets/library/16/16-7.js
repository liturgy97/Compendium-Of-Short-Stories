loadPage = function() {

    prepareStory();


const section1 = newSection(1);


const row1a = storyRow('1a', ' ', 
`
<h3>Sunday, 23 August 2006</h3>
${storyImageRecurring('myroom_ground')}
<p>He woke up early on Sunday. No reason for it, but he couldn&rsquo;t fall back asleep once the sunlight hit. Still sore from training last night and the night before, he jumped in the pool for a refresher, then went on with his boring Sunday.</p>
${appendLinkRow('Skip to the evening', '1b', true)}
`
)

section1.appendChild(row1a);

const row1b = storyRow('1b', 'INT. GYM MAIN HALL<br />EVENING', 
`
${storyImage('0')}

<p>He went to the gym at 7 PM, just like yesterday. Ran on the treadmill for 15 minutes to warm up and started his weightlifting workout with flat bench presses. Loaded a barbell with heavy weight, lay down on the bench.</p>
${storyImageCenter('1')}
<p><span class="Lauren">LAUREN</span><br />You did it!</p>
<p>${appendLinkRowInline('Lauren!', '1c', true)}</p>

`
)
const row1c = storyRow('1c', ' ', 
`
${storyImageLeft('1')}

<p><span class="Lauren">LAUREN</span><br />You did it!</p>
<p>Lauren!</p>
<p>He was so happy to see her, but he didn&rsquo;t show it, of course.</p>
<p>MICHAEL<br />Hi, Lauren. How are you doing?</p>
<p><span class="Lauren">LAUREN</span><br />I&rsquo;m good. Hey, mind if I join you?</p>
<p>MICHAEL<br />Absolutely not.</p>
<p><span class="Lauren">LAUREN</span><br />What are you training tonight?</p>
<p>MICHAEL<br />Full body. Wait. Don&rsquo;t say you&rsquo;re gonna join me for the whole workout.</p>
<p><span class="Lauren">LAUREN</span><br />I&rsquo;m thinking about it. I wanna try weightlifting. But you&rsquo;ll have to take it easy on me. I&rsquo;m still a beginner.</p>
<p>MICHAEL<br />Well, why don&rsquo;t you ask an instructor to help you?</p>
<p>He teased...</p>
<p><span class="Lauren">LAUREN</span><br />I&rsquo;d prefer the assistance of a pro.</p>
<p>...She responded immediately without missing a beat.</p>
<p>MICHAEL<br />Fine. Let&rsquo;s hope no jerk interrupts us.</p>
${storyImage('gym_background_light')}
<p>Lauren went back to the reception, told them she&rsquo;d train alone without an instructor. She came back, and they started working out together.</p>
${storyImageLeft('2')}
<p><span class="Lauren">LAUREN</span><br />Let&rsquo;s go!</p>
<p>They trained together. Not once did they talk about why she didn&rsquo;t show up on time as agreed yesterday. Lauren acted casually, as if it never happened. He wanted her to think he forgot about her, just like she forgot about him.</p>
<p>Michael helped Lauren with all the exercises. She was quick to learn and had good form, especially with her core and balance, thanks to her experience with yoga and aerobics. She started with very light weights and quickly gave up at the slightest struggle. Constant complaints about muscle and joint pain while holding these featherweights, which annoyed Michael. More annoyingly, she took long rests, chitchatting around to extend her breaks.</p>
<p>Lauren was used to low-intensity exercises. Jogging, stretching, stupid contemporary-dancing-like aerobics, that kind of crap. Not high-intensity stuff like this. Michael kept pushing her, always making her carry weights that challenged her, reiterating that if it was too easy, it was useless.</p>
<p>He discovered Lauren was lazy and unmotivated. He had to push her through almost every rep. It irritated him, slowed him down to a crawl. He hated cooling down between sets to get her to complete hers. He got harsher and more strict as his frustration grew.</p>
<p>He stripped her of all choice regarding her workout. When she complained, he ignored it. When she wanted to drop the weight mid-set, he&rsquo;d hold it in place, forcing her to complete it as long as he knew she could. If he shouted \Again!she&rsquo;d do it again, without hesitation, without fail. Lauren didn&rsquo;t mind his harshness because he was sensible enough not to push too much.</p>
<p>In fact, she looked more comfortable, less anxious the firmer Michael was. By the end of the workout, her resistance faded completely. She trusted every word he said and every decision he made for her.</p>
<p><span class="Lauren">LAUREN</span><br />Alright. *huff* What&rsquo;s next?</p>
<p>MICHAEL<br />Nothing, we&rsquo;re done. Congratulations, Lauren. You just had a real workout.</p>
<p><span class="Lauren">LAUREN</span><br />Oh my god, yes! Finally! We should never do this again.</p>
<p>MICHAEL<br />How do you feel?</p>
<p><span class="Lauren">LAUREN</span><br />I feel terrible. I feel sick! *huff* *puff*</p>
<p>MICHAEL<br />You&rsquo;ll feel better soon. Catch your breath.</p>
<p>He gave her a bottle of water. Lauren chugged it, lay on a bench, forearm on her head, breathing heavily. Dramatic as hell. He let her take a couple of breaths, <br />then told her to get up so she wouldn&rsquo;t get dizzy.</p>
<p><span class="Lauren">LAUREN</span><br />Wow. This was so intense. I must&rsquo;ve burnt a 1000 calories!</p>
<p>MICHAEL<br />Why are you so obsessed with calories?</p>
<p><span class="Lauren">LAUREN</span><br />I wanna lose weight, obviously.</p>
<p>MICHAEL<br />You do not need to lose weight, obviously.</p>
<p><span class="Lauren">LAUREN</span><br />Seriously, look.</p>
<p>Lauren pinched her side, showing him the thickness of the skinfold above her left hip. She pointed at her crotch, saying she wanted to lose the fat below her stomach, which looked disgusting in tight clothing.</p>
<p>MICHAEL<br />You&rsquo;re exaggerating. I honestly think you can&rsquo;t look any better than this.</p>
<p>She ignored his compliment.</p>
<p><span class="Lauren">LAUREN</span><br />Besides, I don&rsquo;t wanna gain weight. I used to look horrible and I got so far with so much hard work but ughhh I can&rsquo;t lose that stubborn last part! Look, I&rsquo;ll show you something.</p>
<p>Lauren showed him a picture on her phone.</p>
${storyImage('3')}
<p><span class="Lauren">LAUREN</span><br />Look how fat I used to be! Look at my thighs, my arms, oh my arms were so flappy, and my shoulders, disgusting! I used to look like a panda. I&rsquo;m someone else entirely nowm right?</p>
${storyImageRight('3_1')}
<p>He began to understand why Lauren was so harsh on herself. She looked a little chubbier in the picture. She looked better, healthier now, but he wouldn&rsquo;t mind her looking like that. She was sexy as hell then and still was. But he understood why she wanted to lose weight.</p>
<p>Lauren had struggled with her weight for much of her life, always wishing to be slim. As she grew up, she became obsessed with her body image. She probably used to look fat but was ashamed to show him older pictures.</p>
<p>Given how lazy and unmotivated she was, he imagined she lost weight through hard mental, emotional, and physical work. Lauren only began losing weight after treating it as the greatest thing in her life. The struggles, sacrifices, and joy accompanying made it truly so, with time.</p>
<p>Her life had direction now, opposite to the weight scale. Even in good shape, by any good man&rsquo;s standards, she desired a better self-image, self-improvement for the sake of improving something. This game would never end. Even if she stripped to her bones, she wouldn&rsquo;t be satisfied. The mirror would always show traces of her old self.</p>
<p>Did he understand all that back then? No. He was too young for that. Hindsight is a wonderful thing.</p>
${storyImage('4')}
<p>l Look at this picture. This is from behind. Look at those giant glutes.</p>
<p>MICHAEL<br />Giant glutes, right. You&rsquo;re such a showoff.</p>
${storyImage('5')}
<p>Lauren slapped his forearm playfully.</p>
<p><span class="Lauren">LAUREN</span><br />You&rsquo;re such a flirt.</p>
<p>MICHAEL<br />You&rsquo;re a tease.</p>
<p><span class="Lauren">LAUREN</span><br />You&rsquo;re... so sweaty.</p>
<p>Lauren&rsquo;s palm landed on his chest. Her hand slid downwards, feeling his hard pecs, then she pinched his lower pecs from below, right next to his armpit, so gently and sensually. They stared into each other&rsquo;s eyes. To Michael, it felt intimate and very inappropriate. He was weirded out by a married woman doing that to him any time or place, let alone in a busy public gym. Lauren&rsquo;s hand dropped right away. Michael didn&rsquo;t have time to react to what she&rsquo;d just done.</p>
${storyImage('1')}
<p><span class="Lauren">LAUREN</span><br />I&rsquo;ve been stuck on this weight for many months now. Do you think weightlifting is gonna work? Maybe that&rsquo;s the answer to my problem.</p>
<p>MICHAEL<br />If you put your mind to it, yes.</p>
<p><span class="Lauren">LAUREN</span><br />Well, that&rsquo;s my biggest problem. I can&rsquo;t ever push myself to it. I can never push myself to do anything actually. I need someone to push me. I&rsquo;ve never trained this hard in my life and it was all because of you. You&rsquo;re so firm and so stubborn. They should literally hire you in this gym.</p>
<p>MICHAEL<br />I don&rsquo;t have time for that. I only have time to train one person a day.</p>
<p><span class="Lauren">LAUREN</span><br />Ok, I&rsquo;ll take that. From now on I&rsquo;ll be training with you and no one else. What&rsquo;s your phone number?</p>
<p>Wow. Why is this escalating so quickly?</p>
<p>Lauren and he exchanged phone numbers.</p>
<p><span class="Lauren">LAUREN</span><br />Call me before you come to the gym and we&rsquo;ll arrange it together, deal?</p>
<p>MICHAEL<br />Tuesday at 7?</p>
<p><span class="Lauren">LAUREN</span><br />Perfect. Try to call early so I can prepare myself, ok? And if I act lazy, you have to push me. You can&rsquo;t allow me to skip the gym.</p>
<p>MICHAEL<br />I won&rsquo;t.</p>
${storyImage('1')}
<p>Fitness +5</p>
${storyImageRecurring('hall_ground')}
<p>He took a shower at the gym and then headed home.</p>
${storyEndButton('Chapter 8')}`
)
}

// const section = newSection();


// const row = storyRow('', '', 
// `

// `
// )

// section.appendChild(row);



storyLoad();