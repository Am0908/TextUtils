import React from 'react'

export default function About(props) {

    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor : 'white',
    //     border: '2px solid black'
    // })

    // const [buttonText, setbuttonText] = useState("Enable dark Mode")
    
    // const toggleStyle = ()=>{
    //     if(mystyle.color === 'white')
    //     {
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor : 'white',
    //             border: '2px solid black'
    //         })
    //         setbuttonText("Enable dark Mode")
    //     }
    //     else{
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor : '#3C4048',
    //             border: '2px solid white'
    //         })
    //         setbuttonText("Enable light Mode")
    //     }

    // }


    return (
        <div className={`container text-${props.textMode} bg-${props.mode} border border-${props.textMode}`}>
            <h2 >About TextUtils</h2>
            <p className='my-4'>A text editor is a computer program that lets a user enter, change, store, and usually print text (characters and numbers, each encoded by the computer and its input and output devices, arranged to have meaning to users or to other programs). Typically, a text editor provides an "empty" display screen (or "scrollable page") with a fixed-line length and visible line numbers. You can then fill the lines in with text, line by line. A special command line lets you move to a new page, scroll forward or backward, make global changes in the document, save the document, and perform other actions. After saving a document, you can then print it or display it. Before printing or displaying it, you may be able to format it for some specific output device or class of output device. Text editors can be used to enter program language source statements or to create documents such as technical manuals.</p>
            <p>Visual Studio Code is an official text editor for web development from Microsoft, which explains why it is one of the most popular solutions for web developers. According to Microsoft, it has a userbase of 14 million people as of 2021, while Statista reports there 24 million developers worldwide. The service is supported not only on Microsoft OS but also on Linux and Mac. Visual Studio Code has a fairly large set of tools for creating and debugging code.

                Microsoft specialists have provided opportunities for integration with other services. One of the prominent features of VS Code is Live Share. It creates the option of joint work on code for several experts. This way, you don't have to pass the code to multiple developers one at a time.

                The VS Code functionality also offers auto-completion, GitHub integration, syntax highlighting, and many other useful features. In addition, there is a collection of add-ons that provide an additional set of options and allow app creators for hire to customize the editor according to their needs.</p>
                {/* <div className='container'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary my-4" style={mystyle}>{buttonText}</button>
                </div> */}
        </div>
    )
}
