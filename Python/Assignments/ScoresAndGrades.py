# Function Scores and Crades
import random

def scoresAndGrades():

    for i in range(0,10):
        random_num = random.randint(60, 100)    # Pick a random number between 1 and 100.
        # random_number checks for grade
        # Score: 60 - 69; Grade - D Score: 70 - 79; Grade - C Score: 80 - 89; Grade - B Score: 90 - 100; Grade - A
        if random_num >= 90 and random_num <= 100:
            print "Score: " + str(random_num) + "; Your grade is A exellent"
        elif random_num >= 80 and random_num <= 89 :

            print "Score: " + str(random_num) + "; Your grade is B"
        elif random_num >= 70 and random_num <= 79:
            print "Score: " + str(random_num) + "; Your grade is C"
        else :
            print "Score: " + str(random_num) + "; Your grade is D (terrible)"

    return random_num

print 'Scores and Grades'
print scoresAndGrades()
print 'End of the program. Bye!'
