# Stars assignment
# Part - 1 function draw_stars()

x = [4, 6, 1, 3, 5, 7, 25]

def drawStars(x):
    for i in range(0, len(x)):
        print ('*') * x[i]

# drawStars(x)

# Part - 2
# Allow a list containing integers and strings to be passed to the draw_stars() function.

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def drawStarsName(x):
    stars = []
    for i in range(0, len(x)):
        if type(x[i]) == str:
            print x[i][0].lower() * len(x[i])
        else:
            print ('*') * x[i]


print drawStarsName(x)
