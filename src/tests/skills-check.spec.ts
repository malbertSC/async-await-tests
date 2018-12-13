import { SkillsCheck } from "../skills-check";
import { CaughtError, BubbleError } from "../setup/skills-check-no-edits";

test("handleSyncError should catch CatchMeError and re-throw CaughtError", async (done) => {
    expect.assertions(2);
    const checks = new SkillsCheck();
    try {
        checks.handleSyncError(false);
    } catch (e) {
        expect(e instanceof CaughtError).toBeTruthy();
    }
    try {
        checks.handleSyncError(true);
    } catch (e) {
        expect(e instanceof BubbleError).toBeTruthy();
    }
    done();
});

test("handleAsyncError should catch CatchMeError and re-throw CaughtError", async (done) => {
    expect.assertions(2);
    const checks = new SkillsCheck();
    try {
        await checks.handleAsyncError(false);
    } catch (e) {
        expect(e instanceof CaughtError).toBeTruthy();
    }
    try {
        await checks.handleAsyncError(true);
    } catch (e) {
        expect(e instanceof BubbleError).toBeTruthy();
    }
    done();
});

test("asyncHandleSyncError should catch CatchMeError and re-throw CaughtError", async (done) => {
    expect.assertions(2);
    const checks = new SkillsCheck();
    try {
        await checks.asyncHandleSyncError(false);
    } catch (e) {
        expect(e instanceof CaughtError).toBeTruthy();
    }
    try {
        await checks.asyncHandleSyncError(true);
    } catch (e) {
        expect(e instanceof BubbleError).toBeTruthy();
    }
    done();
});

test("asyncHandleAsyncError should catch CatchMeError and re-throw CaughtError", async (done) => {
    expect.assertions(2);
    const checks = new SkillsCheck();
    try {
        await checks.asyncHandleAsyncError(false);
    } catch (e) {
        expect(e instanceof CaughtError).toBeTruthy();
    }
    try {
        await checks.asyncHandleAsyncError(true);
    } catch (e) {
        expect(e instanceof BubbleError).toBeTruthy();
    }
    done();
});
