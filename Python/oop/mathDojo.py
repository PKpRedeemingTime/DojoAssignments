class MathDojo(object):
    def __init__(self):
        self.result = 0
    def add(self, *x):
        for count in range(0,len(x)):
            self.result += x[count]
        return self
    def subtract(self, *y):
        sum = 0
        for count in range(0,len(y)):
            sum += y[count]
        self.result -= sum
        return self
    def result():
        return result
md = MathDojo()

print md.add(2).add(2,5).subtract(3,2).result

class MathDojo(object):
    def __init__(self):
        self.result = 0
    def add(self, *tup):
        for x in range(len(tup)):
            if isinstance(tup[x], list):
                for i in range(len(tup[x])):
                    self.result += tup[x][i]
            else:
                self.result += tup[x]
        return self
    def subtract(self, *tup1):
        sum = 0
        for x in range(len(tup1)):
            if isinstance(tup1[x], list):
                for i in range(len(tup1[x])):
                    sum += tup1[x][i]
            else:
                sum += tup1[x]
        self.result -= sum
        return self
    def result():
        return result

nd = MathDojo()

print nd.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result

class MathDojo(object):
    def __init__(self):
        self.result = 0
    def add(self, *tup):
        for x in range(len(tup)):
            if isinstance(tup[x], tuple):
                if isinstance(tup[x], list):
                    for i in range(len(tup[x])):
                        self.result += tup[x][i]
                else:
                    for n in range(len(tup[x])):
                        self.result += tup[x][n]
            elif isinstance(tup[x], list):
                    for i in range(len(tup[x])):
                        self.result += tup[x][i]
            else:
                self.result += tup[x]
        return self
    def subtract(self, *tup1):
        sum = 0
        for x in range(len(tup1)):
            if isinstance(tup1[x], tuple):
                if isinstance(tup1[x], list):
                    for i in range(len(tup1[x])):
                        sum += tup1[x][i]
                else:
                    for i in range(len(tup[x])):
                        sum += tup1[x][i]
            if isinstance(tup1[x], list):
                    for i in range(len(tup1[x])):
                        sum += tup1[x][i]
            else:
                sum += tup1[x]
        self.result -= sum
        return self
    def result():
        return result

rd = MathDojo()

print rd.add([1],3,4).add((1,2,3),[3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result