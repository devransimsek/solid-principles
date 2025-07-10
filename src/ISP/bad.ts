class Machine {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }

  fax(): void {
    console.log("Faxing...");
  }
}

class SimplePrinter extends Machine {
  scan(): void {
    throw new Error("Scan not supported");
  }

  fax(): void {
    throw new Error("Fax not supported");
  }
}

const printer = new SimplePrinter();
printer.print();
printer.scan(); // Error
