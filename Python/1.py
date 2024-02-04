# s = '   abcde   '

# s = s.upper()

# print(s)


# a = [x for x in range(10)]
# print(a)


# q = list("string")
# print(q)

# class Fraction:

#     counter = 1
#     d = 9
#     def __init__(self, a, b):
#         self.num = a
#         self.den = b
    

#     def __str__(self):
#         return "{}/{}".format(self.num, self.den)
    
#     def __add__(self, other):
#         n = self.num * other.den + other.num * self.den
#         d = self.den * other.den

#         return "{} / {}".format(n, d)

    
#     @staticmethod
#     def get():
#         return "{} * {}".format(Fraction.counter, Fraction.d)
    
# A = Fraction(10, 19)
# B = Fraction(11, 10)
# print(A)

# print(A.get())

# print(A + B)



class A:
    def __init__(self):
        self.a = 10

    def __show__(self):
        print(self.a)


class B(A):
    def __init__(self):
        super().__init__()
        self.b = 10
    
    def display(self):
        print(self.a)


obj1 = B()

obj1.display()
