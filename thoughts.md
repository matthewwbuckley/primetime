# Thoughts on the Project: Primes

### Database

The database will just be an array of numbers stored on the backend. The filesize is 100kb. I am wondering about how expensive this will be to contol.

### Pagination

The backend should be able to handle pagination. I am wondering if binary searching for the value would be better than the filtering that I am doing at the moment.

### State management

On changing page I would prefer for there to be an immediate switch and for the data to be filled when the API call completes. I dont want the program to wait. For this I am going to use a method I saw on [StackOverflow](https://stackoverflow.com/questions/56502838/is-it-ok-to-make-a-rest-api-request-from-within-a-redux-reducer)

### Last Page

Previously I was planning on implementing pagination in the form of a simple:

< prev --- current --- next >

but am now going with numbered pages which brings up the issue of how to handle the number of pages. I could calculate them each time a request is sent. I am not too worried about the extra computation, but it muddies the api route. The only advantage would be that I could ignore some simple checks.

### API Route

Should all rest api limit subdomains to part of the main domains data by design. Or is it fine to give seperate data.

- /route => "all"
- /route/sub => subsection of "all"
- /route/info => info relating to route, no info from "all"

This is what I am doing for the /prime/last-page route, but an alternate /last-page route would also work. Another thought, would there be any harm in having two routes that did the same thing? That way both could be used.

### Pagination Bug

There is a small bug in the pagination display. If it is in < 1 ... n-1 n n+1 ... N > mode it will flicker to an incorrect value when GET PRIMES is pressed. I think this is an issue with the module itself. The incorrect value is never set, it is just visual bug. Pagination is still being worked on at material-ui and is not yet included in core functionality.

### Containers and Docker

I am going to give docker a go. Following [this Medium article](https://medium.com/@xiaolishen/develop-in-docker-a-node-backend-and-a-react-front-end-talking-to-each-other-5c522156f634).

### Docker v3.4.1 issue

So react-scripts has a breaking bug in it that causes the app to fail with error code zero. See [here](https://github.com/facebook/create-react-app/issues/8688).

### Docker volumes

I cant get Docker volumes to work. When I link the folder it has nothing inside it.

### Docker and localhost

I cannot commnuicate via localhost. I can communicate through front: http://192.168.99.100:3000/ and api: http://192.168.99.100:8000/. This is due to me being unable to use docker desktop, and being stuck on toolbox. When the front and api communicate localhost also fails. They can connect directly through 192.168.99.100. https://forums.docker.com/t/how-to-use-localhost-instead-of-192-168-99-100/54098
