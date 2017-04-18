var Pokemon = connect('/name');

print('* Database Created');

Pokemon.names.insert(	{'name': 'Pikachu', 'hitpoints': '20pts'}, 
						{'name': 'Squirtle', 'hitpoints': '22pts'},
						{'name': 'Charmander', 'hitpoints': '25pts'}, 
						{'name': 'Bulbasaur', 'hitpoints': '23pts'},
						);

allPokemon = Pokemon.names.find();

Pokemon.names.remove({name: 'Bulbasaur'},{name: 'Squirtle'});

Pokemon.names.update({hitpoints: '20'},{hitpoints: '22'});
Pokemon.names.update({hitpoints: '25'},{hitpoints: '26'});
allPokemon = Pokemon.names.find();

Pokemon.names.find({name: 'Pikachu'});


print('* Pokemon Created');