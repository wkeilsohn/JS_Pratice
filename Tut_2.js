// William Keilsohn
// July 7 2025

// Declare Variables
let nums = [...Array(101).keys()];

// Declare Functions
function sort_even(num)
{
    if ((num % 2) == 0)
    {
        return num;
    }
}

// Return Output
for(const i of nums)
{
    console.log(sort_even(i))
}