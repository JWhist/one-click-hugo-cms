import type { Context } from "netlify:edge";
export default async (request: Request, context: Context): Promise<Response> => {  context.log(request.headers)
    return new Response('hello')
}
