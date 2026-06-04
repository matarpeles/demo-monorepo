# payments-service

Handles payment processing, billing, and transaction management.

## Getting Started

```bash
npm install
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `STRIPE_API_KEY` | Stripe secret key | Yes |
| `DB_URL` | PostgreSQL connection string | Yes |
| `PORT` | HTTP port (default: 3001) | No |

## API

- `POST /payments` — Create a payment
- `GET /payments/:id` — Get payment status
- `POST /refunds` — Issue a refund
