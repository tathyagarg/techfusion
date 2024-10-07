export default function Challenge4() {
    return <>
        <div className="content">
            <div className="rules-container">
                <p style={{fontSize: '25px'}}>
                Do not go gentle into that good night,<br/>
            Old age should burn and rave at close of day;<br/>
            Rage, rage against the dying of the light.<br/>
<br/>
            Though men at their end know dark is right,<br/>
            Because their words had forked no lightning they<br/>
            Do not go gentle into that good night.<br/>
<br/>
            Good men, the last wave by, crying how bright<br/>
            Their deeds might have danced in a green bay,<br/>
            Rage, rage against the dying of the light.<br/>
<br/>
            Men who caught and sang the sun in flight,<br/>
            And learn, too late, they grieved it on its way,<br/>
            Do not go gentle into that good night.<br/>
<br/>
            Grave men, near death, who see with blinding sight<br/>
            Blind eyes could blaze like meteors and be gay,<br/>
            Rage, rage against the dying of the light.<br/>
<br/>
            And you, my father, there on the sad height,<br/>
            Curse, bless, me with your fierce tears, I pray.<br/>
            Do not go gentle into that good night.<br/>
            Rage, rage against the dying of the light.<br/>
                </p>
            </div>
            <div className="rules-container">
                <h1>Instructions</h1>
                Oh no! Looks like some word robbers have stolen some words from this poem. For your next flag, find which words have been removed from the poem. Then, take these words in lowercase form, mash them all together, and sort the letters in alphabetical order. Your flag is the resultant string.<br/>
                For example, if the words were "Hello Hi", your result would be:<br/>
                <ol>
                    <li>Lowercase - "hello hi"</li>
                    <li>Mash the words together - "hellohi"</li>
                    <li>Sort alphabetically - "ehhillo"</li>
                </ol>

                So, in this case, "ehhillo" would be the flag.<br/>
            </div>
        </div>
    </>
}