# DIP – Dependency Inversion Principle

**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions.

**In this example:**  
`OrderService` is tightly coupled to `MySQLDatabase`, making it hard to change the database implementation or test the service in isolation. This violates DIP.
