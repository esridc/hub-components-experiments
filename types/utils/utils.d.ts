import { UserSession } from '@esri/arcgis-rest-auth';
export declare const setUpdateProp: (object: any, path: any, value: any) => any;
export declare const readSessionFromCookie: () => string;
export declare const writeSessionToCookie: (session: UserSession) => void;
export declare const deleteSessionCookie: () => void;
export declare function truncateString(input: string, length: number): string;
export declare const authenticateUser: (clientId: any, orgurl: any) => Promise<string>;
