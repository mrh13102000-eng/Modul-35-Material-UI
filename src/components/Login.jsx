import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Welcome to Jayjay Login</h3>

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isValid={username !== ""}
            isInvalid={submitted && username === ""}
          />
          <Form.Control.Feedback>Username valid</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isValid={password !== ""}
            isInvalid={submitted && password === ""}
          />
          <Form.Control.Feedback>Password valid</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="remember">
          <Form.Check
            type="checkbox"
            label="Ingat Password"
            feedback="Kamu harus mengingat password!"
            feedbackType="invalid"
            isInvalid={submitted && !remember}
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        </Form.Group>

        <div className="d-grid">
          <Button type="submit">Submit Form</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
