students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

for val in students:
    print val['first_name'],val['last_name']

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

x = 1
print "Students"
for val in users['Students']:
    print x,"-",val['first_name'],val['last_name'],"-",(len(val['first_name']) + len(val['last_name']))
    x += 1
x = 1
print "Instructors"
for val in users['Instructors']:
    print x,"-",val['first_name'],val['last_name'],"-",(len(val['first_name']) + len(val['last_name']))
    x += 1
