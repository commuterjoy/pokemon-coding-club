Teaching my (6 year old son) how to code.

----

Make some Pikachus,

```
p1 = pikachu();
p2 = pikachu();
p3 = pikachu();
```

Rotate a Pokemon,

```
rotate(p1)
```

Increase the health points of a Pokemon, 

```
addHealth(p1, 50)
```

Or increase the health points of a batch of Pokemon by '50',

```
forEach(addHealth, [p1, p2, p3], 50)
```

A little game where we get 5 seconds to pick which Pikachu will randomly flip,

```
after(seconds(2), randomlyFlip, p1, p2, p3)
```

... and reset it,


```
forEach(stand, [p1, p2, p3])
```
