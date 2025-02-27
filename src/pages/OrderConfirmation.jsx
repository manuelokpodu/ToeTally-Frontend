import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const OrderConfirmation = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="text-success">Payment Successful!</h1>
      <p className="lead">Thank you for your order. Your payment has been processed successfully.</p>
      <p>You will receive an email confirmation shortly.</p>
      <Link to="/">
        <Button variant="primary" className="mt-3">Return to Home</Button>
      </Link>
    </Container>
  );
};

export default OrderConfirmation;
