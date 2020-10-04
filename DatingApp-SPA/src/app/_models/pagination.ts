export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResult<T>{
    result: T;
    pagination: Pagination;
  paginatedResult: PaginatedResult<import("e:/Trainings/.Net Core with Angular/DatingApp/DatingApp-SPA/src/app/_models/user").User[]>;
}
