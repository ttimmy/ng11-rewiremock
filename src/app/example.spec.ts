import { Example } from "./example";

describe('Example', () => {
    it('should hash', () => {
        const e = new Example();
        
        expect(e.doHash()).toBe('1a79a4d60de6718e8e5b326e338ae533');
    });
});