import React from 'react'

// Styles
import './Conversation.scss'

const Conversation = () => {

    return(

    <ul className="messages">

    <div>
    <li className="msg-wp">
        <blockquote className="msg">
        <p>Hey whats up man hows it going?</p>
        </blockquote>
    </li>
    </div>

    <li className="msg-wp">
        <blockquote className="msg">
        <p>Can we video?</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>Just finishing up at work. Cant video chat right now.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>You playing tonight?</p>
        </blockquote>
    </li>
    
    <li className="msg-wp">
        <blockquote className="msg">
        <p>Thats what I was going to ask you! Yea I'll be on.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>Alright cool it shouldn't take me too long to get home.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>I'll message you soon.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg">
        <p>Sounds good!</p>
        </blockquote>
    </li>

    </ul>
        
    )
}

export default Conversation