export default async (request, context) => {
  context.log(request.headers);
  return new Response("hello");
};
