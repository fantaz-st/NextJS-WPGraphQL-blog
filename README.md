## Blog project NextJs, GraphQL & Wordpress

# Technology

The blog uses NextJS as a frontend and WPGraphQL to fetch data from Wordpress.
Styling was done using Material UI and CSS modules.

# Installation

Clone the repo and run "npm i".
Create a local or actual wordpress website and add a couple of posts. Install WPgraphQL plugin for wordpress and create an endpoint.
Copy the endpoint to a ".env" file in the project's root directory to two variables:
WORDPRESS_LOCAL_API_URL=<endpoint here>
NEXT_PUBLIC_GRAPHQL=<endpoint here>

Run "npm run dev".
