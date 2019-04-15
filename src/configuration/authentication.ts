import { Mut } from "./helpers";
import { VaultCollection } from "@gerard2p/vault-orm/collection";
import {Strategy} from 'passport';
import {SessionOptions} from 'express-session';

interface IStrategy {
	Strategy:Strategy
	Options:any,
	Auth:Function
}
export interface AuthenticationConfiguration {
	Model:(o?:any) => VaultCollection<any>
	/**
	 * These values are use to generate cookies
	 */
	Keys:string[]
	UsernameKey:string
	PassowrdKey:string
	SaltRounds: number
	Strategies:IStrategy[],
	Session: SessionOptions

}
export type IAuthenticationConfiguration = {
	[P in keyof AuthenticationConfiguration]: Mut<AuthenticationConfiguration[P]>
}
