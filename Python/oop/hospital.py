class Hospital(object):
    def __init__(self, name, capacity):
        self.name = name
        self.patients = []
        self.capacity = capacity
        self.full_beds = 100
    def admit_patient(self, newpat):
        if self.full_beds >= 500:  
            print "I'm sorry, but the hospital is full."
        else:
            print "You have been admitted to the hospital"
            self.patients.append(newpat)
            newpat.bed_number = self.full_beds
            self.full_beds += 1
        return self
    def discharge_patient(self, curedpat):
        self.full_beds -= 1
        self.patients.remove(curedpat)
        curedpat.bed_number = 0
        return self
    def hospital_info(self):
        print self.name
        print self.capacity
        print self.full_beds
hosp1 = Hospital("Sacred Heart", 500)

class Patient(Hospital):
    def __init__(self, id, pname, allergies):
        self.id = id
        self.pname = pname
        self.allergies = allergies
        self.bed_number = 0
    def patient_info(self):
        print self.id
        print self.pname
        print self.allergies
        print self.bed_number

patient1 = Patient(2387561, "Norman Osborne", "None")

hosp1.admit_patient(patient1).hospital_info()
patient1.patient_info()
hosp1.discharge_patient(patient1).hospital_info()
patient1.patient_info()