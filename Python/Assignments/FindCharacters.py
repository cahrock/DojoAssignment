# find a character in a list

l = ['hello','world','my','name','is','Anna']
char = 'o'

def findChar(l, char):
    arr =[]
    for i in range(0, len(l)):
        if char in l[i]:
            arr.append(l[i])
    print arr

findChar(l, char)
