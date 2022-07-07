import { BasicAggregateRoot, PureBasicAggregateRoot } from './BasicAggregateRoot';
import { IHasConcurrencyStamp } from './IHasConcurrencyStamp';

export abstract class AggregateRoot<TKey>
    extends BasicAggregateRoot<TKey>
    implements IHasConcurrencyStamp
{
    concurrencyStamp: string;
}

export abstract class PureAggregateRoot
    extends PureBasicAggregateRoot
    implements IHasConcurrencyStamp
{
    concurrencyStamp: string;
}
