loadPage = function() {
    prepareStory();



const section1 = newSection(1);


const row1a = storyRow('1a', 'INT. ROOM<br>MORNING', 
`
<h3>Date: Friday, 21 August 2006</h3>
<p><strong>Money: $50</strong><p>
${storyImageRecurring('myroom_ground')}
<p>Michael woke up the next morning, feeling the drag of last night clinging to his bones. The alarm screamed, he hit the snooze a couple of times before finally giving in and hauling himself up. The watch mocked him: Fuck! 9 a.m. He&rsquo;d missed school.</p>
<p>He crawled out of bed, took a shower, then stumbled downstairs. Mom was in the kitchen, brewing coffee, her back to him.</p>
${storyImageRecurringCenter('mom')}
<p><span class="Michael">MICHAEL</span><br />Morning.</p>

${appendLinkRow('Read Convo', '1b', true)}
${appendLinkRow('Skip', '1c', true)}



`
)

section1.appendChild(row1a);

const row1b = storyRow('1b', 'INT. KITCHEN<br>MORNING', 
`
${storyImageRecurringRight('mom')}
<p><span class="Michael">MICHAEL</span><br />Morning.</p>
<p>Mom was startled when she heard him.</p>
<p><span class="Lena">MOM</span><br />Oh! Michael, what are you doing here? Why aren&rsquo;t you at school?</p>
<p><span class="Michael">MICHAEL</span><br />I just woke up. My alarm failed me.</p>
<p><span class="Lena">MOM</span><br />Mmm. You look tired. Did you stay up late last night?</p>
<p><span class="Michael">MICHAEL</span><br />Yeah. I was on a date.</p>
<p><span class="Lena">MOM</span><br />You&rsquo;re skipping school so you can go out with girls?!!! You can&rsquo;t do that!</p>
<p><span class="Michael">MICHAEL</span><br />Save me your jealousy, Mom.</p>
<p><span class="Lena">MOM</span><br />No, I&rsquo;m serious! I thought you were old enough to take care of yourself. Do I have to wake you up for school from now on?</p>
<p><span class="Michael">MICHAEL</span><br />Of course not! I didn&rsquo;t mean to.</p>
<p><span class="Lena">MOM</span><br />Michael, you should take your education seriously. Your future depends on it.</p>
<p><span class="Michael">MICHAEL</span><br />I know all that. Trust me, I don&rsquo;t need a lecture. I... I really wanna go to college.</p>
<p><span class="Lena">MOM</span><br />I can get you into the best college in the country, but you still need to get good degrees. Hey, did your dad<br />give you your birthday gift?</p>
<p><span class="Michael">MICHAEL</span><br />Yeah. He told me you nagged him about it a lot.</p>
<p><span class="Lena">MOM</span><br />Ahahaha. I did. I knew you&rsquo;d like it.</p>
<p><span class="Michael">MICHAEL</span><br />I can&rsquo;t thank you enough for it. It&rsquo;s the best gift I ever got.</p>
<p>Mom poured him a cup of coffee, sat on the kitchen table, holding her own cup. She took a sip, eyes locked on his, then flashed a big smile.</p>
<p><span class="Lena">MOM</span><br />You should thank your dad, not me.</p>
<p><span class="Michael">MICHAEL</span><br />Aha. I&rsquo;m curious though. Why didn&rsquo;t you buy it yourself?</p>
<p>She shrugged, took another sip.</p>
<p><span class="Lena">MOM</span><br />Should I call your school and tell them you&rsquo;re sick?</p>
<p><span class="Michael">MICHAEL</span><br />Really? You&rsquo;re gonna do that for me?</p>
<p><span class="Lena">MOM</span><br />Yup. On one condition.</p>
<p><span class="Michael">MICHAEL</span><br />I decline.</p>
<p><span class="Lena">MOM</span><br />You don&rsquo;t even know what my condition is.</p>
<p>A half-smile lingered on her face. He sipped his coffee; she mirrored him.</p>
<p><span class="Michael">MICHAEL</span><br />(dark chuckle) I don&rsquo;t care. I don&rsquo;t let women put rules over me.</p>
<p>Mom spat her coffee, laughing loud, put the cup down, and clapped her hands.</p>
<p><span class="Lena">MOM</span><br />Ahahaha. What is that attitude?</p>
<p><span class="Michael">MICHAEL</span><br />(another chuckle) Yup. That&rsquo;s the kind of man I am.</p>
<p><span class="Lena">MOM</span><br />Oh, women looove that kind of man.</p>
<p><span class="Michael">MICHAEL</span><br />Funny you should say that. I was dumped on my date last night.</p>
<p><span class="Lena">MOM</span><br />Why?!!</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;m too much of an asshole, I guess.</p>
<p><span class="Lena">MOM</span><br />I second that!</p>
<p><span class="Michael">MICHAEL</span><br />Yup.</p>
<p><span class="Lena">MOM</span><br />You should&rsquo;ve broken her heart first.</p>
<p><span class="Michael">MICHAEL</span><br />Yeah, right? You told me to go break their hearts but I managed to get mine broken instead. Twice.</p>
<p>She was about to laugh again but swallowed quickly.</p>
<p><span class="Lena">MOM</span><br />Ahem. Excuse me. Twice?!!</p>
<p>Michael was about to answer but Mom&rsquo;s phone suddenly rang and had to get up and take the call.</p>
<p>He finished his coffee while she dealt with a work call. She was trying to scold him for skipping school and being irresponsible but he knew she didnt take her job that seriously. She works for a friend of Dad who employed her only to do Dad a favor. Michael doesn&rsquo;t even know what she does for a job, that&rsquo;s how distant he is from his family. She took the job to pass time when kids were in school, because Dad didn&rsquo;t give her attention. She wasn&rsquo;t friends with Sherrie, had no passion for anything.</p>
<p>He watched her boss the poor soul on the other end of the line. She finished the call, didn&rsquo;t sit down, looked in a hurry.</p>
<p><span class="Lena">MOM</span><br />So what do you mean by getting dumped twice?</p>
<p><span class="Michael">MICHAEL</span><br />It&rsquo;s a long story.</p>
<p><span class="Lena">MOM</span><br />Ok, you&rsquo;ll have to tell me later. I gotta go soon. Do you want me to call school or what?</p>
<p><span class="Michael">MICHAEL</span><br />I think they&rsquo;re gonna call you anyway. You don&rsquo;t have to answer the phone, I&rsquo;ll take care of it.</p>
<p><span class="Lena">MOM</span> (playfully slapping his shoulder)<br />Stop acting like that!</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;m serious. Don&rsquo;t.</p>
<p><span class="Lena">MOM</span><br />Alright. What are you gonna do for the rest of the day?</p>
<p><span class="Michael">MICHAEL</span><br />I don&rsquo;t know yet. I think I&rsquo;m gonna go to the gym.</p>
<p><span class="Lena">MOM</span><br />We have a gym at home.</p>
<p><span class="Michael">MICHAEL</span><br />The training room doesn&rsquo;t have that room that much equipment, I&rsquo;ll try the gym for a change.</p>
<p><span class="Lena">MOM</span><br />Ok, whatever.</p>
<p>They sat in silence, finishing their coffees. Mom looked anxious, checking her watch.</p>
<p><span class="Michael">MICHAEL</span><br />Hey, can I ask you something real quick?</p>
<p><span class="Lena">MOM</span><br />Sure.</p>
<p><span class="Michael">MICHAEL</span><br />How did you and Dad meet?</p>
<p><span class="Lena">MOM</span><br />Mmm. Weird question. You never ask me about your dad.</p>
<p><span class="Michael">MICHAEL</span><br />It just came to my mind that you&rsquo;re not like each other at all.</p>
<p><span class="Lena">MOM</span><br />He was my professor in college.</p>
<p><span class="Michael">MICHAEL</span><br />Pfft. Really? Mom, there&rsquo;s no way you got into NXT.</p>
<p><span class="Lena">MOM</span><br />How did you know that?</p>
<p><span class="Michael">MICHAEL</span><br />What?</p>
<p><span class="Lena">MOM</span><br />How did you know your dad and I were in NXT?</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;m sorry. Was I not supposed to know that?</p>
<p><span class="Lena">MOM</span><br />You are supposed to know that, but you don&rsquo;t. I think you didn&rsquo;t even know your dad was a scientist until you were 14 or<br />something.</p>
<p><span class="Michael">MICHAEL</span><br />Well, I obviously know that Dad is a scientist. I&rsquo;m really surprised that you are.</p>
<p><span class="Lena">MOM</span> (gasp)<br />Excuse me!</p>
<p><span class="Michael">MICHAEL</span><br />Stop acting like that, Mom. You know what I mean. Look. If you don&rsquo;t wanna talk about it, fine. Let&rsquo;s change the subject.</p>
<p><span class="Lena">MOM</span><br />Yeah, talk about something else, or, you know what? Shut up. I gotta go.</p>
<p>He nodded. She took another tiny sip. This woman takes forever to finish one cup.</p>
<p><span class="Michael">MICHAEL</span><br />So what brought you two together?</p>
<p>Mom sighed, head in her palm, then started talking.</p>
<p><span class="Lena">MOM</span><br />I was a student of his. I wasn&rsquo;t a very good student in college. In fact, I was one of the... ahem... <span style= "font-size:1rem">worst</span>. Well, here&rsquo;s the thing, I was a very bright student in highschool, right? And I had this passion for arts and knowledge all my life and I remember after highschool I had a choice to either pursue a career in fine arts or science. You know,<br />the things I enjoy most in life, and I chose science.</p>
${storyImage('nxt1')}
<p><span class="Lena">MOM</span><br />Biggest mistake of my life. I applied to many colleges and I was basically accepted in all of them, except for NXT which took a long time to respond to my application. I made up my mind that I would study Fine Arts and I was so excited about it then one day a letter from NXT came in and... I was accepted, with a full scholarship. There was no way I could decline that. Do you know how many people get to enter NXT every year? Not many, I&rsquo;ll tell you that.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />Back in our college days they used to take only 200 students a year from around the country. Can you believe that? They thought I was one of the top students in the whole damn country. There&rsquo;s no way I could&rsquo;ve turned that offer down.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />I don&rsquo;t know. Maybe I could have. I still wanted Arts, my heart kept telling me to pursue Arts, but my brain told me that I got an opportunity that I shouldn&rsquo;t have got and therefore I should take advantage of it.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />So I ended up in NXT. College turned out to be way harder than highschool. I was one of the brightest students in my school. That meant absolutely nothing in college. I had a false impression about myself. I quickly learned that I was not as smart as I thought and that I was in the wrong place. I was arrogant and proud before I entered NXT, after that I had no arrogance or pride. I felt really bad about myself. I gave all my time to the difficult courses they gave us and I was barely able to push through on my own.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />That until I was assigned to Professor Alexander&rsquo;s course in Third Year. It was hellish. I couldn&rsquo;t understand anything from his lectures or the books he worked from. I approached him and asked him for advice on how to get on with his course because I was really struggling with it and he started helping me with it. Well, he didn&rsquo;t want to at first but he eventually did. Your dad was a really difficult man. He was so young and so smart, I remember all the girls wanted to have a way with him but, boy, he wasn&rsquo;t interested in any of them, which intrigued me a lot.</p>
<p><span class="Lena">MOM</span><br />He declined to help me at first and I sort of gave up on his course. I still showed up to his lectures but I didn&rsquo;t study his notes or the book at all. I was super busy with the other courses. One day he gave us an exam, it was the midterm exam, and I remember sitting there staring at the paper not knowing what the hell was in front of me. The exam had three very difficult problems in it and it was a long exam. I was ok with failing the course but I wasn&rsquo;t gonna sit there for two hours doing nothing so I started looking at the third problem.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />I started working on the problem and before I knew it two hours had passed. Your dad came to my seat and asked for my paper and he literally wouldn&rsquo;t give me 10 more seconds to write down the last sentence in my solution. He told me if I took a second longer than my colleagues, he would fail me without even looking at the paper. I didn&rsquo;t care, I knew I was going to fail anyway, but I didn&rsquo;t wanna make a fuss about it, so I gave it to him.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />In the next lecture, he said he was going to release the exam result, but before that, he suggested a change in how the papers were graded. He said the third problem on the paper was too difficult and almost no one had solved it in the whole class, so he wanted to remove it from consideration, so those who failed to solve it, wouldn&rsquo;t be penalized for it, and those who solved the other two problems would get the full mark if they didn&rsquo;t make any mistakes; on the condition that the one person who managed to solve the third problem would get the full mark.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />Everybody happily accepted the change of course. And then he announced that I was the only one to solve that problem and he applauded me for my solution because it was quite unique and totally different from what he had taught in class. In fact he called it brilliant. I&rsquo;ve had flashes of brilliance here and there in my life and that was the greatest of them all.</p>
${storyImageRecurringRight('mom')}
<p><span class="Lena">MOM</span><br />After his class he asked to speak to me and he apologized for not giving me more time on the exam to finish my solution, which was pretty much all finished, except for a trivial statement at the end, but still, he should&rsquo;ve been more courteous about it. I accepted his apology and he asked me why I didn&rsquo;t solve the other two problems first since they were quite easier than the third one. I told him because I thought they were too boring, just like him ehehe, and then I walked away.</p>
<p><span class="Lena">MOM</span> (cont&rsquo;d)<br />We talked again after that and he offered to help me with the course and also other courses if I wanted, which I happily accepted of course. I think I gave him the impression that I was really smart, but I didn&rsquo;t care enough to reach my potential. I quickly proved to him that was not the case but he still tried with me, and we eventually hit it off.</p>
<p><span class="Michael">MICHAEL</span><br />How?</p>
<p><span class="Lena">MOM</span><br />What?</p>
<p><span class="Michael">MICHAEL</span><br />How did you hit it off? That&rsquo;s what I was asking about this whole time. I didn&rsquo;t ask for your life story, I want to know how you and Dad came together.</p>
<p><span class="Lena">MOM</span><br />I just told you how we came together. We started dating soon after that and right after I graduated, he proposed to me, and before I knew it, you and your sister were inside my tummy.</p>
<p><span class="Michael">MICHAEL</span> (cont&rsquo;d)<br />That&rsquo;s not what I meant. I&rsquo;ll make it easier for you. What do you see in each other?</p>
<p><span class="Lena">MOM</span><br />Well, your father is a very smart and capable man...</p>
<p><span class="Michael">MICHAEL</span><br />Money.</p>
<p><span class="Lena">MOM</span><br />No, no, no-</p>
<p><span class="Michael">MICHAEL</span><br />Money and fame.</p>
<p><span class="Lena">MOM</span><br />No! Excuse me! Ah! Shut up! You don&rsquo;t know anything about my relationship with your dad.</p>
<p><span class="Michael">MICHAEL</span><br />Ok, skip that. What does he see in you?</p>
<p><span class="Lena">MOM</span><br />He... Hmmm...</p>
<p>She was thinking about it.</p>
<p><span class="Lena">MOM</span><br />You know? To this day, I don&rsquo;t even know why and how your Dad and I fell in love with each other. Some questions are not meant to be answered. Love is such a mystical thing, isn&rsquo;t it?</p>
<p><span class="Michael">MICHAEL</span><br />Oh, I know what he sees in you.</p>
<p><span class="Lena">MOM</span><br />What is it, smartass?</p>
<p><span class="Michael">MICHAEL</span><br />Oh, come on, Mom; if it&rsquo;s not the brains, it must be the other thing.</p>
<p><span class="Lena">MOM</span><br />Hey, what is that supposed to mean?!!</p>
<p><span class="Michael">MICHAEL</span><br />That other thing called beauty, m&rsquo;Lady.</p>
<p>He tipped his invisible hat.</p>
<p><span class="Lena">MOM</span><br />Well, what&rsquo;s so bad about that? Don&rsquo;t- Take that sarcastic tone off your tongue, young man! At least I know how to take advantage of my beauty. I gave you half of it and you can&rsquo;t even use it. Look at what the girls are doing to you.</p>
<p>Mom blushed, voice high-pitched, loud, giggling. Michael enjoyed putting her under pressure.</p>
<p><span class="Michael">MICHAEL</span><br />I would trade half your beauty for half of Dad&rsquo;s brain any day of the week.</p>
<p><span class="Lena">MOM</span><br />Well, it&rsquo;s too late, because that&rsquo;s what Kelsi got.</p>
<p><span class="Michael">MICHAEL</span><br />Oh my god.</p>
<p>He rose dramatically from his chair.</p>
<p><span class="Lena">MOM</span><br />What?</p>
<p><span class="Michael">MICHAEL</span><br />Kelsi will never believe you said that.</p>
<p><span class="Lena">MOM</span><br />No, no, no, shush, shut your mouth, that&rsquo;s not what I meant! I was trying to say you&rsquo;re not as smart as her.</p>
<p><span class="Michael">MICHAEL</span><br />Yup. And you also said she has half a brain.</p>
<p><span class="Lena">MOM</span><br />No! No! Don&rsquo;t put words in my mouth.</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;ll tell her what you said. Let&rsquo;s see how she interprets it.</p>
<p><span class="Lena">MOM</span><br />Ahahaha. Don&rsquo;t ever tell her that. She&rsquo;ll never forgive me.</p>
<p>He shrugged. Mom checked her watch again.</p>
<p><span class="Lena">MOM</span><br />10:30!!! Oh my god, I&rsquo;m too late. We&rsquo;ll talk when I come back in the evening.</p>
<p><span class="Michael">MICHAEL</span><br />You and Kelsi will need to have a big talk first.</p>
${appendLinkRow('Leave the kitchen', '1c')}
`
)

const row1c = storyRow('1c', ' ', 
`
${storyImageRecurring('hall_ground')}
<p>Mom groaned in frustration as she exited the kitchen. She went upstairs to change her clothes and prepare for work. Michael 
decided to get on with his day.</p>
${appendLink('Go to the gym', 'section2')}

`
)


const section2 = newSection(2);


const row2a = storyRow('2a', 'INT. GYM RECEPTION<br>MORNING', 
`
${storyImageRecurring('gym_ground')}
<p><span class="June">JUNE</span><br />Are you looking for a way to get fit and stay in shape?</p>
${appendLinkRow('Talk to the reciptionist', '2b', true)}
${appendLink('Skip convo', '2c', true)}


`
)
section2.appendChild(row2a);

const row2b = storyRow('2b', ' ', 
`


${storyImageRecurringRight('june')}
<p><span class="June">JUNE</span><br />Are you looking for a way to get fit and stay in shape?</p>
<p>She said it so gleefully, with a big smile on her face.</p>
<p><span class="Michael">MICHAEL</span><br />I am fit already, don&rsquo;t you think?</p>
<p><span class="June">JUNE</span><br />Yes, sir. Do you wanna stay like that?</p>
<p><span class="Michael">MICHAEL</span><br />What&rsquo;s the price?</p>
<p><span class="June">JUNE</span> (flustered)<br />Is that a yes?</p>
<p><span class="Michael">MICHAEL</span><br />Hell yeah!</p>
<p><span class="June">JUNE</span><br />Then look no further than our gym! With a membership for only $1000 a month, you can access all of our state-of-the-art equipment and fitness classes. Our experienced staff is here to help you reach your goals and stay motivated.</p>
<p>It must&rsquo;ve taken her a while to memorize that line.</p>
<p><span class="Michael">MICHAEL</span><br />A $1000?!! Why is it so expensive?</p>
<p><span class="June">JUNE</span><br />It&rsquo;s state-of-the-art, sir.</p>
<p><span class="Michael">MICHAEL</span><br />Ok, relax, I&rsquo;m not trying to haggle you. This is the first time I go to a gym. I didn&rsquo;t know they were that expensive that&rsquo;s all. I already have a gym at home but I wanted to try something different. Can I get like a trial session or something?</p>
<p><span class="June">JUNE</span><br />You can pay for a one-time session.</p>
<p><span class="Michael">MICHAEL</span><br />How much is that?</p>
<p><span class="June">JUNE</span><br />$100.</p>
<p><span class="Michael">MICHAEL</span><br />Why?!! Why the hell does it cost a $100 to step into the gym?</p>
<p><span class="June">JUNE</span><br />It&rsquo;s-</p>
<p><span class="Michael">MICHAEL</span><br />Is it?</p>
<p><span class="June">JUNE</span><br />It&rsquo;s state of-</p>
<p><span class="Michael">MICHAEL</span><br />What does state-of-the-art even mean?</p>
<p><span class="June">JUNE</span><br />Please wait give me a minute, sir.</p>
<p><span class="Michael">MICHAEL</span><br />Sure. Take your time.</p>
<p>The girl spoke with a man in a room next to the reception desk, who looked like the manager of this place. Didn&rsquo;t take long to return to him.</p>
<p><span class="June">JUNE</span><br />Sir, I talked to the owner of the gym and he said he&rsquo;s willing to make you an exception if you want to see the place. You can enter the gym today for free.</p>
<p><span class="Michael">MICHAEL</span><br />Great!</p>
<p><span class="June">JUNE</span><br />But I can&rsquo;t ask an instructor to join you, because they have to be paid.</p>
<p><span class="Michael">MICHAEL</span><br />Yeah, sure, I don&rsquo;t mind. I know what to do. Hey, what&rsquo;s your name?</p>
<p><span class="June">JUNE</span><br />I&rsquo;m June, sir.</p>
<p><span class="Michael">MICHAEL</span><br />June, you&rsquo;re awesome!</p>
<p><span class="June">JUNE</span><br />It&rsquo;s my pleasure, sir.</p>

${appendLinkRow('Go into the main hall', '2c', true)}
`
)

const row2c = storyRow('2c', 'INT. GYM MAIN HALL<br>MORNING', 
`
${storyImageRecurring('gym_interior_morning')}
<p>That girl was slow but had a nice vibe to her.</p>
<p>He entered the gym, looking around. Not too busy. A bunch of sweaty guys training, a couple of bunnies on treadmills. The place looked nice. If he could afford it, he&rsquo;d definitely join. Kenzie owed him money, but a month&rsquo;s subscription meant giving up everything he had and he won&rsquo;t be able to renew his subscription. He better use that one free session to the fullest.</p>
<p>He started a rough session. Treadmill, ropes. Then weightlifting for the remainder of the session.</p>
${storyImageLeft(0)}
<p>Oh, he knew how to exercise, thanks to Kelsi occassionally dragging his lazy ass from the bed to the gym as kids, to train with her. He remembers a six-month stretch where she took him a training buddy, made him join every gruelsome workout of hers every damn morning.</p>
<p>He was a terrible partner, never matched her pace, could barely challenge or motivate Kelsi but she liked having someone to push around. Particularly bad was he at sparring to the point Kelsi would name him a punching bag, even worse. A punching bag wouldn&rsquo;t wiggle so much and writhe after&nbsp; a punch, and BAM! Sh'd deliver her power to his guts, proving her point.</p>
<p>Hellish as it was, with time it made him stronger, lean muscle patched onto him, earned some power with it.</p>
<p>Two years ago, Kelsi stopped. He did pushups and situps on his own to kill time here and there, but no serious training in his life without Kelsi <strike>coaching</strike> torturing him.</p>
${storyImage(1)}
<p>Today, he discovered he enjoyed working out. He trained hard. Tired he became, in pain, but also in joy. Maybe it was because of Kelsi he hated training before. 90 minutes in, soaking wet, dripping sweat, out of breath, heart beating like a machine gun, that massive surge of heat traversing out of his body, the feeling of blood racing in malleable veins so smoothly like he never felt before. He was ecstatic.</p>
${storyImage(4)}
<p>90 minutes in, he was just getting started, baby. Squat rack to flat bench, loaded the barbell, lay down, took three deep breaths.</p>
${storyImageCenter(2)}
<p><span class="Lauren">LAUREN</span><br />Oh, you look fit!</p>
<p>He paused and switched his gaze to the ${appendLinkRowInline('hottie', '2d', true)} standing next to his bench.</p>
`
)

const row2d = storyRow('2d', 'Lauren, Lauren, Lauren', 
`

${storyImageLeft(2)}
<p><span class="Lauren">LAUREN</span><br />Oh, you look fit!</p>
<p>He paused and switched his gaze to the hottie standing next to his bench.</p>
<p><span class="Michael">MICHAEL</span><br />Thanks, you&rsquo;re not too bad yourself.</p>
<p><span class="Lauren">LAUREN</span><br />You&rsquo;re new here, aren&rsquo;t you?</p>
<p><span class="Michael">MICHAEL</span><br />First day in this gym.</p>
<p><span class="Lauren">LAUREN</span><br />Hmmm. No wonder I never saw you before. Why are you training so hard? You look good already!</p>
<p><span class="Michael">MICHAEL</span><br />It&rsquo;s a bad habit.</p>
<p><span class="Lauren">LAUREN</span><br />Ahahaha, I wouldn&rsquo;t mind having that habit.</p>
<p><span class="Michael">MICHAEL</span><br />Well, we can switch places. You train very hard and I&rsquo;ll look sexy as hell.</p>
<p>She looked puzzled.</p>
<p>Lauren&rsquo;s face at that moment stuck with him. His attitude shocked her. His quip caught her off guard for a moment. She puzzled him for weeks and months after. And we dare say that, to his day, he never understand Lauren fully. A cougar on the surface, no, she was a cougar by every sense of the word, but she was more complicated than any woman he&rsquo;s seen in his life. Lauren was, no doubt, one of the most important women in his short life.</p>
<p>She must&rsquo;ve heard many compliments from the studs in the gym. You can&rsquo;t tell him this woman doesn&rsquo;t get hit on every time she steps into this room full of rabid dogs dressed as men. Why his in particular teased her, escaped him.</p>
<p>Lauren came back with a playful response.</p>
<p><span class="Lauren">LAUREN</span><br />That&rsquo;s a bad deal for you. I&rsquo;m not that sexy. I could lose a couple of pounds here and there.</p>
<p>Here was under her boobs&mdash;there, curved hips.</p>
<p>Now he&rsquo;s the one lost for words. He chuckled awkwardly, lay down, and focused on the barbell. Could&rsquo;ve easily complimented Lauren&rsquo;s sexy hips after she swayed them but didn&rsquo;t want to be repititive and corny. He had nothing clever to say and so he had nothing to say.</p>
${storyImage('gym_background_light')}
<p>Lauren was turned off. He couldn&rsquo;t play her game. She turned to leave.</p>
${appendLinkRow('Call for her to come back', '2e')}
`
)
 
const row2e = storyRow('2e', ' ', 
`
${storyImageRight('2')}
<p><span class="Michael">MICHAEL</span><br />Hey!</p>
<p>Lauren turned around. He approached.</p>
<p><span class="Michael">MICHAEL</span><br />What&rsquo;s your name?</p>
<p><span class="Lauren">LAUREN</span><br />I&rsquo;m Lauren. What&rsquo;s yours?</p>
<p>She put her hand out and he shook it!</p>
<p><span class="Michael">MICHAEL</span><br />Lauren, I&rsquo;m Michael. Nice to meet you. Can I ask you a favor?</p>
<p><span class="Lauren">LAUREN</span><br />Sure.</p>
<p><span class="Michael">MICHAEL</span><br />Do you mind spotting me?</p>
<p><span class="Lauren">LAUREN</span><br />Spot you?!!</p>
<p><span class="Michael">MICHAEL</span><br />I&rsquo;m going for a very heavy set. I need a spotter.</p>
<p><span class="Lauren">LAUREN</span><br />No way. That is way too heavy for me. Ahahaha.</p>
<p><span class="Michael">MICHAEL</span><br />You won&rsquo;t have to lift it all by yourself. Look, just stand behind the bench and try to pull the bar up when you see me struggling.</p>
<p><span class="Lauren">LAUREN</span><br />Why don&rsquo;t you just call for an instructor?</p>
<p><span class="Michael">MICHAEL</span><br />I can&rsquo;t call an instructor.</p>
<p><span class="Lauren">LAUREN</span><br />Why not?</p>
<p>Taking a tiny step closer to Lauren, leaning a bit closer, he spoke in a voice so low&mdash;it was like a secret whispering.</p>
<p><span class="Michael">MICHAEL</span><br />Because I&rsquo;m a pro.</p>
<p>Lauren&rsquo;s laugh was loud. She had very sexy attention-grabbing belly laugh hands on hips. Most women he knew would cover their mouths or at least shyly fold themselves slightly when they laughed.</p>
<p>Lauren wasn&rsquo;t like that. Lauren was the kind of woman to put hands on hips, tilt backward and belt her hear out. He was amazed. He met bold women before, he&rsquo;s seenmature women before Lauren who were quite audacious, but Lauren felt different. She didn&rsquo;t feel like a slut.</p>
<p>They hit it off quickly. Michael had it easy talking to her. She wasn&rsquo;t that old, maybe 36, double his age. Michael was the kind of guy She liked ogling at the gym. Young, handsome, full of life, and, in a minute,he&rsquo;ll prove strong too, but that wasn&rsquo;t part of the equation really.</p>
<p>She was the kind of woman he&rsquo;s quickly avert his eyes off because they&rsquo;d never get enough of her. The kind of woman he&rsquo;d be scared to approach and talk to. Yet, since he saw her, he acted as her friend. Acted like this room full of men and women only had her and hi, which eased her allowed her to act as sexy as she wanted around him.</p>
<p>Afterward her choral laugh, Lauren leaned forward, responded to Michael&rsquo;s secret with a low sultry <strong>"ok"</strong>, raising both the eyebrows, <br />hands still on her hips&mdash;she walked to the back of the bench. Michael lay, grabbed the bar.</p>
<p>She leaned, her breast in Michael&rsquo;s peripheral view, yet Michael and Lauren&rsquo;s eyes locked. Her hands on the bar far wide, then they slid closer. Michael fought the urge to steal a look at those knockers above his face, yet he chose not to&mdash;he forcefully kept eye contact, desperate to prove his decency.</p>
<p>Tucked to her body in her tight sports bra, Lauren&rsquo;s boobs still looked huge. She pulled her head back back, hair thrown back, then leaned over again, flaunting even more.</p>
<p>Michael understood the game. His eyes tensed, struggling the magnetism of her sexy jugs. Her smooth hands, still sliding on the bar for what felt like forever, brushed his, slowly, deliberately&mdash;with a silent sigh as she felt his skin. Michael was excited! She wanted him!!</p>
<p>But very quickly, he was disappointed.</p>
<p>When the smooth hands brushed the curled tense hands seductively, Michael felt Lauren&rsquo;s wedding band. Grip loosened, weird feeling flowed inside him. Lauren&rsquo;s hands hadn&rsquo;t stopped sliding on the barbell, until they met at its midpoint. Lauren pinched the bar, like a feather it was she was about to lift. Triggered Michael with a soft \Let&rsquo;s go\ followed by a softer titter. Michael rotated his hands, got a good grip, pushed the bar up.</p>
<p>His heaviest bench was 300 lbs. Filled with adrenaline, he loaded 320 lbs. Didn&rsquo;t expect more than 3 reps. He violently jerked the bar up, Lauren yanked her arms back immediately&mdash;might&rsquo;ve hurt her fingers, but he didn&rsquo;t care. Ran through 10 reps, grunting, growling, dropped the bar, jumped up, stood breathing heavily, chest heaving.</p>
<p>Lauren, rightfully impressed, walked towards him, her palm on her chest, eyeing the boy head to toe as he posed in Most Muscular before her, flexing his pumped-up chest and arms, and his popped-up veins. Lauren rolled her eyes.</p>
<p><span class="Lauren">LAUREN</span><br />Men.</p>
<p>The gold ring flashed in his eyesight. Confused, he didn&rsquo;t answer her&mdash;still trying to catch his breath.</p>
<p><span class="Lauren">LAUREN</span><br />You&rsquo;re such a showoff. You didn&rsquo;t need me to spot you.</p>
<p>Lauren gravitated towards him, cooing as he struggled to maintain a natural pose. She tried to converse but it&rsquo;s hard to talk when out of breath. In very close proximity to him, her fingers landed on his arm, squeezed his biceps. He stepped back, weirded out by her comfort touching a man he didn&rsquo;t know in that fashion public. Let alone&mdash;Married woman. <br />He stepped back and pushed Lauren off lightly.</p>
<p><span class="Michael">MICHAEL</span> (huff)<br />I never lifted that weight before.</p>
<p><span class="Lauren">LAUREN</span><br />Really? It looked quite easy for you though. Would you say I motivated you? (with teasing eyebrows)</p>
<p><span class="Michael">MICHAEL</span><br />Maybe. (huff) C&rsquo;mon, it&rsquo;s your turn.</p>
<p><span class="Lauren">LAUREN</span><br />What?</p>
<p>He wiped his sweat off the bench and tapped it twice.</p>
<p><span class="Michael">MICHAEL</span><br />Lie on the bench. I&rsquo;ll spot you.</p>
<p><span class="Lauren">LAUREN</span><br />I don&rsquo;t lift weights. I only do cardio.</p>
<p><span class="Michael">MICHAEL</span><br />Why not?</p>
<p><span class="Lauren">LAUREN</span><br />I don&rsquo;t wanna grow muscles. I&rsquo;m here to lose weight.</p>
<p><span class="Michael">MICHAEL</span><br />You&rsquo;re not gonna grow muscles if you don&rsquo;t eat a lot. Weightlifting is the easiest way to burn calories.</p>
<p><span class="Lauren">LAUREN</span><br />I&rsquo;m not sure about that.</p>
<p><span class="Michael">MICHAEL</span><br />Yeah, trust me. My sister lifts heavy weights all the time and she&rsquo;s bone-thin.</p>
<p><span class="Lauren">LAUREN</span><br />Ahahaha. Ok, I&rsquo;ll give it a try. But you have to help me because I&rsquo;ve never done this before.</p>
<p>He took all plates off, helped her grip the bench correctly, lifted the bar. When he saw Lauren able to handle the weight above her, he let go.</p>
<p><span class="Lauren">LAUREN</span><br />No, no, no, help!</p>
<p>Lauren struggled with the empty bar above her&mdash;hands shivered. It was pretty lightweight for her but she was quite dramatic about it</p>
<p><span class="Michael">MICHAEL</span><br />Pull the bar down-</p>
${storyImage('instructor')}
<p><span class="James">JAMES</span><br />Lauren!</p>
<p>A gym instructor approached. Took the bar, racked it. Lauren sat up.</p>
${storyImage('3')}
<p><span class="James">JAMES</span><br />What are you doing? I told you to run on the treadmill.</p>
<p><span class="Lauren">LAUREN</span><br />Well, I-</p>
<p><span class="Michael">MICHAEL</span><br />I was bored training alone so I asked her to join me. Is there a problem here?</p>
<p>Michael stepped in, recieved a black look from James. Lauren stood between them, facing the bigger guy.</p>
<p><span class="Lauren">LAUREN</span><br />It&rsquo;s not a big deal, James. I was just messing around. I&rsquo;m not gonna finish my workout, I&rsquo;m not in the mood today. You can go.</p>
<p>James dropped his eyes his deadly eyes off of Michael and turned them gentle, to Lauren.</p>
<p><span class="James">JAMES</span><br />Alright, whatever. You do you.</p>
${storyImageRight('2')}
<p>James turned and left. Lauren turned to Michael.</p>
<p><span class="Lauren">LAUREN</span><br />Why are you so aggressive?</p>
<p><span class="Michael">MICHAEL</span><br />I didn&rsquo;t like the way he talked in front of me.</p>
<p><span class="Lauren">LAUREN</span><br />Don&rsquo;t get yourself in trouble on your first day here, ehehe.</p>
<p>Lauren was a lot nicer to him than James.</p>
<p><span class="Lauren">LAUREN</span><br />Anyway. I&rsquo;ll go now. You&rsquo;ll have to tell me more about weightlifting later. Ok?</p>
<p><span class="Michael">MICHAEL</span><br />Alright. See ya.</p>
<p>He wished to see her again, but couldn&rsquo;t afford the gym.</p>
<p><span class="Lauren">LAUREN</span><br />Hey, what&rsquo;s your gym schedule for next week?</p>
<p>She wanted to be gym buddies him!</p>
<p><span class="Michael">MICHAEL</span><br />I think I&rsquo;ll just show up in the evening because I have school during the day.</p>
<p><span class="Lauren">LAUREN</span><br />Alright. Sunday at 7 then?</p>
<p><span class="Michael">MICHAEL</span><br />Why not tomorrow?</p>
<p><span class="Lauren">LAUREN</span><br />You can&rsquo;t skip rest day.</p>
<p><span class="Michael">MICHAEL</span><br />Tomorrow at 7.</p>
<p><span class="Lauren">LAUREN</span><br />What a savage! Alright, I&rsquo;ll see you tomorrow, Mr. Pro.</p>
${storyImage('4')}
<p>Lauren left and Michael resumed his workout alone. He made his mind. He&rsquo;ll buy that membership no matter what.</p>
${appendLink('Go home', 'section3')}
`
)

const section3 = newSection(3);


const row3a = storyRow('3a', 'INT. LIVING ROOM<br>AFTERNOON', 
`
${storyImageRecurring('hall_ground')}
<p>It was about 2 PM. Kenzie comes back from school in an hour. He got time to kill.</p>
${appendLinkRow('Study for school', '3b', true)}
`
)

section3.appendChild(row3a);

const row3b = storyRow('3b', ' ', 
`

${storyImage('study')}
<p>Michael sat down, <strike>trying</strike> pretending to study. He gave it thirty minutes, then passed out, the gym session had wrung him dry. Boredom and fatigue tag-teamed him, and he went down without a fight.</p>
${appendLinkRow('Later', '3c')}


`
)

const row3c = storyRow('3c', ' ', 
`
<p>Mom yanked Michael out of his slumber at 5 PM for dinner. She gave him no room for negotiation, he had to get up.</p>
${storyImageRecurring('hall_ground')}
<p>He ate with his family, the ritual became dull recently. After that, he headed to Kenzie&rsquo;s room and knocked.</p>
<p><span class="Michael">MICHAEL</span><br />Kenzie!</p>
<p><span class="Kenzie">KENZIE</span><br />Come in!</p>
${appendLinkRow('Confront Kenzie (Premium)', '3d')}
${appendLinkRow('Skip', '3e', true)}


`
)

const row3d = storyRow('3d', 'INT. KENZIE&rsquo;S ROOM<br>EVENING', 
`
${storyImageRecurringLeft('kenzie_room')}
<p><span class="Michael">MICHAEL</span><br />What happened to you, Kenzie? You used to be very cool.</p>
<p><span class="Kenzie">KENZIE</span><br />What are you talking about?</p>
<p><span class="Michael">MICHAEL</span><br />Where&rsquo;s my money?</p>
<p><span class="Kenzie">KENZIE</span><br />What money?</p>
<p><span class="Michael">MICHAEL</span><br />You took money out of my wallet yesterday!</p>
<p><span class="Kenzie">KENZIE</span><br />No! I didn&rsquo;t go anywhere near my wallet. Why would I?</p>
<p><span class="Michael">MICHAEL</span><br />Kenzie, I had $1000 in my wallet yesterday before I went out to meet Gina. When I left the house, I didn&rsquo;t find any of<br />it. I really need the money, give it back to me.</p>
<p><span class="Kenzie">KENZIE</span><br />How do you know that I took it? Maybe someone picked your pockets.</p>
<p><span class="Michael">MICHAEL</span><br />And that someone is you! I&rsquo;ll humor you for a second. Let&rsquo;s say a dipper did pick me. Why would they take my $1000 and put<br />back 10? I knew you did it, Kenzie, I know you. Don&rsquo;t make me take the money from you by force.</p>
<p><span class="Kenzie">KENZIE</span><br />I swear I didn&rsquo;t touch your wallet.</p>
<p><span class="Michael">MICHAEL</span><br />You sneaky brat!</p>
<p><span class="Kenzie">KENZIE</span><br />Wait, wait, wait. Maybe you dropped them or something? We can look around for them. I&rsquo;ll help you.</p>
<p><span class="Michael">MICHAEL</span><br />No... (sigh) Kenzie, I only had 10 $100 bills yesterday and then they were replaced by 1-dollar bills. Someone must&rsquo;ve taken them.</p>
<p><span class="Kenzie">KENZIE</span><br />Are you sure they were $10? Maybe your eyes failed you.</p>
<p><span class="Michael">MICHAEL</span><br />Kenzie, I know what a $100 bill looks like. I&rsquo;m not blind. What&rsquo;s more? I&rsquo;m not dumb!</p>
<p><span class="Kenzie">KENZIE</span><br />I&rsquo;m innocent, I swear.</p>
<p>She swore, lips pursed in an innocent pout.</p>
<p><span class="Michael">MICHAEL</span><br />You sneaky brat... Wait for me here!</p>
${storyImageRecurring('upstairs_ground')}
<p>He left Kenzie&rsquo;s room, trudged upstairs, and dug out what he thought was his empty wallet. Surprise&mdash;a thousand bucks inside. He stumbled to the lounge, leaned over the banister, and yelled, his voice echoing...</p>
<p><span class="Michael">MICHAEL</span><br />You&rsquo;re a freak!</p>
<p><span class="Kenzie">KENZIE</span> (yelling back from her room)<br />I&rsquo;m innocent!</p>
<p>Kenzie&rsquo;s laugh trailed off as she slammed her door shut.</p>
<p>With cash in hand, he plotted. Tomorrow, he&rsquo;d get that gym subscription and maybe see Lauren again. Lauren was a glimmer of excitement in his dull ${appendLinkRowInline('routine', '3e', true)}.</p>

`
)

const row3e = storyRow('3e', 'INT. UPSTAIRS<br>EVENING', 
`
${storyImageRecurring('upstairs_ground')}
<p>Michael had time to kill till the end of the day.</p>
${appendLink('Go to Sherrie', 'section4')}

`
)
const section4 = newSection(4);

const row4a = storyRow('4a', 'INT. ROOM<br>EVENING', 
`
${storyImage('S/2')}

<p><span class="Michael">MICHAEL</span><br />Are you still wet?</p>
<p><span class="Sherrie">SHERRIE</span><br />I stayed wet for you all day, master. Every single moment of the day.</p>
<p><span class="Michael">MICHAEL</span><br />Show me.</p>
${storyImage('S/3')}
<p>Sherrie turned and bent over. He liked that she chose to show him him her pussy from behind. She was wet, he smelled that from his place on the edge of the bed. Most wouldn&rsquo;t catch that subtle smell, but his nose was sharp. He got down, sniffed Sherrie&rsquo;s pussy up close. It smelled sweet, like vanilla, mixed with a salty tang from the sweat between her legs. A bizarre blend that was strangely intoxicating.</p>
<p>He shoved his nose between Sherries&rsquo;s ass cheeks, hholding her hips. She moaned softly-had to grab her ankle to balance herself. He took a deep, deep sniff. Let that very deep breath fill his stomach and chest, then sighed it out, growling at the end.</p>
<p><span class="Michael">MICHAEL</span><br />Get on the bed.</p>
${storyImage('S/4')}
<p><span class="Sherrie">SHERRIE</span><br />Yes, master! Yes, master!</p>
${storyImage('S/5')}
<p>Very excitedly, she climbed the bed. Sitting on fours, again showing off her pussy from behind by her own volition.</p>
${storyVideo('S/6')}
${storyImage('S/7')}
<p>He began caressing and feeling Sherrie&rsquo;s pussy. Started with touching her voluptuous outer vaginal lips, then the smaller lips. Moved his fingers up and down over her pussy, asking if she liked that. She did. He asked her what to do next. Sherrie grabbed moved his fingers upwards to where her inner pussylips met, at the clitoral head. She guided his index and middle fingers to caress the knob, moving his fingers mostly up and down, sometimes varying it with some circular movement.</p>
<p>He noticed that area in particular was pretty sensitive because Sherrie&rsquo;s moans became frequent and sultrier when he stimulated the clitoris. She taught him to slide his hands over the clit, then her labia, stimulate the opening of her pussy, and repeat. Not long after, Sherrie shuddered and her orgasmic contractions began. He pulled his hand back and stopped stimulating her.</p>
<p><span class="Sherrie">SHERRIE</span><br />Master! Master! Master!</p>
${storyImageRight('S/4_1')}
<p><span class="Michael">MICHAEL</span><br />Stay like that!</p>
<p>He got up, undressed. Sat on a chair facing his bed, and stroked his cock to the sight of Sherrie&rsquo;s pussy. Sherrie, still on her knees, pushing her ass out and her head into the mattress. Sherrie rotated her head back, watched her master masturbate a distance away for him. She begged him to come closer and continue the "lesson." he declined, she begged again, begged for his delicious fucking cock. He declined that too.</p>
<p>Forbidden from pleasure, Sherrie began humming as the long cock was stroked. Hummed with a rhythm. Same rhythm as her master&rsquo;s strokes; until the stroking became quite violent. Sherrie&rsquo;s hums slowed down, signaling that he should control himself and not push himself over the edge yet. He enjoyed his dominance over her in this training session, yet he became lenient. Didn&rsquo;t know if being truly dominant meant he shouldn&rsquo;t listen to her or not. She was trying to teach him and he wanted to learn, so he listened, followed her rhythm.</p>
<p><br />This was an exercise they&rsquo;d repeat over and over again later. To Michael, masturbation has always been about imagination. Tasked with listening to Sherrie&rsquo;s hums and following her rhythm, he didn&rsquo;t enjoy masturbating as intensely as he usually did, but he for sure did enjoy it for longer. Them being so focused on each other made him feel very close to her. He started feeling very attracted to Sherrie, even though he still looked down on her down on her.</p>
<p>He felt superior to her in every way possible, and that, in a way, turned him me off a little bit. He was rarely attracted to a cheap, easy-to-get woman, Sherrie was the epitome of that. She intrigued him in the beginning, but the more he subdued her, the less he was interested in her. Was it because he didn&rsquo;t understand what it meant to be submissive? Probably. He thought Sherrie was attracted to a man who behaved in a certain way. She was not interested in Michael personally, nor his cock, only the role he played, and that, felt cheap to him.</p>
<p>This time, however, was different. He began to learn the game.</p>
${storyImage('S/4')}
<p>After a while, Sherrie&rsquo;s hums came to a stop and so Michael&rsquo;s strokes stopped too. He gladly got up and went back to hers pussy.</p>
${storyVideo('S/8')}
<p>This time, he inserted his fingers inside Sherrie&rsquo;s pussy. Last night he fingered her with his middle finger only, now with two, occasionally switching to his thumb. Sherrie, blinded by the pleasure, did not instruct him on how to finger, and so he wasn&rsquo;t that confident doing it. His hand&rsquo;s motions lacked purpose and rhythm; mindlessly moved his fingers in and out of her pussy. He enjoyed the sounds his fingers made thrusting Sherrie&rsquo;s vagina, her sexy moans much much more, so he rewarded her luscious moans by shoving his fingers faster and harder into her. Didn&rsquo;t take long for Sherrie to near orgasm.</p>
<p><span class="Sherrie">SHERRIE</span><br />Oh my master, my master! I wanna cum!</p>
<p>Should he let her cum? Or should he deny her again? He should climb the bed and shove his cock inside Sherrie&rsquo;s pussy, that&rsquo;s what he shold do. He would&rsquo;ve done it had he not made that stupid decision three nights ago.</p>
<p>Can&rsquo;t go back on his word now. And if denies her orgasm, she won&rsquo;t be able to stop herself. Then he&rsquo;d have to kick her out, or worse, go back on his promise.</p>
<p><span class="Michael">MICHAEL</span><br />Do it. Cum all you want.</p>
${storyImage('S/9')}
<p>Sex Exp +5</p>
<p>He shoved his thumb into Sherrie&rsquo;s vagina with some might, pressed it against that lump inside it. Sherrie screamed and clawed his bed sheets, trying to hold herself in place while those spasms went through her legs, crotch, and lower back. He pulled his thumb out and smelled the small amount of cum Sherrie sprayed on it. He felt tempted to lick it off his finger but hesitated. Sherrie got up and sucked his finger clean. Still shaking a little bit, thanking him with a shuddering voice.</p>
<p><span class="Sherrie">SHERRIE</span><br />Thank you, master.</p>
<p><span class="Michael">MICHAEL</span><br />It&rsquo;s my turn now.</p>
${storyVideo('S/10')}
${storyImageLeft('S/11_1')}
<p><span class="Michael">MICHAEL</span><br />I&rsquo;m close.</p>
<p><span class="Sherrie">SHERRIE</span><br />Would you like me to slow down, master?</p>
<p><span class="Michael">MICHAEL</span><br />Oh, so I let you cum but you won&rsquo;t let me, huh?</p>
<p><span class="Sherrie">SHERRIE</span><br />I would like you to last longer so you would fuck me, master.</p>
<p><span class="Michael">MICHAEL</span><br />I don&rsquo;t think I can hold it for another round.</p>
<p><span class="Sherrie">SHERRIE</span><br />We can stop and continue tomorrow, master.</p>
<p><span class="Michael">MICHAEL</span><br />What? No way, I&rsquo;m already horny as fuck. I won&rsquo;t calm down until I cum.</p>
<p><span class="Sherrie">SHERRIE</span><br />If you would learn to hold it, master, that would help you increase your stamina.</p>
<p><span class="Michael">MICHAEL</span><br />I won&rsquo;t be able to focus on anything for the rest of the day.</p>
<p><span class="Sherrie">SHERRIE</span><br />It&rsquo;s gonna be difficult, master, but you&rsquo;ll learn a lot from this experience. Just breathe and...</p>
<p><span class="Michael">MICHAEL</span><br />Just breathe and go to the gym, yeah, fuck that shit. Alright, if you don&rsquo;t wanna do it, get out.</p>
<p><span class="Sherrie">SHERRIE</span><br />Mas-</p>
<p><span class="Michael">MICHAEL</span><br />Get out!</p>
<p>Stamina +5</p>
${storyImageRecurring('myroom_portrait')}
<p>Sherrie got up and left the room. Michael trusted that she was trying to teach him what he previously asked her to, but he didn&rsquo;t like the fact that he had to talk her into giving me a blowjob.</p>
<p>He lay down on the bed, closed his eyes and started to think about what just happened. He was so dominant and controlling over Sherrie when he called her in. Now he feels like a bitch. Was it because he let her cum? He did&rsquo;t think women had post-nut clarity. Do they? He wondered. Or is it that he was losing clarity the more he wanted to cum. He feels agitated and desperate now, that&rsquo;s for sure.</p>
<p>He was still hard. Heart was racing and breath was irregular. He tried to relax and control his breathing and slow his heartbeat down and empty his mind. Wasn&rsquo;t that easy. The image of Sherrie&rsquo;s fat pussy lips sprouting out of her vagina while he fingered her kept flashing in his mind. The feeling of her wet tongue tickling the shaft of his cock wouldn&rsquo;t leave the mind either. Nevertheless, he was eventually able to release those images from his mind.</p>
<p>He lost his hardon gradually and his heartbeat returned to normal. He opened my eyes and everything felt clearer all of a sudden. He then got up and decided to go on with his day.</p>
${storyEndButton('Chapter 6')}

`
)

section4.appendChild(row4a);



}












setChapterIndex = ()=> {
    currentChapterIndex.innerHTML= '';

    addToChapterIndex('Section 1', 'section1') 
    addToChapterIndex('Section 2', 'section2') 
    addToChapterIndex('Section 3', 'section3') 
    addToChapterIndex('Section 4', 'section4') 
    }
    

    storyLoad();