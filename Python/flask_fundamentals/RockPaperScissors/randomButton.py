from random import randint
def randomButton():
    random_ = randint(1,3)
    if random_ == 1:
        random_ = rock
        return rock
    elif random_ == 2:
        random_ = paper
        return  paper
    elif random_ == 3:
        random_ = scissor
        return scissor

randomButton()
