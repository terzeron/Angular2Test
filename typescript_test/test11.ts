[1,2,3,4,5]
.filter(function(x) {
    return x % 2 === 0;
})
.forEach(function(x) {
    console.log(x);
});

[1,2,3,4,5]
.filter(x => x % 2 === 0)
.forEach(x => console.log(x));
