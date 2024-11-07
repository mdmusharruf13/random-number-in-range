# random-number-in-range

## randomNumberInRange(min, max)

Generates a random number between the provided min and max (inclusive).

- **min (number):** The minimum value of the range.
- **max (number):** The maximum value of the range.
- **Returns:** A random integer between **min** and **max** (inclusive).

### Example:

```js
const randomNum = randomNumberInRange(1, 10);
```

## Error Handling

- Throws a **TypeError** if **min** or **max** are not numbers.
- Throws a **RangeError** if **min** is greater than **max**.

### Example of error handling:

```js
try {
  const randomNum = randomNumberInRange("1", 5);
} catch (error) {
  console.log(error);
}
```
