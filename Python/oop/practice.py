class User(object):
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = False
    def login(self):
        self.logged = True
        print self.name, "is logged in."
        return self
user1 = User("Anna Propas","anna@anna.com")
