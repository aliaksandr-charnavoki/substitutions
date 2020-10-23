## Sprout Therapy Assignment

`substitution.js` - contains single method `assign`. It calculates values of H and K 
according to incoming values A, B, C, D.

### Set of rules:

Base  
```A && B && !C => H = M  
A && B && C => H = P  
!A && B && C => H = T  
[other] => [error]  
H = M => K = D + (D * E / 10)  
H = P => K = D + (D * (E - F) / 25.5)  
H = T => K = D - (D * F / 30)  
```

Custom 1
```
H = P => K = 2 * D + (D * E / 100)
``` 

Custom 2
```
A && B && !C => H = T
A && !B && C => H = M
H = M => K = F + D + (D * E / 100)
```


`index.html` - entry point and UI
