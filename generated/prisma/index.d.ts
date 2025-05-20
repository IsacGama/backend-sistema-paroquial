
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model dizimistas
 * 
 */
export type dizimistas = $Result.DefaultSelection<Prisma.$dizimistasPayload>
/**
 * Model dizimos
 * 
 */
export type dizimos = $Result.DefaultSelection<Prisma.$dizimosPayload>
/**
 * Model funcionarios
 * 
 */
export type funcionarios = $Result.DefaultSelection<Prisma.$funcionariosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dizimistas
 * const dizimistas = await prisma.dizimistas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dizimistas
   * const dizimistas = await prisma.dizimistas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dizimistas`: Exposes CRUD operations for the **dizimistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dizimistas
    * const dizimistas = await prisma.dizimistas.findMany()
    * ```
    */
  get dizimistas(): Prisma.dizimistasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dizimos`: Exposes CRUD operations for the **dizimos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dizimos
    * const dizimos = await prisma.dizimos.findMany()
    * ```
    */
  get dizimos(): Prisma.dizimosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionarios`: Exposes CRUD operations for the **funcionarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionarios.findMany()
    * ```
    */
  get funcionarios(): Prisma.funcionariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    dizimistas: 'dizimistas',
    dizimos: 'dizimos',
    funcionarios: 'funcionarios',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dizimistas" | "dizimos" | "funcionarios" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      dizimistas: {
        payload: Prisma.$dizimistasPayload<ExtArgs>
        fields: Prisma.dizimistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dizimistasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dizimistasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>
          }
          findFirst: {
            args: Prisma.dizimistasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dizimistasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>
          }
          findMany: {
            args: Prisma.dizimistasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>[]
          }
          create: {
            args: Prisma.dizimistasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>
          }
          createMany: {
            args: Prisma.dizimistasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dizimistasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>[]
          }
          delete: {
            args: Prisma.dizimistasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>
          }
          update: {
            args: Prisma.dizimistasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>
          }
          deleteMany: {
            args: Prisma.dizimistasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dizimistasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dizimistasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>[]
          }
          upsert: {
            args: Prisma.dizimistasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimistasPayload>
          }
          aggregate: {
            args: Prisma.DizimistasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDizimistas>
          }
          groupBy: {
            args: Prisma.dizimistasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DizimistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.dizimistasCountArgs<ExtArgs>
            result: $Utils.Optional<DizimistasCountAggregateOutputType> | number
          }
        }
      }
      dizimos: {
        payload: Prisma.$dizimosPayload<ExtArgs>
        fields: Prisma.dizimosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dizimosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dizimosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>
          }
          findFirst: {
            args: Prisma.dizimosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dizimosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>
          }
          findMany: {
            args: Prisma.dizimosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>[]
          }
          create: {
            args: Prisma.dizimosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>
          }
          createMany: {
            args: Prisma.dizimosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dizimosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>[]
          }
          delete: {
            args: Prisma.dizimosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>
          }
          update: {
            args: Prisma.dizimosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>
          }
          deleteMany: {
            args: Prisma.dizimosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dizimosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dizimosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>[]
          }
          upsert: {
            args: Prisma.dizimosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dizimosPayload>
          }
          aggregate: {
            args: Prisma.DizimosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDizimos>
          }
          groupBy: {
            args: Prisma.dizimosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DizimosGroupByOutputType>[]
          }
          count: {
            args: Prisma.dizimosCountArgs<ExtArgs>
            result: $Utils.Optional<DizimosCountAggregateOutputType> | number
          }
        }
      }
      funcionarios: {
        payload: Prisma.$funcionariosPayload<ExtArgs>
        fields: Prisma.funcionariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funcionariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funcionariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          findFirst: {
            args: Prisma.funcionariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funcionariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          findMany: {
            args: Prisma.funcionariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>[]
          }
          create: {
            args: Prisma.funcionariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          createMany: {
            args: Prisma.funcionariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.funcionariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>[]
          }
          delete: {
            args: Prisma.funcionariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          update: {
            args: Prisma.funcionariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          deleteMany: {
            args: Prisma.funcionariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funcionariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.funcionariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>[]
          }
          upsert: {
            args: Prisma.funcionariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          aggregate: {
            args: Prisma.FuncionariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionarios>
          }
          groupBy: {
            args: Prisma.funcionariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.funcionariosCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dizimistas?: dizimistasOmit
    dizimos?: dizimosOmit
    funcionarios?: funcionariosOmit
    usuarios?: usuariosOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type DizimistasCountOutputType
   */

  export type DizimistasCountOutputType = {
    dizimos: number
  }

  export type DizimistasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dizimos?: boolean | DizimistasCountOutputTypeCountDizimosArgs
  }

  // Custom InputTypes
  /**
   * DizimistasCountOutputType without action
   */
  export type DizimistasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DizimistasCountOutputType
     */
    select?: DizimistasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DizimistasCountOutputType without action
   */
  export type DizimistasCountOutputTypeCountDizimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dizimosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    dizimistas: number
    funcionarios: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dizimistas?: boolean | UsuariosCountOutputTypeCountDizimistasArgs
    funcionarios?: boolean | UsuariosCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountDizimistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dizimistasWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionariosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model dizimistas
   */

  export type AggregateDizimistas = {
    _count: DizimistasCountAggregateOutputType | null
    _avg: DizimistasAvgAggregateOutputType | null
    _sum: DizimistasSumAggregateOutputType | null
    _min: DizimistasMinAggregateOutputType | null
    _max: DizimistasMaxAggregateOutputType | null
  }

  export type DizimistasAvgAggregateOutputType = {
    qtd_dizimos: number | null
    qtd_dizimos_seguidos: number | null
  }

  export type DizimistasSumAggregateOutputType = {
    qtd_dizimos: number | null
    qtd_dizimos_seguidos: number | null
  }

  export type DizimistasMinAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    qtd_dizimos: number | null
    qtd_dizimos_seguidos: number | null
    devolveu_dizimo_mes: boolean | null
    atualizado_em: Date | null
  }

  export type DizimistasMaxAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    qtd_dizimos: number | null
    qtd_dizimos_seguidos: number | null
    devolveu_dizimo_mes: boolean | null
    atualizado_em: Date | null
  }

  export type DizimistasCountAggregateOutputType = {
    id: number
    usuario_id: number
    qtd_dizimos: number
    qtd_dizimos_seguidos: number
    devolveu_dizimo_mes: number
    atualizado_em: number
    _all: number
  }


  export type DizimistasAvgAggregateInputType = {
    qtd_dizimos?: true
    qtd_dizimos_seguidos?: true
  }

  export type DizimistasSumAggregateInputType = {
    qtd_dizimos?: true
    qtd_dizimos_seguidos?: true
  }

  export type DizimistasMinAggregateInputType = {
    id?: true
    usuario_id?: true
    qtd_dizimos?: true
    qtd_dizimos_seguidos?: true
    devolveu_dizimo_mes?: true
    atualizado_em?: true
  }

  export type DizimistasMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    qtd_dizimos?: true
    qtd_dizimos_seguidos?: true
    devolveu_dizimo_mes?: true
    atualizado_em?: true
  }

  export type DizimistasCountAggregateInputType = {
    id?: true
    usuario_id?: true
    qtd_dizimos?: true
    qtd_dizimos_seguidos?: true
    devolveu_dizimo_mes?: true
    atualizado_em?: true
    _all?: true
  }

  export type DizimistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dizimistas to aggregate.
     */
    where?: dizimistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimistas to fetch.
     */
    orderBy?: dizimistasOrderByWithRelationInput | dizimistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dizimistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dizimistas
    **/
    _count?: true | DizimistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DizimistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DizimistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DizimistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DizimistasMaxAggregateInputType
  }

  export type GetDizimistasAggregateType<T extends DizimistasAggregateArgs> = {
        [P in keyof T & keyof AggregateDizimistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDizimistas[P]>
      : GetScalarType<T[P], AggregateDizimistas[P]>
  }




  export type dizimistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dizimistasWhereInput
    orderBy?: dizimistasOrderByWithAggregationInput | dizimistasOrderByWithAggregationInput[]
    by: DizimistasScalarFieldEnum[] | DizimistasScalarFieldEnum
    having?: dizimistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DizimistasCountAggregateInputType | true
    _avg?: DizimistasAvgAggregateInputType
    _sum?: DizimistasSumAggregateInputType
    _min?: DizimistasMinAggregateInputType
    _max?: DizimistasMaxAggregateInputType
  }

  export type DizimistasGroupByOutputType = {
    id: string
    usuario_id: string | null
    qtd_dizimos: number | null
    qtd_dizimos_seguidos: number | null
    devolveu_dizimo_mes: boolean | null
    atualizado_em: Date | null
    _count: DizimistasCountAggregateOutputType | null
    _avg: DizimistasAvgAggregateOutputType | null
    _sum: DizimistasSumAggregateOutputType | null
    _min: DizimistasMinAggregateOutputType | null
    _max: DizimistasMaxAggregateOutputType | null
  }

  type GetDizimistasGroupByPayload<T extends dizimistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DizimistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DizimistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DizimistasGroupByOutputType[P]>
            : GetScalarType<T[P], DizimistasGroupByOutputType[P]>
        }
      >
    >


  export type dizimistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    qtd_dizimos?: boolean
    qtd_dizimos_seguidos?: boolean
    devolveu_dizimo_mes?: boolean
    atualizado_em?: boolean
    usuarios?: boolean | dizimistas$usuariosArgs<ExtArgs>
    dizimos?: boolean | dizimistas$dizimosArgs<ExtArgs>
    _count?: boolean | DizimistasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dizimistas"]>

  export type dizimistasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    qtd_dizimos?: boolean
    qtd_dizimos_seguidos?: boolean
    devolveu_dizimo_mes?: boolean
    atualizado_em?: boolean
    usuarios?: boolean | dizimistas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["dizimistas"]>

  export type dizimistasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    qtd_dizimos?: boolean
    qtd_dizimos_seguidos?: boolean
    devolveu_dizimo_mes?: boolean
    atualizado_em?: boolean
    usuarios?: boolean | dizimistas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["dizimistas"]>

  export type dizimistasSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    qtd_dizimos?: boolean
    qtd_dizimos_seguidos?: boolean
    devolveu_dizimo_mes?: boolean
    atualizado_em?: boolean
  }

  export type dizimistasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "qtd_dizimos" | "qtd_dizimos_seguidos" | "devolveu_dizimo_mes" | "atualizado_em", ExtArgs["result"]["dizimistas"]>
  export type dizimistasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | dizimistas$usuariosArgs<ExtArgs>
    dizimos?: boolean | dizimistas$dizimosArgs<ExtArgs>
    _count?: boolean | DizimistasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dizimistasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | dizimistas$usuariosArgs<ExtArgs>
  }
  export type dizimistasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | dizimistas$usuariosArgs<ExtArgs>
  }

  export type $dizimistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dizimistas"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
      dizimos: Prisma.$dizimosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_id: string | null
      qtd_dizimos: number | null
      qtd_dizimos_seguidos: number | null
      devolveu_dizimo_mes: boolean | null
      atualizado_em: Date | null
    }, ExtArgs["result"]["dizimistas"]>
    composites: {}
  }

  type dizimistasGetPayload<S extends boolean | null | undefined | dizimistasDefaultArgs> = $Result.GetResult<Prisma.$dizimistasPayload, S>

  type dizimistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dizimistasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DizimistasCountAggregateInputType | true
    }

  export interface dizimistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dizimistas'], meta: { name: 'dizimistas' } }
    /**
     * Find zero or one Dizimistas that matches the filter.
     * @param {dizimistasFindUniqueArgs} args - Arguments to find a Dizimistas
     * @example
     * // Get one Dizimistas
     * const dizimistas = await prisma.dizimistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dizimistasFindUniqueArgs>(args: SelectSubset<T, dizimistasFindUniqueArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dizimistas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dizimistasFindUniqueOrThrowArgs} args - Arguments to find a Dizimistas
     * @example
     * // Get one Dizimistas
     * const dizimistas = await prisma.dizimistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dizimistasFindUniqueOrThrowArgs>(args: SelectSubset<T, dizimistasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dizimistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimistasFindFirstArgs} args - Arguments to find a Dizimistas
     * @example
     * // Get one Dizimistas
     * const dizimistas = await prisma.dizimistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dizimistasFindFirstArgs>(args?: SelectSubset<T, dizimistasFindFirstArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dizimistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimistasFindFirstOrThrowArgs} args - Arguments to find a Dizimistas
     * @example
     * // Get one Dizimistas
     * const dizimistas = await prisma.dizimistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dizimistasFindFirstOrThrowArgs>(args?: SelectSubset<T, dizimistasFindFirstOrThrowArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dizimistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimistasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dizimistas
     * const dizimistas = await prisma.dizimistas.findMany()
     * 
     * // Get first 10 Dizimistas
     * const dizimistas = await prisma.dizimistas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dizimistasWithIdOnly = await prisma.dizimistas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dizimistasFindManyArgs>(args?: SelectSubset<T, dizimistasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dizimistas.
     * @param {dizimistasCreateArgs} args - Arguments to create a Dizimistas.
     * @example
     * // Create one Dizimistas
     * const Dizimistas = await prisma.dizimistas.create({
     *   data: {
     *     // ... data to create a Dizimistas
     *   }
     * })
     * 
     */
    create<T extends dizimistasCreateArgs>(args: SelectSubset<T, dizimistasCreateArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dizimistas.
     * @param {dizimistasCreateManyArgs} args - Arguments to create many Dizimistas.
     * @example
     * // Create many Dizimistas
     * const dizimistas = await prisma.dizimistas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dizimistasCreateManyArgs>(args?: SelectSubset<T, dizimistasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dizimistas and returns the data saved in the database.
     * @param {dizimistasCreateManyAndReturnArgs} args - Arguments to create many Dizimistas.
     * @example
     * // Create many Dizimistas
     * const dizimistas = await prisma.dizimistas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dizimistas and only return the `id`
     * const dizimistasWithIdOnly = await prisma.dizimistas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dizimistasCreateManyAndReturnArgs>(args?: SelectSubset<T, dizimistasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dizimistas.
     * @param {dizimistasDeleteArgs} args - Arguments to delete one Dizimistas.
     * @example
     * // Delete one Dizimistas
     * const Dizimistas = await prisma.dizimistas.delete({
     *   where: {
     *     // ... filter to delete one Dizimistas
     *   }
     * })
     * 
     */
    delete<T extends dizimistasDeleteArgs>(args: SelectSubset<T, dizimistasDeleteArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dizimistas.
     * @param {dizimistasUpdateArgs} args - Arguments to update one Dizimistas.
     * @example
     * // Update one Dizimistas
     * const dizimistas = await prisma.dizimistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dizimistasUpdateArgs>(args: SelectSubset<T, dizimistasUpdateArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dizimistas.
     * @param {dizimistasDeleteManyArgs} args - Arguments to filter Dizimistas to delete.
     * @example
     * // Delete a few Dizimistas
     * const { count } = await prisma.dizimistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dizimistasDeleteManyArgs>(args?: SelectSubset<T, dizimistasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dizimistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dizimistas
     * const dizimistas = await prisma.dizimistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dizimistasUpdateManyArgs>(args: SelectSubset<T, dizimistasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dizimistas and returns the data updated in the database.
     * @param {dizimistasUpdateManyAndReturnArgs} args - Arguments to update many Dizimistas.
     * @example
     * // Update many Dizimistas
     * const dizimistas = await prisma.dizimistas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dizimistas and only return the `id`
     * const dizimistasWithIdOnly = await prisma.dizimistas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends dizimistasUpdateManyAndReturnArgs>(args: SelectSubset<T, dizimistasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dizimistas.
     * @param {dizimistasUpsertArgs} args - Arguments to update or create a Dizimistas.
     * @example
     * // Update or create a Dizimistas
     * const dizimistas = await prisma.dizimistas.upsert({
     *   create: {
     *     // ... data to create a Dizimistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dizimistas we want to update
     *   }
     * })
     */
    upsert<T extends dizimistasUpsertArgs>(args: SelectSubset<T, dizimistasUpsertArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dizimistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimistasCountArgs} args - Arguments to filter Dizimistas to count.
     * @example
     * // Count the number of Dizimistas
     * const count = await prisma.dizimistas.count({
     *   where: {
     *     // ... the filter for the Dizimistas we want to count
     *   }
     * })
    **/
    count<T extends dizimistasCountArgs>(
      args?: Subset<T, dizimistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DizimistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dizimistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DizimistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DizimistasAggregateArgs>(args: Subset<T, DizimistasAggregateArgs>): Prisma.PrismaPromise<GetDizimistasAggregateType<T>>

    /**
     * Group by Dizimistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimistasGroupByArgs} args - Group by arguments.
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
      T extends dizimistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dizimistasGroupByArgs['orderBy'] }
        : { orderBy?: dizimistasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, dizimistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDizimistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dizimistas model
   */
  readonly fields: dizimistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dizimistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dizimistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends dizimistas$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, dizimistas$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dizimos<T extends dizimistas$dizimosArgs<ExtArgs> = {}>(args?: Subset<T, dizimistas$dizimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dizimistas model
   */
  interface dizimistasFieldRefs {
    readonly id: FieldRef<"dizimistas", 'String'>
    readonly usuario_id: FieldRef<"dizimistas", 'String'>
    readonly qtd_dizimos: FieldRef<"dizimistas", 'Int'>
    readonly qtd_dizimos_seguidos: FieldRef<"dizimistas", 'Int'>
    readonly devolveu_dizimo_mes: FieldRef<"dizimistas", 'Boolean'>
    readonly atualizado_em: FieldRef<"dizimistas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * dizimistas findUnique
   */
  export type dizimistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * Filter, which dizimistas to fetch.
     */
    where: dizimistasWhereUniqueInput
  }

  /**
   * dizimistas findUniqueOrThrow
   */
  export type dizimistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * Filter, which dizimistas to fetch.
     */
    where: dizimistasWhereUniqueInput
  }

  /**
   * dizimistas findFirst
   */
  export type dizimistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * Filter, which dizimistas to fetch.
     */
    where?: dizimistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimistas to fetch.
     */
    orderBy?: dizimistasOrderByWithRelationInput | dizimistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dizimistas.
     */
    cursor?: dizimistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dizimistas.
     */
    distinct?: DizimistasScalarFieldEnum | DizimistasScalarFieldEnum[]
  }

  /**
   * dizimistas findFirstOrThrow
   */
  export type dizimistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * Filter, which dizimistas to fetch.
     */
    where?: dizimistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimistas to fetch.
     */
    orderBy?: dizimistasOrderByWithRelationInput | dizimistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dizimistas.
     */
    cursor?: dizimistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dizimistas.
     */
    distinct?: DizimistasScalarFieldEnum | DizimistasScalarFieldEnum[]
  }

  /**
   * dizimistas findMany
   */
  export type dizimistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * Filter, which dizimistas to fetch.
     */
    where?: dizimistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimistas to fetch.
     */
    orderBy?: dizimistasOrderByWithRelationInput | dizimistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dizimistas.
     */
    cursor?: dizimistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimistas.
     */
    skip?: number
    distinct?: DizimistasScalarFieldEnum | DizimistasScalarFieldEnum[]
  }

  /**
   * dizimistas create
   */
  export type dizimistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * The data needed to create a dizimistas.
     */
    data?: XOR<dizimistasCreateInput, dizimistasUncheckedCreateInput>
  }

  /**
   * dizimistas createMany
   */
  export type dizimistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dizimistas.
     */
    data: dizimistasCreateManyInput | dizimistasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dizimistas createManyAndReturn
   */
  export type dizimistasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * The data used to create many dizimistas.
     */
    data: dizimistasCreateManyInput | dizimistasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dizimistas update
   */
  export type dizimistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * The data needed to update a dizimistas.
     */
    data: XOR<dizimistasUpdateInput, dizimistasUncheckedUpdateInput>
    /**
     * Choose, which dizimistas to update.
     */
    where: dizimistasWhereUniqueInput
  }

  /**
   * dizimistas updateMany
   */
  export type dizimistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dizimistas.
     */
    data: XOR<dizimistasUpdateManyMutationInput, dizimistasUncheckedUpdateManyInput>
    /**
     * Filter which dizimistas to update
     */
    where?: dizimistasWhereInput
    /**
     * Limit how many dizimistas to update.
     */
    limit?: number
  }

  /**
   * dizimistas updateManyAndReturn
   */
  export type dizimistasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * The data used to update dizimistas.
     */
    data: XOR<dizimistasUpdateManyMutationInput, dizimistasUncheckedUpdateManyInput>
    /**
     * Filter which dizimistas to update
     */
    where?: dizimistasWhereInput
    /**
     * Limit how many dizimistas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * dizimistas upsert
   */
  export type dizimistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * The filter to search for the dizimistas to update in case it exists.
     */
    where: dizimistasWhereUniqueInput
    /**
     * In case the dizimistas found by the `where` argument doesn't exist, create a new dizimistas with this data.
     */
    create: XOR<dizimistasCreateInput, dizimistasUncheckedCreateInput>
    /**
     * In case the dizimistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dizimistasUpdateInput, dizimistasUncheckedUpdateInput>
  }

  /**
   * dizimistas delete
   */
  export type dizimistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    /**
     * Filter which dizimistas to delete.
     */
    where: dizimistasWhereUniqueInput
  }

  /**
   * dizimistas deleteMany
   */
  export type dizimistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dizimistas to delete
     */
    where?: dizimistasWhereInput
    /**
     * Limit how many dizimistas to delete.
     */
    limit?: number
  }

  /**
   * dizimistas.usuarios
   */
  export type dizimistas$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * dizimistas.dizimos
   */
  export type dizimistas$dizimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    where?: dizimosWhereInput
    orderBy?: dizimosOrderByWithRelationInput | dizimosOrderByWithRelationInput[]
    cursor?: dizimosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DizimosScalarFieldEnum | DizimosScalarFieldEnum[]
  }

  /**
   * dizimistas without action
   */
  export type dizimistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
  }


  /**
   * Model dizimos
   */

  export type AggregateDizimos = {
    _count: DizimosCountAggregateOutputType | null
    _avg: DizimosAvgAggregateOutputType | null
    _sum: DizimosSumAggregateOutputType | null
    _min: DizimosMinAggregateOutputType | null
    _max: DizimosMaxAggregateOutputType | null
  }

  export type DizimosAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type DizimosSumAggregateOutputType = {
    valor: Decimal | null
  }

  export type DizimosMinAggregateOutputType = {
    id: string | null
    dizimista_id: string | null
    valor: Decimal | null
    data_pagamento: Date | null
    forma_pagamento: string | null
    observacoes: string | null
  }

  export type DizimosMaxAggregateOutputType = {
    id: string | null
    dizimista_id: string | null
    valor: Decimal | null
    data_pagamento: Date | null
    forma_pagamento: string | null
    observacoes: string | null
  }

  export type DizimosCountAggregateOutputType = {
    id: number
    dizimista_id: number
    valor: number
    data_pagamento: number
    forma_pagamento: number
    observacoes: number
    _all: number
  }


  export type DizimosAvgAggregateInputType = {
    valor?: true
  }

  export type DizimosSumAggregateInputType = {
    valor?: true
  }

  export type DizimosMinAggregateInputType = {
    id?: true
    dizimista_id?: true
    valor?: true
    data_pagamento?: true
    forma_pagamento?: true
    observacoes?: true
  }

  export type DizimosMaxAggregateInputType = {
    id?: true
    dizimista_id?: true
    valor?: true
    data_pagamento?: true
    forma_pagamento?: true
    observacoes?: true
  }

  export type DizimosCountAggregateInputType = {
    id?: true
    dizimista_id?: true
    valor?: true
    data_pagamento?: true
    forma_pagamento?: true
    observacoes?: true
    _all?: true
  }

  export type DizimosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dizimos to aggregate.
     */
    where?: dizimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimos to fetch.
     */
    orderBy?: dizimosOrderByWithRelationInput | dizimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dizimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dizimos
    **/
    _count?: true | DizimosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DizimosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DizimosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DizimosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DizimosMaxAggregateInputType
  }

  export type GetDizimosAggregateType<T extends DizimosAggregateArgs> = {
        [P in keyof T & keyof AggregateDizimos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDizimos[P]>
      : GetScalarType<T[P], AggregateDizimos[P]>
  }




  export type dizimosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dizimosWhereInput
    orderBy?: dizimosOrderByWithAggregationInput | dizimosOrderByWithAggregationInput[]
    by: DizimosScalarFieldEnum[] | DizimosScalarFieldEnum
    having?: dizimosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DizimosCountAggregateInputType | true
    _avg?: DizimosAvgAggregateInputType
    _sum?: DizimosSumAggregateInputType
    _min?: DizimosMinAggregateInputType
    _max?: DizimosMaxAggregateInputType
  }

  export type DizimosGroupByOutputType = {
    id: string
    dizimista_id: string | null
    valor: Decimal | null
    data_pagamento: Date | null
    forma_pagamento: string | null
    observacoes: string | null
    _count: DizimosCountAggregateOutputType | null
    _avg: DizimosAvgAggregateOutputType | null
    _sum: DizimosSumAggregateOutputType | null
    _min: DizimosMinAggregateOutputType | null
    _max: DizimosMaxAggregateOutputType | null
  }

  type GetDizimosGroupByPayload<T extends dizimosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DizimosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DizimosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DizimosGroupByOutputType[P]>
            : GetScalarType<T[P], DizimosGroupByOutputType[P]>
        }
      >
    >


  export type dizimosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dizimista_id?: boolean
    valor?: boolean
    data_pagamento?: boolean
    forma_pagamento?: boolean
    observacoes?: boolean
    dizimistas?: boolean | dizimos$dizimistasArgs<ExtArgs>
  }, ExtArgs["result"]["dizimos"]>

  export type dizimosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dizimista_id?: boolean
    valor?: boolean
    data_pagamento?: boolean
    forma_pagamento?: boolean
    observacoes?: boolean
    dizimistas?: boolean | dizimos$dizimistasArgs<ExtArgs>
  }, ExtArgs["result"]["dizimos"]>

  export type dizimosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dizimista_id?: boolean
    valor?: boolean
    data_pagamento?: boolean
    forma_pagamento?: boolean
    observacoes?: boolean
    dizimistas?: boolean | dizimos$dizimistasArgs<ExtArgs>
  }, ExtArgs["result"]["dizimos"]>

  export type dizimosSelectScalar = {
    id?: boolean
    dizimista_id?: boolean
    valor?: boolean
    data_pagamento?: boolean
    forma_pagamento?: boolean
    observacoes?: boolean
  }

  export type dizimosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dizimista_id" | "valor" | "data_pagamento" | "forma_pagamento" | "observacoes", ExtArgs["result"]["dizimos"]>
  export type dizimosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dizimistas?: boolean | dizimos$dizimistasArgs<ExtArgs>
  }
  export type dizimosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dizimistas?: boolean | dizimos$dizimistasArgs<ExtArgs>
  }
  export type dizimosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dizimistas?: boolean | dizimos$dizimistasArgs<ExtArgs>
  }

  export type $dizimosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dizimos"
    objects: {
      dizimistas: Prisma.$dizimistasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dizimista_id: string | null
      valor: Prisma.Decimal | null
      data_pagamento: Date | null
      forma_pagamento: string | null
      observacoes: string | null
    }, ExtArgs["result"]["dizimos"]>
    composites: {}
  }

  type dizimosGetPayload<S extends boolean | null | undefined | dizimosDefaultArgs> = $Result.GetResult<Prisma.$dizimosPayload, S>

  type dizimosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dizimosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DizimosCountAggregateInputType | true
    }

  export interface dizimosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dizimos'], meta: { name: 'dizimos' } }
    /**
     * Find zero or one Dizimos that matches the filter.
     * @param {dizimosFindUniqueArgs} args - Arguments to find a Dizimos
     * @example
     * // Get one Dizimos
     * const dizimos = await prisma.dizimos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dizimosFindUniqueArgs>(args: SelectSubset<T, dizimosFindUniqueArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dizimos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dizimosFindUniqueOrThrowArgs} args - Arguments to find a Dizimos
     * @example
     * // Get one Dizimos
     * const dizimos = await prisma.dizimos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dizimosFindUniqueOrThrowArgs>(args: SelectSubset<T, dizimosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dizimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimosFindFirstArgs} args - Arguments to find a Dizimos
     * @example
     * // Get one Dizimos
     * const dizimos = await prisma.dizimos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dizimosFindFirstArgs>(args?: SelectSubset<T, dizimosFindFirstArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dizimos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimosFindFirstOrThrowArgs} args - Arguments to find a Dizimos
     * @example
     * // Get one Dizimos
     * const dizimos = await prisma.dizimos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dizimosFindFirstOrThrowArgs>(args?: SelectSubset<T, dizimosFindFirstOrThrowArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dizimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dizimos
     * const dizimos = await prisma.dizimos.findMany()
     * 
     * // Get first 10 Dizimos
     * const dizimos = await prisma.dizimos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dizimosWithIdOnly = await prisma.dizimos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dizimosFindManyArgs>(args?: SelectSubset<T, dizimosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dizimos.
     * @param {dizimosCreateArgs} args - Arguments to create a Dizimos.
     * @example
     * // Create one Dizimos
     * const Dizimos = await prisma.dizimos.create({
     *   data: {
     *     // ... data to create a Dizimos
     *   }
     * })
     * 
     */
    create<T extends dizimosCreateArgs>(args: SelectSubset<T, dizimosCreateArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dizimos.
     * @param {dizimosCreateManyArgs} args - Arguments to create many Dizimos.
     * @example
     * // Create many Dizimos
     * const dizimos = await prisma.dizimos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dizimosCreateManyArgs>(args?: SelectSubset<T, dizimosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dizimos and returns the data saved in the database.
     * @param {dizimosCreateManyAndReturnArgs} args - Arguments to create many Dizimos.
     * @example
     * // Create many Dizimos
     * const dizimos = await prisma.dizimos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dizimos and only return the `id`
     * const dizimosWithIdOnly = await prisma.dizimos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dizimosCreateManyAndReturnArgs>(args?: SelectSubset<T, dizimosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dizimos.
     * @param {dizimosDeleteArgs} args - Arguments to delete one Dizimos.
     * @example
     * // Delete one Dizimos
     * const Dizimos = await prisma.dizimos.delete({
     *   where: {
     *     // ... filter to delete one Dizimos
     *   }
     * })
     * 
     */
    delete<T extends dizimosDeleteArgs>(args: SelectSubset<T, dizimosDeleteArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dizimos.
     * @param {dizimosUpdateArgs} args - Arguments to update one Dizimos.
     * @example
     * // Update one Dizimos
     * const dizimos = await prisma.dizimos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dizimosUpdateArgs>(args: SelectSubset<T, dizimosUpdateArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dizimos.
     * @param {dizimosDeleteManyArgs} args - Arguments to filter Dizimos to delete.
     * @example
     * // Delete a few Dizimos
     * const { count } = await prisma.dizimos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dizimosDeleteManyArgs>(args?: SelectSubset<T, dizimosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dizimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dizimos
     * const dizimos = await prisma.dizimos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dizimosUpdateManyArgs>(args: SelectSubset<T, dizimosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dizimos and returns the data updated in the database.
     * @param {dizimosUpdateManyAndReturnArgs} args - Arguments to update many Dizimos.
     * @example
     * // Update many Dizimos
     * const dizimos = await prisma.dizimos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dizimos and only return the `id`
     * const dizimosWithIdOnly = await prisma.dizimos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends dizimosUpdateManyAndReturnArgs>(args: SelectSubset<T, dizimosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dizimos.
     * @param {dizimosUpsertArgs} args - Arguments to update or create a Dizimos.
     * @example
     * // Update or create a Dizimos
     * const dizimos = await prisma.dizimos.upsert({
     *   create: {
     *     // ... data to create a Dizimos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dizimos we want to update
     *   }
     * })
     */
    upsert<T extends dizimosUpsertArgs>(args: SelectSubset<T, dizimosUpsertArgs<ExtArgs>>): Prisma__dizimosClient<$Result.GetResult<Prisma.$dizimosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dizimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimosCountArgs} args - Arguments to filter Dizimos to count.
     * @example
     * // Count the number of Dizimos
     * const count = await prisma.dizimos.count({
     *   where: {
     *     // ... the filter for the Dizimos we want to count
     *   }
     * })
    **/
    count<T extends dizimosCountArgs>(
      args?: Subset<T, dizimosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DizimosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dizimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DizimosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DizimosAggregateArgs>(args: Subset<T, DizimosAggregateArgs>): Prisma.PrismaPromise<GetDizimosAggregateType<T>>

    /**
     * Group by Dizimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dizimosGroupByArgs} args - Group by arguments.
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
      T extends dizimosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dizimosGroupByArgs['orderBy'] }
        : { orderBy?: dizimosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, dizimosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDizimosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dizimos model
   */
  readonly fields: dizimosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dizimos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dizimosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dizimistas<T extends dizimos$dizimistasArgs<ExtArgs> = {}>(args?: Subset<T, dizimos$dizimistasArgs<ExtArgs>>): Prisma__dizimistasClient<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dizimos model
   */
  interface dizimosFieldRefs {
    readonly id: FieldRef<"dizimos", 'String'>
    readonly dizimista_id: FieldRef<"dizimos", 'String'>
    readonly valor: FieldRef<"dizimos", 'Decimal'>
    readonly data_pagamento: FieldRef<"dizimos", 'DateTime'>
    readonly forma_pagamento: FieldRef<"dizimos", 'String'>
    readonly observacoes: FieldRef<"dizimos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dizimos findUnique
   */
  export type dizimosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * Filter, which dizimos to fetch.
     */
    where: dizimosWhereUniqueInput
  }

  /**
   * dizimos findUniqueOrThrow
   */
  export type dizimosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * Filter, which dizimos to fetch.
     */
    where: dizimosWhereUniqueInput
  }

  /**
   * dizimos findFirst
   */
  export type dizimosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * Filter, which dizimos to fetch.
     */
    where?: dizimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimos to fetch.
     */
    orderBy?: dizimosOrderByWithRelationInput | dizimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dizimos.
     */
    cursor?: dizimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dizimos.
     */
    distinct?: DizimosScalarFieldEnum | DizimosScalarFieldEnum[]
  }

  /**
   * dizimos findFirstOrThrow
   */
  export type dizimosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * Filter, which dizimos to fetch.
     */
    where?: dizimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimos to fetch.
     */
    orderBy?: dizimosOrderByWithRelationInput | dizimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dizimos.
     */
    cursor?: dizimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dizimos.
     */
    distinct?: DizimosScalarFieldEnum | DizimosScalarFieldEnum[]
  }

  /**
   * dizimos findMany
   */
  export type dizimosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * Filter, which dizimos to fetch.
     */
    where?: dizimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dizimos to fetch.
     */
    orderBy?: dizimosOrderByWithRelationInput | dizimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dizimos.
     */
    cursor?: dizimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dizimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dizimos.
     */
    skip?: number
    distinct?: DizimosScalarFieldEnum | DizimosScalarFieldEnum[]
  }

  /**
   * dizimos create
   */
  export type dizimosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * The data needed to create a dizimos.
     */
    data?: XOR<dizimosCreateInput, dizimosUncheckedCreateInput>
  }

  /**
   * dizimos createMany
   */
  export type dizimosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dizimos.
     */
    data: dizimosCreateManyInput | dizimosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dizimos createManyAndReturn
   */
  export type dizimosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * The data used to create many dizimos.
     */
    data: dizimosCreateManyInput | dizimosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dizimos update
   */
  export type dizimosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * The data needed to update a dizimos.
     */
    data: XOR<dizimosUpdateInput, dizimosUncheckedUpdateInput>
    /**
     * Choose, which dizimos to update.
     */
    where: dizimosWhereUniqueInput
  }

  /**
   * dizimos updateMany
   */
  export type dizimosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dizimos.
     */
    data: XOR<dizimosUpdateManyMutationInput, dizimosUncheckedUpdateManyInput>
    /**
     * Filter which dizimos to update
     */
    where?: dizimosWhereInput
    /**
     * Limit how many dizimos to update.
     */
    limit?: number
  }

  /**
   * dizimos updateManyAndReturn
   */
  export type dizimosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * The data used to update dizimos.
     */
    data: XOR<dizimosUpdateManyMutationInput, dizimosUncheckedUpdateManyInput>
    /**
     * Filter which dizimos to update
     */
    where?: dizimosWhereInput
    /**
     * Limit how many dizimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * dizimos upsert
   */
  export type dizimosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * The filter to search for the dizimos to update in case it exists.
     */
    where: dizimosWhereUniqueInput
    /**
     * In case the dizimos found by the `where` argument doesn't exist, create a new dizimos with this data.
     */
    create: XOR<dizimosCreateInput, dizimosUncheckedCreateInput>
    /**
     * In case the dizimos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dizimosUpdateInput, dizimosUncheckedUpdateInput>
  }

  /**
   * dizimos delete
   */
  export type dizimosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
    /**
     * Filter which dizimos to delete.
     */
    where: dizimosWhereUniqueInput
  }

  /**
   * dizimos deleteMany
   */
  export type dizimosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dizimos to delete
     */
    where?: dizimosWhereInput
    /**
     * Limit how many dizimos to delete.
     */
    limit?: number
  }

  /**
   * dizimos.dizimistas
   */
  export type dizimos$dizimistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    where?: dizimistasWhereInput
  }

  /**
   * dizimos without action
   */
  export type dizimosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimos
     */
    select?: dizimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimos
     */
    omit?: dizimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimosInclude<ExtArgs> | null
  }


  /**
   * Model funcionarios
   */

  export type AggregateFuncionarios = {
    _count: FuncionariosCountAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  export type FuncionariosMinAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    cargo: string | null
    contratado_em: Date | null
  }

  export type FuncionariosMaxAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    cargo: string | null
    contratado_em: Date | null
  }

  export type FuncionariosCountAggregateOutputType = {
    id: number
    usuario_id: number
    cargo: number
    contratado_em: number
    _all: number
  }


  export type FuncionariosMinAggregateInputType = {
    id?: true
    usuario_id?: true
    cargo?: true
    contratado_em?: true
  }

  export type FuncionariosMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    cargo?: true
    contratado_em?: true
  }

  export type FuncionariosCountAggregateInputType = {
    id?: true
    usuario_id?: true
    cargo?: true
    contratado_em?: true
    _all?: true
  }

  export type FuncionariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to aggregate.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funcionarios
    **/
    _count?: true | FuncionariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionariosMaxAggregateInputType
  }

  export type GetFuncionariosAggregateType<T extends FuncionariosAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionarios[P]>
      : GetScalarType<T[P], AggregateFuncionarios[P]>
  }




  export type funcionariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionariosWhereInput
    orderBy?: funcionariosOrderByWithAggregationInput | funcionariosOrderByWithAggregationInput[]
    by: FuncionariosScalarFieldEnum[] | FuncionariosScalarFieldEnum
    having?: funcionariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionariosCountAggregateInputType | true
    _min?: FuncionariosMinAggregateInputType
    _max?: FuncionariosMaxAggregateInputType
  }

  export type FuncionariosGroupByOutputType = {
    id: string
    usuario_id: string | null
    cargo: string
    contratado_em: Date | null
    _count: FuncionariosCountAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  type GetFuncionariosGroupByPayload<T extends funcionariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
        }
      >
    >


  export type funcionariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cargo?: boolean
    contratado_em?: boolean
    usuarios?: boolean | funcionarios$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type funcionariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cargo?: boolean
    contratado_em?: boolean
    usuarios?: boolean | funcionarios$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type funcionariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cargo?: boolean
    contratado_em?: boolean
    usuarios?: boolean | funcionarios$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type funcionariosSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    cargo?: boolean
    contratado_em?: boolean
  }

  export type funcionariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "cargo" | "contratado_em", ExtArgs["result"]["funcionarios"]>
  export type funcionariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | funcionarios$usuariosArgs<ExtArgs>
  }
  export type funcionariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | funcionarios$usuariosArgs<ExtArgs>
  }
  export type funcionariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | funcionarios$usuariosArgs<ExtArgs>
  }

  export type $funcionariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funcionarios"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_id: string | null
      cargo: string
      contratado_em: Date | null
    }, ExtArgs["result"]["funcionarios"]>
    composites: {}
  }

  type funcionariosGetPayload<S extends boolean | null | undefined | funcionariosDefaultArgs> = $Result.GetResult<Prisma.$funcionariosPayload, S>

  type funcionariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funcionariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionariosCountAggregateInputType | true
    }

  export interface funcionariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funcionarios'], meta: { name: 'funcionarios' } }
    /**
     * Find zero or one Funcionarios that matches the filter.
     * @param {funcionariosFindUniqueArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funcionariosFindUniqueArgs>(args: SelectSubset<T, funcionariosFindUniqueArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funcionariosFindUniqueOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funcionariosFindUniqueOrThrowArgs>(args: SelectSubset<T, funcionariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosFindFirstArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funcionariosFindFirstArgs>(args?: SelectSubset<T, funcionariosFindFirstArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosFindFirstOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funcionariosFindFirstOrThrowArgs>(args?: SelectSubset<T, funcionariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends funcionariosFindManyArgs>(args?: SelectSubset<T, funcionariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionarios.
     * @param {funcionariosCreateArgs} args - Arguments to create a Funcionarios.
     * @example
     * // Create one Funcionarios
     * const Funcionarios = await prisma.funcionarios.create({
     *   data: {
     *     // ... data to create a Funcionarios
     *   }
     * })
     * 
     */
    create<T extends funcionariosCreateArgs>(args: SelectSubset<T, funcionariosCreateArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {funcionariosCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funcionariosCreateManyArgs>(args?: SelectSubset<T, funcionariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {funcionariosCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends funcionariosCreateManyAndReturnArgs>(args?: SelectSubset<T, funcionariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionarios.
     * @param {funcionariosDeleteArgs} args - Arguments to delete one Funcionarios.
     * @example
     * // Delete one Funcionarios
     * const Funcionarios = await prisma.funcionarios.delete({
     *   where: {
     *     // ... filter to delete one Funcionarios
     *   }
     * })
     * 
     */
    delete<T extends funcionariosDeleteArgs>(args: SelectSubset<T, funcionariosDeleteArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionarios.
     * @param {funcionariosUpdateArgs} args - Arguments to update one Funcionarios.
     * @example
     * // Update one Funcionarios
     * const funcionarios = await prisma.funcionarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funcionariosUpdateArgs>(args: SelectSubset<T, funcionariosUpdateArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {funcionariosDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funcionariosDeleteManyArgs>(args?: SelectSubset<T, funcionariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funcionariosUpdateManyArgs>(args: SelectSubset<T, funcionariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {funcionariosUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends funcionariosUpdateManyAndReturnArgs>(args: SelectSubset<T, funcionariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionarios.
     * @param {funcionariosUpsertArgs} args - Arguments to update or create a Funcionarios.
     * @example
     * // Update or create a Funcionarios
     * const funcionarios = await prisma.funcionarios.upsert({
     *   create: {
     *     // ... data to create a Funcionarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionarios we want to update
     *   }
     * })
     */
    upsert<T extends funcionariosUpsertArgs>(args: SelectSubset<T, funcionariosUpsertArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionarios.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends funcionariosCountArgs>(
      args?: Subset<T, funcionariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionariosAggregateArgs>(args: Subset<T, FuncionariosAggregateArgs>): Prisma.PrismaPromise<GetFuncionariosAggregateType<T>>

    /**
     * Group by Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosGroupByArgs} args - Group by arguments.
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
      T extends funcionariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funcionariosGroupByArgs['orderBy'] }
        : { orderBy?: funcionariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, funcionariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funcionarios model
   */
  readonly fields: funcionariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funcionarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funcionariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends funcionarios$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, funcionarios$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the funcionarios model
   */
  interface funcionariosFieldRefs {
    readonly id: FieldRef<"funcionarios", 'String'>
    readonly usuario_id: FieldRef<"funcionarios", 'String'>
    readonly cargo: FieldRef<"funcionarios", 'String'>
    readonly contratado_em: FieldRef<"funcionarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * funcionarios findUnique
   */
  export type funcionariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios findUniqueOrThrow
   */
  export type funcionariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios findFirst
   */
  export type funcionariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * funcionarios findFirstOrThrow
   */
  export type funcionariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * funcionarios findMany
   */
  export type funcionariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funcionarios.
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * funcionarios create
   */
  export type funcionariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * The data needed to create a funcionarios.
     */
    data: XOR<funcionariosCreateInput, funcionariosUncheckedCreateInput>
  }

  /**
   * funcionarios createMany
   */
  export type funcionariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funcionarios.
     */
    data: funcionariosCreateManyInput | funcionariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funcionarios createManyAndReturn
   */
  export type funcionariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * The data used to create many funcionarios.
     */
    data: funcionariosCreateManyInput | funcionariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionarios update
   */
  export type funcionariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * The data needed to update a funcionarios.
     */
    data: XOR<funcionariosUpdateInput, funcionariosUncheckedUpdateInput>
    /**
     * Choose, which funcionarios to update.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios updateMany
   */
  export type funcionariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionariosUpdateManyMutationInput, funcionariosUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionariosWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
  }

  /**
   * funcionarios updateManyAndReturn
   */
  export type funcionariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionariosUpdateManyMutationInput, funcionariosUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionariosWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionarios upsert
   */
  export type funcionariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * The filter to search for the funcionarios to update in case it exists.
     */
    where: funcionariosWhereUniqueInput
    /**
     * In case the funcionarios found by the `where` argument doesn't exist, create a new funcionarios with this data.
     */
    create: XOR<funcionariosCreateInput, funcionariosUncheckedCreateInput>
    /**
     * In case the funcionarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funcionariosUpdateInput, funcionariosUncheckedUpdateInput>
  }

  /**
   * funcionarios delete
   */
  export type funcionariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter which funcionarios to delete.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios deleteMany
   */
  export type funcionariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to delete
     */
    where?: funcionariosWhereInput
    /**
     * Limit how many funcionarios to delete.
     */
    limit?: number
  }

  /**
   * funcionarios.usuarios
   */
  export type funcionarios$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * funcionarios without action
   */
  export type funcionariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    data_nascimento: Date | null
    endereco: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    comunidade: string | null
    eh_dizimista: boolean | null
    eh_funcionario: boolean | null
    pastoral: string | null
    criado_em: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    data_nascimento: Date | null
    endereco: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    comunidade: string | null
    eh_dizimista: boolean | null
    eh_funcionario: boolean | null
    pastoral: string | null
    criado_em: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    data_nascimento: number
    endereco: number
    email: number
    senha: number
    telefone: number
    comunidade: number
    eh_dizimista: number
    eh_funcionario: number
    pastoral: number
    criado_em: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    endereco?: true
    email?: true
    senha?: true
    telefone?: true
    comunidade?: true
    eh_dizimista?: true
    eh_funcionario?: true
    pastoral?: true
    criado_em?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    endereco?: true
    email?: true
    senha?: true
    telefone?: true
    comunidade?: true
    eh_dizimista?: true
    eh_funcionario?: true
    pastoral?: true
    criado_em?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    endereco?: true
    email?: true
    senha?: true
    telefone?: true
    comunidade?: true
    eh_dizimista?: true
    eh_funcionario?: true
    pastoral?: true
    criado_em?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    nome: string
    cpf: string | null
    data_nascimento: Date | null
    endereco: string | null
    email: string | null
    senha: string
    telefone: string | null
    comunidade: string | null
    eh_dizimista: boolean | null
    eh_funcionario: boolean | null
    pastoral: string | null
    criado_em: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    comunidade?: boolean
    eh_dizimista?: boolean
    eh_funcionario?: boolean
    pastoral?: boolean
    criado_em?: boolean
    dizimistas?: boolean | usuarios$dizimistasArgs<ExtArgs>
    funcionarios?: boolean | usuarios$funcionariosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    comunidade?: boolean
    eh_dizimista?: boolean
    eh_funcionario?: boolean
    pastoral?: boolean
    criado_em?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    comunidade?: boolean
    eh_dizimista?: boolean
    eh_funcionario?: boolean
    pastoral?: boolean
    criado_em?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    comunidade?: boolean
    eh_dizimista?: boolean
    eh_funcionario?: boolean
    pastoral?: boolean
    criado_em?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "data_nascimento" | "endereco" | "email" | "senha" | "telefone" | "comunidade" | "eh_dizimista" | "eh_funcionario" | "pastoral" | "criado_em", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dizimistas?: boolean | usuarios$dizimistasArgs<ExtArgs>
    funcionarios?: boolean | usuarios$funcionariosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      dizimistas: Prisma.$dizimistasPayload<ExtArgs>[]
      funcionarios: Prisma.$funcionariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string | null
      data_nascimento: Date | null
      endereco: string | null
      email: string | null
      senha: string
      telefone: string | null
      comunidade: string | null
      eh_dizimista: boolean | null
      eh_funcionario: boolean | null
      pastoral: string | null
      criado_em: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dizimistas<T extends usuarios$dizimistasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$dizimistasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dizimistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    funcionarios<T extends usuarios$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'String'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly cpf: FieldRef<"usuarios", 'String'>
    readonly data_nascimento: FieldRef<"usuarios", 'DateTime'>
    readonly endereco: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly telefone: FieldRef<"usuarios", 'String'>
    readonly comunidade: FieldRef<"usuarios", 'String'>
    readonly eh_dizimista: FieldRef<"usuarios", 'Boolean'>
    readonly eh_funcionario: FieldRef<"usuarios", 'Boolean'>
    readonly pastoral: FieldRef<"usuarios", 'String'>
    readonly criado_em: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.dizimistas
   */
  export type usuarios$dizimistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dizimistas
     */
    select?: dizimistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dizimistas
     */
    omit?: dizimistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dizimistasInclude<ExtArgs> | null
    where?: dizimistasWhereInput
    orderBy?: dizimistasOrderByWithRelationInput | dizimistasOrderByWithRelationInput[]
    cursor?: dizimistasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DizimistasScalarFieldEnum | DizimistasScalarFieldEnum[]
  }

  /**
   * usuarios.funcionarios
   */
  export type usuarios$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    where?: funcionariosWhereInput
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    cursor?: funcionariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DizimistasScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    qtd_dizimos: 'qtd_dizimos',
    qtd_dizimos_seguidos: 'qtd_dizimos_seguidos',
    devolveu_dizimo_mes: 'devolveu_dizimo_mes',
    atualizado_em: 'atualizado_em'
  };

  export type DizimistasScalarFieldEnum = (typeof DizimistasScalarFieldEnum)[keyof typeof DizimistasScalarFieldEnum]


  export const DizimosScalarFieldEnum: {
    id: 'id',
    dizimista_id: 'dizimista_id',
    valor: 'valor',
    data_pagamento: 'data_pagamento',
    forma_pagamento: 'forma_pagamento',
    observacoes: 'observacoes'
  };

  export type DizimosScalarFieldEnum = (typeof DizimosScalarFieldEnum)[keyof typeof DizimosScalarFieldEnum]


  export const FuncionariosScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    cargo: 'cargo',
    contratado_em: 'contratado_em'
  };

  export type FuncionariosScalarFieldEnum = (typeof FuncionariosScalarFieldEnum)[keyof typeof FuncionariosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    data_nascimento: 'data_nascimento',
    endereco: 'endereco',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    comunidade: 'comunidade',
    eh_dizimista: 'eh_dizimista',
    eh_funcionario: 'eh_funcionario',
    pastoral: 'pastoral',
    criado_em: 'criado_em'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type dizimistasWhereInput = {
    AND?: dizimistasWhereInput | dizimistasWhereInput[]
    OR?: dizimistasWhereInput[]
    NOT?: dizimistasWhereInput | dizimistasWhereInput[]
    id?: UuidFilter<"dizimistas"> | string
    usuario_id?: UuidNullableFilter<"dizimistas"> | string | null
    qtd_dizimos?: IntNullableFilter<"dizimistas"> | number | null
    qtd_dizimos_seguidos?: IntNullableFilter<"dizimistas"> | number | null
    devolveu_dizimo_mes?: BoolNullableFilter<"dizimistas"> | boolean | null
    atualizado_em?: DateTimeNullableFilter<"dizimistas"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    dizimos?: DizimosListRelationFilter
  }

  export type dizimistasOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    qtd_dizimos?: SortOrderInput | SortOrder
    qtd_dizimos_seguidos?: SortOrderInput | SortOrder
    devolveu_dizimo_mes?: SortOrderInput | SortOrder
    atualizado_em?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    dizimos?: dizimosOrderByRelationAggregateInput
  }

  export type dizimistasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: dizimistasWhereInput | dizimistasWhereInput[]
    OR?: dizimistasWhereInput[]
    NOT?: dizimistasWhereInput | dizimistasWhereInput[]
    usuario_id?: UuidNullableFilter<"dizimistas"> | string | null
    qtd_dizimos?: IntNullableFilter<"dizimistas"> | number | null
    qtd_dizimos_seguidos?: IntNullableFilter<"dizimistas"> | number | null
    devolveu_dizimo_mes?: BoolNullableFilter<"dizimistas"> | boolean | null
    atualizado_em?: DateTimeNullableFilter<"dizimistas"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    dizimos?: DizimosListRelationFilter
  }, "id">

  export type dizimistasOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    qtd_dizimos?: SortOrderInput | SortOrder
    qtd_dizimos_seguidos?: SortOrderInput | SortOrder
    devolveu_dizimo_mes?: SortOrderInput | SortOrder
    atualizado_em?: SortOrderInput | SortOrder
    _count?: dizimistasCountOrderByAggregateInput
    _avg?: dizimistasAvgOrderByAggregateInput
    _max?: dizimistasMaxOrderByAggregateInput
    _min?: dizimistasMinOrderByAggregateInput
    _sum?: dizimistasSumOrderByAggregateInput
  }

  export type dizimistasScalarWhereWithAggregatesInput = {
    AND?: dizimistasScalarWhereWithAggregatesInput | dizimistasScalarWhereWithAggregatesInput[]
    OR?: dizimistasScalarWhereWithAggregatesInput[]
    NOT?: dizimistasScalarWhereWithAggregatesInput | dizimistasScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"dizimistas"> | string
    usuario_id?: UuidNullableWithAggregatesFilter<"dizimistas"> | string | null
    qtd_dizimos?: IntNullableWithAggregatesFilter<"dizimistas"> | number | null
    qtd_dizimos_seguidos?: IntNullableWithAggregatesFilter<"dizimistas"> | number | null
    devolveu_dizimo_mes?: BoolNullableWithAggregatesFilter<"dizimistas"> | boolean | null
    atualizado_em?: DateTimeNullableWithAggregatesFilter<"dizimistas"> | Date | string | null
  }

  export type dizimosWhereInput = {
    AND?: dizimosWhereInput | dizimosWhereInput[]
    OR?: dizimosWhereInput[]
    NOT?: dizimosWhereInput | dizimosWhereInput[]
    id?: UuidFilter<"dizimos"> | string
    dizimista_id?: UuidNullableFilter<"dizimos"> | string | null
    valor?: DecimalNullableFilter<"dizimos"> | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: DateTimeNullableFilter<"dizimos"> | Date | string | null
    forma_pagamento?: StringNullableFilter<"dizimos"> | string | null
    observacoes?: StringNullableFilter<"dizimos"> | string | null
    dizimistas?: XOR<DizimistasNullableScalarRelationFilter, dizimistasWhereInput> | null
  }

  export type dizimosOrderByWithRelationInput = {
    id?: SortOrder
    dizimista_id?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    dizimistas?: dizimistasOrderByWithRelationInput
  }

  export type dizimosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: dizimosWhereInput | dizimosWhereInput[]
    OR?: dizimosWhereInput[]
    NOT?: dizimosWhereInput | dizimosWhereInput[]
    dizimista_id?: UuidNullableFilter<"dizimos"> | string | null
    valor?: DecimalNullableFilter<"dizimos"> | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: DateTimeNullableFilter<"dizimos"> | Date | string | null
    forma_pagamento?: StringNullableFilter<"dizimos"> | string | null
    observacoes?: StringNullableFilter<"dizimos"> | string | null
    dizimistas?: XOR<DizimistasNullableScalarRelationFilter, dizimistasWhereInput> | null
  }, "id">

  export type dizimosOrderByWithAggregationInput = {
    id?: SortOrder
    dizimista_id?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    _count?: dizimosCountOrderByAggregateInput
    _avg?: dizimosAvgOrderByAggregateInput
    _max?: dizimosMaxOrderByAggregateInput
    _min?: dizimosMinOrderByAggregateInput
    _sum?: dizimosSumOrderByAggregateInput
  }

  export type dizimosScalarWhereWithAggregatesInput = {
    AND?: dizimosScalarWhereWithAggregatesInput | dizimosScalarWhereWithAggregatesInput[]
    OR?: dizimosScalarWhereWithAggregatesInput[]
    NOT?: dizimosScalarWhereWithAggregatesInput | dizimosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"dizimos"> | string
    dizimista_id?: UuidNullableWithAggregatesFilter<"dizimos"> | string | null
    valor?: DecimalNullableWithAggregatesFilter<"dizimos"> | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: DateTimeNullableWithAggregatesFilter<"dizimos"> | Date | string | null
    forma_pagamento?: StringNullableWithAggregatesFilter<"dizimos"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"dizimos"> | string | null
  }

  export type funcionariosWhereInput = {
    AND?: funcionariosWhereInput | funcionariosWhereInput[]
    OR?: funcionariosWhereInput[]
    NOT?: funcionariosWhereInput | funcionariosWhereInput[]
    id?: UuidFilter<"funcionarios"> | string
    usuario_id?: UuidNullableFilter<"funcionarios"> | string | null
    cargo?: StringFilter<"funcionarios"> | string
    contratado_em?: DateTimeNullableFilter<"funcionarios"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type funcionariosOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    cargo?: SortOrder
    contratado_em?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type funcionariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: funcionariosWhereInput | funcionariosWhereInput[]
    OR?: funcionariosWhereInput[]
    NOT?: funcionariosWhereInput | funcionariosWhereInput[]
    usuario_id?: UuidNullableFilter<"funcionarios"> | string | null
    cargo?: StringFilter<"funcionarios"> | string
    contratado_em?: DateTimeNullableFilter<"funcionarios"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id">

  export type funcionariosOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    cargo?: SortOrder
    contratado_em?: SortOrderInput | SortOrder
    _count?: funcionariosCountOrderByAggregateInput
    _max?: funcionariosMaxOrderByAggregateInput
    _min?: funcionariosMinOrderByAggregateInput
  }

  export type funcionariosScalarWhereWithAggregatesInput = {
    AND?: funcionariosScalarWhereWithAggregatesInput | funcionariosScalarWhereWithAggregatesInput[]
    OR?: funcionariosScalarWhereWithAggregatesInput[]
    NOT?: funcionariosScalarWhereWithAggregatesInput | funcionariosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"funcionarios"> | string
    usuario_id?: UuidNullableWithAggregatesFilter<"funcionarios"> | string | null
    cargo?: StringWithAggregatesFilter<"funcionarios"> | string
    contratado_em?: DateTimeNullableWithAggregatesFilter<"funcionarios"> | Date | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: UuidFilter<"usuarios"> | string
    nome?: StringFilter<"usuarios"> | string
    cpf?: StringNullableFilter<"usuarios"> | string | null
    data_nascimento?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    endereco?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringFilter<"usuarios"> | string
    telefone?: StringNullableFilter<"usuarios"> | string | null
    comunidade?: StringNullableFilter<"usuarios"> | string | null
    eh_dizimista?: BoolNullableFilter<"usuarios"> | boolean | null
    eh_funcionario?: BoolNullableFilter<"usuarios"> | boolean | null
    pastoral?: StringNullableFilter<"usuarios"> | string | null
    criado_em?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    dizimistas?: DizimistasListRelationFilter
    funcionarios?: FuncionariosListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    comunidade?: SortOrderInput | SortOrder
    eh_dizimista?: SortOrderInput | SortOrder
    eh_funcionario?: SortOrderInput | SortOrder
    pastoral?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    dizimistas?: dizimistasOrderByRelationAggregateInput
    funcionarios?: funcionariosOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    endereco?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringFilter<"usuarios"> | string
    telefone?: StringNullableFilter<"usuarios"> | string | null
    comunidade?: StringNullableFilter<"usuarios"> | string | null
    eh_dizimista?: BoolNullableFilter<"usuarios"> | boolean | null
    eh_funcionario?: BoolNullableFilter<"usuarios"> | boolean | null
    pastoral?: StringNullableFilter<"usuarios"> | string | null
    criado_em?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    dizimistas?: DizimistasListRelationFilter
    funcionarios?: FuncionariosListRelationFilter
  }, "id" | "cpf" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    comunidade?: SortOrderInput | SortOrder
    eh_dizimista?: SortOrderInput | SortOrder
    eh_funcionario?: SortOrderInput | SortOrder
    pastoral?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"usuarios"> | string
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    cpf?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    endereco?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    telefone?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    comunidade?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    eh_dizimista?: BoolNullableWithAggregatesFilter<"usuarios"> | boolean | null
    eh_funcionario?: BoolNullableWithAggregatesFilter<"usuarios"> | boolean | null
    pastoral?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    criado_em?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type dizimistasCreateInput = {
    id?: string
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutDizimistasInput
    dizimos?: dizimosCreateNestedManyWithoutDizimistasInput
  }

  export type dizimistasUncheckedCreateInput = {
    id?: string
    usuario_id?: string | null
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
    dizimos?: dizimosUncheckedCreateNestedManyWithoutDizimistasInput
  }

  export type dizimistasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutDizimistasNestedInput
    dizimos?: dizimosUpdateManyWithoutDizimistasNestedInput
  }

  export type dizimistasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dizimos?: dizimosUncheckedUpdateManyWithoutDizimistasNestedInput
  }

  export type dizimistasCreateManyInput = {
    id?: string
    usuario_id?: string | null
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
  }

  export type dizimistasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dizimistasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dizimosCreateInput = {
    id?: string
    valor?: Decimal | DecimalJsLike | number | string | null
    data_pagamento?: Date | string | null
    forma_pagamento?: string | null
    observacoes?: string | null
    dizimistas?: dizimistasCreateNestedOneWithoutDizimosInput
  }

  export type dizimosUncheckedCreateInput = {
    id?: string
    dizimista_id?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    data_pagamento?: Date | string | null
    forma_pagamento?: string | null
    observacoes?: string | null
  }

  export type dizimosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    dizimistas?: dizimistasUpdateOneWithoutDizimosNestedInput
  }

  export type dizimosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dizimista_id?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dizimosCreateManyInput = {
    id?: string
    dizimista_id?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    data_pagamento?: Date | string | null
    forma_pagamento?: string | null
    observacoes?: string | null
  }

  export type dizimosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dizimosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dizimista_id?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type funcionariosCreateInput = {
    id?: string
    cargo: string
    contratado_em?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutFuncionariosInput
  }

  export type funcionariosUncheckedCreateInput = {
    id?: string
    usuario_id?: string | null
    cargo: string
    contratado_em?: Date | string | null
  }

  export type funcionariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contratado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutFuncionariosNestedInput
  }

  export type funcionariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    contratado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type funcionariosCreateManyInput = {
    id?: string
    usuario_id?: string | null
    cargo: string
    contratado_em?: Date | string | null
  }

  export type funcionariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contratado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type funcionariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    contratado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateInput = {
    id?: string
    nome: string
    cpf?: string | null
    data_nascimento?: Date | string | null
    endereco?: string | null
    email?: string | null
    senha: string
    telefone?: string | null
    comunidade?: string | null
    eh_dizimista?: boolean | null
    eh_funcionario?: boolean | null
    pastoral?: string | null
    criado_em?: Date | string | null
    dizimistas?: dizimistasCreateNestedManyWithoutUsuariosInput
    funcionarios?: funcionariosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: string
    nome: string
    cpf?: string | null
    data_nascimento?: Date | string | null
    endereco?: string | null
    email?: string | null
    senha: string
    telefone?: string | null
    comunidade?: string | null
    eh_dizimista?: boolean | null
    eh_funcionario?: boolean | null
    pastoral?: string | null
    criado_em?: Date | string | null
    dizimistas?: dizimistasUncheckedCreateNestedManyWithoutUsuariosInput
    funcionarios?: funcionariosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dizimistas?: dizimistasUpdateManyWithoutUsuariosNestedInput
    funcionarios?: funcionariosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dizimistas?: dizimistasUncheckedUpdateManyWithoutUsuariosNestedInput
    funcionarios?: funcionariosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: string
    nome: string
    cpf?: string | null
    data_nascimento?: Date | string | null
    endereco?: string | null
    email?: string | null
    senha: string
    telefone?: string | null
    comunidade?: string | null
    eh_dizimista?: boolean | null
    eh_funcionario?: boolean | null
    pastoral?: string | null
    criado_em?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type DizimosListRelationFilter = {
    every?: dizimosWhereInput
    some?: dizimosWhereInput
    none?: dizimosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type dizimosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dizimistasCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    qtd_dizimos?: SortOrder
    qtd_dizimos_seguidos?: SortOrder
    devolveu_dizimo_mes?: SortOrder
    atualizado_em?: SortOrder
  }

  export type dizimistasAvgOrderByAggregateInput = {
    qtd_dizimos?: SortOrder
    qtd_dizimos_seguidos?: SortOrder
  }

  export type dizimistasMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    qtd_dizimos?: SortOrder
    qtd_dizimos_seguidos?: SortOrder
    devolveu_dizimo_mes?: SortOrder
    atualizado_em?: SortOrder
  }

  export type dizimistasMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    qtd_dizimos?: SortOrder
    qtd_dizimos_seguidos?: SortOrder
    devolveu_dizimo_mes?: SortOrder
    atualizado_em?: SortOrder
  }

  export type dizimistasSumOrderByAggregateInput = {
    qtd_dizimos?: SortOrder
    qtd_dizimos_seguidos?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DizimistasNullableScalarRelationFilter = {
    is?: dizimistasWhereInput | null
    isNot?: dizimistasWhereInput | null
  }

  export type dizimosCountOrderByAggregateInput = {
    id?: SortOrder
    dizimista_id?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    forma_pagamento?: SortOrder
    observacoes?: SortOrder
  }

  export type dizimosAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type dizimosMaxOrderByAggregateInput = {
    id?: SortOrder
    dizimista_id?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    forma_pagamento?: SortOrder
    observacoes?: SortOrder
  }

  export type dizimosMinOrderByAggregateInput = {
    id?: SortOrder
    dizimista_id?: SortOrder
    valor?: SortOrder
    data_pagamento?: SortOrder
    forma_pagamento?: SortOrder
    observacoes?: SortOrder
  }

  export type dizimosSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type funcionariosCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cargo?: SortOrder
    contratado_em?: SortOrder
  }

  export type funcionariosMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cargo?: SortOrder
    contratado_em?: SortOrder
  }

  export type funcionariosMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cargo?: SortOrder
    contratado_em?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DizimistasListRelationFilter = {
    every?: dizimistasWhereInput
    some?: dizimistasWhereInput
    none?: dizimistasWhereInput
  }

  export type FuncionariosListRelationFilter = {
    every?: funcionariosWhereInput
    some?: funcionariosWhereInput
    none?: funcionariosWhereInput
  }

  export type dizimistasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type funcionariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    comunidade?: SortOrder
    eh_dizimista?: SortOrder
    eh_funcionario?: SortOrder
    pastoral?: SortOrder
    criado_em?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    comunidade?: SortOrder
    eh_dizimista?: SortOrder
    eh_funcionario?: SortOrder
    pastoral?: SortOrder
    criado_em?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    comunidade?: SortOrder
    eh_dizimista?: SortOrder
    eh_funcionario?: SortOrder
    pastoral?: SortOrder
    criado_em?: SortOrder
  }

  export type usuariosCreateNestedOneWithoutDizimistasInput = {
    create?: XOR<usuariosCreateWithoutDizimistasInput, usuariosUncheckedCreateWithoutDizimistasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutDizimistasInput
    connect?: usuariosWhereUniqueInput
  }

  export type dizimosCreateNestedManyWithoutDizimistasInput = {
    create?: XOR<dizimosCreateWithoutDizimistasInput, dizimosUncheckedCreateWithoutDizimistasInput> | dizimosCreateWithoutDizimistasInput[] | dizimosUncheckedCreateWithoutDizimistasInput[]
    connectOrCreate?: dizimosCreateOrConnectWithoutDizimistasInput | dizimosCreateOrConnectWithoutDizimistasInput[]
    createMany?: dizimosCreateManyDizimistasInputEnvelope
    connect?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
  }

  export type dizimosUncheckedCreateNestedManyWithoutDizimistasInput = {
    create?: XOR<dizimosCreateWithoutDizimistasInput, dizimosUncheckedCreateWithoutDizimistasInput> | dizimosCreateWithoutDizimistasInput[] | dizimosUncheckedCreateWithoutDizimistasInput[]
    connectOrCreate?: dizimosCreateOrConnectWithoutDizimistasInput | dizimosCreateOrConnectWithoutDizimistasInput[]
    createMany?: dizimosCreateManyDizimistasInputEnvelope
    connect?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usuariosUpdateOneWithoutDizimistasNestedInput = {
    create?: XOR<usuariosCreateWithoutDizimistasInput, usuariosUncheckedCreateWithoutDizimistasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutDizimistasInput
    upsert?: usuariosUpsertWithoutDizimistasInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutDizimistasInput, usuariosUpdateWithoutDizimistasInput>, usuariosUncheckedUpdateWithoutDizimistasInput>
  }

  export type dizimosUpdateManyWithoutDizimistasNestedInput = {
    create?: XOR<dizimosCreateWithoutDizimistasInput, dizimosUncheckedCreateWithoutDizimistasInput> | dizimosCreateWithoutDizimistasInput[] | dizimosUncheckedCreateWithoutDizimistasInput[]
    connectOrCreate?: dizimosCreateOrConnectWithoutDizimistasInput | dizimosCreateOrConnectWithoutDizimistasInput[]
    upsert?: dizimosUpsertWithWhereUniqueWithoutDizimistasInput | dizimosUpsertWithWhereUniqueWithoutDizimistasInput[]
    createMany?: dizimosCreateManyDizimistasInputEnvelope
    set?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    disconnect?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    delete?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    connect?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    update?: dizimosUpdateWithWhereUniqueWithoutDizimistasInput | dizimosUpdateWithWhereUniqueWithoutDizimistasInput[]
    updateMany?: dizimosUpdateManyWithWhereWithoutDizimistasInput | dizimosUpdateManyWithWhereWithoutDizimistasInput[]
    deleteMany?: dizimosScalarWhereInput | dizimosScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type dizimosUncheckedUpdateManyWithoutDizimistasNestedInput = {
    create?: XOR<dizimosCreateWithoutDizimistasInput, dizimosUncheckedCreateWithoutDizimistasInput> | dizimosCreateWithoutDizimistasInput[] | dizimosUncheckedCreateWithoutDizimistasInput[]
    connectOrCreate?: dizimosCreateOrConnectWithoutDizimistasInput | dizimosCreateOrConnectWithoutDizimistasInput[]
    upsert?: dizimosUpsertWithWhereUniqueWithoutDizimistasInput | dizimosUpsertWithWhereUniqueWithoutDizimistasInput[]
    createMany?: dizimosCreateManyDizimistasInputEnvelope
    set?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    disconnect?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    delete?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    connect?: dizimosWhereUniqueInput | dizimosWhereUniqueInput[]
    update?: dizimosUpdateWithWhereUniqueWithoutDizimistasInput | dizimosUpdateWithWhereUniqueWithoutDizimistasInput[]
    updateMany?: dizimosUpdateManyWithWhereWithoutDizimistasInput | dizimosUpdateManyWithWhereWithoutDizimistasInput[]
    deleteMany?: dizimosScalarWhereInput | dizimosScalarWhereInput[]
  }

  export type dizimistasCreateNestedOneWithoutDizimosInput = {
    create?: XOR<dizimistasCreateWithoutDizimosInput, dizimistasUncheckedCreateWithoutDizimosInput>
    connectOrCreate?: dizimistasCreateOrConnectWithoutDizimosInput
    connect?: dizimistasWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dizimistasUpdateOneWithoutDizimosNestedInput = {
    create?: XOR<dizimistasCreateWithoutDizimosInput, dizimistasUncheckedCreateWithoutDizimosInput>
    connectOrCreate?: dizimistasCreateOrConnectWithoutDizimosInput
    upsert?: dizimistasUpsertWithoutDizimosInput
    disconnect?: dizimistasWhereInput | boolean
    delete?: dizimistasWhereInput | boolean
    connect?: dizimistasWhereUniqueInput
    update?: XOR<XOR<dizimistasUpdateToOneWithWhereWithoutDizimosInput, dizimistasUpdateWithoutDizimosInput>, dizimistasUncheckedUpdateWithoutDizimosInput>
  }

  export type usuariosCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<usuariosCreateWithoutFuncionariosInput, usuariosUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutFuncionariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneWithoutFuncionariosNestedInput = {
    create?: XOR<usuariosCreateWithoutFuncionariosInput, usuariosUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutFuncionariosInput
    upsert?: usuariosUpsertWithoutFuncionariosInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutFuncionariosInput, usuariosUpdateWithoutFuncionariosInput>, usuariosUncheckedUpdateWithoutFuncionariosInput>
  }

  export type dizimistasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<dizimistasCreateWithoutUsuariosInput, dizimistasUncheckedCreateWithoutUsuariosInput> | dizimistasCreateWithoutUsuariosInput[] | dizimistasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: dizimistasCreateOrConnectWithoutUsuariosInput | dizimistasCreateOrConnectWithoutUsuariosInput[]
    createMany?: dizimistasCreateManyUsuariosInputEnvelope
    connect?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
  }

  export type funcionariosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<funcionariosCreateWithoutUsuariosInput, funcionariosUncheckedCreateWithoutUsuariosInput> | funcionariosCreateWithoutUsuariosInput[] | funcionariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutUsuariosInput | funcionariosCreateOrConnectWithoutUsuariosInput[]
    createMany?: funcionariosCreateManyUsuariosInputEnvelope
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
  }

  export type dizimistasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<dizimistasCreateWithoutUsuariosInput, dizimistasUncheckedCreateWithoutUsuariosInput> | dizimistasCreateWithoutUsuariosInput[] | dizimistasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: dizimistasCreateOrConnectWithoutUsuariosInput | dizimistasCreateOrConnectWithoutUsuariosInput[]
    createMany?: dizimistasCreateManyUsuariosInputEnvelope
    connect?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
  }

  export type funcionariosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<funcionariosCreateWithoutUsuariosInput, funcionariosUncheckedCreateWithoutUsuariosInput> | funcionariosCreateWithoutUsuariosInput[] | funcionariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutUsuariosInput | funcionariosCreateOrConnectWithoutUsuariosInput[]
    createMany?: funcionariosCreateManyUsuariosInputEnvelope
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
  }

  export type dizimistasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<dizimistasCreateWithoutUsuariosInput, dizimistasUncheckedCreateWithoutUsuariosInput> | dizimistasCreateWithoutUsuariosInput[] | dizimistasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: dizimistasCreateOrConnectWithoutUsuariosInput | dizimistasCreateOrConnectWithoutUsuariosInput[]
    upsert?: dizimistasUpsertWithWhereUniqueWithoutUsuariosInput | dizimistasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: dizimistasCreateManyUsuariosInputEnvelope
    set?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    disconnect?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    delete?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    connect?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    update?: dizimistasUpdateWithWhereUniqueWithoutUsuariosInput | dizimistasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: dizimistasUpdateManyWithWhereWithoutUsuariosInput | dizimistasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: dizimistasScalarWhereInput | dizimistasScalarWhereInput[]
  }

  export type funcionariosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<funcionariosCreateWithoutUsuariosInput, funcionariosUncheckedCreateWithoutUsuariosInput> | funcionariosCreateWithoutUsuariosInput[] | funcionariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutUsuariosInput | funcionariosCreateOrConnectWithoutUsuariosInput[]
    upsert?: funcionariosUpsertWithWhereUniqueWithoutUsuariosInput | funcionariosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: funcionariosCreateManyUsuariosInputEnvelope
    set?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    disconnect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    delete?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    update?: funcionariosUpdateWithWhereUniqueWithoutUsuariosInput | funcionariosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: funcionariosUpdateManyWithWhereWithoutUsuariosInput | funcionariosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
  }

  export type dizimistasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<dizimistasCreateWithoutUsuariosInput, dizimistasUncheckedCreateWithoutUsuariosInput> | dizimistasCreateWithoutUsuariosInput[] | dizimistasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: dizimistasCreateOrConnectWithoutUsuariosInput | dizimistasCreateOrConnectWithoutUsuariosInput[]
    upsert?: dizimistasUpsertWithWhereUniqueWithoutUsuariosInput | dizimistasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: dizimistasCreateManyUsuariosInputEnvelope
    set?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    disconnect?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    delete?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    connect?: dizimistasWhereUniqueInput | dizimistasWhereUniqueInput[]
    update?: dizimistasUpdateWithWhereUniqueWithoutUsuariosInput | dizimistasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: dizimistasUpdateManyWithWhereWithoutUsuariosInput | dizimistasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: dizimistasScalarWhereInput | dizimistasScalarWhereInput[]
  }

  export type funcionariosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<funcionariosCreateWithoutUsuariosInput, funcionariosUncheckedCreateWithoutUsuariosInput> | funcionariosCreateWithoutUsuariosInput[] | funcionariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutUsuariosInput | funcionariosCreateOrConnectWithoutUsuariosInput[]
    upsert?: funcionariosUpsertWithWhereUniqueWithoutUsuariosInput | funcionariosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: funcionariosCreateManyUsuariosInputEnvelope
    set?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    disconnect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    delete?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    update?: funcionariosUpdateWithWhereUniqueWithoutUsuariosInput | funcionariosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: funcionariosUpdateManyWithWhereWithoutUsuariosInput | funcionariosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutDizimistasInput = {
    id?: string
    nome: string
    cpf?: string | null
    data_nascimento?: Date | string | null
    endereco?: string | null
    email?: string | null
    senha: string
    telefone?: string | null
    comunidade?: string | null
    eh_dizimista?: boolean | null
    eh_funcionario?: boolean | null
    pastoral?: string | null
    criado_em?: Date | string | null
    funcionarios?: funcionariosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutDizimistasInput = {
    id?: string
    nome: string
    cpf?: string | null
    data_nascimento?: Date | string | null
    endereco?: string | null
    email?: string | null
    senha: string
    telefone?: string | null
    comunidade?: string | null
    eh_dizimista?: boolean | null
    eh_funcionario?: boolean | null
    pastoral?: string | null
    criado_em?: Date | string | null
    funcionarios?: funcionariosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutDizimistasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutDizimistasInput, usuariosUncheckedCreateWithoutDizimistasInput>
  }

  export type dizimosCreateWithoutDizimistasInput = {
    id?: string
    valor?: Decimal | DecimalJsLike | number | string | null
    data_pagamento?: Date | string | null
    forma_pagamento?: string | null
    observacoes?: string | null
  }

  export type dizimosUncheckedCreateWithoutDizimistasInput = {
    id?: string
    valor?: Decimal | DecimalJsLike | number | string | null
    data_pagamento?: Date | string | null
    forma_pagamento?: string | null
    observacoes?: string | null
  }

  export type dizimosCreateOrConnectWithoutDizimistasInput = {
    where: dizimosWhereUniqueInput
    create: XOR<dizimosCreateWithoutDizimistasInput, dizimosUncheckedCreateWithoutDizimistasInput>
  }

  export type dizimosCreateManyDizimistasInputEnvelope = {
    data: dizimosCreateManyDizimistasInput | dizimosCreateManyDizimistasInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutDizimistasInput = {
    update: XOR<usuariosUpdateWithoutDizimistasInput, usuariosUncheckedUpdateWithoutDizimistasInput>
    create: XOR<usuariosCreateWithoutDizimistasInput, usuariosUncheckedCreateWithoutDizimistasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutDizimistasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutDizimistasInput, usuariosUncheckedUpdateWithoutDizimistasInput>
  }

  export type usuariosUpdateWithoutDizimistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionarios?: funcionariosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutDizimistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionarios?: funcionariosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type dizimosUpsertWithWhereUniqueWithoutDizimistasInput = {
    where: dizimosWhereUniqueInput
    update: XOR<dizimosUpdateWithoutDizimistasInput, dizimosUncheckedUpdateWithoutDizimistasInput>
    create: XOR<dizimosCreateWithoutDizimistasInput, dizimosUncheckedCreateWithoutDizimistasInput>
  }

  export type dizimosUpdateWithWhereUniqueWithoutDizimistasInput = {
    where: dizimosWhereUniqueInput
    data: XOR<dizimosUpdateWithoutDizimistasInput, dizimosUncheckedUpdateWithoutDizimistasInput>
  }

  export type dizimosUpdateManyWithWhereWithoutDizimistasInput = {
    where: dizimosScalarWhereInput
    data: XOR<dizimosUpdateManyMutationInput, dizimosUncheckedUpdateManyWithoutDizimistasInput>
  }

  export type dizimosScalarWhereInput = {
    AND?: dizimosScalarWhereInput | dizimosScalarWhereInput[]
    OR?: dizimosScalarWhereInput[]
    NOT?: dizimosScalarWhereInput | dizimosScalarWhereInput[]
    id?: UuidFilter<"dizimos"> | string
    dizimista_id?: UuidNullableFilter<"dizimos"> | string | null
    valor?: DecimalNullableFilter<"dizimos"> | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: DateTimeNullableFilter<"dizimos"> | Date | string | null
    forma_pagamento?: StringNullableFilter<"dizimos"> | string | null
    observacoes?: StringNullableFilter<"dizimos"> | string | null
  }

  export type dizimistasCreateWithoutDizimosInput = {
    id?: string
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutDizimistasInput
  }

  export type dizimistasUncheckedCreateWithoutDizimosInput = {
    id?: string
    usuario_id?: string | null
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
  }

  export type dizimistasCreateOrConnectWithoutDizimosInput = {
    where: dizimistasWhereUniqueInput
    create: XOR<dizimistasCreateWithoutDizimosInput, dizimistasUncheckedCreateWithoutDizimosInput>
  }

  export type dizimistasUpsertWithoutDizimosInput = {
    update: XOR<dizimistasUpdateWithoutDizimosInput, dizimistasUncheckedUpdateWithoutDizimosInput>
    create: XOR<dizimistasCreateWithoutDizimosInput, dizimistasUncheckedCreateWithoutDizimosInput>
    where?: dizimistasWhereInput
  }

  export type dizimistasUpdateToOneWithWhereWithoutDizimosInput = {
    where?: dizimistasWhereInput
    data: XOR<dizimistasUpdateWithoutDizimosInput, dizimistasUncheckedUpdateWithoutDizimosInput>
  }

  export type dizimistasUpdateWithoutDizimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutDizimistasNestedInput
  }

  export type dizimistasUncheckedUpdateWithoutDizimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateWithoutFuncionariosInput = {
    id?: string
    nome: string
    cpf?: string | null
    data_nascimento?: Date | string | null
    endereco?: string | null
    email?: string | null
    senha: string
    telefone?: string | null
    comunidade?: string | null
    eh_dizimista?: boolean | null
    eh_funcionario?: boolean | null
    pastoral?: string | null
    criado_em?: Date | string | null
    dizimistas?: dizimistasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutFuncionariosInput = {
    id?: string
    nome: string
    cpf?: string | null
    data_nascimento?: Date | string | null
    endereco?: string | null
    email?: string | null
    senha: string
    telefone?: string | null
    comunidade?: string | null
    eh_dizimista?: boolean | null
    eh_funcionario?: boolean | null
    pastoral?: string | null
    criado_em?: Date | string | null
    dizimistas?: dizimistasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutFuncionariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutFuncionariosInput, usuariosUncheckedCreateWithoutFuncionariosInput>
  }

  export type usuariosUpsertWithoutFuncionariosInput = {
    update: XOR<usuariosUpdateWithoutFuncionariosInput, usuariosUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<usuariosCreateWithoutFuncionariosInput, usuariosUncheckedCreateWithoutFuncionariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutFuncionariosInput, usuariosUncheckedUpdateWithoutFuncionariosInput>
  }

  export type usuariosUpdateWithoutFuncionariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dizimistas?: dizimistasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutFuncionariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    comunidade?: NullableStringFieldUpdateOperationsInput | string | null
    eh_dizimista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eh_funcionario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pastoral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dizimistas?: dizimistasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type dizimistasCreateWithoutUsuariosInput = {
    id?: string
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
    dizimos?: dizimosCreateNestedManyWithoutDizimistasInput
  }

  export type dizimistasUncheckedCreateWithoutUsuariosInput = {
    id?: string
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
    dizimos?: dizimosUncheckedCreateNestedManyWithoutDizimistasInput
  }

  export type dizimistasCreateOrConnectWithoutUsuariosInput = {
    where: dizimistasWhereUniqueInput
    create: XOR<dizimistasCreateWithoutUsuariosInput, dizimistasUncheckedCreateWithoutUsuariosInput>
  }

  export type dizimistasCreateManyUsuariosInputEnvelope = {
    data: dizimistasCreateManyUsuariosInput | dizimistasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type funcionariosCreateWithoutUsuariosInput = {
    id?: string
    cargo: string
    contratado_em?: Date | string | null
  }

  export type funcionariosUncheckedCreateWithoutUsuariosInput = {
    id?: string
    cargo: string
    contratado_em?: Date | string | null
  }

  export type funcionariosCreateOrConnectWithoutUsuariosInput = {
    where: funcionariosWhereUniqueInput
    create: XOR<funcionariosCreateWithoutUsuariosInput, funcionariosUncheckedCreateWithoutUsuariosInput>
  }

  export type funcionariosCreateManyUsuariosInputEnvelope = {
    data: funcionariosCreateManyUsuariosInput | funcionariosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type dizimistasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: dizimistasWhereUniqueInput
    update: XOR<dizimistasUpdateWithoutUsuariosInput, dizimistasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<dizimistasCreateWithoutUsuariosInput, dizimistasUncheckedCreateWithoutUsuariosInput>
  }

  export type dizimistasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: dizimistasWhereUniqueInput
    data: XOR<dizimistasUpdateWithoutUsuariosInput, dizimistasUncheckedUpdateWithoutUsuariosInput>
  }

  export type dizimistasUpdateManyWithWhereWithoutUsuariosInput = {
    where: dizimistasScalarWhereInput
    data: XOR<dizimistasUpdateManyMutationInput, dizimistasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type dizimistasScalarWhereInput = {
    AND?: dizimistasScalarWhereInput | dizimistasScalarWhereInput[]
    OR?: dizimistasScalarWhereInput[]
    NOT?: dizimistasScalarWhereInput | dizimistasScalarWhereInput[]
    id?: UuidFilter<"dizimistas"> | string
    usuario_id?: UuidNullableFilter<"dizimistas"> | string | null
    qtd_dizimos?: IntNullableFilter<"dizimistas"> | number | null
    qtd_dizimos_seguidos?: IntNullableFilter<"dizimistas"> | number | null
    devolveu_dizimo_mes?: BoolNullableFilter<"dizimistas"> | boolean | null
    atualizado_em?: DateTimeNullableFilter<"dizimistas"> | Date | string | null
  }

  export type funcionariosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: funcionariosWhereUniqueInput
    update: XOR<funcionariosUpdateWithoutUsuariosInput, funcionariosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<funcionariosCreateWithoutUsuariosInput, funcionariosUncheckedCreateWithoutUsuariosInput>
  }

  export type funcionariosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: funcionariosWhereUniqueInput
    data: XOR<funcionariosUpdateWithoutUsuariosInput, funcionariosUncheckedUpdateWithoutUsuariosInput>
  }

  export type funcionariosUpdateManyWithWhereWithoutUsuariosInput = {
    where: funcionariosScalarWhereInput
    data: XOR<funcionariosUpdateManyMutationInput, funcionariosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type funcionariosScalarWhereInput = {
    AND?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
    OR?: funcionariosScalarWhereInput[]
    NOT?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
    id?: UuidFilter<"funcionarios"> | string
    usuario_id?: UuidNullableFilter<"funcionarios"> | string | null
    cargo?: StringFilter<"funcionarios"> | string
    contratado_em?: DateTimeNullableFilter<"funcionarios"> | Date | string | null
  }

  export type dizimosCreateManyDizimistasInput = {
    id?: string
    valor?: Decimal | DecimalJsLike | number | string | null
    data_pagamento?: Date | string | null
    forma_pagamento?: string | null
    observacoes?: string | null
  }

  export type dizimosUpdateWithoutDizimistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dizimosUncheckedUpdateWithoutDizimistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dizimosUncheckedUpdateManyWithoutDizimistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dizimistasCreateManyUsuariosInput = {
    id?: string
    qtd_dizimos?: number | null
    qtd_dizimos_seguidos?: number | null
    devolveu_dizimo_mes?: boolean | null
    atualizado_em?: Date | string | null
  }

  export type funcionariosCreateManyUsuariosInput = {
    id?: string
    cargo: string
    contratado_em?: Date | string | null
  }

  export type dizimistasUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dizimos?: dizimosUpdateManyWithoutDizimistasNestedInput
  }

  export type dizimistasUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dizimos?: dizimosUncheckedUpdateManyWithoutDizimistasNestedInput
  }

  export type dizimistasUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd_dizimos?: NullableIntFieldUpdateOperationsInput | number | null
    qtd_dizimos_seguidos?: NullableIntFieldUpdateOperationsInput | number | null
    devolveu_dizimo_mes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    atualizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type funcionariosUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contratado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type funcionariosUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contratado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type funcionariosUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contratado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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