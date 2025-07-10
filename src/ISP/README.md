# ISP – Interface Segregation Principle

**Definition:** No client should be forced to depend on methods it does not use.

**In this example:**  
`SimplePrinter` is forced to implement `scan()` and `fax()` methods which it doesn't support. This violates ISP because it leads to unnecessary or broken implementations.
