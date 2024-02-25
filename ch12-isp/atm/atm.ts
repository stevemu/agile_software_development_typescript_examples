interface DepositUI {
  requestDepositAmount(): void;
}

interface Transaction {
  execute(): void;
}

class DepositTransaction implements Transaction {
  constructor(private depositUI: DepositUI) {}

  execute() {
    this.depositUI.requestDepositAmount();
  }
}

interface WithdrawalUI {
  requestWithdrawalAmount(): void;
}

class WithdrawalTransaction implements Transaction {
  constructor(private withdrawalUI: WithdrawalUI) {}

  execute() {
    this.withdrawalUI.requestWithdrawalAmount();
  }
}

interface TransferUI {
  requestTransferAmount(): void;
}

class TransferTransaction implements Transaction {
  constructor(private transferUI: TransferUI) {}

  execute() {
    this.transferUI.requestTransferAmount();
  }
}

class UI implements DepositUI, WithdrawalUI, TransferUI {
  requestDepositAmount() {
    console.log('Requesting deposit amount');
  }

  requestWithdrawalAmount() {
    console.log('Requesting withdrawal amount');
  }

  requestTransferAmount() {
    console.log('Requesting transfer amount');
  }
}

const ui = new UI();
const depositTransaction = new DepositTransaction(ui);
const withdrawalTransaction = new WithdrawalTransaction(ui);
const transferTransaction = new TransferTransaction(ui);

depositTransaction.execute();
withdrawalTransaction.execute();
transferTransaction.execute();
