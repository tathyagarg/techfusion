import hidden_word from '../../assets/hidden-word.png'
import flag from '../../assets/flag.zip'

export default function Challenge5() {
    return <>
        <div className="content">
            <div className="rules-container">
                <p style={{textAlign: "center"}}>The answer lies in a shift of vision</p>
                <img src={hidden_word} width={"100%"}></img>
                <a href={flag} download style={{color: "white"}}>Click to download your next clue</a>
            </div>
        </div>
    </>
}