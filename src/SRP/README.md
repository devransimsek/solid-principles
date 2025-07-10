# SRP – Single Responsibility Principle

**Definition:** A class should have only one reason to change, meaning it should have only one job or responsibility.

**In this example:**  
The `BlogPost` class is handling multiple responsibilities:
- Managing blog post data
- Saving to file
- Sending email

This violates the SRP because any change in file system or email logic requires modifying the same class.
