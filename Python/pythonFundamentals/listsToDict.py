def makeDict(list1, list2):
    new_dict = zip(list1, list2)
    print new_dict
makeDict(["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"],["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"])

def hackerChallenge(list1, list2):
    if len(list1) >= len(list2):
        new_dict = zip(list1, list2)
        print new_dict
    else:
        new_dict = zip(list2, list1)
        print new_dict
hackerChallenge(["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"],["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"])