# LSP – Liskov Substitution Principle

**Definition:** Subtypes must be substitutable for their base types without altering the correctness of the program.

**In this example:**  
`Ostrich` is a subtype of `Bird`, but overriding `fly()` to throw an error breaks the expected behavior, violating LSP.
