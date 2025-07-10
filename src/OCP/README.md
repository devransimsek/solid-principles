# OCP – Open/Closed Principle

**Definition:** Software entities should be open for extension, but closed for modification.

**In this example:**  
The `generateReport` function needs to be modified every time a new report type is added. This violates OCP because the function is not closed for modification.
