import { PrismaModelFns } from './common';

export interface IBaseConnector {
  getClient(tableName: string): Promise<PrismaModelFns>;
}
