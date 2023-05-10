class BankAccount {
    private accountNumber: string;
    private balance: number;
  
    constructor(accountNumber: string) {
      this.accountNumber = accountNumber;
      this.balance = 0;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
    }
  
    public withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Insufficient balance");
      }
    }
  
    public getAccountNumber(): string {
      return this.accountNumber;
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  // Usage
  const account = new BankAccount("1234567890");
  account.deposit(1000);
  console.log(account.getBalance());  // Output: 1000
  account.withdraw(500);
  console.log(account.getBalance());  // Output: 500
  console.log(account.getAccountNumber());  // Output: 1234567890