export default function handler(req, res) {
  return res.status(200).json('Getting product: ' + req.query.id);
}
