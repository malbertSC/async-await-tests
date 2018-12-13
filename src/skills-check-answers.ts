import { throwPromiseConstructorError, CaughtError, CatchMeError, ErrorTests, throwSyncError } from "./setup/skills-check-no-edits";

export class SkillsCheck implements ErrorTests {
    public handleSyncError(bubbleSwitcher: boolean): void {
        try {
            return throwSyncError(bubbleSwitcher);
        }
        catch (err) {
            if (err instanceof CatchMeError) {
                throw new CaughtError();
            } else throw err;
        }
    }
    public handleAsyncError(bubbleSwitcher: boolean): Promise<any> {
        return throwPromiseConstructorError(bubbleSwitcher)
        .catch((err) => {
            if (err instanceof CatchMeError) {
                throw new CaughtError();
            }
            throw err;
        })
    }
    public async asyncHandleAsyncError(bubbleSwitcher: boolean): Promise<any> {
        try {
            return await throwPromiseConstructorError(bubbleSwitcher)
        } catch (err) {
            if (err instanceof CatchMeError) {
                throw new CaughtError();
            } else throw err;
        }
    }
    public async asyncHandleSyncError(bubbleSwitcher: boolean): Promise<any> {
        try {
            return await throwSyncError(bubbleSwitcher)
        } catch (err) {
            if (err instanceof CatchMeError) {
                throw new CaughtError();
            } else throw err;
        }
    }
}
