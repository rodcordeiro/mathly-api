declare global {
  export interface IPaginationOptions {
    /**
     * @default 10
     * the amount of items to be requested per page
     */
    limit: number | string;

    /**
     * @default 1
     * the page that is requested
     */
    page: number | string;

    /**
     * @default true
     * Turn off pagination count total queries. itemCount, totalItems, itemsPerPage and totalPages will be undefined
     */
    countQueries?: boolean;

    /**
     * @default false
     * @link https://orkhan.gitbook.io/typeorm/docs/caching
     *
     * Enables or disables query result caching.
     */
    cacheQueries?: TypeORMCacheType;
  }

  export type TypeORMCacheType =
    | boolean
    | number
    | {
        id: any;
        milliseconds: number;
      };

  export interface ObjectLiteral {
    [s: string]: any;
  }

  export interface IPaginationMeta extends ObjectLiteral {
    /**
     * the amount of items on this specific page
     */
    itemCount: number;
    /**
     * the total amount of items
     */
    totalItems?: number;
    /**
     * the amount of items that were requested per page
     */
    itemsPerPage: number;
    /**
     * the total amount of pages in this paginator
     */
    totalPages?: number;
    /**
     * the current page this paginator "points" to
     */
    currentPage: number;
  }

  export type PaginationArgs<
    T extends Record<string, any> = Record<string, never>,
  > = T &
    Omit<IPaginationOptions, 'limit' | 'page'> & {
      limit?: string | number;
      page?: string | number;
    };
  export type Pagination<T> = {
    items: T[];
    meta: IPaginationMeta;
  };
}

export {};
