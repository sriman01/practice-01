def top():
    n = 1
    while n < 10:
        sq = n * n
        yield sq
        n += 1


values = top()

print(next(values))
print(next(values))

# for i in values:
#     print(i)