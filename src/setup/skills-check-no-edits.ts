// leave these alone
export class CatchMeError extends Error {};
export class CaughtError extends Error {};
export class BubbleError extends Error {};

export interface ErrorTests {
    handleSyncError(bubbleSwitcher: boolean): void;
    handleAsyncError(bubbleSwitcher: boolean): Promise<any>;
    asyncHandleAsyncError(bubbleSwitcher: boolean): Promise<any>;
    asyncHandleSyncError(bubbleSwitcher: boolean): Promise<any>;
}

function throwError(bubbleSwitcher: boolean) {
    if (bubbleSwitcher) {
        throw new BubbleError()
    } else throw new CatchMeError();
}

export async function throwPromiseConstructorError(bubbleSwitcher: boolean) {
    return new Promise((resolve, reject) => {
        throwError(bubbleSwitcher);
        return;
    })
}

export function throwSyncError(bubbleSwitcher: boolean) {
    throwError(bubbleSwitcher);
    return;
}
