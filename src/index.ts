
/**
 * @brief Meows to stdout a certain number of times.
 * 
 * @param times The amount of times to meow.
 */
export function sayMeow(times: number): void
{
	for(let i = 0; i < times; ++i)
	{
		console.log('meow');
	}
}

/**
 * @brief Writes 'meow' to a string `times` times.
 * 
 * @param times The amount of times to meow.
 * 
 * @returns 'meow' repeated `times` times.
 */
export function meow(times: number): string
{
	let val: string = '';
	for(let i = 0; i < times; ++i)
	{
		val.concat('meow');
	}
	return val;
}
