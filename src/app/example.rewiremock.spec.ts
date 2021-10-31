import rewiremock from 'rewiremock';

describe('ExampleRewiremock', () => {
    it('should mock hash', () => {

        // Causes:
        // Uncaught Error: Rewiremock: there is no "parent module". Is there two HotModuleReplacementPlugins?
        const ExampleClass = rewiremock.proxy('./example');
    });
});