## Blog project NextJs, GraphQL & Wordpress

![FANTAZ blog by Čedomir Babić](./fantaz-blog.jpg?raw=true 'FANTAZ blog')

# Technology

The blog uses NextJS as a frontend and WPGraphQL to fetch data from Wordpress.
Styling was done using Material UI and CSS modules.
Sliders are using Slick slider.
Route loading is using nprogress.

# Functionality

The blog fetches posts data through a GraphQL endpoint in wordpress by getStaticProps and displays it in grids or in the sliders.
Search works for posts and users.
Clicking on the author name in the post opens the author page.
Clicking on the category button in the post opens a post page with all the posts of that category.
Banners are created when a "banner" category is added to he post.
Page loading bar is displayed on every route change.
All posts page has a "load more" functionality whis fetches posts via a custom useFetch hook.
Every post can be opened.
Posts page automatically generates a table of contents link list.

# Installation

Clone the repo and run "npm i".
Create a local or actual wordpress website and add a couple of posts. Install WPgraphQL plugin for wordpress and create an endpoint.
Copy the endpoint to a ".env" file in the project's root directory to two variables:
WORDPRESS_LOCAL_API_URL=<endpoint here>
NEXT_PUBLIC_GRAPHQL=<endpoint here>

Run "npm run dev".
