import { Mut } from "./helpers";

export enum RelationKind {
	id,
	record
}
export enum ConectionDriver {
	mongo
}
export enum LocalizationMode {
	query,
	subdomain,
	cookie,
	header,
	url,
	tld
}
export interface ServerConfiguration {
	name:string
	host: string
	port: number
	subdomainOffset:number
	https?: {
		key:string
		cert:string
		dhparam?:string
		http2?:boolean
	}
	database?: {
		relations: RelationKind
		connection: ConectionDriver
	}
	pagination?: {
		limit: number,
		serchTerm: string
	}
	subdomains?:Array<string>
	error?: {
		layout:string
		data:any
	}
	localization?: {
		objectNotation:boolean,
		fallbacks:{[property:string]:string},
		default:string,
		queryKey: string
		directory: string
		modes: (Function|LocalizationMode)[],
		cookie:string
	},
	client_max_body_size:string
}

export type IServerConfiguration = {
	[P in keyof ServerConfiguration]: Mut<ServerConfiguration[P]>
}
