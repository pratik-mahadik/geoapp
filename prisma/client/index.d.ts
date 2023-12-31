
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type dataPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "data"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: bigint
    project: string
    date: Date
    category: string
    gcs_path: string
    geoserver_layer: string
  }, ExtArgs["result"]["data"]>
  composites: {}
}

/**
 * Model data
 * 
 */
export type data = runtime.Types.DefaultSelection<dataPayload>
export type projectPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "project"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: bigint
    project: string
  }, ExtArgs["result"]["project"]>
  composites: {}
}

/**
 * Model project
 * 
 */
export type project = runtime.Types.DefaultSelection<projectPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Data
 * const data = await prisma.data.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Data
   * const data = await prisma.data.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.data`: Exposes CRUD operations for the **data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data
    * const data = await prisma.data.findMany()
    * ```
    */
  get data(): Prisma.dataDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    data: 'data',
    project: 'project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'data' | 'project'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      data: {
        payload: dataPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.dataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload>
          }
          findFirst: {
            args: Prisma.dataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload>
          }
          findMany: {
            args: Prisma.dataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload>[]
          }
          create: {
            args: Prisma.dataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload>
          }
          createMany: {
            args: Prisma.dataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.dataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload>
          }
          update: {
            args: Prisma.dataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload>
          }
          deleteMany: {
            args: Prisma.dataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.dataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.dataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<dataPayload>
          }
          aggregate: {
            args: Prisma.DataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateData>
          }
          groupBy: {
            args: Prisma.DataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DataGroupByOutputType>[]
          }
          count: {
            args: Prisma.dataCountArgs<ExtArgs>,
            result: $Utils.Optional<DataCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: projectPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model data
   */


  export type AggregateData = {
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  export type DataAvgAggregateOutputType = {
    id: number | null
  }

  export type DataSumAggregateOutputType = {
    id: bigint | null
  }

  export type DataMinAggregateOutputType = {
    id: bigint | null
    project: string | null
    date: Date | null
    category: string | null
    gcs_path: string | null
    geoserver_layer: string | null
  }

  export type DataMaxAggregateOutputType = {
    id: bigint | null
    project: string | null
    date: Date | null
    category: string | null
    gcs_path: string | null
    geoserver_layer: string | null
  }

  export type DataCountAggregateOutputType = {
    id: number
    project: number
    date: number
    category: number
    gcs_path: number
    geoserver_layer: number
    _all: number
  }


  export type DataAvgAggregateInputType = {
    id?: true
  }

  export type DataSumAggregateInputType = {
    id?: true
  }

  export type DataMinAggregateInputType = {
    id?: true
    project?: true
    date?: true
    category?: true
    gcs_path?: true
    geoserver_layer?: true
  }

  export type DataMaxAggregateInputType = {
    id?: true
    project?: true
    date?: true
    category?: true
    gcs_path?: true
    geoserver_layer?: true
  }

  export type DataCountAggregateInputType = {
    id?: true
    project?: true
    date?: true
    category?: true
    gcs_path?: true
    geoserver_layer?: true
    _all?: true
  }

  export type DataAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which data to aggregate.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: Enumerable<dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned data
    **/
    _count?: true | DataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataMaxAggregateInputType
  }

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
        [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>
  }




  export type DataGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: dataWhereInput
    orderBy?: Enumerable<dataOrderByWithAggregationInput>
    by: DataScalarFieldEnum[]
    having?: dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataCountAggregateInputType | true
    _avg?: DataAvgAggregateInputType
    _sum?: DataSumAggregateInputType
    _min?: DataMinAggregateInputType
    _max?: DataMaxAggregateInputType
  }


  export type DataGroupByOutputType = {
    id: bigint
    project: string
    date: Date
    category: string
    gcs_path: string
    geoserver_layer: string
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  type GetDataGroupByPayload<T extends DataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataGroupByOutputType[P]>
            : GetScalarType<T[P], DataGroupByOutputType[P]>
        }
      >
    >


  export type dataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project?: boolean
    date?: boolean
    category?: boolean
    gcs_path?: boolean
    geoserver_layer?: boolean
  }, ExtArgs["result"]["data"]>

  export type dataSelectScalar = {
    id?: boolean
    project?: boolean
    date?: boolean
    category?: boolean
    gcs_path?: boolean
    geoserver_layer?: boolean
  }


  type dataGetPayload<S extends boolean | null | undefined | dataArgs> = $Types.GetResult<dataPayload, S>

  type dataCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<dataFindManyArgs, 'select' | 'include'> & {
      select?: DataCountAggregateInputType | true
    }

  export interface dataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data'], meta: { name: 'data' } }
    /**
     * Find zero or one Data that matches the filter.
     * @param {dataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dataFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'data'> extends True ? Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Data that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dataFindUniqueOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dataFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'data'> extends True ? Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Data that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindFirstOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     * 
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends dataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<dataPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Data.
     * @param {dataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     * 
    **/
    create<T extends dataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, dataCreateArgs<ExtArgs>>
    ): Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Data.
     *     @param {dataCreateManyArgs} args - Arguments to create many Data.
     *     @example
     *     // Create many Data
     *     const data = await prisma.data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Data.
     * @param {dataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     * 
    **/
    delete<T extends dataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, dataDeleteArgs<ExtArgs>>
    ): Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Data.
     * @param {dataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, dataUpdateArgs<ExtArgs>>
    ): Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Data.
     * @param {dataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, dataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Data.
     * @param {dataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
    **/
    upsert<T extends dataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, dataUpsertArgs<ExtArgs>>
    ): Prisma__dataClient<$Types.GetResult<dataPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
    **/
    count<T extends dataCountArgs>(
      args?: Subset<T, dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataAggregateArgs>(args: Subset<T, DataAggregateArgs>): Prisma.PrismaPromise<GetDataAggregateType<T>>

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataGroupByArgs['orderBy'] }
        : { orderBy?: DataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dataClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * data base type for findUnique actions
   */
  export type dataFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where: dataWhereUniqueInput
  }

  /**
   * data findUnique
   */
  export interface dataFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends dataFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * data findUniqueOrThrow
   */
  export type dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where: dataWhereUniqueInput
  }


  /**
   * data base type for findFirst actions
   */
  export type dataFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: Enumerable<dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data.
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data.
     */
    distinct?: Enumerable<DataScalarFieldEnum>
  }

  /**
   * data findFirst
   */
  export interface dataFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends dataFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * data findFirstOrThrow
   */
  export type dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: Enumerable<dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data.
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data.
     */
    distinct?: Enumerable<DataScalarFieldEnum>
  }


  /**
   * data findMany
   */
  export type dataFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data to fetch.
     */
    orderBy?: Enumerable<dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing data.
     */
    cursor?: dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data.
     */
    skip?: number
    distinct?: Enumerable<DataScalarFieldEnum>
  }


  /**
   * data create
   */
  export type dataCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * The data needed to create a data.
     */
    data: XOR<dataCreateInput, dataUncheckedCreateInput>
  }


  /**
   * data createMany
   */
  export type dataCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data.
     */
    data: Enumerable<dataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * data update
   */
  export type dataUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * The data needed to update a data.
     */
    data: XOR<dataUpdateInput, dataUncheckedUpdateInput>
    /**
     * Choose, which data to update.
     */
    where: dataWhereUniqueInput
  }


  /**
   * data updateMany
   */
  export type dataUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data.
     */
    data: XOR<dataUpdateManyMutationInput, dataUncheckedUpdateManyInput>
    /**
     * Filter which data to update
     */
    where?: dataWhereInput
  }


  /**
   * data upsert
   */
  export type dataUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * The filter to search for the data to update in case it exists.
     */
    where: dataWhereUniqueInput
    /**
     * In case the data found by the `where` argument doesn't exist, create a new data with this data.
     */
    create: XOR<dataCreateInput, dataUncheckedCreateInput>
    /**
     * In case the data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataUpdateInput, dataUncheckedUpdateInput>
  }


  /**
   * data delete
   */
  export type dataDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
    /**
     * Filter which data to delete.
     */
    where: dataWhereUniqueInput
  }


  /**
   * data deleteMany
   */
  export type dataDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which data to delete
     */
    where?: dataWhereInput
  }


  /**
   * data without action
   */
  export type dataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null
  }



  /**
   * Model project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProjectMinAggregateOutputType = {
    id: bigint | null
    project: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: bigint | null
    project: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    project: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    project?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    project?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    project?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: Enumerable<projectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: Enumerable<projectOrderByWithAggregationInput>
    by: ProjectScalarFieldEnum[]
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: bigint
    project: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project?: boolean
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    id?: boolean
    project?: boolean
  }


  type projectGetPayload<S extends boolean | null | undefined | projectArgs> = $Types.GetResult<projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<projectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends projectFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'project'> extends True ? Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends projectFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'project'> extends True ? Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends projectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<projectPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends projectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>
    ): Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {projectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends projectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends projectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>
    ): Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends projectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>
    ): Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends projectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends projectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends projectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>
    ): Prisma__projectClient<$Types.GetResult<projectPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * project base type for findUnique actions
   */
  export type projectFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUnique
   */
  export interface projectFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends projectFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }


  /**
   * project base type for findFirst actions
   */
  export type projectFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: Enumerable<projectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }

  /**
   * project findFirst
   */
  export interface projectFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends projectFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: Enumerable<projectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: Enumerable<projectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }


  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: Enumerable<projectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }


  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
  }


  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }


  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }


  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
  }


  /**
   * project without action
   */
  export type projectArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DataScalarFieldEnum: {
    id: 'id',
    project: 'project',
    date: 'date',
    category: 'category',
    gcs_path: 'gcs_path',
    geoserver_layer: 'geoserver_layer'
  };

  export type DataScalarFieldEnum = (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    project: 'project'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type dataWhereInput = {
    AND?: Enumerable<dataWhereInput>
    OR?: Enumerable<dataWhereInput>
    NOT?: Enumerable<dataWhereInput>
    id?: BigIntFilter | bigint | number
    project?: StringFilter | string
    date?: DateTimeFilter | Date | string
    category?: StringFilter | string
    gcs_path?: StringFilter | string
    geoserver_layer?: StringFilter | string
  }

  export type dataOrderByWithRelationInput = {
    id?: SortOrder
    project?: SortOrder
    date?: SortOrder
    category?: SortOrder
    gcs_path?: SortOrder
    geoserver_layer?: SortOrder
  }

  export type dataWhereUniqueInput = {
    id?: bigint | number
  }

  export type dataOrderByWithAggregationInput = {
    id?: SortOrder
    project?: SortOrder
    date?: SortOrder
    category?: SortOrder
    gcs_path?: SortOrder
    geoserver_layer?: SortOrder
    _count?: dataCountOrderByAggregateInput
    _avg?: dataAvgOrderByAggregateInput
    _max?: dataMaxOrderByAggregateInput
    _min?: dataMinOrderByAggregateInput
    _sum?: dataSumOrderByAggregateInput
  }

  export type dataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dataScalarWhereWithAggregatesInput>
    OR?: Enumerable<dataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dataScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    project?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    category?: StringWithAggregatesFilter | string
    gcs_path?: StringWithAggregatesFilter | string
    geoserver_layer?: StringWithAggregatesFilter | string
  }

  export type projectWhereInput = {
    AND?: Enumerable<projectWhereInput>
    OR?: Enumerable<projectWhereInput>
    NOT?: Enumerable<projectWhereInput>
    id?: BigIntFilter | bigint | number
    project?: StringFilter | string
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    project?: SortOrder
  }

  export type projectWhereUniqueInput = {
    id?: bigint | number
  }

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    project?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<projectScalarWhereWithAggregatesInput>
    OR?: Enumerable<projectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<projectScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    project?: StringWithAggregatesFilter | string
  }

  export type dataCreateInput = {
    id?: bigint | number
    project: string
    date: Date | string
    category: string
    gcs_path: string
    geoserver_layer: string
  }

  export type dataUncheckedCreateInput = {
    id?: bigint | number
    project: string
    date: Date | string
    category: string
    gcs_path: string
    geoserver_layer: string
  }

  export type dataUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    gcs_path?: StringFieldUpdateOperationsInput | string
    geoserver_layer?: StringFieldUpdateOperationsInput | string
  }

  export type dataUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    gcs_path?: StringFieldUpdateOperationsInput | string
    geoserver_layer?: StringFieldUpdateOperationsInput | string
  }

  export type dataCreateManyInput = {
    id?: bigint | number
    project: string
    date: Date | string
    category: string
    gcs_path: string
    geoserver_layer: string
  }

  export type dataUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    gcs_path?: StringFieldUpdateOperationsInput | string
    geoserver_layer?: StringFieldUpdateOperationsInput | string
  }

  export type dataUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    gcs_path?: StringFieldUpdateOperationsInput | string
    geoserver_layer?: StringFieldUpdateOperationsInput | string
  }

  export type projectCreateInput = {
    id?: bigint | number
    project: string
  }

  export type projectUncheckedCreateInput = {
    id?: bigint | number
    project: string
  }

  export type projectUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
  }

  export type projectUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
  }

  export type projectCreateManyInput = {
    id?: bigint | number
    project: string
  }

  export type projectUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type dataCountOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
    date?: SortOrder
    category?: SortOrder
    gcs_path?: SortOrder
    geoserver_layer?: SortOrder
  }

  export type dataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type dataMaxOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
    date?: SortOrder
    category?: SortOrder
    gcs_path?: SortOrder
    geoserver_layer?: SortOrder
  }

  export type dataMinOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
    date?: SortOrder
    category?: SortOrder
    gcs_path?: SortOrder
    geoserver_layer?: SortOrder
  }

  export type dataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}