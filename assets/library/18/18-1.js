loadPage = function() {
    prepareStory();
    
    const section1 = newSection(1);
    section1.style.paddingTop = '6.4rem';
    const row1a = storyRow('1a', 'fullRow', 
    
    `${storyImageLeft(1)}
<p></p>
<p>Cum...</p>
<p>That's lots of cum.</p>
<p>Wait. Did I just cum?!!!!</p>
<p>I awoke to find myself staring at my pussy drooling a viscous slimy liquid.</p>
<p>Oh God, it worked!</p>
<p>I came!</p>`);


const row1b = storyRow('1b', 'INT. BALCONY - MORNING', 

`<p>Throwing on my robe with flair, I dashed to the balcony.</p>
<p><strong>Margaret:</strong> Hello, world! I have just-</p>
<p><strong>Susan:</strong> (tending her plants tranquilly) Oh, good morning, Mrs. Epstein. What rouses you at this early hour?</p>
<p>I descended gracefully, wrapping my arms around the railing.</p>
<p><strong>Margaret:</strong> Oh, splendid morning indeed, Mrs. Graham. I believe... I think I might've just... come.</p>
<p>Susan dropped the hose, her eyes wide with avaricious curiosity, and hurried over.</p>
<p><strong>Susan:</strong> Do tell, Mrs. Epstein, how did you achieve such a feat?</p>
<p><strong>Margaret:</strong> (dramatic sigh) I don't know, Mrs. Graham... Must've been... completely coincidential!</p>
<p>I swept back into my room, collapsing onto my bed.</p>
<p>Oh God, oh God.</p>
<p>I grabbed the small bottle, its sticker was covered with long, incomprehensible words.</p>
<p>God, oh God. God bless Astra... Zeneka<sup>TM</sup>.</p>
<p><strong>Already have.</strong></p>
<p>God almighty, send me a man right now. Right here!</p>
<p><strong>Will do.</strong></p>
<p>Send my husband is his most powerful, agrrrressive state!</p>
<p><strong>That wasn't your first wish, bitch.</strong></p>
<p>The doorbell rang!</p>
<p>I sprinted downstairs!</p>
    
    ${storyEndButton('To be continued...')} 
    `
    )
        
    section1.appendChild(row1a)
    section1.appendChild(row1b)
    
    

    
    }
    
    
storyLoad();