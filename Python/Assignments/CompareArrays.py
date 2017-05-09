list1= [1,2,5,6,2]
list2 = [1,2,5,6,3,3]


def compareArrays(list1, list2):
    if len(list1) == len(list2):
        countI = 0
        count = 0
        for i in range(0, len(list1)) :
            if list1[i] != list2[i]:
                count +=1
            else:
                countI += 1

        if count > 0:
            print "They are not identical"
        else:
            print "They are identical"
    else:
        print "The arrays are not identical"

compareArrays(list1, list2)
