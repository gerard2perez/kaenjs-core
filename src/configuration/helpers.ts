type DevProd<T extends {} = any> = {
	[P in keyof T]: Mut<T[P]>
}
export declare type Mut<T> = DevProd<T> | {

	dev?: T | { [P in keyof T]: Mut<P> }
	prod?: T | { [P in keyof T]: Mut<P> }
}
