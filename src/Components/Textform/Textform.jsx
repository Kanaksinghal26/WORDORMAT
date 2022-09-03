import React, { useState } from 'react'

const Textform = () => {
    
    const [textIn, setTextIn] = useState("Click on an option to see THIS result")

    const [textOut, setTextOut] = useState("")

    const handleOnChange = (event) => {
        setTextIn(event.target.value)
    }
    const handleUp = () => {
        let newText = textIn.toUpperCase();
        setTextOut(newText)
    }

    const handledown = () => {
        let newText = textIn.toLowerCase();
        setTextOut(newText)
    }

    const handleInverse =() => {
        function reverseCase(str) {
            return str.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
        }

        let newText = reverseCase(textIn);
        setTextOut(newText)
    }

    const handleReverse = () => {
        function reverseString(str) {
            var splitString = str.split(""); 
            var reverseArray = splitString.reverse(); 
            var joinArray = reverseArray.join(""); 
            return joinArray;
        }
         
        let newText = reverseString(textIn);
        setTextOut(newText)
    }
    const handleWordCounter = () => {
        let newText = textIn.match(/(\w+)/g).length;
        setTextOut(newText)
    }

    const handleLargestWord = () => {
        function findLongestWord(str) {
            var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
            return longestWord[0];
        }

        function findLongestWordln(str) {
            var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
            return longestWord[0].length;
        }
        
        let newText = findLongestWord(textIn);
        let maxln = findLongestWordln(textIn)
        setTextOut(newText + " " + maxln)
    }

    const handleIsPalindrome = () => {
        function palindrome(str) {
            var re = /[\W_]/g;
            var lowRegStr = str.toLowerCase().replace(re, '');
            var reverseStr = lowRegStr.split('').reverse().join(''); 
            return reverseStr == lowRegStr;
        }
           
        let palindromeBool = palindrome(textIn);

        if(palindromeBool==true){
            setTextOut("YES")
        }

        else{
            setTextOut("NO")
        }
    }
    return (
        <div className='container my-3'>
            <textarea className="form-control" value={textIn} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            <butoon className="btn btn-primary my-3 mx-4" onClick={handleUp}> Upper case   </butoon>
            <butoon className="btn btn-primary my-3 mx-4" onClick={handledown}> Lower case   </butoon>
            <butoon className="btn btn-primary my-3 mx-4" onClick={handleInverse}> Inverse case   </butoon>
            <butoon className="btn btn-primary my-3 mx-4" onClick={handleReverse}> Reverse    </butoon>
            <butoon className="btn btn-primary my-3 mx-4" onClick={handleWordCounter}> WordCount    </butoon>
            <butoon className="btn btn-primary my-3 mx-4" onClick={handleLargestWord}> LargestWord    </butoon>
            <butoon className="btn btn-primary my-3 mx-4" onClick={handleIsPalindrome}> IsPalindrome    </butoon>
            <textarea class="form-control" value={textOut} id="exampleFormControlTextarea3" rows="7"></textarea>

        </div>
    )
}

export default Textform

{/* <Debuggig>
// setTextOut("Converted to UpperCase")  --> ln6
</Debuggig> */}

{/* <label for="exampleFormControlTextarea3">Rounded corners</label> */}





// function reverseString(str) {
//     var splitString = str.split(""); 
//     var reverseArray = splitString.reverse(); 
//     var joinArray = reverseArray.join(""); 
//     return joinArray;
// }
 
// reverseString("hello");