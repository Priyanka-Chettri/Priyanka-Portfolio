import React from 'react'
import Marquee from "react-fast-marquee";
import { useEffect } from 'react';
import linkedIn from "../assets/LinkedIn.png"
import X from "../assets/X.png"
import dev from "../assets/dev.png"



function ContactMe() {
    useEffect(() => {
        // Check if the script is already loaded
        if (!window.twttr) {
          // Create a new script element
          const script = document.createElement('script');
          script.src = 'https://platform.twitter.com/widgets.js';
          script.async = true;
          document.body.appendChild(script);
        } else {
          // If the script is already loaded, re-parse the tweets
          window.twttr.widgets.load();
        }
      }, []); 
      
  return (
    
    <div className='bg-gradient-to-b from-[#F5E9FF] to-white md:pt-[180px] pt-[90px] flex flex-col'>
        <div>
        <Marquee className=''>
            <div className='flex md:gap-4 md:h-full gap-5'>
            <div className="twitter-embed"  dangerouslySetInnerHTML={{

            __html:`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What are you learning today? <br>I&#39;ve picked up dynamic programming after a short break. Do you have any tips or advice on how to get started, or any tricks to share? <a href="https://t.co/s1aMHAQ8F7">pic.twitter.com/s1aMHAQ8F7</a></p>&mdash; Priyanka Chettri (@Pryancawithan_i) <a href="https://twitter.com/Pryancawithan_i/status/1835300109044625458?ref_src=twsrc%5Etfw">September 15, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
            }}>

          </div> 
            <div className="twitter-embed" dangerouslySetInnerHTML={{

            __html:`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Excited to share that I’m joining <a href="https://twitter.com/hashtag/SheFiSeason12?src=hash&amp;ref_src=twsrc%5Etfw">#SheFiSeason12</a> as a SheFi Scholar! 🚀 Can’t wait to venture into Web3 with a dynamic community that lives by the belief, &quot;The Frontier Is Feminine.&quot;<br>Thank you <a href="https://twitter.com/Celo?ref_src=twsrc%5Etfw">@celo</a> <a href="https://twitter.com/shefiorg?ref_src=twsrc%5Etfw">@shefiorg</a> <br>I’ll be sharing my journey along the way. Stay tuned ! <a href="https://t.co/JfYHGE0VxK">pic.twitter.com/JfYHGE0VxK</a></p>&mdash; Priyanka Chettri (@Pryancawithan_i) <a href="https://twitter.com/Pryancawithan_i/status/1834511599048040736?ref_src=twsrc%5Etfw">September 13, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
            }}> 
            </div>
            <div className="twitter-embed" dangerouslySetInnerHTML={{

            __html:`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🎉 It’s weekend! What’s everyone working on? Learning new tech or tackling fun projects? Share in the comments.<br><br>I’m diving into React and really enjoying getting into the details. Will share my learnings with you all super soon! 🚀💻 <a href="https://t.co/vUczsTFRjg">pic.twitter.com/vUczsTFRjg</a></p>&mdash; Priyanka Chettri (@Pryancawithan_i) <a href="https://twitter.com/Pryancawithan_i/status/1829865033683059098?ref_src=twsrc%5Etfw">August 31, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
            }}>
           </div> 
           <div className="twitter-embed" dangerouslySetInnerHTML={{

        __html:`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Absolutely loving this setup! 💙 <a href="https://t.co/ds5hdRX6na">pic.twitter.com/ds5hdRX6na</a></p>&mdash; Priyanka Chettri (@Pryancawithan_i) <a href="https://twitter.com/Pryancawithan_i/status/1800938714161652205?ref_src=twsrc%5Etfw">June 12, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
        }}>
        </div>
        <div className="twitter-embed" dangerouslySetInnerHTML={{

        __html:`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">💡𝐏𝐫𝐨 𝐓𝐢𝐩: Make your UI elements pop with Tailwind CSS! Use 𝐡𝐨𝐯𝐞𝐫, 𝐟𝐨𝐜𝐮𝐬, and 𝐚𝐜𝐭𝐢𝐯𝐞 variants to enhance user experience and engagement. Your designs will thank you!<br><br>A thread 🧵 <a href="https://t.co/Tj8tWN5cHF">pic.twitter.com/Tj8tWN5cHF</a></p>&mdash; Priyanka Chettri (@Pryancawithan_i) <a href="https://twitter.com/Pryancawithan_i/status/1795352605264372152?ref_src=twsrc%5Etfw">May 28, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
        }}>
        </div> 
      </div>
         
          
        
      </Marquee>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
            <p className='md:text-[33px] text-[20px]'>
            Lets Keep in Touch!
            </p>
            <div className=' bg-[#BAB4D7] p-10 rounded-xl flex gap-10 mt-10 shadow-lg' >
              <a href="https://www.linkedin.com/in/priyanka-chettri/" target='_blank'><img src={linkedIn} className='h-12 w-12 hover:scale-105 transition-all'></img></a>
              <a href="https://x.com/Pryancawithan_i" target='_blank'><img src={X} className='h-12 w-12 hover:scale-105 transition-all'></img></a>
              <a href="https://dev.to/priyankachettri" target='_blank'><img src={dev} className='h-12 w-12 hover:scale-105 transition-all'></img></a>

            </div>
        </div>
        
    </div>
  )
}

export default ContactMe