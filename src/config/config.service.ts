import { get } from 'lodash';

/**
 * Configuration file wrapper. This class shouldn't be manually instanciated,
 * instead - the provided static factory method should be used to create a new
 * instance
 */
export class Configuration {
    private readonly envConfig: object;

    public constructor(config: object) {
        this.envConfig = config;
    }

    /**
     * Retrieves a given configuration value specified by `path`. If no `path`
     * is provided, the entire configuration object is returned
     *
     * @param path The path of the property to get (optional)
     */
    public get(path?: string): any {
        if (path) {
            return get(this.envConfig, path);
        } else {
            return this.envConfig;
        }
    }
}
