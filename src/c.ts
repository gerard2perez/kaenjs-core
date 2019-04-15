enum Colors {
	FgBlack = "\x1b[30m",
	FgRed = "\x1b[31m",
	FgGreen = "\x1b[32m",
	FgYellow = "\x1b[33m",
	FgBlue = "\x1b[34m",
	FgMagenta = "\x1b[35m",
	FgCyan = "\x1b[36m",
	FgWhite = "\x1b[37m",

	BgBlack = "\x1b[40m",
	BgRed = "\x1b[41m",
	BgGreen = "\x1b[42m",
	BgYellow = "\x1b[43m",
	BgBlue = "\x1b[44m",
	BgMagenta = "\x1b[45m",
	BgCyan = "\x1b[46m",
	BgWhite = "\x1b[47m"
}
enum ColorTone {
	No = '',
	Reset = "\x1b[0m",
	Bright = "\x1b[1m",
	Dim = "\x1b[2m",
	Underscore = "\x1b[4m",
	Blink = "\x1b[5m",
	Reverse = "\x1b[7m",
	Hidden = "\x1b[8m",

}
export function color (color:Colors, tone:ColorTone, text:string) {
	return `${tone}${color}${text}\x1b[0m`;
}
export const red = color.bind(null, Colors.FgRed, ColorTone.No);
export const green = color.bind(null, Colors.FgGreen, ColorTone.Dim);
export const yellow = color.bind(null, Colors.FgYellow, ColorTone.No);
export const cyan = color.bind(null, Colors.FgCyan, ColorTone.Dim);
export const Bcyan = color.bind(null, Colors.FgCyan, ColorTone.Reverse);
export const grey = color.bind(null, Colors.FgBlack, ColorTone.Bright);
