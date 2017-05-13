class Hospital(object):
    def __init__(self):
        self.patients = []
        self.name = 'Holly Cross'
        self.capacity = 100

    def admit(self):
        if len(self.patients) > self.capacity:
            return "Sorry the Hospital is full"
        else :
            # self.patients.append(numPatient)
            self.capacity = self.capacity - 1
            return self.capacity

    # def roomAvailable(self):
    #     room = self.admit
    #     return "Available room: ", room

    def discharge(self, id):
        self.patients.pop(id)
        self.capacity += 1

class Patient(object):
    def __init__(self, name, allergy):
        self.id = id
        self.name = name
        self.allergy = allergy
        self.bed_num = None
        self.room = Hospital().admit()

    def roomAvailable(self):
        room = self.admit
        return "Available room: ", room

    def display_info(self):
        print  "Number of availabel room :", self.room
        print "Patient name: ", self.name
        print "Allergy: ", self.allergy
        print "Bed number: ", self.bed_num
        return self

patient1 = Patient('Donald Trump', 'Pollen')
patient1.display_info()

patient2 = Patient('Jim Comey', 'Peanut')
patient2.display_info()
