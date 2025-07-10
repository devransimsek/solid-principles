interface IPrinter {
  print(): void;
}

interface IScanner {
  scan(): void;
}

interface IFax {
  fax(): void;
}

class BasePrinter implements IPrinter {
  print(): void {
    console.log("Simple Printer printing...");
  }
}

class AdvancedMachine implements IPrinter, IScanner, IFax {
  print(): void {
    console.log("AdvancedMachine printing...");
  }
  scan(): void {
    console.log("AdvancedMachine scanning...");
  }
  fax(): void {
    console.log("AdvancedMachine faxing...");
  }
}
