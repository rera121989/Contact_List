var db = connect('/name');

print('* Database Created');

db.names.insert({'name': 'Don Draper'});

allMadMen = db.names.find();

print('* Documents created');