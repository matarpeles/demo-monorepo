# notification-service

Sends email and Slack notifications for platform events.

## Getting Started

```bash
npm install
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SENDGRID_API_KEY` | SendGrid API key for email | Yes |
| `SLACK_WEBHOOK_URL` | Slack incoming webhook URL | No |
| `PORT` | HTTP port (default: 3003) | No |

## API

- `POST /notify/email` — Send an email notification
- `POST /notify/slack` — Send a Slack message
