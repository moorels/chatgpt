import { createLogger } from '@redwoodjs/api/logger';

/**
 * Creates a logger with RedwoodLoggerOptions
 *
 * These extend and override default LoggerOptions,
 * can define a destination like a file or other supported pino log transport stream,
 * and sets whether or not to show the logger configuration settings (defaults to false)
 *
 * @param RedwoodLoggerOptions
 *
 * RedwoodLoggerOptions have
 * @param {options} LoggerOptions - defines how to log, such as redaction and format
 * @param {string | DestinationStream} destination - defines where to log, such as a transport stream or file
 * @param {boolean} showConfig - whether to display logger configuration on initialization
 */
export const logger = createLogger({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVMb2dnZXIiLCJsb2dnZXIiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2xpYi9sb2dnZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAnQHJlZHdvb2Rqcy9hcGkvbG9nZ2VyJ1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBsb2dnZXIgd2l0aCBSZWR3b29kTG9nZ2VyT3B0aW9uc1xyXG4gKlxyXG4gKiBUaGVzZSBleHRlbmQgYW5kIG92ZXJyaWRlIGRlZmF1bHQgTG9nZ2VyT3B0aW9ucyxcclxuICogY2FuIGRlZmluZSBhIGRlc3RpbmF0aW9uIGxpa2UgYSBmaWxlIG9yIG90aGVyIHN1cHBvcnRlZCBwaW5vIGxvZyB0cmFuc3BvcnQgc3RyZWFtLFxyXG4gKiBhbmQgc2V0cyB3aGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSBsb2dnZXIgY29uZmlndXJhdGlvbiBzZXR0aW5ncyAoZGVmYXVsdHMgdG8gZmFsc2UpXHJcbiAqXHJcbiAqIEBwYXJhbSBSZWR3b29kTG9nZ2VyT3B0aW9uc1xyXG4gKlxyXG4gKiBSZWR3b29kTG9nZ2VyT3B0aW9ucyBoYXZlXHJcbiAqIEBwYXJhbSB7b3B0aW9uc30gTG9nZ2VyT3B0aW9ucyAtIGRlZmluZXMgaG93IHRvIGxvZywgc3VjaCBhcyByZWRhY3Rpb24gYW5kIGZvcm1hdFxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IERlc3RpbmF0aW9uU3RyZWFtfSBkZXN0aW5hdGlvbiAtIGRlZmluZXMgd2hlcmUgdG8gbG9nLCBzdWNoIGFzIGEgdHJhbnNwb3J0IHN0cmVhbSBvciBmaWxlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd0NvbmZpZyAtIHdoZXRoZXIgdG8gZGlzcGxheSBsb2dnZXIgY29uZmlndXJhdGlvbiBvbiBpbml0aWFsaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7fSlcclxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxZQUFZLFFBQVEsdUJBQXVCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNQyxNQUFNLEdBQUdELFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9