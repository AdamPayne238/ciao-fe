import React from 'react'

// Styles
import './Home.scss'

const Home = () => {
    return (
        <div className="landing-home-container">
            <h1>Keep the conversation going!</h1>
            <p>Ciao is a real-time chat application in the making that will allow users to stay in touch no matter where the conversation left off.</p>
            {/* <p>Currently, the functionality of the app is still in progress. If you would like to login you can use the temporary credentials, Email: random@email.com, and Password: random. Once the basic design is finished, the chat functionality will be built using GraphQL subscriptions and web-sockets which will allow for real-time chat.</p> */}
        </div>
    )
}

export default Home