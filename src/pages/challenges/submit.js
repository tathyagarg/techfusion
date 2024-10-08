export default function Submit() {
    return <>
        <div className="content">
            <div className="terminal-container">
                <div className="terminal">
                    <h1>SUBMIT</h1>
                </div>
            </div>
            <div className="rules-container">
                <p>Submit your flags here!</p>
                <form onSubmit={(event) => {
                    event.preventDefault()

                    let data = new FormData()
                    data.append('user_id', event.target[0].value)
                    data.append('flag', event.target[1].value)

                    fetch('https://www.techfusion.net.in/challenge/process-submission', {
                        method: 'POST',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify({
                            user_id: event.target[0].value,
                            flag: event.target[1].value
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            const elem = document.getElementById('next-link')
                            if (data) {
                                elem.href = `/challenge/challenge-${data}`
                                elem.style.color = '#00ff00'
                            } else {
                                elem.style.color = '#ff0000'
                            }
                        })
                }}>
                    <label for="uid">User ID: </label>
                    <input type="text" id="uid" name="uid" required></input>
                    <br></br>
                    <label for="flag">Flag: </label>
                    <input type="text" id="flag" name="flag" required></input>
                    <input type="submit" value="Submit"/>
                </form>
                <div>
                    <a id="next-link">If your answer is correct, this element will take you to the next challenge.</a>
                </div>
            </div>
        </div>
    </>
}