import { goto } from '$app/navigation';

export const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  }; 

export function routeToPage(route, replaceState) {
   goto(`/${route}`, { replaceState }) 
}

export function goBack(defaultRoute = '/') {
    const ref = document.referrer;
    goto(ref.length > 0 ? ref : defaultRoute)
  }