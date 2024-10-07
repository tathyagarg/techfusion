export default function RegisterPage() {
    return (<>
        <div className="content">
            <div className="terminal-container">
                <div className="terminal">
                    <h1>REGISTER</h1>
                </div>
            </div>
            <div className="rules-container">
                <p>Enter your name, and click the submit button.</p>
                <p>After clicking the submit button, you will get a user ID. Please save this user ID in a file somewhere as you will require it to submit your flags.</p>
                <br/>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    let name = event.target[0].value;

                    fetch(`https://www.techfusion.net.in/challenge/add-participant`, {
                        method: 'POST',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify({name: name})
                    })
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById('uid').innerText = data
                        })
                }}>
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name"></input>
                    <input type="submit" value="Submit"/>
                </form>
                <div>Your User ID is <p id="uid">...</p></div>
                <div>After getting your User ID, go to <a href="/challenge/submit" style={{color: "white"}}>the submit page</a></div>
            </div>
        </div>
    </>)
}