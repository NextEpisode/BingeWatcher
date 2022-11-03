export default function handler(req, res) {
    res.status(200).json({ name: process.env.GOOGLE_CLIENT_ID + " hell" })
}