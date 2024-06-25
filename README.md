## Project Structure

* *app* - Main directory containing the core application structure.
  * *[locale]* - Directory for handling different locales/languages.
  * *(dashboard)* - Directory containing all pages that exist within the application.
    * *about* - About page of the application.
    * *admin* - Admin dashboard for managing the application.
    * *blogs* - Blog management and display pages.
    * *cancel* - Page displayed when an order is canceled.
    * *cart* - Shopping cart page.
    * *checkout* - Checkout page for completing purchases.
    * *contact* - Contact information and form page.
    * *editblog* - Page for editing blog posts.
    * *editproduct* - Page for editing product listings.
    * *myproducts* - User's product listings page.
    * *products* - General product listings page.
    * *profile* - User profile management page.
    * *success* - Page displayed upon successful order completion.
    * *test* - Test page for development purposes.
    * *users* - User management pages.

* *layout.tsx* - Layout component for the application.
* *loading.tsx* - Loading component displayed during data fetching.
* *page.tsx* - Main page component.
* *globals.css* - Global CSS styles for the application.
* *providers.tsx* - Providers component for wrapping the application with necessary context providers.

* *api* - Directory containing API endpoints.

* *components* - Directory containing reusable React components.

* *hook* - Directory containing custom React hooks.

* *locales* - Directory containing localization files for multi-language support.

* *node_modules* - Directory containing installed npm packages.

* *public* - Directory containing static files such as images and favicon.

* *utils* - Directory containing utility functions and helpers.

* *favicon.ico* - Favicon for the application.
