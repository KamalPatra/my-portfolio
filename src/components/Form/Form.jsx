import React, {useState} from 'react';
import {db}  from '../firebase';
import firebase from 'firebase';

function Form(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(()=>{
            alert("Message has been submitted")
        })
        .catch((error) => {
            alert(error.message); 
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
    const handleReset = (e) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
    return (
        <div className="container">
			<h3>Contact Me</h3>
			<p>Feel free to contact me via email at any time: kamal.patra369@gmail.com</p>
				<form method="post" onSubmit={handleSubmit} onReset={handleReset}>
					<div className="row gtr-uniform">
						<div className="col-6 col-12-xsmall">
                            <input value={name} type="text" name="name" id="name" placeholder="Name" onChange={e => setName(e.target.value)}/>
                        </div>
						<div className="col-6 col-12-xsmall">
                            <input value ={email} type="email" name="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        </div>
						<div className="col-12">
                            <input value={subject} type="text" name="subject" id="subject" placeholder="Subject" onChange={e => setSubject(e.target.value)}/>
                        </div>
						<div className="col-12">
                            <textarea value ={message} name="message" id="message" placeholder="Message" rows="6" onChange={e => setMessage(e.target.value)}></textarea>
                        </div>
						<div className="col-12">
							<ul className="actions">
								<li><input type="submit" class="primary" value="Send Message" /></li>
								<li><input type="reset" value="Reset Form" /></li>
							</ul>
						</div>
					</div>
				</form>
		</div>
    );
}

export default Form;