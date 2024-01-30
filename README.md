I began setting up my project and installed dependancies that I was to us in my project.
I then set up my MongoDB database and built a model using my mongoose ORM. I was to install mongoDB but chose to install mongoose as my ORM, an easier way to create schemas.
Thereafter, I connected to my mongoDB database via mongoose, Created and defined a Blog model with a blogSchema and finally setup controllers to consume the services I created

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

    3. Modularity: Breaking your code into smaller, reusable modules can make it easier to understand, test, and maintain.
