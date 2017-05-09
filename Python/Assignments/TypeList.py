#print("Type your list data below, such as: ['magical unicorns',19,'hello',98.98,'world']")
#data = raw_input("Your list: ")

data = ['magical unicorns',19,'hello',98.98,'world']

def typeList(data):
    newStr = ""
    sum = 0
    checkStr = 0
    checkInt = 0
    for i in data:

        if type(i) == int or type(i) == float:
            sum = sum + i
            checkInt += 1
        elif type(i) == str:
            newStr = newStr + i +" "
            checkStr += 1

    if checkInt > 0 and checkStr > 0:
        print "You have entered a mixed type of array" + "\n" +"Sum:" + str(sum) + "\n" + "String:" + newStr
    elif checkInt > 0:
        print "You have entered an array of integer type" + "\n" + "Sum: " + str(sum)
    else :
        print "You have entered a string array"+ "\n" +"String: " + newStr

typeList(data)
