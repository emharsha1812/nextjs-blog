// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//creating a simple API Endpoint
export default function handler(req, res) {
  res.status(200).json({ name: "Hello there!" });
}
