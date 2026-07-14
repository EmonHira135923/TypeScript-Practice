তুমি এখানে একসাথে অনেকগুলো C concept practice করেছো — **if-else, loop, sum, count, factorial, even/odd, multiple check, reverse loop, character, ASCII, while loop**। শেখার জন্য ভালো, কিন্তু practice করার সময় আলাদা আলাদা problem করলে logic পরিষ্কার হবে।

আমি তোমার code-কে **Problem → Solution (Code)** আকারে সাজিয়ে দিলাম।

---

## Problem 1: Check a number is Even or Odd

### Problem:

Write a C program to check whether a number is even or odd.

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    if(n % 2 == 0)
        printf("Even Number\n");
    else
        printf("Odd Number\n");

    return 0;
}
```

---

# Problem 2: Print numbers from 1 to N

### Problem:

Print all numbers from 1 to N using a loop.

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d",&n);

    for(int i=1; i<=n; i++)
    {
        printf("%d\n",i);
    }

    return 0;
}
```

---

# Problem 3: Check every number Even or Odd from 1 to N

### Problem:

Print whether each number is even or odd between 1 and N.

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d",&n);

    for(int i=1; i<=n; i++)
    {
        if(i%2==0)
            printf("%d is Even\n",i);
        else
            printf("%d is Odd\n",i);
    }

    return 0;
}
```

---

# Problem 4: Check Multiple of 3 and 5

### Problem:

Check numbers between 1 and N which are divisible by 3, 5, or both.

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        if(i%3==0 && i%5==0)
            printf("%d is multiple of 3 and 5\n",i);

        else if(i%3==0)
            printf("%d is multiple of 3\n",i);

        else if(i%5==0)
            printf("%d is multiple of 5\n",i);

    }

    return 0;
}
```

---

# Problem 5: Find Sum of 1 to N

### Problem:

Calculate the sum of numbers from 1 to N.

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;
    int sum=0;

    printf("Enter number: ");
    scanf("%d",&n);


    for(int i=1;i<=n;i++)
    {
        sum += i;
    }

    printf("Sum = %d",sum);

    return 0;
}
```

---

# Problem 6: Count numbers from 1 to N

### Problem:

Count how many numbers exist between 1 and N.

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;
    int count=0;

    printf("Enter number: ");
    scanf("%d",&n);


    for(int i=1;i<=n;i++)
    {
        count++;
    }


    printf("Total Count = %d",count);

    return 0;
}
```

---

# Problem 7: Sum of Even Numbers from N to 1

### Problem:

Find the sum of even numbers from N to 1.

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;
    int sum=0;


    printf("Enter number: ");
    scanf("%d",&n);


    for(int i=n;i>=1;i--)
    {
        if(i%2==0)
            sum += i;
    }


    printf("Even Sum = %d",sum);

    return 0;
}
```

---

# Problem 8: Find Factorial of a Number

তোমার code এ factorial ভুল ছিল:

তুমি লিখেছিলে:

```c
fact += i;
```

এটা sum করছে।

Factorial হবে:

```
5! = 5×4×3×2×1
```

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;
    int fact=1;


    printf("Enter number: ");
    scanf("%d",&n);


    for(int i=1;i<=n;i++)
    {
        fact = fact * i;
    }


    printf("Factorial = %d",fact);


    return 0;
}
```

---

# Problem 9: Print Characters from a to Given Character

### Problem:

Input a character and print all characters from 'a' to that character.

### Solution:

```c
#include <stdio.h>

int main()
{
    char value;


    printf("Enter character: ");
    scanf("%c",&value);


    for(char i='a'; i<=value; i++)
    {
        printf("%c ",i);
    }


    return 0;
}
```

---

# Problem 10: Find ASCII Value of a Character

### Solution:

```c
#include <stdio.h>

int main()
{
    char ch;


    printf("Enter character: ");
    scanf("%c",&ch);


    printf("ASCII value of %c = %d",ch,ch);


    return 0;
}
```

---

# Problem 11: Print 1 to N using While Loop

### Solution:

```c
#include <stdio.h>

int main()
{
    int n;
    int i=1;


    printf("Enter number: ");
    scanf("%d",&n);


    while(i<=n)
    {
        printf("%d\n",i);
        i++;
    }


    return 0;
}
```

---

## তোমার Practice List (Beginner → Intermediate)

এগুলো practice করলে C এর foundation strong হবে:

✅ 1. Even / Odd Check
✅ 2. Positive / Negative Check
✅ 3. Largest of 3 Numbers
✅ 4. Sum 1 to N
✅ 5. Average of Numbers
✅ 6. Factorial
✅ 7. Prime Number Check
✅ 8. Reverse Number
✅ 9. Palindrome Number
✅ 10. Fibonacci Series
✅ 11. Armstrong Number
✅ 12. Pattern Printing