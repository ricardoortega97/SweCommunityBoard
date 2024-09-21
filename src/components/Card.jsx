import react from "react";
import Event from "./Event";

const Card = () => {
    return (
        <div className="Container">
            {/* LeetCode */}
            <Event 
                name="LeetCode" 
                description="Level up your coding!" 
                imgSrc="https://leetcode.com/static/images/LeetCode_logo_rvs.png" 
                link="https://leetcode.com/" 
                bgColor="black"
            />
            {/* CS50 */}
            <Event 
                name="CS50 by Harvard" 
                description="Introduction to CS" 
                imgSrc="https://pll.harvard.edu/themes/custom/twel_scholar/logo.svg" 
                link="https://www.edx.org/cs50" 
                bgColor="red"
            />
            {/* CodeWars */}
           <Event 
                name="Codewars"
                description="Chanllege others!"
                imgSrc="https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ee_codewars-by-andela-dark.svg"
                link="https://www.codewars.com/"
                bgColor="dark-red"
           />
            {/* Mmdn_ */}
            <Event
                name="Mmdn_"
                description="Web Development Resources"
                imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQ-8NEdJGOdPtwBU5F5bb5d93PZAuvjnbyg&s"
                link="https://developer.mozilla.org/en-US/"
                bgColor="dark-blue"
            />
            {/* NeedCode */}
            <Event
                name="NeetCode"
                description="Prepare for Coding Interviews"
                imgSrc="https://neetcode.io/assets/neetcode-io-logo.png"
                link="https://neetcode.io/"
                bgColor="grey"
            />
            {/* CodePath */}
            <Event
                name="CodePath"
                description=""
                imgSrc="https://www.codepath.org/hs-fs/hubfs/logo-codepath.png?width=538&height=48&name=logo-codepath.png"
                link=""
                bgColor=""
            />
            {/* LeetCode */}
            <Event
                name="CodePath"
                description=""
                imgSrc=""
                link=""
                bgColor=""
            />
            {/* LeetCode */}
            <Event
                name="CodePath"
                description=""
                imgSrc=""
                link=""
                bgColor=""
            />
            {/* LeetCode */}
            <Event
                name="CodePath"
                description=""
                imgSrc=""
                link=""
                bgColor=""
            />
            {/* LeetCode */}
            <Event
                name="CodePath"
                description=""
                imgSrc=""
                link=""
                bgColor=""
            />
        </div>
    )
}

export default Card;