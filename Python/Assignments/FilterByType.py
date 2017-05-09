# integer greater or smaller than 100
data = -25
def intGreaterOrSmaller(data):
    if data >= 100:
        print "That's a big number!"
    else:
        print "That's a small number"
intGreaterOrSmaller(data)

# program to test if If the string is greater than or equal to 50 characters
str = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
def strLength(str):
    if len(str) >= 50:
        print "Long sentence."
    else:
        print "Short sentence."
strLength(str)

# the length of the list is greater than or equal to 10
aL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
def arrLength(aL):
    if len(aL) >= 10:
        print "Big list!"
    else:
        print "Short list."
arrLength(aL)
