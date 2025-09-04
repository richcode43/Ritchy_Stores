/* eslint-disable @typescript-eslint/no-explicit-any */
export function resolveResponse<T extends Record<string, any>>(data: any) {
    return { ...data } as T;
}