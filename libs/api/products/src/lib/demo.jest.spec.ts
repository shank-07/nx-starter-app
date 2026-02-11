describe('Global Jest Test', () => {
    it('should run from the root level', () => {
        const message = 'Jest is working at root!';
        expect(message).toContain('root');
    });

    it('can be placed anywhere as long as it matches .jest.spec.ts', () => {
        expect(true).toBe(true);
    });
});
