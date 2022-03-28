const HelloPage = require('../pages/hello.page');

describe('My Hello World Page', () => {
    it('should toggle the title', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitle('hello');
        await expect(HelloPage.title).toBeExisting();
        await HelloPage.toggle.click();
        await expect(HelloPage.title).not.toBeExisting();
    });
    it('should not toggle the title', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitle('won\'t toggle');
        await expect(HelloPage.title).not.toBeExisting();
    });
});


