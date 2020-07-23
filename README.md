# ReactReduxTutorials
https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK


## Three Core Concepts condt.

| Cake Shope Scenario   |      Redux      |                 Purpose                 |
|-----------------------|:---------------:|----------------------------------------:|
|         Shop          |      Store      |      Holds the state of your app        |
| Intention to BUY_CAKE |      Action     |         Describes what happend          |
|       Shopkeeper      |      Reducer    |    Ties the store and actions together  |

A store that holds the state of your app
An action that describes the changes in the state of your app.
A reducer which actually carries out the state transition depending on the action


## Async action creators

Axios : request to an API end point. It is the promise so you need to use 'then' to get your result.
redux-thunk : Define Async action creators ( Middleware ).