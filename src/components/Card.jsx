import react from "react";
import Event from "./Event";

const Card = () => {
    return (
        <div className="Container">
            
            {/* CS50 */}
            <Event 
                name="CS50 by Harvard" 
                description="Introduction to CS" 
                imgSrc="https://pll.harvard.edu/themes/custom/twel_scholar/logo.svg" 
                link="https://www.edx.org/cs50" 
                bgColor="red"
            />
             {/* Swift */}
             <Event
                name="Hacking with Swift"
                description="iOS Development"
                imgSrc="https://www.hackingwithswift.com/img/logo-curves-ua.svg"
                link="https://www.hackingwithswift.com/learn"
                bgColor="red"
            />
            {/* Mmdn_ */}
            <Event
                name="Mmdn_"
                description="Web Development Resources"
                imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQ-8NEdJGOdPtwBU5F5bb5d93PZAuvjnbyg&s"
                link="https://developer.mozilla.org/en-US/"
                bgColor="dark-blue"
            />
             {/* W3 Schools */}
             <Event
                name="W3 Schools"
                description="The old reliable"
                imgSrc="data:image/png;base64,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"
                link="https://www.w3schools.com/"
                bgColor="light-green"
            />
            {/* CodePath */}
            <Event
                name="CodePath"
                description="Jump start your SWE career!"
                imgSrc="https://www.codepath.org/hs-fs/hubfs/logo-codepath.png?width=538&height=48&name=logo-codepath.png"
                link="https://www.codepath.org/"
                bgColor="green"
            />
            {/* Codedex */}
            <Event
                name="Codedex"
                description="Coding adventures!"
                imgSrc="https://www.codedex.io/images/coin-cropped.png"
                link="https://www.codedex.io/"
                bgColor="dark-blue"
            />
            {/* GitHub Learning */}
            <Event
                name="GitHub Learning Lab"
                description="GitHub skills to learn"
                imgSrc="data:image/png;base64,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"
                link="https://github.com/apps/github-learning-lab"
                bgColor="Whitesmoke"
            />
             {/* NeedCode */}
             <Event
                name="NeetCode"
                description="Prepare for Coding Interviews"
                imgSrc="https://neetcode.io/assets/neetcode-io-logo.png"
                link="https://neetcode.io/"
                bgColor="grey"
            />
            {/* CodeWars */}
           <Event 
                name="Codewars"
                description="Chanllege others!"
                imgSrc="https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ee_codewars-by-andela-dark.svg"
                link="https://www.codewars.com/"
                bgColor="dark-red"
           />
             {/* LeetCode */}
             <Event 
                name="LeetCode" 
                description="Level up your coding!" 
                imgSrc="https://leetcode.com/static/images/LeetCode_logo_rvs.png" 
                link="https://leetcode.com/" 
                bgColor="black"
            />
        </div>
    )
}

export default Card;