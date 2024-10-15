import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // Track subscription status
  const [message, setMessage] = useState(''); // Track subscription message

  useEffect(() => {
    // Clear email field and reset status on success
    if (status === 'success') {
      clearFields();
      // Automatically hide the message after a few seconds
      const timer = setTimeout(() => {
        setStatus(''); // Reset status after a delay
        setMessage(''); // Reset message after a delay
      }, 3000); // Change the delay as needed
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email && email.indexOf("@") > -1) {
      setStatus('sending'); // Set status to sending
      try {
        const response = await fetch("http://localhost:5000/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();
        if (response.ok) {
          setStatus('success');
          setMessage(result.message); // Success message from backend
        } else {
          setStatus('error');
          setMessage(result.message); // Error message from backend
        }
      } catch (error) {
        setStatus('error');
        setMessage('Failed to subscribe. Please try again later.');
        console.error("Subscription error:", error);
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss the latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && (
              <div className="success-message">{message}</div>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                  required 
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
      {/* Display the message below the form */}
      {status === 'success' && (
        <Row>
          <Col>
            <div className="alert alert-success" role="alert">
              You have successfully subscribed!
            </div>
          </Col>
        </Row>
      )}
    </Col>
  );
};
