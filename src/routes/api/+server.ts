export function GET({ request } : any) 
{
    let firstName : string = request.searchParams.get('firstName') 
                                                ?? 'Default firstname';
    let lastName : string  = request.searchParams.get('lastName')
                                                ?? 'Default lastname';
    return new Response(`Hello ${firstName} ${lastName}`);
}



