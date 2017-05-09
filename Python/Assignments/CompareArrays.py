list1= [1,2,5,6,2]
list2 = [1,2,5,6,3,3]


def compareArrays(list1, list2):
    if len(list1) == len(list2): # excellent fast fail!
        countI = 0 # What purpose does this variable serve?
        count = 0
        for i in range(0, len(list1)) :
            if list1[i] != list2[i]:
                count +=1 # if at any time elements in the array don't match exactly, what could do you here rather than later? Do you need to keep on checking?
            else:
                countI += 1

        if count > 0:
            print "They are not identical" # if the above code gets modified to stop, do you ever have to check if it gets past the above stop?
        else:
            print "They are identical"
    else:
        print "The arrays are not identical"

compareArrays(list1, list2)
