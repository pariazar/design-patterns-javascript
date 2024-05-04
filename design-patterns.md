creatial patterns
structural patterns
behavioral patterns

10 Design Patterns noted in 10 minutes.

- Singleton (Creational)
    Object that can only be instantiated once.
    Use case: Settings

- Prototype (Creational)
    Fancy word for "clone".
    Create clone object instead of extending object.

- Builder (Creational)
    Create object with methods instead of constructor.
    Examples: 
        JQuery.

- Factory (Creational)
    Instead of using a new keyword to instantiate and object you use a function or method to do it for you.
    Use case: Cross platform app - Conditional checking to determine which button to show.

- Facade (Structural)
     A simplified API to hide low level details in your code base.
    Use case: Create facade class that contain the low level systems as dependencies which then simplifies their operation.
    Examples: 
        JQuery.

- Proxy (Structural)
    Fancy word for "substitue".
    Replace target object with a proxy.
    Examples: 
        Vue's reactivity system.

- Iterator (Behavioral)
    Traverse through a collection of objects. for loop.

- Observer (Behavioral)
    Many objects subscribe to events that are broadcast from another object.
    one-to-many relationship.
    Loop that unfolds over the dimension of time.

- Mediator (Behavioral)
    Is like a middle man or broker.
    Examples: 
        1. Air traffic controller that sits between the runways & airplains to provide coordination & communication .
        2. Middleware

- State (Behavioral)

    Object behaves differently based on a finite amount of states.
    Examples:
        Finite State Machines