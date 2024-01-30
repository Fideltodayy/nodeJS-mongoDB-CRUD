I began setting up my project and installed dependancies that I was to us in my project.
I then set up my MongoDB database and built a model using my mongoose ORM. I was to install mongoDB but chose to install mongoose as my ORM, an easier way to create schemas.
Thereafter, I connected to my mongoDB database via mongoose, Created and defined a Blog model with a blogSchema and finally setup controllers to consume the services I created.
Next I created routes for the respective controllers by importing the controllers and defined the routes for each controller using the express router.
Later on, in the app.js file I added a new middleware so that my app can use the routes i defined.This was so that when you send a request to the route "/api/blogs", express checks the routes defined in the routes folder and request routes that match the URL.

## Dependencies

1. Express
2. Mongoose
3. Mocha
4. Chai
5. chai-http

## Best Practices

    1.Try...Catch
    I have used this to handle errors and ensure the server does not crash/fail.

    2.Asynchronous Javascript.
    This is the ability of JavaScript to execute multiple tasks simultaneously without blocking the execution of other tasks. This is particularly important when dealing with time-consuming operations such as making API calls, reading and writing files, or performing database queries.

    3. Modularity:
    Breaking your code into smaller, reusable modules can make it easier to understand, test, and maintain.

    4. Testing:
    Automated tests are crucial to every web application. They save you time that would otherwise be spent running repetitive tests to see if your code works as expected.
