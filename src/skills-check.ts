import { throwPromiseConstructorError, CaughtError, CatchMeError, ErrorTests, throwSyncError } from "./setup/skills-check-no-edits";

// In this exercise, both functions (throwSyncError and throwPromiseConstructorError)
// ... have the potential to throw different types of errors based on the state of bubbleSwitcher.
// ... Your job is to make sure that the errors are getting handled properly in a standard function AND
// ... in an async context. If the error you're catching is a "CatchMeError", you should catch it and
// ... throw a "CaughtError".  Re-throw any other error.
// You'll be finished when the tests all pass.  To run the tests, run `yarn test`

export class SkillsCheck implements ErrorTests {
    public handleSyncError(bubbleSwitcher: boolean): void {
        return throwSyncError(bubbleSwitcher);
    }
    // catch error using promises
    public handleAsyncError(bubbleSwitcher: boolean): Promise<any> {
        return throwPromiseConstructorError(bubbleSwitcher);
    }
    // catch error using async/await
    public async asyncHandleSyncError(bubbleSwitcher: boolean): Promise<any> {
        return throwSyncError(bubbleSwitcher);
    }
    // catch error using async/await
    public async asyncHandleAsyncError(bubbleSwitcher: boolean): Promise<any> {
        return throwPromiseConstructorError(bubbleSwitcher);
    }
}
