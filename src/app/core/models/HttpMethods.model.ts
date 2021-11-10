interface SkipInterception {
  skipInterception?: boolean;
}

export interface HttpGetMethodOptions extends SkipInterception {
  queryParams?: {
    [key: string]: string;
  };
}

export interface HttpPostMethodOptions<T> extends SkipInterception {
  body: T;
}
