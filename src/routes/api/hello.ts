export function GET(request: any) {
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}