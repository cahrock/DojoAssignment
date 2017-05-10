# a function that simulates tossing a coin 5,000 times.

import random

def coinTosses():
    # coin_head, coin_tail= 0
    # iterate random tosses from 1 - 5000 times

    countX = 0
    countY = 0
    count = 0
    for i in range(0,5000):

        # get the random tosses
        random_toss = random.random()
        randomAtt = round(random_toss) # x_rounded will be rounded down to 0
        # y_rounded = round(random_toss) # y_rounded will be rounded up to 1
        count += 1
        if randomAtt == 0:
            countX += 1
            print "Attempt #" + str(count) + " It's a head! ... Got " +  str(countX) + " so far and " + str(countY) + " tail(s) so far."
        else :
            countY += 1
            print "Attempt #" + str(count) + " It's a head! ... Got " +  str(countX) + " so far and " + str(countY) + " tail(s) so far."

    print 'Starting the program...'
    print "Attempt #", count, ": Throwing a coin... It's a head! ... Got " + str(countX) + " head(s) so far and " + str(countY) + " tail(s) so far"
    print "Ending the program, thank you!"

coinTosses()
