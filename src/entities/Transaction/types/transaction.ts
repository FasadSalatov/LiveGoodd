export type TTransactionType = 'replenishment' | 'withdrawal';

export interface ITransaction {
  id: number;
  type: TTransactionType;
  amount: string;
}
