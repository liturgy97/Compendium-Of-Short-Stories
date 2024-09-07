loadPage = function() {
    if(!currentStory.isComplete) hideNav();
    document.getElementById('intro-button').href = '#section1'
    prepareStory();

const section1 = newSection(1);
const row1 = storyRow('1', ' ', 
    
    `
<h3><strong>Note:<br>Unless otherwise mentioned, all characters in all stories are above 18&mdash;including you.</strong></h3>
<h3></h3>
<h3></h3>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Ahoy there, young wanderer!&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Ahoy?&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;You&rsquo;ve released me from my confinement in the lamp, so I&rsquo;m obliged to grant you three wishes. Consider them carefully, for&mdash;&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I want to fuck you.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Excuse me?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;That&rsquo;s my wish. I want to fuck you, right here and now.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Hold on a second, I need to explain the rules first.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I don&rsquo;t care, I want to fuck you.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Alright, we&rsquo;ll get to that, but first, the rules.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Can I fuck you?&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Y-You... You want to fuck me? But I&rsquo;m an elf.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I want to fuck you, elf.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;But why waste a wish on me? You can ask for anything your heart desires, as long as it&rsquo;s within the rules.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Nope. I want to fuck.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;What about unimaginable wealth?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Fuck...&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;A harem of beautiful women?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;...You.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Infinite wishes?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Can I fuck you infinite times?&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;No! You can&rsquo;t ask for infinite things, that&rsquo;s one of the rules! See? We have to go over the rules now.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;All I want is to fuck you.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;No, no. Listen to the rules first.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I want to fuuuuuuuuuu-&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Hey, hey listen, mister! This is my first time granting wishes and you&rsquo;re not going to mess this up for me! These rules are very very important. Breaking them would damage the fabric of time and space. The universe itself will crumble! I must go over the rules.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Rule #1: I can only grant you three wishes, no wishing for more wishes.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;But I have one wish! I want to fuck, fuck, fuck&mdash;&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Listen to me!&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Fuck, fuck&mdash;&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Listen! The second rule!&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I want to fuck you though.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;You can&rsquo;t ask for infinite things, whatever you wish for must be quantifiable.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I just want to fuck you.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;The third rule is... this is the most important one...&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I don&rsquo;t care.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;You can&rsquo;t... You&mdash;&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;It doesn&rsquo;t matter. I know my three wishes already. I want to fuck your face.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;You&rsquo;re not allowed to-&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I wish to fuck your vagina.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;You can never-&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;And I would love to fuck your ass too.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;You can&rsquo;t fuck me.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;What the fuck?!&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Yup, that&rsquo;s definitely the third rule. You can&rsquo;t have sex with me. No oral sex and you can&rsquo;t touch my elvish butt.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;That&rsquo;s unfair!&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Life is unfair sometimes. Wish for something else.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Nah, forget it. All I wanted is to fuck you, elf.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;You can wish for anything else, within the rules.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;That&rsquo;s all I wanted in life. I&rsquo;m depressed now.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;By the pointy ears of the council! You&rsquo;ve got to be kidding me. Out of all the people in the world, I had to be freed by the most stubborn, lust-struck guy ever! Great. Just great. If I go back to the council and tell them I didn&rsquo;t grant wishes after being freed, they&rsquo;ll pluck my ears and I&rsquo;ll be the laughingstock of the entire kingdom!&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Pluck your ears?&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Yes, pluck my ears! Can you imagine the shame? I&rsquo;ve dreamed of this moment all my life, and now it&rsquo;s ruined because you want to fuck me. What? People usually ask for money, fame, love, happiness, health. But you? You just want a singular fuck. And fuck who? Me? A virgin elf-&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;You&rsquo;re a virgin?!!!&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Sir! Put your damn pants back on! Oh, yes, all non-married elfs are virgins. If you fucked me, I&rsquo;d have to stay with you for a lifetime.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Oh, shit.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;No, no. Don&rsquo;t even think about it. It&rsquo;s... against the rules like I said. Hey, I don&rsquo;t get it. Like, I can make you fuck the hottest women on Earth, dozens of them even. Why not ask for anything else. Why me?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I don&rsquo;t know. It all seems pretty normal and boring to me. But to fuck an elf? Oof. That&rsquo;s a one time experience right here.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Boring? Are you kidding me? There are women out there that make an elf like me drool for Gandalf&rsquo;s sake.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;It doesn&rsquo;t work with me. I can&rsquo;t think of a better experience.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Experience, huh? Is that what you&rsquo;re looking for? Something different? How about this: Instead of fucking me, I can grant you the chance to live a 100 different stories and experiences with the hottest women who ever lived.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;What? Really?&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Absolutely! Think about it, a hundred experiences, adventures and romances. You&rsquo;d get to be a hero, a king, a pirate, a sorcerer! I could give you a massive cock, an attractive personality, and make every woman around you swoon over you. Or maybe make you to be a spineless cuck who gets cheated on by his lover, or a weak boy dominated by his mistress. If you&rsquo;re into men, you can live some romances with other men too! Or you could live the experience of being a woman for once. Hey, let&rsquo;s go on a gender-bender adventure together. I&rsquo;ll be on your side in each story and customize it on the fly when things get too rough. Isn&rsquo;t that better than just fucking one elf?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I can&rsquo;t lie. This is starting to sound interesting. But I&rsquo;m pretty set on fucking you.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Come on, you&rsquo;re really missing out here. You&rsquo;d have a hundred lifetimes of experiences that you couldn&rsquo;t possibly have if you just settled down with me.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Hmmm. A hundred experiences, huh?&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Yes! Imagine all the tales you&rsquo;d tell! All the lives you&rsquo;d live! Think of the adventures, the excitement, the thrill! Isn&rsquo;t that worth more than just one fuck?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;I don&rsquo;t know...&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;What if we negotiated a bit? How about two hundred stories?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Two hundred? That doesn&rsquo;t seem like enough...&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Alright, alright. How about two hundred and fifty?&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;Two hundred and fifty... hmm... I think we can do better.&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Sir, you&rsquo;re really pushing it here. Two hundred and fifty stories will take a hell of a lot of time to go through and I can&rsquo;t wait to get back to the kingdom.&rdquo;</p>
<p><span class="ELF-You">You:</span> &ldquo;What&rsquo;s the best you could do?&rdquo;</p>
<p><span class="ELF-Elf">Elf:</span> &ldquo;Five hundred. Final offer.&rdquo;</p>


${storyEndButton('Double It', `end1()`)}






`);

section1.appendChild(row1)




}

storyLoad();

function end1() {
    showNav(); 
}

