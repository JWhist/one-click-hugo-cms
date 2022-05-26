export default (req) => {
  console.log(req.host);
  return new Response("Hello");
};
